import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import {
  CustomizationVersion,
  MAX_VERSIONS,
  SubmissionState,
  VersionService,
} from '../../services/version.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnDestroy {
  versions: CustomizationVersion[] = [];
  selectedId: string | null = null;
  submission: SubmissionState | null = null;
  readonly maxVersions = MAX_VERSIONS;
  private sub = new Subscription();

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private versionService: VersionService
  ) {
    this.sub.add(this.versionService.versions$.subscribe((v) => (this.versions = v)));
    this.sub.add(this.versionService.selectedId$.subscribe((id) => (this.selectedId = id)));
    this.sub.add(this.versionService.submission$.subscribe((s) => (this.submission = s)));
  }

  isSubmitted(v: CustomizationVersion): boolean {
    return !!this.submission && this.submission.versionId === v.id;
  }

  reviewStatusLabel(): string {
    if (!this.submission) return '';
    switch (this.submission.reviewStatus) {
      case 'review': return '審核中';
      case 'approved': return '已核准';
      case 'rework': return '需修正';
    }
  }

  canRemove(v: CustomizationVersion): boolean {
    // 送出中且還在 review 的版本不能刪
    if (!this.submission) return true;
    if (this.submission.versionId !== v.id) return true;
    return this.submission.reviewStatus !== 'review';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openPreview(v: CustomizationVersion): void {
    this.router.navigate(['/customization/version', v.id]);
  }

  choose(v: CustomizationVersion): void {
    this.versionService.setSelected(v.id);
    this.router.navigate(['/customization/submit']);
  }

  remove(v: CustomizationVersion): void {
    this.versionService.remove(v.id);
    this.snack.open(`已刪除 ${v.name}`, '關閉', { duration: 2500 });
  }

  goCreate(): void {
    this.router.navigate(['/customization/whole-house']);
  }

  formatTime(ts: number): string {
    const d = new Date(ts);
    const pad = (n: number) => `${n}`.padStart(2, '0');
    return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
}
