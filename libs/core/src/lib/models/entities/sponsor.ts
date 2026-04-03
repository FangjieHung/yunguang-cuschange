import { EntityBase } from '../shared';

export class Sponsor extends EntityBase {
  id = 0;
  name = '';
  desc: string | null = null;
  startAt = new Date();
  endAt: Date | null = null;
  status: number = +SponsorStatuses.啟用;
  logoAttId = 0;
  sort = 0;

  constructor() {
    super();
  }
}

export enum SponsorStatuses {
  '啟用' = 60,
  '停用' = 100
}
