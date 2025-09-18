import { EntityBase } from '../shared';

export class AppUserRole extends EntityBase {
  id = 0;
  appUserId = 0;
  appRoleId = 0;

  constructor() {
    super();
  }
}
