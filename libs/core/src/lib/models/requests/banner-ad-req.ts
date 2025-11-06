import { QueryRequestBase } from './../shared';

export class BannerAdReq extends QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.takeCount = takeCount;
  }
}
