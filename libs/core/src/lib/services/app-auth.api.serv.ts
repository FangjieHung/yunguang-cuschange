import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// Custom packages
// import { StoreService } from 'src/app/services/store.service';
import { APP_ENV } from '../shared/helpers';
import {
  AppEnv,
  AppTokenInfo, AuthUserInfo, SigninReq
} from '../models';
import { PermissionServ, StoreServ } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AppAuthApiServ {
  private readonly baseUrl = '/AppAuth';
  currToken: AppTokenInfo | null = null;
  currUser: AuthUserInfo | null = null;

  constructor(
    @Inject(APP_ENV) private appEnv: AppEnv,
    private http: HttpClient,
    private storeServ: StoreServ,
    private permissionServ: PermissionServ,
    public router: Router) {
    this.getCurrUser();
  }

  get isSignin(): boolean {
    if (this.hasAccessToken) {
      return true;
    }
    return false;
  }

  get hasAccessToken(): boolean {
    const tokenStr = this.getAccessToken()?.accessToken;

    if (!tokenStr || tokenStr.length <= 0) {
      return false;
    }
    return true;
  }


  signin(request: SigninReq): Observable<AppTokenInfo | null> {
    let reqUrl = '';

    switch (this.appEnv.appPfm) {
      case 'WEB': {
        reqUrl = `${this.baseUrl}/SigninWEB`;
        break;
      }
      case 'CMS': {
        reqUrl = `${this.baseUrl}/SigninCMS`;
        break;
      }
      default: {
        return throwError(() => new Error('無法取得有效的登入平台來源。'));
      }
    }
    return this.http.put<AppTokenInfo | null>(reqUrl, request)
      .pipe(
        map(tokenInfo => {
          if (!tokenInfo || !tokenInfo?.accessToken) {
            return null;
          }

          this.currToken = tokenInfo;
          this.setAppTokenToStorage();

          return this.currToken;
        })
      );
  }

  signout(isNavigateSignin = true): void {
    this.currToken = null;
    this.currUser = null;
    this.removeUserToStorage();
    this.storeServ.initCurrAuthUserCache();
    if (isNavigateSignin) {
      this.router.navigate(['auth/signin']);
    }
  }

  getCurrUser(isRefresh = false): AuthUserInfo | null {
    const tokenStr = this.getAccessToken()?.accessToken;
    if (!tokenStr || tokenStr.length <= 0) {
      this.currUser = null;
      return this.currUser;
    }

    if (isRefresh) {
      this.currUser = null;
    }

    if (!this.currUser && typeof window !== 'undefined') {
      this.getAuthUserFromStorage();
    }
    // 權限清單更新，搭配Pipe使用
    this.permissionServ.setAuthRoutes(this.currUser?.authUserRoutes || []);
    return this.currUser;
  }

  getAccessToken(): AppTokenInfo | null {
    if (!this.currToken && typeof window !== 'undefined') {
      this.getAppTokenFromStorage();
    }

    return this.currToken;
  }

  getAppTokenFromStorage(): AppTokenInfo | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const tokenInfo = window.localStorage.getItem(this.appEnv.storageTokenName);

    if (!tokenInfo) {
      return null;
    }

    this.currToken = JSON.parse(tokenInfo);

    return this.currToken;
  }

  getAuthUserFromStorage(): AuthUserInfo | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const userInfo = window.sessionStorage.getItem(this.appEnv.storageAuthUserName);

    if (!userInfo) {
      return null;
    }

    this.currUser = JSON.parse(userInfo);

    return this.currUser;
  }

  setAppTokenToStorage(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.removeUserToStorage();

    window.localStorage.setItem(this.appEnv.storageTokenName, JSON.stringify(this.currToken));
  }

  removeUserToStorage(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.removeItem(this.appEnv.storageTokenName);
    window.sessionStorage.removeItem(this.appEnv.storageAuthUserName);
  }
}
