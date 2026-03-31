import { Component, inject, Injector, OnInit } from '@angular/core';

// Third party packages
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustEditComponent } from '../cust-edit/cust-edit.component';
import { CustRenewResultComponent } from '../cust-renew-result/cust-renew-result.component';
import { CustContractYearSelectComponent } from '../cust-contract-year-select/cust-contract-year-select.component';
import {
  PagingRequest, PagingResponse,
  CustGroupView, CustGroupReq, CustomerTypes,
  RenewMembershipReq
} from '@core/models';
import { AppUserApiServ, CustApiServ, SharedDataServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-cust-group-list',
  templateUrl: './cust-group-list.component.html',
  styleUrls: ['./cust-group-list.component.scss'],
})
export class CustGroupListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '團體會員';

  private _sharedFuncServ = inject(SharedFuncServ);
  appUserApiServ = inject(AppUserApiServ);
  custApiServ = inject(CustApiServ);
  sharedDataServ = inject(SharedDataServ);

  private _maxYear = 2999;
  dataLoading = false;
  dataSource: CustGroupView[] = [];
  request = new PagingRequest<CustGroupReq>();
  response: PagingResponse<CustGroupView> | null = null;
  // corpOpts: CorpView[] = [];

  dispCols = [
    '帳號狀態', '會員狀態', '會員編號', '加入日期',
    '統一編號', '團體名稱', '團體電話', '代表人', '行動電話', '電子信箱'
  ];

  constructor(
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    // this.spinnerServ.show();
    // forkJoin(
    //   [this.corpApiServ.getCorpViews(new CorpReq()),]
    // ).subscribe(([corpOpts]) => {
    //   this.corpOpts = [...corpOpts || []];
    // }).add(() => this.spinnerServ.hide());
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustGroupReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doEdit(custId = 0): void {
    this.modalServ.create({
      nzTitle: custId === 0 ? `新增${this.actionName}` : `編輯${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: CustEditComponent,
      nzData: {
        id: custId,
        type: +CustomerTypes.團體會員
      }
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onDisable(appUserId: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要停用此${this.actionName}帳號？`,
      nzContent: `停用後，該${this.actionName}帳號將無法登入！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.appUserApiServ.disableAppUser(appUserId).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('停用成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('停用失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        });
      }
    })
  }

  onEnable(appUserId: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要啟用此${this.actionName}帳號？`,
      nzContent: `啟用後，該${this.actionName}帳號將可恢復登入使用！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOnOk: () => {
        this.appUserApiServ.enableAppUser(appUserId).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('啟用成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('啟用失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        });
      }
    })
  }

  onExport(): void {
    const req = this.request.queryRequest;
    this.spinnerServ.show();
    this.custApiServ.getCustGroupViews(req).subscribe({
      next: (rows: CustGroupView[]) => {
        if (!rows || rows.length === 0) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }

        const fmtDate = (d?: Date | null) => d ? format(d, 'yyyy/MM/dd') : '-';
        const data = rows.map(r => {
          const appUserStatusName = r.appUserStatus !== undefined && r.appUserStatus !== null
            ? this.appUserApiServ.appUserStatusOpts.find(o => +o.value === r.appUserStatus)?.name || ''
            : '';
          const custStatusName = r.custStatus !== undefined && r.custStatus !== null
            ? this.custApiServ.getCustomerStatusInfos().find(o => +o.value === r.custStatus)?.name || ''
            : '';

          return {
            '帳號狀態': appUserStatusName,
            '會員狀態': custStatusName,
            '會員編號': r.code || '',
            '加入日期': fmtDate(r.custStartAt),
            '統一編號': r.taxId,
            '團體名稱': r.name,
            '團體電話': r.phone || '',
            '代表人': r.cpName,
            '行動電話': r.cpMobile || '',
            '電子信箱': r.cpEmail || ''
          };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '團體會員');
        const fileName = `團體會員清單_${new Date().toISOString().slice(0,10)}.xlsx`;
        XLSX.writeFile(wb, fileName);
      },
      error: (err) => {
        this.bbdNotifyServ.error('匯出失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CustGroupReq>(this.request.queryRequest);
    this.custApiServ.getCustGroupViewsPaging(this.request).subscribe({
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

  onRenewAll(): void {
    this.modalServ.create({
      nzTitle: `產生會費繳費單`,
      nzContent: CustContractYearSelectComponent,
      nzData: { actionName: this.actionName },
      nzMaskClosable: false,
      nzCentered: true,
      nzFooter: null,
    }).afterClose.subscribe((contractYear: number | null) => {
      if (!contractYear) return;
      const req = new RenewMembershipReq();
      req.custId = 0;
      req.contractYear = contractYear;
      req.custType = +CustomerTypes.團體會員;
      this.spinnerServ.show();
      this.custApiServ.renewMembership(req).subscribe({
        next: (res) => {
          this.modalServ.create({
            nzTitle: `${contractYear} 年度繳費單產生結果`,
            nzContent: CustRenewResultComponent,
            nzData: res,
            nzMaskClosable: false,
            nzCentered: true,
          }).afterClose.subscribe(() => this.onSearch());
        },
        error: (err) => {
          this.bbdNotifyServ.error('執行失敗', err);
        }
      }).add(() => this.spinnerServ.hide());
    });
  }

  onRenewSingle(data: CustGroupView): void {
    this.modalServ.create({
      nzTitle: `產生會費繳費單`,
      nzContent: CustContractYearSelectComponent,
      nzData: { actionName: data.name, custExpAt: data.custExpAt },
      nzMaskClosable: false,
      nzCentered: true,
      nzFooter: null,
    }).afterClose.subscribe((contractYear: number | null) => {
      if (!contractYear) return;
      const req = new RenewMembershipReq();
      req.custId = data.custId;
      req.contractYear = contractYear;
      req.custType = +CustomerTypes.團體會員;
      this.spinnerServ.show();
      this.custApiServ.renewMembership(req).subscribe({
        next: (res) => {
          if (res && res.success > 0) {
            this.bbdNotifyServ.success(`${data.name} ${contractYear} 年度繳費單已產生。`);
          } else {
            this.bbdNotifyServ.error(`${data.name} 繳費單產生失敗。`);
          }
          this.onSearch();
        },
        error: (err) => {
          this.bbdNotifyServ.error('執行失敗', err);
        }
      }).add(() => this.spinnerServ.hide());
    });
  }

  isRenewed(data: CustGroupView): boolean {
    if (+(data.custStatus || 0) !== +this.custApiServ.customerStatuses.正式會員)
      return true;
    if (!data.custExpAt)
      return false;
    
    const expYear = new Date(data.custExpAt).getFullYear();
    if (expYear === this._maxYear)
      return false;

    return expYear >= new Date().getFullYear() + 4;
  }

}
