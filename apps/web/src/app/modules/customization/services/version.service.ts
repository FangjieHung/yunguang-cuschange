import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MOCK_MATERIAL_CATEGORIES, MaterialCategory, MaterialOption } from '../customization.data';

export const MAX_VERSIONS = 5;
const STORAGE_KEY = 'cust.versions.v1';
const SELECTED_KEY = 'cust.versions.selectedId';
const SUBMISSION_KEY = 'cust.versions.submission';

export type ReviewStatus = 'review' | 'approved' | 'rework';

export interface SubmissionState {
  versionId: string;
  submittedAt: number;
  reviewStatus: ReviewStatus;
  applyDeadline: string; // ISO date (YYYY-MM-DD)
}

export interface VersionSelectionEntry {
  categoryId: string;
  categoryTitle: string;
  optionId: string;
  optionName: string;
  optionImage: string;
  priceDelta: number;
}

export interface CustomizationVersion {
  id: string;
  name: string;
  createdAt: number;
  scene: 'scene1' | 'scene2' | 'scene3';
  totalDelta: number;
  entries: VersionSelectionEntry[];
}

@Injectable({ providedIn: 'root' })
export class VersionService {
  private readonly _versions$ = new BehaviorSubject<CustomizationVersion[]>(this.loadVersions());
  private readonly _selectedId$ = new BehaviorSubject<string | null>(
    typeof localStorage !== 'undefined' ? localStorage.getItem(SELECTED_KEY) : null
  );
  private readonly _submission$ = new BehaviorSubject<SubmissionState | null>(
    this.loadSubmission()
  );

  readonly versions$: Observable<CustomizationVersion[]> = this._versions$.asObservable();
  readonly selectedId$: Observable<string | null> = this._selectedId$.asObservable();
  readonly submission$: Observable<SubmissionState | null> = this._submission$.asObservable();

  get versions(): CustomizationVersion[] {
    return this._versions$.value;
  }

  get selectedId(): string | null {
    return this._selectedId$.value;
  }

  get selectedVersion(): CustomizationVersion | null {
    const id = this.selectedId;
    if (!id) return null;
    return this.versions.find((v) => v.id === id) || null;
  }

  get isFull(): boolean {
    return this.versions.length >= MAX_VERSIONS;
  }

  getById(id: string): CustomizationVersion | undefined {
    return this.versions.find((v) => v.id === id);
  }

  get submission(): SubmissionState | null {
    return this._submission$.value;
  }

  get submittedVersion(): CustomizationVersion | null {
    const s = this.submission;
    if (!s) return null;
    return this.getById(s.versionId) || null;
  }

  /**
   * 是否還在「可修改」狀態：尚未審核通過且未過期
   */
  isEditable(now: Date = new Date()): boolean {
    const s = this.submission;
    if (!s) return true; // 尚未送出
    if (s.reviewStatus !== 'review') return false; // 已核准 / 需修正都禁止編輯入口（依需求調整）
    const deadline = new Date(`${s.applyDeadline}T23:59:59`);
    return now <= deadline;
  }

  /**
   * 標記某版本為「已送出」
   */
  submitVersion(versionId: string, applyDeadline: string): SubmissionState | null {
    if (!this.getById(versionId)) return null;
    const state: SubmissionState = {
      versionId,
      submittedAt: Date.now(),
      reviewStatus: 'review',
      applyDeadline,
    };
    this._submission$.next(state);
    this.persistSubmission(state);
    return state;
  }

  /**
   * 取消送出（重新編輯時可呼叫，依需求保留）
   */
  withdrawSubmission(): void {
    this._submission$.next(null);
    this.persistSubmission(null);
  }

  /**
   * 從目前 whole-house 的選擇結果產出版本快照。
   */
  buildEntriesFromSelections(
    selections: Record<string, string>,
    categories: MaterialCategory[] = MOCK_MATERIAL_CATEGORIES
  ): { entries: VersionSelectionEntry[]; totalDelta: number } {
    const entries: VersionSelectionEntry[] = [];
    let totalDelta = 0;
    categories.forEach((cat) => {
      const optId = selections[cat.id];
      const opt: MaterialOption | undefined = cat.options.find((o) => o.id === optId);
      if (!opt) return;
      const price = opt.priceDelta || 0;
      totalDelta += price;
      entries.push({
        categoryId: cat.id,
        categoryTitle: cat.title,
        optionId: opt.id,
        optionName: opt.name,
        optionImage: opt.image,
        priceDelta: price,
      });
    });
    return { entries, totalDelta };
  }

  saveSnapshot(
    selections: Record<string, string>,
    scene: CustomizationVersion['scene'] = 'scene1'
  ): { ok: true; version: CustomizationVersion } | { ok: false; reason: 'limit' } {
    if (this.isFull) return { ok: false, reason: 'limit' };
    const { entries, totalDelta } = this.buildEntriesFromSelections(selections);
    const next = this.versions.slice();
    const version: CustomizationVersion = {
      id: this.genId(),
      name: `方案 #${next.length + 1}`,
      createdAt: Date.now(),
      scene,
      totalDelta,
      entries,
    };
    next.push(version);
    this.commit(next);
    return { ok: true, version };
  }

  remove(id: string): void {
    // 已送出且仍在審核中的版本不允許刪除
    const s = this.submission;
    if (s && s.versionId === id && s.reviewStatus === 'review') {
      return;
    }
    const next = this.versions.filter((v) => v.id !== id);
    // Renumber names so they stay 1..n
    next.forEach((v, idx) => (v.name = `方案 #${idx + 1}`));
    this.commit(next);
    if (this.selectedId === id) this.setSelected(null);
  }

  private loadSubmission(): SubmissionState | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const raw = localStorage.getItem(SUBMISSION_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.versionId === 'string') return parsed;
      return null;
    } catch {
      return null;
    }
  }

  private persistSubmission(state: SubmissionState | null): void {
    if (typeof localStorage === 'undefined') return;
    try {
      if (state) localStorage.setItem(SUBMISSION_KEY, JSON.stringify(state));
      else localStorage.removeItem(SUBMISSION_KEY);
    } catch {
      /* ignore */
    }
  }

  setSelected(id: string | null): void {
    this._selectedId$.next(id);
    if (typeof localStorage !== 'undefined') {
      if (id) localStorage.setItem(SELECTED_KEY, id);
      else localStorage.removeItem(SELECTED_KEY);
    }
  }

  private commit(versions: CustomizationVersion[]): void {
    this._versions$.next(versions);
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
      } catch {
        /* ignore quota */
      }
    }
  }

  private loadVersions(): CustomizationVersion[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private genId(): string {
    return `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  }
}
