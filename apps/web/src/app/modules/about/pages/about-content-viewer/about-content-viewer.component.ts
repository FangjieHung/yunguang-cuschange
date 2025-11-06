import { Component, inject, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppObjectStoreCodes } from '@core/models';
import { AppStoreApiServ } from '@core/services';

@Component({
  selector: 'web-about-content-viewer',
  templateUrl: './about-content-viewer.component.html',
  styleUrls: ['./about-content-viewer.component.scss']
})
export class AboutContentViewerComponent extends BBDBaseComponent implements OnInit {
  private _appObjectApiServ = inject(AppStoreApiServ);
  private _router = inject(Router);

  content = '';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    const currUrl = this._router.url || '';
    if (currUrl.startsWith('/about/charter')) {
      this._appObjectApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.關於學會)
        .subscribe({
          next: (res) => {
            if (!res) {
              this.content = '';
              return;
            }

            this.content = res?.charter || '';
          },
          error: (err) => {
            this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
          },
        });
    }

    if (currUrl.startsWith('/about/privacy') || currUrl.startsWith('/about/terms')) {
      this._appObjectApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.網站條款設定檔)
        .subscribe({
          next: (res) => {
            if (!res) {
              this.content = '';
              return;
            }

            if (currUrl.includes('privacy'))
              this.content = res?.privacy || '';
            else
              this.content = res?.terms || '';
          },
          error: (err) => {
            this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
          },
        });
    }
  }


}
