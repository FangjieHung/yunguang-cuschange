/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'linqts';

@Pipe({
  name: 'arySort',
  pure: false
})
export class ArySortPipe implements PipeTransform {
  transform(source: any[], seq: '' | 'asc' | 'desc' = ''): any {
    if (!source) {
      return source;
    }

    if (source.length <= 0) {
      return source;
    }

    const items = new List(source);
    if (seq === 'desc') {
      return items.OrderByDescending((ob: any) => ob.sort).ToArray();
    } else {
      return items.OrderBy((ob: any) => ob.sort).ToArray();
    }
  }
}
