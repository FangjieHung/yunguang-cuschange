/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

// Custom packages
import { BBDBaseComponent, BBDConfirmDialogComponent, JsonHelper } from '@core/shared';
import { AppStoreApiServ, BuildProjectApiServ, GetOutputsData, TPSShapediverServ, VisualizerInputJson } from '@core/services';
import { ShapediverViewerWidgetComponent } from '../../../../shared/widgets';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BuildProjectDto, BuildCompBundleView, BuildCompBundleReq, BuildProjVolumeDto, UploadFormReq, BuildProjVolumeReq, AppObjectStoreCodes } from '@core/models';
import { firstValueFrom, forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'linqts';
import { createSession, createViewport, FLAG_TYPE, ISessionApi, IViewportApi, SESSION_SETTINGS_MODE } from '@shapediver/viewer';
import { MassRefinementRenderDialogComponent } from '../../../../shared/components';
import { getTime } from 'date-fns';

@Component({
  selector: 'web-mass-refinement',
  templateUrl: './mass-refinement.component.html',
  styleUrls: ['./mass-refinement.component.scss'],
})

export class MassRefinementComponent extends BBDBaseComponent implements OnInit, OnDestroy {
  @ViewChild(ShapediverViewerWidgetComponent) viewerComponent!: ShapediverViewerWidgetComponent;

  isCollapsed = false;
  // 三段比例（總和為 100）
  segments = [28, 44, 28];
  isTotalValid = true;

  draggingThumb: number | null = null;

  math = Math;
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  buildProjectId = 0;
  buildProjVolumeId = 0;
  buildProjectDto = new BuildProjectDto();
  buildCompBundleOpts: BuildCompBundleView[] = [];
  valForm!: UntypedFormGroup;

  currVolume = new BuildProjVolumeDto();
  volParam: any;
  volResult: any;
  volOutput: any;

  // shapediver
  @ViewChild('canvasElement', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  session?: ISessionApi;
  viewport?: IViewportApi;
  visualizerInput: VisualizerInputJson = {
    visualizer: {
      layoutAndTags: false,
      massing: false,
      massingWithTemplate: false, // Detail頁面送false
      template: true, // Detail頁面送false
      structure: false,
      setbackBoundary: false,
      maximunBuildingArea: false,
      parking: false,
      basementLayout: false,
      envelope: false,
      slope36: false,
      slope50: false,
      setbackCheck: false,
      flightLimitationCheck: false,
    }
  };

  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    public tPSShapediverServ: TPSShapediverServ,
    private appStoreApiServ: AppStoreApiServ,
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    public _dialog: MatDialog,
    protected override injector: Injector) {
    super(injector);
    this.doInitForm();
    this.getCaches();
  }

  ngOnInit(): void {
    this.doRouteMap();
  }

  async ngOnDestroy(): Promise<void> {
    if (this.session) {
      await this.session.close();  // ✅ 等待資源釋放
      this.session = undefined;
    }
    if (this.viewport) {
      await this.viewport.close(); // ✅ 等待資源釋放
      this.viewport = undefined;
    }
  }

  getCaches(): void {
    this.spinnerServ.show();
    const buildCompBundleReq = new BuildCompBundleReq();
    buildCompBundleReq.corpId = this.currUserInfo?.corpId || 0;
    forkJoin(
      [
        this.buildProjectApiServ.getBuildCompBundleViews(buildCompBundleReq)
      ]
    ).subscribe(([buildCompBundleOpts]) => {
      this.buildCompBundleOpts = [...buildCompBundleOpts || []];
    }).add(() => this.spinnerServ.hide());
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

      this.doDataInit();
    });
  }
  private async initShapeDiver(typologyVal: number | null = null): Promise<void> {
    try {
      this.session = undefined;
      this.viewport = undefined;

      this.spinnerServ.show();
      if (!this.appStoreApiServ.shapeDiverTicketKeyJto) {
        this.appStoreApiServ.shapeDiverTicketKeyJto = await firstValueFrom(
          this.appStoreApiServ.getAppObjectStoreValueByCode(AppObjectStoreCodes.ShapeDiverTicketKey)
        );
      }

      if (!this.canvasRef?.nativeElement) throw new Error('Canvas not found');

      // 建立 viewport
      this.viewport = await createViewport({
        id: this.tPSShapediverServ.changeModelV2.viewport,
        canvas: this.canvasRef.nativeElement,
        sessionSettingsId: this.tPSShapediverServ.changeModelV2.session,
        sessionSettingsMode: SESSION_SETTINGS_MODE.MANUAL,
      });

      // 建立 session
      const ticket = this.tPSShapediverServ.getTicketV2(typologyVal, this.appStoreApiServ.shapeDiverTicketKeyJto);
      this.session = await createSession({
        id: this.tPSShapediverServ.changeModelV2.session,
        ticket: ticket,
        modelViewUrl: this.tPSShapediverServ.modelViewUrl,
        excludeViewports: [this.tPSShapediverServ.generateOption.viewport],
      });

      console.log('Session and viewport initialized.');
      console.log(`Session ticket use: ${ticket}`);
    } catch (err) {
      console.error('ShapeDiver 初始化錯誤：', err);
    } finally {
      this.spinnerServ.hide();
    }
  }

  doDataInit() {
    this.buildProjectApiServ.getBuildProjectDtoById(this.buildProjectId).subscribe({
      next: (res) => {
        if (!res) {
          this.messageServ.warning('查無專案，請重新操作。');
          this._router.navigate(['/']);
          return;
        }

        this.buildProjectDto = res;
        this.currVolume = new List<BuildProjVolumeDto>(this.buildProjectDto.volumes || []).Where(w => w?.id === this.buildProjVolumeId).FirstOrDefault();
        const volumeParamJto = JSON.parse(this.currVolume.param || '{}');
        const volumeTypology = volumeParamJto?.optionInput?.option?.optionCriteria?.basicCriteria?.typology || 0;
        this.initShapeDiver(volumeTypology).then(() => {
          this.doBindVolume();
        });
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    });
  }

  doInitForm(): void {
    this.valForm = this._fb.group({
      egressDistance: [null, Validators.required],
      corridorWidth: [null, Validators.required],
      numFloors: [0, Validators.required],
      publicSpaceRatio: [null, Validators.required],
      numCarParks: [0, Validators.required],
      numMotorParks: [0, Validators.required],
      // 房型比例
      apartmentUnitMixA: [null, [Validators.required]],
      apartmentUnitMixB: [null, [Validators.required]],
      apartmentUnitMixC: [null, [Validators.required]],
    });
  }
  doBindVolume(): void {
    this.volParam = JsonHelper.parseSafeJSON(this.currVolume.param || '{}');
    this.volResult = JsonHelper.parseSafeJSON(this.currVolume.result || '{}');

    if (Object.keys(this.volResult).length === 0) {
      this.messageServ.warning('查無量體結果，請重新操作。');
      this._router.navigate(['/project/mass-comparison'], {
        queryParams: {
          buildProjectId: this.buildProjectDto.id,
        }
      });
      return;
    }

    this.f['egressDistance'].setValue(this.volResult?.option?.optionCriteria?.advancedCriteria?.egressDistance || null);
    this.f['corridorWidth'].setValue(this.volResult?.option?.optionCriteria?.advancedCriteria?.corridorWidth || null);
    this.f['numFloors'].setValue(this.volResult?.option?.optionCriteria?.basicCriteria?.numFloors || 0);
    this.f['publicSpaceRatio'].setValue(this.volResult?.option?.optionCriteria?.basicCriteria?.publicSpaceRatio * 100 || 0);
    this.f['numCarParks'].setValue(this.volResult?.option?.optionCriteria?.basicCriteria?.numCarParks || 0);
    this.f['numMotorParks'].setValue(this.volResult?.option?.optionCriteria?.basicCriteria?.numMotorParks || 0);

    this.f['apartmentUnitMixA'].setValue(Math.floor(this.volResult?.option.optionCriteria.basicCriteria.apartmentUnitMix[0]?.ratio * 100 || 32));
    this.f['apartmentUnitMixB'].setValue(Math.floor(this.volResult?.option.optionCriteria.basicCriteria.apartmentUnitMix[1]?.ratio * 100 || 34));
    this.f['apartmentUnitMixC'].setValue(Math.floor(this.volResult?.option.optionCriteria.basicCriteria.apartmentUnitMix[2]?.ratio * 100 || 34));
    this.segments[0] = this.f['apartmentUnitMixA'].value;
    this.segments[1] = this.f['apartmentUnitMixB'].value;
    this.segments[2] = this.f['apartmentUnitMixC'].value;

    setTimeout(() => {
      this.onGenerateVolume();
    }, 1000);
  }

  onGenerateVolume(): void {
    const values = this.valForm.value;
    const compBundle = new List<BuildCompBundleView>(this.buildCompBundleOpts).Where(w => w?.id === this.buildProjectDto.buildCompBundleId).FirstOrDefault();
    // 如果 optionOutput seed回傳為0，需要重新產生
    this.volResult.option.seed = this.volResult.option.seed ? this.volResult.option.seed : getTime(new Date()) % 10000000;
    this.volResult.option.optionCriteria.advancedCriteria.egressDistance = values.egressDistance || 0;
    this.volResult.option.optionCriteria.advancedCriteria.corridorWidth = values.corridorWidth || 0;
    this.volResult.option.optionCriteria.basicCriteria.numFloors = values.numFloors || 0;
    this.volResult.option.optionCriteria.basicCriteria.publicSpaceRatio = (values.publicSpaceRatio / 100) || 0;
    this.volResult.option.optionCriteria.basicCriteria.numCarParks = values.numCarParks || 0;
    this.volResult.option.optionCriteria.basicCriteria.numMotorParks = values.numMotorParks || 0;
    this.volResult.option.optionCriteria.basicCriteria.apartmentUnitMix[0].ratio = this.segments[0] / 100;
    this.volResult.option.optionCriteria.basicCriteria.apartmentUnitMix[1].ratio = this.segments[1] / 100;
    this.volResult.option.optionCriteria.basicCriteria.apartmentUnitMix[2].ratio = this.segments[2] / 100;
    this.spinnerServ.show();
    this.customize().then(() => this.spinnerServ.hide());
  }

  async customize() {
    if (!this.session) return;
    // 2025-09更新：seed 要使用量體產生預覽卡片中的seed沿用
    // this.volResult.option.seed = Number(getTime(new Date()).toString().slice(-7));
    const p = this.session.getParameterByName(this.tPSShapediverServ.optionInput);
    p[0].value = JSON.stringify(this.volResult);
    const p1 = this.session.getParameterByName(this.tPSShapediverServ.visualizerInput);
    p1[0].value = JSON.stringify(this.visualizerInput);

    const p3 = this.session.getParameterByName(this.tPSShapediverServ.projectInput);
    const projectInputOTJ = JSON.stringify(this.volParam.projectInput || {});
    p3[0].value = projectInputOTJ;

    await this.session.customize();
    this.volOutput = GetOutputsData(this.tPSShapediverServ.optionOutput, this.session);
    this.viewport?.update();
  }

  async doExportExcel(): Promise<void> {
    if (!this.session) {
      this.bbdNotifyServ.warning(`匯出失敗: 模型尚未初始化完成．`);
      return;
    };

    const downloadCsv = this.session.getExportByName('downloadCsv')[0];
    if (!downloadCsv) {
      this.bbdNotifyServ.error(`匯出失敗: 查無匯出檔案．`);
      return;
    }
    this.spinnerServ.show();
    const res = await downloadCsv.request();
    if (!res?.content) {
      this.bbdNotifyServ.error(`匯出失敗: 查無匯出檔案．`);
      return;
    }
    // 待回傳測試Binding
    const href = res.content[0]?.href;
    window.open(href, '_blank');
    this.bbdNotifyServ.success(`下載成功`);
    this.spinnerServ.hide();
  }

  onRender(): void {
    const dialogRef = this._dialog.open(MassRefinementRenderDialogComponent, {
      panelClass: 'bg-none-dialog',
      backdropClass: 'backdrop-blur-dialg',
      data: {
        captureImg: this.getCaptureScreenshotBase64(),
        buildProjectId: this.buildProjectId,
        buildProjVolumeId: this.buildProjVolumeId,
        volOutput: this.volOutput,
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.bbdNotifyServ.success(`渲染成功`);
        this._router.navigate(['project/render-list'], { queryParams: { buildProjectId: this.buildProjectId, buildProjVolumeId: this.buildProjVolumeId } });
      }
    });
  }

  public getCaptureScreenshotBase64(): string {
    const canvas = this.canvasRef.nativeElement;
    const base64WithPrefix = canvas.toDataURL('image/png');
    const base64Image = base64WithPrefix.replace(/^data:image\/png;base64,/, '');
    return base64Image;
  }

  doCompareVolumeResult(): boolean {
    this.volResult = JsonHelper.parseSafeJSON(this.currVolume.result || '{}');
    if (this.f['egressDistance'].value !== this.volResult?.option?.optionCriteria?.advancedCriteria?.egressDistance) {
      return true;
    }
    if (this.f['corridorWidth'].value !== this.volResult?.option?.optionCriteria?.advancedCriteria?.corridorWidth) {
      return true;
    }
    if (this.f['numFloors'].value !== this.volResult?.option?.optionCriteria?.basicCriteria?.numFloors) {
      return true;
    }
    const publicSpaceRatio = this.volResult?.option?.optionCriteria?.basicCriteria?.publicSpaceRatio;
    if (this.f['publicSpaceRatio'].value !== publicSpaceRatio * 100) {
      return true;
    }
    if (this.f['numCarParks'].value !== this.volResult?.option?.optionCriteria?.basicCriteria?.numCarParks) {
      return true;
    }
    if (this.f['numMotorParks'].value !== this.volResult?.option?.optionCriteria?.basicCriteria?.numMotorParks) {
      return true;
    }
    if (this.segments[0] !== Math.floor(this.volResult?.option.optionCriteria.basicCriteria.apartmentUnitMix[0]?.ratio * 100 || 32)) {
      return true;
    }
    if (this.segments[1] !== Math.floor(this.volResult?.option.optionCriteria.basicCriteria.apartmentUnitMix[1]?.ratio * 100 || 34)) {
      return true;
    }
    if (this.segments[2] !== Math.floor(this.volResult?.option.optionCriteria.basicCriteria.apartmentUnitMix[2]?.ratio * 100 || 34)) {
      return true;
    }
    return false;
  }

  doParamSave(isDitto = false): void {
    const values = this.valForm.value;
    this.volResult.option.optionCriteria.advancedCriteria.egressDistance = values.egressDistance || null;
    this.volResult.option.optionCriteria.advancedCriteria.corridorWidth = values.corridorWidth || null;
    this.volResult.option.optionCriteria.basicCriteria.numFloors = values.numFloors || 0;
    this.volResult.option.optionCriteria.basicCriteria.publicSpaceRatio = values.publicSpaceRatio / 100 || 0;
    this.volResult.option.optionCriteria.basicCriteria.numCarParks = values.numCarParks || 0;
    this.volResult.option.optionCriteria.basicCriteria.numMotorParks = values.numMotorParks || 0;
    this.volResult.option.optionCriteria.basicCriteria.apartmentUnitMix[0].ratio = this.segments[0] / 100;
    this.volResult.option.optionCriteria.basicCriteria.apartmentUnitMix[1].ratio = this.segments[1] / 100;
    this.volResult.option.optionCriteria.basicCriteria.apartmentUnitMix[2].ratio = this.segments[2] / 100;

    const buildProjVolumeDto = this.currVolume;
    buildProjVolumeDto.result = JSON.stringify(this.volResult);
    buildProjVolumeDto.id = isDitto ? 0 : buildProjVolumeDto.id;
    this.buildProjectApiServ.setBuildProjVolumeDto(buildProjVolumeDto).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        if (isDitto) {
          this.bbdNotifyServ.success(`量體進階調整參數「另存新檔」成功`);
        } else {
          this.bbdNotifyServ.success(`量體進階調整參數「儲存」成功`);
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    });
  }

  doBack(): void {
    if (this.doCompareVolumeResult()) {
      const dialogRef = this._dialog.open(BBDConfirmDialogComponent, {
        data: {
          title: `已發現您的參數有異動變更`,
          content: `請選擇參數變更方式。`,
          confirmText: '儲存',
          confirmTextB: '另存新檔'
        },
        panelClass: 'rounded-md', // optional
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((confirmed: any) => {
        if (confirmed) {
          if (confirmed === 'confirmA') {
            this.doParamSave();
          } else {
            this.doParamSave(true);
          }
        }
        this.onBack();
      });
    } else {
      this.onBack();
    }
  }

  onBack(): void {
    this._router.navigate(['/project/mass-comparison'], { queryParams: { buildProjectId: this.buildProjectDto.id } });
  }

  doRenderPre(): void {
    if (this.doCompareVolumeResult()) {
      const dialogRef = this._dialog.open(BBDConfirmDialogComponent, {
        data: {
          title: `已發現您的參數有異動變更`,
          content: `請選擇參數變更方式。`,
          confirmText: '儲存',
          confirmTextB: '另存新檔'
        },
        panelClass: 'rounded-md', // optional
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((confirmed: any) => {
        if (confirmed) {
          if (confirmed === 'confirmA') {
            this.doParamSave();
          } else {
            this.doParamSave(true);
          }
        }
        this.doRender();
      });
    } else {
      this.doRender();
    }
  }
  doRender(): void {
    const file = this.base64ToFile(this.getCaptureScreenshotBase64(), 'VolumeResultImg.jpg');
    const uploadFormReq = new UploadFormReq();
    if (!file) {
      this.bbdNotifyServ.error('無檔案上傳');
      return;
    }
    uploadFormReq.append('file', file);
    const dto = new BuildProjVolumeReq();
    dto.id = this.buildProjVolumeId;
    uploadFormReq.jsonContent = JSON.stringify(dto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show();
    this.buildProjectApiServ.uploadBuildProjVolumeResultAtt(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.onRender();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => {
      this.spinnerServ.hide();
    });
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

  onToggleChanged(event: any) {
    // this.onGenerateVolume();
  }

  //#region slider-bar
  startDrag(index: number) {
    this.draggingThumb = index;
  }
  stopDrag() {
    this.draggingThumb = null;
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.draggingThumb === null) return;

    const bar = document.getElementById('slider-bar');
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    let percent = (offsetX / rect.width) * 100;

    // 限制百分比為 0~100，避免 thumb 超出邊界
    percent = Math.max(0, Math.min(100, percent));

    if (this.draggingThumb === 0) {
      // 限制 thumb[0] 不可超過 segments[0] + segments[1]
      const maxVal = this.segments[0] + this.segments[1];
      const newVal = Math.min(percent, maxVal);
      this.segments[0] = Math.round(newVal);
      this.segments[1] = Math.round(maxVal - this.segments[0]);
    } else if (this.draggingThumb === 1) {
      const minVal = this.segments[0];
      const newVal = Math.max(percent, minVal);
      this.segments[1] = Math.round(newVal - this.segments[0]);
      this.segments[2] = Math.round(100 - newVal);
    }
  }
  @HostListener('document:mouseup')
  onMouseUp() {
    this.stopDrag();
  }
  onInputChange(index: number, value: number) {
    // 限制輸入值為 0～100 的整數
    value = Math.max(0, Math.min(100, Math.round(value)));
    // 計算剩餘值
    const remain = 100 - value;
    // 取得另外兩段的 index
    const others = [0, 1, 2].filter(i => i !== index);
    // 取得原始比例
    const totalOther = this.segments[others[0]] + this.segments[others[1]] || 1; // 防止除以 0
    const val1 = Math.round(remain * (this.segments[others[0]] / totalOther));
    const val2 = 100 - value - val1;
    // 賦值
    this.segments[index] = value;
    this.segments[others[0]] = val1;
    this.segments[others[1]] = val2;
  }
  //#endregion
}
