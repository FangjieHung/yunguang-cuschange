import { EntityBase } from '../shared';

export class Customer extends EntityBase {
  id = 0;
  appUserId = 0;
  uniqueId = '';
  type: number | null = null;
  code: string | null = null;
  name = '';
  startAt = new Date();
  endAt: Date | null = null;
  expAt: Date | null = null;
  status: number = +CustomerStatuses.審核中;
  content: string | null = null;

  constructor() {
    super();
  }
}

export enum CustomerTypes {
  '個人會員' = 10,
  '團體會員' = 20
}

export enum CustomerStatuses {
  '審核中' = 30,
  '正式會員' = 60,
  '否決申請' = 90,
  '取消會藉' = 100
}
