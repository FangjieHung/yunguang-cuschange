import { CustGroup } from '../entities';
import { CustGroupContentJto } from '../jtos/cust-group-content-jto';

export class CustGroupDto extends CustGroup {
  contentJto = new CustGroupContentJto();
  
  constructor() {
    super();
  }
}
