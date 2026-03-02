/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment as env } from '../../../../../environments/environment';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignView } from '@core/models';
import { CampaignApiServ, SEOServ } from '@core/services';

@Component({
  selector: 'app-campaign-register',
  templateUrl: './campaign-register.component.html',
  styleUrls: ['./campaign-register.component.scss']
})
export class CampaignRegisterComponent extends BBDBaseComponent implements OnInit {
  private _campaignApiServ = inject(CampaignApiServ);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

  private _campUniqueId = '';
  response: CampaignView | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._campUniqueId = params.get('campUniqueId') || '';
      this.doDataInit();
    });
  }

  doDataInit(): void {
    this._campaignApiServ.getCampaignViewByUniqueId(this._campUniqueId)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.onGoHome();
            return;
          }

          this.response = res;

          // SEO tags
          const seoData = this._route.snapshot.data;
          this._seoServ.updateMetaTags(
            `${this.response.name}｜${env.siteName}`,
            `${env.siteServer}/campaign/detail/${this._campUniqueId}`,
            seoData['image'],
            this.response.name);
        },
        error: (err) => {
          this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
          this.onGoHome();
        },
      });
  }

  onGoHome(): void {
    this._router.navigate(['/']);
  }
}
