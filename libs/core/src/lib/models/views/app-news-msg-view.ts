export interface AppNewsMsgView {
  id: number;
  type: number;
  title: string;
  startAt: Date;
  endAt: Date;
  stickyAt: Date | null;
  status: number;
  content: string | null;
}
