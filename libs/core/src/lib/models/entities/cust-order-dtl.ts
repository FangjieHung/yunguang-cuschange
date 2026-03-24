import { EntityBase } from '../shared';

export class CustOrderDtl extends EntityBase {
  id = 0;
  custOrderId = 0;
  orderAt = new Date();
  itemName = '';
  qty = 0;
  price = 0;
  total = 0;

  constructor() {
    super();
  }
}
