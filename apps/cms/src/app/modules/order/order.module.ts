import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { CustOrderListComponent } from './pages/cust-order-list/cust-order-list.component';
import { CustOrderRefundListComponent } from './pages/cust-order-refund-list/cust-order-refund-list.component';
import { CustOrderRefundEditComponent } from './pages/cust-order-refund-edit/cust-order-refund-edit.component';

const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [CustOrderListComponent, CustOrderRefundListComponent, CustOrderRefundEditComponent];

@NgModule({
  declarations: [...CUST_COMPONENTS],
  imports: [CommonModule, OrderRoutingModule, ...CUSTOM_MODULES],
})
export class OrderModule { }
