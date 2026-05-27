import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss'],
})
export class PricingPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly priceByCategory = signal(this.refService.getPriceByCategory());

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '費用表 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/pricing`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '客變項目費用一覽表'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/pricing`);
  }
}
