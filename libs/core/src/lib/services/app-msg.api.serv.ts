/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import {
  PagingRequest, PagingResponse, UploadFormReq,
  AppNewsMsgDto, AppNewsMsgReq, AppNewsMsgView,
  BannerAdDto, BannerAdReq, BannerAdView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppMsgApiServ {
  private readonly baseUrl = '/AppMsg';

  constructor(private http: HttpClient) { }

  //#region AppNewsMsg
  getAppNewsMsgDtoById(id: number): Observable<AppNewsMsgDto> {
    return this.http.get<AppNewsMsgDto>(`${this.baseUrl}/GetAppNewsMsgDtoById/${id}`);
  }
  getAppNewsMsgViewById(id: number): Observable<AppNewsMsgView> {
    return this.http.get<AppNewsMsgView>(`${this.baseUrl}/GetAppNewsMsgViewById/${id}`);
  }
  getAppNewsMsgViews(request: AppNewsMsgReq = new AppNewsMsgReq()): Observable<AppNewsMsgView[]> {
    return this.http.put<AppNewsMsgView[]>(`${this.baseUrl}/GetAppNewsMsgViews`, request);
  }
  getAppNewsMsgViewsPaging(request: PagingRequest<AppNewsMsgReq>): Observable<PagingResponse<AppNewsMsgView>> {
    return this.http.put<PagingResponse<AppNewsMsgView>>(`${this.baseUrl}/GetAppNewsMsgViewsPaging`, request);
  }
  setAppNewsMsgDto(request: AppNewsMsgDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppNewsMsgDto`, request);
  }
  //#endregion

  //#region BannerAd
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
  uploadBannerAdDto(request: UploadFormReq): Observable<BannerAdDto> {
    return this.http.post<BannerAdDto>(`${this.baseUrl}/UploadBannerAdDto`, request);
  }
  //#endregion

}
