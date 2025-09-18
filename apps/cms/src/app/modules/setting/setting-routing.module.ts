import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  ShapediverTicketEditComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'shapediver-ticket/edit',
    component: ShapediverTicketEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }
