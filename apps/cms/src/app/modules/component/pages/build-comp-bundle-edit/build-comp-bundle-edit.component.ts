/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

// Custom packages
import {

  CorpReq,
  CorpView,
  BuildCompBundleDto,
  UploadFormReq,
  BuildComponentReq,
  BuildComponentView,
  BuildCompBundleDtlDto,
} from '@core/models';
import { AppAttachApiServ, BuildProjectApiServ, CorpApiServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { List } from 'linqts';
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'cms-build-comp-bundle-edit',
  templateUrl: './build-comp-bundle-edit.component.html',
  styleUrls: ['./build-comp-bundle-edit.component.scss']
})

export class BuildCompBundleEditComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { id: number, actionName: string } = inject(NZ_MODAL_DATA);
  _id = 0;
  valForm!: UntypedFormGroup;
  uploadFormReq = new UploadFormReq();
  editDto = new BuildCompBundleDto();
  corpOpts: CorpView[] = [];
  buildComponentOpts: BuildComponentView[] = [];

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
      this.editDto = new BuildCompBundleDto();
      this.doFormPatchValue();
      return;
    }
    // update
    this.buildProjectApiServ.getBuildCompBundleDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          this.doCancel();
          return;
        }

        this.editDto = res;
        this.doBindDateParse(true);
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
    this.getBuildComponentViews();
  }

  getBuildComponentViews(): void {
    this.spinnerServ.show();
    const buildComponentReq = new BuildComponentReq();
    if (this.f['corpId'].value > 0) {
      buildComponentReq.isShowBundle = true;
      buildComponentReq.corpId = this.f['corpId'].value;
    } else {
      buildComponentReq.isShowBundle = false;
      buildComponentReq.corpId = 0;
    }
    this.buildProjectApiServ.getBuildComponentViews(buildComponentReq).subscribe({
      next: (res) => {
        if (!res?.length) {
          this.bbdNotifyServ.success('查無元件資料資料，請先建立元件。');
          return;
        }
        this.buildComponentOpts = res;
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  onCorpIdChange(event: MatSelectChange): void {
    this.bbdNotifyServ.warning('因權限控管，已清空元件組合設定。');
    this.editDto.details = [];
    this.getBuildComponentViews();
  }

  doCancel(): void {
    this.modal.destroy();
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.buildProjectApiServ.setBuildCompBundleDto(this.editDto).subscribe({
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

    const isDtlInvalid = new List<BuildCompBundleDtlDto>(this.editDto.details || []).Where(w => {
      if (!w?.buildCompId) {
        return true;
      }
      return false;
    }).Any();
    if (isDtlInvalid) {
      this.bbdNotifyServ.error('送出失敗，元件組合必須選擇元件。');
      throw new Error("送出失敗");
    }
    this.do1stBindJsonContent();
    this.doBindDateParse();
  }

  do1stBindJsonContent(): void {
    Object.assign(this.editDto, this.valForm.value);
    // Object.assign(this.contentJto, this.f['contentJto'].value);
    // this.editDto.content = JSON.stringify(this.contentJto);
  }
  doBindDateParse(isInit = false): void {
    if (isInit) {
      // this.editDto.appUserEndAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.appUserEndAt);
    } else {
      // this.editDto.appUserEndAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.appUserEndAt);
    }
  }

  addDetail(): void {
    if (!this.editDto.details) {
      this.editDto.details = [];
    }
    const dto = new BuildCompBundleDtlDto();
    this.editDto.details.push(dto);
  }
  removeDetail(idx: number): void {
    if (!this.editDto.details) return;
    this.editDto.details.splice(idx, 1);
  }
}

