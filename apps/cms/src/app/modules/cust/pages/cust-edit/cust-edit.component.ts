/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import { forkJoin } from 'rxjs';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustGroupDto, CustMemberDto, CustomerDto } from '@core/models';
import { AppUserApiServ, CustApiServ } from '@core/services';
import { CustGroupControlComponent } from '../../../../shared/controls/cust-group-control/cust-group-control.component';
import { CustMemberControlComponent } from '../../../../shared/controls/cust-member-control/cust-member-control.component';

@Component({
  selector: 'cms-cust-edit',
  templateUrl: './cust-edit.component.html',
  styleUrls: ['./cust-edit.component.scss']
})

export class CustEditComponent extends BBDBaseComponent implements OnInit {
  @ViewChild(CustGroupControlComponent) groupCtrl!: CustGroupControlComponent;
  @ViewChild(CustMemberControlComponent) memberCtrl!: CustMemberControlComponent;
  readonly modalData: { id: number, type: number, actionName?: string } = inject(NZ_MODAL_DATA);

  private _fb = inject(FormBuilder);
  private _modal = inject(NzModalRef);
  appUserApiServ = inject(AppUserApiServ);
  custApiServ = inject(CustApiServ);

  private _id = 0;
  type = 0;
  valForm!: UntypedFormGroup;
  editDto = new CustomerDto();
  passwordHide = true;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    protected override injector: Injector) {
    super(injector);
    // this.getCaches();
    this.doFormInit();
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  // getCaches(): void { }

  doFormInit(): void {
    this.valForm = this._fb.group({
      account: [null, [Validators.required, Validators.maxLength(10)]],
      appUserStartAt: [null, [Validators.required]],
      appUserEndAt: [null],
      appUserStatus: [null, [Validators.required]],
      password: ['', [Validators.maxLength(64)]],
      confirmPassword: [''],
      type: [null, [Validators.required]],
      code: [null, [Validators.maxLength(8)]],
      startAt: [null, [Validators.required]],
      endAt: [null],
      expAt: [null],
      status: [null, [Validators.required]],
      custGroup: [null],
      custMember: [null]
    });

    this.f['type'].disable();
    this.f['expAt'].disable();
    this.f['custGroup'].valueChanges.subscribe((res) => {
      this.f['account'].setValue(res?.taxId || '', { emitEvent: false });
    });
    this.f['custMember'].valueChanges.subscribe((res) => {
      this.f['account'].setValue(res?.idNo || '', { emitEvent: false });
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;
    this.type = this.modalData?.type || 0;

    if (!this.type) {
      this.bbdNotifyServ.error('無法取得資料。');
      this.doCancel();
      return;
    }

    // add
    if (!this._id) {
      this.editDto = new CustomerDto();
      this.editDto.type = this.modalData.type;

      switch (this.type) {
        case +this.custApiServ.customerTypes.個人會員:
          this.editDto.custMember = new CustMemberDto();
          break;
        case +this.custApiServ.customerTypes.團體會員:
          this.editDto.custGroup = new CustGroupDto();
          break;
      }

      this.doFormPatchValue();
      return;
    }
    // update
    this.custApiServ.getCustomerDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          this.doCancel();
          return;
        }

        this.editDto = res;
        this.doDateParse(true);
        this.doFormPatchValue();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
        this.doCancel();
      },
    });
  }

  doFormPatchValue(): void {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
  }

  doCancel(): void {
    this._modal.destroy();
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.custApiServ.setCustomerDto(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`新增${this.modalData?.actionName || ''}失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(this._id ? `修改${this.modalData?.actionName || ''}成功。` : `新增${this.modalData?.actionName || ''}成功。`);
        this._modal.destroy(true);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  canSubmit() {
    this.groupCtrl?.markAllAsTouched();
    this.memberCtrl?.markAllAsTouched();
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    if (!this.editDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    Object.assign(this.editDto, this.valForm.value);
    // Object.assign(this.contentJto, this.f['contentJto'].value);
    // this.editDto.content = JSON.stringify(this.contentJto);
    this.doDateParse();
  }

  doDateParse(isInit = false): void {
    if (isInit) {
      this.editDto.appUserEndAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.appUserEndAt);
      this.editDto.endAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.endAt);
      this.editDto.expAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.expAt);
    } else {
      this.editDto.appUserEndAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.appUserEndAt);
      this.editDto.endAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.endAt);
      this.editDto.expAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.expAt);
    }
  }

}

