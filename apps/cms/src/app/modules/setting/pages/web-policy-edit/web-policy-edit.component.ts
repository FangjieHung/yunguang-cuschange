import { Component, inject, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  AppObjectStore, AppObjectStoreCodes, WebPolicyJto
} from '@core/models';
import { AppStoreApiServ } from '@core/services';

@Component({
  selector: 'cms-web-policy-edit',
  templateUrl: './web-policy-edit.component.html',
  styleUrls: ['./web-policy-edit.component.scss'],
})

export class WebPolicyEditComponent extends BBDBaseComponent implements OnInit {
  private _appStoreApiServ = inject(AppStoreApiServ);

  // Properties
  appObjectStore = new AppObjectStore();
  editObj = new WebPolicyJto();

  constructor(
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  doDataInit(): void {
    this.spinnerServ.show();
    this._appStoreApiServ.getAppObjectStoreByCode(AppObjectStoreCodes.網站條款設定檔).subscribe({
      next: (res) => {
        if (!res) {
          this.appObjectStore = new AppObjectStore();
          this.editObj = new WebPolicyJto();
          return;
        }

        this.appObjectStore = res;
        this.editObj = this.appObjectStore.value.isUndefinedOrNullOrEmpty() ? null : JSON.parse(this.appObjectStore.value);
        if(!this.editObj) {
          this.appObjectStore = new AppObjectStore();
          this.editObj = new WebPolicyJto();
          return;
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  canSubmit() {
    if (!this.appObjectStore || !this.editObj) {
      this.bbdNotifyServ.error('儲存失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    if (this.appObjectStore.id <= 0 || this.appObjectStore.code.isUndefinedOrNullOrEmpty()) {
      this.bbdNotifyServ.error('儲存失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    this.appObjectStore.value = JSON.stringify(this.editObj);
  }

  onSubmit() {
    this.canSubmit();
    this.spinnerServ.show();
    this._appStoreApiServ.setAppObjectStore(this.appObjectStore).subscribe({
      next: (res) => {
        if (!res) {
          this.messageServ.error('儲存失敗，請再重試一次。');
          return;
        }
        this.messageServ.success('儲存成功。');
      },
      error: (err) => {
        this.notificationServ.error(
          '執行失敗',
          `錯誤訊息：「${err?.error?.errorMessage}」`
        );
      },
    }).add(() => this.spinnerServ.hide());
  }

}
