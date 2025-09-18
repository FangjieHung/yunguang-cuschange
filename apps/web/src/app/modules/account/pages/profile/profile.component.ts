/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector, inject } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDto, UploadFormReq } from '@core/models';
import { AppAttachApiServ, CustomerApiServ } from '@core/services';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent extends BBDBaseComponent implements OnInit {
  private appAttachApiServ = inject(AppAttachApiServ);
  readonly actionName = '個人資訊修改';
  valForm!: UntypedFormGroup;
  editDto = new CustomerDto();
  uploadFormReq = new UploadFormReq();
  imgFiles: any;
  imgUrl = '';
  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    public customerApiServ: CustomerApiServ,
    private _fb: FormBuilder,
    private _router: Router,
    protected override injector: Injector,
  ) {
    super(injector);
    this.doFormInit();
  }
  ngOnInit(): void {
    this.doDataInit();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      nameEn: [null, [Validators.maxLength(50)]],
      nickname: [null, [Validators.maxLength(20)]],
      mobile: [null, [Validators.maxLength(12)]],
      phone: [null, [Validators.maxLength(12)]],
      phoneExt: [null, [Validators.maxLength(8)]],
      zipCodeId: [null,],
      addr: [null, [Validators.maxLength(100)]],
    });
  }
  doFormPatchValue(): void {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
  }

  doDataInit() {
    // update
    this.spinnerServ.show();
    this.customerApiServ.getCurrCustomerDto().subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無權限取得個人資訊。');
          this._router.navigate(['/']);
          return;
        }

        this.editDto = res;
        // this.doMaxDateTrans(true);
        this.doFormPatchValue();
        // this.getImgUrl();
      },
      error: (err) => {
        this.bbdNotifyServ.error(`查詢失敗: 錯誤訊息：「${err?.errorMessage}」`);
      },
    }).add(() => this.spinnerServ.hide());
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.customerApiServ.uploadCurrCustomerDto(this.uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`${this.actionName}失敗，請再重試一次。`);
          return;
        }
        // this.editDto = res;
        this.doDataInit();
        this.bbdNotifyServ.success(`${this.actionName}成功。`);
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
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    if (!this.editDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    Object.assign(this.editDto, this.valForm.value);
    this.doDtoToForm();
    // this.doMaxDateTrans();
  }

  doDtoToForm(): void {
    this.uploadFormReq = new UploadFormReq();
    // 圖片上傳
    if (this.imgFiles) {
      this.uploadFormReq.append('file', this.imgFiles[0]);
    }

    this.uploadFormReq.jsonContent = JSON.stringify(this.editDto);
    Object.entries(this.uploadFormReq).forEach(([key, value]) => {
      this.uploadFormReq.append(key, value);
    });
  }

  getImgUrl(): void {
    if (!this.editDto.avatarAttId || this.editDto.avatarAttId <= 0)
      return;

    this.appAttachApiServ.getAppFileAttObjectUrl(this.editDto.avatarAttId)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.imgUrl = '';
            return;
          }

          this.imgUrl = res;
        }
      });
  }
}
