import { Component, inject, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignEditComponent } from '../campaign-edit/campaign-edit.component';
import { CampaignReq, CampaignView, PagingRequest, PagingResponse } from '@core/models';
import { CampaignApiServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '活動資料';

  private _sharedFuncServ = inject(SharedFuncServ);
  campaignApiServ = inject(CampaignApiServ);

  dataLoading = false;
  dataSource: CampaignView[] = [];
  request = new PagingRequest<CampaignReq>();
  response: PagingResponse<CampaignView> | null = null;

  dispCols = [
    '狀態', '活動名稱',
    '活動開始時間', '活動結束時間', '報名開始時間', '報名結束時間',
    '不限會員報名', '最大報名人數', '已報名人數', '報名費', '會員報名費'
  ];

  constructor(
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
    this.request.queryRequest = new CampaignReq();
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
      nzContent: CampaignEditComponent,
      nzData: {
        id: id,
        actionName: this.actionName,
      }
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CampaignReq>(this.request.queryRequest);
    this.campaignApiServ.getCampaignViewsPaging(this.request).subscribe({
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
