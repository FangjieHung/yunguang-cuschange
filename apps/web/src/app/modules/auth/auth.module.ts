import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

// Custom packages
//import { SharedModule } from '@core/shared';
import { SharedModule } from '../../shared/shared.module';
import {
  ForgetResetPasswordComponent,
  SigninComponent, SignupComponent, SignupCompletedComponent
} from './pages';

const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [
  ForgetResetPasswordComponent,
  SigninComponent, SignupComponent, SignupCompletedComponent
];

@NgModule({
  declarations: [
    ...CUSTOM_COMPONENTS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...CUSTOM_MODULES
  ]
})
export class AuthModule { }
