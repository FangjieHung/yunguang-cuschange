import { Component, inject, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CustOrderRefundReq, CustOrderRefundView
} from '@core/models';
import { CustOrderApiServ, SharedFuncServ } from '@core/services';
import { CustOrderRefundEditComponent } from '../cust-order-refund-edit/cust-order-refund-edit.component';

@Component({
  selector: 'cms-cust-order-refund-list',
  templateUrl: './cust-order-refund-list.component.html',
  styleUrls: ['./cust-order-refund-list.component.scss'],
})
export class CustOrderRefundListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '退費作業';

  private _sharedFuncServ = inject(SharedFuncServ);
  custOrderApiServ = inject(CustOrderApiServ);

  dataLoading = false;
  dataSource: CustOrderRefundView[] = [];
  request = new PagingRequest<CustOrderRefundReq>();
  response: PagingResponse<CustOrderRefundView> | null = null;

  dispCols = [
    '狀態', '會員編號', '姓名', '原因類別', '退費金額', '退款方式', '退費日期', '經手人', '訂單時間'
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
    this.request.queryRequest = new CustOrderRefundReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  onEdit(data: CustOrderRefundView): void {
    this.modalServ.create({
      nzTitle: `${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: CustOrderRefundEditComponent,
      nzData: { id: data.id },
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onRevertToPending(id: number): void {
    this.modalServ.confirm({
      nzTitle: '確定要退回待退費？',
      nzContent: '退回後，退費狀態將變更為待退款。',
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.spinnerServ.show();
        this.custOrderApiServ.revertCustOrderRefundToPending(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('退回待退費成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('退回待退費失敗');
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
    this._sharedFuncServ.doQueryTimeOptimize<CustOrderRefundReq>(this.request.queryRequest);
    this.custOrderApiServ.getCustOrderRefundViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何退費資料。');
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
