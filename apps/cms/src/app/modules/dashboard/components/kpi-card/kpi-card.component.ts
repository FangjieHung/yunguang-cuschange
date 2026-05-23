import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent {
  @Input() label: string = '';
  @Input() value: number | string = 0;
  @Input() icon: string = 'dashboard';
  @Input() variant: 'default' | 'warning' | 'success' | 'danger' | 'info' = 'default';
  @Input() subtext?: string;
}
