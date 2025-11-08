import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
// import { BehaviorSubject, Observable } from 'rxjs';

// Third party packages
import { List } from 'linqts';
import { Store } from '@ngrx/store';

// Custom packages
import {
  CurrAuthUserState,
  initialCurrAuthUserAction,
  requestCurrAuthUserAction,
  getCurrAuthUserLoading,
  getCurrAuthUserCache
} from '../+states/curr-auth-user';
import {
  AppNewsMsgCatReq, AppNewsMsgCatStatuses, AppNewsMsgCatView,
  AppRoleView, AppRouteView, ZipCodeView } from '../models';
import { AppMsgApiServ } from './app-msg.api.serv';
import { AppRoleApiServ } from './app-role.api.serv';
import { SharedDataApiServ } from './shared-data.api.serv';

@Injectable({
  providedIn: 'root',
})
export class StoreServ {
  // Injects
  private _appMsgApiServ = inject(AppMsgApiServ);
  private _appRoleApiServ = inject(AppRoleApiServ);
  private _sharedDataApiServ = inject(SharedDataApiServ);


  // BehaviorSubject caches

  // Caches
  public currAuthUserLoading$ = this.currAuthUserStore.select(getCurrAuthUserLoading);
  public currAuthUserCache$ = this.currAuthUserStore.select(getCurrAuthUserCache);
  private _appNewsMsgCatsCache: AppNewsMsgCatView[] | null = null;
  private _appRoutesCache: AppRouteView[] | null = null;
  private _appRolesCache: AppRoleView[] | null = null;
  private _zipCodesCache: ZipCodeView[] | null = null;

  constructor(
    private currAuthUserStore: Store<CurrAuthUserState>
  ) {
  }

  // CurrAuthUserStore
  initCurrAuthUserCache(): void {
    this.currAuthUserStore.dispatch(initialCurrAuthUserAction());
  }
  getCurrAuthUserCache(): void {
    this.currAuthUserStore.dispatch(requestCurrAuthUserAction());
  }

  // AppNewsMsgCat cache
  getAppNewsMsgCatsCache(): Observable<AppNewsMsgCatView[]> {
    if (this._appNewsMsgCatsCache === null) {
      const req = new AppNewsMsgCatReq();
      req.status = +AppNewsMsgCatStatuses.啟用;
      return this._appMsgApiServ.getAppNewsMsgCatViews(req).pipe(
        map(res => (res) ? this._appNewsMsgCatsCache = res : []));
    }

    return of(this._appNewsMsgCatsCache);
  }
  resetAppNewsMsgCatsCache(): void {
    this._appNewsMsgCatsCache = null;
  }

  // AppRole cache
  getAppRolesCache(): Observable<AppRoleView[]> {
    if (this._appRolesCache === null) {
      return this._appRoleApiServ.getAppRoleViews().pipe(
        map(res => (res) ? this._appRolesCache = res : []));
    }

    return of(this._appRolesCache);
  }
  resetAppRolesCache(): void {
    this._appRolesCache = null;
  }

  // AppRoute cache
  getAppRoutesCache(): Observable<AppRouteView[]> {
    if (this._appRoutesCache === null) {
      return this._appRoleApiServ.getActiveAppRouteViews().pipe(
        map(res => (res) ? this._appRoutesCache = res : []));
    }

    return of(this._appRoutesCache);
  }
  resetAppRoutesCache(): void {
    this._appRoutesCache = null;
  }

  // ZipCode
  getZipCodesCache(): Observable<ZipCodeView[]> {
    if (this._zipCodesCache === null) {
      return this._sharedDataApiServ.getZipCodeViews().pipe(
        map(res => (res) ? this._zipCodesCache = res : []));
    }

    return of(this._zipCodesCache);
  }
  getZipCodeText(zipCodeId: number): string {
    if (!zipCodeId) {
      return '';
    }
    if (this._zipCodesCache === null) {
      return '';
    }
    const zipCodeView = new List<ZipCodeView>(this._zipCodesCache).Where(w => w?.id === zipCodeId).FirstOrDefault();
    if (!zipCodeView) {
      return '';
    }
    return `(${zipCodeView.code})${zipCodeView.city}${zipCodeView.district}`;
  }

}
