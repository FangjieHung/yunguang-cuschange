import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PrincipleCategory } from '../../services/customization-reference.data';

@Component({
  selector: 'app-customization-principles',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  templateUrl: './customization-principles.component.html',
  styleUrls: ['./customization-principles.component.scss'],
})
export class CustomizationPrinciplesComponent {
  @Input({ required: true }) principles!: PrincipleCategory[];
}
