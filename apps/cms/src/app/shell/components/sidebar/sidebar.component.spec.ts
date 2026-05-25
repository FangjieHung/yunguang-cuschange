import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have menu items', () => {
    expect(component.menuItems.length).toBeGreaterThan(0);
  });

  it('should have dashboard menu item', () => {
    const dashboard = component.menuItems.find((item) => item.path === '/dashboard');
    expect(dashboard).toBeTruthy();
    expect(dashboard?.label).toBe('儀表板');
  });

  it('should have project management menu item', () => {
    const project = component.menuItems.find((item) => item.path === '/project-mgmt');
    expect(project).toBeTruthy();
    expect(project?.label).toBe('專案管理');
  });

  it('should have buyer management menu item', () => {
    const buyer = component.menuItems.find((item) => item.path === '/buyer-mgmt');
    expect(buyer).toBeTruthy();
    expect(buyer?.label).toBe('買家管理');
  });

  it('should have application review menu item', () => {
    const app = component.menuItems.find((item) => item.path === '/application-review');
    expect(app).toBeTruthy();
    expect(app?.label).toBe('申請審核');
  });

  it('should detect active route correctly', () => {
    spyOn(router, 'navigate');
    router.initialNavigation();

    // Mock the router url
    Object.defineProperty(router, 'url', {
      get: () => '/dashboard',
      configurable: true,
    });

    expect(component.isActive('/dashboard')).toBe(true);
    expect(component.isActive('/project-mgmt')).toBe(false);
  });

  it('should emit navigationClick event when menu item is clicked', () => {
    spyOn(component.navigationClick, 'emit');
    component.onMenuItemClick();
    expect(component.navigationClick.emit).toHaveBeenCalledTimes(1);
  });

  it('should display sidebar when isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const sidebar = fixture.nativeElement.querySelector('.sidebar');
    expect(sidebar.classList.contains('sidebar--open')).toBe(true);
  });

  it('should not display sidebar when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();

    const sidebar = fixture.nativeElement.querySelector('.sidebar');
    expect(sidebar.classList.contains('sidebar--open')).toBe(false);
  });

  it('should apply mobile class when isMobile is true', () => {
    component.isMobile = true;
    fixture.detectChanges();

    const sidebar = fixture.nativeElement.querySelector('.sidebar');
    expect(sidebar.classList.contains('sidebar--mobile')).toBe(true);
  });

  it('should render all menu items in the template', () => {
    fixture.detectChanges();
    const navItems = fixture.nativeElement.querySelectorAll('.nav-item');
    expect(navItems.length).toBe(component.menuItems.length);
  });

  it('should display notification badge if badge count > 0', () => {
    component.menuItems[4].badge = 5;
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.nav-badge');
    expect(badge).toBeTruthy();
    expect(badge.textContent).toContain('5');
  });

  it('should not display notification badge if badge count is 0', () => {
    component.menuItems[4].badge = 0;
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.nav-badge');
    expect(badge).toBeFalsy();
  });
});
