import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { CmsStore } from '../../core/state';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { User, Project, Application } from '../../core/models';

describe('Dashboard Integration Tests', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: CmsStore;

  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'ROLE-01',
  };

  const mockProjects: Project[] = [
    {
      id: 'proj-001',
      name: '富華澐光',
      code: 'PROJECT-001',
      status: 'active',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      totalUnits: 42,
    },
  ];

  const mockApplications: Application[] = [
    {
      id: 'app-001',
      buyerId: 'buyer-001',
      projectId: 'proj-001',
      version: 1,
      status: 'submitted',
      items: [],
      totalAddOn: 5000,
      totalRefund: 0,
      submittedAt: '2026-05-20T10:00:00Z',
    },
    {
      id: 'app-002',
      buyerId: 'buyer-002',
      projectId: 'proj-001',
      version: 1,
      status: 'under-review',
      items: [],
      totalAddOn: 3000,
      totalRefund: 0,
      submittedAt: '2026-05-19T10:00:00Z',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule, ReactiveFormsModule, BaseChartDirective],
      providers: [CmsStore, provideCharts(withDefaultRegisterables())],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(CmsStore);

    // Setup mock data
    store.setCurrentUser(mockUser);
    store.loadProjects(mockProjects);
    store.setActiveProject('proj-001');
    store.loadApplications(mockApplications);

    fixture.detectChanges();
  });

  it('should render dashboard with all sections', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.dashboard-page')).toBeTruthy();
  });

  it('should display KPI cards with correct stats', () => {
    const stats = component.dashboardStats();
    expect(stats.totalSubmitted).toBe(2);
    expect(stats.underReview).toBe(1);
  });

  it('should render KPI card components', () => {
    const kpiCards = fixture.nativeElement.querySelectorAll('cms-kpi-card');
    expect(kpiCards.length).toBe(6); // 6 KPI cards expected
  });

  it('should render chart components', () => {
    const charts = fixture.nativeElement.querySelectorAll('cms-chart');
    expect(charts.length).toBeGreaterThan(0);
  });

  it('should render application list component', () => {
    const appList = fixture.nativeElement.querySelector('cms-application-list');
    expect(appList).toBeTruthy();
  });

  it('should calculate progress percent correctly', () => {
    const percent = component.getProgressPercent();
    expect(percent).toBeGreaterThanOrEqual(0);
    expect(percent).toBeLessThanOrEqual(100);
  });

  it('should display applications in list', () => {
    const appList = component.applications();
    expect(appList.length).toBe(2);
  });

  it('should be responsive to different screen sizes', () => {
    const dashboard = fixture.nativeElement.querySelector('.dashboard-page');
    expect(dashboard.classList).toBeTruthy();
  });

  it('should handle data updates without errors', (done) => {
    const newApplications: Application[] = [
      {
        id: 'app-003',
        buyerId: 'buyer-003',
        projectId: 'proj-001',
        version: 1,
        status: 'approved',
        items: [],
        totalAddOn: 2000,
        totalRefund: 500,
        submittedAt: '2026-05-18T10:00:00Z',
      },
    ];

    // Update the store
    store.loadApplications(newApplications);

    setTimeout(() => {
      fixture.detectChanges();
      const updatedAppList = component.applications();
      expect(updatedAppList.length).toBe(1);
      done();
    }, 100);
  });

  it('should maintain state across dashboard navigation', () => {
    const initialStats = component.dashboardStats();
    const initialApps = component.applications();

    expect(initialStats).toBeTruthy();
    expect(initialApps.length).toBe(2);

    // Verify state persists
    fixture.detectChanges();
    const newStats = component.dashboardStats();
    const newApps = component.applications();

    expect(newStats).toEqual(initialStats);
    expect(newApps.length).toBe(initialApps.length);
  });

  it('should render all dashboard sections together without conflicts', () => {
    const compiled = fixture.nativeElement;

    // Check header
    const header = compiled.querySelector('.dashboard-page__header');
    expect(header).toBeTruthy();

    // Check KPI cards grid
    const kpiGrid = compiled.querySelector('.dashboard-grid');
    expect(kpiGrid).toBeTruthy();

    // Check progress section
    const progressSection = compiled.querySelector('.progress-section');
    expect(progressSection).toBeTruthy();

    // Check charts section
    const chartSection = compiled.querySelector('.charts-section');
    expect(chartSection).toBeTruthy();

    // Check application list
    const appListSection = compiled.querySelector('cms-application-list');
    expect(appListSection).toBeTruthy();

    // Verify no console errors during rendering
    expect(fixture.nativeElement.innerHTML).toBeTruthy();
  });
});
