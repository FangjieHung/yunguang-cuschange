import { Component, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CmsStore } from '../core/state';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'tslmai-angular16-apps-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent implements OnInit {
  currentUser = this.store.currentUser;
  sidebarOpen = signal(true);
  isMobile = signal(false);

  constructor(
    private store: CmsStore,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Check if mobile on init
    this.checkMobileSize();
    window.addEventListener('resize', () => this.checkMobileSize());
  }

  private checkMobileSize() {
    this.isMobile.set(window.innerWidth < 768);
  }

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }

  closeSidebar() {
    if (this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
