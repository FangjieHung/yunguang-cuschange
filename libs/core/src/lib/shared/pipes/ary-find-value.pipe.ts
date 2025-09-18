/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aryFindValue',
  pure: false
})
export class AryFindValuePipe implements PipeTransform {
  transform(value: any, source: any[] | null, keyFieldName: string, valueFieldName: string): any {
    if (!value) {
      return null;
    }

    if (!source) {
      return null;
    }

    const findObj = source.find(info => {

      if (info[keyFieldName] !== undefined) {
        return info[keyFieldName] === value;
      }

      return false;
    });

    if (findObj && findObj[valueFieldName] !== undefined) {
      return findObj[valueFieldName];
    }

    return null;
  }
}
