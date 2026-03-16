/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { BBDBaseComponent } from '../../bbd-base.component';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'bbd-payment-407-receipt-print',
  templateUrl: './payment-407-receipt-print.component.html',
  styleUrls: ['./payment-407-receipt-print.component.scss']
})
export class Payment407ReceiptPrintComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: any = inject(NZ_MODAL_DATA);

  private _modal = inject(NzModalRef);

  printStyle = {
    '@page': {
      size: 'A4 portrait',
      margin: '10mm'
    }
  };

  readonly printDate = format(new Date(), 'yyyy/MM/dd');

  constructor(
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

  doCancel(): void {
    this._modal.destroy();
  }
}
