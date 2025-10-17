/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
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
  @ViewChild('snav') snav!: MatSidenav;
  activeMenu: string | null = null;
  isMenuOpen = false;

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
      link: '/'
    },
    {
      label: '學術活動',
      children: [
        { label: '國內外研討會', link: '/about/introduction' },
        { label: '教育積分申請', link: '/about/organization' },
        { label: '積分申請進度', link: '/about/history' },
        { label: '活動報名查詢', link: '/about/honorary' },
        { label: '活動花絮', link: '/about/honorary' },
      ]
    },
    {
      label: '認證專區',
      children: [
        { label: '訓練醫院 / 機構申請', link: '/about/introduction' },
        { label: '合格訓練醫院', link: '/about/organization' },
        { label: '合格訓練機構', link: '/about/history' },
      ]
    },
    {
      label: '投稿專區',
      children: [
        { label: '年會投稿', link: '/about/introduction' },
        { label: '雜誌投稿', link: '/about/organization' },
        { label: '投稿進度查詢', link: '/about/history' },
      ]
    }
  ];

  constructor(protected override injector: Injector,
    //changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    //private _router: Router,
    private activatedRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

  toggleSideMenu() {
    this.snav.toggle(); // 切換側邊菜單
  }

  toggleNavbarMenu(label: string) {
    this.activeMenu = this.activeMenu === label ? null : label;
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
