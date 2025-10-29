export interface BannerAdView {
  id: number;
  title: string;
  desc: string | null;
  startAt: Date;
  endAt: Date;
  status: number;
  coverAttId: number;
  coverFullPath?: string | null;
  sort: number;
}
