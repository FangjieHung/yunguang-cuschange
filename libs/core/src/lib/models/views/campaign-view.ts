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
  /** 目前使用者的報名狀態：registered | cancelled | null */
  regStatus?: 'registered' | 'cancelled' | null;
  /** 使用者報名時間 */
  regAt?: Date | null;
  /** 使用者取消報名時間 */
  cancelledAt?: Date | null;
}
