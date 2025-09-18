import { Component, Injector, OnInit } from '@angular/core';
import { CorpReq, CorpView, BuildComponentReq, BuildComponentView, PagingRequest, PagingResponse } from '@core/models';
import { BuildProjectApiServ, CorpApiServ, SharedFuncServ } from '@core/services';
import { BBDBaseComponent } from '@core/shared';
import { forkJoin } from 'rxjs';
import { BuildCompEditComponent } from '../build-comp-edit/build-comp-edit.component';

@Component({
  selector: 'cms-build-comp-list',
  templateUrl: './build-comp-list.component.html',
  styleUrls: ['./build-comp-list.component.scss'],
})
export class BuildCompListComponent extends BBDBaseComponent implements OnInit {
  readonly actionName = '建案元件';
  dataLoading = false;
  dataSource: BuildComponentView[] = [];
  request = new PagingRequest<BuildComponentReq>();
  response: PagingResponse<BuildComponentView> | null = null;
  corpOpts: CorpView[] = [];

  dispCols = [
    '所屬公司',
    '元件名稱',
    '元件類別',
  ];

  constructor(
    public corpApiServ: CorpApiServ,
    public buildProjectApiServ: BuildProjectApiServ,
    private sharedFuncServ: SharedFuncServ,
    protected override injector: Injector,) {
    super(injector);
    this.getCaches();
  }

  ngOnInit(): void {
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    this.spinnerServ.show();
    forkJoin(
      [this.corpApiServ.getCorpViews(new CorpReq()),]
    ).subscribe(([corpOpts]) => {
      this.corpOpts = [...corpOpts || []];
    }).add(() => this.spinnerServ.hide());
  }

  doParamsInit(): void {
    this.request.queryRequest = new BuildComponentReq();
    this.request.queryRequest.corpId = -1;
    this.doParamsReset();
  }

  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.dataLoading = true;
    this.sharedFuncServ.doQueryTimeOptimize<BuildComponentReq>(this.request.queryRequest);
    this.buildProjectApiServ.getBuildComponentViewsPaging(this.request).subscribe({
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

  doEdit(id = 0): void {
    this.modalServ.create({
      nzTitle: id === 0 ? `新增${this.actionName}` : `編輯${this.actionName}`,
      nzMaskClosable: false,
      nzStyle: { 'max-width': '800px' },
      nzCentered: true,
      nzWidth: '95%',
      nzContent: BuildCompEditComponent,
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

}
