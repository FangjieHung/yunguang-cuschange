/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})

export class PasswordComponent extends BBDBaseComponent implements OnInit {


  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('init header');
  }
}
