import { Component, inject, Injector } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustApiServ } from '@core/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BBDBaseComponent {
  custApiServ = inject(CustApiServ);

  constructor(protected override injector: Injector) {
    super(injector);
  }
}

@Component({
  selector: 'app-signup-completed',
  templateUrl: './signup-completed.component.html'
})
export class SignupCompletedComponent extends BBDBaseComponent {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
