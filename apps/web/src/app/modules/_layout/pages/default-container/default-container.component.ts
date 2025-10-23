/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuTrigger } from '@angular/material/menu';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

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

  navList = [
    {
      label: '關於本會',
      children: [
        { label: '本會簡介', link: '/about/introduction' },
        { label: '組織章程', link: '/about/organization' },
        { label: '理監事名單', link: '/about/history' },
        { label: '委員會組織', link: '/about/honorary' },
      ]
    },
    {
      label: '最新消息',
      link: '/news/list'
    },
    {
      label: '學術活動',
      children: [
        { label: '國內外研討會', link: '/campaign/list' },
        { label: '教育積分申請', link: '/campaign/list' },
        { label: '積分申請進度', link: '/campaign/list' },
        { label: '活動報名查詢', link: '/campaign/list' },
        { label: '活動花絮', link: '/campaign/list' },
      ]
    },
    {
      label: '認證專區',
      children: [
        { label: '訓練醫院 / 機構申請', link: '/' },
        { label: '合格訓練醫院', link: '/' },
        { label: '合格訓練機構', link: '/' },
      ]
    },
    {
      label: '投稿專區',
      children: [
        { label: '年會投稿', link: '/' },
        { label: '雜誌投稿', link: '/' },
        { label: '投稿進度查詢', link: '/' },
      ]
    }
  ];

  constructor(protected override injector: Injector,
    //changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    //private _router: Router,
    private activatedRoute: ActivatedRoute) {
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

  ngOnInit(): void {
    console.log();
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

  /*
  getUrlWithoutParams(url: string): string {
    if (!url) {
      return url;
    }
    return new URL(url, location.origin)?.pathname;
  }
    */
}
