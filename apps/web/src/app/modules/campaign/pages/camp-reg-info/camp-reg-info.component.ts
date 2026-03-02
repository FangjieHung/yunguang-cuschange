import { Component, OnInit, inject, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignView } from '@core/models';

@Component({
  selector: 'app-camp-reg-info',
  templateUrl: './camp-reg-info.component.html',
  styleUrls: ['./camp-reg-info.component.scss']
})
export class CampRegInfoComponent extends BBDBaseComponent implements OnInit, OnChanges {
  // Properties
  price: number | null = null;

  // IOs
  @Input({ required: true }) campInfo: CampaignView | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['campInfo'] && changes['campInfo'].currentValue) {
      this.initData();
    }
  }

  initData(): void {
    if (!this.campInfo)
      return;
    if (this.isSignin)
      this.price = this.campInfo.salePrice;
    else
      this.price = this.campInfo.pricing;
  }
}
