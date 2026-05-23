import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { CustomizationReferenceService } from '../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);

  readonly principles = signal(this.refService.principles);
  readonly processSteps = signal(this.refService.processSteps);
  readonly faqGroups = signal(this.refService.faqGroups);
  readonly priceByCategory = signal(this.refService.getPriceByCategory());
  readonly equipmentByCategory = signal(this.refService.getEquipmentByCategory());

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
