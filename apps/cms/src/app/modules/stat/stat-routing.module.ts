import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import { OrderPaymentStatComponent } from './pages';

const routes: Routes = [
  {
    path: 'order-payment-stat',
    component: OrderPaymentStatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatRoutingModule { }
