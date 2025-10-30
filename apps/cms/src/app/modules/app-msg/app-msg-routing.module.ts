import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  AppNewsMsgListComponent
} from './pages';

const routes: Routes = [
  {
    path: 'news/list',
    component: AppNewsMsgListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMsgRoutingModule { }
