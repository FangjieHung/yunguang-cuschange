import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustRoutingModule } from './cust-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  CustContractYearSelectComponent, CustEditComponent, CustGroupListComponent, CustMemberListComponent,
  CustRenewResultComponent
} from './pages';


const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  CustContractYearSelectComponent, CustEditComponent, CustGroupListComponent, CustMemberListComponent,
  CustRenewResultComponent,
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, CustRoutingModule, ...CUSTOM_MODULES],
})
export class CustModule { }
