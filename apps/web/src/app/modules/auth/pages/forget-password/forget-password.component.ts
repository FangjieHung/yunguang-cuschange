import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { ForgetPasswordReq } from '@core/models';
import { AppUserApiServ } from '@core/services';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetResetPasswordComponent extends BBDBaseComponent implements OnInit {
  private _fb = inject(FormBuilder);
  private _appUserApiServ = inject(AppUserApiServ);

  // Properties
  request = new ForgetPasswordReq();
  valForm!: UntypedFormGroup;
  isCompleted = false;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    protected override injector: Injector) {
      super(injector);
  }

  ngOnInit(): void {
    this.doFormInit();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      account: [null, [Validators.required, Validators.maxLength(100)]],
    });
    this.f['account'].valueChanges.subscribe((res) => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res)
        this.f['account'].setValue(upperStr, { emitEvent: false });
    });
  }

  doFormPatchValue(): void {
    if (!this.request) {
      return;
    }
    this.valForm.patchValue(this.request);
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
    if (!this.request) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    Object.assign(this.request, this.valForm.value);
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this._appUserApiServ.forgetPassword(this.request).subscribe({
        next: (res) => {
          if (!res) {
            this.bbdNotifyServ.error(`寄發失敗，請再重試一次。`);
            return;
          }
          this.bbdNotifyServ.success(`寄發成功。`);
          this.isCompleted = true;
        },
        error: (err) => {
          this.bbdNotifyServ.error('執行失敗', err);
        },
      }).add(() => this.spinnerServ.hide());
  }


}
