import { Component, inject, Injector, OnInit} from '@angular/core';
import { forkJoin } from 'rxjs';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  AppNewsMsgCatView, AppNewsMsgReq, AppNewsMsgView
} from '@core/models';
import { AppMsgApiServ } from '@core/services';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent extends BBDBaseComponent implements OnInit {
  private _appMsgApiServ = inject(AppMsgApiServ);

  dataSource: AppNewsMsgView[] = [];
  request = new PagingRequest<AppNewsMsgReq>();
  response: PagingResponse<AppNewsMsgView> | null = null;

  // Caches
  newsCatsCache: AppNewsMsgCatView[] = [];

  constructor(
    protected override injector: Injector) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onCatChange();
  }

  getCaches(): void {
    forkJoin([
      this.storeServ.getAppNewsMsgCatsCache()
    ]).subscribe(([cats]) => {
      this.newsCatsCache = cats || [];
    });
  }

  doParamsInit(): void {
    this.request.queryRequest = new AppNewsMsgReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doScrollToTop() {
    window.scrollTo({ top: 0 });
  }

  onCatChange(newsCatId = 0): void {
    this.doParamsReset();
    this.request.queryRequest.catId = newsCatId;
    this.onSearch();
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this._appMsgApiServ.getAppNewsMsgViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    });
  }
}
