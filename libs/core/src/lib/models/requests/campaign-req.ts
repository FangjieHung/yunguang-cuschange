import { QueryRequestBase } from './../shared';

export class CampaignReq extends QueryRequestBase {
  regActiveAt: Date | null = null;
  
  constructor() {
    super();
  }
}
