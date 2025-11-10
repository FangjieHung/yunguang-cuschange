import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent extends BBDBaseComponent {
  @Input() params: { length: number, pageSize: number, pageIndex: number } | null = null;
  @Output() pageIndexChange = new EventEmitter();

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  onPageIndexChange(e: PageEvent) {
    this.pageIndexChange.emit(e.pageIndex + 1);
  }

}
