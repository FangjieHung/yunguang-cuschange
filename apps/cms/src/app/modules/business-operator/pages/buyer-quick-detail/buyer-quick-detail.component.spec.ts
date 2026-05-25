import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { BuyerQuickDetailComponent } from './buyer-quick-detail.component';
import { ApiService } from '../../../../core/api';
import { Buyer } from '../../../../core/models';

describe('BuyerQuickDetailComponent', () => {
  let component: BuyerQuickDetailComponent;
  let fixture: ComponentFixture<BuyerQuickDetailComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;
  let activatedRoute: ActivatedRoute;

  const mockBuyer: Buyer = {
    id: 'buyer1',
    projectId: 'proj1',
    unitNo: 'A01',
    ownerName: '張三',
    ownerIdLast4: '1234',
    phone: '0912345678',
    email: 'buyer1@example.com',
    layout: '3房2廳',
    size: 85.5,
    floor: 5,
    facing: '南',
    createdAt: '2024-05-20T10:00:00Z',
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getBuyer: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };
    const activatedRouteMock = {
      params: of({ id: 'buyer1' }),
    };

    await TestBed.configureTestingModule({
      declarations: [BuyerQuickDetailComponent],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
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
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    apiService.getBuyer.mockReturnValue(of(mockBuyer));
    fixture = TestBed.createComponent(BuyerQuickDetailComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should load buyer from route params', fakeAsync(() => {
      apiService.getBuyer.mockReturnValue(of(mockBuyer));

      fixture = TestBed.createComponent(BuyerQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(apiService.getBuyer).toHaveBeenCalledWith('buyer1');
      expect(component.buyer()).toEqual(mockBuyer);
      expect(component.isLoading()).toBeFalsy();
    }));

    it('should handle error loading buyer', fakeAsync(() => {
      apiService.getBuyer.mockReturnValue(throwError(() => new Error('Load failed')));
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      fixture = TestBed.createComponent(BuyerQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(component.isLoading()).toBeFalsy();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to load buyer:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    }));
  });

  describe('Buyer information', () => {
    beforeEach(() => {
      apiService.getBuyer.mockReturnValue(of(mockBuyer));
      fixture = TestBed.createComponent(BuyerQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should display buyer name', () => {
      expect(component.buyer().ownerName).toBe('張三');
    });

    it('should display buyer unit number', () => {
      expect(component.buyer().unitNo).toBe('A01');
    });

    it('should display buyer contact phone', () => {
      expect(component.buyer().phone).toBe('0912345678');
    });

    it('should display buyer email', () => {
      expect(component.buyer().email).toBe('buyer1@example.com');
    });

    it('should display unit details (layout, size, floor)', () => {
      const buyer = component.buyer();
      expect(buyer.layout).toBe('3房2廳');
      expect(buyer.size).toBe(85.5);
      expect(buyer.floor).toBe(5);
      expect(buyer.facing).toBe('南');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      apiService.getBuyer.mockReturnValue(of(mockBuyer));
      fixture = TestBed.createComponent(BuyerQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should navigate to full profile', () => {
      component.navigateToFullProfile();

      expect(router.navigate).toHaveBeenCalledWith(['/buyer-mgmt/buyer', 'buyer1']);
    });

    it('should navigate to new application', () => {
      component.navigateToNewApplication();

      expect(router.navigate).toHaveBeenCalledWith([
        '/application-review/new',
        { buyerId: 'buyer1' },
      ]);
    });

    it('should navigate back', () => {
      component.goBack();

      expect(router.navigate).toHaveBeenCalledWith(['/business-operator']);
    });
  });

  describe('Empty state', () => {
    it('should handle undefined buyer gracefully', fakeAsync(() => {
      apiService.getBuyer.mockReturnValue(of(undefined));

      fixture = TestBed.createComponent(BuyerQuickDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(component.buyer()).toBeUndefined();
    }));
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      apiService.getBuyer.mockReturnValue(of(mockBuyer));
      fixture = TestBed.createComponent(BuyerQuickDetailComponent);
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
});
