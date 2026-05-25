import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReportDetailComponent } from './report-detail.component';
import { ApiService } from '../../../../core/api';
import { ReportExportService } from '../../services/report-export.service';
import { of, throwError } from 'rxjs';
import { Report, ReportData } from '../../../../core/models';

describe('ReportDetailComponent', () => {
  let component: ReportDetailComponent;
  let fixture: ComponentFixture<ReportDetailComponent>;
  let apiService: jest.Mocked<ApiService>;
  let exportService: jest.Mocked<ReportExportService>;
  let router: jest.Mocked<Router>;

  const mockReport: Report = {
    id: 'report-123',
    title: 'Applications Report',
    reportType: 'applications',
    generatedAt: new Date('2024-05-25'),
    dateRange: { from: new Date('2024-05-01'), to: new Date('2024-05-25') },
    generatedBy: {
      id: 'user-1',
      name: 'John Admin',
      email: 'john@example.com',
      role: 'ROLE-01',
    },
    status: 'completed',
    fileSize: 1024000,
  };

  const mockReportData: ReportData = {
    id: 'report-123',
    title: 'Applications Report',
    generatedAt: new Date('2024-05-25'),
    reportType: 'applications',
    dateRange: { from: new Date('2024-05-01'), to: new Date('2024-05-25') },
    groupBy: 'monthly',
    data: [
      { date: '2024-05-01', status: 'submitted', count: 5 },
      { date: '2024-05-02', status: 'approved', count: 3 },
      { date: '2024-05-03', status: 'under-review', count: 2 },
    ],
    summary: { total: 10, approved: 3 },
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getReportById: jest.fn(),
    } as unknown as jest.Mocked<ApiService>;

    const exportServiceMock = {
      exportPdf: jest.fn(),
      exportExcel: jest.fn(),
      exportCsv: jest.fn(),
      downloadFile: jest.fn(),
    } as unknown as jest.Mocked<ReportExportService>;

    const routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    await TestBed.configureTestingModule({
      declarations: [ReportDetailComponent],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ReportExportService, useValue: exportServiceMock },
        { provide: Router, useValue: routerMock },
        MatSnackBar,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'report-123' }),
          },
        },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    exportService = TestBed.inject(ReportExportService) as jest.Mocked<ReportExportService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(ReportDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('report loading', () => {
    it('should load report by ID from route params on init', () => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(mockReport));

      fixture.detectChanges();

      expect(apiService.getReportById).toHaveBeenCalledWith('report-123');
    });

    it('should display report details when loaded', (done) => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(mockReport));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()).toEqual(mockReport);
        done();
      }, 100);
    });

    it('should handle error when loading report fails', (done) => {
      (apiService.getReportById as jest.Mock).mockReturnValue(throwError(() => new Error('Load failed')));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.error()).toBeTruthy();
        done();
      }, 100);
    });

    it('should display "not found" for non-existent report', (done) => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(null as any));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notFound()).toBeTruthy();
        done();
      }, 100);
    });
  });

  describe('data table rendering', () => {
    beforeEach(() => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(mockReport));
    });

    it('should render data table', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        const table = fixture.nativeElement.querySelector('table');
        expect(table).toBeTruthy();
        done();
      }, 100);
    });

    it('should display report metadata', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()?.title).toBe('Applications Report');
        expect(component.report()?.reportType).toBe('applications');
        done();
      }, 100);
    });
  });

  describe('download functionality', () => {
    beforeEach(() => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(mockReport));
      (exportService.exportPdf as jest.Mock).mockReturnValue(of(new Blob(['pdf content'])));
      (exportService.exportExcel as jest.Mock).mockReturnValue(of(new Blob(['excel content'])));
      (exportService.exportCsv as jest.Mock).mockReturnValue(of(new Blob(['csv content'])));
    });

    it('should have download PDF button', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()).toBeTruthy();
        done();
      }, 100);
    });

    it('should have download Excel button', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()).toBeTruthy();
        done();
      }, 100);
    });

    it('should have download CSV button', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()).toBeTruthy();
        done();
      }, 100);
    });

    it('should call PDF export when download PDF clicked', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        component.onDownloadPdf();

        expect(exportService.exportPdf).toHaveBeenCalled();
        done();
      }, 100);
    });

    it('should call Excel export when download Excel clicked', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        component.onDownloadExcel();

        expect(exportService.exportExcel).toHaveBeenCalled();
        done();
      }, 100);
    });

    it('should call CSV export when download CSV clicked', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        component.onDownloadCsv();

        expect(exportService.exportCsv).toHaveBeenCalled();
        done();
      }, 100);
    });
  });

  describe('navigation', () => {
    beforeEach(() => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(mockReport));
    });

    it('should navigate back to history when back button is clicked', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        component.onBack();

        expect(router.navigate).toHaveBeenCalledWith(['/reports/history']);
        done();
      }, 100);
    });
  });

  describe('metadata display', () => {
    beforeEach(() => {
      (apiService.getReportById as jest.Mock).mockReturnValue(of(mockReport));
    });

    it('should display report title', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()?.title).toBe('Applications Report');
        done();
      }, 100);
    });

    it('should display report type', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()?.reportType).toBe('applications');
        done();
      }, 100);
    });

    it('should display generated by information', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()?.generatedBy?.name).toBe('John Admin');
        done();
      }, 100);
    });

    it('should display generated date', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()?.generatedAt).toEqual(new Date('2024-05-25'));
        done();
      }, 100);
    });

    it('should display report status', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.report()?.status).toBe('completed');
        done();
      }, 100);
    });
  });

  describe('error handling', () => {
    it('should display error when report fails to load', (done) => {
      (apiService.getReportById as jest.Mock).mockReturnValue(throwError(() => new Error('Network error')));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.error()).toBeTruthy();
        done();
      }, 100);
    });

    it('should set loading state correctly', () => {
      expect(component.loading()).toBeFalsy();
      component.loading.set(true);
      expect(component.loading()).toBeTruthy();
    });
  });
});
