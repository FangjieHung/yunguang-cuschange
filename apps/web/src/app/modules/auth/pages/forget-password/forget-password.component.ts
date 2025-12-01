import { Component, OnInit, Injector } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AppUserApiServ } from '@core/services';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetResetPasswordComponent extends BBDBaseComponent implements OnInit {

  constructor(
    protected override injector: Injector) {
      super(injector);
  }
  
  ngOnInit(): void {
    console.log('');
  }

  
  
}
