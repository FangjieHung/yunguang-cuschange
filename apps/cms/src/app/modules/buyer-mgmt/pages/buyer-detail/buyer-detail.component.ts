import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Buyer } from '../../../../core/models';
import { ApiService } from '../../../../core/api';

@Component({
  selector: 'cms-buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.scss'],
})
export class BuyerDetailComponent implements OnInit {
  buyer: Buyer | null = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const buyerId = this.route.snapshot.paramMap.get('id');
    if (buyerId) {
      this.loadBuyer(buyerId);
    }
  }

  loadBuyer(id: string) {
    this.isLoading = true;
    this.apiService.getBuyer(id).subscribe({
      next: (buyer) => {
        this.buyer = buyer || null;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load buyer', err);
        this.isLoading = false;
        this.router.navigate(['/buyer-mgmt']);
      },
    });
  }

  onResetPassword() {
    alert('密碼重設功能將在後續實現');
  }

  onBack() {
    this.router.navigate(['/buyer-mgmt']);
  }

  maskId(id: string): string {
    return id ? `****${id.slice(-4)}` : '-';
  }
}
