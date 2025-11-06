import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutContentViewerComponent } from './pages';

const routes: Routes = [
  { path: 'charter', component: AboutContentViewerComponent },
  { path: 'privacy', component: AboutContentViewerComponent },
  { path: 'terms', component: AboutContentViewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
