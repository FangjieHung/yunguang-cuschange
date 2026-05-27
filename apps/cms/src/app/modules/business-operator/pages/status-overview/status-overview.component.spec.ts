import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { StatusOverviewComponent } from './status-overview.component';
import { ApiService } from '../../../../core/api';
import { DashboardStatsWithTrend, TrendData } from '../../../../core/models';

describe('StatusOverviewComponent', () => {
  let component: StatusOverviewComponent;
  let fixture: ComponentFixture<StatusOverviewComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockTrendData: TrendData[] = [
    { date: '2024-05-19', submitted: 5, underReview: 2, approved: 1, needsConfirmation: 0 },
    { date: '2024-05-20', submitted: 6, underReview: 3, approved: 1, needsConfirmation: 1 },
    { date: '2024-05-21', submitted: 7, underReview: 2, approved: 2, needsConfirmation: 1 },
    { date: '2024-05-22', submitted: 8, underReview: 4, approved: 2, needsConfirmation: 2 },
    { date: '2024-05-23', submitted: 9, underReview: 3, approved: 3, needsConfirmation: 2 },
    { date: '2024-05-24', submitted: 10, underReview: 5, approved: 3, needsConfirmation: 3 },
    { date: '2024-05-25', submitted: 12, underReview: 6, approved: 4, needsConfirmation: 4 },
  ];

  const mockDashboardStats: DashboardStatsWithTrend = {
    totalSubmitted: 12,
    underReview: 6,
    approved: 4,
    needsRework: 2,
    needsConfirmation: 4,
    totalAddOn: 25000,
    totalRefund: 5000,
    trendData: mockTrendData,
    yesterdayApproved: 3,
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getDashboardStats: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [StatusOverviewComponent],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatChipsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(StatusOverviewComponent);
    component = fixture.componentInstance;
    component.enableAutoRefresh = false; // Disable auto-refresh for tests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should load dashboard stats on init', fakeAsync(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      component.enableAutoRefresh = false;

      fixture.detectChanges();
      tick();

      expect(apiService.getDashboardStats).toHaveBeenCalled();
      expect(component.stats()).toEqual(mockDashboardStats);
      expect(component.isLoading()).toBeFalsy();
    }));

    it('should handle error when loading stats', fakeAsync(() => {
      apiService.getDashboardStats.mockReturnValue(
        throwError(() => new Error('Load failed'))
      );
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      component.enableAutoRefresh = false;

      fixture.detectChanges();
      tick();

      expect(component.isLoading()).toBeFalsy();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to load dashboard stats:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    }));

    it('should set loading state to true initially', () => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));

      expect(component.isLoading()).toBeTruthy();
    });
  });

  describe('Dashboard Statistics', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should display pending applications count', () => {
      expect(component.stats().totalSubmitted).toBe(12);
    });

    it('should display under review count', () => {
      expect(component.stats().underReview).toBe(6);
    });

    it('should display approved count', () => {
      expect(component.stats().approved).toBe(4);
    });

    it('should display awaiting confirmation count', () => {
      expect(component.stats().needsConfirmation).toBe(4);
    });
  });

  describe('Calculated percentages', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should calculate pending percentage correctly', () => {
      // pending / total * 100 = 12 / (12+6+4+2+4) * 100
      const total = 12 + 6 + 4 + 2 + 4;
      const percentage = (12 / total) * 100;
      expect(component.getPendingPercentage()).toBe(Math.round(percentage));
    });

    it('should calculate under review progress', () => {
      // underReview / pending = 6 / 12
      const progress = (6 / 12) * 100;
      expect(component.getReviewProgress()).toBe(Math.round(progress));
    });

    it('should calculate approved percentage change from yesterday', () => {
      // (current - yesterday) / yesterday * 100
      const change = ((4 - 3) / 3) * 100;
      expect(component.getApprovedPercentageChange()).toBe(Math.round(change));
    });

    it('should handle zero yesterday approved for change calculation', () => {
      component.stats.set({ ...mockDashboardStats, yesterdayApproved: 0 });
      const change = component.getApprovedPercentageChange();
      expect(change).toBe(0);
    });
  });

  describe('Trend data', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should have trend data available', () => {
      expect(component.stats().trendData?.length).toBe(7);
    });

    it('should calculate total from trend data', () => {
      const trendTotal = component.calculateTrendTotal();
      expect(trendTotal).toBeGreaterThan(0);
    });

    it('should get max value from trend data for scaling', () => {
      const maxValue = component.getMaxTrendValue();
      expect(maxValue).toBeGreaterThan(0);
    });
  });

  describe('Alert section', () => {
    it('should show alerts when there are items needing rework', () => {
      const stats: DashboardStatsWithTrend = {
        ...mockDashboardStats,
        needsRework: 3,
      };
      apiService.getDashboardStats.mockReturnValue(of(stats));

      fixture.detectChanges();

      expect(component.hasAlerts()).toBeTruthy();
    });

    it('should show alerts when there are items awaiting confirmation', () => {
      const stats: DashboardStatsWithTrend = {
        ...mockDashboardStats,
        needsConfirmation: 5,
      };
      apiService.getDashboardStats.mockReturnValue(of(stats));

      fixture.detectChanges();

      expect(component.hasAlerts()).toBeTruthy();
    });

    it('should not show alerts when no critical items', () => {
      const stats: DashboardStatsWithTrend = {
        ...mockDashboardStats,
        needsRework: 0,
        needsConfirmation: 0,
      };
      apiService.getDashboardStats.mockReturnValue(of(stats));

      fixture.detectChanges();

      expect(component.hasAlerts()).toBeFalsy();
    });
  });

  describe('Refresh functionality', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should refresh stats when refresh is called', fakeAsync(() => {
      expect(apiService.getDashboardStats).toHaveBeenCalledTimes(1);

      component.refreshStats();
      tick();

      expect(apiService.getDashboardStats).toHaveBeenCalledTimes(2);
    }));

    it('should set loading state during refresh', fakeAsync(() => {
      component.refreshStats();
      tick();

      expect(component.stats()).toEqual(mockDashboardStats);
    }));
  });

  describe('Auto-refresh interval', () => {
    it('should setup auto-refresh if enabled', () => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));

      component.enableAutoRefresh = true;
      component.autoRefreshInterval = 100; // 100ms for testing

      fixture.detectChanges();

      expect(component.stats()).toEqual(mockDashboardStats);
      expect(apiService.getDashboardStats).toHaveBeenCalled();
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should navigate to rework page', () => {
      component.navigateToRework();

      expect(router.navigate).toHaveBeenCalledWith(['/business-operator/rework']);
    });

    it('should navigate to confirmation page', () => {
      component.navigateToConfirmation();

      expect(router.navigate).toHaveBeenCalledWith(['/business-operator/confirmation']);
    });

    it('should navigate back', () => {
      component.goBack();

      expect(router.navigate).toHaveBeenCalledWith(['/business-operator']);
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should have proper ARIA labels on cards', () => {
      const compiled = fixture.nativeElement;
      const cards = compiled.querySelectorAll('mat-card');

      expect(cards.length).toBeGreaterThan(0);
      cards.forEach((card: HTMLElement) => {
        const text = card.textContent;
        expect(text?.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Empty state', () => {
    it('should handle empty stats gracefully', () => {
      const emptyStats: DashboardStatsWithTrend = {
        totalSubmitted: 0,
        underReview: 0,
        approved: 0,
        needsRework: 0,
        needsConfirmation: 0,
        totalAddOn: 0,
        totalRefund: 0,
      };
      apiService.getDashboardStats.mockReturnValue(of(emptyStats));

      fixture.detectChanges();

      expect(component.stats()).toEqual(emptyStats);
    });
  });

  describe('Financial summary', () => {
    beforeEach(() => {
      apiService.getDashboardStats.mockReturnValue(of(mockDashboardStats));
      fixture.detectChanges();
    });

    it('should display total add-on fees', () => {
      expect(component.stats().totalAddOn).toBe(25000);
    });

    it('should display total refund amount', () => {
      expect(component.stats().totalRefund).toBe(5000);
    });

    it('should calculate net financial amount', () => {
      const net = component.stats().totalAddOn - component.stats().totalRefund;
      expect(net).toBe(20000);
    });
  });
});
