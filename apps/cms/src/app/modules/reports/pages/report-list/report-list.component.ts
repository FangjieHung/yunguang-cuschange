import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../core/api/api.service';
import { Report } from '../../../../core/models';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'cms-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  // Signals
  reports = signal<Report[]>([]);
  loading = signal<boolean>(false);
  error = signal<string>('');

  // Form
  filterForm: FormGroup;

  // Table
  displayedColumns: string[] = ['id', 'reportType', 'generatedAt', 'dateRange', 'generatedBy', 'status', 'actions'];

  // Sort
  sortColumn: string = 'generatedAt';
  sortDirection: 'asc' | 'desc' = 'desc';

  // Pagination
  pageIndex: number = 0;
  pageSize: number = 15;
  total: number = 0;

  reportTypes: string[] = ['applications', 'buyers', 'financials', 'timeline'];
  statuses: string[] = ['completed', 'processing', 'failed'];

  // Math for template
  Math = Math;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      reportType: [[]],
      dateFrom: [null],
      dateTo: [null],
      generatedBy: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.loading.set(true);
    this.error.set('');

    const filters = this.buildFilters();
    const sort = { sortBy: this.sortColumn, sortDirection: this.sortDirection };

    this.apiService.getReports(filters, sort, this.pageIndex).subscribe({
      next: (response) => {
        this.reports.set(response.data);
        this.total = response.total;
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load reports');
        this.loading.set(false);
        console.error('Error loading reports:', err);
      },
    });
  }

  private buildFilters(): any {
    const filters: any = {};

    const reportTypeValue = this.filterForm.get('reportType')?.value;
    if (reportTypeValue && reportTypeValue.length > 0) {
      filters.reportType = reportTypeValue;
    }

    const dateFromValue = this.filterForm.get('dateFrom')?.value;
    if (dateFromValue) {
      filters.dateFrom = dateFromValue;
    }

    const dateToValue = this.filterForm.get('dateTo')?.value;
    if (dateToValue) {
      filters.dateTo = dateToValue;
    }

    const generatedByValue = this.filterForm.get('generatedBy')?.value;
    if (generatedByValue) {
      filters.generatedBy = generatedByValue;
    }

    const statusValue = this.filterForm.get('status')?.value;
    if (statusValue) {
      filters.status = statusValue;
    }

    return filters;
  }

  applyFilters(): void {
    this.pageIndex = 0;
    this.loadReports();
  }

  clearFilters(): void {
    this.filterForm.reset({
      reportType: [],
      dateFrom: null,
      dateTo: null,
      generatedBy: '',
      status: '',
    });
    this.sortColumn = 'generatedAt';
    this.sortDirection = 'desc';
    this.pageIndex = 0;
    this.loadReports();
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.pageIndex = 0;
    this.loadReports();
  }

  onPageChange(page: number): void {
    this.pageIndex = page;
    this.loadReports();
  }

  onViewReport(report: Report): void {
    this.router.navigate(['/reports', 'builder', report.id]);
  }

  onDownloadReport(report: Report): void {
    this.apiService.downloadReport(report.id, 'pdf').subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${report.title}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => {
        this.error.set('Failed to download report');
        console.error('Error downloading report:', err);
      },
    });
  }

  onDeleteReport(report: Report): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Report',
        message: `Are you sure you want to delete the report "${report.title}"? This action cannot be undone.`,
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.confirmDelete(report.id);
      }
    });
  }

  confirmDelete(reportId: string): void {
    this.apiService.deleteReport(reportId).subscribe({
      next: () => {
        this.loadReports();
      },
      error: (err) => {
        this.error.set('Failed to delete report');
        console.error('Error deleting report:', err);
      },
    });
  }

  // Helper methods
  formatDate(date: Date): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

  formatDateTime(date: Date): string {
    if (!date) return '';
    return new Date(date).toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  getReportTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      applications: '申請報表',
      buyers: '買家報表',
      financials: '財務報表',
      timeline: '時間軸報表',
    };
    return labels[type] || type;
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      completed: '已完成',
      processing: '處理中',
      failed: '失敗',
    };
    return labels[status] || status;
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      completed: 'primary',
      processing: 'accent',
      failed: 'warn',
    };
    return colors[status] || 'primary';
  }

  get isLastPage(): boolean {
    return (this.pageIndex + 1) * this.pageSize >= this.total;
  }
}
