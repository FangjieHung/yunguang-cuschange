import { Pipe, PipeTransform } from '@angular/core';

// Custom packages
import '../extensions/date.extension';

@Pipe({
  name: 'dateFormatter',
  pure: true
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: Date | null | undefined, format = 'yyyy-MM-dd', maxDateOrNullReplaceStr = ''): string {
    if (!value) {
      return maxDateOrNullReplaceStr;
    }

    if (value.isMaxUtcDate()) {
      return maxDateOrNullReplaceStr;
    }

    return value.getFormatString(format);
  }
}
