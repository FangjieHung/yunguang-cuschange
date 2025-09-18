import { NgModule } from '@angular/core';

import { NgxSpinnerModule } from 'ngx-spinner';
import { SwiperModule } from 'swiper/angular';

const MODULES = [
  NgxSpinnerModule,
  SwiperModule
]

@NgModule({
  imports: [
    // 防止出現警告： Property "type" is missed
    NgxSpinnerModule.forRoot({ type: "''" })
  ],
  exports: [
    ...MODULES
  ],
  providers: []
})
export class ThirdPartyModule {
}
