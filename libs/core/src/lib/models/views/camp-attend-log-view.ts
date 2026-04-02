export interface CampAttendLogView {
  id: number;
  campRegId: number;
  campRegAt: Date;
  campRegStatus: number;
  campId: number;
  campName: string;
  campStartAt?: Date | null;
  campEndAt?: Date | null;
  custId: number;
  custIdNo: string;
  custName: string;
  start1At: Date | null;
  start2At: Date | null;
  endAt: Date | null;
  certNo: string | null;
  certAt: Date | null;
  certStatus: number;
  lastCertPrintAt: Date | null;
  content?: string | null;
}
