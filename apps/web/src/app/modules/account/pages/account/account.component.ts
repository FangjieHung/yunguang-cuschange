/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})

export class AccountComponent extends BBDBaseComponent implements OnInit {

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('');
  }
}
