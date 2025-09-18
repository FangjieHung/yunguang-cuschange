/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArcGenApiServ {
  private readonly baseUrl = '/ArcGen';
  constructor(private http: HttpClient) { }

  //#region Corp
  generateImg(request: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/GenerateImg`, request);
  }
  //#endregion

}
