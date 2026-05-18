import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';

// Custom packages
import {
  ForgetResetPasswordComponent, LoginComponent, SigninComponent, SignupComponent, SignupCompletedComponent
} from './pages';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: `登入客變系統｜${env.siteName}`,
      decscription: '登入客變系統',
      url: `${env.siteServer}/auth/login`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'forget-password',
    component: ForgetResetPasswordComponent,
    data: {
      title: `忘記密碼｜${env.siteName}`,
      decscription: '忘記密碼',
      url: `${env.siteServer}/auth/forget-password`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      title: `登入｜${env.siteName}`,
      decscription: '登入',
      url: `${env.siteServer}/auth/signin`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: `申請入會｜${env.siteName}`,
      decscription: '申請入會',
      url: `${env.siteServer}/auth/signup`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  {
    path: 'signup/complete',
    component: SignupCompletedComponent,
    data: {
      title: `申請完成｜${env.siteName}`,
      decscription: '申請完成',
      url: `${env.siteServer}/auth/signup/complete`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
