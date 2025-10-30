import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { BannerAdEditComponent } from '../banner-ad-edit/banner-ad-edit.component';
import {
  PagingRequest, PagingResponse,
  BannerAdView, BannerAdReq,
} from '@core/models';
import { AppMsgApiServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-banner-ad-list',
  templateUrl: './banner-ad-list.component.html',
  styleUrls: ['./banner-ad-list.component.scss'],
})
export class BannerAdListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '橫幅廣告';
  dataLoading = false;
  dataSource: BannerAdView[] = [];
  request = new PagingRequest<BannerAdReq>();
  response: PagingResponse<BannerAdView> | null = null;
  // corpOpts: CorpView[] = [];

  dispCols = [
    '狀態', '標題', '發佈日期', '截止日期', '排序'
  ];

  constructor(
    public appMsgApiServ: AppMsgApiServ,
    private sharedFuncServ: SharedFuncServ,
    protected override injector: Injector,) {
    super(injector);
    // this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  // getCaches(): void { }

  doParamsInit(): void {
    this.request.queryRequest = new BannerAdReq();
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
      nzContent: BannerAdEditComponent,
      nzData: {
        id: id,
        // actionName: this.actionName,
      }
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onDisable(id: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要下架此${this.actionName}？`,
      nzContent: `下架後，該${this.actionName}將無法在官網顯示！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.appMsgApiServ.disableBannerAd(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('下架成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('下架失敗');
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
      nzTitle: `確定要發佈此${this.actionName}？`,
      nzContent: `發佈後，該${this.actionName}將可在官網顯示內容！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOnOk: () => {
        this.appMsgApiServ.enableBannerAd(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('發佈成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('發佈失敗');
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
    this.sharedFuncServ.doQueryTimeOptimize<BannerAdReq>(this.request.queryRequest);
    this.appMsgApiServ.getBannerAdViewsPaging(this.request).subscribe({
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
