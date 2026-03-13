import { NgModule } from '@angular/core';

import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { NgxPrintModule } from 'ngx-print';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QuillModule } from 'ngx-quill';;
import { SwiperModule } from 'swiper/angular';

const MODULES = [
  NgxMatTimepickerModule, NgxPrintModule, NgxSpinnerModule,
  QuillModule, SwiperModule
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
