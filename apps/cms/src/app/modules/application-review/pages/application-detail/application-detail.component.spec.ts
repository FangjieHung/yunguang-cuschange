import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationDetailComponent } from './application-detail.component';
import { ApiService } from '../../../../core/api';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ReviewFormComponent } from '../../components/review-form/review-form.component';
import { CommonModule } from '@angular/common';
import { Application } from '../../../../core/models';

describe('ApplicationDetailComponent', () => {
  let component: ApplicationDetailComponent;
  let fixture: ComponentFixture<ApplicationDetailComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;
  let activatedRoute: any;

  const mockApplication: Application = {
    id: 'app-001',
    buyerId: 'buyer-001',
    projectId: 'proj-001',
    version: 1,
    status: 'submitted',
    items: [
      {
        id: 'item-001',
        code: 'ITEM-001',
        name: 'Test Item',
        category: 'Addition',
        location: 'Living Room',
        fee: 5000,
      },
    ],
    totalAddOn: 5000,
    totalRefund: 0,
    submittedAt: '2026-05-23',
  };

  beforeEach(async () => {
    const apiServiceMock = {
      getApplication: jest.fn(),
      reviewApplication: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };

    activatedRoute = {
      snapshot: {
        paramMap: {
          get: jest.fn().mockReturnValue('app-001'),
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [ApplicationDetailComponent, ReviewFormComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatIconModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(ApplicationDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load application on init', () => {
    apiService.getApplication.mockReturnValue(of(mockApplication));
    component.ngOnInit();
    expect(apiService.getApplication).toHaveBeenCalledWith('app-001');
  });

  it('should set application data after load', (done) => {
    apiService.getApplication.mockReturnValue(of(mockApplication));
    component.ngOnInit();
    setTimeout(() => {
      expect(component.application).toEqual(mockApplication);
      expect(component.isLoading).toBe(false);
      done();
    }, 100);
  });

  it('should submit review and navigate back on success', () => {
    component.application = mockApplication;
    apiService.reviewApplication.mockReturnValue(of(mockApplication));
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();

    component.onReviewSubmit({ decision: 'approved', comment: 'Good' });

    expect(apiService.reviewApplication).toHaveBeenCalledWith(
      'app-001',
      'approved',
      'Good'
    );
    expect(alertSpy).toHaveBeenCalledWith('審核已提交');

    alertSpy.mockRestore();
  });

  it('should navigate back to list', () => {
    component.onBack();
    expect(router.navigate).toHaveBeenCalledWith(['/application-review']);
  });
});
