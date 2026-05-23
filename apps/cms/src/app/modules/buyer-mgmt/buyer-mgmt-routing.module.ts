import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerListComponent } from './pages/buyer-list/buyer-list.component';
import { BuyerDetailComponent } from './pages/buyer-detail/buyer-detail.component';
import { BatchImportComponent } from './pages/batch-import/batch-import.component';

const routes: Routes = [
  { path: '', component: BuyerListComponent },
  { path: 'import', component: BatchImportComponent },
  { path: ':id', component: BuyerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerMgmtRoutingModule {}
