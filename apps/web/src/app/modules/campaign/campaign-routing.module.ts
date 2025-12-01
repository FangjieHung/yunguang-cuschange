import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';
import { CampaignListComponent, CampaignDetailComponent } from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: CampaignListComponent,
    data: {
      title: `學術活動｜${env.siteName}`,
      decscription: '學術活動',
      url: `${env.siteServer}/campaign/list`,
      image: `${env.siteServer}/favicon.ico`
    }
  },
  {
    path: 'detail/:uniqueId',
    component: CampaignDetailComponent,
    data: {
      image: `${env.siteServer}/favicon.ico`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
