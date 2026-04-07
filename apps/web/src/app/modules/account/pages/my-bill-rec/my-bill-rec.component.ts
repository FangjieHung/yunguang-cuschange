import { Component, inject, Injector, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { subYears, startOfDay, endOfDay } from 'date-fns';
import { BBDBaseComponent, PaymentReceiptPrintComponent, Payment407ReceiptPrintComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CustOrderReq, CustOrderView
} from '@core/models';
import { CustOrderApiServ, CommerceApiServ } from '@core/services';

@Component({
  selector: 'app-my-bill-rec',
  templateUrl: './my-bill-rec.component.html',
  styleUrls: ['./my-bill-rec.component.scss'],
})
export class MyBillRecComponent extends BBDBaseComponent implements OnInit {
  private _commerceApiServ = inject(CommerceApiServ);
  private _router = inject(Router);
  custOrderApiServ = inject(CustOrderApiServ);

  isLoading = true;
  selectedYears = 1;
  dataSource: CustOrderView[] = [];
  request = new PagingRequest<CustOrderReq>();
  response: PagingResponse<CustOrderView> | null = null;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustOrderReq();
    this.doSetDateRange();
    this.doParamsReset();
  }

  doSetDateRange(): void {
    const now = new Date();
    this.request.queryRequest.startAt = startOfDay(subYears(now, this.selectedYears));
    this.request.queryRequest.endAt = endOfDay(now);
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doScrollToTop(): void {
    if (!this.isBrowser) return;
    window.scrollTo({ top: 0 });
  }

  onYearChange(years: number): void {
    this.selectedYears = years;
    this.doSetDateRange();
    this.onSearch();
  }

  onGoPayment(custOrderId: number): void {
    this.spinnerServ.show();
    this._commerceApiServ.getAioCheckoutFormHtml(custOrderId).subscribe({
      next: (res) => {
        if (!res || (res.postReq || '').isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.error(`付款失敗，請再重試一次。`);
          return;
        }
        this._commerceApiServ.postReq = res.postReq;
        this._router.navigate(['/result/payment-redirect']);
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
    this.custOrderApiServ.getCustOrderViewsPaging(this.request).subscribe({
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

  onPrint(item: CustOrderView): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let component: Type<any>;
    let title: string;

    if (item.buyerCode) {
      component = Payment407ReceiptPrintComponent;
      title = '407 繳費證明';
    } else {
      component = PaymentReceiptPrintComponent;
      title = '電子收據證明';
    }

    this.modalServ.create({
      nzTitle: title,
      nzContent: component,
      nzData: { custOrderId: item.id },
      nzWidth: '80%',
      nzFooter: null,
      nzMaskClosable: true
    });
  }
}
