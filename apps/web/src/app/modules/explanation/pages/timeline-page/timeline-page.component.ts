import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '../../../../shared/services/customization-reference.service';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss'],
})
export class TimelinePageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly processSteps = signal(this.refService.processSteps);

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '客變流程 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/timeline`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '了解從簽約到施工的客變完整流程'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/timeline`);
  }
}
