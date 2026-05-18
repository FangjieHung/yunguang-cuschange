import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_WHOLE_HOUSE_ITEMS } from '../../customization.data';

@Component({
  selector: 'app-whole-house',
  templateUrl: './whole-house.component.html',
  styleUrls: ['./whole-house.component.scss'],
})
export class WholeHouseComponent {
  items = MOCK_WHOLE_HOUSE_ITEMS;

  constructor(private router: Router) {}

  open(itemId: string): void {
    this.router.navigate(['/customization/form/layer-1', itemId]);
  }
}
