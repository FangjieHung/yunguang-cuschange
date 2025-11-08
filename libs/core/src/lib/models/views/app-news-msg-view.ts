export interface AppNewsMsgView {
  id: number;
  uniqueId: string;
  catId: number;
  catName?: string | null;
  title: string;
  startAt: Date;
  endAt: Date;
  stickyAt: Date | null;
  status: number;
  content: string | null;
}
