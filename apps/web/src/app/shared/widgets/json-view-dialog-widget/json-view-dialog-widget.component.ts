/* eslint-disable @typescript-eslint/no-explicit-any */
// image-preview-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'web-json-view-dialog-widget',
  template: `
    <h2 mat-dialog-title>JSON 內容</h2>
  <mat-dialog-content>
    <pre>{{ data | json }}</pre>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-dialog-close>關閉</button>
  </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0;
    }
  `]
})
export class JsonViewDialogWidgetComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}