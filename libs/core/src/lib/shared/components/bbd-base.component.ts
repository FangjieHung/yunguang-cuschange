import { inject, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Antd packages
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

// Third party packages
import { NgxSpinnerService } from 'ngx-spinner';

// Custom packages
import '../extensions/array.extension';
import '../extensions/date.extension';
import '../extensions/string.extension';
import { APP_ENV, DateHelper, FormHelper } from '../helpers';
import { AppAuthApiServ, StoreServ } from '../../services';
import { AppEnv, AppTokenInfo, AuthUserInfo } from '../../models';
import { BBDNotifyService } from './bbd-notify/bbd-notify.service';

export abstract class BBDBaseComponent {
  protected readonly platformId = inject(PLATFORM_ID);

  // Antd services
  protected drawerServ: NzDrawerService;
  protected messageServ: NzMessageService;
  protected modalServ: NzModalService;
  protected notificationServ: NzNotificationService;
  protected bbdNotifyServ: BBDNotifyService;

  // Third party services
  protected spinnerServ: NgxSpinnerService;

  // Custom services
  protected appAuthApiServ: AppAuthApiServ;
  protected storeServ: StoreServ;

  // Porperties
  appEnv: AppEnv;
  formHelper = FormHelper;
  dateHelper = DateHelper;

  // Gets & Sets
  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  get isSignin(): boolean {
    return this.appAuthApiServ.isSignin;
  }

  get currAccessToken(): AppTokenInfo | null {
    return this.appAuthApiServ.getAccessToken();
  }

  get currUserInfo(): AuthUserInfo | null {
    return this.appAuthApiServ.getCurrUser();
  }

  constructor(protected injector: Injector) {
    this.appEnv = injector.get(APP_ENV);
    this.appAuthApiServ = injector.get(AppAuthApiServ);
    this.drawerServ = injector.get(NzDrawerService);
    this.messageServ = injector.get(NzMessageService);
    this.modalServ = injector.get(NzModalService);
    this.notificationServ = injector.get(NzNotificationService);
    this.spinnerServ = injector.get(NgxSpinnerService);
    this.storeServ = injector.get(StoreServ);
    this.bbdNotifyServ = injector.get(BBDNotifyService);
  }

  // Funcs
  public combineDownloadAttUrl(attId: number): string {
    return `${this.appEnv.apiServer}${this.appEnv.downloadUrl}/${attId}`;
  }

  public combineCdnUrl(filePath: string): string {
    if (!filePath || filePath.isUndefinedOrNullOrEmpty())
      return '';
    return `${this.appEnv.cdnServer}${filePath.startsWith('/') ? '' : '/'}${filePath}`;
  }
}
