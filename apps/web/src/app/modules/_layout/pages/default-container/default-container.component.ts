/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss']
})

export class DefaultContainerComponent extends BBDBaseComponent {
  currentUrl = '';
  activeMenu: string | null = null;
  isMenuOpen = false;

  @ViewChild('snav') snav!: MatSidenav;
  @ViewChild('logoImg', { static: false }) logoRef!: ElementRef<HTMLImageElement>

  navList = [
    {
      label: '關於本會',
      children: [
        { label: '本會簡介', link: '/about' },
        { label: '組織章程', link: '/about/charter' },
        { label: '理監事名單', link: '/about/supervisor' }
      ]
    },
    {
      label: '最新消息',
      link: '/news/list'
    },
    {
      label: '學術活動',
      link: '/campaign/list'
    }
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.menu-wrap');
    if (!clickedInsideMenu) {
      this.activeMenu = null;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const logo = this.logoRef.nativeElement;

    if (scrollY > 50) {
      logo.classList.add('img-shrink');
    } else {
      logo.classList.remove('img-shrink');
    }
  }

  toggleSideMenu() {
    this.snav.toggle();
  }

  toggleNavbarMenu(label: string) {
    this.activeMenu = this.activeMenu === label ? null : label;
  }

  closeNavbarMenu() {
    this.activeMenu = null;
  }

  toggleSingleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
