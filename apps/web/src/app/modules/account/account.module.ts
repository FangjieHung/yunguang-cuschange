import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

// Custom packages
import { SharedModule } from '@core/shared';
import {
  ProfileComponent,
} from './pages';

// Config settings
const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [
  ProfileComponent,
];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [CommonModule, AccountRoutingModule, ...CUSTOM_MODULES],
})
export class AccountModule { }
