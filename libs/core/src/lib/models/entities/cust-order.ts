import { EntityBase } from '../shared';

export class CustOrder extends EntityBase {
  id = 0;
  orderAt = new Date();
  orderType = 0;
  custId = 0;
  custIdNo: string | null = null;
  custName: string | null = null;
  custEmail: string | null = null;
  custMobile: string | null = null;
  custZipCodeId: number | null = null;
  custAddr = '';
  buyerName: string | null = null;
  buyerCode: string | null = null;
  subTotal = 0;
  discount = 0;
  total = 0;
  txFee = 0;
  startAt = new Date();
  endAt: Date | null = null;
  payTypeId = 0;
  payTypeCode: string | null = null;
  payTypeName: string | null = null;
  payOrderNo: string | null = null;
  payAt: Date | null = null;
  cxlAt: Date | null = null;
  receiptNo: string | null = null;
  receipt407No: string | null = null;
  status: number = +CustOrderStatuses.待付款;
  content: string | null = null;

  constructor() {
    super();
  }
}

export enum CustOrderTypes {
  '會費類_最小值' = 100,
  '會費類_最大值' = 199,
  '會費類_個人入會費' = 100,
  '會費類_個人常年會費' = 101,
  '會費類_團體入會費' = 150,
  '會費類_團體常年會費' = 151,
  '活動類_最小值' = 200,
  '活動類_最大值' = 299,
  '活動類_報名費' = 200
}

export enum CustOrderStatuses {
  '待付款' = 40,
  '已付款' = 60,
  '待退款' = 90,
  '已取消' = 100,
  '已逾期' = 101
}

