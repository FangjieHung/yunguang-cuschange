import { EntityBase } from '../shared';

export class CustGroup extends EntityBase {
  id = 0;
  custId = 0;
  taxId = '';
  name = '';
  nameEn: string | null = null;
  email = '';
  phone: string | null = null;
  phoneExt: string | null = null;
  currZipCodeId: number | null = null;
  currAddr: string | null = null;
  owner = '';
  ownerTitle = '';
  cpName = '';
  cpGender: string | null = null;
  cpBirthAt: Date | null = null;
  cpIdNo = '';
  cpMobile: string | null = null;
  cpTitle = '';
  cpEmail = '';
  content: string | null = null;

  constructor() {
    super();
  }
}
