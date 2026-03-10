import { QueryRequestBase } from '../shared';

export class CampAttendLogReq extends QueryRequestBase {
  campId = 0;
  campRegId = 0;
  certNo: string | null = null;
  signType = 0;
  signCode: string | null = null;

  constructor() {
    super();
  }
}
