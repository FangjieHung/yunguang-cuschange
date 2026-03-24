import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import { PayInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CommerceApiServ {
  private readonly baseUrl = '/Commerce';
  postReq: string | null = null;

  constructor(private http: HttpClient) { }

  // Commerce
  getAioCheckoutFormHtml(custOrderId: number): Observable<PayInfo> {
    return this.http.get<PayInfo>(`${this.baseUrl}/GetAioCheckoutFormHtml/${custOrderId}`);
  }

}
