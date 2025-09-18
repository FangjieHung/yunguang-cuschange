/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonParse',
  pure: true
})
export class JsonParsePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) {
      return null;
    }

    return JSON.parse(value);
  }
}
