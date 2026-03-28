import { CustOrderRefund } from '../entities';

export class CustOrderRefundDto extends CustOrderRefund {
  custCode?: string | null;
  custName?: string | null;
  custOrderAt?: Date | null;
  custOrderCxlAt?: Date | null;

  constructor() {
    super();
  }
}
