import { QueryRequestBase } from './../shared';

export class AppUserReq extends QueryRequestBase {
  account = '';
  appPfm = '';
  
  constructor() {
    super();
  }
}
