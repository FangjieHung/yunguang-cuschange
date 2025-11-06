export interface CampaignView {
  id: number;
  uniqueId: string;
  name: string;
  startAt: Date;
  endAt: Date;
  regStartAt: Date;
  regEndAt: Date;
  stickyAt: Date | null;
  pricing: number;
  salePrice: number;
  isOpenReg: boolean;
  maxRegNum: number;
  maxWaitNum: number;
  regNum: number;
  waitNum: number;
  status: number;
  content?: string | null;
}
