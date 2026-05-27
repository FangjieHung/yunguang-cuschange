import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-principles-page',
  templateUrl: './principles-page.component.html',
  styleUrls: ['./principles-page.component.scss'],
})
export class PrinciplesPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly principles = signal(this.refService.principles);

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '客變原則 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/principles`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '瞭解客變規則、限制與施工範圍'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/principles`);
  }
}
