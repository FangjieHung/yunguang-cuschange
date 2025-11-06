import { QueryRequestBase } from './../shared';

export class AppNewsMsgReq extends QueryRequestBase {
  uniqueId: string | null = null;
  
  constructor() {
    super();
  }
}
