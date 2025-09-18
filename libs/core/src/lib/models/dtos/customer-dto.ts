/* eslint-disable @typescript-eslint/no-explicit-any */
import { Customer } from '../entities';

export class CustomerDto extends Customer {
  corpName?: string | null = null;
  avatarAttId = 0;
  password = '';
  appUserStartAt: Date | null = null;
  appUserEndAt: Date | null = null;
  appUserStatus = 0;

  constructor() {
    super();
  }
}
