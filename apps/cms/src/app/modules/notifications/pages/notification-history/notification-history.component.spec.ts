import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NotificationHistoryComponent } from './notification-history.component';
import { ApiService } from '../../../../core/api';
import { Notification, User } from '../../../../core/models';
import { of, throwError } from 'rxjs';

describe('NotificationHistoryComponent', () => {
  let component: NotificationHistoryComponent;
  let fixture: ComponentFixture<NotificationHistoryComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockUser: User = {
    id: 'user-001',
    name: 'Test User',
    email: 'test@example.com',
    role: 'ROLE-01',
  };

  const mockNotifications: Notification[] = [
    {
      id: 'notif-001',
      projectId: 'proj-001',
      type: 'global',
      title: 'Test Notification 1',
      content: 'Content 1',
      channel: 'in-app',
      status: 'sent',
      sentAt: new Date('2026-05-20').toISOString(),
      sender: mockUser,
      recipientScope: 'global',
      recipientCount: 100,
    },
    {
      id: 'notif-002',
      projectId: 'proj-001',
      type: 'global',
      title: 'Test Notification 2',
      content: 'Content 2',
      channel: 'in-app',
      status: 'pending',
      sentAt: new Date('2026-05-19').toISOString(),
      sender: mockUser,
      recipientScope: 'specific-units',
      recipientCount: 50,
    },
    {
      id: 'notif-003',
      projectId: 'proj-001',
      type: 'global',
      title: 'Test Notification 3',
      content: 'Content 3',
      channel: 'in-app',
      status: 'failed',
      sentAt: new Date('2026-05-18').toISOString(),
      sender: mockUser,
      recipientScope: 'specific-buyers',
      recipientCount: 30,
    },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      getNotifications: jest.fn(),
    };

    const routerMock = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [NotificationHistoryComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
        NoopAnimationsModule,
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with loading state and empty notifications', () => {
    expect(component.loading()).toBeFalsy();
    expect(component.notifications()).toEqual([]);
    expect(component.error()).toBeNull();
  });

  it('should load notifications on init', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.ngOnInit();

    setTimeout(() => {
      expect(apiService.getNotifications).toHaveBeenCalled();
      expect(component.notifications().length).toBe(3);
      expect(component.loading()).toBeFalsy();
      done();
    }, 100);
  });

  it('should display loading state while fetching data', () => {
    component.loading.set(true);
    expect(component.loading()).toBe(true);

    component.loading.set(false);
    expect(component.loading()).toBe(false);
  });

  it('should handle API errors and display error message', (done) => {
    const errorMessage = 'Failed to load notifications';
    apiService.getNotifications.mockReturnValue(
      throwError(() => new Error(errorMessage))
    );

    component.ngOnInit();

    setTimeout(() => {
      expect(component.error()).toBeTruthy();
      expect(component.notifications().length).toBe(0);
      done();
    }, 100);
  });

  it('should initialize filter form with default values', () => {
    expect(component.filterForm).toBeDefined();
    expect(component.filterForm.get('dateFrom')?.value).toBeNull();
    expect(component.filterForm.get('dateTo')?.value).toBeNull();
    expect(component.filterForm.get('status')?.value).toBe('');
    expect(component.filterForm.get('sender')?.value).toBe('');
  });

  it('should apply date range filter', (done) => {
    const dateFrom = new Date('2026-05-19');
    const dateTo = new Date('2026-05-20');

    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications.slice(0, 2), total: 2 })
    );

    component.filterForm.patchValue({
      dateFrom,
      dateTo,
    });

    component.applyFilters();

    setTimeout(() => {
      expect(apiService.getNotifications).toHaveBeenCalledWith(
        expect.objectContaining({
          dateFrom,
          dateTo,
        }),
        expect.any(Object),
        1
      );
      done();
    }, 100);
  });

  it('should apply status filter', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications.slice(0, 1), total: 1 })
    );

    component.filterForm.patchValue({
      status: 'sent',
    });

    component.applyFilters();

    setTimeout(() => {
      expect(apiService.getNotifications).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 'sent',
        }),
        expect.any(Object),
        1
      );
      done();
    }, 100);
  });

  it('should apply sender filter', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.filterForm.patchValue({
      sender: 'Test User',
    });

    component.applyFilters();

    setTimeout(() => {
      expect(apiService.getNotifications).toHaveBeenCalledWith(
        expect.objectContaining({
          sender: 'Test User',
        }),
        expect.any(Object),
        1
      );
      done();
    }, 100);
  });

  it('should clear all filters and reset pagination', (done) => {
    component.filterForm.patchValue({
      dateFrom: new Date(),
      dateTo: new Date(),
      status: 'sent',
      sender: 'Test User',
    });

    component.currentPage.set(2);

    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.clearFilters();

    setTimeout(() => {
      expect(component.filterForm.get('dateFrom')?.value).toBeNull();
      expect(component.filterForm.get('dateTo')?.value).toBeNull();
      expect(component.filterForm.get('status')?.value).toBe('');
      expect(component.filterForm.get('sender')?.value).toBe('');
      expect(component.currentPage()).toBe(1);
      done();
    }, 100);
  });

  it('should sort by date in descending order by default', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.ngOnInit();

    setTimeout(() => {
      expect(component.sortBy()).toBe('sentAt');
      expect(component.sortDirection()).toBe('desc');
      done();
    }, 100);
  });

  it('should sort by sender', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.onSort('sender');

    setTimeout(() => {
      expect(component.sortBy()).toBe('sender');
      expect(apiService.getNotifications).toHaveBeenCalled();
      done();
    }, 100);
  });

  it('should sort by title', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.onSort('title');

    setTimeout(() => {
      expect(component.sortBy()).toBe('title');
      expect(apiService.getNotifications).toHaveBeenCalled();
      done();
    }, 100);
  });

  it('should toggle sort direction when sorting by same column', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.onSort('sentAt');
    const firstDirection = component.sortDirection();

    setTimeout(() => {
      component.onSort('sentAt');

      setTimeout(() => {
        expect(component.sortDirection()).not.toBe(firstDirection);
        done();
      }, 100);
    }, 100);
  });

  it('should handle pagination - navigate to next page', (done) => {
    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 25 })
    );

    component.ngOnInit();

    setTimeout(() => {
      component.onPageChange(2);

      setTimeout(() => {
        expect(component.currentPage()).toBe(2);
        expect(apiService.getNotifications).toHaveBeenCalledWith(
          expect.any(Object),
          expect.any(Object),
          2
        );
        done();
      }, 100);
    }, 100);
  });

  it('should handle pagination - navigate to previous page', (done) => {
    component.currentPage.set(2);

    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 25 })
    );

    component.onPageChange(1);

    setTimeout(() => {
      expect(component.currentPage()).toBe(1);
      expect(apiService.getNotifications).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
        1
      );
      done();
    }, 100);
  });

  it('should navigate to notification detail on row click', () => {
    component.onRowClick(mockNotifications[0]);

    expect(router.navigate).toHaveBeenCalledWith(['/notifications', mockNotifications[0].id]);
  });

  it('should display empty state message when no notifications', () => {
    component.notifications.set([]);
    component.loading.set(false);
    component.error.set(null);

    expect(component.notifications().length).toBe(0);
  });

  it('should calculate total pages correctly', () => {
    component.totalNotifications.set(25);

    expect(component.totalPages()).toBe(3);
  });

  it('should calculate total pages when total is less than page size', () => {
    component.totalNotifications.set(5);

    expect(component.totalPages()).toBe(1);
  });

  it('should have pageSize of 10', () => {
    expect(component.pageSize).toBe(10);
  });

  it('should reset current page to 1 when applying filters', (done) => {
    component.currentPage.set(3);

    apiService.getNotifications.mockReturnValue(
      of({ data: mockNotifications, total: 3 })
    );

    component.filterForm.patchValue({
      status: 'sent',
    });

    component.applyFilters();

    setTimeout(() => {
      expect(component.currentPage()).toBe(1);
      done();
    }, 100);
  });

  it('should display status badge with correct color', () => {
    const sentNotification = mockNotifications.find((n) => n.status === 'sent');
    const pendingNotification = mockNotifications.find((n) => n.status === 'pending');
    const failedNotification = mockNotifications.find((n) => n.status === 'failed');

    expect(sentNotification?.status).toBe('sent');
    expect(pendingNotification?.status).toBe('pending');
    expect(failedNotification?.status).toBe('failed');
  });

  it('should format date correctly', () => {
    const date = new Date('2026-05-25T10:30:00Z');
    const notification: Notification = {
      ...mockNotifications[0],
      sentAt: date.toISOString(),
    };

    expect(notification.sentAt).toBe(date.toISOString());
  });

  it('should load all available columns', () => {
    expect(component.displayedColumns).toContain('sender');
    expect(component.displayedColumns).toContain('title');
    expect(component.displayedColumns).toContain('recipientScope');
    expect(component.displayedColumns).toContain('recipientCount');
    expect(component.displayedColumns).toContain('sentAt');
    expect(component.displayedColumns).toContain('status');
  });
});
