import { EntityBase } from '../shared';

export class AppNewsMsg extends EntityBase {
  id = 0;
  uniqueId = '';
  catId: number | null = null;
  title = '';
  startAt = new Date();
  endAt: Date | null = null;
  stickyAt: Date | null = null;
  status: number = +AppNewsMsgStatuses.發佈;
  content: string | null = null;

  constructor() {
    super();
  }
}

export enum AppNewsMsgStatuses {
  '發佈' = 60,
  '下架' = 100
}

