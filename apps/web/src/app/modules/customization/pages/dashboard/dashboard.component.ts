import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  MOCK_BUYER,
  MOCK_STATUS,
  MOCK_NOTIFICATIONS,
  MOCK_DEADLINE_ALERTS,
} from '../../customization.data';
import {
  CustomizationVersion,
  SubmissionState,
  VersionService,
} from '../../services/version.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  buyer = MOCK_BUYER;
  status = MOCK_STATUS;
  notifications = MOCK_NOTIFICATIONS;
  alerts = MOCK_DEADLINE_ALERTS;

  submission: SubmissionState | null = null;
  submittedVersion: CustomizationVersion | null = null;
  editable = true;

  private sub = new Subscription();

  quickEntries = [
    { icon: 'chair', label: '客變設定', sub: '進入全室與空間設定', route: '/customization/whole-house' },
    { icon: 'fact_check', label: '比較清單', sub: '已儲存方案彙整', route: '/customization/my-list' },
    { icon: 'folder_zip', label: '圖面包下載', sub: '提供設計師使用', route: '/customization/designer-pack' },
  ];

  constructor(private router: Router, private versionService: VersionService) {
    this.sub.add(
      this.versionService.submission$.subscribe((s) => {
        this.submission = s;
        this.submittedVersion = this.versionService.submittedVersion;
        this.editable = this.versionService.isEditable();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  formatDateTime(ts: number): string {
    const d = new Date(ts);
    const pad = (n: number) => `${n}`.padStart(2, '0');
    return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  reviewStatusLabel(): string {
    if (!this.submission) return '';
    switch (this.submission.reviewStatus) {
      case 'review': return '審核中';
      case 'approved': return '已核准';
      case 'rework': return '需修正';
    }
  }

  goPickFromSaved(): void {
    this.router.navigate(['/customization/my-list']);
  }

  goCreateNew(): void {
    this.router.navigate(['/customization/whole-house']);
  }

  download(name: string): void {
    console.log('[UI-only] download requested:', name);
    alert(`(UI demo) ${name} 下載連結將串接後台`);
  }
}
