/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Thired party packages
import { EnumValues } from 'enum-values';

// Custom packages
import {
  PagingRequest, PagingResponse, ValueInfo,
  CustOrderDto, CustOrderReq, CustOrderStatuses, CustOrderView,
  CustOrderRefundDto, CustOrderRefundReq, CustOrderRefundReasonTypes, CustOrderRefundStatuses, CustOrderRefundView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class CustOrderApiServ {
  private readonly baseUrl = '/CustOrder';
  custOrderStatuses = CustOrderStatuses;
  custOrderStatusOpts = EnumValues.getNamesAndValues(CustOrderStatuses);
  custOrderRefundReasonTypes = CustOrderRefundReasonTypes;
  custOrderRefundReasonTypeOpts = EnumValues.getNamesAndValues(CustOrderRefundReasonTypes);
  custOrderRefundStatuses = CustOrderRefundStatuses;
  custOrderRefundStatusOpts = EnumValues.getNamesAndValues(CustOrderRefundStatuses);

  constructor(private http: HttpClient) { }

  getCustOrderStatusInfos(): ValueInfo[] {
    const infos = [
      { name: '待付款', value: CustOrderStatuses.待付款, style: 'magenta' },
      { name: '已付款', value: CustOrderStatuses.已付款, style: 'green' },
      { name: '待退款', value: CustOrderStatuses.待退款, style: 'volcano' },
      { name: '已取消', value: CustOrderStatuses.已取消, style: 'red' },
      { name: '已逾期', value: CustOrderStatuses.已逾期, style: 'purple' }
    ];

    return infos;
  }

  getCustOrderViews(request: CustOrderReq = new CustOrderReq()): Observable<CustOrderView[]> {
    return this.http.put<CustOrderView[]>(`${this.baseUrl}/GetCustOrderViews`, request);
  }

  getCustOrderViewsPaging(request: PagingRequest<CustOrderReq>): Observable<PagingResponse<CustOrderView>> {
    return this.http.put<PagingResponse<CustOrderView>>(`${this.baseUrl}/GetCustOrderViewsPaging`, request);
  }

  cancelCustOrder(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/CancelCustOrder/${id}`, null);
  }

  completeCustOrder(request: CustOrderReq): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/CompleteCustOrder`, request);
  }

  //#region CustOrderRefund
  getCustOrderRefundStatusInfos(): ValueInfo[] {
    const infos = [
      { name: '待退款', value: CustOrderRefundStatuses.待退款, style: 'magenta' },
      { name: '已退款', value: CustOrderRefundStatuses.已退款, style: 'green' },
      { name: '已取消', value: CustOrderRefundStatuses.已取消, style: 'red' }
    ];

    return infos;
  }
  getCustOrderRefundDtoById(id: number): Observable<CustOrderRefundDto> {
    return this.http.get<CustOrderRefundDto>(`${this.baseUrl}/GetCustOrderRefundDtoById/${id}`);
  }
  getCustOrderRefundViewById(id: number): Observable<CustOrderRefundView> {
    return this.http.get<CustOrderRefundView>(`${this.baseUrl}/GetCustOrderRefundViewById/${id}`);
  }
  getCustOrderRefundViews(request: CustOrderRefundReq = new CustOrderRefundReq()): Observable<CustOrderRefundView[]> {
    return this.http.put<CustOrderRefundView[]>(`${this.baseUrl}/GetCustOrderRefundViews`, request);
  }
  getCustOrderRefundViewsPaging(request: PagingRequest<CustOrderRefundReq>): Observable<PagingResponse<CustOrderRefundView>> {
    return this.http.put<PagingResponse<CustOrderRefundView>>(`${this.baseUrl}/GetCustOrderRefundViewsPaging`, request);
  }
  setCustOrderRefundDto(request: CustOrderRefundDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetCustOrderRefundDto`, request);
  }
  completeCustOrderRefund(request: CustOrderRefundReq): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/CompleteCustOrderRefund`, request);
  }
  revertCustOrderRefundToPending(id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/RevertCustOrderRefundToPending/${id}`, null);
  }
  //#endregion
}
