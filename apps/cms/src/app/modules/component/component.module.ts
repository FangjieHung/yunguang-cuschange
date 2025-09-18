import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  BuildCompEditComponent, BuildCompListComponent,
  BuildCompBundleListComponent, BuildCompBundleEditComponent,
} from './pages';


const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  BuildCompEditComponent, BuildCompListComponent,
  BuildCompBundleListComponent, BuildCompBundleEditComponent,
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, ComponentRoutingModule, ...CUSTOM_MODULES],
})
export class ComponentModule { }
