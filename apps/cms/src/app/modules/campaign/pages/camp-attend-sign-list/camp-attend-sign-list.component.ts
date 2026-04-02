import { Component, ElementRef, inject, Injector, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { combineLatest, of } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  PagingRequest, PagingResponse,
  CampaignReq, CampaignView,
  CampAttendLogReq, CampAttendLogView, CampAttendStat
} from '@core/models';
import { CampaignApiServ } from '@core/services';


@Component({
  selector: 'cms-camp-attend-sign-list',
  templateUrl: './camp-attend-sign-list.component.html',
  styleUrls: ['./camp-attend-sign-list.component.scss'],
})
export class CampAttendSignListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '活動報到作業';
  @ViewChild('signCode') signCodeEl!: ElementRef;
  campaignApiServ = inject(CampaignApiServ);

  isScannerHandle = true;
  dataLoading = false;
  dataSource: CampAttendLogView[] = [];
  request = new PagingRequest<CampAttendLogReq>();
  response: PagingResponse<CampAttendLogView> | null = null;
  campaignOpts: CampaignView[] = [];
  filteredCampaigns: Array<{ status: number; campaigns: CampaignView[] }> = [];
  campaignCtrl = new FormControl<string | null>(null);
  attendStat: CampAttendStat = {} as CampAttendStat;
  combinedCode = '';
  dispCols = [
    '狀態', '報名時間', '活動名稱', '會員名稱', '身份證號',
    '第一次簽到時間', '第二次簽到時間', '簽退時間', '證書編號'
  ];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isScannerHandle === false) return;

    this.signCodeEl.nativeElement.focus();
    if (event.key === 'Enter') {
      if (/[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(this.combinedCode)) {
        this.bbdNotifyServ.info('刷條碼請使用英文輸入法。');
      }
      if (this.combinedCode) {
        this.request.queryRequest.signCode = this.combinedCode;
        this.request.queryRequest.queryString = '';
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        });
      }
      this.combinedCode = '';
    } else {
      if (this.combinedCode === '') {
        this.combinedCode = event.key;
      } else {
        this.combinedCode = (this.combinedCode || '') + event.key;
      }
    }
  }

  constructor(
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.initAutocomplete();
    this.onSearch();
  }

  doParamsInit(): void {
    this.request.queryRequest = new CampAttendLogReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  initAutocomplete(): void {
    this.campaignCtrl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((value) => {
          const filterValue = (value || '').toLowerCase();
          return this.filterCampaigns(filterValue);
        })
      )
      .subscribe((filtered) => {
        this.filteredCampaigns = filtered;
      });
  }

  filterCampaigns(filterValue: string): Array<{ status: number; campaigns: CampaignView[] }> {
    const filtered = this.campaignOpts.filter((campaign) =>
      campaign.name.toLowerCase().includes(filterValue)
    );

    // Group by status
    const grouped = new Map<number, CampaignView[]>();
    filtered.forEach((campaign) => {
      const status = campaign.status;
      if (!grouped.has(status)) {
        grouped.set(status, []);
      }
      const campaigns = grouped.get(status);
      if (campaigns) {
        campaigns.push(campaign);
      }
    });

    return Array.from(grouped.entries()).map(([status, campaigns]) => ({
      status,
      campaigns
    }));
  }

  onCampaignSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedId = event.option.value;
    const selectedCampaign = this.campaignOpts.find((camp) => +camp.id === +selectedId);

    if (selectedCampaign) {
      this.request.queryRequest.campId = +selectedCampaign.id;
      this.campaignCtrl.setValue(selectedCampaign.name);
    } else {
      this.request.queryRequest.campId = 0;
      this.campaignCtrl.setValue('');
    }

    this.onSearch();

    // 使用 setTimeout 讓 DOM 先完成更新，再執行 focus
    setTimeout(() => {
      this.signCodeEl.nativeElement.focus();
    }, 0);
  }

  getCaches(): void {
    const campReq = new CampaignReq();
    campReq.takeCount = 30;

    combineLatest([this.campaignApiServ.getCampaignViews(campReq)]
    ).subscribe(([campaignViews]) => {
      this.campaignOpts = [...campaignViews || []];
      // Initialize filtered campaigns
      this.filteredCampaigns = this.filterCampaigns('');
    });
  }

  onSearch(pageIndex = 1, isAutoSign = false): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    if (!isAutoSign) {
      this.combinedCode = '';
    }
    // this.spinnerServ.show();
    combineLatest([
      this.campaignApiServ.getSignCampAttendLogViewsByCampIdPaging(this.request),
      this.request.queryRequest.campId > 0
        ? this.campaignApiServ.getCampAttendStat(this.request.queryRequest.campId)
        : of({} as CampAttendStat)
    ]).subscribe({
      next: ([res, stat]) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.attendStat = stat || {} as CampAttendStat;
        if (isAutoSign) {
          this.doAutoCampRegSignAt();
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.dataLoading = false);
  }

  doAutoCampRegSignAt(): void {
    if (this.dataSource.length !== 1) {
      return;
    }
    if (this.request.queryRequest.signCode === this.dataSource[0].custIdNo) {
      this.onSignCampAttendLog(this.dataSource[0], this.request.queryRequest.signType);
    }
  }

  onSignCampAttendLog(data: CampAttendLogView, signType: number): void {
    if (!data)
      return;

    const signReq = new CampAttendLogReq();
    signReq.campId = this.request.queryRequest.campId;
    signReq.campRegId = data.campRegId;
    signReq.signType = signType;

    const signTypeStr = this.campaignApiServ.campAttendLogSignTypeOpts.find(cond => cond.value === signType)?.name || '';
    this.spinnerServ.show();
    this.campaignApiServ.signCampAttendLog(signReq).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`操作失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`會員:${data.custName}${signTypeStr}成功！`);
        this.onSearch(this.request.pageIndex);
      },
      error: (err) => {
        this.onSearch(this.request.pageIndex);
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  onCancelSignCampAttendLog(data: CampAttendLogView, signType: number): void {
    const signTypeStr = this.campaignApiServ.campAttendLogSignTypeOpts.find(cond => cond.value === signType)?.name || '';
    this.modalServ.confirm({
      nzTitle: `<i>您確認要「取消${signTypeStr}」?</i>`,
      nzContent: `<b>變更後，將無法復原簽到簽退時間</b>`,
      nzOnOk: () => {
        this.doCancelSignCampAttendLog(data, signType);
      }
    });
  }
  doCancelSignCampAttendLog(data: CampAttendLogView, signType: number): void {
    const signReq = new CampAttendLogReq();
    signReq.id = data.id;
    signReq.signType = signType;

    const signTypeStr = this.campaignApiServ.campAttendLogSignTypeOpts.find(cond => cond.value === signType)?.name || '';
    this.spinnerServ.show();
    this.campaignApiServ.cancelSignCampAttendLog(signReq).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`操作失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`會員:${data.custName}${signTypeStr}報到已取消!`);
        this.onSearch(this.request.pageIndex);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  onIssueCert(data: CampAttendLogView): void {
    this.modalServ.confirm({
      nzTitle: '確定要核發此出席證明？',
      nzContent: '核發後將自動取得證書編號。',
      nzOkText: '確定',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.spinnerServ.show();
        this.campaignApiServ.issueCampAttendLogCert(data.id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('核發成功');
              this.onSearch(this.request.pageIndex);
            } else {
              this.bbdNotifyServ.error('核發失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  onCancelCert(data: CampAttendLogView): void {
    this.modalServ.confirm({
      nzTitle: '確定要取消核發此出席證明？',
      nzContent: '取消後狀態將回到待審核。',
      nzOkText: '確定',
      nzCancelText: '取消',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.spinnerServ.show();
        this.campaignApiServ.cancelCampAttendLogCert(data.id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('取消核發成功');
              this.onSearch(this.request.pageIndex);
            } else {
              this.bbdNotifyServ.error('取消核發失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        }).add(() => this.spinnerServ.hide());
      }
    });
  }
}
