import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  OrgAboutEditComponent, OrgContactEditComponent, WebPolicyEditComponent
} from './pages';

const routes: Routes = [
  {
    path: 'org-about/edit',
    component: OrgAboutEditComponent
  },
  {
    path: 'org-contact/edit',
    component: OrgContactEditComponent
  },
  {
    path: 'web-policy/edit',
    component: WebPolicyEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }
