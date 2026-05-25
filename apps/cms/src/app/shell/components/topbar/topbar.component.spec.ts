import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBarComponent } from './topbar.component';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'ROLE-01',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, TopBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    component.currentUser = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current user name', () => {
    expect(component.currentUser?.name).toBe('Test User');
  });

  it('should display current user avatar with first character', () => {
    fixture.detectChanges();
    const avatar = fixture.nativeElement.querySelector('.user-avatar');
    expect(avatar.textContent).toContain('T');
  });

  it('should emit toggleSidebar event when menu button is clicked', () => {
    spyOn(component.toggleSidebar, 'emit');
    component.onToggleSidebar();
    expect(component.toggleSidebar.emit).toHaveBeenCalledTimes(1);
  });

  it('should toggle user menu', () => {
    expect(component.userMenuOpen()).toBe(false);
    component.onToggleUserMenu();
    expect(component.userMenuOpen()).toBe(true);
    component.onToggleUserMenu();
    expect(component.userMenuOpen()).toBe(false);
  });

  it('should emit logout event when logout button is clicked', () => {
    spyOn(component.logout, 'emit');
    component.onToggleUserMenu();
    component.onLogout();
    expect(component.logout.emit).toHaveBeenCalledTimes(1);
  });

  it('should close user menu when logout is called', () => {
    component.userMenuOpen.set(true);
    component.onLogout();
    expect(component.userMenuOpen()).toBe(false);
  });

  it('should display user dropdown when menu is open', () => {
    component.userMenuOpen.set(true);
    fixture.detectChanges();

    const dropdown = fixture.nativeElement.querySelector('.user-dropdown');
    expect(dropdown).toBeTruthy();
  });

  it('should not display user dropdown when menu is closed', () => {
    component.userMenuOpen.set(false);
    fixture.detectChanges();

    const dropdown = fixture.nativeElement.querySelector('.user-dropdown');
    expect(dropdown).toBeFalsy();
  });

  it('should display notification badge if notification count > 0', () => {
    component.notificationCount.set(5);
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.badge');
    expect(badge).toBeTruthy();
    expect(badge.textContent).toContain('5');
  });

  it('should not display notification badge if notification count is 0', () => {
    component.notificationCount.set(0);
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.badge');
    expect(badge).toBeFalsy();
  });

  it('should close user menu on closeUserMenu', () => {
    component.userMenuOpen.set(true);
    component.closeUserMenu();
    expect(component.userMenuOpen()).toBe(false);
  });

  it('should display user email in dropdown header', () => {
    component.userMenuOpen.set(true);
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.user-dropdown__header');
    expect(header.textContent).toContain('test@example.com');
  });

  it('should have profile, settings, and logout menu items', () => {
    component.userMenuOpen.set(true);
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('.user-dropdown__item');
    expect(items.length).toBeGreaterThanOrEqual(3);
  });

  it('should handle null user gracefully', () => {
    component.currentUser = null;
    fixture.detectChanges();

    const avatar = fixture.nativeElement.querySelector('.user-avatar');
    expect(avatar.textContent).toContain('U');
  });

  it('should render topbar header', () => {
    const header = fixture.nativeElement.querySelector('.topbar');
    expect(header).toBeTruthy();
  });

  it('should display app title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.topbar__title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('雲光建案管理系統');
  });
});
