import { EntityBase } from '../shared';

export class AppUser extends EntityBase {
  id = 0;
  appPfm = '';
  account = '';
  password = '';
  avatarAttId = 0;
  startAt: Date = new Date();
  endAt: Date | null = null;
  status: number = AppUserStatuses.啟用;

  constructor() {
    super();
  }
}

export enum AppUserStatuses {
  '啟用' = 60,
  '停用' = 100
}
