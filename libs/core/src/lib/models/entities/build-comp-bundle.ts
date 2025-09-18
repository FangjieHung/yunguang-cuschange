import { EntityBase } from '../shared';

export class BuildCompBundle extends EntityBase {
  id = 0;
  corpId = 0;
  name = '';
  content: string | null = null;

  constructor() {
    super();
  }
}
