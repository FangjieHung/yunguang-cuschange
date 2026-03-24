import { QueryRequestBase } from './../shared';

export class CustOrderReq extends QueryRequestBase {
  orderType = 0;
  custId = 0;
  payOrderNo: string | null = null;

  constructor() {
    super();
  }
}
