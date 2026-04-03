import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

import { BBDBaseComponent } from '@core/shared';
import { SponsorDto, SponsorStatuses, UploadFormReq } from '@core/models';
import { AppMsgApiServ } from '@core/services';

@Component({
  selector: 'cms-sponsor-edit',
  templateUrl: './sponsor-edit.component.html',
  styleUrls: ['./sponsor-edit.component.scss'],
})
export class SponsorEditComponent extends BBDBaseComponent implements OnInit {
  private _modal = inject(NzModalRef);
  private _fb = inject(FormBuilder);
  appMsgApiServ = inject(AppMsgApiServ);
  readonly modalData: { id: number } = inject(NZ_MODAL_DATA);

  _id = 0;
  valForm!: UntypedFormGroup;
  editDto = new SponsorDto();
  logoImgUrl = '';
  imgFiles: File[] = [];

  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(protected override injector: Injector) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(100)]],
      desc: [null, [Validators.maxLength(150)]],
      startAt: [null, [Validators.required]],
      endAt: [null],
      status: [null, [Validators.required]],
      sort: [0, [Validators.required]]
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;
    // add
    if (!this._id) {
      this.editDto = new SponsorDto();
      this.editDto.startAt = new Date();
      this.editDto.status = +SponsorStatuses.啟用;
      this.doFormPatchValue();
      return;
    }
    // update
    this.appMsgApiServ.getSponsorDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          this.doCancel();
          return;
        }

        this.editDto = res;
        if (this.editDto?.logoFullPath?.isUndefinedOrNullOrEmpty() == false) {
          this.logoImgUrl = this.combineCdnUrl(this.editDto.logoFullPath);
        }

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
  }

  onLogoFileSelected(file: File | null) {
    if (file) {
      this.imgFiles = [file];
    } else {
      this.imgFiles = [];
    }
  }

  onSubmit(): void {
    this.canSubmit();

    const uploadFormReq = new UploadFormReq();
    if (this.imgFiles) {
      uploadFormReq.append('file', this.imgFiles[0]);
    }

    uploadFormReq.jsonContent = JSON.stringify(this.editDto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show();
    this.appMsgApiServ.uploadSponsorDto(uploadFormReq).subscribe({
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
