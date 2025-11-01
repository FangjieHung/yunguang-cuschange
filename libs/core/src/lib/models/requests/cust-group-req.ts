import { QueryRequestBase } from './../shared';

export class CustGroupReq extends QueryRequestBase {
  appUserStatus = 0;
  custId = 0;
  custStatus = 0;
  taxId: string | null = null;

  constructor() {
    super();
  }
}
