import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { ChartComponent } from './components/chart/chart.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    KpiCardComponent,
    ChartComponent,
    ApplicationListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    BaseChartDirective,
    ReactiveFormsModule,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardModule {}
