import { CustOrderDtlView } from './cust-order-dtl-view';

export interface CustOrderView {
  id: number;
  orderAt: string;
  orderType: number;
  custId: number;
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
  startAt: string;
  endAt: string;
  payTypeId: number;
  payTypeCode: string | null;
  payTypeName: string | null;
  payOrderNo: string | null;
  payAt: string;
  cxlAt: string | null;
  status: number;
  content?: string | null;
  details?: CustOrderDtlView[] | null;
}
