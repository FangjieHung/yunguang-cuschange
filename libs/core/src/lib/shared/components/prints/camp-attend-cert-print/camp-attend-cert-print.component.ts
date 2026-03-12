/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { BBDBaseComponent } from '../../bbd-base.component';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'bbd-camp-attend-cert-print',
  templateUrl: './camp-attend-cert-print.component.html',
  styleUrls: ['./camp-attend-cert-print.component.scss']
})
export class CampAttendCertPrintComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: any = inject(NZ_MODAL_DATA);

  private _modal = inject(NzModalRef);

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
