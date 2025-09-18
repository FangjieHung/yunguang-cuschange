export interface CustomerView {
  id: number;
  corpId: number;
  corpName?: string | null;
  appUserId: number;
  avatarAttId: number;
  appUserStartAt: Date | null;
  appUserEndAt: Date | null;
  appUserStatus: number;
  email: string;
  name: string;
  nameEn: string | null;
  nickname: string | null;
  mobile: string | null;
  phone: string | null;
  phoneExt: string | null;
  zipCodeId: number | null;
  addr: string | null;
  content?: string | null;
}
