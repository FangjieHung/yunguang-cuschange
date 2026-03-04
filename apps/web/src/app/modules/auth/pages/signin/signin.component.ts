import { Component, OnInit, Injector } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { SigninReq } from '@core/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BBDBaseComponent implements OnInit {
  // Properties
  signinReq: SigninReq = new SigninReq();
  validateForm!: UntypedFormGroup;
  hidePassword = true;
  next: string | null = null;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.validateForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    protected override injector: Injector) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    if (this.isSignin) {
      this.bbdNotifyServ.success('您已登入狀態，無需再登入');
      this.doNavDefUrl();
      return;
    }
    this.doRouteMap();
  }

  doFormInit() {
    this.validateForm = this.fb.group({
      account: [null, [Validators.required, Validators.maxLength(15)]],
      password: [null, [Validators.required]]
    });
    this.f['account'].valueChanges.subscribe(value => {
      if (!value)
        return;

      this.f['account'].setValue(String(value).trim().toUpperCase(), { emitEvent: false });
    });
  }

  doNavDefUrl(): void {
    if (this.next) {
      // navigate 無法使用queryParams 字串改用 navigateByUrl
      this.router.navigateByUrl(this.next);
    } else {
      this.router.navigate(['/']);
    }
  }

  doRouteMap(): void {
    this.route.queryParamMap.subscribe(() => {
      this.next = this.route.snapshot.queryParamMap.get('next');
    });
  }

  canSubmit(): boolean {
    if (this.validateForm.valid === false) {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return false;
    }

    Object.assign(this.signinReq, this.validateForm.value);
    return true;
  }

  onSubmit() {
    if (this.canSubmit() === false) {
      return;
    }

    this.spinnerServ.show();
    this.appAuthApiServ.signin(this.signinReq)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.bbdNotifyServ.error('登入失敗: 請確認您的帳號及密碼是否有效。');
            return;
          }
          this.storeServ.getCurrAuthUserCache();
          this.bbdNotifyServ.success('登入成功。');
          this.doNavDefUrl();
        },
        error: (err) => {
          this.appAuthApiServ.signout();
          this.bbdNotifyServ.error('登入失敗: 請確認您的帳號及密碼是否有效。', err);
        }
      }).add(() => this.spinnerServ.hide());
  }
}
