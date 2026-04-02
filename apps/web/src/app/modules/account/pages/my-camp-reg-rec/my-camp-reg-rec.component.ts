import { Component, inject, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CampRegReq, CampRegView
} from '@core/models';
import { CampaignApiServ, CommerceApiServ } from '@core/services';
import { CampAttendCertPrintComponent } from '@core/shared';

@Component({
  selector: 'app-my-camp-reg-rec',
  templateUrl: './my-camp-reg-rec.component.html',
  styleUrls: ['./my-camp-reg-rec.component.scss'],
})
export class MyCampRegRecComponent extends BBDBaseComponent implements OnInit {
  private _commerceApiServ = inject(CommerceApiServ);
  private _router = inject(Router);
  campaignApiServ = inject(CampaignApiServ);

  nowAt = new Date();
  isLoading = true;
  dataSource: CampRegView[] = [];
  request = new PagingRequest<CampRegReq>();
  response: PagingResponse<CampRegView> | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new CampRegReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doScrollToTop() {
    if (!this.isBrowser)
      return;
    window.scrollTo({ top: 0 });
  }

  onGoPayment(custOrderId: number): void {
    this.spinnerServ.show();
    this._commerceApiServ.getAioCheckoutFormHtml(custOrderId).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`付款失敗，請再重試一次。`);
          return;
        }
        if ((res.postReq || '').isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.error(`付款失敗，請再重試一次。`);
          return;
        }

        this._commerceApiServ.postReq = res.postReq;
        console.log('go');
        this._router.navigate(['/result/payment-redirect']);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  onPrintCert(item: CampRegView): void {
    this.modalServ.create({
      nzTitle: '參加證明',
      nzContent: CampAttendCertPrintComponent,
      nzData: { campRegId: item.id },
      nzWidth: '80%',
      nzFooter: null,
      nzMaskClosable: true
    });
  }

  onCancelReg(item: CampRegView): void {
    this.spinnerServ.show();
    this.campaignApiServ.cancelCampReg(item.id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('取消報名失敗，請再重試一次。');
          return;
        }
        this.bbdNotifyServ.success('取消成功。');
        this.onSearch(this.request.pageIndex);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();

    this.spinnerServ.show();
    this.campaignApiServ.getCampRegViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
}
