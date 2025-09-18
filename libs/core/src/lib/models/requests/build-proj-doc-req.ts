import { QueryRequestBase } from './../shared';

export class BuildProjDocReq extends QueryRequestBase {
  buildProjectId = 0;
  docId: string | null = null;

  constructor() {
    super();
  }
}
