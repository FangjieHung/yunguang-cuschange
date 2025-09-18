import { QueryRequestBase } from './../shared';

export class AppRoleRouteReq extends QueryRequestBase {
  appRoleId = 0;
  appRouteId = 0;

  constructor() {
    super();
  }
}
