import { EntityBase } from '../shared';

export class AppRole extends EntityBase {
  id = 0;
  appPfm = '';
  name = '';
  status = AppRoleStatuses.啟用;

  constructor() {
    super();
  }
}

export enum AppRoleStatuses {
  '啟用' = 60,
  '停用' = 100
}
