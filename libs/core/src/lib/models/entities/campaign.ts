import { EntityBase } from '../shared';

export class Campaign extends EntityBase {
  id = 0;
  name = '';
  startAt: Date | null = null;
  endAt: Date | null = null;
  regStartAt: Date = new Date();
  regEndAt: Date | null = null;
  stickyAt: Date | null = null;
  pricing = 0;
  salePrice = 0;
  isOpenReg = false;
  maxRegNum = 0;
  maxWaitNum = 0;
  regNum = 0;
  waitNum = 0;
  status: number = +CampaignStatuses.報名中;
  coverAttId = 0;
  content: string | null = null;

  constructor() {
    super();
  }
}

export enum CampaignStatuses {
  '尚未開放' = 50,
  '報名中' = 60,
  '候補中' = 63,
  '額滿' = 69,
  '截止' = 80,
  '下架' = 100
}

