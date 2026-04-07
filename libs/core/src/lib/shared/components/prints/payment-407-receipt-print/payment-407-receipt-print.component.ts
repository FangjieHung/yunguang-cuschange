/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { format, getYear } from 'date-fns';
import { BBDBaseComponent } from '../../bbd-base.component';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { CustOrderView } from '../../../../models';
import { CustOrderApiServ } from '../../../../services';

@Component({
  selector: 'bbd-payment-407-receipt-print',
  templateUrl: './payment-407-receipt-print.component.html',
  styleUrls: ['./payment-407-receipt-print.component.scss']
})
export class Payment407ReceiptPrintComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { custOrderId: number } = inject(NZ_MODAL_DATA);

  private _modal = inject(NzModalRef);
  private _custOrderApiServ = inject(CustOrderApiServ);

  printStyle = {
    '@page': {
      size: 'A4 portrait',
      margin: '10mm'
    }
  };

  readonly printDate = format(new Date(), 'yyyy/MM/dd');

  orderView: CustOrderView | null = null;
  fiscalYearTerm = '';

  get joinedItemNames(): string {
    return (this.orderView?.details)?.map(item => item.itemName).join('/') || '-';
  }

  constructor(
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  doDataInit(): void {
    if (!this.modalData?.custOrderId) return;

    this._custOrderApiServ.getCustOrderViewById(this.modalData.custOrderId).subscribe({
      next: (res) => {
        if (!res) return;
        this.orderView = res;
        if (res.payAt) {
          const rocYear = getYear(new Date(res.payAt)) - 1911;
          this.fiscalYearTerm = `${rocYear} / 1`;
        }
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
