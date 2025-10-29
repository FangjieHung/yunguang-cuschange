/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import {
  PagingRequest, PagingResponse,
  CampaignDto, CampaignReq, CampaignView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppMsgApiServ {
  private readonly baseUrl = '/AppMsg';

  constructor(private http: HttpClient) { }

  //#region Campaign
  getCampaignDtoById(id: number): Observable<CampaignDto> {
    return this.http.get<CampaignDto>(`${this.baseUrl}/GetCampaignDtoById/${id}`);
  }
  getCampaignViewById(id: number): Observable<CampaignView> {
    return this.http.get<CampaignView>(`${this.baseUrl}/GetCampaignViewById/${id}`);
  }
  getCampaignViews(request: CampaignReq = new CampaignReq()): Observable<CampaignView[]> {
    return this.http.put<CampaignView[]>(`${this.baseUrl}/GetCampaignViews`, request);
  }
  getCampaignViewsPaging(request: PagingRequest<CampaignReq>): Observable<PagingResponse<CampaignView>> {
    return this.http.put<PagingResponse<CampaignView>>(`${this.baseUrl}/GetCampaignViewsPaging`, request);
  }
  setCampaignDto(request: CampaignDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetCampaignDto`, request);
  }
  //#endregion

}
