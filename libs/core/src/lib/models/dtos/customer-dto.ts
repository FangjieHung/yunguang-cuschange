import { AppUserStatuses, Customer } from '../entities';
import { CustGroupDto, CustMemberDto } from './';

export class CustomerDto extends Customer {
  avatarAttId = 0;
  appUserStartAt: Date | null = new Date();
  appUserEndAt: Date | null = null;
  appUserStatus = +AppUserStatuses.啟用;
  password = '';
  custGroup?: CustGroupDto | null = null;
  custMember?: CustMemberDto | null = null;

  constructor() {
    super();
  }
}
