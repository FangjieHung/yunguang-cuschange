import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import { ResultErrorComponent } from './pages';

const routes: Routes = [
  {
    path: 'error',
    component: ResultErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
