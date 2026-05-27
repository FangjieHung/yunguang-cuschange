/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment as env } from '../../../../../environments/environment';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignView } from '@core/models';
import { CampaignApiServ, SEOServ } from '@core/services';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent extends BBDBaseComponent implements OnInit {
  isLoading = false;

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);
  campaignApiServ = inject(CampaignApiServ);

  private _uniqueId = '';
  nowAt = new Date();
  response: CampaignView | null = null;
  contentInfo: any;
  currRegStatus: '' | 'loading' | 'registering' | 'registered' | 'cancelled' | 'fulled' | 'closed' = 'loading';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._uniqueId = params.get('uniqueId') || '';
      this.doDataInit();
    });

    this.storeServ.getZipCodesCache().subscribe();
  }

  doDataInit(): void {
    this.campaignApiServ.getCampaignViewByUniqueId(this._uniqueId)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.onGoHome();
            return;
          }

          this.response = res;
          this.contentInfo = JSON.parse(this.response.content || '{}');
          this.initRegStatus();

          // SEO tags
          const seoData = this._route.snapshot.data;
          this._seoServ.updateMetaTags(
            `${this.response.name}｜${env.siteName}`,
            `${env.siteServer}/campaign/detail/${this._uniqueId}`,
            seoData['image'],
            this.response.name);

          // JSON-LD: Event (AEO 信號)
          this._seoServ.injectStructuredData('page-ld', {
            '@context': 'https://schema.org',
            '@type': 'Event',
            'name': this.response.name,
            'url': `${env.siteServer}/campaign/detail/${this._uniqueId}`,
            'startDate': new Date(this.response.startAt).toISOString(),
            'endDate': new Date(this.response.endAt).toISOString(),
            'description': this.response.name,
            'image': seoData['image'],
            'eventStatus': 'https://schema.org/EventScheduled',
            'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
            'organizer': {
              '@type': 'Organization',
              '@id': 'https://tslmai.org.tw/#organization',
              'name': env.siteName,
              'url': env.siteServer
            }
          });
        },
        error: (err) => {
          this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
          this.onGoHome();
        },
      });
  }

  initRegStatus() {
    if (!this.response) {
      this.currRegStatus = '';
      return;
    }

    const campStatus = +this.response.status;
    switch (campStatus) {
      case +this.campaignApiServ.campaignStatuses.尚未開放: {
        this.currRegStatus = '';
        return;
      }
      case +this.campaignApiServ.campaignStatuses.截止: {
        if (this.response.regData && this.response.regData.id > 0 && this.response.regData.status <= +this.campaignApiServ.campRegStatuses.已報名) {
          this.currRegStatus = 'registered';
          return;
        }
        this.currRegStatus = 'closed';
        return;
      }
      case +this.campaignApiServ.campaignStatuses.額滿: {
        if (this.response.regData && this.response.regData.id > 0 && this.response.regData.status <= +this.campaignApiServ.campRegStatuses.已報名) {
          this.currRegStatus = 'registered';
          return;
        }
        this.currRegStatus = 'fulled';
        return;
      }
      case +this.campaignApiServ.campaignStatuses.報名中: {
        if (!this.response.isOpenReg && !this.isSignin) {
          this.currRegStatus = '';
          return;
        }
        if (!this.response.regData || this.response.regData.id <= 0) {
          this.currRegStatus = 'registering';
          return;
        }
        if (this.response.regData.status <= +this.campaignApiServ.campRegStatuses.已報名) {
          this.currRegStatus = 'registered';
          return;
        }
        if (this.response.regData.status >= +this.campaignApiServ.campRegStatuses.待退款) {
          this.currRegStatus = 'cancelled';
          return;
        }
        return;
      }
      default:
        this.currRegStatus = '';
        return;
    }
  }

  onCancelReg() {
    if (!this.response || !this.response.regData || this.response.regData.id <= 0) {
      this.bbdNotifyServ.error('取消報名失敗，無法取得報名資料。');
      return;
    }

    this.spinnerServ.show();
    this.campaignApiServ.cancelCampReg(this.response.regData.id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`取消報名失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`取消成功。`);
        this.doDataInit();
      },
      error: (err) => {
        // this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  onGoHome(): void {
    this._router.navigate(['/']);
  }

}
