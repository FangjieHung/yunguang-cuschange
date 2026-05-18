import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from '../../customization.data';

@Component({
  selector: 'item-row',
  template: `
    <div class="item-row">
      <div class="item-row__main">
        <div class="item-row__head">
          <span class="chip item-row__code">{{ item.code }}</span>
          <h4 class="item-row__name">{{ item.name }}</h4>
        </div>
        <div class="item-row__meta">
          <span class="item-row__meta-item">
            <mat-icon>place</mat-icon>{{ item.location }}
          </span>
          <span class="item-row__meta-item item-row__fee"
            [class.item-row__fee--positive]="item.fee > 0"
            [class.item-row__fee--negative]="item.fee < 0">
            <ng-container *ngIf="item.fee > 0">+NT$ {{ item.fee | number }} 加價</ng-container>
            <ng-container *ngIf="item.fee < 0">-NT$ {{ -item.fee | number }} 退料</ng-container>
            <ng-container *ngIf="item.fee === 0">標配</ng-container>
          </span>
        </div>
      </div>
      <div class="item-row__actions" *ngIf="editable">
        <button type="button" class="btn btn-ghost btn-sm" (click)="edit.emit(item)">編輯</button>
        <button type="button" class="btn btn-ghost btn-sm" (click)="remove.emit(item)">刪除</button>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class ItemRowComponent {
  @Input() item!: ListItem;
  @Input() editable = true;
  @Output() edit = new EventEmitter<ListItem>();
  @Output() remove = new EventEmitter<ListItem>();
}
