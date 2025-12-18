import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

export interface Committee {
  category: string;
  Commissioner: string;
  Secretary: string;
}

@Component({
  selector: 'web-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent extends BBDBaseComponent implements OnInit {

  Committee = [
    {
      category: '學術研究',
      Commissioner: '郭律成',
      Secretary: '朱學緯',
    },
    {
      category: '國際事務',
      Commissioner: '郭錦輯',
      Secretary: '朱學緯',
    },
    {
      category: '公關聯誼',
      Commissioner: '王敦仁',
      Secretary: '何文育',
    },
    {
      category: '會務發展',
      Commissioner: '謝文祥',
      Secretary: '蔡雅雯',
    },
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('committee component init');
  }


}
