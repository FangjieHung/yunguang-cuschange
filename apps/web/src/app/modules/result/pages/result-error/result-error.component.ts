import { Component, Injector } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'app-result-error',
  templateUrl: './result-error.component.html',
  styleUrls: ['./result-error.component.scss']
})
export class ResultErrorComponent extends BBDBaseComponent {

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  // ngOnInit(): void { }
}
