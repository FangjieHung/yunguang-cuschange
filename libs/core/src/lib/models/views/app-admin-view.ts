export interface AppAdminView {
  id: number;
  account: string;
  appUserId: number;
  appUserStartAt: Date | null;
  appUserEndAt: Date | null;
  appUserStatus: number;
  email: string | null;
  name: string;
  nameEn: string | null;
  nickname: string | null;
  mobile: string | null;
}
