import { Component, inject, Injector, OnInit } from '@angular/core';

// Third party packages
import { List } from 'linqts';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  AppObjectStore, AppObjectStoreCodes, OrgContactJto
} from '@core/models';
import { AppStoreApiServ } from '@core/services';

@Component({
  selector: 'cms-org-contact-edit',
  templateUrl: './org-contact-edit.component.html',
  styleUrls: ['./org-contact-edit.component.scss'],
})

export class OrgContactEditComponent extends BBDBaseComponent implements OnInit {
  private _appStoreApiServ = inject(AppStoreApiServ);

  // Properties
  appObjectStore = new AppObjectStore();
  editObj = new OrgContactJto();

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
    this._appStoreApiServ.getAppObjectStoreByCode(AppObjectStoreCodes.學會聯絡方式設定檔).subscribe({
      next: (res) => {
        if (!res) {
          this.appObjectStore = new AppObjectStore();
          this.editObj = new OrgContactJto();
          return;
        }

        this.appObjectStore = res;
        this.editObj = this.appObjectStore.value.isUndefinedOrNullOrEmpty() ? null : JSON.parse(this.appObjectStore.value);
        if(!this.editObj) {
          this.appObjectStore = new AppObjectStore();
          this.editObj = new OrgContactJto();
          return;
        }

        this.editObj.contactDetails = new List(this.editObj.contactDetails || []).OrderBy(cond => cond.sort).ToArray();
        this.editObj.socialMedia = new List(this.editObj.socialMedia || []).OrderBy(cond => cond.sort).ToArray();
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
