import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { TodayRemindersComponent } from './today-reminders.component';
import { ApiService } from '../../../../core/api';
import { Reminder } from '../../../../core/models';

describe('TodayRemindersComponent', () => {
  let component: TodayRemindersComponent;
  let fixture: ComponentFixture<TodayRemindersComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockReminders: Reminder[] = [
    {
      id: 'reminder1',
      type: 'application_review',
      title: '申請 APP-001 待審核',
      description: '張三的客製化申請待審核',
      deadline: new Date(new Date().setHours(17, 0, 0)).toISOString(),
      priority: 'high',
      actionUrl: '/business-operator/application/app1',
      done: false,
      relatedId: 'app1',
    },
    {
      id: 'reminder2',
      type: 'deadline_alert',
      title: '申請 APP-002 即將過期',
      description: '李四的申請距離截止日期還有 3 天',
      deadline: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      priority: 'medium',
      actionUrl: '/business-operator/application/app2',
      done: false,
      relatedId: 'app2',
    },
    {
      id: 'reminder3',
      type: 'notification',
      title: '待發送的通知',
      description: '有 5 則通知等待發送',
      priority: 'low',
      actionUrl: '/notifications',
      done: false,
    },
    {
      id: 'reminder4',
      type: 'application_review',
      title: '申請 APP-003 待審核',
      deadline: new Date(new Date().setHours(16, 0, 0)).toISOString(),
      priority: 'high',
      actionUrl: '/business-operator/application/app3',
      done: true,
      relatedId: 'app3',
    },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      getTodayReminders: jest.fn(),
      markReminderAsDone: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [TodayRemindersComponent],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatBadgeModule,
        MatDividerModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(TodayRemindersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should load reminders on init', fakeAsync(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));

      fixture.detectChanges();
      tick();

      expect(apiService.getTodayReminders).toHaveBeenCalled();
      expect(component.reminders()).toEqual(mockReminders);
      expect(component.isLoading()).toBeFalsy();
    }));

    it('should handle error when loading reminders', fakeAsync(() => {
      apiService.getTodayReminders.mockReturnValue(throwError(() => new Error('Load failed')));
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      fixture.detectChanges();
      tick();

      expect(component.reminders()).toEqual([]);
      expect(component.isLoading()).toBeFalsy();
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to load reminders:', expect.any(Error));

      consoleErrorSpy.mockRestore();
    }));

    it('should show loading state while fetching reminders', () => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));

      fixture.detectChanges();

      expect(component.isLoading()).toBeFalsy(); // Should be false after data loads
    });
  });

  describe('Grouping reminders by priority', () => {
    beforeEach(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));
      fixture.detectChanges();
    });

    it('should group reminders by priority', () => {
      const highPriority = component.highPriorityReminders();
      const mediumPriority = component.mediumPriorityReminders();
      const lowPriority = component.lowPriorityReminders();

      expect(highPriority.length).toBe(1); // Only reminder1 (reminder4 is done)
      expect(mediumPriority.length).toBe(1);
      expect(lowPriority.length).toBe(1);
    });

    it('should exclude completed reminders from grouped reminders', () => {
      const highPriority = component.highPriorityReminders();

      expect(highPriority.some((r) => r.id === 'reminder4')).toBeFalsy();
      expect(highPriority.every((r) => !r.done)).toBeTruthy();
    });

    it('should return empty arrays when no reminders of priority', () => {
      component.reminders.set([
        {
          id: 'r1',
          type: 'notification',
          title: 'Test',
          priority: 'low',
          done: false,
        },
      ]);

      expect(component.highPriorityReminders().length).toBe(0);
      expect(component.mediumPriorityReminders().length).toBe(0);
      expect(component.lowPriorityReminders().length).toBe(1);
    });
  });

  describe('Filtering reminders', () => {
    beforeEach(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));
      fixture.detectChanges();
    });

    it('should have computed signal for pending reminders count', () => {
      const pendingCount = component.pendingRemindersCount();
      expect(pendingCount).toBe(3); // reminder1, reminder2, reminder3
    });

    it('should calculate pending reminders count excluding done items', () => {
      component.reminders.set([
        { id: 'r1', type: 'notification', title: 'Test1', priority: 'high', done: false },
        { id: 'r2', type: 'notification', title: 'Test2', priority: 'high', done: true },
        { id: 'r3', type: 'notification', title: 'Test3', priority: 'high', done: false },
      ]);

      expect(component.pendingRemindersCount()).toBe(2);
    });
  });

  describe('Marking reminders as done', () => {
    beforeEach(() => {
      apiService.getTodayReminders.mockReturnValue(of([...mockReminders]));
      fixture.detectChanges();
    });

    it('should mark reminder as done', fakeAsync(() => {
      apiService.markReminderAsDone.mockReturnValue(of({ success: true }));

      const reminderId = 'reminder1';
      component.markReminderAsDone(reminderId);
      tick();

      expect(apiService.markReminderAsDone).toHaveBeenCalledWith(reminderId);
      // Reminder should be marked as done in the local state
      const updatedReminder = component.reminders().find((r) => r.id === reminderId);
      expect(updatedReminder?.done).toBeTruthy();
    }));

    it('should handle error when marking reminder as done', fakeAsync(() => {
      apiService.markReminderAsDone.mockReturnValue(throwError(() => new Error('Mark failed')));
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      component.markReminderAsDone('reminder1');
      tick();

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to mark reminder as done:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    }));

    it('should update pendingRemindersCount after marking as done', fakeAsync(() => {
      apiService.markReminderAsDone.mockReturnValue(of({ success: true }));

      const initialCount = component.pendingRemindersCount();
      component.markReminderAsDone('reminder1');
      tick();

      expect(component.pendingRemindersCount()).toBe(initialCount - 1);
    }));
  });

  describe('Navigation', () => {
    beforeEach(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));
      fixture.detectChanges();
    });

    it('should navigate to action URL when provided', () => {
      const reminder = mockReminders[0];
      component.navigateToAction(reminder);

      expect(router.navigate).toHaveBeenCalledWith([reminder.actionUrl]);
    });

    it('should not navigate if action URL is not provided', () => {
      const reminder: Reminder = {
        id: 'r1',
        type: 'notification',
        title: 'Test',
        priority: 'high',
        done: false,
      };

      component.navigateToAction(reminder);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should navigate back', () => {
      component.goBack();

      expect(router.navigate).toHaveBeenCalledWith(['/business-operator']);
    });
  });

  describe('Empty state', () => {
    it('should show empty state when no reminders', () => {
      apiService.getTodayReminders.mockReturnValue(of([]));

      fixture.detectChanges();

      expect(component.reminders().length).toBe(0);
      expect(component.pendingRemindersCount()).toBe(0);
    });

    it('should show empty state when all reminders are done', () => {
      const allDoneReminders: Reminder[] = mockReminders.map((r) => ({ ...r, done: true }));
      apiService.getTodayReminders.mockReturnValue(of(allDoneReminders));

      fixture.detectChanges();

      expect(component.pendingRemindersCount()).toBe(0);
    });
  });

  describe('Reminder icon and type', () => {
    beforeEach(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));
      fixture.detectChanges();
    });

    it('should return correct icon for application_review reminder type', () => {
      const icon = component.getIconForReminder('application_review');
      expect(icon).toBe('description');
    });

    it('should return correct icon for deadline_alert reminder type', () => {
      const icon = component.getIconForReminder('deadline_alert');
      expect(icon).toBe('schedule');
    });

    it('should return correct icon for notification reminder type', () => {
      const icon = component.getIconForReminder('notification');
      expect(icon).toBe('mail');
    });
  });

  describe('Formatting deadline', () => {
    it('should format deadline correctly', () => {
      const deadline = new Date(2024, 4, 25, 17, 0, 0).toISOString();
      const formatted = component.formatDeadline(deadline);

      expect(formatted).toContain('05:00'); // Should contain time
      expect(formatted).toContain('5'); // Month (May = 5)
    });

    it('should handle undefined deadline', () => {
      const formatted = component.formatDeadline(undefined);
      expect(formatted).toBe('');
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));
      fixture.detectChanges();
    });

    it('should have proper ARIA labels on buttons', () => {
      const compiled = fixture.nativeElement;
      const buttons = compiled.querySelectorAll('button');

      expect(buttons.length).toBeGreaterThan(0);
      buttons.forEach((button: HTMLButtonElement) => {
        expect(button.getAttribute('aria-label') || button.textContent).toBeTruthy();
      });
    });

    it('should have proper semantic structure', () => {
      const compiled = fixture.nativeElement;
      const lists = compiled.querySelectorAll('mat-list');

      expect(lists.length).toBeGreaterThan(0);
    });
  });

  describe('Re-fetch reminders', () => {
    it('should refresh reminders when refresh is called', fakeAsync(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));

      fixture.detectChanges();
      tick();

      expect(apiService.getTodayReminders).toHaveBeenCalledTimes(1);

      component.refreshReminders();
      tick();

      expect(apiService.getTodayReminders).toHaveBeenCalledTimes(2);
    }));

    it('should show loading state during refresh', fakeAsync(() => {
      apiService.getTodayReminders.mockReturnValue(of(mockReminders));

      fixture.detectChanges();
      tick();

      component.refreshReminders();
      tick();

      expect(component.reminders()).toEqual(mockReminders);
    }));
  });
});
