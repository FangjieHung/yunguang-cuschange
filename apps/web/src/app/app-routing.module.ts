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
        path: 'customization',
        loadChildren: () =>
          import('./modules/customization/customization.module').then(
            (m) => m.CustomizationModule
          ),
      },
      {
        path: '',
        component: DefaultContainerComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
          },

          {
            path: 'auth',
            loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
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
            path: 'explanation',
            loadChildren: () =>
              import('./modules/explanation/explanation.module').then((m) => m.ExplanationModule),
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
