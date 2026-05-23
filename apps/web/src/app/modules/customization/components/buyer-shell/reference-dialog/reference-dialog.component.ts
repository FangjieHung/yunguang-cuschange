import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CustomizationReferenceService } from '../../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-reference-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './reference-dialog.component.html',
  styleUrls: ['./reference-dialog.component.scss'],
})
export class CustomizationReferenceDialogComponent {
  private readonly refService = inject(CustomizationReferenceService);

  principles = this.refService.principles;
  processSteps = this.refService.processSteps;
  faqGroups = this.refService.faqGroups;
  priceByCategory = this.refService.getPriceByCategory();
  equipmentByCategory = this.refService.getEquipmentByCategory();

  expandedSections = new Set<string>(['principles']);

  toggleSection(section: string): void {
    if (this.expandedSections.has(section)) {
      this.expandedSections.delete(section);
    } else {
      this.expandedSections.add(section);
    }
  }

  isSectionExpanded(section: string): boolean {
    return this.expandedSections.has(section);
  }
}
