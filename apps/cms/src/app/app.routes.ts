import { Route } from '@angular/router';
import { authGuard } from './core/auth';

// Auth routes (no layout wrapper)
const authRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

// Protected routes with AppShell layout
const protectedRoutes: Route[] = [
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
    path: 'business-operator',
    loadChildren: () =>
      import('./modules/business-operator/business-operator.module').then(
        (m) => m.BusinessOperatorModule
      ),
    canActivate: [authGuard()],
  },
];

export const appRoutes: Route[] = [
  // Auth routes (no layout wrapper)
  ...authRoutes,
  // App shell with protected routes
  {
    path: '',
    loadChildren: () =>
      import('./shell/shell.module').then((m) => m.ShellModule),
    children: protectedRoutes,
    canActivate: [authGuard()],
  },
  // Default redirect
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  // Wildcard route - redirect to dashboard or login
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
