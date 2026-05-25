import { Component, OnInit, Signal, WritableSignal, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { Application } from '../../../../core/models';

@Component({
  selector: 'cms-application-quick-detail',
  templateUrl: './application-quick-detail.component.html',
  styleUrls: ['./application-quick-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationQuickDetailComponent implements OnInit {
  application: WritableSignal<Application | undefined> = signal(undefined);
  isLoading: WritableSignal<boolean> = signal(true);

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.loadApplication(params['id']);
      }
    });
  }

  /**
   * Load application details from API
   */
  private loadApplication(applicationId: string) {
    this.isLoading.set(true);
    this.apiService.getApplication(applicationId).subscribe({
      next: (app) => {
        this.application.set(app);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load application:', err);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Get status badge color
   */
  getStatusColor(status: string): string {
    switch (status) {
      case 'draft':
      case 'submitted':
        return 'primary';
      case 'under-review':
        return 'accent';
      case 'approved':
      case 'confirmed':
        return 'primary';
      case 'rework':
        return 'warn';
      default:
        return 'primary';
    }
  }

  /**
   * Get status display text
   */
  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      draft: '草稿',
      submitted: '已提交',
      'under-review': '審核中',
      approved: '已核准',
      rework: '需要修正',
      confirmed: '已確認',
    };
    return statusMap[status] || status;
  }

  /**
   * Navigate to full application detail
   */
  navigateToFullDetail() {
    const appId = this.application()?.id;
    if (appId) {
      this.router.navigate(['/application-review', appId]);
    }
  }

  /**
   * Navigate back
   */
  goBack() {
    this.router.navigate(['/business-operator']);
  }

  /**
   * Format currency
   */
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
    }).format(value);
  }

  /**
   * Format date
   */
  formatDate(dateString: string | undefined): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  /**
   * Track by function for ngFor optimization
   */
  trackByItemId(index: number, item: any): string {
    return item.id;
  }
}
