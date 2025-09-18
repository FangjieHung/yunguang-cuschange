import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  CorpListComponent, CorpEditComponent,
  CustomerListComponent, CustomerEditComponent,
} from './pages';


const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  CorpListComponent, CorpEditComponent,
  CustomerListComponent, CustomerEditComponent,
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, CustomerRoutingModule, ...CUSTOM_MODULES],
})
export class CustomerModule { }
