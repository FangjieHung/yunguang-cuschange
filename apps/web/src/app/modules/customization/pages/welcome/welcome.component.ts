import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_BUYER } from '../../customization.data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  buyer = MOCK_BUYER;
  showFloorplan = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  toggleFloorplan(): void {
    this.showFloorplan = !this.showFloorplan;
  }

  confirmCorrect(): void {
    this.router.navigate(['/customization']);
  }

  reportIssue(): void {
    alert('業務聯絡：王業務 0912-345-678 / line: @yunguang-sales');
  }
}
