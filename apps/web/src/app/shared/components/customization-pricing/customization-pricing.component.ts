import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceItem } from '../../services/customization-reference.data';

@Component({
  selector: 'app-customization-pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './customization-pricing.component.html',
  styleUrls: ['./customization-pricing.component.scss'],
})
export class CustomizationPricingComponent {
  @Input({ required: true }) priceByCategory!: { category: string; items: PriceItem[] }[];
}
