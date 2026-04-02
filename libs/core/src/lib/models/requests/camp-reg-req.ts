import { QueryRequestBase } from '../shared';

export class CampRegReq extends QueryRequestBase {
  campId = 0;
  campName: string | null = null;
  custId = 0;
  custIdNo: string | null = null;
  custName: string | null = null;
  custOrderId = 0;
  isShowCampContent = false;

  constructor() {
    super();
  }
}
