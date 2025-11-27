import { Component, OnInit, Injector } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
})
export class SkeletonLoaderComponent extends BBDBaseComponent implements OnInit {
  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('init');
  }
}
