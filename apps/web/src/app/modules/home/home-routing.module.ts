import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';

// Custom packages
import { DefaultComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: {
      title: `${env.siteName}`,
      decscription: `${env.siteName}`,
      url: `${env.siteServer}`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
