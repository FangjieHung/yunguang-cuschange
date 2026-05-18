import { Component } from '@angular/core';
import { BUYER_NAV } from '../../customization.data';

@Component({
  selector: 'buyer-shell',
  templateUrl: './buyer-shell.component.html',
  styleUrls: ['./buyer-shell.component.scss'],
})
export class BuyerShellComponent {
  nav = BUYER_NAV;
}
