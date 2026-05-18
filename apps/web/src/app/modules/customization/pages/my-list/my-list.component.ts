import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MOCK_LIST, sumFees, ListItem, ListCategory } from '../../customization.data';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent {
  list: ListCategory[] = JSON.parse(JSON.stringify(MOCK_LIST));

  get summary() {
    return sumFees(this.list);
  }

  get totalItems(): number {
    return this.list.reduce((sum, cat) => sum + cat.items.length, 0);
  }

  constructor(private router: Router, private snack: MatSnackBar) {}

  editItem(item: ListItem): void {
    console.log('[UI-only] edit', item);
    this.snack.open(`(UI demo) 編輯 ${item.code}`, '關閉', { duration: 2000 });
  }

  removeItem(item: ListItem, cat: ListCategory): void {
    cat.items = cat.items.filter((i) => i.code !== item.code);
    if (cat.items.length === 0) {
      this.list = this.list.filter((c) => c.category !== cat.category);
    }
    this.snack.open(`已刪除 ${item.code}`, '復原', { duration: 3000 });
  }

  saveDraft(): void {
    this.snack.open('草稿已儲存', '關閉', { duration: 2500 });
  }

  goSubmit(): void {
    this.router.navigate(['/customization/submit']);
  }
}
