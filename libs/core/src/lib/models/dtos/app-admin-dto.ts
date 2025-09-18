import { AppAdmin } from '../entities';

export class AppAdminDto extends AppAdmin {
  avatarAttId = 0;
  account = '';
  password = '';
  appUserStartAt: Date | null = null;
  appUserEndAt: Date | null = null;
  appUserStatus = 0;

  constructor() {
    super();
  }
}
