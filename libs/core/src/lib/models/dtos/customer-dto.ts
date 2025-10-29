import { Customer } from '../entities';
import { CustGroupDto, CustMemberDto } from './';

export class CustomerDto extends Customer {
  avatarAttId = 0;
  appUserStartAt: Date | null = null;
  appUserEndAt: Date | null = null;
  appUserStatus = 0;
  password = '';
  custGroup?: CustGroupDto | null = null;
  custMember?: CustMemberDto | null = null;

  constructor() {
    super();
  }
}
