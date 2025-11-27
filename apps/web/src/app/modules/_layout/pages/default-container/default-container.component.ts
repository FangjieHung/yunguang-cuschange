/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, inject, ViewChild, HostListener, ElementRef, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppStoreApiServ } from '@core/services';
import { AppObjectStoreCodes, OrgContactJto } from '@core/models';

@Component({
  selector: 'web-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss']
})

export class DefaultContainerComponent extends BBDBaseComponent implements OnInit {
  currentUrl = '';
  activeMenu: string | null = null;
  isMenuOpen = false;

  @ViewChild('snav') snav!: MatSidenav;
  @ViewChild('logoImg', { static: false }) logoRef!: ElementRef<HTMLImageElement>

  private _appStoreApiServ = inject(AppStoreApiServ);
  response: OrgContactJto | null = null;

  navList = [
    {
      label: '關於本會',
      children: [
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

  accountMenu = [
    { label: '我的課程', link: '/' },
    { label: '會員中心', link: '/auth/' },
  ];

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.doDataInit();
    if (this.appAuthApiServ.hasAccessToken) {
      this.storeServ.getCurrAuthUserCache();
    }
  }

    doDataInit(): void {
      this._appStoreApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.學會聯絡方式設定檔).subscribe({
        next: (res) => {
          if (!res) {
            return;
          }
  
          this.response = res;
        },
        error: (err) => {
          this.bbdNotifyServ.error('執行失敗', err);
        },
      });
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
