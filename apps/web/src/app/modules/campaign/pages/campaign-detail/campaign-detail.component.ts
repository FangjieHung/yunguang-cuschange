import { Component, OnInit, Injector } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent extends BBDBaseComponent implements OnInit {
  campainDate: Date = new Date();

  campaignDetail = [
    {
      signupDate: '2025.11.23',
      title: '宜蘭響應114年10月1日起公費新冠流感疫苗研討會暨宣導活動',
      sort: '學會公告'
    }
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

}