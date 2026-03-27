/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { BBDBaseComponent } from '../bbd-base.component';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { PayTypeIds, PayTypeReq, PayTypeStatuses, PayTypeView } from '../../../models';
import { SharedDataApiServ } from '../../../services';

@Component({
  selector: 'bbd-pay-type-select',
  templateUrl: './pay-type-select.component.html',
  styleUrls: ['./pay-type-select.component.scss']
})
export class PayTypeSelectComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: any = inject(NZ_MODAL_DATA);
  private _modal = inject(NzModalRef);
  private _sharedDataApiServ = inject(SharedDataApiServ);

  payTypes: PayTypeView[] = [];
  selectedPayTypeId: number | null = null;
  isLoading = false;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadPayTypes();
  }

  loadPayTypes(): void {
    this.isLoading = true;
    const req = new PayTypeReq();
    req.status = +PayTypeStatuses.啟用;
    this._sharedDataApiServ.getPayTypeViews(req).subscribe({
      next: (res) => {
        this.payTypes = (res || []).filter(cond => cond.id >= +PayTypeIds.內部金流_最小值 && cond.id <= +PayTypeIds.內部金流_最大值);
      },
      error: (err) => {
        this.bbdNotifyServ.error('載入付款方式失敗', err);
      }
    }).add(() => this.isLoading = false);
  }

  doConfirm(): void {
    if (!this.selectedPayTypeId) return;
    const selected = this.payTypes.find(p => p.id === this.selectedPayTypeId);
    this._modal.destroy(selected);
  }

  doCancel(): void {
    this._modal.destroy(null);
  }
}
