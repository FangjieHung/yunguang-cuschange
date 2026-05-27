import { Component, inject, Injector, OnInit } from '@angular/core';


// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CampaignReq, CampaignView
} from '@core/models';
import { CampaignApiServ } from '@core/services';

@Component({
  selector: 'web-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent extends BBDBaseComponent implements OnInit {
  campaignApiServ = inject(CampaignApiServ);

  dataSource: CampaignView[] = [];
  request = new PagingRequest<CampaignReq>();
  response: PagingResponse<CampaignView> | null = null;

  focusedIndex: number | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new CampaignReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doScrollToTop() {
    if (!this.isBrowser)
      return;
    window.scrollTo({ top: 0 });
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();

    this.spinnerServ.show();
    this.campaignApiServ.getCampaignViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
      },
      error: (err) => {
        // this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
}
