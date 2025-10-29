export interface AppNewsMsgView {
  id: number;
  type: number;
  title: string;
  startAt: Date;
  endAt: Date;
  stickyAt: Date | null;
  content: string | null;
}
