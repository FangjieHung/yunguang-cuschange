import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';

// Custom packages
import { ResultErrorComponent } from './pages';

const routes: Routes = [
  {
    path: 'error',
    component: ResultErrorComponent,
    data: {
      title: `404｜${env.siteName}`,
      decscription: `404 找不到頁面`,
      url: `${env.siteServer}/result/error`,
      image: `${env.siteServer}/favicon.ico`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
