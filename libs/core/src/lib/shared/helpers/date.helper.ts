// date-fns packages
import { parseISO, isEqual, startOfDay } from 'date-fns';

// Custom packages
import { APP_MAX_UTC_DATE_ISO_FORMAT } from '../../consts';

export class DateHelper {
  static parseAppMaxUtcDateToNull(value: Date | null | undefined): Date | null {
    if (!value) {
      return null;
    }

    if (isEqual(value, parseISO(APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
      return null;
    }

    return value;
  }
  static parseNullToAppMaxUtcDate(value: Date | null | undefined): Date {
    if (!value) {
      return parseISO(APP_MAX_UTC_DATE_ISO_FORMAT);
    }
    return value;
  }
}
