import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly faqGroups = signal(this.refService.faqGroups);

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '常見問題 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/faq`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '客變常見問題與解答'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/faq`);
  }
}
