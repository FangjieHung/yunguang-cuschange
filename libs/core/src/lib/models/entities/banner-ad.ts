import { EntityBase } from '../shared';

export class BannerAd extends EntityBase {
  id = 0;
  title = '';
  desc: string | null = null;
  startAt = new Date();
  endAt: Date | null = null;
  status: number = +BannerAdStatuses.發佈;
  coverAttId = 0;
  sort = 0;

  constructor() {
    super();
  }
}

export enum BannerAdStatuses {
  '發佈' = 60,
  '下架' = 100
}

