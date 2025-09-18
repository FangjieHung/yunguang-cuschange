import { Component, Injector, OnInit } from '@angular/core';
import { AppObjectStoreCodes, AppPageWebsiteSettingDto } from '@core/models';
import { AppStoreApiServ } from '@core/services';
import { trigger, transition, style, animate } from '@angular/animations';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class FooterComponent extends BBDBaseComponent implements OnInit {
  currentYear = new Date().getFullYear();
  websiteSetting = new AppPageWebsiteSettingDto();

  isChatOpen = false;

  constructor(
    private _appStoreApiServ: AppStoreApiServ,
    protected override injector: Injector) {
    super(injector);
    this.getCaches();
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  closeChat(): void {
    this.isChatOpen = false;
  }

  ngOnInit(): void {
    console.log();
  }

  getCaches(): void {
    // combineLatest(
    //   [
    //     this._appStoreApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.頁面_網站設定),
    //   ]
    // ).subscribe(([websiteSetting,]) => {
    //   this.websiteSetting = websiteSetting;
    // });
  }
}
