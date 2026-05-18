import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-tile',
  template: `
    <div class="info-tile">
      <span class="info-tile__label">{{ label }}</span>
      <span class="info-tile__value">{{ value }}</span>
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class InfoTileComponent {
  @Input() label = '';
  @Input() value = '';
}
