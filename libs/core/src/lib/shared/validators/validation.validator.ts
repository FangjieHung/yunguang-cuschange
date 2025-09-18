import { AbstractControl, ValidatorFn } from '@angular/forms';

export class Validation {
  static match(controlName: string, matchingControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const compareControl = controls.get(matchingControlName);

      if (compareControl?.errors && !compareControl.errors['matching']) {
        return null;
      }

      if (control?.value !== compareControl?.value) {
        controls.get(matchingControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  static noMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const compareControl = controls.get(matchingControlName);

      if (compareControl?.errors && !compareControl.errors['noMatching']) {
        return null;
      }

      if (control?.value === compareControl?.value) {
        controls.get(matchingControlName)?.setErrors({ noMatching: true });
        return { noMatching: true };
      } else {
        return null;
      }
    };
  }
}
