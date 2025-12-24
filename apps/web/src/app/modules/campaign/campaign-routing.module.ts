import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';
import { CampaignListComponent, CampaignDetailComponent, CampRegQueryListComponent, CampaignRegisterComponent } from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: CampaignListComponent,
    data: {
      title: `學術活動｜${env.siteName}`,
      decscription: '學術活動',
      url: `${env.siteServer}/campaign/list`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'detail/:uniqueId',
    component: CampaignDetailComponent,
    data: {
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'register', // 完成報名結果頁
    component: CampaignRegisterComponent,
  },
    {
    path: 'reg', // 報名填表頁
    component: CampRegQueryListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
