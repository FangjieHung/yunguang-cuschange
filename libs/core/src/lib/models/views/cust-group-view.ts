export interface CustGroupView {
  id: number;
  appUserId?: number | null;
  appUserStatus?: number | null;
  custId: number;
  custStatus?: number | null;
  custStartAt?: Date | null;
  custExpAt?: Date | null;
  code?: string | null;
  taxId: string;
  name: string;
  nameEn: string | null;
  email: string;
  phone: string | null;
  phoneExt: string | null;
  currZipCodeId: number | null;
  currAddr: string | null;
  owner: string;
  ownerTitle: string;
  cpName: string;
  cpGender: string | null;
  cpBirthAt: Date | null;
  cpIdNo: string;
  cpMobile: string | null;
  cpTitle: string;
  cpEmail: string;
  content?: string | null;
}
