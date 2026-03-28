import { QueryRequestBase } from '../shared';
import { CustOrderRefundContentJto } from '../jtos';

export class CustOrderRefundReq extends QueryRequestBase {
  custOrderId = 0;
  reasonType = 0;
  refundAt: Date | null = null;
  payTypeId = 0;
  contentJto: CustOrderRefundContentJto | null = null;

  constructor() {
    super();
  }
}
