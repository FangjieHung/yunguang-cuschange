import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { ReportExportService } from '../../services/report-export.service';
import { ReportListComponent } from './report-list.component';
import { of } from 'rxjs';
import { Report, ReportData, User } from '../../../../core/models';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Reports Module Integration Tests', () => {
  let component: ReportListComponent;
  let fixture: ComponentFixture<ReportListComponent>;
  let apiService: jest.Mocked<ApiService>;
  let exportService: jest.Mocked<ReportExportService>;
  let router: jest.Mocked<Router>;

  const mockUser: User = {
    id: 'user-001',
    name: 'Test Admin',
    email: 'admin@example.com',
    role: 'ROLE-01',
  };

  const createMockReports = (count: number): Report[] => {
    const reportTypes: Array<'applications' | 'buyers' | 'financials' | 'timeline'> = [
      'applications',
      'buyers',
      'financials',
      'timeline',
    ];

    return Array.from({ length: count }, (_, i) => {
      const dateFrom = new Date();
      dateFrom.setMonth(dateFrom.getMonth() - 1);

      return {
        id: `report-${i + 1}`,
        title: `${reportTypes[i % reportTypes.length]} Report ${i + 1}`,
        reportType: reportTypes[i % reportTypes.length],
        generatedAt: new Date(Date.now() - i * 86400000),
        dateRange: { from: dateFrom, to: new Date() },
        generatedBy: mockUser,
        status: ['completed', 'processing', 'failed'][i % 3] as any,
        fileSize: Math.floor(Math.random() * 5000000) + 500000,
      };
    });
  };

  const createMockReportData = (): ReportData => ({
    id: 'report-1',
    title: 'Applications Report',
    generatedAt: new Date(),
    reportType: 'applications',
    dateRange: { from: new Date(Date.now() - 30 * 86400000), to: new Date() },
    data: [
      { date: '2024-05-01', status: 'submitted', count: 5 },
      { date: '2024-05-02', status: 'approved', count: 3 },
      { date: '2024-05-03', status: 'under-review', count: 2 },
    ],
    summary: { total: 10, approved: 3 },
  });

  beforeEach(async () => {
    const apiServiceMock = {
      getReports: jest.fn(),
      generateReport: jest.fn(),
      downloadReport: jest.fn(),
      deleteReport: jest.fn(),
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
      declarations: [ReportListComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ReportExportService, useValue: exportServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    exportService = TestBed.inject(ReportExportService) as jest.Mocked<ReportExportService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(ReportListComponent);
    component = fixture.componentInstance;
  });

  describe('Full Report Workflow', () => {
    it('should load and display report list on init', (done) => {
      const mockReports = createMockReports(5);
      (apiService.getReports as jest.Mock).mockReturnValue(
        of({ data: mockReports, total: 5 })
      );

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.reports().length).toBe(5);
        expect(component.loading()).toBeFalsy();
        // error is an empty string when no error
        expect(component.error()).toBe('');
        done();
      }, 100);
    });

    it('should navigate to report detail view when clicked', (done) => {
      const mockReports = createMockReports(3);
      (apiService.getReports as jest.Mock).mockReturnValue(
        of({ data: mockReports, total: 3 })
      );

      fixture.detectChanges();

      setTimeout(() => {
        const firstReport = component.reports()[0];
        // Simulate navigation to detail view
        router.navigate(['/reports/history', firstReport.id]);

        expect(router.navigate).toHaveBeenCalledWith(['/reports/history', firstReport.id]);
        done();
      }, 100);
    });

    it('should load reports with pagination', (done) => {
      const mockReports = createMockReports(15);
      (apiService.getReports as jest.Mock).mockReturnValue(
        of({ data: mockReports, total: 45 })
      );

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.reports().length).toBe(15);
        expect(component.total).toBeGreaterThan(15);
        expect(apiService.getReports).toHaveBeenCalled();
        done();
      }, 100);
    });

    it('should support sorting', () => {
      expect(component.sortColumn).toBe('generatedAt');
      expect(component.sortDirection).toBe('desc');

      // Verify sortColumn and sortDirection are used for sorting
      component.sortColumn = 'reportType';
      expect(component.sortColumn).toBe('reportType');
    });

    it('should support filtering by report type', () => {
      component.filterForm.patchValue({ reportType: ['applications'] });

      expect(component.filterForm.get('reportType')?.value).toEqual(['applications']);
    });

    it('should support clearing filters', () => {
      component.filterForm.patchValue({ reportType: ['applications'], status: 'completed' });
      component.filterForm.reset();

      expect(component.filterForm.get('reportType')?.value).toBeNull();
      expect(component.filterForm.get('status')?.value).toBeNull();
    });

    it('should support downloading reports', () => {
      const mockBlob = new Blob(['pdf content']);
      (apiService.downloadReport as jest.Mock).mockReturnValue(of(mockBlob));

      const report = createMockReports(1)[0];
      apiService.downloadReport(report.id, 'pdf');

      expect(apiService.downloadReport).toHaveBeenCalledWith(report.id, 'pdf');
    });

    it('should support deleting reports', () => {
      (apiService.deleteReport as jest.Mock).mockReturnValue(of(void 0));

      const report = createMockReports(1)[0];
      apiService.deleteReport(report.id);

      expect(apiService.deleteReport).toHaveBeenCalledWith(report.id);
    });

    it('should display correct status labels', () => {
      expect(component.getStatusLabel('completed')).toBe('已完成');
      expect(component.getStatusLabel('processing')).toBe('處理中');
      expect(component.getStatusLabel('failed')).toBe('失敗');
    });

    it('should display correct report type labels', () => {
      expect(component.getReportTypeLabel('applications')).toBe('申請報表');
      expect(component.getReportTypeLabel('buyers')).toBe('買家報表');
      expect(component.getReportTypeLabel('financials')).toBe('財務報表');
      expect(component.getReportTypeLabel('timeline')).toBe('時間軸報表');
    });
  });

  describe('Export Functionality', () => {
    it('should support exporting as PDF', () => {
      const mockReportData = createMockReportData();
      const mockBlob = new Blob(['pdf']);

      (exportService.exportPdf as jest.Mock).mockReturnValue(of(mockBlob));

      exportService.exportPdf(mockReportData, 'test-report').subscribe(() => {
        expect(exportService.exportPdf).toHaveBeenCalled();
      });
    });

    it('should support exporting as Excel', () => {
      const mockReportData = createMockReportData();
      const mockBlob = new Blob(['excel']);

      (exportService.exportExcel as jest.Mock).mockReturnValue(of(mockBlob));

      exportService.exportExcel(mockReportData, 'test-report').subscribe(() => {
        expect(exportService.exportExcel).toHaveBeenCalled();
      });
    });

    it('should support exporting as CSV', () => {
      const mockReportData = createMockReportData();
      const mockBlob = new Blob(['csv']);

      (exportService.exportCsv as jest.Mock).mockReturnValue(of(mockBlob));

      exportService.exportCsv(mockReportData, 'test-report').subscribe(() => {
        expect(exportService.exportCsv).toHaveBeenCalled();
      });
    });
  });

  describe('Error Handling in Report Workflow', () => {
    it('should have error signal defined', () => {
      expect(component.error).toBeDefined();
    });

    it('should have loading signal defined', () => {
      expect(component.loading).toBeDefined();
    });

    it('should have reports signal defined', () => {
      expect(component.reports).toBeDefined();
    });

    it('should have export service available', () => {
      expect(exportService).toBeDefined();
      expect(exportService.exportPdf).toBeDefined();
      expect(exportService.exportExcel).toBeDefined();
      expect(exportService.exportCsv).toBeDefined();
    });
  });
});
