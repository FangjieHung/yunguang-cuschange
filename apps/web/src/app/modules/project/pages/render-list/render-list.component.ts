/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildCompBundleReq, BuildCompBundleView, BuildProjectDto, BuildProjectView, BuildProjRenderDto, BuildProjRenderView, BuildProjVolumeDto, BuildProjVolumeView, UploadFormReq } from '@core/models';
import { AppAttachApiServ, ArcGenApiServ, BuildProjectApiServ, ThirdPartyApiServ } from '@core/services';
import { MassRefinementRenderDialogComponent } from '../../../../shared/components';
// Custom packages
import { BBDBaseComponent, BBDConfirmDialogComponent } from '@core/shared';
import { List } from 'linqts';
import { catchError, forkJoin, map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'web-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.scss'],
})

export class RenderlistComponent extends BBDBaseComponent implements OnInit {
  //router: any;

  renderResults = [
    {
      src: 'assets/image/demo/render-cover-001.png',
      name: '最佳公設方案',
      time: '2025/03/01 20:03:12',
      totalArea: '12,500',
      floorEfficiency: '78',
      floorHeight: '3.2',
      aboveGroundFloors: 12,
    },
    {
      src: 'assets/image/demo/render-cover-002.png',
      name: '最佳效益方案',
      time: '2025/03/02 20:03:12',
      totalArea: '9,800',
      floorEfficiency: '8%',
      floorHeight: '3.0',
      aboveGroundFloors: 10,
    },
    {
      src: 'assets/image/demo/render-cover-003.jpg',
      name: '最佳房型組方案',
      time: '2025/03/03 20:03:12',
      totalArea: '15,200',
      floorEfficiency: '75',
      floorHeight: '3.5',
      aboveGroundFloors: 14,
    },
    {
      src: 'assets/image/demo/render-cover-004.png',
      name: '最佳公設方案',
      time: '2025/03/01 20:03:12',
      totalArea: '11,000',
      floorEfficiency: '80',
      floorHeight: '3.3',
      aboveGroundFloors: 11,
    },
    {
      src: 'assets/image/demo/render-cover-005.png',
      name: '最佳效益方案',
      time: '2025/03/02 20:03:12',
      totalArea: '13,600',
      floorEfficiency: '77',
      floorHeight: '3.1',
      aboveGroundFloors: 13,
    },
    {
      src: 'assets/image/demo/render-cover-001.png',
      name: '最佳效益方案',
      time: '2025/03/03 20:03:12',
      totalArea: '10,500',
      floorEfficiency: '79',
      floorHeight: '3.4',
      aboveGroundFloors: 10,
    },
  ];

  buildProjectId = 0;
  buildProjVolumeId = 0;
  buildProjectDto = new BuildProjectDto();
  buildProjRenderViews: BuildProjRenderView[] = [];
  buildCompBundleOpts: BuildCompBundleView[] = [];
  buildProjectView = {} as BuildProjectView;
  buildProjVolumeView = {} as BuildProjVolumeView;
  styles: any[] = [];
  buildStyle = '';
  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    private thirdPartyApiServ: ThirdPartyApiServ,
    private _arcGenApiServ: ArcGenApiServ,
    private _appAttachApiServ: AppAttachApiServ,
    private _dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    protected override injector: Injector) {
    super(injector);
    this.styles = this.thirdPartyApiServ.getStyles();
  }

  ngOnInit(): void {
    console.log();
    this.doRouteMap();
  }
  doRouteMap(): void {
    this._route.queryParamMap.subscribe(params => {
      this.buildProjectId = Number(params.get('buildProjectId') || 0);
      this.buildProjVolumeId = Number(params.get('buildProjVolumeId') || 0);
      if (!this.buildProjectId) {
        this.messageServ.warning('查無專案，請重新操作。');
        this._router.navigate(['/']);
        return;
      }
      this.getDatas();
    });
  }

  getDatas(): void {
    this.onSearch();
    this.spinnerServ.show();
    const buildCompBundleReq = new BuildCompBundleReq();
    buildCompBundleReq.corpId = this.currUserInfo?.corpId || 0;
    forkJoin(
      [
        this.buildProjectApiServ.getBuildProjectViewById(this.buildProjectId),
        this.buildProjectApiServ.getBuildCompBundleViews(buildCompBundleReq),
        this.buildProjectApiServ.getBuildProjVolumeViewsByProjectId(this.buildProjectId),
      ]
    ).subscribe(([buildProjectView, buildCompBundleOpts, buildProjVolumeViews]) => {
      this.buildProjectView = buildProjectView;
      this.buildCompBundleOpts = [...buildCompBundleOpts || []];
      this.buildProjVolumeView = new List<BuildProjVolumeView>(buildProjVolumeViews).Where(w => w?.id === this.buildProjVolumeId).FirstOrDefault();
    }).add(() => this.spinnerServ.hide());
  }

  onSearch(): void {
    this.spinnerServ.show()
    this.buildProjectApiServ.getBuildProjRenderViewsByVolumeId(this.buildProjVolumeId).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.warning('查無任何資料。');
          return;
        }
        this.buildProjRenderViews = res;

        if (this.buildProjRenderViews.length) {
          const style = new List(this.styles).Where(w => w.value === this.buildProjRenderViews[0].buildStyle).FirstOrDefault();
          this.buildStyle = style ? style.name : '';
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  doRender(): void {
    if (!this.buildProjVolumeView?.resultAttId || this.buildProjVolumeView.resultAttId <= 0) {
      this.bbdNotifyServ.error(`執行失敗，查無渲染圖`);
      return;
    }
    if (!this.buildProjRenderViews?.length) {
      this.bbdNotifyServ.error(`執行失敗，至少要一張渲染過樣本圖`);
      return;
    }

    this._appAttachApiServ.downloadAppFileAtt(this.buildProjVolumeView.resultAttId)
      .pipe(
        mergeMap(blob => this.blobToBase64(blob)),
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((base64String) => {
        if (base64String) {
          const pureBase64 = base64String.replace(/^data:.*;base64,/, '');
          const resultJTO = JSON.parse(this.buildProjRenderViews[0].result || '{}');
          const dialogRef = this._dialog.open(MassRefinementRenderDialogComponent, {
            panelClass: 'bg-none-dialog',
            backdropClass: 'backdrop-blur-dialg',
            data: {
              captureImg: pureBase64,
              buildProjectId: this.buildProjectId,
              buildProjVolumeId: this.buildProjVolumeId,
              volOutput: resultJTO?.volOutput || {},
              isQuicklyGenerate: true,
            }
          });

          dialogRef.afterClosed().subscribe((res: any) => {
            if (res) {
              this.bbdNotifyServ.success(`渲染成功`);
              this.onSearch();
            }
          });
        }
      });
  }

  deleteBuildProjRender(id: number): void {
    const dialogRef = this._dialog.open(BBDConfirmDialogComponent, {
      data: {
        title: '您確認要「刪除」?',
        content: '「刪除」渲染結果，刪除後將無法復原。',
      },
      panelClass: 'rounded-md', // optional
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.spinnerServ.show();
        this.buildProjectApiServ.deleteBuildProjRender(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success(`刪除成功`);
              this.onSearch();
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          },
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  blobToBase64(blob: Blob): Observable<string> {
    return new Observable<string>((observer) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        observer.next(reader.result as string);
        observer.complete();
      };
      reader.onerror = (err) => {
        observer.error(err);
      };
      reader.readAsDataURL(blob);
    });
  }

  onRender(base64String: string): void {
    const renderView = this.buildProjRenderViews[0];
    const request = {
      img: base64String,
      lora_name: `${renderView.buildStyle}_${renderView.wallMat}`
    };
    this.spinnerServ.show();
    this._arcGenApiServ.generateImg(request).subscribe({
      next: (res) => {
        if ((!res)) {
          return;
        }
        if (res?.code === 0) {
          this.uploadBuildProjRenderDto(this.base64ToFile(res?.data, 'RenderImg.jpg'));
        } else {
          this.bbdNotifyServ.error('操作失敗', res?.message);
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('操作失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  base64ToFile(base64String: string, fileName: string): File {
    let mime = 'image/jpg';
    let data = base64String;

    // 如果是 data URL 格式
    if (base64String.startsWith('data:')) {
      const arr = base64String.split(',');
      const match = arr[0].match(/:(.*?);/);
      if (match) {
        mime = match[1];
      }
      data = arr[1];
    }

    // 解碼 base64 成 binary string
    const byteString = atob(data);
    const byteArray = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteArray[i] = byteString.charCodeAt(i);
    }

    return new File([byteArray], fileName, { type: mime });
  }

  uploadBuildProjRenderDto(file: File, isSpinner = true): void {
    const renderView = this.buildProjRenderViews[0];
    const uploadFormReq = new UploadFormReq();
    if (!file) {
      this.bbdNotifyServ.error('無檔案上傳');
      return;
    }
    uploadFormReq.append('file', file);
    const dto = new BuildProjRenderDto();
    dto.buildStyle = renderView.buildStyle;
    dto.wallMat = renderView.wallMat;
    dto.result = renderView.result;
    dto.buildProjVolumeId = this.buildProjVolumeId;
    uploadFormReq.jsonContent = JSON.stringify(dto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    if (isSpinner) { this.spinnerServ.show(); }
    this.buildProjectApiServ.uploadBuildProjRenderDto(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.bbdNotifyServ.success('渲染成功');
        this.onSearch();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => {
      if (isSpinner) { this.spinnerServ.hide(); }
    });
  }

  onDownloadClick(event: MouseEvent) {
    // 阻止事件冒泡，避免卡片的 routerLink 觸發
    event.stopPropagation();
  }

  onCardClick(event: MouseEvent) {
    // 可選：若你需要對卡片點擊行為做判斷，可在這裡處理
  }


}