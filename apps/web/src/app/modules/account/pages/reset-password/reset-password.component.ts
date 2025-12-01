/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent, Validation } from '@core/shared';
import { ResetPasswordReq } from '@core/models';
import { AppUserApiServ } from '@core/services';

@Component({
  selector: 'web-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})

export class ResetPasswordComponent extends BBDBaseComponent implements OnInit {
  private _fb = inject(FormBuilder);
  appUserApiServ = inject(AppUserApiServ);

  valForm!: UntypedFormGroup;
  editDto = new ResetPasswordReq();
  passwordHide = true;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    protected override injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.doFormInit();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      oldPassword: [null, [Validators.required, Validators.maxLength(128)]],
      newPassword: [null, [Validators.required, Validators.maxLength(128)]],
      confirmNewPassword: [null, [Validators.required, Validators.maxLength(128)]]
    }, {
      validators: [
        Validation.match('newPassword', 'confirmNewPassword')
      ]
    });
  }
  doFormPatchValue(): void {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
  }

  canSubmit() {
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
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.appUserApiServ.changeCurrAppUserPassword(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`修改會員資料失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`修改會員資料成功。`);
        this.valForm.reset();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
}
