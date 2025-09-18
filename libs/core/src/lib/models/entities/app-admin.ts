import { EntityBase } from '../shared';

export class AppAdmin extends EntityBase {
  id = 0;
  appUserId = 0;
  email = ''
  name = '';
  nameEn: string | null = null;
  nickname: string | null = null;
  mobile: string | null = null;

  constructor() {
    super();
  }
}
