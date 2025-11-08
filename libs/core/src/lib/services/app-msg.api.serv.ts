/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Third party packages
import { EnumValues } from 'enum-values';

// Custom packages
import {
  PagingRequest, PagingResponse, UploadFormReq, ValueInfo,
  AppNewsMsgCatDto, AppNewsMsgCatReq, AppNewsMsgCatStatuses, AppNewsMsgCatView,
  AppNewsMsgDto, AppNewsMsgReq, AppNewsMsgStatuses, AppNewsMsgView,
  BannerAdDto, BannerAdReq, BannerAdStatuses, BannerAdView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppMsgApiServ {
  private readonly baseUrl = '/AppMsg';
  appNewsMsgCatStatuses = AppNewsMsgCatStatuses;
  appNewsMsgCatStatusOpts = EnumValues.getNamesAndValues(AppNewsMsgCatStatuses);
  appNewsMsgStatuses = AppNewsMsgStatuses;
  appNewsMsgStatusOpts = EnumValues.getNamesAndValues(AppNewsMsgStatuses);
  bannerAdStatuses = BannerAdStatuses;
  bannerAdStatusOpts = EnumValues.getNamesAndValues(BannerAdStatuses);

  constructor(private http: HttpClient) { }

  //#region AppNewsMsgCat
  getAppNewsMsgCatStatusInfos(): ValueInfo[] {
    // 樣式遵循 ant nzColor 標準
    return [
      { name: '啟用', value: AppNewsMsgCatStatuses.啟用, style: 'success' },
      { name: '停用', value: AppNewsMsgCatStatuses.停用, style: 'error' }
    ];
  }
  getAppNewsMsgCatDtoById(id: number): Observable<AppNewsMsgCatDto> {
    return this.http.get<AppNewsMsgCatDto>(`${this.baseUrl}/GetAppNewsMsgCatDtoById/${id}`);
  }
  getAppNewsMsgCatViewById(id: number): Observable<AppNewsMsgCatView> {
    return this.http.get<AppNewsMsgCatView>(`${this.baseUrl}/GetAppNewsMsgCatViewById/${id}`);
  }
  getAppNewsMsgCatViewByUniqueId(uniqueId: string): Observable<AppNewsMsgCatView> {
    return this.http.get<AppNewsMsgCatView>(`${this.baseUrl}/GetAppNewsMsgCatViewByUniqueId/${uniqueId}`);
  }
  getAppNewsMsgCatViews(request: AppNewsMsgCatReq = new AppNewsMsgCatReq()): Observable<AppNewsMsgCatView[]> {
    return this.http.put<AppNewsMsgCatView[]>(`${this.baseUrl}/GetAppNewsMsgCatViews`, request);
  }
  getAppNewsMsgCatViewsPaging(request: PagingRequest<AppNewsMsgCatReq>): Observable<PagingResponse<AppNewsMsgCatView>> {
    return this.http.put<PagingResponse<AppNewsMsgCatView>>(`${this.baseUrl}/GetAppNewsMsgCatViewsPaging`, request);
  }
  disableAppNewsMsgCat(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/DisableAppNewsMsgCat/${id}`, null);
  }
  enableAppNewsMsgCat(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/EnableAppNewsMsgCat/${id}`, null);
  }
  setAppNewsMsgCatDto(request: AppNewsMsgCatDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppNewsMsgCatDto`, request);
  }
  //#endregion

  //#region AppNewsMsg
  getAppNewsMsgStatusInfos(): ValueInfo[] {
    // 樣式遵循 ant nzColor 標準
    return [
      { name: '發佈', value: AppNewsMsgStatuses.發佈, style: 'success' },
      { name: '下架', value: AppNewsMsgStatuses.下架, style: 'error' }
    ];
  }
  getAppNewsMsgDtoById(id: number): Observable<AppNewsMsgDto> {
    return this.http.get<AppNewsMsgDto>(`${this.baseUrl}/GetAppNewsMsgDtoById/${id}`);
  }
  getAppNewsMsgViewById(id: number): Observable<AppNewsMsgView> {
    return this.http.get<AppNewsMsgView>(`${this.baseUrl}/GetAppNewsMsgViewById/${id}`);
  }
  getAppNewsMsgViewByUniqueId(uniqueId: string): Observable<AppNewsMsgView> {
    return this.http.get<AppNewsMsgView>(`${this.baseUrl}/GetAppNewsMsgViewByUniqueId/${uniqueId}`);
  }
  getAppNewsMsgViews(request: AppNewsMsgReq = new AppNewsMsgReq(5)): Observable<AppNewsMsgView[]> {
    return this.http.put<AppNewsMsgView[]>(`${this.baseUrl}/GetAppNewsMsgViews`, request);
  }
  getAppNewsMsgViewsPaging(request: PagingRequest<AppNewsMsgReq>): Observable<PagingResponse<AppNewsMsgView>> {
    return this.http.put<PagingResponse<AppNewsMsgView>>(`${this.baseUrl}/GetAppNewsMsgViewsPaging`, request);
  }
  disableAppNewsMsg(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/DisableAppNewsMsg/${id}`, null);
  }
  enableAppNewsMsg(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/EnableAppNewsMsg/${id}`, null);
  }
  setAppNewsMsgDto(request: AppNewsMsgDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppNewsMsgDto`, request);
  }
  //#endregion

  //#region BannerAd
  getBannerAdStatusInfos(): ValueInfo[] {
    // 樣式遵循 ant nzColor 標準
    return [
      { name: '發佈', value: BannerAdStatuses.發佈, style: 'success' },
      { name: '下架', value: BannerAdStatuses.下架, style: 'error' }
    ];
  }
  getBannerAdDtoById(id: number): Observable<BannerAdDto> {
    return this.http.get<BannerAdDto>(`${this.baseUrl}/GetBannerAdDtoById/${id}`);
  }
  getBannerAdViewById(id: number): Observable<BannerAdView> {
    return this.http.get<BannerAdView>(`${this.baseUrl}/GetBannerAdViewById/${id}`);
  }
  getBannerAdViews(request: BannerAdReq = new BannerAdReq()): Observable<BannerAdView[]> {
    return this.http.put<BannerAdView[]>(`${this.baseUrl}/GetBannerAdViews`, request);
  }
  getBannerAdViewsPaging(request: PagingRequest<BannerAdReq>): Observable<PagingResponse<BannerAdView>> {
    return this.http.put<PagingResponse<BannerAdView>>(`${this.baseUrl}/GetBannerAdViewsPaging`, request);
  }
  disableBannerAd(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/DisableBannerAd/${id}`, null);
  }
  enableBannerAd(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/EnableBannerAd/${id}`, null);
  }
  uploadBannerAdDto(request: UploadFormReq): Observable<BannerAdDto> {
    return this.http.post<BannerAdDto>(`${this.baseUrl}/UploadBannerAdDto`, request);
  }
  //#endregion

}
