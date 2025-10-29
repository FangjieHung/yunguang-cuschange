import { QueryRequestBase } from './../shared';

export class CustMemberReq extends QueryRequestBase {
  custId = 0;
  idNo: string | null = null;

  constructor() {
    super();
  }
}
