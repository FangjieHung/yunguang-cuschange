/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import { APP_ENV } from '../shared/helpers';
import {
  AppEnv, PagingRequest, PagingResponse, ValueInfo,
  AppAdminDto, AppAdminReq, AppAdminView,
  AppUserStatuses, AuthUserInfo,
  ChangePasswordReq, ForgetPasswordReq
} from '../models';

// Third party packages
import { EnumValues } from 'enum-values';

@Injectable({
  providedIn: 'root',
})
export class AppUserApiServ {
  private readonly baseUrl = '/AppUser';
  appUserStatuses = AppUserStatuses;
  appUserStatusOpts = EnumValues.getNamesAndValues(AppUserStatuses);
  constructor(
    @Inject(APP_ENV) private appEnv: AppEnv,
    private http: HttpClient) { }

  //#region AppAdmin
  getCurrAppAdminDto(): Observable<AppAdminDto> {
    return this.http.get<AppAdminDto>(`${this.baseUrl}/GetCurrAppAdminDto`);
  }
  getCurrAppAdminView(): Observable<AppAdminView> {
    return this.http.get<AppAdminView>(`${this.baseUrl}/GetCurrAppAdminView`);
  }
  getAppAdminDtoById(id: number): Observable<AppAdminDto> {
    return this.http.get<AppAdminDto>(`${this.baseUrl}/GetAppAdminDtoById/${id}`);
  }
  getAppAdminViewById(id: number): Observable<AppAdminView> {
    return this.http.get<AppAdminView>(`${this.baseUrl}/GetAppAdminViewById/${id}`);
  }
  getAppAdminOptions(request: AppAdminReq): Observable<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/GetAppAdminOptions`, request);
  }
  getAppAdminViewsPaging(request: PagingRequest<AppAdminReq>): Observable<PagingResponse<AppAdminView>> {
    return this.http.put<PagingResponse<AppAdminView>>(`${this.baseUrl}/GetAppAdminViewsPaging`, request);
  }
  setCurrAppAdminDto(request: AppAdminDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetCurrAppAdminDto`, request);
  }
  setAppAdminDto(request: AppAdminDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppAdminDto`, request);
  }
  //#endregion

  //#region AppUser
  getAppUserStatuses(): Observable<any[]> {
    return of(EnumValues.getNamesAndValues(AppUserStatuses));
  }
  getAppUserStatusInfos(): Observable<ValueInfo[]> {
    // 樣式遵循 ant nzColor 標準
    return of([
      { name: '啟用', value: AppUserStatuses.啟用, style: 'success' },
      { name: '停用', value: AppUserStatuses.停用, style: 'error' }
    ]);
  }
  getCurrAuthUserInfo(): Observable<AuthUserInfo> {
    return this.http.get<AuthUserInfo>(`${this.baseUrl}/GetCurrAuthUserInfo`);
  }
  changeCurrAppUserPassword(request: ChangePasswordReq): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/ChangeCurrAppUserPassword`, request);
  }
  deleteCurrAppUser(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/DeleteCurrAppUser`);
  }
  disableAppUser(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/DisableAppUser/${id}`, null);
  }
  enableAppUser(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/EnableAppUser/${id}`, null);
  }
  forgetPassword(request: ForgetPasswordReq): Observable<boolean> {
    request.appPfm = this.appEnv.appPfm;
    return this.http.put<boolean>(`${this.baseUrl}/ForgetPassword`, request);
  }

  //#endregion

}
