import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
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

// Config settings
const CUSTOM_MODULES = [SharedModule];

@NgModule({
  declarations: [
    PrinciplesPageComponent,
    TimelinePageComponent,
    FaqPageComponent,
    PricingPageComponent,
    EquipmentPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ExplanationRoutingModule,
    ...CUSTOM_MODULES
  ]
})
export class ExplanationModule { }
