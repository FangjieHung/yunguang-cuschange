import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ReportListComponent } from './report-list.component';
import { ApiService } from '../../../../core/api/api.service';
import { Report } from '../../../../core/models';

describe('ReportListComponent', () => {
  let component: ReportListComponent;
  let fixture: ComponentFixture<ReportListComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;
  let dialog: jest.Mocked<MatDialog>;

  const mockReports: Report[] = [
    {
      id: 'report-001',
      title: 'Applications Report',
      reportType: 'applications',
      generatedAt: new Date('2026-05-20T10:00:00Z'),
      dateRange: { from: new Date('2026-01-01'), to: new Date('2026-05-20') },
      generatedBy: { id: 'user-001', name: 'John Doe', email: 'john@example.com', role: 'ROLE-01' },
      status: 'completed',
      fileSize: 1024000,
      downloadUrl: '/downloads/report-001.pdf',
    },
    {
      id: 'report-002',
      title: 'Buyers Report',
      reportType: 'buyers',
      generatedAt: new Date('2026-05-19T14:30:00Z'),
      dateRange: { from: new Date('2026-01-01'), to: new Date('2026-05-19') },
      generatedBy: { id: 'user-002', name: 'Jane Smith', email: 'jane@example.com', role: 'ROLE-02' },
      status: 'completed',
      fileSize: 2048000,
      downloadUrl: '/downloads/report-002.pdf',
    },
    {
      id: 'report-003',
      title: 'Processing Report',
      reportType: 'financials',
      generatedAt: new Date('2026-05-21T09:00:00Z'),
      dateRange: { from: new Date('2026-01-01'), to: new Date('2026-05-21') },
      generatedBy: { id: 'user-001', name: 'John Doe', email: 'john@example.com', role: 'ROLE-01' },
      status: 'processing',
    },
    {
      id: 'report-004',
      title: 'Failed Report',
      reportType: 'timeline',
      generatedAt: new Date('2026-05-18T16:45:00Z'),
      dateRange: { from: new Date('2026-01-01'), to: new Date('2026-05-18') },
      generatedBy: { id: 'user-003', name: 'Bob Johnson', email: 'bob@example.com', role: 'ROLE-03' },
      status: 'failed',
    },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      getReports: jest.fn(),
      downloadReport: jest.fn(),
      deleteReport: jest.fn(),
    };

    const routerMock = {
      navigate: jest.fn(),
    };

    const dialogMock = {
      open: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ReportListComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: MatDialog, useValue: dialogMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
    dialog = TestBed.inject(MatDialog) as jest.Mocked<MatDialog>;

    fixture = TestBed.createComponent(ReportListComponent);
    component = fixture.componentInstance;

    // Mock URL methods
    (global.URL as any).createObjectURL = jest.fn(() => 'blob:mock-url');
    (global.URL as any).revokeObjectURL = jest.fn();
  });

  // Component Initialization Tests
  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize reports signal as empty array', () => {
      expect(component.reports()).toEqual([]);
    });

    it('should initialize loading as false', () => {
      expect(component.loading()).toBe(false);
    });

    it('should initialize error as empty string', () => {
      expect(component.error()).toBe('');
    });

    it('should initialize filter form group with default values', () => {
      expect(component.filterForm).toBeTruthy();
      expect(component.filterForm.get('reportType')?.value).toEqual([]);
      expect(component.filterForm.get('dateFrom')?.value).toBeNull();
      expect(component.filterForm.get('dateTo')?.value).toBeNull();
      expect(component.filterForm.get('generatedBy')?.value).toBe('');
      expect(component.filterForm.get('status')?.value).toBe('');
    });

    it('should initialize sort state with default values', () => {
      expect(component.sortColumn).toBe('generatedAt');
      expect(component.sortDirection).toBe('desc');
    });

    it('should initialize pagination state', () => {
      expect(component.pageIndex).toBe(0);
      expect(component.pageSize).toBe(15);
    });
  });

  // Load Reports Tests
  describe('Load Reports on Init', () => {
    it('should load reports on component initialization', fakeAsync(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));

      component.ngOnInit();
      tick();

      expect(apiService.getReports).toHaveBeenCalled();
      expect(component.reports().length).toBe(mockReports.length);
      expect(component.loading()).toBe(false);
    }));

    it('should set loading to true while fetching reports', fakeAsync(() => {
      apiService.getReports.mockReturnValue(
        of({ data: mockReports, total: mockReports.length }).pipe(delay(300))
      );

      component.ngOnInit();

      expect(component.loading()).toBe(true);
      tick(300);
      expect(component.loading()).toBe(false);
    }));

    it('should handle API error during initial load', fakeAsync(() => {
      const errorMessage = 'Failed to load reports';
      apiService.getReports.mockReturnValue(throwError(() => new Error(errorMessage)));

      component.ngOnInit();
      tick();

      expect(component.error()).toBeTruthy();
      expect(component.loading()).toBe(false);
      expect(component.reports().length).toBe(0);
    }));
  });

  // Filter Tests
  describe('Filtering', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
    });

    it('should filter reports by report type', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const filterValue = ['applications'];
      component.filterForm.get('reportType')?.setValue(filterValue);
      component.applyFilters();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.objectContaining({ reportType: filterValue }),
        expect.any(Object),
        expect.any(Number)
      );
    }));

    it('should filter reports by multiple report types', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const filterValue = ['applications', 'buyers'];
      component.filterForm.get('reportType')?.setValue(filterValue);
      component.applyFilters();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.objectContaining({ reportType: filterValue }),
        expect.any(Object),
        expect.any(Number)
      );
    }));

    it('should filter reports by date range', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const dateFrom = new Date('2026-05-01');
      const dateTo = new Date('2026-05-31');
      component.filterForm.get('dateFrom')?.setValue(dateFrom);
      component.filterForm.get('dateTo')?.setValue(dateTo);
      component.applyFilters();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.objectContaining({ dateFrom, dateTo }),
        expect.any(Object),
        expect.any(Number)
      );
    }));

    it('should filter reports by generated by user', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const generatedBy = 'John Doe';
      component.filterForm.get('generatedBy')?.setValue(generatedBy);
      component.applyFilters();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.objectContaining({ generatedBy }),
        expect.any(Object),
        expect.any(Number)
      );
    }));

    it('should filter reports by status', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const status = 'completed';
      component.filterForm.get('status')?.setValue(status);
      component.applyFilters();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.objectContaining({ status }),
        expect.any(Object),
        expect.any(Number)
      );
    }));

    it('should apply multiple filters together', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.filterForm.get('reportType')?.setValue(['applications']);
      component.filterForm.get('status')?.setValue('completed');
      component.filterForm.get('generatedBy')?.setValue('John Doe');
      component.applyFilters();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.objectContaining({
          reportType: ['applications'],
          status: 'completed',
          generatedBy: 'John Doe',
        }),
        expect.any(Object),
        expect.any(Number)
      );
    }));

    it('should clear all filters', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.filterForm.get('reportType')?.setValue(['applications']);
      component.filterForm.get('status')?.setValue('completed');
      component.clearFilters();
      tick();

      expect(component.filterForm.get('reportType')?.value).toEqual([]);
      expect(component.filterForm.get('dateFrom')?.value).toBeNull();
      expect(component.filterForm.get('dateTo')?.value).toBeNull();
      expect(component.filterForm.get('generatedBy')?.value).toBe('');
      expect(component.filterForm.get('status')?.value).toBe('');
      expect(apiService.getReports).toHaveBeenCalledWith({}, expect.any(Object), expect.any(Number));
    }));

    it('should reset pagination to first page when applying filters', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.pageIndex = 2;
      component.filterForm.get('status')?.setValue('completed');
      component.applyFilters();
      tick();

      expect(component.pageIndex).toBe(0);
    }));
  });

  // Sorting Tests
  describe('Sorting', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
    });

    it('should sort by generated date in descending order by default', fakeAsync(() => {
      component.ngOnInit();
      tick();

      expect(component.sortColumn).toBe('generatedAt');
      expect(component.sortDirection).toBe('desc');
    }));

    it('should toggle sort direction when clicking same column', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.onSort('generatedAt');
      tick();

      expect(component.sortDirection).toBe('asc');

      component.onSort('generatedAt');
      tick();

      expect(component.sortDirection).toBe('desc');
    }));

    it('should change sort column and set ascending order for new column', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.onSort('reportType');
      tick();

      expect(component.sortColumn).toBe('reportType');
      expect(component.sortDirection).toBe('asc');
    }));

    it('should call API with correct sort parameters', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.sortColumn = 'status';
      component.sortDirection = 'asc';
      component.loadReports();
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.any(Object),
        { sortBy: 'status', sortDirection: 'asc' },
        expect.any(Number)
      );
    }));

    it('should reset to default sort when clearing filters', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.sortColumn = 'reportType';
      component.sortDirection = 'asc';
      component.clearFilters();
      tick();

      expect(component.sortColumn).toBe('generatedAt');
      expect(component.sortDirection).toBe('desc');
    }));
  });

  // Pagination Tests
  describe('Pagination', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: 60 }));
    });

    it('should have page size of 15 by default', () => {
      expect(component.pageSize).toBe(15);
    });

    it('should initialize with page index 0', () => {
      expect(component.pageIndex).toBe(0);
    });

    it('should call API with correct page parameters', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.pageIndex = 2;
      component.onPageChange(2);
      tick();

      expect(apiService.getReports).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
        2
      );
    }));

    it('should update reports when pagination changes', fakeAsync(() => {
      const secondPageReports = [{ ...mockReports[0], id: 'report-second-page-1' }];
      apiService.getReports
        .mockReturnValueOnce(of({ data: mockReports, total: 60 }))
        .mockReturnValueOnce(of({ data: secondPageReports, total: 60 }));

      component.ngOnInit();
      tick();

      component.onPageChange(1);
      tick();

      expect(component.reports().length).toBe(1);
    }));
  });

  // View Report Tests
  describe('View Report', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
    });

    it('should navigate to report detail when clicking view', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const reportId = 'report-001';
      component.onViewReport(mockReports[0]);

      expect(router.navigate).toHaveBeenCalledWith([
        '/reports',
        'builder',
        reportId,
      ]);
    }));

    it('should pass report data when navigating to detail', fakeAsync(() => {
      component.ngOnInit();
      tick();

      component.onViewReport(mockReports[1]);

      expect(router.navigate).toHaveBeenCalledWith(
        expect.arrayContaining([mockReports[1].id])
      );
    }));
  });

  // Download Report Tests
  describe('Download Report', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
    });

    it('should download report file', fakeAsync(() => {
      const blob = new Blob(['test data'], { type: 'application/pdf' });
      apiService.downloadReport.mockReturnValue(of(blob));

      component.ngOnInit();
      tick();

      component.onDownloadReport(mockReports[0]);
      tick();

      expect(apiService.downloadReport).toHaveBeenCalledWith(
        mockReports[0].id,
        'pdf'
      );
    }));

    it('should handle download error gracefully', fakeAsync(() => {
      apiService.downloadReport.mockReturnValue(
        throwError(() => new Error('Download failed'))
      );

      component.ngOnInit();
      tick();

      component.onDownloadReport(mockReports[0]);
      tick();

      // Should not throw error
      expect(component).toBeTruthy();
    }));

    it('should trigger browser download', fakeAsync(() => {
      const blob = new Blob(['test data'], { type: 'application/pdf' });
      apiService.downloadReport.mockReturnValue(of(blob));

      // Mock URL.createObjectURL and revokeObjectURL
      (global.URL as any).createObjectURL = jest.fn(() => 'blob:mock-url');
      (global.URL as any).revokeObjectURL = jest.fn();

      component.ngOnInit();
      tick();

      component.onDownloadReport(mockReports[0]);
      tick();

      expect((global.URL as any).createObjectURL).toHaveBeenCalledWith(expect.any(Blob));
    }));
  });

  // Delete Report Tests
  describe('Delete Report', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
    });

    it('should open confirmation dialog when deleting', fakeAsync(() => {
      const mockDialogRef = {
        afterClosed: () => of(false),
      };
      dialog.open.mockReturnValue(mockDialogRef as any);

      component.ngOnInit();
      tick();

      component.onDeleteReport(mockReports[0]);

      expect(dialog.open).toHaveBeenCalled();
    }));

    it('should delete report when confirmed', fakeAsync(() => {
      const mockDialogRef = {
        afterClosed: () => of(true),
      };
      dialog.open.mockReturnValue(mockDialogRef as any);
      apiService.deleteReport.mockReturnValue(of(void 0));

      component.ngOnInit();
      tick();

      component.onDeleteReport(mockReports[0]);
      tick();

      expect(apiService.deleteReport).toHaveBeenCalledWith(mockReports[0].id);
    }));

    it('should not delete report when cancelled', fakeAsync(() => {
      const mockDialogRef = {
        afterClosed: () => of(false),
      };
      dialog.open.mockReturnValue(mockDialogRef as any);

      component.ngOnInit();
      tick();

      component.onDeleteReport(mockReports[0]);
      tick();

      expect(apiService.deleteReport).not.toHaveBeenCalled();
    }));

    it('should reload reports after successful deletion', fakeAsync(() => {
      const mockDialogRef = {
        afterClosed: () => of(true),
      };
      dialog.open.mockReturnValue(mockDialogRef as any);
      apiService.deleteReport.mockReturnValue(of(void 0));

      component.ngOnInit();
      tick();

      const initialCallCount = apiService.getReports.mock.calls.length;

      component.onDeleteReport(mockReports[0]);
      tick();

      expect(apiService.getReports.mock.calls.length).toBeGreaterThan(initialCallCount);
    }));

    it('should handle delete error gracefully', fakeAsync(() => {
      const mockDialogRef = {
        afterClosed: () => of(true),
      };
      dialog.open.mockReturnValue(mockDialogRef as any);
      apiService.deleteReport.mockReturnValue(
        throwError(() => new Error('Delete failed'))
      );

      component.ngOnInit();
      tick();

      component.onDeleteReport(mockReports[0]);
      tick();

      expect(component.error()).toBeTruthy();
    }));
  });

  // Loading State Tests
  describe('Loading State', () => {
    it('should display loading spinner while fetching', fakeAsync(() => {
      apiService.getReports.mockReturnValue(
        of({ data: mockReports, total: mockReports.length }).pipe(delay(500))
      );

      component.loadReports();

      expect(component.loading()).toBe(true);

      tick(500);

      expect(component.loading()).toBe(false);
    }));

    it('should not display reports while loading', fakeAsync(() => {
      apiService.getReports.mockReturnValue(
        of({ data: mockReports, total: mockReports.length }).pipe(delay(500))
      );

      component.loadReports();

      expect(component.reports().length).toBe(0);

      tick(500);

      expect(component.reports().length).toBeGreaterThan(0);
    }));
  });

  // Error Handling Tests
  describe('Error Handling', () => {
    it('should display error message on API failure', fakeAsync(() => {
      const errorMessage = 'Network error';
      apiService.getReports.mockReturnValue(
        throwError(() => new Error(errorMessage))
      );

      component.ngOnInit();
      tick();

      expect(component.error()).toBeTruthy();
    }));

    it('should clear error when loading new data', fakeAsync(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));

      component.error.set('Previous error');
      component.loadReports();
      tick();

      expect(component.error()).toBe('');
    }));

    it('should display error message when filtering fails', fakeAsync(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
      component.ngOnInit();
      tick();

      apiService.getReports.mockReturnValue(throwError(() => new Error('Filter error')));
      component.applyFilters();
      tick();

      expect(component.error()).toBeTruthy();
    }));
  });

  // Empty State Tests
  describe('Empty State', () => {
    it('should display empty state when no reports found', fakeAsync(() => {
      apiService.getReports.mockReturnValue(of({ data: [], total: 0 }));

      component.ngOnInit();
      tick();

      expect(component.reports().length).toBe(0);
    }));

    it('should display empty state after filtering results in no data', fakeAsync(() => {
      apiService.getReports
        .mockReturnValueOnce(of({ data: mockReports, total: mockReports.length }))
        .mockReturnValueOnce(of({ data: [], total: 0 }));

      component.ngOnInit();
      tick();

      component.applyFilters();
      tick();

      expect(component.reports().length).toBe(0);
    }));
  });

  // Table Columns Tests
  describe('Table Columns', () => {
    beforeEach(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));
    });

    it('should display all required columns', fakeAsync(() => {
      component.ngOnInit();
      tick();

      expect(component.displayedColumns).toContain('id');
      expect(component.displayedColumns).toContain('reportType');
      expect(component.displayedColumns).toContain('generatedAt');
      expect(component.displayedColumns).toContain('dateRange');
      expect(component.displayedColumns).toContain('generatedBy');
      expect(component.displayedColumns).toContain('status');
      expect(component.displayedColumns).toContain('actions');
    }));
  });

  // Integration Tests
  describe('Integration', () => {
    it('should load data on initialization', fakeAsync(() => {
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: mockReports.length }));

      component.ngOnInit();
      tick();

      expect(component.reports().length).toBe(4);
      expect(component.loading()).toBe(false);
      expect(component.error()).toBe('');
    }));

    it('should handle complete workflow: filter, sort, paginate', fakeAsync(() => {
      const allReports = [...mockReports, ...mockReports, ...mockReports];
      apiService.getReports.mockReturnValue(of({ data: mockReports, total: allReports.length }));

      component.ngOnInit();
      tick();

      component.filterForm.get('status')?.setValue('completed');
      component.applyFilters();
      tick();

      component.onSort('reportType');
      tick();

      component.onPageChange(1);
      tick();

      expect(apiService.getReports).toHaveBeenCalledTimes(4);
    }));
  });
});
