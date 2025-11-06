import { Component, OnInit, Injector } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-glass-bg',
  templateUrl: './glass-bg.component.html',
})
export class GlassBgComponent extends BBDBaseComponent implements OnInit {
  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('init');
  }
}
