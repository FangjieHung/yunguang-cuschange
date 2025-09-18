/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss']
})

export class DefaultContainerComponent extends BBDBaseComponent implements OnInit, AfterViewInit {
  currentUrl = '';
  @ViewChild('snav') snav!: MatSidenav;

  navOpens = ['/', '/home', '/project/render-list'];
  constructor(protected override injector: Injector,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private _router: Router,
    private activatedRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit(): void {
    if (this.appAuthApiServ.hasAccessToken) {
      this.storeServ.getCurrAuthUserCache();
    }
    this.doCurrentUrlMap();
  }

  ngAfterViewInit() {
    this.dosNavControl();
  }

  doCurrentUrlMap(): void {
    this.currentUrl = this.getUrlWithoutParams(this._router.url);
    this._router.events
      .subscribe((event: any) => {
        if (event.url) {
          this.currentUrl = this.getUrlWithoutParams(event.url);
          this.dosNavControl();
        }
      });
  }

  dosNavControl(): void {
    if (this.navOpens.includes(this.currentUrl)) {
      this.snav.toggle(true);
    } else {
      this.snav.toggle(false);
    }
  }

  toggleMenu() {
    this.snav.toggle(); // 切換側邊菜單
  }

  getUrlWithoutParams(url: string): string {
    if (!url) {
      return url;
    }
    return new URL(url, location.origin)?.pathname;
  }
}
