import { EntityBase } from '../shared';

export class CampReg extends EntityBase {
  id = 0;
  regAt: Date = new Date();
  campId = 0;
  campName = '';
  custId = 0;
  custIdNo = '';
  custName = '';
  custEmail = '';
  custMobile = '';
  custZipCodeId = 0;
  custAddr = '';
  custOrderId = 0;
  cxlAt: Date | null = null;
  status: number = +CampRegStatuses.候補中;

  constructor() {
    super();
  }
}

export enum CampRegStatuses {
  '候補中' = 30,
  '待付款' = 40,
  '已報名' = 60,
  '待退款' = 90,
  '已取消' = 100
}
