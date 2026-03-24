import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';

// Third party packages
import { LottieModule } from 'ngx-lottie';

export function playerFact() {
  return import('lottie-web');
}

// Custom packages
import { SharedModule } from '@core/shared';
import { PaymentRedirectComponent, ResultErrorComponent } from './pages';

// Config settings
const THIRD_MODULES = [LottieModule.forRoot({ player: playerFact })];
const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [PaymentRedirectComponent, ResultErrorComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [
    CommonModule,
    ResultRoutingModule,
    ...THIRD_MODULES,
    ...CUSTOM_MODULES
  ]
})
export class ResultModule { }
