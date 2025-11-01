import { QueryRequestBase } from './../shared';

export class CustMemberReq extends QueryRequestBase {
  appUserStatus = 0;
  custId = 0;
  custStatus = 0;
  idNo: string | null = null;

  constructor() {
    super();
  }
}
