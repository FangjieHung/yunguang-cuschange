import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../../../core/api';
import { Report, ReportData } from '../../../../core/models';
import { ReportExportService } from '../../services/report-export.service';

@Component({
  selector: 'cms-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
})
export class ReportDetailComponent implements OnInit {
  report = signal<Report | null>(null);
  reportData = signal<ReportData | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);
  notFound = signal(false);
  downloading = signal(false);

  displayedColumns: string[] = [];

  constructor(
    private apiService: ApiService,
    private exportService: ReportExportService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  private loadReport(): void {
    this.loading.set(true);
    this.error.set(null);
    this.notFound.set(false);

    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (!id) {
        this.notFound.set(true);
        this.loading.set(false);
        return;
      }

      this.apiService.getReportById?.(id).subscribe({
        next: (report) => {
          if (!report) {
            this.notFound.set(true);
            this.loading.set(false);
            return;
          }

          this.report.set(report);
          this.loading.set(false);
          this.updateDisplayedColumns();
        },
        error: (error) => {
          this.error.set('Failed to load report details');
          this.loading.set(false);
          console.error('Failed to load report:', error);
        },
      });
    });
  }

  onDownloadPdf(): void {
    this.downloadReport('pdf');
  }

  onDownloadExcel(): void {
    this.downloadReport('excel');
  }

  onDownloadCsv(): void {
    this.downloadReport('csv');
  }

  private downloadReport(format: 'pdf' | 'excel' | 'csv'): void {
    const report = this.report();
    if (!report) {
      this.snackBar.open('Report not loaded', 'Close', { duration: 3000 });
      return;
    }

    this.downloading.set(true);
    this.error.set(null);

    // Generate mock report data for export
    const mockReportData: ReportData = {
      id: report.id,
      title: report.title,
      generatedAt: report.generatedAt,
      reportType: report.reportType,
      dateRange: report.dateRange,
      data: this.generateMockData(),
    };

    let exportObservable;
    const fileName = `${report.title.replace(/\s+/g, '-')}-${format}`;

    switch (format) {
      case 'pdf':
        exportObservable = this.exportService.exportPdf(mockReportData, fileName);
        break;
      case 'excel':
        exportObservable = this.exportService.exportExcel(mockReportData, fileName);
        break;
      case 'csv':
        exportObservable = this.exportService.exportCsv(mockReportData, fileName);
        break;
      default:
        return;
    }

    exportObservable.subscribe({
      next: (blob) => {
        this.downloading.set(false);
        this.exportService.downloadFile(blob, `${fileName}.${this.getFileExtension(format)}`);
        this.snackBar.open(`Report downloaded as ${format.toUpperCase()}`, 'Close', { duration: 3000 });
      },
      error: (error) => {
        this.downloading.set(false);
        this.error.set(`Failed to export report as ${format.toUpperCase()}`);
        this.snackBar.open(`Failed to download ${format.toUpperCase()}`, 'Close', { duration: 3000 });
        console.error(`Failed to export as ${format}:`, error);
      },
    });
  }

  private generateMockData(): any[] {
    // Generate sample data for demonstration
    return [
      { id: '1', name: 'Item 1', status: 'approved', count: 10 },
      { id: '2', name: 'Item 2', status: 'pending', count: 5 },
      { id: '3', name: 'Item 3', status: 'rejected', count: 2 },
      { id: '4', name: 'Item 4', status: 'approved', count: 8 },
      { id: '5', name: 'Item 5', status: 'approved', count: 12 },
    ];
  }

  private getFileExtension(format: string): string {
    switch (format) {
      case 'excel':
        return 'xlsx';
      case 'csv':
        return 'csv';
      case 'pdf':
      default:
        return 'pdf';
    }
  }

  onBack(): void {
    this.router.navigate(['/reports/history']);
  }

  getStatusLabel(status?: string): string {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'processing':
        return '處理中';
      case 'failed':
        return '失敗';
      default:
        return status || '未知';
    }
  }

  getReportTypeLabel(type?: string): string {
    switch (type) {
      case 'applications':
        return '申請報表';
      case 'buyers':
        return '買家報表';
      case 'financials':
        return '財務報表';
      case 'timeline':
        return '時間軸報表';
      default:
        return type || '未知';
    }
  }

  private updateDisplayedColumns(): void {
    // For demonstration, show some standard columns
    this.displayedColumns = ['id', 'name', 'status', 'count'];
  }

  isDownloading(): boolean {
    return this.downloading();
  }
}
