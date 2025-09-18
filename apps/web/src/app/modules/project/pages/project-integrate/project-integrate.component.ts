/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector, Inject, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppObjectStoreCodes, BuildCompBundleReq, BuildCompBundleView, BuildProjectDto, BuildProjVolumeDto, UploadFormReq } from '@core/models';
import { AppStoreApiServ, BuildProjectApiServ, GetOutputsData, OptionInputJson, ProjectInputJson, ThirdPartyApiServ, TPSShapediverServ, VisualizerInputJson } from '@core/services';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { createSession, createViewport, ISessionApi, IViewportApi } from '@shapediver/viewer';
import { getTime } from 'date-fns';
import { List } from 'linqts';
import { firstValueFrom, forkJoin } from 'rxjs';

@Component({
  selector: 'web-project-integrate',
  templateUrl: './project-integrate.component.html',
  styleUrls: ['./project-integrate.component.scss'],
})

export class ProjectIntegrateComponent extends BBDBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  buildProjectId = 0;
  buildProjAnalyseDoc: any;
  buildProjectDto = new BuildProjectDto();
  valForm!: UntypedFormGroup;
  buildCompBundleOpts: BuildCompBundleView[] = [];
  // shapediver
  @ViewChild('canvasElement', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  session?: ISessionApi;
  viewport?: IViewportApi;
  volumeLength = 1;
  formThreshold = this.thirdPartyApiServ.formThreshold;
  isRebalancing = false;
  uploadVolumeDtos: any[] = [];
  visualizerInput: VisualizerInputJson = {
    visualizer: {
      layoutAndTags: false,
      massing: false,
      massingWithTemplate: true, // 量體頁面送true
      template: false, // 量體頁面送false
      structure: false,
      setbackBoundary: false,
      maximunBuildingArea: false,
      parking: false,
      basementLayout: false,
      envelope: false,
    }
  };

  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    public thirdPartyApiServ: ThirdPartyApiServ,
    public tPSShapediverServ: TPSShapediverServ,
    private appStoreApiServ: AppStoreApiServ,
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    protected override injector: Injector) {
    super(injector);
    this.doFormInit();
  }
  ngOnInit(): void {
    this.doRouteMap();
  }
  async ngAfterViewInit() {
    // await this.loadViewer();
    this.initShapeDiver();
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

  doRouteMap(): void {
    this._route.queryParamMap.subscribe(params => {
      this.buildProjectId = Number(params.get('buildProjectId') || 0);
      if (!this.buildProjectId) {
        this.messageServ.warning('查無專案，請重新操作。');
        this._router.navigate(['/']);
        return;
      }
      this.getDatas();
    });
  }

  getDatas(): void {
    this.spinnerServ.show();
    const buildCompBundleReq = new BuildCompBundleReq();
    buildCompBundleReq.corpId = this.currUserInfo?.corpId || 0;
    forkJoin(
      [
        this.buildProjectApiServ.getBuildProjectDtoById(this.buildProjectId),
        this.buildProjectApiServ.getBuildCompBundleViews(buildCompBundleReq)
      ]
    ).subscribe(([buildProjectDto, buildCompBundleOpts]) => {
      this.buildProjectDto = buildProjectDto;
      this.buildCompBundleOpts = [...buildCompBundleOpts || []];
      this.getOptimalBuildProjDocAnalyseResult();

    }).add(() => this.spinnerServ.hide());
  }

  getOptimalBuildProjDocAnalyseResult(): void {
    this.spinnerServ.show();
    this.buildProjectApiServ.getOptimalBuildProjDocAnalyseResult(this.buildProjectId).subscribe({
      next: (res) => {
        if ((!res)) {
          return;
        }
        this.buildProjAnalyseDoc = res || null;
      },
      error: (err) => {
        // this.bbdNotifyServ.error('操作失敗', err);
      }
    }).add(() => {
      this.spinnerServ.hide();
      this.doBindAnalyseDoc();
    });
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      // 建蔽率
      buildingCoverRatio: [null,],
      // 公設比例
      publicSpaceRatio: [null,],
      // 容積率
      floorAreaRatio: [null,],
      // 房型比例
      apartmentUnitMixA: [30,],
      apartmentUnitMixB: [40,],
      apartmentUnitMixC: [30,],
      // 地上樓層數
      numFloors: [null,],
      // 地下室層數
      numBasements: [null,],
      // 棟數
      numBuildings: [null,],
      // 其他欄位
      // 樓層高度(標準層/地面層/地下室)
      floorToFloor: [null,],
      // 防火梯逃生距離
      egressDistance: [null,],
      // 商用空間 店鋪總面積
      commercialArea: [null,],
      // 商用空間 店鋪數量
      commercialUnits: [null,],
      // 最低走廊寬度
      corridorWidth: [null,],
      // 最少停車格數
      numCarParks: [null,],
      // 最少機車格數
      numMotorParks: [null,],
      // 最低戶數
      numApartmentUnits: [null,],
      // 量體型態
      typology: [1,],
    });
    this.doFormValidSet();
  }
  watchMixChanges(): void {
    const controls = ['apartmentUnitMixA', 'apartmentUnitMixB', 'apartmentUnitMixC'];

    controls.forEach(controlName => {
      this.valForm.get(controlName)?.valueChanges.subscribe(value => {
        this.rebalanceMix(controlName, value);
      });
    });
  }

  rebalanceMix(changedControl: string, value: number): void {
    // 防止遞迴觸發
    if (this.isRebalancing) return;

    this.isRebalancing = true;

    const total = 100;
    const otherControls = ['apartmentUnitMixA', 'apartmentUnitMixB', 'apartmentUnitMixC'].filter(c => c !== changedControl);
    const remaining = total - (value ?? 0);

    // 簡單平均分配給其他兩個欄位
    const val1 = Math.floor(remaining / 2);
    const val2 = remaining - val1;

    this.valForm.get(otherControls[0])?.setValue(val1, { emitEvent: false });
    this.valForm.get(otherControls[1])?.setValue(val2, { emitEvent: false });

    this.isRebalancing = false;
  }

  doFormValidSet(): void {
    this.f['buildingCoverRatio'].setValidators([
      Validators.required,
      ...(this.formThreshold.buildingCoverRatio.min != null ? [Validators.min(this.formThreshold.buildingCoverRatio.min)] : []),
      ...(this.formThreshold.buildingCoverRatio.max != null ? [Validators.max(this.formThreshold.buildingCoverRatio.max)] : []),
      ...(this.formThreshold.buildingCoverRatio.pattern != null ? [Validators.pattern(this.formThreshold.buildingCoverRatio.pattern)] : [])
    ]);
    this.f['buildingCoverRatio'].updateValueAndValidity();

    this.f['publicSpaceRatio'].setValidators([
      Validators.required,
      ...(this.formThreshold.publicSpaceRatio.min != null ? [Validators.min(this.formThreshold.publicSpaceRatio.min)] : []),
      ...(this.formThreshold.publicSpaceRatio.max != null ? [Validators.max(this.formThreshold.publicSpaceRatio.max)] : []),
      ...(this.formThreshold.publicSpaceRatio.pattern != null ? [Validators.pattern(this.formThreshold.publicSpaceRatio.pattern)] : [])
    ]);
    this.f['publicSpaceRatio'].updateValueAndValidity();

    this.f['floorAreaRatio'].setValidators([
      Validators.required,
      ...(this.formThreshold.floorAreaRatio.min != null ? [Validators.min(this.formThreshold.floorAreaRatio.min)] : []),
      ...(this.formThreshold.floorAreaRatio.max != null ? [Validators.max(this.formThreshold.floorAreaRatio.max)] : []),
      ...(this.formThreshold.floorAreaRatio.pattern != null ? [Validators.pattern(this.formThreshold.floorAreaRatio.pattern)] : [])
    ]);
    this.f['floorAreaRatio'].updateValueAndValidity();

    this.f['apartmentUnitMixA'].setValidators([
      Validators.required,
      ...(this.formThreshold.apartmentUnitMix.min != null ? [Validators.min(this.formThreshold.apartmentUnitMix.min)] : []),
      ...(this.formThreshold.apartmentUnitMix.max != null ? [Validators.max(this.formThreshold.apartmentUnitMix.max)] : []),
      ...(this.formThreshold.apartmentUnitMix.pattern != null ? [Validators.pattern(this.formThreshold.apartmentUnitMix.pattern)] : [])
    ]);
    this.f['apartmentUnitMixA'].updateValueAndValidity();
    this.f['apartmentUnitMixB'].setValidators([
      Validators.required,
      ...(this.formThreshold.apartmentUnitMix.min != null ? [Validators.min(this.formThreshold.apartmentUnitMix.min)] : []),
      ...(this.formThreshold.apartmentUnitMix.max != null ? [Validators.max(this.formThreshold.apartmentUnitMix.max)] : []),
      ...(this.formThreshold.apartmentUnitMix.pattern != null ? [Validators.pattern(this.formThreshold.apartmentUnitMix.pattern)] : [])
    ]);
    this.f['apartmentUnitMixB'].updateValueAndValidity();
    this.f['apartmentUnitMixC'].setValidators([
      Validators.required,
      ...(this.formThreshold.apartmentUnitMix.min != null ? [Validators.min(this.formThreshold.apartmentUnitMix.min)] : []),
      ...(this.formThreshold.apartmentUnitMix.max != null ? [Validators.max(this.formThreshold.apartmentUnitMix.max)] : []),
      ...(this.formThreshold.apartmentUnitMix.pattern != null ? [Validators.pattern(this.formThreshold.apartmentUnitMix.pattern)] : [])
    ]);
    this.f['apartmentUnitMixC'].updateValueAndValidity();

    this.f['numFloors'].setValidators([
      Validators.required,
      ...(this.formThreshold.numFloors.min != null ? [Validators.min(this.formThreshold.numFloors.min)] : []),
      ...(this.formThreshold.numFloors.max != null ? [Validators.max(this.formThreshold.numFloors.max)] : []),
      ...(this.formThreshold.numFloors.pattern != null ? [Validators.pattern(this.formThreshold.numFloors.pattern)] : [])
    ]);
    this.f['numFloors'].updateValueAndValidity();

    this.f['numBuildings'].setValidators([
      Validators.required,
      ...(this.formThreshold.numBuildings.min != null ? [Validators.min(this.formThreshold.numBuildings.min)] : []),
      ...(this.formThreshold.numBuildings.max != null ? [Validators.max(this.formThreshold.numBuildings.max)] : []),
      ...(this.formThreshold.numBuildings.pattern != null ? [Validators.pattern(this.formThreshold.numBuildings.pattern)] : [])
    ]);
    this.f['numBuildings'].updateValueAndValidity();

    this.f['numBasements'].setValidators([
      Validators.required,
      ...(this.formThreshold.numBasements.min != null ? [Validators.min(this.formThreshold.numBasements.min)] : []),
      ...(this.formThreshold.numBasements.max != null ? [Validators.max(this.formThreshold.numBasements.max)] : []),
      ...(this.formThreshold.numBasements.pattern != null ? [Validators.pattern(this.formThreshold.numBasements.pattern)] : [])
    ]);
    this.f['numBasements'].updateValueAndValidity();
  }

  doBindAnalyseDoc(): void {
    const volParam = JSON.parse(this.buildProjectDto.volParam || '{}');
    if (Object.keys(volParam).length > 0) {
      this.valForm.patchValue(volParam);
    } else {
      const data = this.buildProjAnalyseDoc || {};
      this.f['buildingCoverRatio'].setValue(this.getRatio(data?.building_coverage_ratio?.data, '%') || this.formThreshold.buildingCoverRatio.defaultVal);
      this.f['publicSpaceRatio'].setValue(this.getRatio(data?.common_area_ratio?.data, '%') || this.formThreshold.publicSpaceRatio.defaultVal);
      this.f['floorAreaRatio'].setValue(this.getRatio(data?.floor_area_ratio?.data, '%') || this.formThreshold.floorAreaRatio.defaultVal);
      this.f['apartmentUnitMixA'].setValue(this.formThreshold.apartmentUnitMix.defaultVals[0]);
      this.f['apartmentUnitMixB'].setValue(this.formThreshold.apartmentUnitMix.defaultVals[1]);
      this.f['apartmentUnitMixC'].setValue(this.formThreshold.apartmentUnitMix.defaultVals[2]);
      this.f['numFloors'].setValue(this.formThreshold.numFloors.defaultVal);
      this.f['numBuildings'].setValue(this.getRatio(data?.building_blocks?.data, '棟') || this.formThreshold.numBuildings.defaultVal);
      this.f['numBasements'].setValue(this.getRatio(data?.basement_levels?.data, '層') || this.formThreshold.numBasements.defaultVal);
      // 其他欄位 
      this.f['floorToFloor'].setValue(this.getRatio(data?.floor_height_standard?.data, 'm') || this.formThreshold.floorToFloor.defaultVal);
      this.f['egressDistance'].setValue(this.getRatio(data?.fire_escape_distance?.data, 'm') || this.formThreshold.egressDistance.defaultVal);
      this.f['commercialArea'].setValue(this.formThreshold.commercialArea.defaultVals[0]);
      this.f['commercialUnits'].setValue(this.formThreshold.commercialArea.defaultVals[1]);
      this.f['corridorWidth'].setValue(this.getRatio(data?.min_corridor_width?.data, 'm') || this.formThreshold.corridorWidth.defaultVal);
      this.f['numCarParks'].setValue(this.getRatio(data?.min_parking_car?.data, '位') || this.formThreshold.numCarParks.defaultVal);
      this.f['numMotorParks'].setValue(this.getRatio(data?.min_parking_motor?.data, '位') || this.formThreshold.numMotorParks.defaultVal);
      this.f['numApartmentUnits'].setValue(this.getRatio(data?.min_units?.data, '戶') || this.formThreshold.numApartmentUnits.defaultVal);
    }

    this.watchMixChanges();
  }

  getRatio(value: string | null | undefined, symbolsToRemove = '%'): number {
    if (!value) {
      return 0;
    }

    const trimmedValue = value.trim();

    // 如果值本身就是數字（純數字字串），直接轉數字
    if (/^\d+(\.\d+)?$/.test(trimmedValue)) {
      return parseFloat(trimmedValue);
    }

    // 否則去掉指定符號
    const pattern = new RegExp(`[${symbolsToRemove}]`, 'g');
    const cleaned = trimmedValue.replace(pattern, '').trim();

    return parseFloat(cleaned) || 0;
  }

  onSubmit(): void {
    this.canSubmit();
    this.buildProjectDto.volParam = JSON.stringify(this.valForm.value);
    const uploadFormReq = new UploadFormReq();
    uploadFormReq.jsonContent = JSON.stringify(this.buildProjectDto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show();
    this.buildProjectApiServ.uploadBuildProjectDto(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.onGenerateVolume();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗:請確認網路是否正常', err);
      },
    });//.add(() => this.spinnerServ.hide());
  }

  canSubmit() {
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    if (!this.buildProjectDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
  }

  private async initShapeDiver(typologyVal: number | null = 1): Promise<void> {
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
        id: this.tPSShapediverServ.generateOption.viewport,
        canvas: this.canvasRef.nativeElement,
      });

      // 建立 session
      // 首次生成預設O型 typologyVal = 1
      this.session = await createSession({
        id: this.tPSShapediverServ.generateOption.session,
        ticket: this.tPSShapediverServ.getTicketV2(typologyVal, this.appStoreApiServ.shapeDiverTicketKeyJto),
        modelViewUrl: this.tPSShapediverServ.modelViewUrl,
        // ✅ 不排除任何 viewport，讓它自動關聯
        excludeViewports: [],
      });

      console.log('Session and viewport initialized.');
    } catch (err) {
      console.error('ShapeDiver 初始化錯誤：', err);
    } finally {
      this.spinnerServ.hide();
    }
  }

  onGenerateVolume(): void {
    const values = this.valForm.value;
    const compBundle = new List<BuildCompBundleView>(this.buildCompBundleOpts).Where(w => w?.id === this.buildProjectDto.buildCompBundleId).FirstOrDefault();
    const optionInput: OptionInputJson = {
      option: {
        seed: 0,
        project: `xxxx-xxxx-proj-${this.buildProjectDto.id}`,
        optionCriteria: {
          basicCriteria: {
            siteConstraints: {
              buildingCoverRatio: 60,
              floorAreaRatio: 120,
              offsetDistances: [0.6, 0.6, 0.6],
              excavationRatio: 0.4,
            },
            // 代辦：搭配 compBundle 動態產生
            apartmentUnitMix: [
              {
                name: "1BR",
                template: "XXXX-XXXX-1BR0-0001",
                ratio: (values.apartmentUnitMixA || 30) / 100,
                unitArea: 0,
              },
              {
                name: "2BR",
                template: "XXXX-XXXX-2BR0-0001",
                ratio: (values.apartmentUnitMixB || 40) / 100,
                unitArea: 0,
              },
              {
                name: "3BR",
                template: "XXXX-XXXX-3BR0-0001",
                ratio: (values.apartmentUnitMixC || 30) / 100,
                unitArea: 0,
              },
            ],
            numBasements: 3,
            numFloors: 15,
            floorToFloor: 3.4,
            numApartmentUnits: 230,
            publicSpaceRatio: 0.2,
            numCarParks: 100,
            numMotorParks: 120,
            typology: 1,
            numBuildings: 2,
          },
          advancedCriteria: {
            corridorWidth: 2.0,
            coreWidth: 9.0,
            coreLength: 6.0,
            coreSide: 0,
            egressDistance: 30,
          },
        },
      },
    };

    optionInput.option.optionCriteria.basicCriteria.siteConstraints.buildingCoverRatio = values.buildingCoverRatio / 100 || this.formThreshold.buildingCoverRatio.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.siteConstraints.floorAreaRatio = values.floorAreaRatio / 100 || this.formThreshold.floorAreaRatio.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.publicSpaceRatio = values.publicSpaceRatio / 100 || this.formThreshold.publicSpaceRatio.defaultVal;

    // 房型比例 於上方處理apartmentUnitMix
    optionInput.option.optionCriteria.basicCriteria.numFloors = values.numFloors || this.formThreshold.numFloors.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.numBuildings = values.numBuildings || this.formThreshold.numBuildings.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.numBasements = values.numBasements || this.formThreshold.numBasements.defaultVal;
    // 其他欄位
    optionInput.option.optionCriteria.basicCriteria.floorToFloor = values.floorToFloor || this.formThreshold.floorToFloor.defaultVal;
    optionInput.option.optionCriteria.advancedCriteria.egressDistance = values.egressDistance || this.formThreshold.egressDistance.defaultVal;
    optionInput.option.optionCriteria.advancedCriteria.corridorWidth = values.corridorWidth || this.formThreshold.corridorWidth.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.numCarParks = values.numCarParks || this.formThreshold.numCarParks.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.numMotorParks = values.numMotorParks || this.formThreshold.numMotorParks.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.numApartmentUnits = values.numApartmentUnits || this.formThreshold.numApartmentUnits.defaultVal;
    optionInput.option.optionCriteria.basicCriteria.typology = values.typology || this.formThreshold.typology.defaultVal;

    const baseCoordInfo = this.getBaseCoordInfo();
    optionInput.option.optionCriteria.basicCriteria.siteConstraints.offsetDistances = baseCoordInfo?.offsetDistances || [];
    optionInput.option.optionCriteria.basicCriteria.siteConstraints.flightLimitation = baseCoordInfo.flightLimitation;
    // 缺商用空間 店鋪總面積(commercialArea) 商用空間 店鋪數量(commercialUnits)
    this.customize(optionInput).then(() => {
      if (this.uploadVolumeDtos.length > 3) {
        this.uploadVolumeDtos = [];
        this.bbdNotifyServ.warning(`處理中斷：您點的速度太快，最多只能處理3個量體`);
        return;
      }
      this.uploadBuildProjVolumeDtos();
    });
  }

  async customize(optionInput: OptionInputJson) {
    if (!this.session) return;

    this.spinnerServ.show();
    this.uploadVolumeDtos = [];

    for (let i = 0; i < this.volumeLength; i++) {
      // 產生 7 碼 seed
      optionInput.option.seed = Number(getTime(new Date()).toString().slice(-7));

      const p = this.session.getParameterByName(this.tPSShapediverServ.optionInput);
      const optionInputOTJ = JSON.stringify(optionInput);
      p[0].value = optionInputOTJ;

      const visualizerInput = this.session.getParameterByName(this.tPSShapediverServ.visualizerInput);
      visualizerInput[0].value = JSON.stringify(this.visualizerInput);

      const p1 = this.session.getParameterByName(this.tPSShapediverServ.projectInput);
      const projectInputJTO = this.getProjectInputJTO(optionInput);
      const projectInputOTJ = JSON.stringify(projectInputJTO);
      p1[0].value = projectInputOTJ;

      await this.session.customize();

      // ✅ 強制渲染一次並等待一幀，確保貼圖完成
      this.viewport?.render();
      await this.waitNextAnimationFrame();
      await this.delay(1000); // 或增加至 200 ms 保守截圖

      const file = await this.getCanvasFile(this.canvasRef.nativeElement);
      const data = GetOutputsData(this.tPSShapediverServ.optionOutput, this.session);
      const param = JSON.stringify({
        optionInput: optionInput,
        projectInput: projectInputJTO,
      });

      this.uploadVolumeDtos.push({
        file: file,
        param: param,
        result: data,
      });
    }

    this.spinnerServ.hide();
  }

  waitNextAnimationFrame(): Promise<void> {
    return new Promise(resolve => requestAnimationFrame(() => resolve()));
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getProjectInputJTO(optionInput: OptionInputJson): ProjectInputJson {
    const projectId = `xxxx-xxxx-proj-${this.buildProjectDto.id}`;
    const projectName = this.buildProjectDto.name;
    const projectAddress = this.buildProjectDto.addr;
    // offsetDistances: [10, 10, 10], // 退縮距離
    // boundary: [ // 邊界座標 [lng, lat, 0]
    // roads: [ // 道路線座標 [lng, lat, 0]
    const baseCoordInfo = this.getBaseCoordInfo();
    const jto: ProjectInputJson = {
      project: {
        id: projectId,
        name: projectName,
        location: baseCoordInfo.location,
        address: projectAddress,
        unit: "meter",
        boundary: baseCoordInfo.boundary,
        roads: baseCoordInfo.roads,
        projectCriteria: {
          basicCriteria: optionInput.option.optionCriteria.basicCriteria,
          advancedCriteria: optionInput.option.optionCriteria.advancedCriteria,
        },
      }
    };
    return jto;
  }

  getBaseCoordInfo(): any {
    // offsetDistances: [10, 10, 10], // 退縮距離
    // boundary: [ // 邊界座標 [lng, lat, 0]
    // roads: [ // 道路線座標 [lng, lat, 0]
    const baseCoordJTO = JSON.parse(this.buildProjectDto.baseCoord || '{}');
    const contentJTO = JSON.parse(this.buildProjectDto.content || '{}');
    const offsetDistances = baseCoordJTO?.edgeBacks || [];
    const boundary = new List(baseCoordJTO?.coords).Select((s: any) => {
      return [s[0], s[1]];
    }).ToArray();
    const roads = new List(baseCoordJTO?.borderCoords).Select((s: any) => {
      return [s[0], s[1]];
    }).ToArray();

    const relativeCoord = this.tPSShapediverServ.convertToRelativeCoordinates(
      boundary as [number, number][],
      roads as [number, number][]);
    const location = baseCoordJTO?.lastCenter ? { lat: baseCoordJTO.lastCenter[1], lng: baseCoordJTO.lastCenter[0] } : { lat: 32.330, lng: 123 };
    return {
      offsetDistances: offsetDistances,
      boundary: relativeCoord.boundary,
      roads: relativeCoord.roads,
      location: location,
      flightLimitation: contentJTO?.flightLimitation || 0,
    }
  }

  uploadBuildProjVolumeDtos(): void {
    if (!this.uploadVolumeDtos.length) return;
    const uploadFormReq = new UploadFormReq();
    const dtos: BuildProjVolumeDto[] = [];

    let fileIndex = 0;
    this.uploadVolumeDtos.forEach(fe => {
      const dto = new BuildProjVolumeDto();
      uploadFormReq.append('file', fe.file);
      dto.fileIndex = fileIndex++;
      dto.param = fe.param;
      dto.result = JSON.stringify(fe.result || '{}');
      dto.scoreParking = fe?.result?.option?.score?.scoreParking || 0;
      dto.scoreStructure = fe?.result?.option?.score?.scoreStructure || 0;
      dto.scoreUnitMix = fe?.result?.option?.score?.scoreUnitMix || 0;
      dto.buildProjectId = this.buildProjectDto.id;
      dtos.push(dto);
    });

    uploadFormReq.jsonContent = JSON.stringify(dtos);

    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show()
    this.buildProjectApiServ.uploadBuildProjVolumeDtos(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }

        const queryParams: any = {
          buildProjectId: this.buildProjectDto.id
        };
        const queryString = new URLSearchParams(queryParams).toString();
        const baseUrl = '/project/mass-comparison';
        window.location.href = `${baseUrl}?${queryString}`;
        // 取消使用router方式穩定初始化
        // this._router.navigate(['project/mass-comparison'], { queryParams: { buildProjectId: this.buildProjectDto.id } });
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => { this.spinnerServ.hide() });
  }

  uploadBuildProjVolumeDto(file: File, param = '{}', result = '{}'): void {
    const uploadFormReq = new UploadFormReq();
    if (!file) {
      this.bbdNotifyServ.error('請選擇需求書檔案');
      return;
    }
    uploadFormReq.append('file', file);
    const dto = new BuildProjVolumeDto();
    dto.param = JSON.stringify(param || '{}');
    dto.result = JSON.stringify(result || '{}');
    dto.buildProjectId = this.buildProjectDto.id;
    uploadFormReq.jsonContent = JSON.stringify(dto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    // this.spinnerServ.show();
    this.buildProjectApiServ.uploadBuildProjVolumeDto(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    });//.add(() => this.spinnerServ.hide());
  }

  getCanvasFile(canvas: HTMLCanvasElement, fileName = 'canvas-image.jpg'): Promise<File> {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], fileName, { type: 'image/jpeg' });
          resolve(file);
        }
      }, 'image/jpeg', 1.0);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CalculatingDialogComponent, {
      panelClass: 'bg-none-dialog',
      backdropClass: 'backdrop-blur-dialg'
    });
  }
}

@Component({
  selector: 'web-calculating-dialog',
  templateUrl: 'calculating-dialog.component.html',
  styleUrls: ['./project-integrate.component.scss'],
})

export class CalculatingDialogComponent extends BBDBaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CalculatingDialogComponent>,
    protected override injector: Injector,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/project/mass-comparison']);
    }, 3000
    )
    console.log();
  }
}
