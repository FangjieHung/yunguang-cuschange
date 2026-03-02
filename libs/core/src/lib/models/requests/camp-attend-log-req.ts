import { QueryRequestBase } from '../shared';

export class CampAttendLogReq extends QueryRequestBase {
  campRegId = 0;
  certNo: string | null = null;

  constructor() {
    super();
  }
}
