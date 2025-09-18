import { inject, Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// Third party packages
import { Store } from '@ngrx/store';

// Custom packages
import {
  CurrAuthUserState,
  initialCurrAuthUserAction,
  requestCurrAuthUserAction,
  getCurrAuthUserLoading,
  getCurrAuthUserCache
} from '../+states/curr-auth-user';
import { AppRoleView, AppRouteView, ZipCodeView } from '../models';
import { map, Observable, of } from 'rxjs';
import { SharedDataApiServ } from './shared-data.api.serv';
import { List } from 'linqts';
import { AppRoleApiServ } from './app-role.api.serv';

@Injectable({
  providedIn: 'root',
})
export class StoreServ {
  // Injects
  private _sharedDataApiServ = inject(SharedDataApiServ);
  private _appRoleApiServ = inject(AppRoleApiServ);

  // BehaviorSubject caches

  // Caches
  public currAuthUserLoading$ = this.currAuthUserStore.select(getCurrAuthUserLoading);
  public currAuthUserCache$ = this.currAuthUserStore.select(getCurrAuthUserCache);
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

}
