export interface CustOrderPaymentStat {
  orderType: number;
  orderTypeName?: string | null;
  payCount: number;
  payTotal: number;
  refundCount: number;
  refundTotal: number;
  txFeeTotal: number;
  netTotal: number;
  details?: CustOrderPaymentStat[] | null;
}
