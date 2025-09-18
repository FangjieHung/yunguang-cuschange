import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import {
  BuildCompListComponent, BuildCompBundleListComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'list',
    component: BuildCompListComponent,
  },
    {
    path: 'bundle/list',
    component: BuildCompBundleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule { }
