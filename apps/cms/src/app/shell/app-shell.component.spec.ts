import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppShellComponent } from './app-shell.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopBarComponent } from './components/topbar/topbar.component';
import { CmsStore } from '../core/state';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../core/models';

describe('AppShellComponent', () => {
  let component: AppShellComponent;
  let fixture: ComponentFixture<AppShellComponent>;
  let store: CmsStore;
  let authService: AuthService;
  let router: Router;

  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'ROLE-01',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppShellComponent],
      imports: [
        CommonModule,
        RouterTestingModule,
        SidebarComponent,
        TopBarComponent,
      ],
      providers: [CmsStore, AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppShellComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(CmsStore);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    // Set a mock user
    store.setCurrentUser(mockUser);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current user in topbar', () => {
    expect(component.currentUser()).toEqual(mockUser);
  });

  it('should toggle sidebar', () => {
    expect(component.sidebarOpen()).toBe(true);
    component.toggleSidebar();
    expect(component.sidebarOpen()).toBe(false);
    component.toggleSidebar();
    expect(component.sidebarOpen()).toBe(true);
  });

  it('should close sidebar on mobile after navigation', () => {
    component.isMobile.set(true);
    component.sidebarOpen.set(true);
    component.closeSidebar();
    expect(component.sidebarOpen()).toBe(false);
  });

  it('should not close sidebar on desktop after navigation', () => {
    component.isMobile.set(false);
    component.sidebarOpen.set(true);
    component.closeSidebar();
    expect(component.sidebarOpen()).toBe(true);
  });

  it('should logout and redirect to login', (done) => {
    spyOn(authService, 'logout').and.returnValue(
      new Promise((resolve) => resolve(undefined as any))
    );
    spyOn(router, 'navigate');

    component.logout();
    fixture.detectChanges();

    expect(authService.logout).toHaveBeenCalled();
    done();
  });

  it('should detect mobile size on window resize', () => {
    expect(component.isMobile()).toBeFalsy();
  });

  it('should render topbar and sidebar components', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('tslmai-angular16-apps-topbar')).toBeTruthy();
    expect(compiled.querySelector('tslmai-angular16-apps-sidebar')).toBeTruthy();
  });

  it('should render router outlet', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
