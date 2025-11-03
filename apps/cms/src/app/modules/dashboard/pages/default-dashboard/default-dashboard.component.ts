import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { } from '@core/models';
import { AppStoreApiServ, AppUserApiServ, CustApiServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { } from 'rxjs';

@Component({
  selector: 'cms-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss']
})
export class DefaultDashboardComponent extends BBDBaseComponent implements OnInit {
  constructor(
    public custApiServ: CustApiServ,
    public appUserApiServ: AppUserApiServ,
    private _appStoreApiServ: AppStoreApiServ,
    protected override injector: Injector) {
    super(injector);
    // this.getCaches();
  }

  ngOnInit(): void {
    console.log();
  }

  // getCaches(): void { }

}
