import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { CorpReq, CorpView, CustomerReq, CustomerView, PagingRequest } from '@core/models';
import { AppStoreApiServ, AppUserApiServ, CorpApiServ, CustomerApiServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { combineLatest } from 'rxjs';

interface Person {
  rank: string;
  name: string;
  price: number;
  quantity: number;
  total: string;
}

@Component({
  selector: 'cms-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss']
})
export class DefaultDashboardComponent extends BBDBaseComponent implements OnInit {
  listOfData: Person[] = [
    {
      rank: '1',
      name: '公版印刷真空袋',
      price: 32,
      quantity: 100,
      total: '1,000,000',
    },
    {
      rank: '2',
      name: '半遮光熊貓真空袋',
      price: 42,
      quantity: 100,
      total: '1,000,000',
    },
    {
      rank: '3',
      name: '紋路真空袋',
      price: 32,
      quantity: 100,
      total: '1,000,000',
    }
  ];

  corpOpts: CorpView[] = [];
  customerViews: CustomerView[] = [];
  corpViews: CorpView[] = [];
  dashboardCardPaths = [
    '/customer/list',
    '/customer/corp/list',
  ];

  constructor(
    public customerApiServ: CustomerApiServ,
    public corpApiServ: CorpApiServ,
    public appUserApiServ: AppUserApiServ,
    private _appStoreApiServ: AppStoreApiServ,
    protected override injector: Injector) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    console.log();
  }

  getCaches(): void {
    // const customerReq = new PagingRequest<CustomerReq>();
    // const corpReq = new PagingRequest<CorpReq>;
    // customerReq.pageSize = 5;
    // corpReq.pageSize = 5;
    // combineLatest([
    //   this.corpApiServ.getCorpViews(new CorpReq()),
    //   this.customerApiServ.getCustomerViewsPaging(customerReq),
    //   this.corpApiServ.getCorpViewsPaging(corpReq),
    // ]).subscribe(([
    //   corpOpts,
    //   customerViews,
    //   corpViews,
    // ]) => {
    //   this.corpOpts = [...corpOpts || []];
    //   this.customerViews = customerViews?.rows || [];
    //   this.corpViews = corpViews?.rows || [];
    // });
  }

}
