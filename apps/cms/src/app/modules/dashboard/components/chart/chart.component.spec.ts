import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartComponent],
      imports: [BaseChartDirective],
      providers: [provideCharts(withDefaultRegisterables())],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Test Chart';
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('.chart-card__title');
    expect(title.textContent).toContain('Test Chart');
  });

  it('should use provided chart options', () => {
    component.chartOptions = { responsive: false };
    component.ngOnInit();
    expect(component.chartOptions?.responsive).toBe(false);
  });

  it('should create default options if not provided', () => {
    component.ngOnInit();
    expect(component.chartOptions).toBeTruthy();
    expect(component.chartOptions?.plugins).toBeTruthy();
  });

  it('should render line chart canvas when type is line', () => {
    component.type = 'line';
    component.chartData = { labels: ['A', 'B'], datasets: [] };
    fixture.detectChanges();

    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

  it('should render bar chart canvas when type is bar', () => {
    component.type = 'bar';
    component.chartData = { labels: ['A', 'B'], datasets: [] };
    fixture.detectChanges();

    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

  it('should render doughnut chart canvas when type is doughnut', () => {
    component.type = 'doughnut';
    component.chartData = { labels: ['A', 'B'], datasets: [] };
    fixture.detectChanges();

    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });
});
