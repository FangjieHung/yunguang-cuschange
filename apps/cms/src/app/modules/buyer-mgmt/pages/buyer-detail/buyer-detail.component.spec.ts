import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { BuyerDetailComponent } from './buyer-detail.component';
import { ApiService } from '../../../../core/api';
import { Buyer } from '../../../../core/models';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

describe('BuyerDetailComponent', () => {
  let component: BuyerDetailComponent;
  let fixture: ComponentFixture<BuyerDetailComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;
  let activatedRoute: any;

  const mockBuyer: Buyer = {
    id: '1',
    projectId: 'proj1',
    unitNo: 'A01',
    ownerName: '張三',
    ownerIdLast4: '1234',
    phone: '0912345678',
    email: 'zhang@example.com',
    layout: '3房2廳',
    size: 35,
    floor: 3,
    facing: '朝南',
    createdAt: '2024-01-01',
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getBuyer: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };
    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jest.fn().mockReturnValue('1'),
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [BuyerDetailComponent],
      imports: [CommonModule, MatIconModule],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(BuyerDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load buyer details on init', () => {
    apiService.getBuyer.mockReturnValue(of(mockBuyer));

    component.ngOnInit();

    expect(apiService.getBuyer).toHaveBeenCalledWith('1');
    expect(component.buyer).toEqual(mockBuyer);
    expect(component.isLoading).toBeFalsy();
  });

  it('should handle error when loading buyer', () => {
    const error = new Error('API Error');
    apiService.getBuyer.mockReturnValue(throwError(() => error));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    component.ngOnInit();

    expect(apiService.getBuyer).toHaveBeenCalledWith('1');
    expect(consoleSpy).toHaveBeenCalledWith('Failed to load buyer', error);
    expect(router.navigate).toHaveBeenCalledWith(['/buyer-mgmt']);
    expect(component.isLoading).toBeFalsy();

    consoleSpy.mockRestore();
  });

  it('should display buyer information', () => {
    apiService.getBuyer.mockReturnValue(of(mockBuyer));

    component.ngOnInit();

    expect(component.buyer?.ownerName).toBe('張三');
    expect(component.buyer?.unitNo).toBe('A01');
    expect(component.buyer?.phone).toBe('0912345678');
  });

  it('should navigate back to buyer list', () => {
    component.onBack();

    expect(router.navigate).toHaveBeenCalledWith(['/buyer-mgmt']);
  });

  it('should mask ID correctly', () => {
    const result = component.maskId('12341234');

    expect(result).toBe('****1234');
  });

  it('should return dash for empty ID', () => {
    const result = component.maskId('');

    expect(result).toBe('-');
  });

  it('should show reset password alert', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();

    component.onResetPassword();

    expect(alertSpy).toHaveBeenCalledWith('密碼重設功能將在後續實現');

    alertSpy.mockRestore();
  });

  it('should handle null buyer response', () => {
    apiService.getBuyer.mockReturnValue(of(undefined));

    component.ngOnInit();

    expect(component.buyer).toBeNull();
    expect(component.isLoading).toBeFalsy();
  });
});
