/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Custom packages
import { AppAuthApiServ } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class AppAuthGuard implements CanActivate {
  constructor(
    public appAuthApiServ: AppAuthApiServ,
    public router: Router) {
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.appAuthApiServ.isSignin !== true) {
      this.router.navigate(['auth/signin'], { queryParams: { next: state.url } });
      return false;
    }
    return true;
  }
}
