import { Component, inject, Injector, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

// Third party packages
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignEditComponent } from '../campaign-edit/campaign-edit.component';
import { CampaignReq, CampaignView, PagingRequest, PagingResponse, CampRegReq, CampRegView, ZipCodeView } from '@core/models';
import { CampaignApiServ, SharedFuncServ } from '@core/services';

@Component({
  selector: 'cms-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '活動資料';

  private _sharedFuncServ = inject(SharedFuncServ);
  campaignApiServ = inject(CampaignApiServ);

  private _zipCodes: ZipCodeView[] = [];
  dataLoading = false;
  dataSource: CampaignView[] = [];
  request = new PagingRequest<CampaignReq>();
  response: PagingResponse<CampaignView> | null = null;

  dispCols = [
    '狀態', '活動名稱',
    '活動開始時間', '活動結束時間', '報名開始時間', '報名結束時間',
    '不限會員報名', '最大報名人數', '已報名人數', '報名費', '會員報名費'
  ];

  constructor(
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    combineLatest([this.storeServ.getZipCodesCache()]
    ).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this._zipCodes = zipCodeViews;
      }
    });
  }

  doParamsInit(): void {
    this.request.queryRequest = new CampaignReq();
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  doEdit(id = 0): void {
    this.modalServ.create({
      nzTitle: id === 0 ? `新增${this.actionName}` : `編輯${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: CampaignEditComponent,
      nzData: {
        id: id,
        actionName: this.actionName,
      }
    }).afterClose.subscribe(res => {
      if (res) {
        this.onSearch();
      }
    });
  }

  onDisable(id: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要下架此${this.actionName}？`,
      nzContent: `下架後，該${this.actionName}將無法報名！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.campaignApiServ.disableCampaign(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('下架成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('下架失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        });
      }
    });
  }

  onEnable(id: number): void {
    this.modalServ.confirm({
      nzTitle: `確定要上架此${this.actionName}？`,
      nzContent: `上架後，該${this.actionName}將可報名！`,
      nzCancelText: '取消',
      nzOkText: '確定',
      nzOnOk: () => {
        this.campaignApiServ.enableCampaign(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success('上架成功');
              this.onSearch();
            } else {
              this.bbdNotifyServ.error('上架失敗');
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          }
        });
      }
    });
  }

  onExportRegList(campId: number): void {
    const req = new CampRegReq();
    req.campId = campId;
    req.startStatus = +this.campaignApiServ.campRegStatuses.待付款;
    req.endStatus = +this.campaignApiServ.campRegStatuses.已報名;

    this.spinnerServ.show();
    this.campaignApiServ.getCampRegViews(req).subscribe({
      next: (rows: CampRegView[]) => {
        if (!rows || rows.length === 0) {
          this.bbdNotifyServ.success('查無任何報名資料。');
          return;
        }

        const data = rows.map(r => {
          const zipCode = this._zipCodes.find(cond => cond.id === r.custZipCodeId);
          const statusName = this.campaignApiServ.campRegStatusOpts.find(s => s.value === r.status)?.name || String(r.status);
          return {
            '報名時間': format(r.regAt, 'yyyy/MM/dd HH:mm'),
            '活動名稱': r.campName,
            '姓名': r.custName,
            '身分證號': r.custIdNo,
            '電子信箱': r.custEmail,
            '行動電話': r.custMobile,
            '地址': `${zipCode?.city || ''}${zipCode?.district || ''}${r.custAddr}`,
            '狀態': statusName
          };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '報名清單');
        const fileName = `報名清單_${new Date().toISOString().slice(0,10)}.xlsx`;
        XLSX.writeFile(wb, fileName);
      },
      error: (err) => {
        this.bbdNotifyServ.error('匯出失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this._sharedFuncServ.doQueryTimeOptimize<CampaignReq>(this.request.queryRequest);
    this.campaignApiServ.getCampaignViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.dataLoading = false);
  }

}
