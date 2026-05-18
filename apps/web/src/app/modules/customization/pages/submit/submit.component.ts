import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  MOCK_BUYER,
  MOCK_LIST,
  sumFees,
} from '../../customization.data';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent {
  buyer = MOCK_BUYER;
  list = MOCK_LIST;
  agreed = false;

  get summary() {
    return sumFees(this.list);
  }

  constructor(private router: Router, private dialog: MatDialog) {}

  back(): void {
    this.router.navigate(['/customization/my-list']);
  }

  submit(): void {
    if (!this.agreed) return;
    alert('您的申請已送出，將進入審核流程。\n(UI demo - 實際送出邏輯待 API 完成)');
    this.router.navigate(['/customization']);
  }
}
