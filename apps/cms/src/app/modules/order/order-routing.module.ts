import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import { CustOrderListComponent, CustOrderRefundListComponent } from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: CustOrderListComponent,
  },
  {
    path: 'refund/list',
    component: CustOrderRefundListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule { }
