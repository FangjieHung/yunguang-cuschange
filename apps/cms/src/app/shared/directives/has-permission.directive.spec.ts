import { Component, DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HasPermissionDirective } from './has-permission.directive';
import { CmsStore } from '../../core/state';
import { Role } from '../../core/models';

@Component({
  selector: 'cms-test-has-permission',
  template: `
    <div *cmsHasPermission="['ROLE-01', 'ROLE-02']" class="authorized-content">
      Authorized Content
    </div>
    <div class="always-visible">Always Visible</div>
  `,
  standalone: true,
  imports: [HasPermissionDirective],
})
class TestHasPermissionComponent {}

describe('HasPermissionDirective', () => {
  let component: TestHasPermissionComponent;
  let fixture: ComponentFixture<TestHasPermissionComponent>;
  let cmsStore: CmsStore;
  let mockRoleSignal: any;

  beforeEach(async () => {
    mockRoleSignal = signal<Role | null>(null);

    const mockCmsStore = {
      currentRole: mockRoleSignal,
    };

    await TestBed.configureTestingModule({
      imports: [TestHasPermissionComponent],
      providers: [{ provide: CmsStore, useValue: mockCmsStore }],
    }).compileComponents();

    cmsStore = TestBed.inject(CmsStore);
  });

  it('should create the directive', () => {
    fixture = TestBed.createComponent(TestHasPermissionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show content when user has the required role', () => {
    mockRoleSignal.set('ROLE-01');
    fixture = TestBed.createComponent(TestHasPermissionComponent);
    fixture.detectChanges();

    const authorized = fixture.debugElement.query(By.css('.authorized-content'));
    expect(authorized).toBeTruthy();
    expect(authorized.nativeElement.textContent).toContain('Authorized Content');
  });

  it('should hide content when user does not have the required role', () => {
    mockRoleSignal.set('ROLE-05');
    fixture = TestBed.createComponent(TestHasPermissionComponent);
    fixture.detectChanges();

    const authorized = fixture.debugElement.query(By.css('.authorized-content'));
    expect(authorized).toBeFalsy();
  });

  it('should always show content without the directive', () => {
    mockRoleSignal.set('ROLE-05');
    fixture = TestBed.createComponent(TestHasPermissionComponent);
    fixture.detectChanges();

    const alwaysVisible = fixture.debugElement.query(
      By.css('.always-visible')
    );
    expect(alwaysVisible).toBeTruthy();
    expect(alwaysVisible.nativeElement.textContent).toContain('Always Visible');
  });
});
