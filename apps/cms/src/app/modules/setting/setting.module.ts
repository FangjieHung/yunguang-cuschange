import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  ShapediverTicketEditComponent,
} from './pages';


const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  ShapediverTicketEditComponent,
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, SettingRoutingModule, ...CUSTOM_MODULES],
})
export class SettingModule { }
