import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsStore } from '../../../../core/state';
import { ApiService } from '../../../../core/api';
import { Buyer } from '../../../../core/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cms-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.scss'],
})
export class BuyerListComponent implements OnInit {
  buyers: Buyer[] = [];
  filteredBuyers: Buyer[] = [];
  activeProject = this.store.activeProject;
  isLoading = false;
  searchControl = new FormControl('');

  constructor(
    private store: CmsStore,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBuyers();
    this.setupSearch();
  }

  loadBuyers() {
    const projectId = this.activeProject()?.id;
    if (!projectId) return;

    this.isLoading = true;
    this.apiService.getBuyers(projectId).subscribe({
      next: (buyers) => {
        this.buyers = buyers;
        this.filteredBuyers = buyers;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load buyers', err);
        this.isLoading = false;
      },
    });
  }

  setupSearch() {
    this.searchControl.valueChanges.subscribe((query) => {
      if (!query) {
        this.filteredBuyers = this.buyers;
      } else {
        const lowerQuery = query.toLowerCase();
        this.filteredBuyers = this.buyers.filter(
          (b) =>
            b.ownerName.toLowerCase().includes(lowerQuery) ||
            b.unitNo.toLowerCase().includes(lowerQuery) ||
            (b.email && b.email.toLowerCase().includes(lowerQuery))
        );
      }
    });
  }

  onViewBuyer(buyer: Buyer) {
    this.router.navigate([`/buyer-mgmt/${buyer.id}`]);
  }

  onImportBuyers() {
    this.router.navigate(['/buyer-mgmt/import']);
  }
}
