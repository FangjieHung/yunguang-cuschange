import { EntityBase } from '../shared';

export class Customer extends EntityBase {
  id = 0;
  corpId: number | null = null;
  appUserId = 0;
  email = '';
  name = '';
  nameEn: string | null = null;
  nickname: string | null = null;
  mobile: string | null = null;
  phone: string | null = null;
  phoneExt: string | null = null;
  zipCodeId: number | null = null;;
  addr: string | null = null;
  content: string | null = null;

  constructor() {
    super();
  }
}
