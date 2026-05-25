import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  path: string;
  badge?: number;
}

@Component({
  selector: 'tslmai-angular16-apps-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Input() isMobile = false;
  @Output() navigationClick = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    { label: '儀表板', icon: 'dashboard', path: '/dashboard' },
    { label: '專案管理', icon: 'folder', path: '/project-mgmt' },
    { label: '買家管理', icon: 'people', path: '/buyer-mgmt' },
    { label: '申請審核', icon: 'assignment_turned_in', path: '/application-review' },
    { label: '通知', icon: 'notifications', path: '/notifications', badge: 0 },
    { label: '報表', icon: 'assessment', path: '/reports' },
    { label: '快速查詢', icon: 'search', path: '/business-operator' },
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url.startsWith(path);
  }

  onMenuItemClick() {
    this.navigationClick.emit();
  }
}
