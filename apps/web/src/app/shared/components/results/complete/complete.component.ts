import { Component, Injector, Input } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent extends BBDBaseComponent {
  @Input() message = '註冊成功！登入後即享受會員獨有的功能與服務。';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

}
