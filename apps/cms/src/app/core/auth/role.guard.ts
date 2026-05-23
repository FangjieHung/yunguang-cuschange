import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.getCurrentUser()) {
      router.navigate(['/login']);
      return false;
    }

    if (authService.hasRole(allowedRoles)) {
      return true;
    }

    router.navigate(['/unauthorized']);
    return false;
  };
}

@Injectable({ providedIn: 'root' })
export class RoleGuardService {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(allowedRoles: string[]): CanActivateFn {
    return () => {
      if (!this.authService.getCurrentUser()) {
        this.router.navigate(['/login']);
        return false;
      }

      if (this.authService.hasRole(allowedRoles)) {
        return true;
      }

      this.router.navigate(['/unauthorized']);
      return false;
    };
  }
}
