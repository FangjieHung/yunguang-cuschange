import { Route } from '@angular/router';
import { authGuard } from './core/auth';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard()],
  },
  {
    path: 'project-mgmt',
    loadChildren: () =>
      import('./modules/project-mgmt/project-mgmt.module').then((m) => m.ProjectMgmtModule),
    canActivate: [authGuard()],
  },
  {
    path: 'buyer-mgmt',
    loadChildren: () =>
      import('./modules/buyer-mgmt/buyer-mgmt.module').then((m) => m.BuyerMgmtModule),
    canActivate: [authGuard()],
  },
  {
    path: 'application-review',
    loadChildren: () =>
      import('./modules/application-review/application-review.module').then(
        (m) => m.ApplicationReviewModule
      ),
    canActivate: [authGuard()],
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./modules/notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
    canActivate: [authGuard()],
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports/reports.module').then(
        (m) => m.ReportsModule
      ),
    canActivate: [authGuard()],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
