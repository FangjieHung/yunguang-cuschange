/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignView } from '@core/models';
import { CampaignApiServ } from '@core/services';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent extends BBDBaseComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _campaignApiServ = inject(CampaignApiServ);

  private _uniqueId = '';
  response: CampaignView | null = null;
  contentInfo: any;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._uniqueId = params.get('uniqueId') || '';
      this.doDataInit();
    });
  }

  doDataInit(): void {
    this._campaignApiServ.getCampaignViewByUniqueId(this._uniqueId)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.onGoHome();
            return;
          }

          this.response = res;
          this.contentInfo = JSON.parse(this.response.content || '{}');
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
