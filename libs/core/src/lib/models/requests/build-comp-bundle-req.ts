import { QueryRequestBase } from './../shared';

export class BuildCompBundleReq extends QueryRequestBase {
  corpId = 0;
  isShowBundle = false;

  constructor() {
    super();
  }
}
