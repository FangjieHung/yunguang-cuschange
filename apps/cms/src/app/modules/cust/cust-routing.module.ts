import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  CustGroupListComponent, CustMemberListComponent
} from './pages';

const routes: Routes = [
  {
    path: 'group/list',
    component: CustGroupListComponent
  },
  {
    path: 'member/list',
    component: CustMemberListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustRoutingModule { }
