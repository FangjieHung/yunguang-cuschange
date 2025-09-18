/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// Custom packages
import { APP_ENV } from '../helpers';
import { AppEnv } from '../../models';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(@Inject(APP_ENV) private appEnv: AppEnv) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 檢查 URL 是否已經是完整路徑（以 http:// 或 https:// 開頭）
    const isFullUrl = request.url.startsWith('http://') || request.url.startsWith('https://');

    // 如果是完整路徑，直接處理請求
    if (isFullUrl) {
      return next.handle(request);
    }

    let apiUrl = this.appEnv?.apiServer || '';
    if (request.url.startsWith('/ArcGen')) {
      apiUrl = apiUrl.replace('/Portal', '');
    }
    // 否則加上 API 伺服器前綴
    const newRequest = request.clone({
      url: apiUrl + request.url,
    });

    return next.handle(newRequest);
  }
}
