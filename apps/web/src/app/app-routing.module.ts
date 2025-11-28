import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom packages
import { DefaultContainerComponent } from './modules/_layout'
import { ResultErrorComponent } from './modules/result/pages';
import { AppAuthGuard } from '@core/shared';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DefaultContainerComponent,
        // canActivate: [AppAuthGuard],
        children: [
          {
            path: '',
            title: '首頁',
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'about',
            title: '關於',
            loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
          },
          {
            path: 'auth',
            title: '帳號',
            loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
          },
          {
            path: 'account',
            loadChildren: () => import('./modules/account/account.module').then((m) => m.AccountModule),
          },
          {
            path: 'news',
            title: '最新消息',
            loadChildren: () =>
              import('./modules/news/news.module').then((m) => m.NewsModule
              ),
          },
          {
            path: 'campaign',
            loadChildren: () =>
              import('./modules/campaign/campaign.module').then((m) => m.CampaignModule
              ),
          },
          {
            path: 'result',
            title: '',
            loadChildren: () => import('./modules/result/result.module').then(m => m.ResultModule)
          },
          {
            path: '**',
            component: ResultErrorComponent,
            title: '錯誤'
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
