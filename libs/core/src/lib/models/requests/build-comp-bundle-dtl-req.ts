import { QueryRequestBase } from './../shared';

export class BuildCompBundleDtlReq extends QueryRequestBase {
  buildCompBundleId = 0;
  buildCompId = 0;

  constructor() {
    super();
  }
}
