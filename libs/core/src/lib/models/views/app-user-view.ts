export interface AppUserView {
  id: number;
  appPfm: string;
  account: string;
  avatarAttId: number;
  startAt: Date;
  endAt: Date | null;
  status: number;
}
