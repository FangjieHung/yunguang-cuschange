import { Campaign } from '../entities';
import { CampaignContentJto } from '../jtos';

export class CampaignDto extends Campaign {
  startTimeAt: string | null = null;
  endTimeAt: string | null = null;
  regStartTimeAt: string | null = null;
  regEndTimeAt: string | null = null;
  contentJto = new CampaignContentJto();
  
  constructor() {
    super();
  }
}
