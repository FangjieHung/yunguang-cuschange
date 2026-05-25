import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { ApplicationQuickDetailComponent } from './application-quick-detail.component';
import { ApiService } from '../../../../core/api';
import { Application } from '../../../../core/models';

describe('ApplicationQuickDetailComponent', () => {
  let component: ApplicationQuickDetailComponent;
  let fixture: ComponentFixture<ApplicationQuickDetailComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockApplication: Application = {
    id: 'app1',
    buyerId: 'buyer1',
    projectId: 'proj1',
    version: 1,
    status: 'under-review',
    items: [
      {
        id: 'item1',
        code: 'ADDON-001',
        name: '廚房升級套餐',
        category: '廚房',
        location: 'unit-A01',
        fee: 50000,
      },
      {
        id: 'item2',
        code: 'ADDON-002',
        name: '浴室豪華配置',
        category: '浴室',
        location: 'unit-A01',
        fee: 30000,
      },
    ],
    totalAddOn: 80000,
    totalRefund: 0,
    submittedAt: '2024-05-20T10:00:00Z',
    reviewedAt: undefined,
    reviewedBy: undefined,
    reviewComment: undefined,
    preConfirmDeadline: '2024-05-27T23:59:59Z',
    preConfirmStatus: 'pending',
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getApplication: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };
    const activatedRouteMock = {
      params: of({ id: 'app1' }),
    };

    await TestBed.configureTestingModule({
      declarations: [ApplicationQuickDetailComponent],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatListModule,
        MatChipsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
  });

  it('should create', () => {
    apiService.getApplication.mockReturnValue(of(mockApplication));
    fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should load application from route params', fakeAsync(() => {
      apiService.getApplication.mockReturnValue(of(mockApplication));

      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(apiService.getApplication).toHaveBeenCalledWith('app1');
      expect(component.application()).toEqual(mockApplication);
      expect(component.isLoading()).toBeFalsy();
    }));

    it('should handle error loading application', fakeAsync(() => {
      apiService.getApplication.mockReturnValue(throwError(() => new Error('Load failed')));
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(component.isLoading()).toBeFalsy();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to load application:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    }));
  });

  describe('Application information', () => {
    beforeEach(() => {
      apiService.getApplication.mockReturnValue(of(mockApplication));
      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should display application ID', () => {
      expect(component.application().id).toBe('app1');
    });

    it('should display application status', () => {
      expect(component.application().status).toBe('under-review');
    });

    it('should display total add-on fee', () => {
      expect(component.application().totalAddOn).toBe(80000);
    });

    it('should display application items', () => {
      expect(component.application().items.length).toBe(2);
      expect(component.application().items[0].name).toBe('廚房升級套餐');
    });
  });

  describe('Status badge color', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
    });

    it('should return draft color for draft status', () => {
      const color = component.getStatusColor('draft');
      expect(['primary', 'warn', 'accent']).toContain(color);
    });

    it('should return submitted color for submitted status', () => {
      const color = component.getStatusColor('submitted');
      expect(['primary', 'warn', 'accent']).toContain(color);
    });

    it('should return under-review color for reviewing status', () => {
      const color = component.getStatusColor('under-review');
      expect(['primary', 'warn', 'accent']).toContain(color);
    });

    it('should return approved color for approved status', () => {
      const color = component.getStatusColor('approved');
      expect(['primary', 'warn', 'accent']).toContain(color);
    });
  });

  describe('Status display text', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
    });

    it('should return proper display text for status', () => {
      expect(component.getStatusText('draft')).toBe('草稿');
      expect(component.getStatusText('submitted')).toBe('已提交');
      expect(component.getStatusText('under-review')).toBe('審核中');
      expect(component.getStatusText('approved')).toBe('已核准');
      expect(component.getStatusText('rework')).toBe('需要修正');
      expect(component.getStatusText('confirmed')).toBe('已確認');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      apiService.getApplication.mockReturnValue(of(mockApplication));
      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should navigate to full application detail', () => {
      component.navigateToFullDetail();

      expect(router.navigate).toHaveBeenCalledWith(['/application-review/app1']);
    });

    it('should navigate back', () => {
      component.goBack();

      expect(router.navigate).toHaveBeenCalledWith(['/business-operator']);
    });
  });

  describe('Formatting', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
    });

    it('should format currency correctly', () => {
      const formatted = component.formatCurrency(50000);
      expect(formatted).toContain('50');
      expect(formatted).toContain('000');
    });

    it('should format date correctly', () => {
      const date = '2024-05-20T10:00:00Z';
      const formatted = component.formatDate(date);
      expect(formatted).toBeTruthy();
      expect(formatted.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      apiService.getApplication.mockReturnValue(of(mockApplication));
      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should have proper semantic structure', () => {
      const compiled = fixture.nativeElement;
      const buttons = compiled.querySelectorAll('button');

      expect(buttons.length).toBeGreaterThan(0);
      buttons.forEach((button: HTMLButtonElement) => {
        expect(
          button.getAttribute('aria-label') ||
            button.textContent ||
            button.querySelector('mat-icon')
        ).toBeTruthy();
      });
    });
  });

  describe('Empty state', () => {
    it('should handle undefined application gracefully', fakeAsync(() => {
      apiService.getApplication.mockReturnValue(of(undefined));

      fixture = TestBed.createComponent(ApplicationQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(component.application()).toBeUndefined();
    }));
  });
});
