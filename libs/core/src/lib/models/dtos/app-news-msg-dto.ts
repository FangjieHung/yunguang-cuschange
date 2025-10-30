import { AppNewsMsg } from '../entities';
import { AppNewsMsgContentJto } from '../jtos';

export class AppNewsMsgDto extends AppNewsMsg {
  contentJto = new AppNewsMsgContentJto();

  constructor() {
    super();
  }
}
