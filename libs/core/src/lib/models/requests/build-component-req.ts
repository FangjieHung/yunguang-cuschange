import { QueryRequestBase } from './../shared';

export class BuildComponentReq extends QueryRequestBase {
  corpId = 0;
  isShowBundle = false;

  constructor() {
    super();
  }
}
