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
    ExplanationRoutingModule,
    SharedModule
  ]
})
export class ExplanationModule { }
