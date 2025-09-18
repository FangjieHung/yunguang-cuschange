/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Thired party packages
import { EnumValues } from 'enum-values';

@Injectable({
  providedIn: 'root',
})
export class SharedDataServ {
  appPfmOpts = EnumValues.getNamesAndValues<string>(AppPfms);
  genderOpts = EnumValues.getNamesAndValues(Genders);
  getAppPfms(): Observable<any[]> {
    return of(EnumValues.getNamesAndValues(AppPfms));
  }
  getGenders(): Observable<any[]> {
    return of(EnumValues.getNamesAndValues(Genders));
  }
}
export enum AppPfms {
  'WEB' = 'WEB',
  'CMS' = 'CMS'
}
export enum Genders {
  '男' = 'M',
  '女' = 'F',
  '非二元性別' = 'N'
}
