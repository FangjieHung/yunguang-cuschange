import { Sponsor } from '../entities';

export class SponsorDto extends Sponsor {
  logoFullPath?: string | null;

  constructor() {
    super();
  }
}
