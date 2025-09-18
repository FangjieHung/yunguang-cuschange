import { Component, OnInit, Injector } from '@angular/core';
import { AppObjectStoreCodes, AppPageWebsiteSettingDto } from '@core/models';
import { AppStoreApiServ } from '@core/services';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'web-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})

export class PolicyComponent extends BBDBaseComponent implements OnInit {
  // Caches
  // settingDto$ = this.appStoreApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.頁面_網站設定);
  settingDto = new AppPageWebsiteSettingDto();

  constructor(
    private appStoreApiServ: AppStoreApiServ,
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    // this.spinnerServ.show();
    // forkJoin(
    //   [this.settingDto$]
    // ).subscribe(([settingDto]) => {
    //   this.settingDto = settingDto;
    // }).add(() => this.spinnerServ.hide());

    this.settingDto = new AppPageWebsiteSettingDto();
    this.settingDto.policy.content = '隱私權與服務政策內容';
  }
}
