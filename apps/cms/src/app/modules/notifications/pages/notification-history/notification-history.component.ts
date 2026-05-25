import { Component, OnInit, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { Notification } from '../../../../core/models';

@Component({
  selector: 'cms-notification-history',
  templateUrl: './notification-history.component.html',
  styleUrls: ['./notification-history.component.scss'],
})
export class NotificationHistoryComponent implements OnInit {
  // Signals
  notifications = signal<Notification[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  currentPage = signal(1);
  totalNotifications = signal(0);
  sortBy = signal<string>('sentAt');
  sortDirection = signal<'asc' | 'desc'>('desc');

  // Constants
  pageSize = 10;
  displayedColumns = ['sender', 'title', 'recipientScope', 'recipientCount', 'sentAt', 'status'];

  // Form
  filterForm!: FormGroup;

  // Computed
  totalPages = computed(() => Math.ceil(this.totalNotifications() / this.pageSize));

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.loading.set(true);
    this.error.set(null);

    const filters = this.buildFilters();
    const sort = {
      sortBy: this.sortBy(),
      sortDirection: this.sortDirection(),
    };

    this.apiService.getNotifications(filters, sort, this.currentPage()).subscribe({
      next: (response) => {
        this.notifications.set(response.data);
        this.totalNotifications.set(response.total);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set('Failed to load notifications');
        this.loading.set(false);
        console.error('Failed to load notifications:', error);
      },
    });
  }

  private initializeForm(): void {
    this.filterForm = this.formBuilder.group({
      dateFrom: [null],
      dateTo: [null],
      status: [''],
      sender: [''],
    });
  }

  private buildFilters(): any {
    const filters: any = {};

    const dateFrom = this.filterForm.get('dateFrom')?.value;
    if (dateFrom) {
      filters.dateFrom = dateFrom;
    }

    const dateTo = this.filterForm.get('dateTo')?.value;
    if (dateTo) {
      filters.dateTo = dateTo;
    }

    const status = this.filterForm.get('status')?.value;
    if (status) {
      filters.status = status;
    }

    const sender = this.filterForm.get('sender')?.value;
    if (sender) {
      filters.sender = sender;
    }

    return filters;
  }

  applyFilters(): void {
    this.currentPage.set(1);
    this.loadNotifications();
  }

  clearFilters(): void {
    this.filterForm.reset({
      dateFrom: null,
      dateTo: null,
      status: '',
      sender: '',
    });
    this.currentPage.set(1);
    this.loadNotifications();
  }

  onSort(column: string): void {
    if (this.sortBy() === column) {
      // Toggle direction if clicking same column
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      // Change column and reset to descending
      this.sortBy.set(column);
      this.sortDirection.set('desc');
    }
    this.currentPage.set(1);
    this.loadNotifications();
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.loadNotifications();
  }

  onRowClick(notification: Notification): void {
    this.router.navigate(['/notifications', notification.id]);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'sent':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'sent':
        return '已送出';
      case 'pending':
        return '待送出';
      case 'failed':
        return '送出失敗';
      default:
        return status;
    }
  }

  getScopeName(scope?: string): string {
    switch (scope) {
      case 'global':
        return '全局';
      case 'specific-units':
        return '特定單位';
      case 'specific-buyers':
        return '特定買家';
      default:
        return scope || '未知';
    }
  }

  get canGoPrevious(): boolean {
    return this.currentPage() > 1;
  }

  get canGoNext(): boolean {
    return this.currentPage() < this.totalPages();
  }

  goPrevious(): void {
    if (this.canGoPrevious) {
      this.onPageChange(this.currentPage() - 1);
    }
  }

  goNext(): void {
    if (this.canGoNext) {
      this.onPageChange(this.currentPage() + 1);
    }
  }
}
