import { EntityBase } from '../shared';

export class AppObjectStore extends EntityBase {
  id = 0;
  type = 0;
  code = '';
  name = '';
  desc = '';
  value = '{}';

  constructor() {
    super();
  }
}

export enum AppObjectStoreCodes {
  'ShapeDiverTicketKey' = 'SHAPEDIVER_TICKET',
}
