import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { ChartComponent } from './components/chart/chart.component';
import { CmsStore } from '../../core/state';
import { SharedModule } from '../../shared/shared.module';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: CmsStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, KpiCardComponent, ChartComponent],
      imports: [SharedModule, BaseChartDirective],
      providers: [CmsStore, provideCharts(withDefaultRegisterables())],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(CmsStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dashboard stats', () => {
    expect(component.dashboardStats()).toBeTruthy();
  });

  it('should calculate progress percent', () => {
    const percent = component.getProgressPercent();
    expect(percent).toBeGreaterThanOrEqual(0);
    expect(percent).toBeLessThanOrEqual(100);
  });

  it('should display applications', () => {
    expect(component.applications).toBeTruthy();
  });
});
