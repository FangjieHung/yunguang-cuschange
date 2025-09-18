import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { BBDNotifyService } from './bbd-notify.service';
import { BBDNotifyComponent } from './bbd-notify.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule
    ],
    declarations: [
      BBDNotifyComponent
    ],
    exports: [BBDNotifyComponent],
    providers: [BBDNotifyService]
  })
  export class BBDNotifyModule {
  }
