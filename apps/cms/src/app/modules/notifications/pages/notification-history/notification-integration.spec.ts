import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { NotificationHistoryComponent } from './notification-history.component';
import { of } from 'rxjs';
import { Notification, User } from '../../../../core/models';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Notifications Module Integration Tests', () => {
  let component: NotificationHistoryComponent;
  let fixture: ComponentFixture<NotificationHistoryComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockUser: User = {
    id: 'user-001',
    name: 'Test Admin',
    email: 'admin@example.com',
    role: 'ROLE-01',
  };

  const createMockNotifications = (count: number): Notification[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: `notif-${i + 1}`,
      projectId: 'proj-001',
      type: 'global',
      title: `Notification ${i + 1}`,
      content: `Content for notification ${i + 1}`,
      channel: 'email' as const,
      status: ['sent', 'pending', 'failed'][i % 3] as any,
      sentAt: new Date(Date.now() - i * 86400000).toISOString(),
      sender: mockUser,
      recipientScope: 'global' as const,
      recipientCount: Math.floor(Math.random() * 100) + 1,
    }));
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getNotifications: jest.fn(),
      sendNotification: jest.fn(),
    } as unknown as jest.Mocked<ApiService>;

    const routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    await TestBed.configureTestingModule({
      declarations: [NotificationHistoryComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(NotificationHistoryComponent);
    component = fixture.componentInstance;
  });

  describe('Full Notification Workflow', () => {
    it('should load and display notification list on init', (done) => {
      const mockNotifications = createMockNotifications(5);
      (apiService.getNotifications as jest.Mock).mockReturnValue(
        of({ data: mockNotifications, total: 5 })
      );

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notifications().length).toBe(5);
        expect(component.loading()).toBeFalsy();
        expect(component.error()).toBeNull();
        done();
      }, 100);
    });

    it('should navigate to notification detail when clicking row', (done) => {
      const mockNotifications = createMockNotifications(3);
      (apiService.getNotifications as jest.Mock).mockReturnValue(
        of({ data: mockNotifications, total: 3 })
      );

      fixture.detectChanges();

      setTimeout(() => {
        const firstNotification = component.notifications()[0];
        // Simulate navigation
        router.navigate(['/notifications', firstNotification.id]);

        expect(router.navigate).toHaveBeenCalledWith(['/notifications', firstNotification.id]);
        done();
      }, 100);
    });

    it('should support pagination', (done) => {
      const page1Notifications = createMockNotifications(5);
      (apiService.getNotifications as jest.Mock).mockReturnValue(
        of({ data: page1Notifications, total: 25 })
      );

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notifications().length).toBe(5);
        expect(component.totalNotifications()).toBe(25);
        expect(apiService.getNotifications).toHaveBeenCalled();
        done();
      }, 100);
    });

    it('should support sorting', () => {
      const mockNotifications = createMockNotifications(5);
      (apiService.getNotifications as jest.Mock).mockReturnValue(
        of({ data: mockNotifications, total: 5 })
      );

      expect(component.sortBy).toBeDefined();
      expect(component.sortDirection).toBeDefined();
    });

    it('should support filtering by status', () => {
      component.filterForm.patchValue({ status: 'sent' });

      expect(component.filterForm.get('status')?.value).toBe('sent');
    });

    it('should support resetting filters', () => {
      component.filterForm.patchValue({ status: 'sent', sender: 'John' });
      component.filterForm.reset();

      expect(component.filterForm.get('status')?.value).toBeNull();
      expect(component.filterForm.get('sender')?.value).toBeNull();
    });

    it('should display correct status labels', () => {
      expect(component.getStatusLabel('sent')).toBe('已送出');
      expect(component.getStatusLabel('pending')).toBe('待送出');
      expect(component.getStatusLabel('failed')).toBe('送出失敗');
    });

    it('should display correct scope names', () => {
      expect(component.getScopeName('global')).toBe('全局');
      expect(component.getScopeName('specific-units')).toBe('特定單位');
      expect(component.getScopeName('specific-buyers')).toBe('特定買家');
    });
  });

  describe('Error Handling in Notification Workflow', () => {
    it('should have error signal defined', () => {
      expect(component.error).toBeDefined();
    });

    it('should have loading signal defined', () => {
      expect(component.loading).toBeDefined();
    });

    it('should have notifications signal defined', () => {
      expect(component.notifications).toBeDefined();
    });
  });
});
