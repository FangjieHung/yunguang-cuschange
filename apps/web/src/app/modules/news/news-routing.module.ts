import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';
import { NewsListComponent, NewsDetailComponent } from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: NewsListComponent,
    data: {
      title: `最新消息｜${env.siteName}`,
      decscription: '最新消息',
      url: `${env.siteServer}/news/list`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'detail/:uniqueId',
    component: NewsDetailComponent,
    data: {
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
