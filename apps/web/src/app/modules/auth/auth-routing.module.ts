import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  ForgetPasswordComponent, SigninComponent, SignupComponent, PolicyComponent
} from './pages';

const routes: Routes = [
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
