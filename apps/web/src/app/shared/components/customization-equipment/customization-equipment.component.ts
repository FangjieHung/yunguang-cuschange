import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EquipmentItem } from '../../services/customization-reference.data';

@Component({
  selector: 'app-customization-equipment',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  templateUrl: './customization-equipment.component.html',
  styleUrls: ['./customization-equipment.component.scss'],
})
export class CustomizationEquipmentComponent {
  @Input({ required: true }) equipmentByCategory!: { category: string; items: EquipmentItem[] }[];
}
