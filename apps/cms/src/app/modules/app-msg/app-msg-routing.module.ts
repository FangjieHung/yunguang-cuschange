import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  AppNewsMsgCatListComponent, AppNewsMsgListComponent, BannerAdListComponent,
  SponsorListComponent
} from './pages';

const routes: Routes = [
  {
    path: 'banner/list',
    component: BannerAdListComponent
  },
  {
    path: 'news/list',
    component: AppNewsMsgListComponent
  },
  {
    path: 'news/cat/list',
    component: AppNewsMsgCatListComponent
  },
  {
    path: 'sponsor/list',
    component: SponsorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMsgRoutingModule { }
