import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqGroup } from '../../services/customization-reference.data';

@Component({
  selector: 'app-customization-faq',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './customization-faq.component.html',
  styleUrls: ['./customization-faq.component.scss'],
})
export class CustomizationFaqComponent {
  @Input({ required: true }) faqGroups!: FaqGroup[];
}
