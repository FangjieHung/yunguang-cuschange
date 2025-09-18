import { Component, OnInit, Injector, Input } from '@angular/core';

// Custom packages
import {
  BBDBaseComponent
} from '@core/shared';

@Component({
  selector: 'web-result-empty',
  templateUrl: './result-empty.component.html',
  styleUrls: ['./result-empty.component.scss']
})
export class ResultEmptyComponent extends BBDBaseComponent implements OnInit {
  @Input() message = '目前尚無資料';

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('init');
  }
}
