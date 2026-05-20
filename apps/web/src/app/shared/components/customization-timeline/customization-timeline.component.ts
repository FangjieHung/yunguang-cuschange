import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStep } from '../../services/customization-reference.data';

@Component({
  selector: 'app-customization-timeline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './customization-timeline.component.html',
  styleUrls: ['./customization-timeline.component.scss'],
})
export class CustomizationTimelineComponent {
  @Input({ required: true }) processSteps!: ProcessStep[];
}
