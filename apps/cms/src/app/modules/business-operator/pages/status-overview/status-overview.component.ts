import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  signal,
  computed,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../../../core/api';
import { DashboardStatsWithTrend } from '../../../../core/models';

@Component({
  selector: 'cms-status-overview',
  templateUrl: './status-overview.component.html',
  styleUrls: ['./status-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusOverviewComponent implements OnInit, OnDestroy {
  stats: WritableSignal<DashboardStatsWithTrend> = signal({
    totalSubmitted: 0,
    underReview: 0,
    approved: 0,
    needsRework: 0,
    needsConfirmation: 0,
    totalAddOn: 0,
    totalRefund: 0,
  });

  isLoading: WritableSignal<boolean> = signal(true);

  // Configuration
  enableAutoRefresh = true;
  autoRefreshInterval = 30000; // 30 seconds

  private destroy$ = new Subject<void>();

  // Computed signals
  hasAlerts: Signal<boolean> = computed(() => {
    const s = this.stats();
    return (s.needsRework ?? 0) > 0 || (s.needsConfirmation ?? 0) > 0;
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadStats();
    if (this.enableAutoRefresh) {
      this.setupAutoRefresh();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load dashboard statistics from API
   */
  private loadStats() {
    this.isLoading.set(true);
    this.apiService.getDashboardStats().subscribe({
      next: (stats) => {
        this.stats.set(stats);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load dashboard stats:', err);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Refresh statistics
   */
  refreshStats() {
    this.loadStats();
  }

  /**
   * Setup auto-refresh interval
   */
  private setupAutoRefresh() {
    interval(this.autoRefreshInterval)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.refreshStats();
      });
  }

  /**
   * Calculate pending percentage
   */
  getPendingPercentage(): number {
    const s = this.stats();
    const total = s.totalSubmitted + s.underReview + s.approved + s.needsRework + s.needsConfirmation;
    if (total === 0) return 0;
    return Math.round((s.totalSubmitted / total) * 100);
  }

  /**
   * Calculate under review progress (as percentage of pending)
   */
  getReviewProgress(): number {
    const s = this.stats();
    if (s.totalSubmitted === 0) return 0;
    return Math.round((s.underReview / s.totalSubmitted) * 100);
  }

  /**
   * Calculate approved percentage change from yesterday
   */
  getApprovedPercentageChange(): number {
    const s = this.stats();
    if (!s.yesterdayApproved || s.yesterdayApproved === 0) return 0;
    return Math.round(((s.approved - s.yesterdayApproved) / s.yesterdayApproved) * 100);
  }

  /**
   * Calculate total from trend data
   */
  calculateTrendTotal(): number {
    if (!this.stats().trendData || this.stats().trendData!.length === 0) return 0;
    return this.stats()
      .trendData!.reduce(
        (sum, trend) => sum + trend.submitted + trend.underReview + trend.approved,
        0
      );
  }

  /**
   * Get max value from trend data for scaling charts
   */
  getMaxTrendValue(): number {
    if (!this.stats().trendData || this.stats().trendData!.length === 0) return 1;
    return Math.max(
      ...this.stats().trendData!.map((trend) => Math.max(trend.submitted, trend.underReview, trend.approved))
    );
  }

  /**
   * Navigate to rework page
   */
  navigateToRework() {
    this.router.navigate(['/business-operator/rework']);
  }

  /**
   * Navigate to confirmation page
   */
  navigateToConfirmation() {
    this.router.navigate(['/business-operator/confirmation']);
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
}
