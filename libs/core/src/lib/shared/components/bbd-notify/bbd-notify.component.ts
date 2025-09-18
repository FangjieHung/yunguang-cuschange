import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'bbd-notify',
  templateUrl: './bbd-notify.component.html',
  styleUrls: ['./bbd-notify.component.scss']
})
export class BBDNotifyComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<BBDNotifyComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarMessageData) { }
}

export interface SnackbarMessageData {
  text: string;
  action?: string;
  icon?: string;
  iconStyle?: string;
}
