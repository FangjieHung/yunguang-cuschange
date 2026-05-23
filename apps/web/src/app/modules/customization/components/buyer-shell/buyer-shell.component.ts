import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BUYER_NAV } from '../../customization.data';
import { CustomizationReferenceDialogComponent } from './reference-dialog/reference-dialog.component';

@Component({
  selector: 'buyer-shell',
  templateUrl: './buyer-shell.component.html',
  styleUrls: ['./buyer-shell.component.scss'],
})
export class BuyerShellComponent {
  private readonly dialog = inject(MatDialog);

  nav = BUYER_NAV;

  openReferenceDialog(): void {
    this.dialog.open(CustomizationReferenceDialogComponent, {
      width: '80%',
      maxWidth: '1000px',
      height: '90vh',
    });
  }
}
