import { Component, OnInit, Injector, inject } from '@angular/core';
import { forkJoin } from 'rxjs';

// Third party packages
import { SwiperOptions } from 'swiper';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { SponsorView } from '@core/models';
import { AppMsgApiServ } from '@core/services';

@Component({
  selector: 'app-partner-logos',
  templateUrl: './partner-logos.component.html',
  styleUrls: ['./partner-logos.component.scss']
})
export class PartnerLogosComponent extends BBDBaseComponent implements OnInit {
  private _appMsgApiServ = inject(AppMsgApiServ);

  sponsors: SponsorView[] = [];
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

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getCaches();
  }

  getCaches(): void {
      forkJoin([
        this._appMsgApiServ.getSponsorViews(),
      ]).subscribe(([sponsors]) => {
        this.sponsors = sponsors;
      })
    }
}
