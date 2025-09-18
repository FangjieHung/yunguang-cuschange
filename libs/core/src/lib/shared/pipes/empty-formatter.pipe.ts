import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyFormatter',
  pure: true
})
export class EmptyFormatterPipe implements PipeTransform {
  transform(value?: string | number | null, emptyReplaceStr = ''): string | number {
    if (value) {
      return value;
    }

    return emptyReplaceStr;
  }
}
