import { EntityBase } from '../shared';

export class CampAttendLog extends EntityBase {
  id = 0;
  campRegId = 0;
  start1At: Date | null = null;
  start2At: Date | null = null;
  endAt: Date | null = null;
  certNo: string | null = null;
  certAt: Date | null = null;
  certStatus: number = +CampAttendLogCertStatuses.待審核;
  lastCertPrintAt: Date | null = null;

  constructor() {
    super();
  }
}

export enum CampAttendLogCertStatuses {
  '待審核' = 30,
  '已核發' = 60,
  '不符核發資格' = 80,
  '已取消' = 100
}

export enum CampAttendLogSignTypes {
  '第一次簽到' = 11,
  '第二次簽到' = 12,
  '簽退' = 90
}
