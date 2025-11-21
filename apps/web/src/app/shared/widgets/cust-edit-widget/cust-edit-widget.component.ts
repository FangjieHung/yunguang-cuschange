/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustGroupDto, CustMemberDto, CustomerDto } from '@core/models';
import { CustApiServ } from '@core/services';
import { CustGroupControlComponent, CustMemberControlComponent } from '../../controls/';

@Component({
  selector: 'web-cust-edit-widget',
  templateUrl: './cust-edit-widget.component.html',
  styleUrls: ['./cust-edit-widget.component.scss']
})
export class CustEditWidgetComponent extends BBDBaseComponent implements OnInit {
  @ViewChild(CustGroupControlComponent) groupCtrl!: CustGroupControlComponent;
  @ViewChild(CustMemberControlComponent) memberCtrl!: CustMemberControlComponent;

  private _fb = inject(FormBuilder);
  custApiServ = inject(CustApiServ);

  valForm!: UntypedFormGroup;
  editDto = new CustomerDto();
  passwordHide = true;

  // IOs & Gets & Sets
  @Input() custId = 0;
  @Input() type = 0;

  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    protected override injector: Injector
  ) {
    super(injector);
    this.doFormInit();
  }

  // Custom control required methods
  ngOnInit(): void {
    this.doDataInit();
  }

  doDataInit() {
    // Add
    if (!this.custId) {
      this.editDto = new CustomerDto();
      this.editDto.type = this.type;

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

    // Update
    this.custApiServ.getCurrCustomerDto().subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
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
      account: [null, [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.maxLength(64)]],
      confirmPassword: [''],
      type: [null, [Validators.required]],
      code: [null, [Validators.maxLength(8)]],
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
    console.log(this.valForm);
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
    if (this.custId) {
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
    } else {
      this.custApiServ.signupCustomerDto(this.editDto).subscribe({
        next: (res) => {
          if (!res) {
            this.bbdNotifyServ.error(this.custId ? `修改會員資料失敗，請再重試一次。` : `註冊會員失敗，請再重試一次。`);
            return;
          }
          this.bbdNotifyServ.success(this.custId ? `修改會員資料成功。` : `註冊會員成功。`);
        },
        error: (err) => {
          this.bbdNotifyServ.error('執行失敗', err);
        },
      }).add(() => this.spinnerServ.hide());
    }
  }

}
