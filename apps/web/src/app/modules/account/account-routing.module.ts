import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';

// Custom packages
import {
  ProfileComponent, ResetPasswordComponent, AccountComponent,
  MyBillRecComponent, MyCampRegRecComponent
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: `會員資料｜${env.siteName}`,
          decscription: '會員資料',
          url: `${env.siteServer}/account/profile`,
          image: `${env.siteServer}/assets/image/og/tslmai.png`
        }
      },
      {
        path: 'password',
        component: ResetPasswordComponent,
        data: {
          title: `重設密碼｜${env.siteName}`,
          decscription: '重設密碼',
          url: `${env.siteServer}/account/password`,
          image: `${env.siteServer}/assets/image/og/tslmai.png`
        }
      },
      {
        path: 'bill-rec',
        component: MyBillRecComponent
      },
      {
        path: 'camp-reg-rec',
        component: MyCampRegRecComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
