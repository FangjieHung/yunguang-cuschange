export interface AppAdminView {
  id: number;
  account: string;
  appUserId: number;
  appUserStartAt: Date | null;
  appUserEndAt: Date | null;
  appUserStatus: number;
  name: string;
  nameEn: string | null;
  mobile: string | null;
  email: string | null;

}
