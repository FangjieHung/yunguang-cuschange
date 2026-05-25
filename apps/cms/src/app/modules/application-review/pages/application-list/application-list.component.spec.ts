import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationListComponent } from './application-list.component';
import { CmsStore } from '../../../../core/state';
import { ApiService } from '../../../../core/api';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Application } from '../../../../core/models';

describe('ApplicationListComponent', () => {
  let component: ApplicationListComponent;
  let fixture: ComponentFixture<ApplicationListComponent>;
  let cmsStore: jest.Mocked<CmsStore>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockApplications: Application[] = [
    {
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
    },
    {
      id: 'app-002',
      buyerId: 'buyer-002',
      projectId: 'proj-001',
      version: 1,
      status: 'approved',
      items: [],
      totalAddOn: 3000,
      totalRefund: 0,
      submittedAt: '2026-05-23',
    },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      getApplications: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };
    const cmsStoreMock = {
      applications: jest.fn().mockReturnValue(mockApplications),
      activeProject: jest.fn().mockReturnValue({
        id: 'proj-001',
        name: 'Test Project',
        code: 'TEST',
        status: 'active' as const,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        totalUnits: 100,
      }),
      loadApplications: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ApplicationListComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatIconModule,
      ],
      providers: [
        { provide: CmsStore, useValue: cmsStoreMock },
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    cmsStore = TestBed.inject(CmsStore) as jest.Mocked<CmsStore>;
    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(ApplicationListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load applications on init', () => {
    apiService.getApplications.mockReturnValue(of(mockApplications));
    component.ngOnInit();
    expect(apiService.getApplications).toHaveBeenCalled();
  });

  it('should filter applications by status', (done) => {
    apiService.getApplications.mockReturnValue(of(mockApplications));
    component.ngOnInit();
    setTimeout(() => {
      component.statusFilter.setValue('approved');
      setTimeout(() => {
        expect(component.filteredApplications.length).toBe(1);
        expect(component.filteredApplications[0].status).toBe('approved');
        done();
      }, 100);
    }, 100);
  });

  it('should get correct status label', () => {
    const label = component.getStatusLabel('approved');
    expect(label).toBe('已批准');
  });

  it('should navigate to application detail on view', () => {
    const app = mockApplications[0];
    component.onViewApplication(app);
    expect(router.navigate).toHaveBeenCalledWith([`/application-review/${app.id}`]);
  });
});
