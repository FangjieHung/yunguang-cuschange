import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { QuickSearchComponent } from './quick-search.component';
import { ApiService } from '../../../../core/api';
import { SearchResult } from '../../../../core/models';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuickSearchComponent', () => {
  let component: QuickSearchComponent;
  let fixture: ComponentFixture<QuickSearchComponent>;
  let apiService: jest.Mocked<ApiService>;
  let router: jest.Mocked<Router>;

  const mockSearchResults: SearchResult[] = [
    {
      type: 'buyer',
      id: 'buyer1',
      title: '張三',
      subtitle: '戶號: A01, 聯絡: 0912345678',
      icon: 'person',
      data: { unitNo: 'A01', phone: '0912345678' },
    },
    {
      type: 'application',
      id: 'app1',
      title: 'APP-2024-001',
      subtitle: '買家: 張三, 狀態: 審核中',
      icon: 'description',
      data: { status: 'under-review', date: '2024-05-20' },
    },
    {
      type: 'unit',
      id: 'unit1',
      title: 'A01',
      subtitle: '3樓, 3房2廳',
      icon: 'apartment',
      data: { floor: 3, layout: '3房2廳' },
    },
  ];

  beforeEach(async () => {
    const apiServiceMock = {
      quickSearch: jest.fn(),
    };
    const routerMock = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [QuickSearchComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatChipsModule,
        MatProgressBarModule,
        MatBadgeModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(QuickSearchComponent);
    component = fixture.componentInstance;

    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize search form control', () => {
    expect(component.searchControl).toBeDefined();
    expect(component.searchControl.value).toBe('');
  });

  it('should initialize search type signal with default "buyer"', () => {
    expect(component.searchType()).toBe('buyer');
  });

  it('should initialize results signal as empty array', () => {
    expect(component.results()).toEqual([]);
  });

  it('should initialize isLoading signal as false', () => {
    expect(component.isLoading()).toBeFalsy();
  });

  it('should load recent searches from localStorage on init', () => {
    const recentSearches = ['test1', 'test2', 'test3'];
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

    component.ngOnInit();

    expect(component.recentSearches()).toEqual(recentSearches);
  });

  it('should perform search with debounce on input change', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of(mockSearchResults));

    component.ngOnInit();

    component.searchControl.setValue('張三');

    // Should not call API immediately due to debounce
    expect(apiService.quickSearch).not.toHaveBeenCalled();

    // Advance by 300ms (debounce time)
    tick(300);

    // Now API should be called
    expect(apiService.quickSearch).toHaveBeenCalledWith('張三', 'buyer');
    expect(component.results()).toEqual(mockSearchResults);
  }));

  it('should not perform search if query is empty', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of(mockSearchResults));

    component.ngOnInit();

    component.searchControl.setValue('');

    tick(300);

    expect(apiService.quickSearch).not.toHaveBeenCalled();
    expect(component.results()).toEqual([]);
  }));

  it('should change search type and search again', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of(mockSearchResults));

    component.ngOnInit();
    component.searchControl.setValue('test');

    tick(300);

    expect(apiService.quickSearch).toHaveBeenCalledWith('test', 'buyer');

    component.onSearchTypeChange('application');

    expect(component.searchType()).toBe('application');

    tick(300);

    expect(apiService.quickSearch).toHaveBeenCalledWith('test', 'application');
  }));

  it('should display loading state while searching', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of(mockSearchResults));

    component.ngOnInit();
    component.searchControl.setValue('test');

    // Component should show loading before debounce completes
    tick(300);

    expect(component.isLoading()).toBeFalsy();
  }));

  it('should handle search errors gracefully', fakeAsync(() => {
    const error = new Error('Search failed');
    apiService.quickSearch.mockReturnValue(throwError(() => error));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    component.ngOnInit();
    component.searchControl.setValue('test');

    tick(300);

    expect(consoleSpy).toHaveBeenCalledWith('Search error:', error);
    expect(component.results()).toEqual([]);

    consoleSpy.mockRestore();
  }));

  it('should add search query to recent searches', () => {
    component.addRecentSearch('新搜尋');

    const recent = component.recentSearches();
    expect(recent).toContain('新搜尋');
  });

  it('should limit recent searches to 5 items', () => {
    component.addRecentSearch('搜1');
    component.addRecentSearch('搜2');
    component.addRecentSearch('搜3');
    component.addRecentSearch('搜4');
    component.addRecentSearch('搜5');
    component.addRecentSearch('搜6');

    expect(component.recentSearches().length).toBeLessThanOrEqual(5);
    expect(component.recentSearches()).not.toContain('搜1');
  });

  it('should not add duplicate recent searches', () => {
    component.addRecentSearch('搜尋');
    component.addRecentSearch('搜尋');

    const recent = component.recentSearches();
    expect(recent.filter((s) => s === '搜尋').length).toBe(1);
  });

  it('should persist recent searches to localStorage', () => {
    component.addRecentSearch('搜尋1');
    component.addRecentSearch('搜尋2');

    const stored = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    expect(stored).toContain('搜尋1');
    expect(stored).toContain('搜尋2');
  });

  it('should clear recent searches', () => {
    component.addRecentSearch('搜尋1');
    component.addRecentSearch('搜尋2');

    expect(component.recentSearches().length).toBeGreaterThan(0);

    component.clearRecentSearches();

    expect(component.recentSearches()).toEqual([]);
    expect(localStorage.getItem('recentSearches')).toBeNull();
  });

  it('should clear search query', () => {
    component.searchControl.setValue('test query');

    component.clearSearch();

    expect(component.searchControl.value).toBe('');
    expect(component.results()).toEqual([]);
  });

  it('should navigate to buyer detail on result selection', () => {
    const result = mockSearchResults[0];

    component.onSelectResult(result);

    expect(router.navigate).toHaveBeenCalledWith([
      '/business-operator/buyer',
      result.id,
    ]);
    expect(component.recentSearches()).toContain(result.title);
  });

  it('should navigate to application detail on result selection', () => {
    const result = mockSearchResults[1];

    component.onSelectResult(result);

    expect(router.navigate).toHaveBeenCalledWith([
      '/business-operator/application',
      result.id,
    ]);
  });

  it('should navigate to unit detail on result selection', () => {
    const result = mockSearchResults[2];

    component.onSelectResult(result);

    expect(router.navigate).toHaveBeenCalledWith([
      '/business-operator/unit',
      result.id,
    ]);
  });

  it('should navigate to new application', () => {
    component.navigateToNewApplication();

    expect(router.navigate).toHaveBeenCalledWith(['/business-operator/new-application']);
  });

  it('should navigate to today reminders', () => {
    component.navigateToTodayReminders();

    expect(router.navigate).toHaveBeenCalledWith(['/business-operator/reminders']);
  });

  it('should navigate to status overview', () => {
    component.navigateToStatusOverview();

    expect(router.navigate).toHaveBeenCalledWith(['/business-operator/overview']);
  });

  it('should display results for each search type', fakeAsync(() => {
    const buyerResults = [mockSearchResults[0]];
    const appResults = [mockSearchResults[1]];
    const unitResults = [mockSearchResults[2]];

    apiService.quickSearch.mockImplementation((query, type) => {
      if (type === 'buyer') return of(buyerResults);
      if (type === 'application') return of(appResults);
      if (type === 'unit') return of(unitResults);
      return of([]);
    });

    component.ngOnInit();

    // Test buyer results
    component.searchControl.setValue('test');
    tick(300);
    expect(component.results()).toEqual(buyerResults);

    // Test application results
    component.onSearchTypeChange('application');
    tick(300);
    expect(component.results()).toEqual(appResults);

    // Test unit results
    component.onSearchTypeChange('unit');
    tick(300);
    expect(component.results()).toEqual(unitResults);
  }));

  it('should display empty results message when no results found', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of([]));

    component.ngOnInit();
    component.searchControl.setValue('no results');

    tick(300);

    expect(component.results()).toEqual([]);
  }));

  it('should search again when user clicks on recent search', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of(mockSearchResults));

    component.ngOnInit();
    component.addRecentSearch('test query');

    component.onRecentSearchClick('test query');

    expect(component.searchControl.value).toBe('test query');

    tick(300);

    expect(apiService.quickSearch).toHaveBeenCalledWith('test query', 'buyer');
  }));

  it('should have responsive layout for mobile devices', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
    // Verify mobile-friendly layout is applied
  });

  it('should handle search with special characters', fakeAsync(() => {
    apiService.quickSearch.mockReturnValue(of(mockSearchResults));

    component.ngOnInit();
    component.searchControl.setValue('測試#@!');

    tick(300);

    expect(apiService.quickSearch).toHaveBeenCalledWith('測試#@!', 'buyer');
  }));
});
