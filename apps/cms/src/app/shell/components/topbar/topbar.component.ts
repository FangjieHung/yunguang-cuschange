import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models';

@Component({
  selector: 'tslmai-angular16-apps-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TopBarComponent {
  @Input() currentUser: User | null = null;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  userMenuOpen = signal(false);
  notificationCount = signal(3);

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onToggleUserMenu() {
    this.userMenuOpen.update((value) => !value);
  }

  onLogout() {
    this.userMenuOpen.set(false);
    this.logout.emit();
  }

  closeUserMenu() {
    this.userMenuOpen.set(false);
  }
}
