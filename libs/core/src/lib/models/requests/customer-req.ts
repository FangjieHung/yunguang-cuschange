import { QueryRequestBase } from './../shared';

export class CustomerReq extends QueryRequestBase {
  appUserId = 0;
  appUserStatus = 0;

  constructor() {
    super();
  }
}
