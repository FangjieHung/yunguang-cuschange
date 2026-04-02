/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit, Type } from '@angular/core';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse, ZipCodeView,
  CampRegReq, CampRegView
} from '@core/models';
import { CampaignApiServ, SharedDataServ, SharedFuncServ } from '@core/services';
import { CampAttendCertPrintComponent, PaymentReceiptPrintComponent, Payment407ReceiptPrintComponent } from '@core/shared';

@Component({
  selector: 'cms-camp-reg-list',
  templateUrl: './camp-reg-list.component.html',
  styleUrls: ['./camp-reg-list.component.scss'],
})
export class CampRegListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '報名資料';

  private _sharedFuncServ = inject(SharedFuncServ);
  campaignApiServ = inject(CampaignApiServ);
  sharedDataServ = inject(SharedDataServ);

  private _zipCodes: ZipCodeView[] = [];
  dataLoading = false;
  dataSource: CampRegView[] = [];
  request = new PagingRequest<CampRegReq>();
  response: PagingResponse<CampRegView> | null = null;

  get zipCodes(): ZipCodeView[] {
    return this._zipCodes;
  }

  dispCols = [
    '狀態', '報名時間', '活動名稱', '會員別', '會員編號', '姓名', '身分證號', '電子信箱', '行動電話', '聯絡地址', '證書編號'
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    this.storeServ.getZipCodesCache().subscribe(res => {
      this._zipCodes = res;
    });
  }

  doParamsInit(): void {
    this.request.queryRequest = new CampRegReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  onCancel(regId: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要取消此${this.actionName}？`,
      nzContent: `取消後，報名資料將無法復原！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.spinnerServ.show();
        this.campaignApiServ.cancelCampReg(regId).subscribe({
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

  onExport(): void {
    const req = this.request.queryRequest;
    this.spinnerServ.show();
    this.campaignApiServ.getCampRegViews(req).subscribe({
      next: (rows: CampRegView[]) => {
        if (!rows || rows.length === 0) {
          this.bbdNotifyServ.success('查無任何報名資料。');
          return;
        }

        const data = rows.map(r => {
          const zipCode = this._zipCodes.find(cond => cond.id === r.custZipCodeId);
          const statusName = this.campaignApiServ.campRegStatusOpts.find(s => s.value === r.status)?.name || String(r.status);
          return {
            '報名時間': format(r.regAt, 'yyyy/MM/dd HH:mm'),
            '活動名稱': r.campName,
            '會員別': r.custId > 0 ? '會員' : '非會員',
            '會員編號': r.custCode || '',
            '姓名': r.custName,
            '身分證號': r.custIdNo,
            '電子信箱': r.custEmail,
            '行動電話': r.custMobile,
            '地址': `${zipCode?.city || ''}${zipCode?.district || ''}${r.custAddr}`,
            '狀態': statusName
          };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '報名清單');
        const fileName = `報名清單_${new Date().toISOString().slice(0, 10)}.xlsx`;
        XLSX.writeFile(wb, fileName);
      },
      error: (err) => {
        this.bbdNotifyServ.error('匯出失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  onPrint(printName: 'cert' | 'receipt' | '407receipt', data?: CampRegView) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let component: Type<any>;
    let title: string;
    let componentParams: Record<string, any> | undefined;

    switch (printName) {
      case 'cert':
        component = CampAttendCertPrintComponent;
        title = '參加證明';
        componentParams = {
          campRegId: data?.id
        };
        break;
      case 'receipt':
        component = PaymentReceiptPrintComponent;
        title = '繳費收據';
        componentParams = {
          modalData: {
            payerName: data?.custName,
            reason: data?.campName,
            receiptNo: data?.id?.toString(),
          }
        };
        break;
      case '407receipt':
        component = Payment407ReceiptPrintComponent;
        title = '407 繳費證明';
        componentParams = {
          modalData: {
            payerName: data?.custName,
            reason: data?.campName,
            receiptNo: data?.id?.toString(),
            amount: data?.content || '0'
          }
        };
        break;
      default:
        return;
    }

    this.modalServ.create({
      nzTitle: title,
      nzContent: component,
      nzData: componentParams,
      nzWidth: '80%',
      nzFooter: null,
      nzMaskClosable: true
    });
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CampRegReq>(this.request.queryRequest);
    this.campaignApiServ.getCampRegViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何報名資料。');
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

  onIssueCert(data: CampRegView): void {
    this.modalServ.confirm({
      nzTitle: '確定要核發此出席證明？',
      nzContent: '核發後將自動取得證書編號。',
      nzOkText: '確定',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.spinnerServ.show();
        this.campaignApiServ.issueCampAttendLogCert(data.campAttendLogId).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('核發成功');
              this.onSearch(this.request.pageIndex);
            } else {
              this.bbdNotifyServ.error('核發失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  onCancelCert(data: CampRegView): void {
    this.modalServ.confirm({
      nzTitle: '確定要取消核發此出席證明？',
      nzContent: '取消後狀態將回到待審核。',
      nzOkText: '確定',
      nzCancelText: '取消',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.spinnerServ.show();
        this.campaignApiServ.cancelCampAttendLogCert(data.campAttendLogId).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('取消核發成功');
              this.onSearch(this.request.pageIndex);
            } else {
              this.bbdNotifyServ.error('取消核發失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

}
