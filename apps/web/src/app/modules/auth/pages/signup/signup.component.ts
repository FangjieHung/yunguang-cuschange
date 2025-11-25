import { Component, inject, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustApiServ } from '@core/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BBDBaseComponent implements OnInit {
  custApiServ = inject(CustApiServ);

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('');
  }
}

@Component({
  selector: 'app-signup-completed',
  templateUrl: './signup-completed.component.html'
})
export class SignupCompletedComponent extends BBDBaseComponent implements OnInit {
  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('');
  }
}
