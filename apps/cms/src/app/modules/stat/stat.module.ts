import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatRoutingModule } from './stat-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { OrderPaymentStatComponent } from './pages/order-payment-stat/order-payment-stat.component';

const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [OrderPaymentStatComponent];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, StatRoutingModule, ...CUSTOM_MODULES],
})
export class StatModule { }
