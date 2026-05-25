import { Component, OnInit, Signal, WritableSignal, signal, computed } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from '../../../../core/api';
import { SearchResult } from '../../../../core/models';

@Component({
  selector: 'cms-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.scss'],
})
export class QuickSearchComponent implements OnInit {
  searchControl = new FormControl('', { nonNullable: true });
  searchType: WritableSignal<'buyer' | 'application' | 'unit'> = signal('buyer');
  results: WritableSignal<SearchResult[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(false);
  recentSearches: WritableSignal<string[]> = signal([]);

  private readonly MAX_RECENT_SEARCHES = 5;
  private readonly DEBOUNCE_TIME = 300;
  private readonly RECENT_SEARCHES_KEY = 'recentSearches';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRecentSearches();
    this.setupSearch();
  }

  /**
   * Setup search with debounce and real-time filtering
   */
  private setupSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        if (query && query.trim().length > 0) {
          this.search(query);
        } else {
          this.results.set([]);
          this.isLoading.set(false);
        }
      });
  }

  /**
   * Perform search by query and type
   */
  private search(query: string) {
    this.isLoading.set(true);
    const type = this.searchType();

    this.apiService.quickSearch(query, type).subscribe({
      next: (searchResults) => {
        this.results.set(searchResults);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Search error:', err);
        this.results.set([]);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Handle search type change and re-search
   */
  onSearchTypeChange(type: 'buyer' | 'application' | 'unit') {
    this.searchType.set(type);
    const query = this.searchControl.value;
    if (query && query.trim().length > 0) {
      this.search(query);
    }
  }

  /**
   * Load recent searches from localStorage
   */
  private loadRecentSearches() {
    const stored = localStorage.getItem(this.RECENT_SEARCHES_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as string[];
        this.recentSearches.set(parsed);
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
        this.recentSearches.set([]);
      }
    }
  }

  /**
   * Add search query to recent searches
   */
  addRecentSearch(query: string) {
    if (!query || query.trim().length === 0) return;

    const trimmed = query.trim();
    const current = this.recentSearches();

    // Remove duplicate if exists
    const filtered = current.filter((s) => s !== trimmed);

    // Add to beginning
    const updated = [trimmed, ...filtered].slice(0, this.MAX_RECENT_SEARCHES);

    this.recentSearches.set(updated);
    this.persistRecentSearches(updated);
  }

  /**
   * Clear all recent searches
   */
  clearRecentSearches() {
    this.recentSearches.set([]);
    localStorage.removeItem(this.RECENT_SEARCHES_KEY);
  }

  /**
   * Clear search input and results
   */
  clearSearch() {
    this.searchControl.setValue('');
    this.results.set([]);
  }

  /**
   * Handle result selection and navigation
   */
  onSelectResult(result: SearchResult) {
    this.addRecentSearch(result.title);

    switch (result.type) {
      case 'buyer':
        this.router.navigate(['/business-operator/buyer', result.id]);
        break;
      case 'application':
        this.router.navigate(['/business-operator/application', result.id]);
        break;
      case 'unit':
        this.router.navigate(['/business-operator/unit', result.id]);
        break;
    }
  }

  /**
   * Handle recent search click
   */
  onRecentSearchClick(query: string) {
    this.searchControl.setValue(query);
  }

  /**
   * Navigate to new application
   */
  navigateToNewApplication() {
    this.router.navigate(['/business-operator/new-application']);
  }

  /**
   * Navigate to today's reminders
   */
  navigateToTodayReminders() {
    this.router.navigate(['/business-operator/reminders']);
  }

  /**
   * Navigate to status overview
   */
  navigateToStatusOverview() {
    this.router.navigate(['/business-operator/overview']);
  }

  /**
   * Persist recent searches to localStorage
   */
  private persistRecentSearches(searches: string[]) {
    try {
      localStorage.setItem(this.RECENT_SEARCHES_KEY, JSON.stringify(searches));
    } catch (e) {
      console.error('Failed to persist recent searches:', e);
    }
  }
}
