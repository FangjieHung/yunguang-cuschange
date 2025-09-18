import { EntityBase } from '../shared';

export class BuildProjDoc extends EntityBase {
  id = 0;
  buildProjectId = 0;
  fileName = '';
  docId: string | null = null;
  docConfidence = 0;
  analyseResAt: Date | null = null;

  constructor() {
    super();
  }
}
