import { CustOrder } from '../entities';
import { CustOrderDtlDto } from './cust-order-dtl-dto';

export class CustOrderDto extends CustOrder {
  details?: CustOrderDtlDto[] | null;
  
  constructor() {
    super();
  }
}
