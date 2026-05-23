import { Component, OnInit } from '@angular/core';
import { CmsStore } from '../../core/state';
import { DashboardStats } from '../../core/models';
import { computed } from '@angular/core';
import { ChartData } from 'chart.js';
import { ChartDataHelper } from './utils/chart-data.helper';

@Component({
  selector: 'cms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardStats = this.store.dashboardStats;
  applications = this.store.applications;
  activeProject = this.store.activeProject;

  statusChartData!: ChartData;
  feeChartData!: ChartData;
  trendChartData!: ChartData;

  constructor(private store: CmsStore) {}

  ngOnInit() {
    // Load initial data (will be done by resolver in real implementation)
    this.updateCharts();
  }

  getProgressPercent(): number {
    const stats = this.dashboardStats();
    const total = stats.totalSubmitted;
    if (total === 0) return 0;
    const completed = stats.approved + stats.needsRework + stats.needsConfirmation;
    return Math.round((completed / total) * 100);
  }

  private updateCharts(): void {
    const stats = this.dashboardStats();
    this.statusChartData = ChartDataHelper.createStatusDistributionChart(stats);
    this.feeChartData = ChartDataHelper.createFeeAnalysisChart(stats);
    this.trendChartData = ChartDataHelper.createTrendChart();
  }
}
