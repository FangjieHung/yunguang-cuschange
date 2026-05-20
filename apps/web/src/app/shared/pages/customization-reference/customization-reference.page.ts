import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomizationReferenceService } from '../../services/customization-reference.service';
import { CustomizationPrinciplesComponent } from '../../components/customization-principles/customization-principles.component';
import { CustomizationTimelineComponent } from '../../components/customization-timeline/customization-timeline.component';
import { CustomizationFaqComponent } from '../../components/customization-faq/customization-faq.component';
import { CustomizationPricingComponent } from '../../components/customization-pricing/customization-pricing.component';
import { CustomizationEquipmentComponent } from '../../components/customization-equipment/customization-equipment.component';

@Component({
  selector: 'app-customization-reference',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CustomizationPrinciplesComponent,
    CustomizationTimelineComponent,
    CustomizationFaqComponent,
    CustomizationPricingComponent,
    CustomizationEquipmentComponent,
  ],
  templateUrl: './customization-reference.page.html',
  styleUrls: ['./customization-reference.page.scss'],
})
export class CustomizationReferenceComponent {
  private readonly refService = inject(CustomizationReferenceService);
  private readonly router = inject(Router);

  readonly navSections = this.refService.navSections;
  readonly principles = signal(this.refService.principles);
  readonly processSteps = signal(this.refService.processSteps);
  readonly faqGroups = signal(this.refService.faqGroups);
  readonly priceByCategory = signal(this.refService.getPriceByCategory());
  readonly equipmentByCategory = signal(this.refService.getEquipmentByCategory());

  readonly activeSection = signal<string | null>(null);

  navigateTo(sectionId: string): void {
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
