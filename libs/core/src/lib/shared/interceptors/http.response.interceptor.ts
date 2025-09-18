/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

// Custom packages
import { AppAuthApiServ } from '../../services';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  private isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;

  constructor(
    private appAuthApiServ: AppAuthApiServ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((val: HttpEvent<any>) => {
        if (val instanceof HttpResponse) {
          const body = val.body;
          this.doConvert(body);
        }
        return val;
      }),
      catchError(resp => {
      if (resp && resp.status && resp.status === 401) {
        this.appAuthApiServ.signout();
      }

      return throwError(() => resp);
    }));
  }

  private isIsoDateString(value: any): boolean {
    if (!value) {
      return false;
    }

    if (typeof value === 'string') {
      return this.isoDateFormat.test(value);
    }

    return false;
  }

  private doConvert(body: any) {
    if (!body) {
      return body;
    }

    if (typeof body !== 'object') {
      return body;
    }

    for (const key of Object.keys(body)) {
      const value = body[key];

      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
        continue;
      }

      if (typeof value === 'object') {
        this.doConvert(value);
      }
    }
  }

}

