import { AppUser } from '../entities';

export class AppUserDto extends AppUser {
  adminId = 0;
  custId = 0;
  name = '';

  constructor() {
    super();
  }
}
