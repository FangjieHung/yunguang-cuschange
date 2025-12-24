import { Component, Input } from '@angular/core';

@Component({
  selector: 'bbd-loading-indicator',
  styleUrls: ['./bbd-loading-indicator.component.scss'],
  templateUrl: './bbd-loading-indicator.component.html',
})
export class BBDLoadingIndicatorComponent {
  @Input() type: 'spinner' | 'skeleton' = 'spinner';
  @Input() message = '資料讀取中...';
  // @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
