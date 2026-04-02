import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CustOrderReq } from '../models/requests/cust-order-req';
import { CustOrderPaymentStat } from '../models/shared/cust-order-payment-stat';

@Injectable({
  providedIn: 'root',
})
export class StatApiServ {
  private readonly baseUrl = '/Stat';

  constructor(private http: HttpClient) { }

  getCustOrderPaymentStats(request: CustOrderReq): Observable<CustOrderPaymentStat> {
    return this.http.put<CustOrderPaymentStat>(`${this.baseUrl}/GetCustOrderPaymentStats`, request);
  }
}
