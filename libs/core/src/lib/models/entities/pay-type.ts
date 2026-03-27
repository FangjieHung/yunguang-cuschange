import { EntityBase } from '../shared';

export class PayType extends EntityBase {
  id = 0;
  code = '';
  name = '';
  servProvider = '';
  status: number = +PayTypeStatuses.啟用;
  sort = 0;

  constructor() {
    super();
  }
}

export enum PayTypeIds {
  '內部金流_最小值' = 1000,
  '內部金流_最大值' = 1999
}

export enum PayTypeStatuses {
  '啟用' = 60,
  '停用' = 100
}
