import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  ForgetPasswordComponent, SigninComponent, SignupComponent, SignupCompletedComponent
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
    path: 'signup/complete',
    component: SignupCompletedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
