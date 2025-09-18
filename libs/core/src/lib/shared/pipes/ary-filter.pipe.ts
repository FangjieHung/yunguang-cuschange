/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aryFilter',
  pure: false
})
export class AryFilterPipe implements PipeTransform {
  transform(source: any[], condition: { fieldName: string, fieldValue: any} | { fieldName: string, fieldValue: any}[]): any {
    if (!source || source.length <= 0) {
      return [];
    }

    if (!condition) {
      return [];
    }
    let conditions: any[] = [];
    if (Array.isArray(condition)) {
      if ((condition as any[]).length <= 0) {
        return [];
      }

      conditions = [...(condition as any[])];
    } else {
      conditions.push(condition);
    }

    let result = [...source];

    for (let idx = 0; idx < conditions.length; idx++) {
      result = result.filter(item => item[conditions[idx].fieldName] === conditions[idx].fieldValue);

      if (!result || result.length <= 0) {
        return [];
      }
    }

    return result;
  }
}
