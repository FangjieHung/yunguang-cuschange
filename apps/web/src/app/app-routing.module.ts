import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom packages
import { DefaultContainerComponent } from './modules/_layout'
import { ResultErrorComponent } from './modules/result/pages';
import { AppAuthGuard } from '@core/shared';

const routes: Routes = [
  {
    path: 'auth',
    title: '帳號',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: DefaultContainerComponent,
        // canActivate: [AppAuthGuard],
        children: [
          {
            path: 'home',
            title: '首頁',
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'account',
            loadChildren: () =>
              import('./modules/account/account.module').then((m) => m.AccountModule
              ),
          },
          {
            path: 'project',
            title: '新增專案',
            loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
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
