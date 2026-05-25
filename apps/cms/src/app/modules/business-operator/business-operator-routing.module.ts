import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickSearchComponent } from './pages/quick-search/quick-search.component';
import { TodayRemindersComponent } from './pages/today-reminders/today-reminders.component';
import { StatusOverviewComponent } from './pages/status-overview/status-overview.component';
import { BuyerQuickDetailComponent } from './pages/buyer-quick-detail/buyer-quick-detail.component';
import { ApplicationQuickDetailComponent } from './pages/application-quick-detail/application-quick-detail.component';

const routes: Routes = [
  { path: '', component: QuickSearchComponent },
  { path: 'reminders', component: TodayRemindersComponent },
  { path: 'overview', component: StatusOverviewComponent },
  { path: 'buyer/:id', component: BuyerQuickDetailComponent },
  { path: 'application/:id', component: ApplicationQuickDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessOperatorRoutingModule {}
