import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third party packages
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

// Custom packages
import { SharedModule as CoreSharedModule } from '@core/shared';
import { ResultEmptyComponent, GlassBgComponent } from './components';

import {
  ImagePreviewDialogWidgetComponent, JsonViewDialogWidgetComponent
} from './widgets';

const CUST_MODULES = [CoreSharedModule];
const CUST_COMPONENTS = [
  // components
  ResultEmptyComponent, GlassBgComponent,
  // widgets
  ImagePreviewDialogWidgetComponent, JsonViewDialogWidgetComponent
];
const THIRD_MODULES = [InfiniteScrollModule, NgxSpinnerModule];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...CUST_MODULES,
    ...THIRD_MODULES
  ],
  exports: [
    ...CUST_MODULES,
    ...CUST_COMPONENTS,
    ...THIRD_MODULES
  ],
  providers: []
})
export class SharedModule { }
