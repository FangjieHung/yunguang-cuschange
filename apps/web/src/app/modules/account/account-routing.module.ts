import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  ProfileComponent, ResetPasswordComponent,
  AccountComponent
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'password', component: ResetPasswordComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
