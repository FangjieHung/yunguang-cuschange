import { ChartData } from 'chart.js';
import { DashboardStats } from '../../../core/models';

export class ChartDataHelper {
  static createStatusDistributionChart(stats: DashboardStats): ChartData {
    return {
      labels: ['已批准', '審核中', '需返工', '待複確認'],
      datasets: [
        {
          label: '申請狀態分布',
          data: [
            stats.approved,
            stats.underReview,
            stats.needsRework,
            stats.needsConfirmation,
          ],
          backgroundColor: [
            '#4caf50', // success green
            '#ffc107', // warning yellow
            '#f44336', // danger red
            '#2196f3', // info blue
          ],
          borderColor: [
            '#4caf50',
            '#ffc107',
            '#f44336',
            '#2196f3',
          ],
          borderWidth: 2,
        },
      ],
    };
  }

  static createFeeAnalysisChart(stats: DashboardStats): ChartData {
    return {
      labels: ['加價費用', '退費費用'],
      datasets: [
        {
          label: '費用分析 (NT$)',
          data: [stats.totalAddOn, stats.totalRefund],
          backgroundColor: ['#4caf50', '#f44336'],
          borderColor: ['#4caf50', '#f44336'],
          borderWidth: 1,
        },
      ],
    };
  }

  static createTrendChart(): ChartData {
    // Mock trend data - would be replaced with real API data
    const months = ['1月', '2月', '3月', '4月', '5月', '6月'];
    const submitted = [12, 15, 18, 21, 24, 28];
    const approved = [5, 8, 12, 15, 18, 22];

    return {
      labels: months,
      datasets: [
        {
          label: '已送出',
          data: submitted,
          borderColor: '#3b6cf2',
          backgroundColor: 'rgba(59, 108, 242, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: '已批准',
          data: approved,
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }
}
