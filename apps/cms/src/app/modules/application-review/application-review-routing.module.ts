import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';

const routes: Routes = [
  { path: '', component: ApplicationListComponent },
  { path: ':id', component: ApplicationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationReviewRoutingModule {}
