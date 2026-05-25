import { TestBed } from '@angular/core/testing';
import { ReportExportService } from './report-export.service';
import { ReportData } from '../../../core/models';

describe('ReportExportService', () => {
  let service: ReportExportService;

  const mockReportData: ReportData = {
    id: 'report-123',
    title: 'Test Report',
    generatedAt: new Date('2024-05-25'),
    reportType: 'applications',
    dateRange: { from: new Date('2024-05-01'), to: new Date('2024-05-25') },
    groupBy: 'monthly',
    data: [
      { id: '1', name: 'Item 1', status: 'approved', amount: 1000 },
      { id: '2', name: 'Item 2', status: 'pending', amount: 2000 },
      { id: '3', name: 'Item 3', status: 'rejected', amount: 1500 },
    ],
    summary: { total: 4500, approved: 1000 },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportExportService],
    });
    service = TestBed.inject(ReportExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('exportPdf', () => {
    it('should generate a valid PDF blob', (done) => {
      service.exportPdf(mockReportData, 'test-report').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toContain('application/pdf');
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle PDF export with custom filename', (done) => {
      const customFileName = 'my-custom-report';
      service.exportPdf(mockReportData, customFileName).subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toContain('application/pdf');
        done();
      });
    });

    it('should include report title in PDF', (done) => {
      service.exportPdf(mockReportData, 'test-report').subscribe((blob) => {
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle large report data in PDF', (done) => {
      const largeReportData: ReportData = {
        ...mockReportData,
        data: Array.from({ length: 100 }, (_, i) => ({
          id: `item-${i}`,
          name: `Item ${i}`,
          status: i % 2 === 0 ? 'approved' : 'pending',
          amount: Math.random() * 5000,
        })),
      };
      service.exportPdf(largeReportData, 'large-report').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle error in PDF export gracefully', (done) => {
      const invalidData: any = null;
      service.exportPdf(invalidData, 'error-report').subscribe(
        () => {
          fail('should have thrown error');
        },
        (error) => {
          expect(error).toBeTruthy();
          done();
        }
      );
    });
  });

  describe('exportExcel', () => {
    it('should generate a valid Excel blob', (done) => {
      service.exportExcel(mockReportData, 'test-report').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toContain('application/vnd.openxmlformats-officedocument.spreadsheetml');
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle Excel export with custom filename', (done) => {
      const customFileName = 'my-excel-report';
      service.exportExcel(mockReportData, customFileName).subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toContain('spreadsheet');
        done();
      });
    });

    it('should include report data in Excel', (done) => {
      service.exportExcel(mockReportData, 'test-report').subscribe((blob) => {
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle large report data in Excel', (done) => {
      const largeReportData: ReportData = {
        ...mockReportData,
        data: Array.from({ length: 1000 }, (_, i) => ({
          id: `item-${i}`,
          name: `Item ${i}`,
          status: i % 2 === 0 ? 'approved' : 'pending',
          amount: Math.random() * 5000,
        })),
      };
      service.exportExcel(largeReportData, 'large-report').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle error in Excel export gracefully', (done) => {
      const invalidData: any = null;
      service.exportExcel(invalidData, 'error-report').subscribe(
        () => {
          fail('should have thrown error');
        },
        (error) => {
          expect(error).toBeTruthy();
          done();
        }
      );
    });
  });

  describe('exportCsv', () => {
    it('should generate a valid CSV blob', (done) => {
      service.exportCsv(mockReportData, 'test-report').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toContain('text/csv');
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle CSV export with custom filename', (done) => {
      const customFileName = 'my-csv-report';
      service.exportCsv(mockReportData, customFileName).subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toContain('text/csv');
        done();
      });
    });

    it('should include report data columns in CSV', (done) => {
      service.exportCsv(mockReportData, 'test-report').subscribe((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          const csv = reader.result as string;
          expect(csv).toContain('id');
          expect(csv).toContain('name');
          expect(csv).toContain('status');
          expect(csv).toContain('amount');
          done();
        };
        reader.readAsText(blob);
      });
    });

    it('should handle large report data in CSV', (done) => {
      const largeReportData: ReportData = {
        ...mockReportData,
        data: Array.from({ length: 5000 }, (_, i) => ({
          id: `item-${i}`,
          name: `Item ${i}`,
          status: i % 2 === 0 ? 'approved' : 'pending',
          amount: Math.random() * 5000,
        })),
      };
      service.exportCsv(largeReportData, 'large-report').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.size).toBeGreaterThan(0);
        done();
      });
    });

    it('should handle error in CSV export gracefully', (done) => {
      const invalidData: any = null;
      service.exportCsv(invalidData, 'error-report').subscribe(
        () => {
          fail('should have thrown error');
        },
        (error) => {
          expect(error).toBeTruthy();
          done();
        }
      );
    });

    it('should handle special characters in CSV data', (done) => {
      const specialCharData: ReportData = {
        ...mockReportData,
        data: [
          { id: '1', name: 'Item with "quotes"', status: 'approved', amount: 1000 },
          { id: '2', name: 'Item, with, commas', status: 'pending', amount: 2000 },
          { id: '3', name: 'Item\nwith\nnewlines', status: 'rejected', amount: 1500 },
        ],
      };
      service.exportCsv(specialCharData, 'special-chars-report').subscribe((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          const csv = reader.result as string;
          expect(csv.length).toBeGreaterThan(0);
          done();
        };
        reader.readAsText(blob);
      });
    });
  });

  describe('filename handling', () => {
    it('should create files with correct filenames in PDF', (done) => {
      const filename = 'sales-report-2024-05';
      service.exportPdf(mockReportData, filename).subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });

    it('should create files with correct filenames in Excel', (done) => {
      const filename = 'financial-report-q2';
      service.exportExcel(mockReportData, filename).subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });

    it('should create files with correct filenames in CSV', (done) => {
      const filename = 'buyer-report-2024';
      service.exportCsv(mockReportData, filename).subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });
  });

  describe('error handling', () => {
    it('should handle missing report title in PDF', (done) => {
      const dataWithoutTitle: ReportData = { ...mockReportData, title: '' };
      service.exportPdf(dataWithoutTitle, 'no-title').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });

    it('should handle empty data array in Excel', (done) => {
      const emptyData: ReportData = { ...mockReportData, data: [] };
      service.exportExcel(emptyData, 'empty').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });

    it('should handle empty data array in CSV', (done) => {
      const emptyData: ReportData = { ...mockReportData, data: [] };
      service.exportCsv(emptyData, 'empty').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });

    it('should handle undefined summary in PDF', (done) => {
      const dataWithoutSummary: ReportData = { ...mockReportData, summary: undefined };
      service.exportPdf(dataWithoutSummary, 'no-summary').subscribe((blob) => {
        expect(blob).toBeInstanceOf(Blob);
        done();
      });
    });
  });
});
