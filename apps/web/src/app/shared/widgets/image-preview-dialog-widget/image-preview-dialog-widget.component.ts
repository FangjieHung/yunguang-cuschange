// image-preview-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'web-image-preview-dialog-widget',
  template: `
    <div mat-dialog-content>
      <img [src]="'data:image/jpeg;base64,' + data.imageBase64" 
           alt="預覽圖片"
           style="max-width: 100%; max-height: 80vh;">
    </div>
    <div mat-dialog-actions align="end">
      <button mat-dialog-close>關閉</button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0;
    }
  `]
})
export class ImagePreviewDialogWidgetComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageBase64: string }) {}
}