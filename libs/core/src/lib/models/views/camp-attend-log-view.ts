export interface CampAttendLogView {
    id: number;
    campRegId: number;
    start1At: Date | null;
    start2At: Date | null;
    endAt: Date | null;
    certNo: string | null;
    certAt: Date | null;
    certStatus: number;
    lastCertPrintAt: Date | null;
    content?: string | null;
}
