import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

// Custom packages
//import { SharedModule } from '@core/shared';
import { SharedModule } from '../../shared/shared.module';
import {
  AccountComponent,
  ProfileComponent,
  ResetPasswordComponent,
  MyBillRecComponent, MyCampRegRecComponent
} from './pages';

// Config settings
const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [
  AccountComponent,
  ProfileComponent,
  ResetPasswordComponent,
  MyBillRecComponent, MyCampRegRecComponent
];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [CommonModule, AccountRoutingModule, ...CUSTOM_MODULES],
})
export class AccountModule { }
