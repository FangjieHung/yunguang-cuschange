import { Component, Injector, HostListener, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent extends BBDBaseComponent implements OnInit {
  visible = false;

  private isScrolled = false;

  constructor(
    private router: Router,
    protected override injector: Injector) {
    super(injector);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const triggerHeight = window.innerHeight * 0.2;

    if (scrollY > triggerHeight && !this.isScrolled) {
      this.isScrolled = true;
      this.changeNavBg('white');
    } else if (scrollY <= triggerHeight && this.isScrolled) {
      this.isScrolled = false;
      this.changeNavBg('transparent');
    }
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault(); // 阻止默認行為

    const target = document.getElementById(sectionId);
    if (target) {
      gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 50 }, ease: 'power2.out' });
    }
  }

  ngOnInit(): void {
    console.log('init nav');
  }

  onFragmentLink(url: string, fragment: string): void {
    this.close();
    // 需等待drawer完全關閉fragment才會有效
    this.spinnerServ.show();
    setTimeout(() => {
      this.router.navigate([url], { fragment: fragment });
      this.spinnerServ.hide();
    }, 500);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  private changeNavBg(bgColor: string) {
    gsap.to('nav', {
      backgroundColor: bgColor,
      duration: 0.3,
    });
  }

  doNavigate(url: string, queryParams: Params | null | undefined = {}): void {
    this.close();
    setTimeout(() => {
      this.router.navigate([url], { queryParams: queryParams });
    }, 500);
  }
  onNavigateUrlReload(url: string): void {
    this.close();
    if (!url) {
      return;
    }
    this.router.navigate([url]).then(() => window.location.reload());
  }
}


