import { Component, OnInit, Injector } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AppUserApiServ } from '@core/services';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetPasswordComponent extends BBDBaseComponent implements OnInit {

  constructor(
    protected override injector: Injector) {
      super(injector);
  }
  
  ngOnInit(): void {
    console.log('');
  }
}
/*
export class ForgetPasswordComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '取得新密碼';
  valForm!: UntypedFormGroup;
  // editDto = new ForgetPasswordReq();
  editDto: any;
  isSubmited = false;
  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    private appUserApiServ: AppUserApiServ,
    private fb: FormBuilder,
    protected override injector: Injector) {
    super(injector);
    this.getCaches();
    this.doFormInit();
  }

  ngOnInit(): void {
    console.log('init');
    // this.editDto.appPfm = AppPfms.APP;
  }
  getCaches(): void {
    // getCaches
  }
  doFormInit(): void {
    this.valForm = this.fb.group({
      account: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
    });
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.appUserApiServ.forgetStorePassword(this.f['account'].value).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`${this.actionName}失敗，請再重試一次。`);
          return;
        }
        this.isSubmited = true;
        this.bbdNotifyServ.success(`${this.actionName}成功。請至信箱確認新密碼，並登入後修改新密碼`);
      },
      error: (err) => {
        this.bbdNotifyServ.error(`操作失敗: 錯誤訊息：「${err?.errorMessage}」`);
      },
    }).add(() => this.spinnerServ.hide());
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
      this.bbdNotifyServ.errorByFormValid('送出失敗，請確認是否有欄位尚未填寫。', null, this.valForm.controls);
      throw new Error("送出失敗");
    }
  }
}
*/