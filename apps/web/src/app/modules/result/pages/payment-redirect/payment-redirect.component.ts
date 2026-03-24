import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommerceApiServ } from '@core/services';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-payment-redirect',
  templateUrl: './payment-redirect.component.html',
  styleUrls: ['./payment-redirect.component.scss'],
})
export class PaymentRedirectComponent extends BBDBaseComponent implements OnInit, AfterViewInit {
  slideHtml = this.commerceApiServ.postReq;

  constructor(
    private commerceApiServ: CommerceApiServ,
    private router: Router,
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('Init loading');
  }

  ngAfterViewInit() {
    console.log('After loading');
    // if (!this.slideHtml) {
    //   this.router.navigate(['/']);
    // }

    // const form: HTMLFormElement = document.getElementById('postForm') as HTMLFormElement;
    // form.submit();
  }
}
