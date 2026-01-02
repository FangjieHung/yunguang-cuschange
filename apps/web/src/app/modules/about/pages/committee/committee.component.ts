import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

export interface Committee {
  category: string;
  Chairperson: string;
  Secretary: string;
  Commissioner: string[];
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
      Chairperson: '郭律成',
      Secretary: '朱學緯',
      Commissioner: [
        '吳俊忠', '黃昱璁', '王唯堯', '陳一心', '賴志政', '施宏謀', '李岱芬', '吳亞倫', '游雅言'
      ]
    },
    {
      category: '國際事務',
      Chairperson: '郭錦輯',
      Secretary: '朱學緯',
      Commissioner: [
        '余志強', '王唯堯', '林正修'
      ]
    },
    {
      category: '公關聯誼',
      Chairperson: '王敦仁',
      Secretary: '何文育',
      Commissioner: [
        '謝文祥', '李岱芬', '余志強'
      ]
    },
    {
      category: '會務發展',
      Chairperson: '謝文祥',
      Secretary: '蔡雅雯',
      Commissioner: [
        '郭律成', '施宏謀', '林進福', '林正修', '王敦仁', '賴靜憶'
      ]
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
