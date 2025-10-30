/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Thired party packages
import { EnumValues } from 'enum-values';

// Custom packages
import {
  PagingRequest, PagingResponse, ValueInfo,
  CampaignDto, CampaignReq, CampaignStatuses, CampaignView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class CampaignApiServ {
  private readonly baseUrl = '/Campaign';
  campaignStatuses = CampaignStatuses;
  campaignStatusOpts = EnumValues.getNamesAndValues(CampaignStatuses);

  constructor(private http: HttpClient) { }

  //#region Campaign
  getCampaignStatusInfos(): ValueInfo[] {
    const infos = [
      { name: '尚未開放', value: CampaignStatuses.尚未開放, style: 'magenta' },
      { name: '報名中', value: CampaignStatuses.報名中, style: 'green' },
      { name: '候補中', value: CampaignStatuses.候補中, style: 'volcano' },
      { name: '額滿', value: CampaignStatuses.額滿, style: 'orange' },
      { name: '截止', value: CampaignStatuses.截止, style: 'purple' },
      { name: '下架', value: CampaignStatuses.下架, style: 'red' }
    ];

    return infos;
  }
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
  disableCampaign(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/DisableCampaign/${id}`, null);
  }
  enableCampaign(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/EnableCampaign/${id}`, null);
  }
  setCampaignDto(request: CampaignDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetCampaignDto`, request);
  }
  //#endregion

}
