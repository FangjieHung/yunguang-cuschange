/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import {
  PagingRequest, PagingResponse,
  CorpDto, CorpReq, CorpView,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class CorpApiServ {
  private readonly baseUrl = '/Corp';
  constructor(private http: HttpClient) { }

  //#region Corp
  getCorpDtoById(id: number): Observable<CorpDto> {
    return this.http.get<CorpDto>(`${this.baseUrl}/GetCorpDtoById/${id}`);
  }
  getCorpViewById(id: number): Observable<CorpView> {
    return this.http.get<CorpView>(`${this.baseUrl}/GetCorpViewById/${id}`);
  }
  getCorpViews(request: CorpReq): Observable<CorpView[]> {
    return this.http.put<CorpView[]>(`${this.baseUrl}/GetCorpViews`, request);
  }
  getCorpViewsPaging(request: PagingRequest<CorpReq>): Observable<PagingResponse<CorpView>> {
    return this.http.put<PagingResponse<CorpView>>(`${this.baseUrl}/GetCorpViewsPaging`, request);
  }
  setCorpDto(request: CorpDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetCorpDto`, request);
  }
  //#endregion

}
