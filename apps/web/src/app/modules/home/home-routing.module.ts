import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import { DefaultComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
