export interface CampRegView {
  id: number;
  regAt: Date;
  campId: number;
  campName: string;
  campUniqueId?: string | null;
  campStartAt?: Date | null;
  campEndAt?: Date | null;
  custId: number;
  custCode: string | null;
  custIdNo: string;
  custName: string;
  custEmail: string;
  custMobile: string;
  custZipCodeId: number;
  custAddr: string;
  custOrderId: number;
  cxlAt: Date | null;
  status: number;
  content?: string | null;
}
