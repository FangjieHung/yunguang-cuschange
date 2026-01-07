import { Component, OnInit, Injector } from '@angular/core';
/*
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { environment as env } from 'src/environments/environment';

// Angular material components
import { PageEvent } from '@angular/material/paginator';

// Custom packages
import 'src/app/shared/extensions/array.extension';
import 'src/app/shared/extensions/date.extension';


import { ReceiptSheetComponent } from 'src/app/modules/sheet/pages';
import {
  PagingRequest, PagingResponse,
  AppObjectStoreCodes, CustOrderReq, CustOrderView
} from 'src/app/models';
import {
  AppStoreApiService, CustOrderApiService, CommerceApiService
} from 'src/app/services';
*/
import { BBDBaseComponent } from '@core/shared';

// Demo

// 可依需求調整欄位
export type PaymentStatus = 'paid' | 'pending' | 'canceled';

export interface PaymentItem {
  category: string;      // 類別：活動報名費/會費/課程費用/證書費
  title: string;         // 標題（通常是活動或費用名稱）
  dueDate: string;       // 應繳日期 (YYYY-MM-DD)
  amount: number;        // 應繳金額
  status: PaymentStatus; // 狀態：已繳費/待繳費/已取消（以英文字串表示）

  // 詳細資訊
  memberName: string;
  mobile: string;
  email: string;
  paidAmount?: number;   // 付款金額，待繳費/未付款可不填
  payMethod?: string;    // 付款方式
  payId?: string;        // 金流繳費編號
  payTime?: string;      // 繳費時間 (YYYY-MM-DD HH:mm)
}

// 狀態對應：icon 與色系（Material Icons + Tailwind 色系）
export const STATUS_META: Record<PaymentStatus, { icon: string; colorClass: string; label: string; buttonClass: string }> = {
  paid: {
    icon: 'check_circle',
    colorClass: 'text-green-600',
    label: '已繳費',
    buttonClass: 'btn btn-cyan'
  },
  pending: {
    icon: 'pending',
    colorClass: 'text-yellow-600',
    label: '待繳費',
    buttonClass: 'btn btn-yellow'
  },
  canceled: {
    icon: 'cancel',
    colorClass: 'text-red-600',
    label: '已取消',
    buttonClass: 'btn btn-cyan'
  }
};


export const PAYMENTS: PaymentItem[] = [
  {
    category: '活動報名費',
    title: '2024春季感染控制研討會',
    dueDate: '2024-03-15',
    amount: 1500,
    status: 'paid',
    memberName: '張三',
    mobile: '0912-345-678',
    email: 'example@email.com',
    paidAmount: 1500,
    payMethod: '信用卡',
    payId: 'PAY20240315001',
    payTime: '2024-03-15 15:30'
  },
  {
    category: '正式會費',
    title: '2024年度正式會員會費',
    dueDate: '2024-01-01',
    amount: 2000,
    status: 'pending',
    memberName: '張三',
    mobile: '0912-345-678',
    email: 'example@email.com',
  },
  {
    category: '課程費用',
    title: '抗生素合理使用研習會',
    dueDate: '2024-02-20',
    amount: 800,
    status: 'canceled',
    memberName: '張三',
    mobile: '0912-345-678',
    email: 'example@email.com',
    paidAmount: 800,
    payMethod: '銀行轉帳',
    payId: 'PAY20240220002',
    payTime: '2024-02-20 11:20',
  },
  {
    category: '證書費',
    title: '感染控制師證書申請費',
    dueDate: '2023-12-10',
    amount: 500,
    status: 'paid',
    memberName: '張三',
    mobile: '0912-345-678',
    email: 'example@email.com',
    paidAmount: 500,
    payMethod: '超商代碼',
    payId: 'PAY20231210004',
    payTime: '2023-12-10 14:15',
  }
];

@Component({
  selector: 'app-my-bill-rec',
  templateUrl: './my-bill-rec.component.html',
  styleUrls: ['./my-bill-rec.component.scss'],
})


export class MyBillRecComponent extends BBDBaseComponent implements OnInit {
  payments = PAYMENTS;
  statusMeta = STATUS_META;
  dataSource = '';
  isLoading = true;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('my bill rec');
  }
  /*
  // Properties
  public request = new PagingRequest<CustOrderReq>();
  public response = new PagingResponse<CustOrderView>();
  public queryYears: string[] = ['一', '二', '三', '四', '五'];
  public dataSource: CustOrderView[] = [];
  public isLoading = false;

  // Caches
  public custOrderTypes: any = null;
  public statusInfos$ = this.custOrderApiService.getCustOrderStatusInfos();

  constructor(
    private router: Router,
    private appStoreApiService: AppStoreApiService,
    private custOrderApiService: CustOrderApiService,
    private commerceApiService: CommerceApiService,
    protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getCaches();
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    this.appStoreApiService.getAppObjectStoreValueByCode(AppObjectStoreCodes.客戶訂單類型)
      .subscribe(res => {
        if (res) {
          this.custOrderTypes = res;
        }
      });
  }

  doParamsInit(): void {
    this.request.queryRequest = new CustOrderReq();
    this.request.queryRequest.isShowContent = true;
    this.dataSource = [];
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doSearch(): void {
    this.doParamsReset();
    this.isLoading = true;
    this.custOrderApiService.getCurrUserCustOrderViewsPaging(this.request)
      .subscribe(res => {
        if (!res) {
          this.dataSource = [];
          this.notificationService.open('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
      },
        err => {
          if (err.status === 401) {
            return;
          }
          this.notificationService.open(`查詢時發生錯誤。訊息：「${err?.error?.errorMessage}」`);
        }).add(() => this.isLoading = false);
  }

  doShowPaymentHint(): void {
    this.dialogService.openInformation('付款資訊',
      '請善用本會「郵局劃撥」帳號完成付款，並請回傳繳款證明至<a href=\"mailto:stltc.ipc2018@gmail.com\" class=\"text-cyan-600 font-bold px-1\">stltc.ipc2018@gmail.com</a>感謝您的配合。');
  }

  onPayment(custOrderId: number): void {
    if (env.allowPaymentFlow === false) {
      this.doShowPaymentHint();
      return;
    }

    this.spinnerService.show();
    this.commerceApiService.getNewebPayFormStr(custOrderId)
      .subscribe(res => {
        if (!res) {
          this.notificationService.open(`進行付款作業失敗，請再重試一次，謝謝您。`);
          return;
        }

        if (res.isPayable === false) {
          this.notificationService.open(`此訂單不需再付款，謝謝您。`);
          return;
        }

        if (res.allowPaymentFlow === false) {
          this.doShowPaymentHint();
          return;
        }

        if (res.postReq.isUndefinedOrNullOrEmpty()) {
          this.notificationService.open(`付款資訊取得失敗，無法進行付款作業，請再重試一次，謝謝您。`);
          return;
        }

        this.commerceApiService.setPostReq(res.postReq);
        this.router.navigate(['/commerce/payment/redirect']);
      },
        err => {
          if (err.status === 401) {
            return;
          }
          this.notificationService.open(`付款時發生錯誤。訊息：「${err?.error?.errorMessage}」`);
        }).add(() => this.spinnerService.hide());
  }

  onPrint(obj: CustOrderView): void {
    if (!obj || !obj?.id) {
      this.notificationService.open(`此活動證明可能尚未核發或無核發記錄，謝謝您。`);
      return;
    }

    this.dialogService.open(ReceiptSheetComponent, {
      width: '800px',
      data: {
        id: obj.custOrderInvId
      }
    });
  }

  onSearch(): void {
    this.request.pageIndex = 1;
    this.doSearch();
  }

  onPageChange(event: PageEvent): void {
    this.request.pageIndex = (event.pageIndex + 1);
    this.doSearch();
  }
*/
}
