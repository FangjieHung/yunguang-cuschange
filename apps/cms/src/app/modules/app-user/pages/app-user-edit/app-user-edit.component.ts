import { Component, inject, Injector, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Antd packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { BBDBaseComponent, Validation } from '@core/shared';
import { AppUserDto } from '@core/models';
import { AppUserApiServ } from '@core/services';

@Component({
  selector: 'cms-app-user',
  templateUrl: './app-user-edit.component.html',
  styleUrls: ['./app-user-edit.component.scss'],
})
export class AppUserEditComponent extends BBDBaseComponent implements OnInit, OnChanges {
  // Properties
  readonly modalData: { id: number } = inject(NZ_MODAL_DATA);
  private _id = 0;

  profileInfo?: AppUserDto | null;
  validateForm!: UntypedFormGroup;

  // Caches
  statuses$ = this.appUserApiServ.getAppUserStatuses();
  statusInfos$ = this.appUserApiServ.getAppUserStatusInfos();

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.validateForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    private appUserApiServ: AppUserApiServ,
    protected override injector: Injector
  ) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  ngOnChanges(): void {
    this.doFormReset();
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;
    this.profileInfo = null;

    if (!this._id) {
      this.profileInfo = new AppUserDto();
      this.doFormPatchValue();
      return;
    }

    // this.appUserApiServ.getAppUserDtoById(this._id).subscribe({
    //   next: (res) => {
    //     if (!res) {
    //       this.messageServ.error('無法取得使用者資料。');
    //       this.onCancel();
    //       return;
    //     }

    //     this.profileInfo = res;
    //     this.profileInfo.endAt = this.dateHelper.parseAppMaxUtcDateToNull(this.profileInfo.endAt);
    //     this.doFormPatchValue();
    //   },
    //   error: (err) => {
    //     this.notificationServ.error(
    //       '執行失敗',
    //       `錯誤訊息：「${err?.error?.errorMessage}」`
    //     );
    //     this.onCancel();
    //   },
    // });
  }

  doFormInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      account: [null, [Validators.required, Validators.maxLength(20)]],
      password: [''],
      confirmPassword: [''],
      startAt: [null, [Validators.required]],
      endAt: [null],
      status: [null, [Validators.required]]
    },
    {
      validators: [
        Validation.match('password', 'confirmPassword')
      ]
    });
  }

  doFormPatchValue(): void {
    if (!this.profileInfo) {
      return;
    }

    this.validateForm.patchValue(this.profileInfo);
  }

  doFormReset() {
    this.validateForm.reset();
  }

  canSubmit(): boolean {
    this.validateForm.markAllAsTouched();

    if (this.validateForm.valid === false) {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return false;
    }

    if (!this.profileInfo) {
      return false;
    }

    Object.assign(this.profileInfo, this.validateForm.value);
    // this.profileInfo.passwordExpAt = this.dateHelper.parseNullToAppMaxUtcDate(this.profileInfo.passwordExpAt);
    this.profileInfo.endAt = this.dateHelper.parseNullToAppMaxUtcDate(this.profileInfo.endAt);

    return true;
  }

  onCancel(): void {
    this.modal.destroy();
  }

  onSubmit() {
    if (!this.profileInfo || this.canSubmit() === false) {
      return;
    }
    this.spinnerServ.show();
    // this.appUserApiServ.setAppUserDto(this.profileInfo).subscribe({
    //   next: (res) => {
    //     if (!res) {
    //       this.messageServ.error('存檔失敗，請再重試一次。');
    //       this.modal.destroy(false);
    //       return;
    //     }

    //     this.modal.destroy(true);
    //   },
    //   error: (err) => {
    //     this.notificationServ.error(
    //       '執行失敗',
    //       `錯誤訊息：「${err?.error?.errorMessage}」`
    //     );
    //   },
    // }).add(() => this.spinnerServ.hide());

  }

}
