/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { QueryRequestBase } from '../models/shared';
import { endOfDay, format, parseISO, startOfDay } from 'date-fns';

// Thired party packages


@Injectable({
  providedIn: 'root',
})
export class SharedFuncServ {
  doQueryTimeOptimize<T extends QueryRequestBase>(request: T): void {
    if (request.startTimeAt) {
      request.startAt = parseISO(`${format(request.startAt || new Date(), 'yyyy-MM-dd')} ${request.startTimeAt}`);
    } else {
      if (request.startAt) {
        request.startAt = startOfDay(new Date(request.startAt || new Date()));
      }
    }

    if (request.endTimeAt) {
      request.endAt = parseISO(`${format(request.endAt || new Date(), 'yyyy-MM-dd')} ${request.endTimeAt}:59`);
    } else {
      if (request.endAt) {
        request.endAt = endOfDay(new Date(request.endAt || new Date()));
      }
    }
  }
}