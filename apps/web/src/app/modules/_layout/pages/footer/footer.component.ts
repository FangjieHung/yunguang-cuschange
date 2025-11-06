import { Component, inject, Injector, OnInit } from '@angular/core';


// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppObjectStoreCodes, OrgContactJto } from '@core/models';
import { AppStoreApiServ } from '@core/services';

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends BBDBaseComponent implements OnInit {
  private _appStoreApiServ = inject(AppStoreApiServ);

  currYear = (new Date()).getFullYear();
  response: OrgContactJto | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doDataInit();
  }

  doDataInit(): void {
    this._appStoreApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.學會聯絡方式設定檔).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }

        this.response = res;
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    });
  }

}
