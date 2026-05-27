import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplanationRoutingModule } from './explanation-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  PrinciplesPageComponent,
  TimelinePageComponent,
  FaqPageComponent,
  PricingPageComponent,
  EquipmentPageComponent
} from './pages';
import {
  CustomizationPrinciplesComponent,
  CustomizationTimelineComponent,
  CustomizationFaqComponent,
  CustomizationPricingComponent,
  CustomizationEquipmentComponent,
} from '../../shared/components';

const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [
  PrinciplesPageComponent,
  TimelinePageComponent,
  FaqPageComponent,
  PricingPageComponent,
  EquipmentPageComponent
];
const STANDALONE_COMPONENTS = [
  CustomizationPrinciplesComponent,
  CustomizationTimelineComponent,
  CustomizationFaqComponent,
  CustomizationPricingComponent,
  CustomizationEquipmentComponent,
];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [
    CommonModule,
    ExplanationRoutingModule,
    ...CUSTOM_MODULES,
    ...STANDALONE_COMPONENTS,
  ]
})
export class ExplanationModule { }
