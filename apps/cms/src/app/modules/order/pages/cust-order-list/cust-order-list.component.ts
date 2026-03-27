import { Component, inject, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent, PayTypeSelectComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CustOrderReq, CustOrderView
} from '@core/models';
import { CustOrderApiServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-cust-order-list',
  templateUrl: './cust-order-list.component.html',
  styleUrls: ['./cust-order-list.component.scss'],
})
export class CustOrderListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '繳費作業';

  private _sharedFuncServ = inject(SharedFuncServ);
  custOrderApiServ = inject(CustOrderApiServ);

  dataLoading = false;
  dataSource: CustOrderView[] = [];
  request = new PagingRequest<CustOrderReq>();
  response: PagingResponse<CustOrderView> | null = null;

  dispCols = [
    '狀態', '訂單時間', '會員編號', '姓名', '訂單描述', '繳費金額', '付款方式', '付款時間', '取消時間'
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustOrderReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  onCompletePayment(data: CustOrderView): void {
    this.modalServ.create({
      nzTitle: '選擇付款方式',
      nzMaskClosable: false,
      nzCentered: true,
      nzWidth: '400px',
      nzContent: PayTypeSelectComponent,
      nzFooter: null,
    }).afterClose.subscribe(res => {
      if (!res) return;
      const req = new CustOrderReq();
      req.id = data.id;
      req.payTypeId = res.id;
      this.spinnerServ.show();
      this.custOrderApiServ.completeCustOrder(req).subscribe({
        next: (success) => {
          if (success) {
            this.bbdNotifyServ.success('完成繳費成功');
            this.onSearch();
          } else {
            this.bbdNotifyServ.error('完成繳費失敗');
          }
        },
        error: (err) => {
          this.bbdNotifyServ.error('執行失敗', err);
        }
      }).add(() => this.spinnerServ.hide());
    });
  }

  onCancel(id: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要取消此${this.actionName}？`,
      nzContent: `取消後，繳費資料將無法復原！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.spinnerServ.show();
        this.custOrderApiServ.cancelCustOrder(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('取消成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('取消失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CustOrderReq>(this.request.queryRequest);
    this.custOrderApiServ.getCustOrderViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何繳費資料。');
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
