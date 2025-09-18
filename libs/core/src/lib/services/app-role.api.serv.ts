/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Thired party packages
import { EnumValues } from 'enum-values';

// Custom packages
import {
  PagingRequest, PagingResponse, ValueInfo,
  AppRoleDto, AppRoleReq, AppRoleStatuses, AppRoleView,
  AppRouteReq, AppRouteView,
  AppUserRoleDto
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppRoleApiServ {
  private readonly baseUrl = '/AppRole';
  appRoleStatusOpts = EnumValues.getNamesAndValues(AppRoleStatuses);

  constructor(private http: HttpClient) { }

  //#region AppRole
  getAppRoleStatuses(): Observable<any[]> {
    return of(EnumValues.getNamesAndValues(AppRoleStatuses));
  }
  getAppRoleStatusInfos(): Observable<ValueInfo[]> {
    const infos = [
      { name: '啟用', value: AppRoleStatuses.啟用, style: 'success' },
      { name: '停用', value: AppRoleStatuses.停用, style: 'error' }
    ];

    return of(infos);
  }
  getAppRoleDtoById(id: number): Observable<AppRoleDto> {
    return this.http.get<AppRoleDto>(`${this.baseUrl}/GetAppRoleDtoById/${id}`);
  }
  getAppRoleViewById(id: number): Observable<AppRoleView> {
    return this.http.get<AppRoleView>(`${this.baseUrl}/GetAppRoleViewById/${id}`);
  }
  getAppRoleViews(request: AppRoleReq = new AppRoleReq()): Observable<AppRoleView[]> {
    return this.http.put<AppRoleView[]>(`${this.baseUrl}/GetAppRoleViews`, request);
  }
  getAppRoleViewsPaging(request: PagingRequest<AppRoleReq>): Observable<PagingResponse<AppRoleView>> {
    return this.http.put<PagingResponse<AppRoleView>>(`${this.baseUrl}/GetAppRoleViewsPaging`, request);
  }
  setAppRoleDto(request: AppRoleDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppRoleDto`, request);
  }

  //#endregion

  //#region AppRoute
  getActiveAppRouteViews(request: AppRouteReq = new AppRouteReq()): Observable<AppRouteView[]> {
    return this.http.put<AppRouteView[]>(`${this.baseUrl}/GetActiveAppRouteViews`, request);
  }

  //#endregion

  //#region AppUserRole
  getAppUserRoleDtosByAppUserId(appUserId: number): Observable<AppUserRoleDto[]> {
    return this.http.get<AppUserRoleDto[]>(`${this.baseUrl}/GetAppUserRoleDtosByAppUserId/${appUserId}`);
  }
  setAppUserRoleDtos(request: AppUserRoleDto[]): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppUserRoleDtos`, request);
  }

  //#endregion

}
