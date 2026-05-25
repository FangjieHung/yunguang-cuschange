import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplicationReviewRoutingModule } from './application-review-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationDetailComponent,
    ReviewFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ApplicationReviewRoutingModule,
  ],
})
export class ApplicationReviewModule {}
