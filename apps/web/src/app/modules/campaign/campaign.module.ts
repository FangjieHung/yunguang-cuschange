import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignListComponent, CampaignDetailComponent } from './pages';
import { CampaignRoutingModule } from './campaign-routing.module';

import { SharedModule } from '../../shared/shared.module';

const CUSTOM_MODULES = [SharedModule];

@NgModule({
  declarations: [
    CampaignListComponent,
    CampaignDetailComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ...CUSTOM_MODULES
  ],
})
export class CampaignModule { }