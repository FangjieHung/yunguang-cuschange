import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';

// Custom packages
import { PaymentRedirectComponent, PaymentResultComponent, ResultErrorComponent } from './pages';

const routes: Routes = [
  {
    path: 'error',
    component: ResultErrorComponent,
    data: {
      title: `404｜${env.siteName}`,
      decscription: `404 找不到頁面`,
      url: `${env.siteServer}/result/error`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'payment-redirect',
    component: PaymentRedirectComponent,
    data: {
      title: `前往付款｜${env.siteName}`,
      decscription: `前往付款轉導頁面`
    }
  },
  {
    path: 'payment-result/:orderType/:resultCode/:resultMsg',
    component: PaymentResultComponent,
    data: {
      title: `付款結果｜${env.siteName}`,
      decscription: `完成付款頁面`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
