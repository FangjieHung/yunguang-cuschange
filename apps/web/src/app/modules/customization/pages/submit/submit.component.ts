import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_BUYER, MOCK_STATUS } from '../../customization.data';
import { CustomizationVersion, VersionService } from '../../services/version.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent {
  buyer = MOCK_BUYER;
  agreed = false;
  version: CustomizationVersion | null;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private versionService: VersionService
  ) {
    this.version = this.versionService.selectedVersion;
  }

  get totalDelta(): number {
    return this.version?.totalDelta || 0;
  }

  back(): void {
    this.router.navigate(['/customization/my-list']);
  }

  submit(): void {
    if (!this.agreed || !this.version) return;
    this.versionService.submitVersion(this.version.id, MOCK_STATUS.applyEndDate);
    alert(`已送出方案：${this.version.name}\n(UI demo - 實際送出邏輯待 API 完成)`);
    this.router.navigate(['/customization']);
  }
}
