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
import { BBDBaseComponent } from 'src/app/core';
import { CampCertSheetComponent } from 'src/app/modules/sheet/pages';
import { CampaignApiService, CommerceApiService } from 'src/app/services';
import {
  PagingRequest, PagingResponse, CampRegReq, CampRegView } from 'src/app/models';
*/

import { BBDBaseComponent } from '@core/shared';

interface PaymentRecord {
  id: number;
  orderType: string;
  orderDesc: string;
  orderDate: string;
  totalAmount: number;
  status: '已繳費' | '待繳費' | '已取消';
  statusIcon: string;
  statusColor: string;
  customerName: string;
  phone: string;
  email: string;
  paymentMethod?: string;
  paymentNumber?: string;
  paymentDate?: string;
  showPrintButton: boolean;
  showPayButton: boolean;
}

@Component({
  selector: 'app-my-camp-reg-rec',
  templateUrl: './my-camp-reg-rec.component.html',
  styleUrls: ['./my-camp-reg-rec.component.scss'],
})
export class MyCampRegRecComponent extends BBDBaseComponent implements OnInit {
  isLoading = true;
  dataSource = '';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('my camp rec');
  }

  /*
  // Properties
  public request = new PagingRequest<CampRegReq>();
  public response = new PagingResponse<CampRegView>();
  public dataSource: CampRegView[] = [];
  public isLoading = false;

  // Caches
  public statusInfos$ = this.campaignApiService.getCampRegStatusInfos();

  constructor(
    private router: Router,
    private campaignApiService: CampaignApiService,
    private commerceApiService: CommerceApiService,
    protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getCaches();
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void { }

  doParamsInit(): void {
    this.request.queryRequest = new CampRegReq();
    this.dataSource = [];
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doSearch(): void {
    this.doParamsReset();
    this.isLoading = true;
    this.campaignApiService.getCurrUserCampRegViewsByPaging(this.request)
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
          this.notificationService.open(`此活動不需再付款，謝謝您。`);
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

  onSearch(): void {
    this.request.pageIndex = 1;
    this.doSearch();
  }

  onPageChange(event: PageEvent): void {
    this.request.pageIndex = (event.pageIndex + 1);
    this.doSearch();
  }

  onPrint(obj: CampRegView): void {
    if (!obj || !obj?.id) {
      this.notificationService.open(`此活動證明可能尚未核發或無核發記錄，謝謝您。`);
      return;
    }

    this.dialogService.open(CampCertSheetComponent, {
      width: '800px',
      data: {
        id: obj.id
      }
    });
  }
*/
}
