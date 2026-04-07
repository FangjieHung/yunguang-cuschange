import { CampReg } from '../entities';
import { CampRegContentJto } from '../jtos/camp-reg-content-jto';

export class CampRegDto extends CampReg {
  buyerCode: string | null = null;
  buyerName: string | null = null;
  contentJto = new CampRegContentJto();

  constructor() {
    super();
  }
}
