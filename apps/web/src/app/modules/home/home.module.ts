import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Third party packages
import { LottieModule } from 'ngx-lottie';

export function playerFact() {
  return import('lottie-web');
}

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './pages';
import { GoogleMapsModule } from '@angular/google-maps';

// Config settings
const THIRD_MODULES = [LottieModule.forRoot({ player: playerFact })];
const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [DefaultComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapsModule,
    ...THIRD_MODULES,
    ...CUSTOM_MODULES
  ]
})
export class HomeModule { }
