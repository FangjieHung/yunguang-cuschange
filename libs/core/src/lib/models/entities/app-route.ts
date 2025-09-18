import { EntityBase } from '../shared';

export class AppRoute extends EntityBase {
  id = 0;
  parentId = 0;
  appPfm = '';
  name = '';
  icon: string | null = null;
  path: string | null = null;
  startAt: Date = new Date();
  endAt: Date | null = null;
  sort = 0;

  constructor() {
    super();
  }
}
