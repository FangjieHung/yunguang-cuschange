import { Component, OnInit, Injector } from '@angular/core';
/*
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { environment as env } from '../../../../../environments/environment';

// Angular material components
import { PageEvent } from '@angular/material/paginator';

// Custom packages
import 'src/app/shared/extensions/array.extension';
import 'src/app/shared/extensions/date.extension';
import { CampRegMaskView } from 'src/app/models';
import { CampaignApiService, CommerceApiService } from 'src/app/services';
*/
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-camp-reg-info',
  templateUrl: './camp-reg-info.component.html',
  styleUrls: ['./camp-reg-info.component.scss']
})
export class CampRegInfoComponent extends BBDBaseComponent implements OnInit {
  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('CampRegInfoComponent');
  }
  /*
  // Properties
  public queryString = '';
  public dataSource: CampRegMaskView[] = [];
  public isLoading = false;
  isQuery = false;

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
  }

  getCaches(): void { }

  doParamsInit(): void {
    this.queryString = '';
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.dataSource = [];
  }

  doSearch(): void {
    if (this.queryString.isUndefinedOrNullOrEmpty()) {
      this.notificationService.open('請填入您的身份證號，方可進行查詢。');
      return;
    }

    this.doParamsReset();
    this.spinnerService.show();
    this.isLoading = true;
    this.campaignApiService.getCampRegMaskViewsByCustIdNo(this.queryString)
      .subscribe(res => {
        if (!res) {
          this.dataSource = [];
          this.notificationService.open('查無您近一年內的報名資料。');
          return;
        }
        this.dataSource = [...res];
      },
        err => {
          if (err.status === 401) {
            return;
          }
          this.notificationService.open(`查詢時發生錯誤。訊息：「${err?.error?.errorMessage}」`);
        }).add(() => {
          this.spinnerService.hide();
          this.isLoading = false;
        });
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
    this.doSearch();
  }
*/
}
