/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Custom packages
import {

  CorpReq,
  CorpView,
  BuildComponentDto,
  UploadFormReq,
} from '@core/models';
import { AppAttachApiServ, BuildProjectApiServ, CorpApiServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'cms-build-comp-edit',
  templateUrl: './build-comp-edit.component.html',
  styleUrls: ['./build-comp-edit.component.scss']
})

export class BuildCompEditComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { id: number, actionName?: string } = inject(NZ_MODAL_DATA);

  _id = 0;
  valForm!: UntypedFormGroup;
  uploadFormReq = new UploadFormReq();
  editDto = new BuildComponentDto();
  corpOpts: CorpView[] = [];
  // atts
  compFileAttFiles: File[] = [];
  thumbnailAttFiles: File[] = [];
  fileViewFile: any | null = null;
  thumbnailAttUrl: string | null = null;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    public appAttachApiServ: AppAttachApiServ,
    public corpApiServ: CorpApiServ,
    public buildProjectApiServ: BuildProjectApiServ,
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
      name: [null, [Validators.required, Validators.maxLength(50)]],
      compType: [null, [Validators.required, Validators.maxLength(50)]],
      // contentJto: this.fb.group({
      //   accStd: [null],
      // })
    }, {
      validators: [
        // Validation.match('password', 'virtualConfirmPassword')
      ]
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;

    // add
    if (!this._id) {
      this.editDto = new BuildComponentDto();
      this.doFormPatchValue();
      return;
    }
    // update
    this.buildProjectApiServ.getBuildComponentDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          this.doCancel();
          return;
        }

        this.editDto = res;
        this.doBindDateParse(true);
        this.doFormPatchValue();
        this.loadPreviewUrls();
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
    this.buildProjectApiServ.uploadBuildComponentDto(this.uploadFormReq).subscribe({
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
    this.do1stBindJsonContent();
    this.doBindDateParse();
    this.doBindAttUploadForm();
  }

  do1stBindJsonContent(): void {
    Object.assign(this.editDto, this.valForm.value);
    // Object.assign(this.contentJto, this.f['contentJto'].value);
    // this.editDto.content = JSON.stringify(this.contentJto);
  }
  doBindAttUploadForm(): void {
    this.uploadFormReq = new UploadFormReq();
    // 檔案處理與索引
    let fileIndex = 0;
    if (this.compFileAttFiles.length > 0) {
      this.uploadFormReq.append('file', this.compFileAttFiles[0]);
      this.editDto.compFileIndex = fileIndex++;
      this.editDto.compFileUploadName = this.compFileAttFiles[0].name;
    } else {
      this.editDto.compFileIndex = null;
    }

    if (this.thumbnailAttFiles.length > 0) {
      this.uploadFormReq.append('file', this.thumbnailAttFiles[0]);
      this.editDto.thumbFileIndex = fileIndex++;
    } else {
      this.editDto.thumbFileIndex = null;
    }

    this.uploadFormReq.jsonContent = JSON.stringify(this.editDto);

    // Tip:防止Dto擴充物件無法送出
    Object.entries(this.uploadFormReq).forEach(([key, value]) => {
      this.uploadFormReq.append(key, value);
    });
  }
  doBindDateParse(isInit = false): void {
    if (isInit) {
      // this.editDto.appUserEndAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.appUserEndAt);
    } else {
      // this.editDto.appUserEndAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.appUserEndAt);
    }
  }

  onCompFileSelected(file: File | null) {
    if (file) {
      this.compFileAttFiles = [file];
      this.editDto.compFileUploadName = file.name;
    } else {
      this.compFileAttFiles = [];
      this.editDto.compFileUploadName = '';
      this.editDto.compFileAttId = 0;
    }

  }
  onThumbFileSelected(file: File | null) {
    if (file) {
      this.thumbnailAttFiles = [file];
    } else {
      this.thumbnailAttFiles = [];
      this.editDto.thumbnailAttId = 0;
    }
  }

  loadPreviewUrls(): void {
    // 附件預覽（假設已經有 compAttId 可呼叫）
    if (this.editDto.compFileAttId) {
      this.appAttachApiServ.downloadAppFileAtt(this.editDto.compFileAttId)
        .subscribe(res => {
          this.fileViewFile = res;
        });
    }
    // 圖片預覽
    if (this.editDto.thumbnailAttId && this.editDto.thumbnailAttId > 0) {
      this.appAttachApiServ.getAppFileAttObjectUrl(this.editDto.thumbnailAttId)
        .subscribe(res => {
          this.thumbnailAttUrl = res;
        });
    }
  }
}

