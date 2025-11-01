import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatter',
  pure: true
})
export class PhoneFormatterPipe implements PipeTransform {
  transform(phoneStr?: string | null, extStr?: string | null, emptyReplaceStr = ''): string {
    let value = '';
    if ((phoneStr?.trim() || '').length > 0)
      value = (phoneStr?.trim() || '');
    if ((extStr?.trim() || '').length > 0)
      value = `${value} #${extStr?.trim() || ''}`;
    if (value.trim().length <= 0)
      return emptyReplaceStr;

    return value;
  }
}
