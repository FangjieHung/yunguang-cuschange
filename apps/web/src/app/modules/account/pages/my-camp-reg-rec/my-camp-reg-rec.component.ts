import { Component, inject, Injector, OnInit } from '@angular/core';


// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CampRegReq, CampRegView
} from '@core/models';
import { CampaignApiServ } from '@core/services';

@Component({
  selector: 'app-my-camp-reg-rec',
  templateUrl: './my-camp-reg-rec.component.html',
  styleUrls: ['./my-camp-reg-rec.component.scss'],
})
export class MyCampRegRecComponent extends BBDBaseComponent implements OnInit {
  campaignApiServ = inject(CampaignApiServ);

  isLoading = true;
  dataSource: CampRegView[] = [];
  request = new PagingRequest<CampRegReq>();
  response: PagingResponse<CampRegView> | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new CampRegReq();
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
    this.campaignApiServ.getCampRegViewsPaging(this.request).subscribe({
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
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
}
