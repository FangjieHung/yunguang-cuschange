/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

// Custom packages
import { FormHelper } from '../helpers';

@Pipe({
  name: 'ctrlHasRequired',
  pure: true
})
export class CtrlHasRequiredPipe implements PipeTransform {
  transform(ctrl: AbstractControl | null): boolean {
    if (!ctrl || !ctrl.validator) {
      return false;
    }

    return FormHelper.hasRequired(ctrl);
  }
}
