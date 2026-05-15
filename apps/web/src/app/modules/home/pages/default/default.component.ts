/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, OnInit } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';

import {
  PRINCIPLES,
  PROCESS_STEPS,
  FAQ_GROUPS,
  PRICE_ITEMS,
  EQUIPMENT_ITEMS,
  PrincipleCategory,
  ProcessStep,
  FaqGroup,
  PriceItem,
  EquipmentItem,
} from './default.data';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements OnInit {
  principles: PrincipleCategory[] = PRINCIPLES;
  processSteps: ProcessStep[] = PROCESS_STEPS;
  faqGroups: FaqGroup[] = FAQ_GROUPS;
  equipmentItems: EquipmentItem[] = EQUIPMENT_ITEMS;

  /** 費用表依 category 分組 */
  priceByCategory: { category: string; items: PriceItem[] }[] = [];

  /** 設備表依 category 分組 */
  equipmentByCategory: { category: string; items: EquipmentItem[] }[] = [];

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.priceByCategory = this._groupByCategory(PRICE_ITEMS);
    this.equipmentByCategory = this._groupEquipmentByCategory(EQUIPMENT_ITEMS);
  }

  private _groupByCategory(items: PriceItem[]): { category: string; items: PriceItem[] }[] {
    const map = new Map<string, PriceItem[]>();
    items.forEach((item) => {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
    });
    return Array.from(map, ([category, items]) => ({ category, items }));
  }

  private _groupEquipmentByCategory(
    items: EquipmentItem[]
  ): { category: string; items: EquipmentItem[] }[] {
    const map = new Map<string, EquipmentItem[]>();
    items.forEach((item) => {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
    });
    return Array.from(map, ([category, items]) => ({ category, items }));
  }
}
