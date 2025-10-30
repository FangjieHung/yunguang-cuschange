// date-fns packages
import { parseISO, isEqual, format, startOfDay } from 'date-fns';

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

  static getDateAndTimeMerge(dateAt: Date | null, timeAt: string | null): Date {
    if (!dateAt) {
      return dateAt || new Date;
    }
    if (isEqual(dateAt, parseISO(APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
      return dateAt;
    }

    if (timeAt) {
      return parseISO(`${format(dateAt || new Date(), 'yyyy-MM-dd')} ${timeAt}`);
    } else {
      if (dateAt) {
        return startOfDay(new Date(dateAt || new Date()));
      }
    }
    return dateAt;
  }

  static getHourMinute(value: Date | null | undefined): string {
    if (!value) {
      return '';
    }
    return format(value, "HH:mm");
  }
}
