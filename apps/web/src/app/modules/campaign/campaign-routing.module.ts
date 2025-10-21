import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent, CampaignDetailComponent } from './pages';

const routes: Routes = [
  { path: 'list', component: CampaignListComponent },
  { path: 'detail', component: CampaignDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }