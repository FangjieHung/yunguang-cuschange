import { Component, Injector } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
})
export class SkeletonLoaderComponent extends BBDBaseComponent {
  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  // ngOnInit(): void { }
}
