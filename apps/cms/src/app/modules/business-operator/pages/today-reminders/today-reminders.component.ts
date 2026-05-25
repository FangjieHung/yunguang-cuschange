import { Component, OnInit, Signal, WritableSignal, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { Reminder } from '../../../../core/models';

@Component({
  selector: 'cms-today-reminders',
  templateUrl: './today-reminders.component.html',
  styleUrls: ['./today-reminders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayRemindersComponent implements OnInit {
  reminders: WritableSignal<Reminder[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(true);

  // Computed signals for grouped reminders
  highPriorityReminders: Signal<Reminder[]> = computed(() =>
    this.reminders().filter((r) => r.priority === 'high' && !r.done)
  );

  mediumPriorityReminders: Signal<Reminder[]> = computed(() =>
    this.reminders().filter((r) => r.priority === 'medium' && !r.done)
  );

  lowPriorityReminders: Signal<Reminder[]> = computed(() =>
    this.reminders().filter((r) => r.priority === 'low' && !r.done)
  );

  pendingRemindersCount: Signal<number> = computed(() =>
    this.reminders().filter((r) => !r.done).length
  );

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadReminders();
  }

  /**
   * Load reminders from API
   */
  private loadReminders() {
    this.isLoading.set(true);
    this.apiService.getTodayReminders().subscribe({
      next: (reminders) => {
        this.reminders.set(reminders);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load reminders:', err);
        this.reminders.set([]);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Refresh reminders
   */
  refreshReminders() {
    this.loadReminders();
  }

  /**
   * Mark reminder as done
   */
  markReminderAsDone(reminderId: string) {
    this.apiService.markReminderAsDone(reminderId).subscribe({
      next: () => {
        const reminders = this.reminders();
        const updatedReminders = reminders.map((r) =>
          r.id === reminderId ? { ...r, done: true } : r
        );
        this.reminders.set(updatedReminders);
      },
      error: (err) => {
        console.error('Failed to mark reminder as done:', err);
      },
    });
  }

  /**
   * Get icon for reminder type
   */
  getIconForReminder(type: string): string {
    switch (type) {
      case 'application_review':
        return 'description';
      case 'deadline_alert':
        return 'schedule';
      case 'notification':
        return 'mail';
      default:
        return 'notifications';
    }
  }

  /**
   * Format deadline for display
   */
  formatDeadline(deadline: string | undefined): string {
    if (!deadline) return '';
    const date = new Date(deadline);
    const locale = 'zh-TW';
    return date.toLocaleString(locale, {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  /**
   * Navigate to action URL
   */
  navigateToAction(reminder: Reminder) {
    if (reminder.actionUrl) {
      this.router.navigate([reminder.actionUrl]);
    }
  }

  /**
   * Navigate back
   */
  goBack() {
    this.router.navigate(['/business-operator']);
  }

  /**
   * Track by function for ngFor optimization
   */
  trackByReminderId(index: number, reminder: Reminder): string {
    return reminder.id;
  }
}
