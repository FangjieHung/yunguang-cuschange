import { QueryRequestBase } from './../shared';

export class CustGroupReq extends QueryRequestBase {
  custId = 0;
  taxId: string | null = null;

  constructor() {
    super();
  }
}
