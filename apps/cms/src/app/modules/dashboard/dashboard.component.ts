import { Component, OnInit } from '@angular/core';
import { CmsStore } from '../../core/state';
import { DashboardStats } from '../../core/models';
import { computed } from '@angular/core';

@Component({
  selector: 'cms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardStats = this.store.dashboardStats;
  applications = this.store.applications;
  activeProject = this.store.activeProject;

  constructor(private store: CmsStore) {}

  ngOnInit() {
    // Load initial data (will be done by resolver in real implementation)
  }

  getProgressPercent(): number {
    const stats = this.dashboardStats();
    const total = stats.totalSubmitted;
    if (total === 0) return 0;
    const completed = stats.approved + stats.needsRework + stats.needsConfirmation;
    return Math.round((completed / total) * 100);
  }
}
