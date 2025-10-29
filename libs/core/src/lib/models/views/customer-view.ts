export interface CustomerView {
  id: number;
  appUserId: number;
  avatarAttId: number;
  appUserStartAt: Date | null;
  appUserEndAt: Date | null;
  appUserStatus: number;
  uniqueId: string;
  type: number;
  code: string | null;
  name: string;
  startAt: Date;
  endAt: Date | null;
  expAt: Date | null;
  status: number;
  content?: string | null;
}
