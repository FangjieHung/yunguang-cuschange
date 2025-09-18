/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import {
  CorpDto,
} from '@core/models';
import { CorpApiServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

interface ICorpEditModaldData {
  id: number;
  actionName: string;
}

@Component({
  selector: 'cms-corp-edit',
  templateUrl: './corp-edit.component.html',
  styleUrls: ['./corp-edit.component.scss']
})

export class CorpEditComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: ICorpEditModaldData = inject(NZ_MODAL_DATA);

  _id = 0;
  valForm!: UntypedFormGroup;
  editDto = new CorpDto();
  // custCatOpts: CustCatView[] = [];

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    public corpApiServ: CorpApiServ,
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
    // const custCatReq = new CustCatReq();
    // this.spinnerServ.show();
    // forkJoin(
    //   [this.customerApiServ.getCustCatViews(custCatReq),]
    // ).subscribe(([custCatViews]) => {
    //   this.custCatOpts = [...custCatViews || []];
    // }).add(() => this.spinnerServ.hide());
  }

  doFormInit(): void {
    this.valForm = this.fb.group({
      taxId: [null, [Validators.required, Validators.maxLength(10)]],
      name: [null, [Validators.required, Validators.maxLength(50)]],
      zipCodeId: [null,],
      addr: [null, [Validators.maxLength(100)]],
      cpName: [null, [Validators.maxLength(20)]],
      cpMobile: [null, [Validators.maxLength(12)]],
      cpPhone: [null, [Validators.maxLength(12)]],
      cpPhoneExt: [null, [Validators.maxLength(8)]],
      // contentJto: this.fb.group({
      //   accStd: [null],
      // })
    }, {
      validators: [
        // MatchValidator.dateLessThan('startAt', 'endAt', 'endAt')
      ]
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;

    // add
    if (!this._id) {
      this.editDto = new CorpDto();
      this.doFormPatchValue();
      return;
    }
    // update
    this.corpApiServ.getCorpDtoById(this._id).subscribe({
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
    this.corpApiServ.setCorpDto(this.editDto).subscribe({
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
      // this.editDto.endAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.endAt);
    } else {
      // this.editDto.endAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.endAt);
    }
  }
}

