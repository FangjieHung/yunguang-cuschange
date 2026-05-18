import { Component } from '@angular/core';
import { MOCK_BUYER } from '../../customization.data';

@Component({
  selector: 'app-my-unit',
  templateUrl: './my-unit.component.html',
  styleUrls: ['./my-unit.component.scss'],
})
export class MyUnitComponent {
  buyer = MOCK_BUYER;

  download(name: string): void {
    console.log('[UI-only] download requested:', name);
    alert(`(UI demo) ${name} 下載連結將串接後台`);
  }
}
