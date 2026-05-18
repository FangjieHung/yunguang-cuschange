import { Component, Input } from '@angular/core';
import { MOCK_BUYER, MOCK_STATUS, BuyerInfo, ApplicationStatus } from '../../customization.data';

@Component({
  selector: 'buyer-topbar',
  templateUrl: './buyer-topbar.component.html',
  styleUrls: ['./buyer-topbar.component.scss'],
})
export class BuyerTopbarComponent {
  @Input() buyer: BuyerInfo = MOCK_BUYER;
  @Input() status: ApplicationStatus = MOCK_STATUS;

  userMenuOpen = false;

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }
}
