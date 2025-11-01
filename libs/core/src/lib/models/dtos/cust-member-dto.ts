import { CustMember } from '../entities';
import { CustMemberContentJto } from '../jtos/cust-member-content-jto';

export class CustMemberDto extends CustMember {
  contentJto = new CustMemberContentJto();
  
  constructor() {
    super();
  }
}
