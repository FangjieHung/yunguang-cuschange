import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BuyerMgmtRoutingModule } from './buyer-mgmt-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BuyerListComponent } from './pages/buyer-list/buyer-list.component';
import { BuyerDetailComponent } from './pages/buyer-detail/buyer-detail.component';
import { BatchImportComponent } from './pages/batch-import/batch-import.component';

@NgModule({
  declarations: [
    BuyerListComponent,
    BuyerDetailComponent,
    BatchImportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatProgressSpinnerModule,
    BuyerMgmtRoutingModule,
  ],
})
export class BuyerMgmtModule {}
