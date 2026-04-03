import { Component, Injector, OnInit } from '@angular/core';

import { BBDBaseComponent } from '@core/shared';
import { SponsorEditComponent } from '../sponsor-edit/sponsor-edit.component';
import {
  PagingRequest, PagingResponse,
  SponsorView, SponsorReq,
} from '@core/models';
import { AppMsgApiServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss'],
})
export class SponsorListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '贊助商';
  dataLoading = false;
  dataSource: SponsorView[] = [];
  request = new PagingRequest<SponsorReq>();
  response: PagingResponse<SponsorView> | null = null;

  dispCols = ['狀態', '名稱', '開始日期', '結束日期', '排序'];

  constructor(
    public appMsgApiServ: AppMsgApiServ,
    private sharedFuncServ: SharedFuncServ,
    protected override injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new SponsorReq();
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
      nzContent: SponsorEditComponent,
      nzData: {
        id: id,
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
      nzContent: `停用後，該${this.actionName}將無法在官網顯示！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.appMsgApiServ.disableSponsor(id).subscribe({
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
      nzContent: `啟用後，該${this.actionName}將可在官網顯示內容！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOnOk: () => {
        this.appMsgApiServ.enableSponsor(id).subscribe({
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
    this.sharedFuncServ.doQueryTimeOptimize<SponsorReq>(this.request.queryRequest);
    this.appMsgApiServ.getSponsorViewsPaging(this.request).subscribe({
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
