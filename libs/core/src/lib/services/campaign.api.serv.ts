/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Thired party packages
import { EnumValues } from 'enum-values';

// Custom packages
import {
  PagingRequest, PagingResponse, PayInfo, ValueInfo,
  CampaignDto, CampaignReq, CampaignStatuses, CampaignView,
  CampRegDto, CampRegReq, CampRegStatuses, CampRegView,
  CampAttendLogCertStatuses
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
  getCampaignDtoById(id: number): Observable<CampaignDto> {
    return this.http.get<CampaignDto>(`${this.baseUrl}/GetCampaignDtoById/${id}`);
  }
  getCampaignViewById(id: number): Observable<CampaignView> {
    return this.http.get<CampaignView>(`${this.baseUrl}/GetCampaignViewById/${id}`);
  }
  getCampaignViewByUniqueId(uniqueId: string): Observable<CampaignView> {
    return this.http.get<CampaignView>(`${this.baseUrl}/GetCampaignViewByUniqueId/${uniqueId}`);
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

  //#region CampReg
  getCampRegStatusInfos(): ValueInfo[] {
    const infos = [
      { name: '候補中', value: CampRegStatuses.候補中, style: 'orange' },
      { name: '待付款', value: CampRegStatuses.待付款, style: 'magenta' },
      { name: '已報名', value: CampRegStatuses.已報名, style: 'green' },
      { name: '待退款', value: CampRegStatuses.待退款, style: 'volcano' },
      { name: '已取消', value: CampRegStatuses.已取消, style: 'red' }
    ];

    return infos;
  }
  getCampRegViewsPaging(request: PagingRequest<CampRegReq>): Observable<PagingResponse<CampRegView>> {
    return this.http.put<PagingResponse<CampRegView>>(`${this.baseUrl}/GetCampRegViewsPaging`, request);
  }
  campRegister(request: CampRegDto): Observable<PayInfo> {
    return this.http.post<PayInfo>(`${this.baseUrl}/CampRegister`, request);
  }
  cancelCampReg(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/CancelCampReg/${id}`, null);
  }
  //#endregion

  //#region CampAttendLog
  getCampAttendLogCertStatusInfos(): ValueInfo[] {
    const infos = [
      { name: '待審核', value: CampAttendLogCertStatuses.待審核, style: 'orange' },
      { name: '已核發', value: CampAttendLogCertStatuses.已核發, style: 'green' },
      { name: '不符核發資格', value: CampAttendLogCertStatuses.不符核發資格, style: 'volcano' },
      { name: '已取消', value: CampAttendLogCertStatuses.已取消, style: 'red' }
    ];

    return infos;
  }
   //#endregion
}
