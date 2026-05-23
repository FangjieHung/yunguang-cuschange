import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyerShellComponent } from './components/buyer-shell/buyer-shell.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WholeHouseComponent } from './pages/whole-house/whole-house.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { DesignerPackComponent } from './pages/designer-pack/designer-pack.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { VersionPreviewComponent } from './pages/version-preview/version-preview.component';
import { CustomizationReferenceComponent } from '../../shared/pages/customization-reference/customization-reference.page';

const routes: Routes = [
  // welcome 走 shell（但 shell 內部隱藏 nav）
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'reference',
    component: CustomizationReferenceComponent,
  },
  {
    path: '',
    component: BuyerShellComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'whole-house', component: WholeHouseComponent },
      { path: 'my-list', component: MyListComponent },
      { path: 'version/:id', component: VersionPreviewComponent },
      { path: 'designer-pack', component: DesignerPackComponent },
      { path: 'submit', component: SubmitComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizationRoutingModule {}
