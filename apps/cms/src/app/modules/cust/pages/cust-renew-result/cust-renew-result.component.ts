import { Component, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { RenewMembershipResult } from '@core/models';

@Component({
  selector: 'cms-cust-renew-result',
  templateUrl: './cust-renew-result.component.html',
  styleUrls: ['./cust-renew-result.component.scss']
})
export class CustRenewResultComponent {
  readonly modalData: RenewMembershipResult = inject(NZ_MODAL_DATA);
}
