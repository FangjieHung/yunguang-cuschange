import { EntityBase } from '../shared';

export class AppNewsMsgCat extends EntityBase {
  id = 0;
  name = '';
  status: number = +AppNewsMsgCatStatuses.啟用;
  sort = 0;

  constructor() {
    super();
  }
}

export enum AppNewsMsgCatStatuses {
  '啟用' = 60,
  '停用' = 100
}

