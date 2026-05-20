import { Injectable } from '@angular/core';
import {
  PRINCIPLES,
  PROCESS_STEPS,
  FAQ_GROUPS,
  PRICE_ITEMS,
  EQUIPMENT_ITEMS,
  NAV_SECTIONS,
  PrincipleCategory,
  ProcessStep,
  FaqGroup,
  PriceItem,
  EquipmentItem,
  NavSection,
} from './customization-reference.data';

@Injectable({
  providedIn: 'root',
})
export class CustomizationReferenceService {
  readonly navSections = NAV_SECTIONS;
  readonly principles = PRINCIPLES;
  readonly processSteps = PROCESS_STEPS;
  readonly faqGroups = FAQ_GROUPS;
  readonly equipmentItems = EQUIPMENT_ITEMS;

  getPriceByCategory(): { category: string; items: PriceItem[] }[] {
    return this._groupByCategory(PRICE_ITEMS);
  }

  getEquipmentByCategory(): { category: string; items: EquipmentItem[] }[] {
    return this._groupByCategory(EQUIPMENT_ITEMS);
  }

  private _groupByCategory<T extends { category: string }>(
    items: T[]
  ): { category: string; items: T[] }[] {
    const map = new Map<string, T[]>();
    items.forEach((item) => {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
    });
    return Array.from(map, ([category, items]) => ({ category, items }));
  }
}
