import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../../../core/api';
import { Notification } from '../../../../core/models';

interface Recipient {
  id: string;
  name: string;
  email: string;
  status: 'delivered' | 'pending' | 'failed';
}

@Component({
  selector: 'cms-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.scss'],
})
export class NotificationDetailComponent implements OnInit {
  notification = signal<Notification | null>(null);
  recipients = signal<Recipient[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  notFound = signal(false);
  resending = signal(false);

  displayedColumns: string[] = ['name', 'email', 'status'];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadNotification();
  }

  private loadNotification(): void {
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

      // Load notification detail
      this.apiService.getNotificationById?.(id).subscribe({
        next: (notification) => {
          if (!notification) {
            this.notFound.set(true);
            this.loading.set(false);
            return;
          }

          this.notification.set(notification);

          // Load recipients
          this.loadRecipients(id);
        },
        error: (error) => {
          this.error.set('Failed to load notification details');
          this.loading.set(false);
          console.error('Failed to load notification:', error);
        },
      });
    });
  }

  private loadRecipients(notificationId: string): void {
    this.apiService.getNotificationRecipients?.(notificationId).subscribe({
      next: (recipients) => {
        this.recipients.set(recipients || []);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set('Failed to load recipient list');
        this.loading.set(false);
        console.error('Failed to load recipients:', error);
      },
    });
  }

  onResend(): void {
    const notificationId = this.notification()?.id;
    if (!notificationId) {
      return;
    }

    this.resending.set(true);
    this.error.set(null);

    this.apiService.resendNotification?.(notificationId).subscribe({
      next: (response) => {
        this.resending.set(false);
        this.snackBar.open('Notification resent successfully', 'Close', { duration: 3000 });
        // Reload notification to update status
        this.loadNotification();
      },
      error: (error) => {
        this.resending.set(false);
        this.error.set('Failed to resend notification');
        this.snackBar.open('Failed to resend notification', 'Close', { duration: 3000 });
        console.error('Failed to resend notification:', error);
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/notifications/history']);
  }

  canResend(): boolean {
    const status = this.notification()?.status;
    return status === 'pending' || status === 'failed';
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'delivered':
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
      case 'delivered':
        return '已送達';
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

  getNotificationStatusLabel(status?: string): string {
    switch (status) {
      case 'draft':
        return '草稿';
      case 'scheduled':
        return '已排程';
      case 'sent':
        return '已送出';
      case 'pending':
        return '待送出';
      case 'failed':
        return '送出失敗';
      default:
        return status || '未知';
    }
  }

  getDeliveryStats(): {
    total: number;
    delivered: number;
    pending: number;
    failed: number;
  } {
    const recipients = this.recipients();
    return {
      total: recipients.length,
      delivered: recipients.filter((r) => r.status === 'delivered').length,
      pending: recipients.filter((r) => r.status === 'pending').length,
      failed: recipients.filter((r) => r.status === 'failed').length,
    };
  }
}
