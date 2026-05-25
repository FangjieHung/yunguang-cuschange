import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationDetailComponent } from './notification-detail.component';
import { ApiService } from '../../../../core/api';
import { of, throwError } from 'rxjs';

describe('NotificationDetailComponent', () => {
  let component: NotificationDetailComponent;
  let fixture: ComponentFixture<NotificationDetailComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;
  let activatedRoute: ActivatedRoute;

  const mockNotification = {
    id: 'notif-123',
    projectId: 'proj-1',
    type: 'single-unit' as const,
    title: 'Test Notification',
    content: 'This is a test notification content',
    channel: 'email' as const,
    status: 'sent' as const,
    sentAt: '2024-05-25T10:30:00Z',
    recipientScope: 'specific-buyers' as const,
    recipientCount: 5,
    sender: {
      id: 'user-1',
      name: 'Test User',
      email: 'test@example.com',
      role: 'ROLE-01' as const,
    },
  };

  const mockRecipients = [
    { id: 'buyer-1', name: 'Buyer 1', email: 'buyer1@example.com', status: 'delivered' },
    { id: 'buyer-2', name: 'Buyer 2', email: 'buyer2@example.com', status: 'delivered' },
    { id: 'buyer-3', name: 'Buyer 3', email: 'buyer3@example.com', status: 'pending' },
    { id: 'buyer-4', name: 'Buyer 4', email: 'buyer4@example.com', status: 'failed' },
    { id: 'buyer-5', name: 'Buyer 5', email: 'buyer5@example.com', status: 'delivered' },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      getNotificationById: jest.fn(),
      getNotificationRecipients: jest.fn(),
      resendNotification: jest.fn(),
    } as unknown as jest.Mocked<ApiService>;

    const routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    await TestBed.configureTestingModule({
      declarations: [NotificationDetailComponent],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
        MatSnackBar,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'notif-123' }),
          },
        },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(NotificationDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should load notification by ID from route params on init', () => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));

      fixture.detectChanges();

      expect(apiService.getNotificationById).toHaveBeenCalledWith('notif-123');
    });

    it('should set loading state while fetching notification', () => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));

      component.loading.set(false);
      fixture.detectChanges();

      expect(component.loading()).toBeFalsy();
    });

    it('should clear error state on init', () => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));

      component.error.set('Previous error');
      fixture.detectChanges();

      expect(component.error()).toBeNull();
    });
  });

  describe('notification loading', () => {
    it('should display notification details when loaded successfully', (done) => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notification()).toEqual(mockNotification);
        done();
      }, 100);
    });

    it('should load recipient list with delivery status', (done) => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.recipients()).toEqual(mockRecipients);
        expect(component.recipients().length).toBe(5);
        done();
      }, 100);
    });

    it('should handle error when loading notification fails', (done) => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(throwError(() => new Error('Load failed')));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.error()).toBeTruthy();
        expect(component.notification()).toBeNull();
        done();
      }, 100);
    });

    it('should display "not found" message for non-existent notification', (done) => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(null as any));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notFound()).toBeTruthy();
        done();
      }, 100);
    });
  });

  describe('recipient list display', () => {
    beforeEach(() => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));
    });

    it('should render recipient list table', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        const table = fixture.nativeElement.querySelector('table');
        expect(table).toBeTruthy();
        done();
      }, 100);
    });

    it('should display recipient delivery status', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        const statusCells = fixture.nativeElement.querySelectorAll('[data-testid="recipient-status"]');
        expect(statusCells.length).toBeGreaterThan(0);
        done();
      }, 100);
    });

    it('should show correct recipient count', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.recipients().length).toBe(5);
        done();
      }, 100);
    });
  });

  describe('resend functionality', () => {
    beforeEach(() => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));
    });

    it('should show resend button for pending notifications', (done) => {
      const pendingNotification = { ...mockNotification, status: 'pending' as const };
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(pendingNotification));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.canResend()).toBeTruthy();
        done();
      }, 100);
    });

    it('should show resend button for failed notifications', (done) => {
      const failedNotification = { ...mockNotification, status: 'failed' as const };
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(failedNotification));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.canResend()).toBeTruthy();
        done();
      }, 100);
    });

    it('should not show resend button for sent notifications', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.canResend()).toBeFalsy();
        done();
      }, 100);
    });

    it('should call resend API when resend button is clicked', (done) => {
      const pendingNotification = { ...mockNotification, status: 'pending' as const };
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(pendingNotification));
      (apiService.resendNotification as jest.Mock).mockReturnValue(of({ success: true, message: 'Resent' }));

      fixture.detectChanges();

      setTimeout(() => {
        component.onResend();

        expect(apiService.resendNotification).toHaveBeenCalledWith('notif-123');
        done();
      }, 100);
    });

    it('should show success message after resend', (done) => {
      const pendingNotification = { ...mockNotification, status: 'pending' as const };
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(pendingNotification));
      (apiService.resendNotification as jest.Mock).mockReturnValue(of({ success: true, message: 'Resent successfully' }));

      fixture.detectChanges();

      setTimeout(() => {
        component.onResend();

        setTimeout(() => {
          expect(component.error()).toBeNull();
          done();
        }, 100);
      }, 100);
    });

    it('should handle error on resend failure', (done) => {
      const pendingNotification = { ...mockNotification, status: 'pending' as const };
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(pendingNotification));
      (apiService.resendNotification as jest.Mock).mockReturnValue(throwError(() => new Error('Resend failed')));

      fixture.detectChanges();

      setTimeout(() => {
        component.onResend();

        setTimeout(() => {
          expect(component.error()).toBeTruthy();
          done();
        }, 100);
      }, 100);
    });
  });

  describe('navigation', () => {
    beforeEach(() => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));
    });

    it('should navigate back to history when back button is clicked', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        component.onBack();

        expect(router.navigate).toHaveBeenCalledWith(['/notifications/history']);
        done();
      }, 100);
    });

    it('should have a back button', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        const backButton = fixture.nativeElement.querySelector('[data-testid="back-button"]');
        expect(backButton).toBeTruthy();
        done();
      }, 100);
    });
  });

  describe('error handling', () => {
    it('should display error message when loading fails', (done) => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(throwError(() => new Error('Network error')));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.error()).toBeTruthy();
        done();
      }, 100);
    });

    it('should set loading state correctly', () => {
      expect(component.loading()).toBeFalsy();
      component.loading.set(true);
      expect(component.loading()).toBeTruthy();
    });

    it('should handle missing notification gracefully', (done) => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(undefined));

      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notFound()).toBeTruthy();
        done();
      }, 100);
    });
  });

  describe('metadata display', () => {
    beforeEach(() => {
      (apiService.getNotificationById as jest.Mock).mockReturnValue(of(mockNotification));
      (apiService.getNotificationRecipients as jest.Mock).mockReturnValue(of(mockRecipients));
    });

    it('should display notification title', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notification()?.title).toBe('Test Notification');
        done();
      }, 100);
    });

    it('should display sender information', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notification()?.sender?.name).toBe('Test User');
        done();
      }, 100);
    });

    it('should display sent date', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notification()?.sentAt).toBe('2024-05-25T10:30:00Z');
        done();
      }, 100);
    });

    it('should display notification content', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notification()?.content).toContain('test notification content');
        done();
      }, 100);
    });

    it('should display recipient scope', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.notification()?.recipientScope).toBe('specific-buyers');
        done();
      }, 100);
    });
  });
});
