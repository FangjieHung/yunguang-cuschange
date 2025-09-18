import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppUserEditComponent } from '../app-user-edit/app-user-edit.component';
import {
  PagingRequest,
  PagingResponse,
  AppUserReq,
  AppUserView,
} from '@core/models';
import { AppUserApiServ } from '@core/services';

@Component({
  selector: 'cms-app-user',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.scss'],
})
export class AppUserListComponent extends BBDBaseComponent implements OnInit {
  // Properties
  request = new PagingRequest<AppUserReq>();
  response: PagingResponse<AppUserView> | null = null;
  dataLoading = false;
  dataSource: AppUserView[] = [];

  // Caches
  statuses$ = this.appUserApiServ.getAppUserStatuses();
  statusInfos$ = this.appUserApiServ.getAppUserStatusInfos();

  constructor(
    private appUserApiServ: AppUserApiServ,
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch()
  }

  doParamsInit(): void {
    this.request.queryRequest = new AppUserReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doOpenEdit(view?: AppUserView): void {
    this.modalServ.create({
      nzTitle: (view) ? '編輯使用者' : '新增使用者',
      nzMaskClosable: false,
      nzContent: AppUserEditComponent,
      nzData: {
        id: view?.id
      }
    })
    .afterClose
    .subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  doSearch(): void {
    this.doParamsReset();
    this.dataLoading = true;
    // this.appUserApiServ.getAppUserViewsPaging(this.request).subscribe({
    //   next: (res) => {
    //     if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
    //       this.messageServ.success('查無任何資料。');
    //       return;
    //     }
    //     this.response = res;
    //     this.dataSource = [...this.response.rows];
    //   },
    //   error: (err) => {
    //     this.notificationServ.error(
    //       '查詢失敗',
    //       `錯誤訊息：「${err?.error?.errorMessage}」`
    //     );
    //   }
    // }).add(() => this.dataLoading = false);
  }

  onCreate(): void {
    this.doOpenEdit();
  }

  onUpdate(view: AppUserView): void {
    this.doOpenEdit(view);
  }

  onEnable(view: AppUserView): void {
    this.modalServ.confirm({
      nzTitle: `您確定要啟用「${ view.account }」使用者嗎？`,
      nzContent: '啟用後，將可正常登入後台。',
      nzOnOk: () => {
        this.spinnerServ.show();
        this.appUserApiServ.enableAppUser(view.id).subscribe({
          next: (res) => {
            if (!res) {
              this.notificationServ.error(
                '啟用失敗',
                `錯誤訊息：「發生未預期性例外錯誤，請再試一次。」`
              );
              return;
            }

            this.messageServ.success('啟用成功。');
            this.doSearch();
          },
          error: (err) => {
            this.notificationServ.error(
              '啟用失敗',
              `錯誤訊息：「${err?.error?.errorMessage}」`
            );
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  onDisable(view: AppUserView): void {
    this.modalServ.confirm({
      nzTitle: `您確定要停用「${ view.account }」使用者嗎？`,
      nzContent: '停用後，使用者將無法登入後台。',
      nzOnOk: () => {
        this.spinnerServ.show();
        this.appUserApiServ.disableAppUser(view.id)
        .subscribe({
          next: (res) => {
            if (!res) {
              this.notificationServ.error(
                '停用失敗',
                `錯誤訊息：「發生未預期性例外錯誤，請再試一次。」`
              );
              return;
            }

            this.messageServ.success('停用成功。');
            this.doSearch();
          },
          error: (err) => {
            this.notificationServ.error(
              '停用失敗',
              `錯誤訊息：「${err?.error?.errorMessage}」`
            );
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  onPageIndexChange(idx: number): void {
    this.onSearch(idx);
  }

  onSearch(pageIdx = 1): void {
    this.request.pageIndex = pageIdx;
    this.doSearch();
  }

}
