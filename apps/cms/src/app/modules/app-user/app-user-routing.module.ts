import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  AppUserListComponent
} from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: AppUserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
