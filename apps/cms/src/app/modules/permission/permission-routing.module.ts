import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  AppAdminListComponent,
  AppRoleListComponent,
  AppRoleAssignComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'app-admin/list',
    component: AppAdminListComponent
  },
  {
    path: 'app-role/list',
    component: AppRoleListComponent
  },
  {
    path: 'app-role/assign',
    component: AppRoleAssignComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
