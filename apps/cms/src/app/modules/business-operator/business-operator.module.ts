import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';

import { BusinessOperatorRoutingModule } from './business-operator-routing.module';
import { QuickSearchComponent } from './pages/quick-search/quick-search.component';
import { TodayRemindersComponent } from './pages/today-reminders/today-reminders.component';
import { StatusOverviewComponent } from './pages/status-overview/status-overview.component';
import { BuyerQuickDetailComponent } from './pages/buyer-quick-detail/buyer-quick-detail.component';
import { ApplicationQuickDetailComponent } from './pages/application-quick-detail/application-quick-detail.component';

@NgModule({
  declarations: [
    QuickSearchComponent,
    TodayRemindersComponent,
    StatusOverviewComponent,
    BuyerQuickDetailComponent,
    ApplicationQuickDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatProgressBarModule,
    MatBadgeModule,
    BusinessOperatorRoutingModule,
  ],
  exports: [
    QuickSearchComponent,
    TodayRemindersComponent,
    StatusOverviewComponent,
    BuyerQuickDetailComponent,
    ApplicationQuickDetailComponent,
  ],
})
export class BusinessOperatorModule {}
