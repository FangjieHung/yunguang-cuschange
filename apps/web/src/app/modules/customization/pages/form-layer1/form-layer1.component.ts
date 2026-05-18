import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MOCK_FLOOR_OPTIONS,
  MOCK_WHOLE_HOUSE_ITEMS,
  FloorOption,
  WholeHouseItem,
} from '../../customization.data';

@Component({
  selector: 'app-form-layer1',
  templateUrl: './form-layer1.component.html',
  styleUrls: ['./form-layer1.component.scss'],
})
export class FormLayer1Component implements OnInit {
  itemId = '';
  item: WholeHouseItem | undefined;
  options: FloorOption[] = MOCK_FLOOR_OPTIONS;
  selectedId: string | null = 'floor-a'; // 預選標配

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('itemId') || '';
    this.item = MOCK_WHOLE_HOUSE_ITEMS.find((i) => i.id === this.itemId);
  }

  select(id: string): void {
    this.selectedId = id;
  }

  cancel(): void {
    this.router.navigate(['/customization/whole-house']);
  }

  addToList(): void {
    if (!this.selectedId) return;
    const option = this.options.find((o) => o.id === this.selectedId);
    this.snack.open(`已加入清單：${this.item?.title || ''} - ${option?.name || ''}`, '查看清單', {
      duration: 3500,
    }).onAction().subscribe(() => this.router.navigate(['/customization/my-list']));
  }
}
