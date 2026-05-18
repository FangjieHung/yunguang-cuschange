import { Component, Input } from '@angular/core';

@Component({
  selector: 'empty-state',
  template: `
    <div class="empty-state">
      <mat-icon class="empty-state__icon">{{ icon || 'inbox' }}</mat-icon>
      <h3 class="empty-state__title">{{ title }}</h3>
      <p class="empty-state__message" *ngIf="message">{{ message }}</p>
      <a *ngIf="ctaLabel && ctaRoute" [routerLink]="ctaRoute" class="btn btn-primary">
        {{ ctaLabel }}
      </a>
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class EmptyStateComponent {
  @Input() icon = 'inbox';
  @Input() title = '';
  @Input() message = '';
  @Input() ctaLabel = '';
  @Input() ctaRoute = '';
}
