import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PrinciplesPageComponent,
  TimelinePageComponent,
  FaqPageComponent,
  PricingPageComponent,
  EquipmentPageComponent
} from './pages';
import { environment as env } from '../../../environments/environment';

const routes: Routes = [
  {
    path: 'principles',
    component: PrinciplesPageComponent,
    data: {
      title: `客變原則｜${env.siteName}`,
      description: '客變原則説明',
      url: `${env.siteServer}/explanation/principles`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'timeline',
    component: TimelinePageComponent,
    data: {
      title: `客變時程｜${env.siteName}`,
      description: '客變時程説明',
      url: `${env.siteServer}/explanation/timeline`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    data: {
      title: `常見問題｜${env.siteName}`,
      description: '常見問題解答',
      url: `${env.siteServer}/explanation/faq`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'pricing',
    component: PricingPageComponent,
    data: {
      title: `客變價格｜${env.siteName}`,
      description: '客變價格説明',
      url: `${env.siteServer}/explanation/pricing`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'equipment',
    component: EquipmentPageComponent,
    data: {
      title: `客變設備｜${env.siteName}`,
      description: '客變設備説明',
      url: `${env.siteServer}/explanation/equipment`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplanationRoutingModule { }
