import { QueryRequestBase } from './../shared';

export class AppRouteReq extends QueryRequestBase {
  parentId = 0;
  appPfm: string | null = null;

  constructor() {
    super();
  }
}
