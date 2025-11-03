import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third party packages
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

// Custom packages
import { SharedModule as CoreSharedModule } from '@core/shared';
import { ResultEmptyComponent, GlassBgComponent } from './components';

import {
  ShapediverViewerWidgetComponent,
  ImagePreviewDialogWidgetComponent, JsonViewDialogWidgetComponent, MapboxEditWidgetComponent,
} from './widgets';

const CUST_MODULES = [CoreSharedModule];
const CUST_COMPONENTS = [
  // components
  ResultEmptyComponent, GlassBgComponent,
  // widgets
  ShapediverViewerWidgetComponent,
  ImagePreviewDialogWidgetComponent, JsonViewDialogWidgetComponent, MapboxEditWidgetComponent,
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
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiaHBicm90aGVyIiwiYSI6ImNtODVmZGtsbTJicTEybXExcXQ1dzJmNzQifQ.641_BzJs9sz9pcdtxo_lqA'
    }),
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
