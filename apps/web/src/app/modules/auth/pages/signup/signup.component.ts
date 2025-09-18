import { Component, Injector, OnInit } from '@angular/core';

// Third party packages
import SwiperCore, { FreeMode, Thumbs, Pagination, Autoplay } from 'swiper';
SwiperCore.use([FreeMode, Thumbs, Pagination, Autoplay]);

// Custom packages
import { BBDBaseComponent } from '@core/shared';
// MatchValidator
//import { UntypedFormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
//import { CustomerApiServ } from '@core/services';
//import { CustomerDto, CustomerTypes } from '@core/models';
//import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
/*
export class SignupComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '註冊帳號';
  next: string | null = null;
  valForm!: UntypedFormGroup;
  editDto = new CustomerDto();
  editDtoRes = '';
  isSuccess = false;
  isSubmit = false;
  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    public customerApiServ: CustomerApiServ,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    protected override injector: Injector) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    console.log('Init signup home');
    this.doRouteMap();
  }

  doRouteMap(): void {
    this.route.queryParamMap.subscribe(params => {
      this.next = this.route.snapshot.queryParamMap.get('next');
    });
  }

  doFormInit(): void {
    this.valForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern(/^[0-9]\d*$/)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: [
        MatchValidator.match('password', 'confirmPassword')
      ]
    });
    // this.f['type'].setValue(CustomerTypes.個人信箱 || null);
    // this.f['type'].setValue(CustomerTypes.校友); by demo
  }

  onSubmit(): void {
    this.canSubmit();
    this.isSubmit = true;
    this.spinnerServ.show();
    this.customerApiServ.signupStoreCustomerDto(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`${this.actionName}失敗，請再重試一次。`);
          this.isSubmit = false;
          return;
        }
        this.editDtoRes = res;
        this.isSuccess = true;
        this.bbdNotifyServ.success(`${this.actionName}成功。`);
        this.doNavDefUrl();
      },
      error: (err) => {
        this.isSubmit = false;
        this.bbdNotifyServ.error(`操作失敗: 錯誤訊息：「${err?.errorMessage}」`);
      },
    }).add(() => this.spinnerServ.hide());
  }

  canSubmit() {
    this.spinnerServ.show();
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      this.spinnerServ.hide();
      throw new Error("送出失敗");
    }
    if (!this.editDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      this.spinnerServ.hide();
      throw new Error("送出失敗");
    }

    Object.assign(this.editDto, this.valForm.value);
    this.transEditDto();
  }

  transEditDto(): void {
    this.editDto.type = CustomerTypes.個人;
    this.editDto.checkoutType = 0;
    this.editDto.uniqueId = this.editDto.email || '';
  }

  doNavDefUrl(): void {
    if (this.next) {
      this.router.navigate(['auth/signin'], { queryParams: { next: this.next } });
    } else {
      this.router.navigate(['auth/signin']);
    }
  }
}
*/
export class SignupComponent extends BBDBaseComponent implements OnInit {

  constructor(
    protected override injector: Injector) {
      super(injector);
  }
  
  ngOnInit(): void {
    console.log('');
  }
}