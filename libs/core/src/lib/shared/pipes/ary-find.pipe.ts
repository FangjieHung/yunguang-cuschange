/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aryFind',
  pure: false
})
export class AryFindPipe implements PipeTransform {
  transform(source: any[] | null, onlyFieldNameValue: string | null = null, conditions: { fieldName: string, fieldValue: any}[]): any {
    if (!source) {
      return null;
    }

    if (source.length <= 0) {
      return null;
    }

    if (!conditions || conditions.length <= 0) {
      return null;
    }

    let result = [...source];

    for (let idx = 0; idx < conditions.length; idx++) {
      result = result.filter(item => item[conditions[idx].fieldName] === conditions[idx].fieldValue);

      if (!result || result.length <= 0) {
        return null;
      }
    }

    if (onlyFieldNameValue) {
      return result[0][onlyFieldNameValue];
    }

    return result[0];
  }
}
