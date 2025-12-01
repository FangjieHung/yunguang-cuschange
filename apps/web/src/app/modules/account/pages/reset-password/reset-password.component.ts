/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})

export class ResetPasswordComponent extends BBDBaseComponent implements OnInit {
passwordHide = true;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('init header');
  }
}
