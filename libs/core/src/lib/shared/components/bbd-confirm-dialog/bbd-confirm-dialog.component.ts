import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmDialogData {
  title: string;
  content: string;
  confirmText?: string;
  confirmTextB?: string;
  cancelText?: string;
}

@Component({
  selector: 'bbd-confirm-dialog',
  templateUrl: './bbd-confirm-dialog.component.html',
})
export class BBDConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BBDConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) { }

  onConfirm(confirmText = ''): void {
    if (!this.data.confirmText) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(confirmText ? confirmText : 'confirmA');
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
