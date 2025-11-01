import { Component, inject, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustEditComponent } from '../cust-edit/cust-edit.component';
import {
  PagingRequest, PagingResponse,
  CustGroupView, CustGroupReq, CustomerTypes
} from '@core/models';
import { AppUserApiServ, CustApiServ, SharedDataServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-cust-group-list',
  templateUrl: './cust-group-list.component.html',
  styleUrls: ['./cust-group-list.component.scss'],
})
export class CustGroupListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '團體會員';

  private _sharedFuncServ = inject(SharedFuncServ);
  appUserApiServ = inject(AppUserApiServ);
  custApiServ = inject(CustApiServ);
  sharedDataServ = inject(SharedDataServ);

  dataLoading = false;
  dataSource: CustGroupView[] = [];
  request = new PagingRequest<CustGroupReq>();
  response: PagingResponse<CustGroupView> | null = null;
  // corpOpts: CorpView[] = [];

  dispCols = [
    '帳號狀態', '會員狀態', '加入日期',
    '統一編號', '團體名稱', '團體電話', '代表人', '行動電話', '電子信箱'
  ];

  constructor(
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    // this.spinnerServ.show();
    // forkJoin(
    //   [this.corpApiServ.getCorpViews(new CorpReq()),]
    // ).subscribe(([corpOpts]) => {
    //   this.corpOpts = [...corpOpts || []];
    // }).add(() => this.spinnerServ.hide());
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustGroupReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doEdit(custId = 0): void {
    this.modalServ.create({
      nzTitle: custId === 0 ? `新增${this.actionName}` : `編輯${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: CustEditComponent,
      nzData: {
        id: custId,
        type: +CustomerTypes.團體會員
      }
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onDisable(appUserId: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要停用此${this.actionName}帳號？`,
      nzContent: `停用後，該${this.actionName}帳號將無法登入！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.appUserApiServ.disableAppUser(appUserId).subscribe({
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
    })
  }

  onEnable(appUserId: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要啟用此${this.actionName}帳號？`,
      nzContent: `啟用後，該${this.actionName}帳號將可恢復登入使用！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOnOk: () => {
        this.appUserApiServ.enableAppUser(appUserId).subscribe({
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
    })
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CustGroupReq>(this.request.queryRequest);
    this.custApiServ.getCustGroupViewsPaging(this.request).subscribe({
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
