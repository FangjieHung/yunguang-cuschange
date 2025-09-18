/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import {
  ZipCodeReq, ZipCodeView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class SharedDataApiServ {
  private readonly baseUrl = '/SharedData';

  constructor(private http: HttpClient) { }

  //#region ZipCode
  getZipCodeViews(request: ZipCodeReq = new ZipCodeReq()): Observable<ZipCodeView[]> {
    return this.http.put<ZipCodeView[]>(`${this.baseUrl}/GetZipCodeViews`, request);
  }

  //#endregion

}
