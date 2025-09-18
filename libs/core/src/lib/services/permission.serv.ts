/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionServ {
  private authRoutes: any[] = [];

  setAuthRoutes(routes: any[]): void {
    this.authRoutes = routes;
  }

  hasRoutePath(path: string): boolean {
    return this.authRoutes.some(route => route.path === path);
  }
}
