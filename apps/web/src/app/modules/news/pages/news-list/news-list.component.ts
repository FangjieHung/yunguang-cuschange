import { Component, inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  AppNewsMsgCatView, AppNewsMsgReq, AppNewsMsgView
} from '@core/models';
import { AppMsgApiServ, SEOServ } from '@core/services';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent extends BBDBaseComponent implements OnInit {
  searchValue = '';
  isLoading = true;

  private _appMsgApiServ = inject(AppMsgApiServ);
  private _route = inject(ActivatedRoute);
  private _seoServ = inject(SEOServ);

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
    const seoData = this._route.snapshot.data;
    this._seoServ.updateMetaTags(seoData['title'], seoData['url'], seoData['image'], seoData['description']);
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
    if (!this.isBrowser)
      return;
    window.scrollTo({ top: 0 });
  }

  onCatChange(newsCatId = 0): void {
    this.doParamsReset();
    this.request.queryRequest.catId = newsCatId;
    this.onSearch();
  }

  onSearch(pageIndex = 1): void {
    this.isLoading = true;
    this.request.pageIndex = pageIndex;

    this._appMsgApiServ.getAppNewsMsgViewsPaging(this.request).subscribe({
      next: (res) => {

        // API 失敗或沒資料
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.isLoading = false;
          this.dataSource = [];
          this.response = res || { totalCount: 0, pageIndex, pageSize: this.request.pageSize };
          return;
        }

        // 有資料
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
        this.isLoading = false;
      },
      error: (err) => {
        // this.bbdNotifyServ.error('執行失敗', err);
        this.isLoading = false;
      }
    });
  }
}
