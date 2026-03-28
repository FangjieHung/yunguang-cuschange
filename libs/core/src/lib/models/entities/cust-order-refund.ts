import { EntityBase } from '../shared';

export class CustOrderRefund extends EntityBase {
  id = 0;
  custOrderId = 0;
  reasonType: number = +CustOrderRefundReasonTypes.訂單取消;
  reason: string | null = null;
  refundAt: Date | null = null;
  refundAmount = 0;
  status: number = +CustOrderRefundStatuses.待退款;
  payTypeId = 0;
  payTypeCode: string | null = null;
  payTypeName: string | null = null;
  handlerName = '';
  content: string | null = null;

  constructor() {
    super();
  }
}

export enum CustOrderRefundReasonTypes {
  '訂單取消' = 10
}

export enum CustOrderRefundStatuses {
  '待退款' = 40,
  '已退款' = 60,
  '已取消' = 100
}
