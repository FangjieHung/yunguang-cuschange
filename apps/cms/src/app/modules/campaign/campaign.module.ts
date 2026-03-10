import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import {
  CampAttendSignListComponent,
  CampaignListComponent, CampaignEditComponent,
} from './pages';


const CUSTOM_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  CampAttendSignListComponent,
  CampaignListComponent, CampaignEditComponent,
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [CommonModule, CampaignRoutingModule, ...CUSTOM_MODULES],
})
export class CampaignModule { }
