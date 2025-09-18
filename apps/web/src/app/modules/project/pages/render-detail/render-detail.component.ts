/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildProjRenderView, BuildCompBundleView, BuildProjectView, BuildCompBundleReq } from '@core/models';
import { BuildProjectApiServ, ThirdPartyApiServ } from '@core/services';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { List } from 'linqts';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'web-render-detail',
  templateUrl: './render-detail.component.html',
  styleUrls: ['./render-detail.component.scss'],
})

export class RenderDetailComponent extends BBDBaseComponent implements OnInit {
  isCollapsed = false;

  describeList = [
    { title: '1BR', data: '30%' },
    { title: '2BR', data: '45%' },
    { title: '3BR', data: '25%' },
    { title: '戶數', data: '120戶' },
    { title: '樓高', data: '3.0m' },
    { title: '地上樓數', data: '8層' },
    { title: '地下樓數', data: '2層' },
    { title: '停車數', data: '80個' },
    { title: '公共空間', data: '10%' },
  ];

  detailList = [
    { title: '外牆主材質(至多三種)', data: '?丁掛磚 / 抿石子?' },
    /*
    { title: '組別', data: '?A?' },
    { title: '案號', data: '?109C008?' },
    { title: '使用分區', data: '?第六種住宅區?' },
    { title: '基地面積(m²)', data: '?9889.46?' },
    { title: '總樓地板面積(m²)', data: '?53036.96?' },
    
    { title: '外牆材質 面積比例(%)', data: '?91.8% / 4.72%?' },
    { title: '建築面積(m²)', data: '?3454.39?' },
    { title: '基地周長(m)', data: '??' },
     */
  ];

  costGen: any = [
    {
      value: 'normal',
      name: '通用模型',
      details: [

      ],
    },
    {
      value: 'custom',
      name: '專屬模型',
      details: [

      ],
    },
  ];

  styleList = [
    {
      styleValue: 'style-001',
      styleName: '最佳公設方案',
      styleImage: 'assets/image/demo/render-cover-001.png',
    },
    {
      styleValue: 'style-002',
      styleName: '最佳效益方案',
      styleImage: 'assets/image/demo/render-cover-002.png',
    },
    {
      styleValue: 'style-003',
      styleName: '最佳房型組方案',
      styleImage: 'assets/image/demo/render-cover-003.jpg',
    },
    {
      styleValue: 'style-004',
      styleName: '最佳綠化方案',
      styleImage: 'assets/image/demo/render-cover-004.png',
    },
    {
      styleValue: 'style-005',
      styleName: '最佳住商混合方案',
      styleImage: 'assets/image/demo/render-cover-005.png',
    },
    {
      styleValue: 'style-006',
      styleName: '最佳效益方案',
      styleImage: 'assets/image/demo/render-cover-003.jpg',
    },
  ];


  buildProjectId = 0;
  buildProjVolumeId = 0;
  buildProjRenderId = 0;
  buildProjRenderViews: BuildProjRenderView[] = [];
  buildCompBundleOpts: BuildCompBundleView[] = [];
  buildProjectView = {} as BuildProjectView;
  curRenderView = {} as BuildProjRenderView;
  renderResultJto: any;

  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    public thirdPartyApiServ: ThirdPartyApiServ,
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    protected override injector: Injector) {
    super(injector);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DetailTableDialogComponent, {
      panelClass: 'bg-none-dialog',
      backdropClass: 'backdrop-blur-dialg'
    });
  }

  ngOnInit(): void {
    console.log();
    this.doRouteMap();
  }

  doRouteMap(): void {
    this._route.queryParamMap.subscribe(params => {
      this.buildProjectId = Number(params.get('buildProjectId') || 0);
      this.buildProjVolumeId = Number(params.get('buildProjVolumeId') || 0);
      this.buildProjRenderId = Number(params.get('buildProjRenderId') || 0);

      if (!this.buildProjectId) {
        this.messageServ.warning('查無專案，請重新操作。');
        this._router.navigate(['/']);
        return;
      }
      this.getCaches();
    });
  }

  getCaches(): void {
    this.onSearch();
    this.spinnerServ.show();
    const buildCompBundleReq = new BuildCompBundleReq();
    buildCompBundleReq.corpId = this.currUserInfo?.corpId || 0;
    forkJoin(
      [
        this.buildProjectApiServ.getBuildProjectViewById(this.buildProjectId),
        this.buildProjectApiServ.getBuildCompBundleViews(buildCompBundleReq),
      ]
    ).subscribe(([buildProjectView, buildCompBundleOpts]) => {
      this.buildProjectView = buildProjectView;
      this.buildCompBundleOpts = [...buildCompBundleOpts || []];

    }).add(() => this.spinnerServ.hide());
  }

  onSearch(): void {
    this.spinnerServ.show()
    this.buildProjectApiServ.getBuildProjRenderViewsByVolumeId(this.buildProjVolumeId).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.buildProjRenderViews = res;
        if (this.buildProjRenderViews.length) {
          this.curRenderView = new List<BuildProjRenderView>(this.buildProjRenderViews || []).Where(w => w?.id === this.buildProjRenderId).FirstOrDefault();
        }

        this.renderResultJto = JSON.parse(this.curRenderView.result || '{}');
        this.doCostGenBind();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  doCostGenBind(): void {
    this.costGen.forEach((fe: any) => {
      fe.details = [];
      fe.details.push({ title: '成本 Cost', data: (this.renderResultJto?.costGen?.totalCost || 0).toFixed(0) + '億' });
      fe.details.push({ title: '銷售 Cost', data: (this.renderResultJto?.costGen?.sellPrice || 0).toFixed(0) + '億' });
    })
  }
}


@Component({
  selector: 'web-detail-table-dialog',
  templateUrl: 'detail-table-dialog.component.html',
})

export class DetailTableDialogComponent extends BBDBaseComponent implements OnInit {

  tableContentA = [
    { title: '組別', data: 'B' },
    { title: '案號', data: '112C003' },
    { title: '使用分區', data: '台中市西屯區' },
    { title: '基地面積 (m²)', data: '4421.1' },
    { title: '總樓地板面積 (m²)', data: '50863' },
    { title: '外牆主材質', data: '石材、丁掛磚、金屬版、抿石子' },
    { title: '外牆材質面積比例 (%)', data: '66.5% / 28.7%' },
    { title: '建築面積 (m²)', data: '2196.62' },
    { title: '基地周長 (m)', data: '382.86' },
    { title: '基地形狀', data: '長方形' },
    { title: '大門前道路寬度 (m)', data: '20' },
  ];

  tableContentB = [
    { title: '外牆面積 (含天井)', data: '32,412' },
    { title: '平面停車位數量', data: '0' },
    { title: '平均停車位數量', data: '461' },
    { title: '機械停車位數量', data: '0' },
    { title: '營建年份', data: '2025' },
    { title: '綠建築標章評定等級', data: '銀級' },
    { title: '耐震系數標章評定等級', data: '合格級' },
    { title: '智慧建築標章評定等級', data: '合格級' },
    { title: '地質條件', data: '黏土層' },
    { title: '一般樓層高度(m)', data: '3.3' },
    { title: '地下開挖深度 (m)', data: '12.6' },
  ]

  tableContentC = [
    { title: '營建成本', data: '1,279,500,000' },
    { title: '山坡地', data: '否' },
    { title: '損土支撐工法', data: '擋土柱+水平支撐' },
    { title: '建築高度 (m)', data: '48.4' },
    { title: '地下層數', data: '3' },
    { title: '總戶數', data: '278' },
  ]

  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    public dialogRef: MatDialogRef<DetailTableDialogComponent>,
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

  // getDatas(): void {
  //   // this.onSearch();
  //   this.spinnerServ.show();
  //   const buildCompBundleReq = new BuildCompBundleReq();
  //   buildCompBundleReq.corpId = this.currUserInfo?.corpId || 0;
  //   forkJoin(
  //     [
  //       this.buildProjectApiServ.getBuildProjectViewById(this.buildProjectId),
  //       this.buildProjectApiServ.getBuildCompBundleViews(buildCompBundleReq)
  //     ]
  //   ).subscribe(([buildProjectView, buildCompBundleOpts]) => {
  //     this.buildProjectView = buildProjectView;
  //     this.buildCompBundleOpts = [...buildCompBundleOpts || []];
  //   }).add(() => this.spinnerServ.hide());
  // }
}