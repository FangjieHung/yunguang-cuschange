import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'cms-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() title: string = '';
  @Input() type: 'line' | 'bar' | 'doughnut' = 'line';
  @Input() chartData!: ChartData;
  @Input() chartOptions?: ChartConfiguration['options'];

  constructor() {}

  ngOnInit() {
    if (!this.chartOptions) {
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      };
    }
  }
}
