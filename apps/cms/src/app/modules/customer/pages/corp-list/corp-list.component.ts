import { Component, Injector, OnInit } from '@angular/core';
import { CorpReq, CorpView, PagingRequest, PagingResponse } from '@core/models';
import { CorpApiServ, SharedFuncServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { CorpEditComponent } from '../corp-edit/corp-edit.component';

@Component({
  selector: 'cms-corp-list',
  templateUrl: './corp-list.component.html',
  styleUrls: ['./corp-list.component.scss'],
})
export class CorpListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '公司資料';
  dataLoading = false;
  dataSource: CorpView[] = [];
  request = new PagingRequest<CorpReq>();
  response: PagingResponse<CorpView> | null = null;

  dispCols = [
    '統一編號',
    '公司名稱',
    '聯絡人',
    '聯絡人手機',
  ];

  constructor(
    public corpApiServ: CorpApiServ,
    private sharedFuncServ: SharedFuncServ,
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    // const custCatReq = new CustCatReq();
    // custCatReq.status = CustCatStatuses.啟用;
    // this.spinnerServ.show();
    // forkJoin(
    //   [this.customerApiServ.getCustCatViews(custCatReq),]
    // ).subscribe(([custCatViews]) => {
    //   this.custCatOpts = [...custCatViews || []];
    // }).add(() => this.spinnerServ.hide());
  }

  doParamsInit(): void {
    this.request.queryRequest = new CorpReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this.sharedFuncServ.doQueryTimeOptimize<CorpReq>(this.request.queryRequest);
    this.corpApiServ.getCorpViewsPaging(this.request).subscribe({
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

  doEdit(id = 0): void {
    this.modalServ.create({
      nzTitle: id === 0 ? `新增${this.actionName}` : `編輯${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: CorpEditComponent,
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

}
