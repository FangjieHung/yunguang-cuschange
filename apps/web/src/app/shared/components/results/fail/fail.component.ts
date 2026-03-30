import { Component, Injector, Input } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent extends BBDBaseComponent {
  @Input() message = '';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

}
