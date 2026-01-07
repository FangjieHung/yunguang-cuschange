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
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'about',
            loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
          },
          {
            path: 'auth',
            loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
          },
          {
            path: 'account',
            // canActivate: [AppAuthGuard],
            loadChildren: () => import('./modules/account/account.module').then((m) => m.AccountModule),
          },
          {
            path: 'news',
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
