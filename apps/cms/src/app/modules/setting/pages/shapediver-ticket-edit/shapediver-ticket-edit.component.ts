import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  AppObjectStoreCodes,
  AppObjectStore,
  AppSettingShapediverTicketJto,
} from '@core/models';
import { AppStoreApiServ } from '@core/services';
import { forkJoin } from 'rxjs';
import { AbstractControl, FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'cms-shapediver-ticket-edit',
  templateUrl: './shapediver-ticket-edit.component.html',
  styleUrls: ['./shapediver-ticket-edit.component.scss'],
})

export class ShapediverTicketEditComponent extends BBDBaseComponent implements OnInit {
  // Properties
  readonly _pageName = '網站設定';
  validateForm!: UntypedFormGroup;

  // Caches
  appObjectStore = new AppObjectStore();
  appSettingShapediverTicketJto = new AppSettingShapediverTicketJto;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.validateForm.controls;
  }

  constructor(
    private appStoreApiServ: AppStoreApiServ,
    private fb: FormBuilder,
    protected override injector: Injector
  ) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    this.spinnerServ.show();
    forkJoin(
      [
        this.appStoreApiServ.getAppObjectStoreByCode(AppObjectStoreCodes.ShapeDiverTicketKey)
      ]
    ).subscribe(([shapeDiverTicketKey]) => {
      this.appObjectStore = shapeDiverTicketKey;
      this.doFormPatchValue();
    }).add(() => this.spinnerServ.hide());
    this.onSearch();
  }

  doFormInit(): void {
    this.validateForm = this.fb.group({
      changeModel: [null, []],
      generateOption: [null, []],
    });
  }

  doFormPatchValue(): void {
    if (!this.appObjectStore?.value) {
      return;
    }
    this.appSettingShapediverTicketJto = JSON.parse(this.appObjectStore?.value);
    this.validateForm.patchValue(this.appSettingShapediverTicketJto);
  }

  canSubmit() {
    this.validateForm.markAllAsTouched();
    if (this.validateForm.valid === false) {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      this.messageServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    if (!this.appSettingShapediverTicketJto) {
      this.messageServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    Object.assign(this.appSettingShapediverTicketJto, this.validateForm.value);
    this.appObjectStore.value = JSON.stringify(this.appSettingShapediverTicketJto);
  }

  onSubmit() {
    this.canSubmit();
    this.spinnerServ.show();
    this.appStoreApiServ.setAppObjectStore(this.appObjectStore).subscribe({
      next: (res) => {
        if (!res) {
          this.messageServ.error('存檔失敗，請再重試一次。');
          return;
        }
        this.messageServ.success('存檔成功。');
      },
      error: (err) => {
        this.notificationServ.error(
          '執行失敗',
          `錯誤訊息：「${err?.error?.errorMessage}」`
        );
      },
    }).add(() => this.spinnerServ.hide());
  }

  onSearch(): void {
    console.log('onSearch');
  }
}
