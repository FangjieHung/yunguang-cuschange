import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  CampAttendSignListComponent, CampaignListComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: CampaignListComponent,
  },
  {
    path: 'attend-sign/list',
    component: CampAttendSignListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignRoutingModule { }
