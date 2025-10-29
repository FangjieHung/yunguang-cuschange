// date-fns packages
import {
  startOfDay,
  endOfDay,
  isEqual,
  parseISO,
  format
} from 'date-fns';

// Custom packages
import { APP_MAX_UTC_DATE_ISO_FORMAT } from '../../consts';

declare global {
  interface Date {
    getStartOfDay(): Date;
    getEndOfDay(): Date;
    getAppMaxUtcDate(): Date;
    getFormatString(format: string): string;
    isMaxUtcDate(): boolean;
  }
}

Date.prototype.getStartOfDay = function(): Date {
  if (!this) {
    return this;
  }
  return startOfDay(this);
};

Date.prototype.getEndOfDay = function(): Date {
  if (!this) {
    return this;
  }

  const d = endOfDay(this);
  d.setMilliseconds(0);

  return d;
};

Date.prototype.getAppMaxUtcDate = (): Date => {
  return new Date(APP_MAX_UTC_DATE_ISO_FORMAT);
};

Date.prototype.getFormatString = function(dateFormat: string): string {
  if (!this) {
    return '';
  }

  return format(this, dateFormat);
};

Date.prototype.isMaxUtcDate = function(): boolean {
  if (!this) {
    return false;
  }

  if (isEqual(this, parseISO(APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
    return true;
  }

  return false;
};

export {};
