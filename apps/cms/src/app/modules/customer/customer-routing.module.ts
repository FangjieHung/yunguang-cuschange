import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  CorpListComponent,
  CustomerListComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'corp/list',
    component: CorpListComponent,
  },
  {
    path: 'list',
    component: CustomerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
