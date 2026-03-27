import { QueryRequestBase } from './../shared';

export class PayTypeReq extends QueryRequestBase {
  startId = 0;
  endId = 0;
  code: string | null = null;

  constructor() {
    super();
  }
}
