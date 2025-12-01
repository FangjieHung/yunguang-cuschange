/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { isSameDay } from 'date-fns';

@Pipe({
  name: 'isSameDate',
  pure: false
})
export class IsSameDatePipe implements PipeTransform {
  transform(value: Date | null | undefined, compareValue: Date | null | undefined = new Date()): boolean {
    if (!value) {
      return false;
    }
    if (!compareValue) {
      return false;
    }

    return isSameDay(value, compareValue);
  }
}
