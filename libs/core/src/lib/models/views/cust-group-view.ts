export interface CustGroupView {
  id: number;
  custId: number;
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
