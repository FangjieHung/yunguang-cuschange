/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { BBDNotifyComponent } from './bbd-notify.component';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BBDNotifyService {
  dialogRef: MatSnackBarRef<BBDNotifyComponent> | undefined;
  private config = new MatSnackBarConfig();

  constructor(private snackbar: MatSnackBar) {
    this.config.duration = 8000;
    this.config.verticalPosition = 'top';
  }

  open(text: string): void {
    this.doShowLog(text);
    this.config.data = { text };
    this.openFromComponent();
  }

  success(text: string): void {
    this.doShowLog(text);
    this.config.data = { text, icon: 'check_circle', iconStyle: 'text-blue-500' };
    this.openFromComponent();
  }

  error(text: string, resMsg: any = null): void {
    if (resMsg) {
      if (typeof resMsg === 'string') {
        text = `${text}「${resMsg}」`
      } else {
        const errorMessage = resMsg?.errorMessage || resMsg?.error?.errorMessage;
        text = `${text} ${errorMessage ? ('[' + errorMessage + ']') : ''}`
      }
    }

    this.doShowLog(text);
    this.config.data = { text, icon: 'cancel', iconStyle: 'text-red-500' };
    this.openFromComponent();
  }

  errorByFormValid(text: string, resMsg: any = null, controls: any = null): void {
    if (controls) {
      Object.values(controls).forEach((control: any, index) => {
        if (!control.valid) {
          console.log(`請檢查必填欄位:${Object.keys(controls)[index]}`)
        }
      });
    }
    this.error(text, resMsg);
  }
  
  info(text: string): void {
    this.doShowLog(text);
    this.config.data = { text, icon: 'info', iconStyle: 'text-stone-500' };
    this.openFromComponent();
  }

  warning(text: string): void {
    this.doShowLog(text);
    this.config.data = { text, icon: 'warning', iconStyle: 'text-orange-500' };
    this.openFromComponent();
  }

  private openFromComponent(): void {
    this.dialogRef = this.snackbar.openFromComponent(BBDNotifyComponent, this.config)
  }

  private doShowLog(text: string): void {
    if (isDevMode()) {
      console.log(`BBDNotify:${new Date().toISOString()} - ${text}`);
    }
  }
}
