import { QueryRequestBase } from './../shared';

export class AppNewsMsgReq extends QueryRequestBase {
  catId = 0;
  uniqueId: string | null = null;

  constructor(takeCount = 0) {
    super();
    this.takeCount = takeCount;
  }
}
