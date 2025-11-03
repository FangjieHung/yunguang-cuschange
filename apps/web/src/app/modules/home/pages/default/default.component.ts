/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  OnInit,
  Injector,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Third party packages
import SwiperCore, { Autoplay, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Navigation]);

// Custom packages

import { BBDBaseComponent, BBDConfirmDialogComponent } from '@core/shared';
import { AppStoreApiServ } from '@core/services';
import { PagingRequest, PagingResponse } from '@core/models';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements OnInit {
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

  newsList = [
    {
      date: '2025.11.23',
      title: '呼吸道細胞融合病毒疫苗使用建議',
      sort: '學會公告'
    },
    {
      date: '2025.10.15',
      title: '2025年度醫療科技創新論壇開放報名',
      sort: '活動訊息'
    },
    {
      date: '2025.09.30',
      title: '新版臨床指引正式發布，即日起生效',
      sort: '學會公告'
    },
    {
      date: '2025.08.20',
      title: '會員系統維護通知：8/25 晚間暫停服務',
      sort: '系統公告'
    },
    {
      date: '2025.07.10',
      title: '醫學期刊投稿流程更新說明',
      sort: '學會公告'
    }
  ];

  bannerList = [
    {
      src: 'assets/image/demo/001.jpg',
      title: '檢驗品質管理工作坊｜提升實驗室標準化流程',
    },
    {
      src: 'assets/image/demo/002.jpg',
      title: '智慧檢驗技術應用論壇 — AI 與臨床實務的交會',
    },
    {
      src: 'assets/image/demo/003.jpg',
      title: '會員招募中｜加入我們，共創智慧醫療新未來',
    },
  ];

  campaignSwipe = {
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-btn-between.next',
      prevEl: '.swiper-btn-between.prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  };

  bannerSwipe = {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-btn-banner-next',
      prevEl: '.swiper-btn-banner-prev',
    },
  };

  constructor(
    private _dialog: MatDialog,
    private _appStoreApiServ: AppStoreApiServ,
    private _router: Router,
    protected override injector: Injector) {
    super(injector);
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.getCaches();
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    //
  }

  doParamsInit(): void {
    //
  }
  doParamsReset(): void {
    //
  }

  onSearch(pageIndex = 1): void {
    //
  }
}
