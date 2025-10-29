/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import {
  PagingRequest, PagingResponse, UploadFormReq,
  CustomerDto, CustomerReq, CustomerView,
  CustGroupReq, CustGroupView,
  CustMemberReq, CustMemberView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiServ {
  private readonly baseUrl = '/Customer';

  constructor(private http: HttpClient) { }

  //#region Customer
  getCurrCustomerDto(): Observable<CustomerDto> {
    return this.http.get<CustomerDto>(`${this.baseUrl}/GetCurrCustomerDto`);
  }
  getCurrCustomerView(): Observable<CustomerView> {
    return this.http.get<CustomerView>(`${this.baseUrl}/GetCurrCustomerView`);
  }
  getCustomerDtoById(id: number): Observable<CustomerDto> {
    return this.http.get<CustomerDto>(`${this.baseUrl}/GetCustomerDtoById/${id}`);
  }
  getCustomerViewById(id: number): Observable<CustomerView> {
    return this.http.get<CustomerView>(`${this.baseUrl}/GetCustomerViewById/${id}`);
  }
  getCustomerOptions(request: CustomerReq): Observable<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/GetCustomerOptions`, request);
  }
  getCustomerViewsPaging(request: PagingRequest<CustomerReq>): Observable<PagingResponse<CustomerView>> {
    return this.http.put<PagingResponse<CustomerView>>(`${this.baseUrl}/GetCustomerViewsPaging`, request);
  }
  signupCustomerDto(request: CustomerDto): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/SignupCustomerDto`, request);
  }
  uploadCurrCustomerDto(request: UploadFormReq): Observable<CustomerDto> {
    return this.http.post<CustomerDto>(`${this.baseUrl}/UploadCurrCustomerDto`, request);
  }
  setCustomerDto(request: CustomerDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetCustomerDto`, request);
  }
  //#endregion

  //#region CustGroup
  getCustGroupViewsPaging(request: PagingRequest<CustGroupReq>): Observable<PagingResponse<CustGroupView>> {
    return this.http.put<PagingResponse<CustGroupView>>(`${this.baseUrl}/GetCustGroupViewsPaging`, request);
  }

  //#endregion

  //#region CustMember
  getCustMemberViewsPaging(request: PagingRequest<CustMemberReq>): Observable<PagingResponse<CustMemberView>> {
    return this.http.put<PagingResponse<CustMemberView>>(`${this.baseUrl}/GetCustMemberViewsPaging`, request);
  }

  //#endregion

}
