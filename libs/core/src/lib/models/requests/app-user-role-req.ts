import { QueryRequestBase } from './../shared';

export class AppUserRoleReq extends QueryRequestBase {
  appUserId = 0;
  appRoleId = 0;
  appPfm: string | null = null;

  constructor() {
    super();
  }
}
