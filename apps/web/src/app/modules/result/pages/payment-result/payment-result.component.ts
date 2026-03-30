import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustOrderTypes } from '@core/models';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss'],
})
export class PaymentResultComponent extends BBDBaseComponent implements OnInit, AfterViewInit {
  orderType = 0;
  message = '';
  resultCode = 0;
  resultMsg = '';
  // paymentPostBody: Record<string, unknown> | null = null;

  constructor(
    private route: ActivatedRoute,
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.orderType = parseInt(params.get('orderType') || '0', 0);
      this.resultCode = parseInt(params.get('resultCode') || '0', 0);
      this.resultMsg = params.get('resultMsg') || '';
      this.setMessage();
    });
    
    // this.loadPaymentPostBody();
  }

  // private loadPaymentPostBody(): void {
  //   if (typeof window === 'undefined') {
  //     return;
  //   }

  //   const fromLocal = window.localStorage.getItem('paymentCompletePostBody');
  //   if (fromLocal) {
  //     try {
  //       this.paymentPostBody = JSON.parse(fromLocal);
  //     } catch {
  //       this.paymentPostBody = null;
  //     }
  //     window.localStorage.removeItem('paymentCompletePostBody');
  //     return;
  //   }

  //   if (window.history.state && (window.history.state as { paymentData?: unknown }).paymentData) {
  //     this.paymentPostBody = (window.history.state as { paymentData?: unknown }).paymentData as Record<string, unknown>;
  //     return;
  //   }

  //   const payload = this.route.snapshot.queryParamMap.get('paymentData') || this.route.snapshot.queryParamMap.get('payload');
  //   if (payload) {
  //     try {
  //       this.paymentPostBody = JSON.parse(decodeURIComponent(payload));
  //     } catch {
  //       this.paymentPostBody = null;
  //     }
  //   }
  // }

  private setMessage(): void {
    switch (this.orderType) {
      case CustOrderTypes.活動類_報名費:
        this.message = '活動報名';
        break;
      case CustOrderTypes.會費類_個人入會費:
        this.message = '入會申請';
        break;
      case CustOrderTypes.會費類_個人常年會費:
        this.message = '常年會費';
        break;
      default:
        this.message = '繳費結果';
        break;
    }
  }

  get isSuccess(): boolean {
    return this.resultCode === 1;
  }

  ngAfterViewInit() {
    console.log('After loading');
  }
}
