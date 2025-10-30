import { BannerAd } from '../entities';

export class BannerAdDto extends BannerAd {
  coverFullPath?: string | null;
  
  constructor() {
    super();
  }
}
