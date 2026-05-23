import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './pages';
import {
  CustomizationPrinciplesComponent,
  CustomizationTimelineComponent,
  CustomizationFaqComponent,
  CustomizationPricingComponent,
  CustomizationEquipmentComponent,
} from '../../shared/components';

const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [DefaultComponent];
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
    HomeRoutingModule,
    ...CUSTOM_MODULES,
    ...STANDALONE_COMPONENTS,
  ],
})
export class HomeModule {}
