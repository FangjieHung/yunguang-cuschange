/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import { APP_ENV } from '../shared/helpers';
import { AppEnv, AppFileAttDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppAttachApiServ {
  private readonly baseUrl = '/AppAttach';

  constructor(
    @Inject(APP_ENV) private appEnv: AppEnv,
    private http: HttpClient) { }

  //#region Shared
  uploadCdnFiles(request: FormData): Observable<AppFileAttDto[]> {
    return this.http.post<AppFileAttDto[]>(`${this.baseUrl}/UploadCdnFiles`, request)
  }

  //#endregion

  //#region AppFileAtt
  downloadAppFileAtt(id: number): Observable<Blob> {
    return this.http.get<any>(`${this.appEnv.downloadUrl}/${id}`,
      { responseType: 'blob' as 'json'});
  }
  getAppFileAttObjectUrl(id: number): Observable<string> {
    return this.downloadAppFileAtt(id)
      .pipe(map(res => URL.createObjectURL(res)));
  }

  //#endregion

}
