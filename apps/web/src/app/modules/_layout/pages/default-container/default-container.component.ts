/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, inject, ViewChild, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LogoStateService } from '../../../../shared/services/logo-state.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppObjectStoreCodes, OrgContactJto } from '@core/models';
import { AppStoreApiServ, SEOServ } from '@core/services';

@Component({
  selector: 'web-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss']
})

export class DefaultContainerComponent extends BBDBaseComponent implements OnInit {
  isLogoLarge$!: Observable<boolean>;
  currentUrl = '';
  activeMenu: string | null = null;
  isMenuOpen = false;

  @ViewChild('snav') snav!: MatSidenav;

  private _appStoreApiServ = inject(AppStoreApiServ);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

  response: OrgContactJto | null = null;

  navList = [
    {
      label: '關於本會',
      children: [
        { label: '組織章程', link: '/about/charter' },
        { label: '理監事名單', link: '/about/supervisor' },
        { label: '委員會組織', link: '/about/committee' },
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
    // { label: '我的課程', link: '/' },
    { label: '個人資料', link: '/account/profile' },
    { label: '重設密碼', link: '/account/password' }
  ];

  constructor(
    private logoStateService: LogoStateService,
    protected override injector: Injector) {
    super(injector);
    this.isLogoLarge$ = this.logoStateService.isLargeLogo$;
  }

  ngOnInit(): void {
    this.doDataInit();
    if (this.appAuthApiServ.hasAccessToken) {
      this.storeServ.getCurrAuthUserCache();
    }

    this._seoServ.updateMetaTags();
    this._seoServ.updateCanonical();
    this.storeServ.getZipCodesCache().subscribe();
    this._router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const currRoute = this.getDeepestChildRoute(this._route);
        const seoData = currRoute.snapshot.data;
        if (seoData) {
          this._seoServ.updateMetaTags(seoData['title'], seoData['url'], seoData['image'], seoData['description']);
          this._seoServ.updateCanonical(seoData['url']);
        } else {
          this._seoServ.updateMetaTags();
          this._seoServ.updateCanonical();
        }
        this._seoServ.injectStructuredData('breadcrumb-ld', this.buildBreadcrumbSchema(this._router.url));
      });

  }

  getDeepestChildRoute(route: ActivatedRoute): ActivatedRoute {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }

  private buildBreadcrumbSchema(url: string): object {
    const base = this.appEnv.siteServer;
    const segments = url.split('?')[0].split('/').filter(Boolean);

    const labelMap: Record<string, string> = {
      'about': '關於本會',
      'charter': '組織章程',
      'supervisor': '理監事成員',
      'committee': '委員會組織',
      'privacy': '隱私權政策',
      'terms': '服務條款',
      'news': '最新消息',
      'list': '列表',
      'detail': '詳情',
      'campaign': '學術活動',
    };

    const items: object[] = [
      { '@type': 'ListItem', position: 1, name: '首頁', item: base }
    ];

    let accPath = base;
    segments.forEach((seg, i) => {
      if (/^[0-9a-f-]{8,}$/i.test(seg)) return; // 跳過 uniqueId 動態參數
      accPath += `/${seg}`;
      const label = labelMap[seg] ?? seg;
      items.push({ '@type': 'ListItem', position: i + 2, name: label, item: accPath });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items
    };
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
