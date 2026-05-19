import { Component } from '@angular/core';
import {
  MOCK_BUYER,
  MOCK_STATUS,
  MOCK_NOTIFICATIONS,
  MOCK_DEADLINE_ALERTS,
} from '../../customization.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  buyer = MOCK_BUYER;
  status = MOCK_STATUS;
  notifications = MOCK_NOTIFICATIONS;
  alerts = MOCK_DEADLINE_ALERTS;

  quickEntries = [
    { icon: 'chair', label: '客變設定', sub: '進入全室與空間設定', route: '/customization/whole-house' },
    { icon: 'fact_check', label: '我的清單', sub: '已申請項目彙整', route: '/customization/my-list' },
    { icon: 'folder_zip', label: '圖面包下載', sub: '提供設計師使用', route: '/customization/designer-pack' },
  ];

  download(name: string): void {
    console.log('[UI-only] download requested:', name);
    alert(`(UI demo) ${name} 下載連結將串接後台`);
  }
}
