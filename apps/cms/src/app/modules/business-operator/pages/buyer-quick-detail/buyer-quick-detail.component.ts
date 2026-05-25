import { Component, OnInit, Signal, WritableSignal, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { Buyer } from '../../../../core/models';

@Component({
  selector: 'cms-buyer-quick-detail',
  templateUrl: './buyer-quick-detail.component.html',
  styleUrls: ['./buyer-quick-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyerQuickDetailComponent implements OnInit {
  buyer: WritableSignal<Buyer | undefined> = signal(undefined);
  isLoading: WritableSignal<boolean> = signal(true);

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.loadBuyer(params['id']);
      }
    });
  }

  /**
   * Load buyer details from API
   */
  private loadBuyer(buyerId: string) {
    this.isLoading.set(true);
    this.apiService.getBuyer(buyerId).subscribe({
      next: (buyer) => {
        this.buyer.set(buyer);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load buyer:', err);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Navigate to full buyer profile
   */
  navigateToFullProfile() {
    const buyerId = this.buyer()?.id;
    if (buyerId) {
      this.router.navigate(['/buyer-mgmt/buyer', buyerId]);
    }
  }

  /**
   * Navigate to create new application for this buyer
   */
  navigateToNewApplication() {
    const buyerId = this.buyer()?.id;
    if (buyerId) {
      this.router.navigate(['/application-review/new', { buyerId }]);
    }
  }

  /**
   * Navigate back
   */
  goBack() {
    this.router.navigate(['/business-operator']);
  }
}
