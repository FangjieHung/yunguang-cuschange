import { EntityBase } from '../shared';

export class Corp extends EntityBase {
  id = 0;
  taxId = '';
  name = '';
  zipCodeId: number | null = null;
  addr: string | null = null;
  cpName: string | null = null;
  cpMobile: string | null = null;
  cpPhone: string | null = null;
  cpPhoneExt: string | null = null;

  constructor() {
    super();
  }
}
