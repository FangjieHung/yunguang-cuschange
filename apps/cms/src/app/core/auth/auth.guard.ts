import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function authGuard(): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.getCurrentUser()) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  };
}
