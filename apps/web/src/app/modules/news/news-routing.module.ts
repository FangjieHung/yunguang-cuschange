import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent, NewsDetailComponent } from './pages';

const routes: Routes = [
  { path: 'list', component: NewsListComponent },
  { path: 'detail', component: NewsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }