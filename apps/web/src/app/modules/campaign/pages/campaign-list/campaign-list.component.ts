import { Component, OnInit, Injector } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent extends BBDBaseComponent implements OnInit {
  sorts: string[] = ['所有課程', '研討會', '訓練課程', '工作坊'];
  focusedIndex: number | null = null;
  campainDate: Date = new Date();

  campaignList = [
    {
      signupDate: '2025.11.23',
      title: '宜蘭響應114年10月1日起公費新冠流感疫苗研討會暨宣導活動',
      sort: '學會公告'
    },
    {
      signupDate: '2025.10.15',
      title: '感染管制員甄試核心課程研習班（台中場）',
      sort: '活動訊息'
    },
    {
      signupDate: '2025.09.30',
      title: '114年長照機構感染管制查核工作坊-新北場',
      sort: '學會公告'
    },
    {
      signupDate: '2025.08.20',
      title: '113年長照機構嬰幼兒呼吸道疾病感染管制實務研討會',
      sort: '系統公告'
    },
    {
      signupDate: '2025.07.10',
      title: '114年長照機構感染管制查核工作坊-台中中山場',
      sort: '學會公告'
    }
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  setFocused(index: number) {
    this.focusedIndex = index;
  }

  ngOnInit(): void {
    console.log();
  }
}