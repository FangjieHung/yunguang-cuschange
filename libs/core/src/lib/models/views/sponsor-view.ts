export interface SponsorView {
  id: number;
  name: string;
  desc: string | null;
  startAt: Date;
  endAt: Date;
  status: number;
  logoAttId: number;
  logoFullPath?: string | null;
  sort: number;
}
