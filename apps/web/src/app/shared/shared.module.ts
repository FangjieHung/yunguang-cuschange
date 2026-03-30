import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third party packages
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SwiperModule } from 'swiper/angular';

// Custom packages
import { SharedModule as CoreSharedModule } from '@core/shared';
import {
  GlassBgComponent,
  PaginatorComponent,
  ResultEmptyComponent,
  CompleteComponent,
  FailComponent,
} from './components';
import {
  CampRegControlComponent,
  CustGroupControlComponent,
  CustMemberControlComponent,
  ZipCodeControlComponent,
} from './controls';
import {
  CustEditWidgetComponent,
  ImagePreviewDialogWidgetComponent,
  JsonViewDialogWidgetComponent,
} from './widgets';
import { PartnerLogosComponent } from './components/partner-logos/partner-logos.component';

const CUST_MODULES = [CoreSharedModule];
const CUST_COMPONENTS = [
  GlassBgComponent,
  PaginatorComponent,
  ResultEmptyComponent,
  CompleteComponent,
  FailComponent,
];
const CUST_CONTROLS = [
  CampRegControlComponent,
  CustGroupControlComponent,
  CustMemberControlComponent,
  ZipCodeControlComponent,
];
const CUST_WIDGETS = [
  CustEditWidgetComponent,
  ImagePreviewDialogWidgetComponent,
  JsonViewDialogWidgetComponent,
];
const THIRD_MODULES = [InfiniteScrollModule, NgxSpinnerModule, SwiperModule];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS,
    ...CUST_WIDGETS,
    PartnerLogosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...CUST_MODULES,
    ...THIRD_MODULES,
  ],
  exports: [
    ...CUST_MODULES,
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS,
    ...CUST_WIDGETS,
    ...THIRD_MODULES,
    PartnerLogosComponent,
  ],
  providers: [],
})
export class SharedModule {}
