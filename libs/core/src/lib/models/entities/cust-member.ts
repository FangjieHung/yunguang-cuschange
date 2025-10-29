import { EntityBase } from '../shared';

export class CustMember extends EntityBase {
  id = 0;
  custId = 0;
  IdNo = '';
  name = '';
  nameEn: string | null = null;
  gender: string | null = null;
  birthAt: Date | null = null;
  email = '';
  mobile: string | null = null;
  phone: string | null = null;
  phoneExt: string | null = null;
  resiZipCodeId: number | null = null;
  resiAddr: string | null = null;
  currZipCodeId: number | null = null;
  currAddr: string | null = null;
  recommender: string | null = null;
  content: string | null = null;

  constructor() {
    super();
  }
}
