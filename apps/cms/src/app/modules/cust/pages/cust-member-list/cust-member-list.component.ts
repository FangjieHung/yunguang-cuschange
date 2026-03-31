/* eslint-disable @typescript-eslint/no-explicit-any */
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
  PagingRequest, PagingResponse, ZipCodeView,
  CustomerDto, CustMemberDto, CustMemberView, CustMemberReq, CustomerTypes,
  RenewMembershipReq
} from '@core/models';
import { AppUserApiServ, CustApiServ, SharedDataServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-cust-member-list',
  templateUrl: './cust-member-list.component.html',
  styleUrls: ['./cust-member-list.component.scss'],
})
export class CustMemberListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '個人會員';

  private _sharedFuncServ = inject(SharedFuncServ);
  appUserApiServ = inject(AppUserApiServ);
  custApiServ = inject(CustApiServ);
  sharedDataServ = inject(SharedDataServ);

  private _maxYear = 2999;
  dataLoading = false;
  dataSource: CustMemberView[] = [];
  request = new PagingRequest<CustMemberReq>();
  response: PagingResponse<CustMemberView> | null = null;
  zipCodes: ZipCodeView[] = [];

  dispCols = [
    '帳號狀態', '會員狀態', '會員編號', '加入日期',
    '身份證號', '姓名', '性別', '出生日期', '行動電話', '電子信箱'
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
    // this.storeServ.getZipCodesCache().subscribe(res => {
    //   this.zipCodes = res;
    // });
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustMemberReq();
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
        type: +CustomerTypes.個人會員,
        actionName: this.actionName
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

  onExport() {
    // use current search conditions to fetch full list and export
    const req = this.request.queryRequest;
    this.spinnerServ.show();
    this.custApiServ.getCustMemberViews(req).subscribe({
      next: (rows: CustMemberView[]) => {
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
          const genderName = r.gender
            ? this.sharedDataServ.genderOpts.find(o => o.value === r.gender)?.name || ''
            : '';

          return {
            '帳號狀態': appUserStatusName,
            '會員狀態': custStatusName,
            '會員編號': r.code || '',
            '加入日期': fmtDate(r.custStartAt),
            '身份證號': r.idNo,
            '姓名': r.name,
            '性別': genderName,
            '出生日期': fmtDate(r.birthAt),
            '行動電話': r.mobile || '',
            '電子信箱': r.email || ''
          };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, `${this.actionName}清單`);
        const fileName = `${this.actionName}清單_${new Date().toISOString().slice(0,10)}.xlsx`;
        XLSX.writeFile(wb, fileName);
      },
      error: (err) => {
        this.bbdNotifyServ.error('匯出失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  onUpload(target: any) {
    const files = target?.files;
    if (!files || files.length === 0) {
      this.bbdNotifyServ.warning('提示，您未選取要上傳的檔案。');
      return;
    }

    const dtos: CustomerDto[] = [];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary', cellDates: true });
      XLSX.utils.sheet_to_json(workbook.Sheets['發起人名單'])?.map((item: any) => {
        const dto = new CustomerDto();
        dto.custMember = new CustMemberDto();
        dto.type = +this.custApiServ.customerTypes.個人會員;
        dto.code = String(item['會員編號'] || '');
        dto.startAt = new Date('2026/01/01');
        dto.status = +this.custApiServ.customerStatuses.正式會員;
        dto.appUserStatus = 60;
        dto.appUserStartAt = new Date('2026/01/01');
        dto.password = String(item['身分證字號'] || 'A123456789').trim();
        dto.name = String(item['姓名'] || '');
        dto.custMember.name = String(item['姓名'] || '');
        dto.custMember.IdNo = String(item['身分證字號'] || 'A123456789').trim()
        dto.custMember.gender = String(item['性別'] || '').isUndefinedOrNullOrEmpty() ? null : (String(item['性別'] || '') === '男') ? 'M' : 'F';

        const rawBirthStrs = String(item['出生年月日'] || '').split('.');
        const newBirthStr = `${(Number(rawBirthStrs[0]) + 1911).toString()}/${rawBirthStrs[1]}/${rawBirthStrs[2]}`;
        dto.custMember.birthAt = new Date(newBirthStr);
        dto.custMember.email = String(item['e-mail'] || '');
        dto.custMember.mobile = String(item['手機'] || '');
        dto.custMember.phone = String(item['連絡電話'] || '');
        dto.custMember.phoneExt = String(item['分機'] || '');
        dto.custMember.content = JSON.stringify(
          {
            education: null,
            experience: String(item['現職'] || '')
          }
        );

        const city = String(item['戶籍縣市'] || '');
        const district = String(item['區/鎮/鄉'] || '');
        if (city.isUndefinedOrNullOrEmpty() == false && district.isUndefinedOrNullOrEmpty() == false) {
          dto.custMember.resiZipCodeId = this.zipCodes.find(cond => cond.city === city && cond.district === district)?.id || null;
          dto.custMember.currZipCodeId = this.zipCodes.find(cond => cond.city === city && cond.district === district)?.id || null;
        }
        dto.custMember.resiAddr = String(item['戶籍地址'] || '');
        dto.custMember.currAddr = String(item['戶籍地址'] || '');
        dtos.push(dto);
      });

      console.log(dtos);
      this.spinnerServ.show();
      this.custApiServ.setCustomerDtos(dtos)
        .subscribe(res => {
          console.log(res);
        }).add(() => this.spinnerServ.hide());
    };
    reader.readAsArrayBuffer(target?.files[0]);
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CustMemberReq>(this.request.queryRequest);
    this.custApiServ.getCustMemberViewsPaging(this.request).subscribe({
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
      req.custType = +CustomerTypes.個人會員;
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

  onRenewSingle(data: CustMemberView): void {
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
      req.custType = +CustomerTypes.個人會員;
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

  isRenewed(data: CustMemberView): boolean {
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
