import { CampReg } from '../entities';
import { CampRegContentJto } from '../jtos/camp-reg-content-jto';

export class CampRegDto extends CampReg {
  contentJto = new CampRegContentJto();

  constructor() {
    super();
  }
}
