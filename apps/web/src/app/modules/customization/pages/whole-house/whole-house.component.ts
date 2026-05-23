import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import {
  MOCK_MATERIAL_CATEGORIES,
  MaterialCategory,
  MaterialOption,
} from '../../customization.data';
import {
  CustomizationVersion,
  MAX_VERSIONS,
  VersionService,
} from '../../services/version.service';

@Component({
  selector: 'app-whole-house',
  templateUrl: './whole-house.component.html',
  styleUrls: ['./whole-house.component.scss'],
})
export class WholeHouseComponent implements OnDestroy {
  categories: MaterialCategory[] = MOCK_MATERIAL_CATEGORIES;
  selections: Record<string, string> = {};
  previewVisible = false;
  previewScene: CustomizationVersion['scene'] = 'scene1';

  versions: CustomizationVersion[] = [];
  readonly maxVersions = MAX_VERSIONS;

  private sub = new Subscription();

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private versionService: VersionService
  ) {
    this.categories.forEach((cat) => {
      const def = cat.options.find((o) => o.isDefault) || cat.options[0];
      if (def) this.selections[cat.id] = def.id;
    });

    this.sub.add(
      this.versionService.versions$.subscribe((v) => (this.versions = v))
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  select(categoryId: string, optionId: string): void {
    this.selections[categoryId] = optionId;
  }

  isSelected(categoryId: string, optionId: string): boolean {
    return this.selections[categoryId] === optionId;
  }

  selectedOption(category: MaterialCategory): MaterialOption | undefined {
    const id = this.selections[category.id];
    return category.options.find((o) => o.id === id);
  }

  get totalDelta(): number {
    return this.categories.reduce((sum, cat) => {
      const opt = this.selectedOption(cat);
      return sum + (opt?.priceDelta || 0);
    }, 0);
  }

  get isFull(): boolean {
    return this.versions.length >= this.maxVersions;
  }

  showPreview(): void {
    this.previewVisible = true;
    setTimeout(() => {
      document.querySelector('.whole-house-preview')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  }

  hidePreview(): void {
    this.previewVisible = false;
  }

  saveVersion(): void {
    const result = this.versionService.saveSnapshot(this.selections, this.previewScene);
    if (!result.ok) {
      this.snack.open(`已達上限（最多 ${this.maxVersions} 個版本），請先刪除舊版本。`, '前往清單', {
        duration: 4000,
      })
        .onAction()
        .subscribe(() => this.router.navigate(['/customization/my-list']));
      return;
    }
    this.snack.open(`已儲存 ${result.version.name}，可前往比較清單。`, '查看清單', { duration: 3500 })
      .onAction()
      .subscribe(() => this.router.navigate(['/customization/my-list']));
  }
}
