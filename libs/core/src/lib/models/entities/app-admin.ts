import { EntityBase } from '../shared';

export class AppAdmin extends EntityBase {
  id = 0;
  appUserId = 0;
  name = '';
  nameEn: string | null = null;
  mobile: string | null = null;
  email: string | null = null;

  constructor() {
    super();
  }
}
