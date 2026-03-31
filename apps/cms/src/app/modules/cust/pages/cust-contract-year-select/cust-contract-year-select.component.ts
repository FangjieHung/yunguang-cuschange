import { Component, inject, OnInit } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';

export interface CustContractYearSelectData {
  actionName: string;
  /** 個別續約時傳入會員合約到期日，用於計算可選年度起始 */
  custExpAt?: Date | null;
}

@Component({
  selector: 'cms-cust-contract-year-select',
  templateUrl: './cust-contract-year-select.component.html',
  styleUrls: ['./cust-contract-year-select.component.scss'],
})
export class CustContractYearSelectComponent implements OnInit {
  readonly modalData: CustContractYearSelectData = inject(NZ_MODAL_DATA);
  private modalRef = inject(NzModalRef);
  private _maxYear = 2999;


  selectedYear = new Date().getFullYear();
  yearOptions: number[] = [];
  cannotRenew = false;

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 4;

    const custExpAt = this.modalData.custExpAt;
    const expYear = custExpAt ? new Date(custExpAt).getFullYear() : this._maxYear;
    const isNeverRenewed = !custExpAt || expYear === this._maxYear;

    if (isNeverRenewed) {
      // 未續約過 或 全體續約：當年度 ~ 當年度+4
      this.yearOptions = Array.from({ length: 5 }, (_, i) => currentYear + i);
      this.selectedYear = currentYear;
    } else if (expYear >= maxYear) {
      // 已達最大可續約年度
      this.cannotRenew = true;
      this.yearOptions = [];
    } else {
      // 已有到期日：expYear+1 ~ 當年度+4
      const startYear = expYear + 1;
      this.yearOptions = Array.from(
        { length: maxYear - startYear + 1 },
        (_, i) => startYear + i
      );
      this.selectedYear = startYear;
    }
  }

  onConfirm(): void {
    this.modalRef.close(this.selectedYear);
  }

  onCancel(): void {
    this.modalRef.close(null);
  }
}
