/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { BBDBaseComponent } from '../../bbd-base.component';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { CampRegReq, CampRegView, CampaignContentJto } from '../../../../models';
import { CampaignApiServ } from '../../../../services';

@Component({
  selector: 'bbd-camp-attend-cert-print',
  templateUrl: './camp-attend-cert-print.component.html'
})
export class CampAttendCertPrintComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { campRegId: number } = inject(NZ_MODAL_DATA);
  private _modal = inject(NzModalRef);
  private _campaignApiServ = inject(CampaignApiServ);

  rocYear: number;
  regView: CampRegView | null = null;
  contentJto = new CampaignContentJto();

  printStyle = {
    '@page': {
      size: 'A4 portrait',
      margin: '0'
    },

    'body': {
      '-webkit-print-color-adjust': 'exact',
      'print-color-adjust': 'exact'
    }
  };

  constructor(protected override injector: Injector) {
    super(injector);
    this.rocYear = new Date().getFullYear() - 1911;
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  doDataInit(): void {
    if (!this.modalData?.campRegId) return;

    const req = new CampRegReq();
    req.id = this.modalData.campRegId;
    req.isShowCampContent = true;

    this._campaignApiServ.getCampRegView(req).subscribe({
      next: (res) => {
        if (!res) return;
        this.regView = res;
        this.contentJto = (res.campContent || '').isUndefinedOrNullOrEmpty()
          ? new CampaignContentJto()
          : JSON.parse(res.campContent || '{}');
      },
      error: (err) => {
        this.bbdNotifyServ.error('取得資料失敗', err);
      }
    });
  }

  doCancel(): void {
    this._modal.destroy();
  }
}
