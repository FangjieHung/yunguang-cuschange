/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl } from '@angular/forms';

export class FormHelper {
  static errorMsgs(errors: any, label: string, sublabel = ''): string[] {
    const msgs: string[] = [];

    Object.keys(errors).forEach((validator) => {
      if (validator === 'required') {
        msgs.push(`請輸入您的${label}`);
      }
      if (validator === 'pattern') {
        msgs.push(`請確認您輸入的格式或正負數是否正確`);
      }
      if (validator === 'phone') {
        msgs.push(`請填寫正確的行動電話`);
      }
      if (validator === 'email') {
        msgs.push(`請填寫正確的電子信箱格式`);
      }
      if (validator === 'min') {
        msgs.push(`不可小於 ${errors.min.min}`);
      }
      if (validator === 'max') {
        msgs.push(`不可大於 ${errors.max.max}`);
      }
      if (validator === 'minlength') {
        msgs.push(`長度至少為 ${errors.minlength.requiredLength} 碼字元`);
      }
      if (validator === 'maxlength') {
        msgs.push(`長度最多為 ${errors.maxlength.requiredLength} 碼字元`);
      }
      if (validator === 'matching') {
        msgs.push(`您填寫的${label}與${sublabel}必須為一樣`);
      }
      if (validator === 'noMatching') {
        msgs.push(`您填寫的${label}不能與${sublabel}一樣`);
      }
    });
    return msgs;
  }

  static hasRequired(ctrl: AbstractControl): boolean {
    if (!ctrl || !ctrl.validator) {
      return false;
    }

    const validator = ctrl.validator({} as AbstractControl);

    if (validator && validator['required']) {
      return true;
    }

    return false;
  }
}
