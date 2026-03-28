export interface CustOrderRefundView {
  id: number;
  custOrderId: number;
  reasonType: number;
  reason: string | null;
  refundAt: Date | null;
  refundAmount: number;
  status: number;
  payTypeId: number;
  payTypeCode: string | null;
  payTypeName: string | null;
  handlerName: string;
  custCode?: string | null;
  custName?: string | null;
  custOrderAt?: Date | null;
  custOrderCxlAt?: Date | null;
  content?: string | null;
}
