import { QueryRequestBase } from './../shared';

export class ZipCodeReq extends QueryRequestBase {
  version = 3;
  code: string | null = null;
  
  constructor() {
    super();
  }
}
