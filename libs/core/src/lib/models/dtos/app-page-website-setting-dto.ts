// import { AppObjectStore } from '../entities';

export class AppPageWebsiteSettingDto {
  base = new SiteBaseInfo();
  policy = new WebsitePolicy();

  constructor() {
    // super();
  }
}

export class SiteBaseInfo {
  address = '';
  phone = '';
  email = '';
  businessHour = '';
}

export class WebsitePolicy {
  content = '';
}

