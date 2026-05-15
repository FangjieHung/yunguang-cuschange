/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Injector,
  inject,
  ViewChild,
  OnInit,
  OnDestroy,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';

import { NAV_SECTIONS, NavSection } from '../../../home/pages/default/default.data';

@Component({
  selector: 'web-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss'],
})
export class DefaultContainerComponent
  extends BBDBaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('drawer') drawer!: MatSidenav;

  navSections: NavSection[] = NAV_SECTIONS;
  currentSection = '';
  isDrawerOpen = false;

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

  private _observer?: IntersectionObserver;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._seoServ.updateMetaTags(
      '富華澐光 — 預售屋客變線上服務',
      this.appEnv.siteServer,
      '',
      '從簽約到交屋，您的家由您決定。瀏覽客變原則、流程、費用與虛擬樣品屋。'
    );
    this._seoServ.updateCanonical();

    this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const currRoute = this.getDeepestChildRoute(this._route);
        const seoData = currRoute.snapshot.data;
        if (seoData?.['title']) {
          this._seoServ.updateMetaTags(
            seoData['title'],
            seoData['url'],
            seoData['image'],
            seoData['description']
          );
          this._seoServ.updateCanonical(seoData['url']);
        }
      });
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this._initSectionObserver();
  }

  ngOnDestroy(): void {
    this._observer?.disconnect();
  }

  private _initSectionObserver(): void {
    const sectionIds = this.navSections.map((s) => s.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    this._observer = new IntersectionObserver(
      (entries) => {
        // 找到目前可見比例最高的 section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          this.currentSection = visible[0].target.id;
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => this._observer!.observe(el));
  }

  private getDeepestChildRoute(route: ActivatedRoute): ActivatedRoute {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }

  scrollToSection(id: string, event?: Event): void {
    event?.preventDefault();
    if (!this.isBrowser) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeDrawer();
    }
  }

  openDrawer(): void {
    this.drawer?.open();
    this.isDrawerOpen = true;
  }

  closeDrawer(): void {
    this.drawer?.close();
    this.isDrawerOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isDrawerOpen) this.closeDrawer();
  }
}
