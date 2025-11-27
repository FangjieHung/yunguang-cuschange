import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third party packages
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

// Custom packages
import { SharedModule as CoreSharedModule } from '@core/shared';
import { GlassBgComponent, SkeletonLoaderComponent, PaginatorComponent, ResultEmptyComponent } from './components';
import { CustGroupControlComponent, CustMemberControlComponent, ZipCodeControlComponent } from './controls';
import {
  CustEditWidgetComponent,
  ImagePreviewDialogWidgetComponent, JsonViewDialogWidgetComponent
} from './widgets';

const CUST_MODULES = [CoreSharedModule];
const CUST_COMPONENTS = [
  GlassBgComponent, SkeletonLoaderComponent, PaginatorComponent, ResultEmptyComponent
];
const CUST_CONTROLS = [CustGroupControlComponent, CustMemberControlComponent, ZipCodeControlComponent];
const CUST_WIDGETS = [CustEditWidgetComponent, ImagePreviewDialogWidgetComponent, JsonViewDialogWidgetComponent];
const THIRD_MODULES = [InfiniteScrollModule, NgxSpinnerModule];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS,
    ...CUST_WIDGETS
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
    ...CUST_CONTROLS,
    ...CUST_WIDGETS,
    ...THIRD_MODULES
  ],
  providers: []
})
export class SharedModule { }
