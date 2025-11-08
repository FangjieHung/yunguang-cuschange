/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

// Third party packages
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignContentJto, CampaignDto } from '@core/models';
import { CampaignApiServ } from '@core/services';

@Component({
  selector: 'cms-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})

export class CampaignEditComponent extends BBDBaseComponent implements OnInit {
  readonly modalData: { id: number, actionName?: string } = inject(NZ_MODAL_DATA);

  private _fb = inject(FormBuilder);
  private _modal = inject(NzModalRef);
  campaignApiServ = inject(CampaignApiServ);

  private _id = 0;
  valForm!: UntypedFormGroup;
  editDto = new CampaignDto();

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    protected override injector: Injector,) {
    super(injector);
    // this.getCaches();
    this.doFormInit();
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  // getCaches(): void { }

  doFormInit(): void {
    this.valForm = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(150)]],
      startAt: [null, [Validators.required]],
      startTimeAt: [''],
      endAt: [null, [Validators.required]],
      endTimeAt: [''],
      regStartAt: [null, [Validators.required]],
      regStartTimeAt: [''],
      regEndAt: [null, [Validators.required]],
      regEndTimeAt: [''],
      pricing: [null, [Validators.required]],
      salePrice: [null, [Validators.required]],
      isOpenReg: [false, [Validators.required]],
      maxRegNum: [null, [Validators.required]],
      regNum: [null],
      status: [null, [Validators.required]],
      contentJto: this._fb.group({
        speakers: [null],
        location: [null],
        hasMeal: [false, [Validators.required]],
        desc: [null]
      })
    });

    this.f['startAt'].valueChanges.subscribe(vc => {
      if (!vc) this.f['startTimeAt'].setValue('');
    });
    this.f['endAt'].valueChanges.subscribe(vc => {
      if (!vc) this.f['endTimeAt'].setValue('');
    });
    this.f['regStartAt'].valueChanges.subscribe(vc => {
      if (!vc) this.f['regStartTimeAt'].setValue('');
    });
    this.f['regEndAt'].valueChanges.subscribe(vc => {
      if (!vc) this.f['regEndTimeAt'].setValue('');
    });
  }

  doDataInit() {
    this._id = this.modalData?.id || 0;

    // add
    if (!this._id) {
      this.editDto = new CampaignDto();
      this.doFormPatchValue();
      return;
    }
    // update
    this.campaignApiServ.getCampaignDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          this.doCancel();
          return;
        }

        this.editDto = res;
        this.editDto.contentJto = (this.editDto.content || '').isUndefinedOrNullOrEmpty() ? new CampaignContentJto() : JSON.parse(this.editDto.content || '{}');
        this.doDateParse(true);
        this.doFormPatchValue();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
        this.doCancel();
      },
    });
  }

  doDateParse(isInit = false): void {
    if (isInit) {
      this.editDto.startTimeAt = this.dateHelper.getHourMinute(this.editDto.startAt);
      this.editDto.endTimeAt = this.dateHelper.getHourMinute(this.editDto.endAt);
      this.editDto.regStartTimeAt = this.dateHelper.getHourMinute(this.editDto.regStartAt);
      this.editDto.regEndTimeAt = this.dateHelper.getHourMinute(this.editDto.regEndAt);
    } else {
      this.editDto.startAt = this.dateHelper.getDateAndTimeMerge(this.editDto.startAt, this.editDto.startTimeAt);
      this.editDto.endAt = this.dateHelper.getDateAndTimeMerge(this.editDto.endAt, this.editDto.endTimeAt);
      this.editDto.regStartAt = this.dateHelper.getDateAndTimeMerge(this.editDto.regStartAt, this.editDto.regStartTimeAt);
      this.editDto.regEndAt = this.dateHelper.getDateAndTimeMerge(this.editDto.regEndAt, this.editDto.regEndTimeAt);
    }
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
    this.doDateParse();
    this.editDto.content = JSON.stringify(this.editDto.contentJto);
  }

  onSubmit(): void {
    this.canSubmit();
    this.spinnerServ.show();
    this.campaignApiServ.setCampaignDto(this.editDto).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`新增${this.modalData?.actionName || ''}失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(this._id ? `修改${this.modalData?.actionName || ''}成功。` : `新增${this.modalData?.actionName || ''}成功。`);
        this._modal.destroy(true);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
}

