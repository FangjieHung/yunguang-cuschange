import { Component, OnInit, Injector} from '@angular/core';
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent extends BBDBaseComponent implements OnInit {
  sorts: string[] = ['所有消息', '學會公告', '活動訊息', '系統公告'];
  focusedIndex: number | null = null;

  newsList = [
    {
      date: '2025.11.23',
      title: '呼吸道細胞融合病毒疫苗使用建議',
      sort: '學會公告'
    },
    {
      date: '2025.10.15',
      title: '2025年度醫療科技創新論壇開放報名',
      sort: '活動訊息'
    },
    {
      date: '2025.09.30',
      title: '新版臨床指引正式發布，即日起生效',
      sort: '學會公告'
    },
    {
      date: '2025.08.20',
      title: '會員系統維護通知：8/25 晚間暫停服務',
      sort: '系統公告'
    },
    {
      date: '2025.07.10',
      title: '醫學期刊投稿流程更新說明',
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
