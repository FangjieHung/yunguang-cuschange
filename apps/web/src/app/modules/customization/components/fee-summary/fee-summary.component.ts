import { Component, Input } from '@angular/core';

@Component({
  selector: 'fee-summary',
  template: `
    <div class="fee-summary">
      <div class="fee-summary__head">
        <mat-icon>receipt_long</mat-icon>
        <h3>費用摘要</h3>
      </div>
      <ul class="fee-summary__list">
        <li class="fee-summary__row">
          <span>加價合計</span>
          <span class="fee-summary__amount fee-summary__amount--add">+NT$ {{ addOn | number }}</span>
        </li>
        <li class="fee-summary__row">
          <span>退款合計</span>
          <span class="fee-summary__amount fee-summary__amount--refund">-NT$ {{ refund | number }}</span>
        </li>
        <li class="fee-summary__row fee-summary__row--total">
          <span>淨支出</span>
          <span class="fee-summary__amount"
            [class.fee-summary__amount--add]="net > 0"
            [class.fee-summary__amount--refund]="net < 0">
            <ng-container *ngIf="net >= 0">+NT$ {{ net | number }}</ng-container>
            <ng-container *ngIf="net < 0">-NT$ {{ -net | number }}</ng-container>
          </span>
        </li>
      </ul>
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class FeeSummaryComponent {
  @Input() addOn = 0;
  @Input() refund = 0;
  get net(): number {
    return this.addOn - this.refund;
  }
}
