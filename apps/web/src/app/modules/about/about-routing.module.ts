import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutContentViewerComponent, CommitteeComponent, SupervisorComponent } from './pages';
import { environment as env } from '../../../environments/environment';

const routes: Routes = [
  {
    path: 'charter',
    component: AboutContentViewerComponent,
    data: {
      title: `組織章程｜${env.siteName}`,
      decscription: '組織章程',
      url: `${env.siteServer}/charter`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'supervisor',
    component: SupervisorComponent,
    data: {
      title: `理監事成員｜${env.siteName}`,
      decscription: '理監事成員',
      url: `${env.siteServer}/supervisor`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'committee',
    component: CommitteeComponent,
    data: {
      title: `委員會組織｜${env.siteName}`,
      decscription: '委員會組織',
      url: `${env.siteServer}/committee`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'privacy',
    component: AboutContentViewerComponent,
    data: {
      title: `隱私權｜${env.siteName}`,
      decscription: '隱私權',
      url: `${env.siteServer}/privacy`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'terms',
    component: AboutContentViewerComponent,
    data: {
      title: `服務條款｜${env.siteName}`,
      decscription: '服務條款',
      url: `${env.siteServer}/terms`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
