import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MOCK_DESIGNER_PACK, MOCK_DESIGNER_PACK_ZIP } from '../../customization.data';

@Component({
  selector: 'app-designer-pack',
  templateUrl: './designer-pack.component.html',
  styleUrls: ['./designer-pack.component.scss'],
})
export class DesignerPackComponent {
  files = MOCK_DESIGNER_PACK;
  zip = MOCK_DESIGNER_PACK_ZIP;

  constructor(private snack: MatSnackBar) {}

  download(name: string): void {
    console.log('[UI-only] download:', name);
    this.snack.open(`(UI demo) 開始下載 ${name}`, '關閉', { duration: 2000 });
  }
}
