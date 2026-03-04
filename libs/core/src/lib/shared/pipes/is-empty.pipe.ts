/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty',
  pure: false
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: Date | string | number | null | any[]): boolean {
    if (!value) {
      return true;
    }
    if (value instanceof Date)  {
      return value.isMaxUtcDate();
    }

    if (Array.isArray(value) === true) {
      return (value as any[]).length === 0;
    }

    return false;
  }
}
