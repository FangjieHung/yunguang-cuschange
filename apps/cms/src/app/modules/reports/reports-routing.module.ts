import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportBuilderComponent } from './pages/report-builder/report-builder.component';
import { ReportListComponent } from './pages/report-list/report-list.component';

const routes: Routes = [
  { path: '', component: ReportBuilderComponent },
  { path: 'history', component: ReportListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
