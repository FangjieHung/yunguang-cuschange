import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

interface Partner {
  logo: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-partner-logos',
  templateUrl: './partner-logos.component.html',
  styleUrls: ['./partner-logos.component.scss']
})
export class PartnerLogosComponent {
  partners: Partner[] = [
    {
      logo: 'assets/shared/img/sponsor/bc-logo.png',
      name: 'Beckman Coulter',
      description: 'Beckman Coulter（貝克曼庫爾特）致力於研發、製造與行銷能夠簡化、自動化並創新複雜生物醫學檢測流程的產品。我們的體外診斷系統廣泛應用於全球各地的醫院與關鍵醫療照護場域，所產出的檢測資訊協助醫師進行疾病診斷、治療決策，以及病患健康狀況的持續監測。'
    }
  ];

  swiperConfig: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 30 },
      640: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 50 },
    }
  };
}
