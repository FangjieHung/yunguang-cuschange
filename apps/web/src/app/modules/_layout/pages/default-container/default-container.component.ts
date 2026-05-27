/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Injector,
  inject,
  ViewChild,
  OnInit,
  HostListener,
  signal,
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
  implements OnInit
{
  @ViewChild('drawer') drawer!: MatSidenav;

  navSections: NavSection[] = NAV_SECTIONS;
  isDrawerOpen = false;
  showNav = signal(false);

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

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


  private getDeepestChildRoute(route: ActivatedRoute): ActivatedRoute {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }

  openDrawer(): void {
    this.drawer?.open();
    this.isDrawerOpen = true;
  }

  closeDrawer(): void {
    this.drawer?.close();
    this.isDrawerOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollThreshold = window.innerHeight * 0.9;
    this.showNav.set(window.scrollY > scrollThreshold);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isDrawerOpen) this.closeDrawer();
  }
}
