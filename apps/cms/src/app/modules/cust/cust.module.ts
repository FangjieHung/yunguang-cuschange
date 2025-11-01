import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustRoutingModule } from './cust-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  CustEditComponent, CustGroupListComponent, CustMemberListComponent
} from './pages';


const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  CustEditComponent, CustGroupListComponent, CustMemberListComponent,
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, CustRoutingModule, ...CUSTOM_MODULES],
})
export class CustModule { }
