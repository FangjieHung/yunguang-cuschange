import { Component, Injector, Input } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent extends BBDBaseComponent {
  @Input() message = '';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

}
