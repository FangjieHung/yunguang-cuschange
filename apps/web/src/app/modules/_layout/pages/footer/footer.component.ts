import { Component, Injector, OnInit } from '@angular/core';
import { AppStoreApiServ } from '@core/services';

// Custom packages
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends BBDBaseComponent implements OnInit {
  public currYear = (new Date()).getFullYear();

  constructor(
    private _appStoreApiServ: AppStoreApiServ,
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

}
