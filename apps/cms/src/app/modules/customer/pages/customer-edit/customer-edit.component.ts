/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import {

  CorpReq,
  CorpView,
  CustomerDto,
} from '@core/models';
import { AppUserApiServ, CorpApiServ, CustomerApiServ } from '@core/services';
import { BBDBaseComponent, Validation } from '@core/shared';
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'cms-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})

export class CustomerEditComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { id: number, actionName?: string } = inject(NZ_MODAL_DATA);

  _id = 0;
  valForm!: UntypedFormGroup;
  editDto = new CustomerDto();
  corpOpts: CorpView[] = [];
  passwordHide = true;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    public corpApiServ: CorpApiServ,
    public appUserApiServ: AppUserApiServ,
    public customerApiServ: CustomerApiServ,
    private modal: NzModalRef,
    private fb: FormBuilder,
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
    this.doFormInit();
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  getCaches(): void {
    this.spinnerServ.show();
    forkJoin(
      [this.corpApiServ.getCorpViews(new CorpReq()),]
    ).subscribe(([corpOpts]) => {
      this.corpOpts = [...corpOpts || []];
    }).add(() => this.spinnerServ.hide());
  }

  doFormInit(): void {
    this.valForm = this.fb.group({
      corpId: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      nameEn: [null, [Validators.maxLength(50)]],
      nickname: [null, [Validators.maxLength(20)]],
      mobile: [null, [Validators.maxLength(12)]],
      phone: [null, [Validators.maxLength(12)]],
      phoneExt: [null, [Validators.maxLength(8)]],
      zipCodeId: [null,],
      addr: [null, [Validators.maxLength(100)]],
      appUserStartAt: [null, [Validators.required]],
      appUserEndAt: [null],
      appUserStatus: [null, [Validators.required]],
      password: ['', [Validators.maxLength(64)]],
      virtualConfirmPassword: [''],
      // contentJto: this.fb.group({
      //   accStd: [null],
      // })
    }, {
      validators: [
        Validation.match('password', 'virtualConfirmPassword')
      ]
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;

    // add
    if (!this._id) {
      this.editDto = new CustomerDto();
      this.doFormPatchValue();
      return;
    }
    // update
    this.customerApiServ.getCustomerDtoById(this._id).subscribe({
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
    this.modal.destroy();
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.customerApiServ.setCustomerDto(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`新增${this.modalData?.actionName || ''}失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(this._id ? `修改${this.modalData?.actionName || ''}成功。` : `新增${this.modalData?.actionName || ''}成功。`);
        this.modal.destroy(true);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
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
    // Object.assign(this.contentJto, this.f['contentJto'].value);
    // this.editDto.content = JSON.stringify(this.contentJto);
    this.doDateParse();
  }

  doDateParse(isInit = false): void {
    if (isInit) {
      this.editDto.appUserEndAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.appUserEndAt);
    } else {
      this.editDto.appUserEndAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.appUserEndAt);
    }
  }

  onEnableCustCat(id: number): void {
    // this.modalServ.confirm({
    //   nzTitle: '<i>您確認要「變更狀態」?</i>',
    //   nzContent: '<b>狀態變更為「啟用」</b>',
    //   nzOnOk: () => {
    //     this.spinnerServ.show();
    //     this.customerApiServ.enableCustCat(id).subscribe({
    //       next: (res) => {
    //         if (!res) {
    //           this.bbdNotifyServ.error(`操作失敗，請再重試一次。`);
    //           return;
    //         }
    //         this.bbdNotifyServ.success(`狀態更新成功。`);
    //         this.modal.destroy(true);
    //       },
    //       error: (err) => {
    //         this.bbdNotifyServ.error('執行失敗', err);
    //       },
    //     }).add(() => this.spinnerServ.hide());
    //   }
    // });
  }

  onDisableCustCat(id: number): void {
    // this.modalServ.confirm({
    //   nzTitle: '<i>您確認要「變更狀態」?</i>',
    //   nzContent: '<b>狀態變更為「停用」</b>',
    //   nzOnOk: () => {
    //     this.spinnerServ.show();
    //     this.customerApiServ.disableCustCat(id).subscribe({
    //       next: (res) => {
    //         if (!res) {
    //           this.bbdNotifyServ.error(`操作失敗，請再重試一次。`);
    //           return;
    //         }
    //         this.bbdNotifyServ.success(`狀態更新成功。`);
    //         this.modal.destroy(true);
    //       },
    //       error: (err) => {
    //         this.bbdNotifyServ.error('執行失敗', err);
    //       },
    //     }).add(() => this.spinnerServ.hide());
    //   }
    // });
  }
}

