import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Antd packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { BBDBaseComponent, Validation } from '@core/shared';
import { AppNewsMsgDto, AppNewsMsgContentJto, AppNewsMsgStatuses } from '@core/models';
import { AppMsgApiServ } from '@core/services';

@Component({
  selector: 'cms-app-news-msg',
  templateUrl: './app-news-msg-edit.component.html',
  styleUrls: ['./app-news-msg-edit.component.scss'],
})
export class AppNewsMsgEditComponent extends BBDBaseComponent implements OnInit {
  private _modal = inject(NzModalRef);
  private _fb = inject(FormBuilder);
  appMsgApiServ = inject(AppMsgApiServ);
  readonly modalData: { id: number } = inject(NZ_MODAL_DATA);

  _id = 0;
  valForm!: UntypedFormGroup;
  editDto = new AppNewsMsgDto();

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    protected override injector: Injector) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  // getCaches(): void { }

  doFormInit(): void {
    this.valForm = this._fb.group({
      type: [null, [Validators.required]],
      title: [null, [Validators.maxLength(100)]],
      startAt: [null, [Validators.required]],
      endAt: [null],
      status: [null, [Validators.required]],
      contentJto: this._fb.group({
        desc: [null]
      })
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;
    // add
    if (!this._id) {
      this.editDto = new AppNewsMsgDto();
      this.editDto.startAt = new Date();
      this.editDto.status = +AppNewsMsgStatuses.發佈;
      this.doFormPatchValue();
      return;
    }
    // update
    this.appMsgApiServ.getAppNewsMsgDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          this.doCancel();
          return;
        }

        this.editDto = res;
        this.editDto.contentJto = (this.editDto.content || '').isUndefinedOrNullOrEmpty() ? new AppNewsMsgContentJto() : JSON.parse(this.editDto.content || '{}');
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
    this._modal.destroy();
  }

  doDateParse(isInit = false): void {
    if (isInit) {
      this.editDto.endAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.endAt);
    } else {
      this.editDto.endAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.endAt);
    }
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
    if (this.editDto.endAt)
      this.editDto.endAt = this.editDto.endAt.getEndOfDay();
    this.doDateParse();
    this.editDto.content = JSON.stringify(this.editDto.contentJto);
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.appMsgApiServ.setAppNewsMsgDto(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`新增失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(this._id ? `修改成功。` : `新增成功。`);
        this._modal.destroy(true);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
}
