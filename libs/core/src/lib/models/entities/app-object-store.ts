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
  '關於學會' = 'ORG_ABOUT_SETTING',
  '學會聯絡方式設定檔' = 'ORG_CONTACT_SETTING',
  '網站條款設定檔' = 'WEB_POLICY_SETTING'
}
