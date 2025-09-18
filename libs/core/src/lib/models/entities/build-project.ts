import { EntityBase } from '../shared';

export class BuildProject extends EntityBase {
  id = 0;
  corpId = 0;
  name = '';
  addr = '';
  buildCompBundleId = 0;
  coverAttId = 0;
  baseMapAttId = 0;
  baseArea = 0;
  baseCoord: string | null = null;
  volParam: string | null = null;
  content: string | null = null;

  constructor() {
    super();
  }
}
