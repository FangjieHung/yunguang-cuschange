/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, Injector, AfterViewInit, HostListener, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forkJoin } from 'rxjs';
import { LogoStateService } from '../../../../shared/services/logo-state.service';

// Third party packages
import SwiperCore, { Autoplay, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Navigation]);

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  AppNewsMsgView, BannerAdView, CampaignReq, CampaignView
} from '@core/models';
import { AppMsgApiServ, CampaignApiServ } from '@core/services';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  private _appMsgApiServ = inject(AppMsgApiServ);
  campaignApiServ = inject(CampaignApiServ);

  campaigns: CampaignView[] = [];
  ads: BannerAdView[] = [];
  newsMsgs: AppNewsMsgView[] = [];

  campainDate: Date = new Date();
  campaignList = [
    {
      signupDate: '2025.11.23',
      title: '宜蘭響應114年10月1日起公費新冠流感疫苗研討會暨宣導活動',
      sort: '學會公告'
    },
    {
      signupDate: '2025.10.15',
      title: '感染管制員甄試核心課程研習班（台中場）',
      sort: '活動訊息'
    },
    {
      signupDate: '2025.09.30',
      title: '114年長照機構感染管制查核工作坊-新北場',
      sort: '學會公告'
    },
    {
      signupDate: '2025.08.20',
      title: '113年長照機構嬰幼兒呼吸道疾病感染管制實務研討會',
      sort: '系統公告'
    },
    {
      signupDate: '2025.07.10',
      title: '114年長照機構感染管制查核工作坊-台中中山場',
      sort: '學會公告'
    }
  ];

  campaignSwipe = {
    navigation: {
      nextEl: '.swiper-btn-campaign.next',
      prevEl: '.swiper-btn-campaign.prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.2,
      },
      1600: {
        slidesPerView: 3.5,
      },
    },
  };

  bannerSwipe = {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-btn-banner.next',
      prevEl: '.swiper-btn-banner.prev',
    },
  };

  constructor(
    private logoStateService: LogoStateService,
    protected override injector: Injector) {
    super(injector);
    if (this.isBrowser)
      gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.updateLogoScale();
    this.getCaches();
  }

  ngAfterViewInit(): void {
    this.updateLogoScale();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateLogoScale();
  }

  private updateLogoScale(): void {
    if (!this.isBrowser)
      return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const threshold = window.innerHeight * 0.2; // 20vh

    const isLarge = scrollY <= threshold;
    this.logoStateService.setLogoScale(isLarge);
  }

  ngOnDestroy(): void {
    // 離開 Home 頁面時，將 Logo 狀態重置
    this.logoStateService.setLogoScale(false);
  }

  getCaches(): void {
    const campReq = new CampaignReq();
    campReq.regActiveAt = new Date();
    campReq.takeCount = 10;

    this.spinnerServ.show();
    forkJoin([
      this._appMsgApiServ.getAppNewsMsgViews(),
      this._appMsgApiServ.getBannerAdViews(),
      this.campaignApiServ.getCampaignViews(campReq)
    ]).subscribe(([news, ads, camps]) => {
      this.newsMsgs = news;
      this.ads = ads;
      this.campaigns = camps;
    }).add(() => this.spinnerServ.hide());
  }
}
