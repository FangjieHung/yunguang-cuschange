import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom packages
import { AppAuthGuard } from '@core/shared';
import { DefaultContainerComponent } from './modules/_layout'

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultContainerComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'app-msg',
        loadChildren: () => import('./modules/app-msg/app-msg.module').then(m => m.AppMsgModule)
      },
      {
        path: 'campaign',
        loadChildren: () => import('./modules/campaign/campaign.module').then(m => m.CampaignModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'setting',
        loadChildren: () => import('./modules/setting/setting.module').then(m => m.SettingModule)
      },
      {
        path: 'permission',
        loadChildren: () => import('./modules/permission/permission.module').then(m => m.PermissionModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
