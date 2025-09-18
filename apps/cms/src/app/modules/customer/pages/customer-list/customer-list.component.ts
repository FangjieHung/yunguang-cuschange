import { Component, Injector, OnInit } from '@angular/core';
import { CorpReq, CorpView, CustomerReq, CustomerView, PagingRequest, PagingResponse } from '@core/models';
import { AppUserApiServ, CorpApiServ, CustomerApiServ, SharedFuncServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { forkJoin } from 'rxjs';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';

@Component({
  selector: 'cms-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '客戶資料';
  dataLoading = false;
  dataSource: CustomerView[] = [];
  request = new PagingRequest<CustomerReq>();
  response: PagingResponse<CustomerView> | null = null;
  corpOpts: CorpView[] = [];

  dispCols = [
    '公司',
    '電子信箱(帳號)',
    '客戶名稱',
    '暱稱',
    '手機',
    '狀態',
  ];

  constructor(
    public corpApiServ: CorpApiServ,
    public appUserApiServ: AppUserApiServ,
    public customerApiServ: CustomerApiServ,
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
    this.spinnerServ.show();
    forkJoin(
      [this.corpApiServ.getCorpViews(new CorpReq()),]
    ).subscribe(([corpOpts]) => {
      this.corpOpts = [...corpOpts || []];
    }).add(() => this.spinnerServ.hide());
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustomerReq();
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
    this.sharedFuncServ.doQueryTimeOptimize<CustomerReq>(this.request.queryRequest);
    this.customerApiServ.getCustomerViewsPaging(this.request).subscribe({
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
      nzContent: CustomerEditComponent,
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
