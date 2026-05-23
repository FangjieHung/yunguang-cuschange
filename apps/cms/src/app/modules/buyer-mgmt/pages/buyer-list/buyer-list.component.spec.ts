import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { BuyerListComponent } from './buyer-list.component';
import { CmsStore } from '../../../../core/state';
import { ApiService } from '../../../../core/api';
import { Buyer } from '../../../../core/models';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

describe('BuyerListComponent', () => {
  let component: BuyerListComponent;
  let fixture: ComponentFixture<BuyerListComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;
  let cmsStore: jest.Mocked<CmsStore>;

  const mockBuyers: Buyer[] = [
    {
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
    },
    {
      id: '2',
      projectId: 'proj1',
      unitNo: 'B02',
      ownerName: '李四',
      ownerIdLast4: '5678',
      phone: '0987654321',
      email: 'li@example.com',
      layout: '2房1廳',
      size: 28,
      floor: 5,
      facing: '朝北',
      createdAt: '2024-01-02',
    },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      getBuyers: jest.fn(),
      getBuyer: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };
    const cmsStoreMock = {
      activeProject: jest.fn().mockReturnValue({
        id: 'proj1',
        name: 'Test Project',
        code: 'TEST',
        status: 'active',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        totalUnits: 100,
      }),
    };

    await TestBed.configureTestingModule({
      declarations: [BuyerListComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatProgressSpinnerModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: CmsStore, useValue: cmsStoreMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
    cmsStore = TestBed.inject(CmsStore) as jest.Mocked<CmsStore>;

    fixture = TestBed.createComponent(BuyerListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load buyers on init', () => {
    apiService.getBuyers.mockReturnValue(of(mockBuyers));

    component.ngOnInit();

    expect(apiService.getBuyers).toHaveBeenCalledWith('proj1');
    expect(component.buyers).toEqual(mockBuyers);
    expect(component.filteredBuyers).toEqual(mockBuyers);
    expect(component.isLoading).toBeFalsy();
  });

  it('should handle error when loading buyers', () => {
    const error = new Error('API Error');
    apiService.getBuyers.mockReturnValue(throwError(() => error));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    component.ngOnInit();

    expect(apiService.getBuyers).toHaveBeenCalledWith('proj1');
    expect(consoleSpy).toHaveBeenCalledWith('Failed to load buyers', error);
    expect(component.isLoading).toBeFalsy();

    consoleSpy.mockRestore();
  });

  it('should filter buyers by owner name', (done) => {
    apiService.getBuyers.mockReturnValue(of(mockBuyers));

    component.ngOnInit();

    setTimeout(() => {
      component.searchControl.setValue('張三');

      setTimeout(() => {
        expect(component.filteredBuyers.length).toBe(1);
        expect(component.filteredBuyers[0].ownerName).toBe('張三');
        done();
      }, 100);
    }, 100);
  });

  it('should filter buyers by unit number', (done) => {
    apiService.getBuyers.mockReturnValue(of(mockBuyers));

    component.ngOnInit();

    setTimeout(() => {
      component.searchControl.setValue('A01');

      setTimeout(() => {
        expect(component.filteredBuyers.length).toBe(1);
        expect(component.filteredBuyers[0].unitNo).toBe('A01');
        done();
      }, 100);
    }, 100);
  });

  it('should filter buyers by email', (done) => {
    apiService.getBuyers.mockReturnValue(of(mockBuyers));

    component.ngOnInit();

    setTimeout(() => {
      component.searchControl.setValue('li@example.com');

      setTimeout(() => {
        expect(component.filteredBuyers.length).toBe(1);
        expect(component.filteredBuyers[0].email).toBe('li@example.com');
        done();
      }, 100);
    }, 100);
  });

  it('should show all buyers when search is cleared', (done) => {
    apiService.getBuyers.mockReturnValue(of(mockBuyers));

    component.ngOnInit();

    setTimeout(() => {
      component.searchControl.setValue('張三');

      setTimeout(() => {
        component.searchControl.setValue('');

        setTimeout(() => {
          expect(component.filteredBuyers.length).toBe(mockBuyers.length);
          expect(component.filteredBuyers).toEqual(mockBuyers);
          done();
        }, 100);
      }, 100);
    }, 100);
  });

  it('should navigate to buyer detail page', () => {
    const buyer = mockBuyers[0];
    component.onViewBuyer(buyer);

    expect(router.navigate).toHaveBeenCalledWith([`/buyer-mgmt/${buyer.id}`]);
  });

  it('should navigate to import page', () => {
    component.onImportBuyers();

    expect(router.navigate).toHaveBeenCalledWith(['/buyer-mgmt/import']);
  });

  it('should not load buyers if no active project', () => {
    cmsStore.activeProject.mockReturnValue(null);

    component.loadBuyers();

    expect(apiService.getBuyers).not.toHaveBeenCalled();
  });
});
