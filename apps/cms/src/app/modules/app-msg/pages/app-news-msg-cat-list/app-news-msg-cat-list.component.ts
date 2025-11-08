import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppNewsMsgCatEditComponent } from '../app-news-msg-cat-edit/app-news-msg-cat-edit.component';
import {
  PagingRequest, PagingResponse,
  AppNewsMsgCatView, AppNewsMsgCatReq,
} from '@core/models';
import { AppMsgApiServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-app-news-msg-cat-list',
  templateUrl: './app-news-msg-cat-list.component.html',
  styleUrls: ['./app-news-msg-cat-list.component.scss'],
})
export class AppNewsMsgCatListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '消息分類';
  dataLoading = false;
  dataSource: AppNewsMsgCatView[] = [];
  request = new PagingRequest<AppNewsMsgCatReq>();
  response: PagingResponse<AppNewsMsgCatView> | null = null;
  // corpOpts: CorpView[] = [];

  dispCols = [
    '狀態', '名稱', '排序'
  ];

  constructor(
    public appMsgApiServ: AppMsgApiServ,
    private sharedFuncServ: SharedFuncServ,
    protected override injector: Injector,) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  // getCaches(): void { }

  doParamsInit(): void {
    this.request.queryRequest = new AppNewsMsgCatReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doEdit(id = 0): void {
    this.modalServ.create({
      nzTitle: id === 0 ? `新增${this.actionName}` : `編輯${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: AppNewsMsgCatEditComponent,
      nzData: {
        id: id
      }
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onDisable(id: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要停用此${this.actionName}？`,
      nzContent: `停用後，該${this.actionName}將無法在發佈消息時選用分類！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.appMsgApiServ.disableAppNewsMsgCat(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('停用成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('停用失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        });
      }
    });
  }

  onEnable(id: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要啟用此${this.actionName}？`,
      nzContent: `啟用後，該${this.actionName}將可在發佈消息時選用分類！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOnOk: () => {
        this.appMsgApiServ.enableAppNewsMsgCat(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('啟用成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('啟用失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        });
      }
    });
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this.sharedFuncServ.doQueryTimeOptimize<AppNewsMsgCatReq>(this.request.queryRequest);
    this.appMsgApiServ.getAppNewsMsgCatViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.dataLoading = false);
  }

}
