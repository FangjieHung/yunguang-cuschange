import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportBuilderComponent } from './pages/report-builder/report-builder.component';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ReportDetailComponent } from './pages/report-detail/report-detail.component';

const routes: Routes = [
  { path: '', component: ReportBuilderComponent },
  { path: 'history', component: ReportListComponent },
  { path: 'history/:id', component: ReportDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
