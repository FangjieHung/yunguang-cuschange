import { QueryRequestBase } from './../shared';

export class CustomerReq extends QueryRequestBase {
  corpId = 0;
  appUserId = 0;
  appUserStatus = 0;
  
  constructor() {
    super();
  }
}
