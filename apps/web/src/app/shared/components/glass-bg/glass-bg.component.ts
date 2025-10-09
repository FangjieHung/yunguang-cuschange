import { Component, OnInit, Injector, Input } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-glass-bg',
  templateUrl: './glass-bg.component.html',
  styleUrls: ['./glass-bg.component.scss']
})
export class GlassBgComponent extends BBDBaseComponent implements OnInit {
//  @Input() routerLink: string | any[] = '';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('init');
  }
}
