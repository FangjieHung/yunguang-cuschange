import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  CampAttendSignListComponent, CampaignListComponent, CampRegListComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: CampaignListComponent,
  },
  {
    path: 'reg/list',
    component: CampRegListComponent
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
