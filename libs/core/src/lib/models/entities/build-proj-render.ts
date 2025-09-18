import { EntityBase } from '../shared';

export class BuildProjRender extends EntityBase {
  id = 0;
  buildProjVolumeId = 0;
  buildStyle = '';
  wallMat = '';
  appFileAttId = 0;
  imgBase64: string | null = null;
  result: string | null = null;

  constructor() {
    super();
  }
}
