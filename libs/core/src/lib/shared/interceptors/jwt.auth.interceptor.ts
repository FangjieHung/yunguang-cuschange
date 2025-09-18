/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// Custom packages
import { AppAuthApiServ } from '../../services';

@Injectable()
export class JWTAuthInterceptor implements HttpInterceptor {

  constructor(private appAuthApiServ: AppAuthApiServ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.appAuthApiServ.getAccessToken()?.accessToken;
    if (token && token.length > 0) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
