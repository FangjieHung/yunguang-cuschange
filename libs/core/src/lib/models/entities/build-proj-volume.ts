import { EntityBase } from '../shared';

export class BuildProjVolume extends EntityBase {
  id = 0;
  buildProjectId = 0;
  coverAttId = 0;
  floorNum = 0;
  scoreParking = 0;
  scoreStructure = 0;
  scoreUnitMix = 0;
  param: string | null = null;
  result: string | null = null;

  constructor() {
    super();
  }
}
