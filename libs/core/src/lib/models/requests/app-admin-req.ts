import { QueryRequestBase } from './../shared';

export class AppAdminReq extends QueryRequestBase {
  appUserId = 0;
  appUserStatus = 0;

  constructor() {
    super();
  }
}
