import { EntityBase } from '../shared';

export class BuildComponent extends EntityBase {
  id = 0;
  corpId = 0;
  name = '';
  compType = '';
  compFileAttId = 0;
  thumbnailAttId = 0;
  content: string | null = null;

  constructor() {
    super();
  }
}
