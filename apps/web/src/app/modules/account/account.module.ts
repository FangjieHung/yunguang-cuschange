import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

// Custom packages
//import { SharedModule } from '@core/shared';
import { SharedModule } from '../../shared/shared.module';
import {
  ProfileComponent,
  ResetPasswordComponent,
  AccountComponent
} from './pages';

// Config settings
const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [
  ProfileComponent,
  ResetPasswordComponent,
  AccountComponent
];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [CommonModule, AccountRoutingModule, ...CUSTOM_MODULES],
})
export class AccountModule { }
