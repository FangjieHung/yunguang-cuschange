/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  CustOrderRefundDto, CustOrderRefundReq, CustOrderRefundStatuses,
  CustOrderRefundContentJto, BankAccountJto,
  PayTypeIds, PayTypeReq, PayTypeStatuses, PayTypeView
} from '@core/models';
import { CustOrderApiServ, SharedDataApiServ } from '@core/services';

@Component({
  selector: 'cms-cust-order-refund-edit',
  templateUrl: './cust-order-refund-edit.component.html',
  styleUrls: ['./cust-order-refund-edit.component.scss'],
})
export class CustOrderRefundEditComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { id: number } = inject(NZ_MODAL_DATA);
  private _fb = inject(UntypedFormBuilder);
  private _modal = inject(NzModalRef);
  private _sharedDataApiServ = inject(SharedDataApiServ);
  custOrderApiServ = inject(CustOrderApiServ);

  private _id = 0;
  valForm!: UntypedFormGroup;
  editDto = new CustOrderRefundDto();
  contentJto = new CustOrderRefundContentJto();
  payTypes: PayTypeView[] = [];
  isLoading = false;

  get f() { return this.valForm.controls; }

  get isPending(): boolean {
    return +this.editDto.status === +CustOrderRefundStatuses.待退款;
  }

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doFormInit();
    this.loadPayTypes();
    this.doDataInit();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      refundAt: [null],
      handlerName: [''],
      payTypeId: [0],
      bankAccount: this._fb.group({
        bankName: [''],
        branchName: [''],
        accountNo: [''],
        accountName: [''],
      }),
      memo: [''],
    });
  }

  doDataInit(): void {
    this._id = this.modalData?.id || 0;
    if (!this._id) return;

    this.isLoading = true;
    this.custOrderApiServ.getCustOrderRefundDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('找不到退費資料');
          this.doCancel();
          return;
        }

        this.editDto = res;
        this.editDto.refundAt = this.editDto.refundAt?.isMaxUtcDate() ? null : this.editDto.refundAt;
        this.contentJto = (this.editDto.content || '').length > 0
          ? JSON.parse(this.editDto.content || '{}')
          : new CustOrderRefundContentJto();
        if (!this.contentJto.bankAccount) {
          this.contentJto.bankAccount = new BankAccountJto();
        }
        this.doFormPatchValue();
      },
      error: (err) => {
        this.bbdNotifyServ.error('載入退費資料失敗', err);
        this.doCancel();
      },
    }).add(() => this.isLoading = false);
  }

  loadPayTypes(): void {
    const req = new PayTypeReq();
    req.status = +PayTypeStatuses.啟用;
    this._sharedDataApiServ.getPayTypeViews(req).subscribe({
      next: (res) => {
        this.payTypes = (res || []).filter(
          cond => cond.id >= +PayTypeIds.內部金流_最小值 && cond.id <= +PayTypeIds.內部金流_最大值
        );
      },
      error: (err) => {
        this.bbdNotifyServ.error('載入付款方式失敗', err);
      },
    });
  }

  doFormPatchValue(): void {
    if (!this.editDto) return;
    this.valForm.patchValue({
      refundAt: this.editDto.refundAt,
      handlerName: this.editDto.handlerName,
      payTypeId: this.editDto.payTypeId,
      bankAccount: {
        bankName: this.contentJto.bankAccount?.bankName || '',
        branchName: this.contentJto.bankAccount?.branchName || '',
        accountNo: this.contentJto.bankAccount?.accountNo || '',
        accountName: this.contentJto.bankAccount?.accountName || '',
      },
      memo: this.contentJto.memo || '',
    });
  }

  doCancel(): void {
    this._modal.destroy(null);
  }

  private canSubmit(): void {
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error('送出失敗');
    }
    if (!this.editDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error('送出失敗');
    }

    const formVal = this.valForm.value;
    this.editDto.refundAt = formVal.refundAt;
    this.editDto.handlerName = formVal.handlerName;
    this.editDto.payTypeId = formVal.payTypeId;

    const selected = this.payTypes.find(p => p.id === formVal.payTypeId);
    if (selected) {
      this.editDto.payTypeCode = selected.code;
      this.editDto.payTypeName = selected.name;
    }

    this.contentJto.bankAccount = formVal.bankAccount;
    this.contentJto.memo = formVal.memo;
    this.editDto.content = JSON.stringify(this.contentJto);
  }

  onCompleteRefund(): void {
    const payTypeId = this.valForm.get('payTypeId')?.value;
    if (!payTypeId) {
      this.bbdNotifyServ.error('請選擇付款方式');
      return;
    }

    this.modalServ.confirm({
      nzTitle: '確定要完成退費？',
      nzContent: '完成後，退費狀態將變更為已退款。',
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOnOk: () => {
        const formVal = this.valForm.value;
        const req = new CustOrderRefundReq();
        req.id = this._id;
        req.refundAt = formVal.refundAt;
        req.payTypeId = formVal.payTypeId;
        req.contentJto = new CustOrderRefundContentJto();
        req.contentJto.bankAccount = formVal.bankAccount;
        req.contentJto.memo = formVal.memo;

        this.spinnerServ.show();
        this.custOrderApiServ.completeCustOrderRefund(req).subscribe({
          next: (success) => {
            if (success) {
              this.bbdNotifyServ.success('完成退費成功');
              this._modal.destroy('completed');
            } else {
              this.bbdNotifyServ.error('完成退費失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          },
        }).add(() => this.spinnerServ.hide());
      },
    });
  }

  onRevertToPending(): void {
    this.modalServ.confirm({
      nzTitle: '確定要退回待退費？',
      nzContent: '退回後，退費狀態將變更為待退款。',
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.spinnerServ.show();
        this.custOrderApiServ.revertCustOrderRefundToPending(this._id).subscribe({
          next: (success) => {
            if (success) {
              this.bbdNotifyServ.success('退回待退費成功');
              this._modal.destroy('reverted');
            } else {
              this.bbdNotifyServ.error('退回待退費失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          },
        }).add(() => this.spinnerServ.hide());
      },
    });
  }

  onSaveChanges(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.custOrderApiServ.setCustOrderRefundDto(this.editDto).subscribe({
      next: (res) => {
        if (res) {
          this.bbdNotifyServ.success('儲存變更成功');
          this._modal.destroy('saved');
        } else {
          this.bbdNotifyServ.error('儲存變更失敗');
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
}
