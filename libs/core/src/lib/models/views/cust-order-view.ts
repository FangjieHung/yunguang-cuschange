import { CustOrderDtlView } from './cust-order-dtl-view';

export interface CustOrderView {
  id: number;
  orderAt: Date;
  orderType: number;
  custId: number;
  custCode: string | null;
  custIdNo: string | null;
  custName: string | null;
  custEmail: string | null;
  custMobile: string | null;
  custZipCodeId: number | null;
  custAddr: string | null;
  buyerName: string | null;
  buyerCode: string | null;
  subTotal: number;
  discount: number;
  total: number;
  txFee: number;
  startAt: string;
  endAt: string;
  payTypeId: number;
  payTypeCode: string | null;
  payTypeName: string | null;
  payOrderNo: string | null;
  payAt: Date | null;
  cxlAt: Date | null;
  status: number;
  orderDesc?: string | null;
  content?: string | null;
  details?: CustOrderDtlView[] | null;
}
