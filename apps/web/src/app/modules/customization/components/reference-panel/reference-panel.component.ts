import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-reference-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './reference-panel.component.html',
  styleUrls: ['./reference-panel.component.scss'],
})
export class ReferencePanelComponent {
  @Input() isOpen = false;
  @Input() principles: any[] = [];
  @Input() processSteps: any[] = [];
  @Input() faqGroups: any[] = [];
  @Input() priceByCategory: any[] = [];
  @Input() equipmentByCategory: any[] = [];

  @Output() close = new EventEmitter<void>();

  private readonly expandedSectionsSignal = signal(new Set<string>());

  toggleSection(sectionId: string): void {
    const current = new Set(this.expandedSectionsSignal());
    if (current.has(sectionId)) {
      current.delete(sectionId);
    } else {
      current.add(sectionId);
    }
    this.expandedSectionsSignal.set(current);
  }

  isSectionExpanded(sectionId: string): boolean {
    return this.expandedSectionsSignal().has(sectionId);
  }
}
