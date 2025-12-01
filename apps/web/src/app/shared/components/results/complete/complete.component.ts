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
  @Input() message = '';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

}
