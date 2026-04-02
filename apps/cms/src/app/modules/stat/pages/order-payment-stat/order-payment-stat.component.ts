import { Component, inject, Injector, OnInit } from '@angular/core';

// Third party packages
import * as XLSX from 'xlsx';
import { format, startOfYear } from 'date-fns';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustOrderReq, CustOrderPaymentStat } from '@core/models';
import { StatApiServ } from '@core/services';

@Component({
  selector: 'cms-order-payment-stat',
  templateUrl: './order-payment-stat.component.html',
  styleUrls: ['./order-payment-stat.component.scss'],
})
export class OrderPaymentStatComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '收支統計';

  private _statApiServ = inject(StatApiServ);

  dataLoading = false;
  request = new CustOrderReq();
  result: CustOrderPaymentStat | null = null;

  dispCols = ['訂單類型', '收款筆數', '收款金額', '退款筆數', '退款金額', '手續費', '淨額'];

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request = new CustOrderReq();
    this.request.startAt = startOfYear(new Date());
    this.request.endAt = new Date();
  }

  onSearch(): void {
    if (!this.request.startAt || !this.request.endAt) {
      this.bbdNotifyServ.warning('請選擇查詢日期區間');
      return;
    }

    this.request.endAt = this.request.endAt.getEndOfDay();
    this.dataLoading = true;
    this.result = null;
    this._statApiServ.getCustOrderPaymentStats(this.request).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.success('查無任何統計資料。');
          return;
        }
        this.result = res;
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.dataLoading = false);
  }

  onExport(): void {
    if (!this.result) return;

    const rows: Record<string, string | number>[] = [];

    if (this.result.details && this.result.details.length > 0) {
      this.result.details.forEach(d => {
        rows.push({
          '訂單類型': d.orderTypeName ?? String(d.orderType),
          '收款筆數': d.payCount,
          '收款金額': d.payTotal,
          '退款筆數': d.refundCount,
          '退款金額': d.refundTotal,
          '手續費': d.txFeeTotal,
          '淨額': d.netTotal,
        });
      });
    }

    rows.push({
      '訂單類型': this.result.orderTypeName ?? '總計',
      '收款筆數': this.result.payCount,
      '收款金額': this.result.payTotal,
      '退款筆數': this.result.refundCount,
      '退款金額': this.result.refundTotal,
      '手續費': this.result.txFeeTotal,
      '淨額': this.result.netTotal,
    });

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '收支統計');
    const fileName = `收支統計_${format(new Date(), 'yyyy-MM-dd')}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }
}
