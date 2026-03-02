/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustEditComponent } from '../cust-edit/cust-edit.component';
import {
  PagingRequest, PagingResponse, ZipCodeView,
  CustomerDto, CustMemberDto, CustMemberView, CustMemberReq, CustomerTypes
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

  dataLoading = false;
  dataSource: CustMemberView[] = [];
  request = new PagingRequest<CustMemberReq>();
  response: PagingResponse<CustMemberView> | null = null;
  zipCodes: ZipCodeView[] = [];

  dispCols = [
    '帳號狀態', '會員狀態', '加入日期',
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

}
