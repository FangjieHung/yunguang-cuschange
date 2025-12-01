/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustomerDto } from '@core/models';
import { CustApiServ } from '@core/services';
import { CustGroupControlComponent, CustMemberControlComponent } from '../../../../shared/controls';

@Component({
  selector: 'web-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent extends BBDBaseComponent implements OnInit {
  @ViewChild(CustGroupControlComponent) groupCtrl!: CustGroupControlComponent;
  @ViewChild(CustMemberControlComponent) memberCtrl!: CustMemberControlComponent;

  private _fb = inject(FormBuilder);
  private _router = inject(Router);
  custApiServ = inject(CustApiServ);

  valForm!: UntypedFormGroup;
  editDto = new CustomerDto();
  custType = 0;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    protected override injector: Injector,
  ) {
    super(injector);
    this.doFormInit();
  }
  ngOnInit(): void {
    this.doDataInit();
  }

  doDataInit() {
    this.custApiServ.getCurrCustomerDto().subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無存取權限，請確認您的帳號是否啟用。');
          this._router.navigate(['/']);
          return;
        }

        this.custType = res.type || 0;
        if (!this.custType) {
          this.bbdNotifyServ.error('無存取權限，請確認您的帳號是否啟用。');
          this._router.navigate(['/']);
          return;
        }

        this.editDto = res;
        this.doDateParse(true);
        this.doFormPatchValue();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    });
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

  doFormInit(): void {
    this.valForm = this._fb.group({
      custGroup: [null],
      custMember: [null]
    });

    this.f['custGroup'].valueChanges.subscribe((res) => {
      this.f['account'].setValue(res?.taxId || '', { emitEvent: false });
    });
    this.f['custMember'].valueChanges.subscribe((res) => {
      this.f['account'].setValue(res?.idNo || '', { emitEvent: false });
    });
  }
  doFormPatchValue(): void {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
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
    this.doDateParse();
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.custApiServ.setCurrCustomerDto(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`修改會員資料失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`修改會員資料成功。`);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

}
