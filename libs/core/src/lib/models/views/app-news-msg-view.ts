export interface AppNewsMsgView {
  id: number;
  uniqueId: string;
  type: number;
  title: string;
  startAt: Date;
  endAt: Date;
  stickyAt: Date | null;
  status: number;
  content: string | null;
}
