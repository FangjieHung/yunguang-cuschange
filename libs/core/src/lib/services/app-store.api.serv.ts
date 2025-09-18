/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppObjectStore } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppStoreApiServ {
  private readonly baseUrl = '/AppStore';
  shapeDiverTicketKeyJto: any;

  constructor(private http: HttpClient) { }

  //#region AppObjectStore
  getAppObjectStoreValueByCode(code: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAppObjectStoreValueByCode/${code}`);
  }
  getAppObjectStoreByCode(code: string): Observable<AppObjectStore> {
    return this.http.get<AppObjectStore>(`${this.baseUrl}/GetAppObjectStoreByCode/${code}`);
  }
  setAppObjectStore(request: AppObjectStore): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetAppObjectStore`, request);
  }

  //#endregion

}
