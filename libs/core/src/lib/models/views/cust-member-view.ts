export interface CustMemberView {
  id: number;
  appUserId?: number | null;
  appUserStatus?: number | null;
  custId: number;
  custStatus?: number | null;
  custStartAt?: Date | null;
  custExpAt?: Date | null;
  code?: string | null;
  idNo: string;
  name: string;
  nameEn: string | null;
  gender: string | null;
  birthAt: Date | null;
  email: string;
  mobile: string | null;
  phone: string | null;
  phoneExt: string | null;
  resiZipCodeId: number | null;
  resiAddr: string | null;
  currZipCodeId: number | null;
  currAddr: string | null;
  recommender: string | null;
  content?: string | null;
}
