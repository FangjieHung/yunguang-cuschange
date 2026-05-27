import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.scss'],
})
export class EquipmentPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly equipmentByCategory = signal(this.refService.getEquipmentByCategory());

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '設備表 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/equipment`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '標準設備與升級選項'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/equipment`);
  }
}
