/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector } from '@angular/core';
import { format } from 'date-fns';
import { BBDBaseComponent } from '../../bbd-base.component';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'bbd-payment-receipt-print',
  templateUrl: './payment-receipt-print.component.html',
  styleUrls: ['./payment-receipt-print.component.scss']
})
export class PaymentReceiptPrintComponent extends BBDBaseComponent {
  readonly modalData: any = inject(NZ_MODAL_DATA);

  private _modal = inject(NzModalRef);

  readonly printDate = format(new Date(), 'yyyy/MM/dd');

  printStyle = {
    '@page': {
      size: 'A4 portrait',
      margin: '10mm'
    },
  };

  constructor(
    protected override injector: Injector
  ) {
    super(injector);
  }

  doCancel(): void {
    this._modal.destroy();
  }
}
