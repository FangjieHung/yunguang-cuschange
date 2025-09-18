/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, OnInit, Injector, Inject, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppObjectStoreCodes, BuildCompBundleReq, BuildCompBundleView, BuildProjectDto, BuildProjVolumeDto, UploadFormReq } from '@core/models';
import { AppStoreApiServ, BuildProjectApiServ, CardType, GetOutputsData, OptionInputJson, OutputJson, ProjectInputJson, ThirdPartyApiServ, TPSShapediverServ, VisualizerInputJson } from '@core/services';

// Custom packages
import { BBDBaseComponent, BBDConfirmDialogComponent } from '@core/shared';

import { createSession, createViewport, FLAG_TYPE, ISessionApi, IViewportApi, SESSION_SETTINGS_MODE } from '@shapediver/viewer';
import { format, getTime } from 'date-fns';
import { List } from 'linqts';
import { firstValueFrom, forkJoin } from 'rxjs';

@Component({
  selector: 'web-mass-comparison',
  templateUrl: './mass-comparison.component.html',
  styleUrls: ['./mass-comparison.component.scss'],
})

export class MassComparisonComponent extends BBDBaseComponent implements OnInit, OnDestroy {
  // shapediver
  @ViewChild('canvasElement', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  session?: ISessionApi;
  viewport?: IViewportApi;
  volumeLength = 1;
  generateStatus = false;
  sortOptSelect = 'crtAt'

  cards: CardType[] = [];
  selectCard?: CardType;
  optionName = "";
  optionInput: OptionInputJson = {
    option: {
      seed: 0,
      project: "xxxx-xxxx-proj-0001",
      optionCriteria: {
        basicCriteria: {
          siteConstraints: {
            buildingCoverRatio: 60,
            floorAreaRatio: 120,
            offsetDistances: [10, 10, 10],
            excavationRatio: 0.4,
          },
          apartmentUnitMix: [
            {
              name: "1BR",
              template: "XXXX-XXXX-1BR0-0001",
              ratio: 0.6,
              unitArea: 0,
            },
            {
              name: "2BR",
              template: "XXXX-XXXX-2BR0-0001",
              ratio: 0.12,
              unitArea: 0,
            },
            {
              name: "3BR",
              template: "XXXX-XXXX-3BR0-0001",
              ratio: 0.28,
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
          typology: 0,
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

  sorts = [
    { name: '時間排序近到遠', value: 'crtAt' },
    { name: '停車分數高到低', value: 'scoreParking' },
    { name: '結構分數高到低', value: 'scoreStructure' },
    { name: '房型分數高到低', value: 'scoreUnitMix' },
  ];

  comparisonList = [
    {
      comparisonName: 'comparison-01',
      comparisonGFA: '15,000',
      comparisonBCR: '55',
      comparisonTime: '2025/03/01 20:03:12',
      src: 'assets/image/illustration/empty-img.png'
    },
    {
      comparisonName: 'comparison-02',
      comparisonGFA: '15,000',
      comparisonBCR: '55',
      comparisonTime: '2025/03/02 20:03:12',
      src: 'assets/image/illustration/empty-img.png'
    },
    {
      comparisonName: 'comparison-03',
      comparisonGFA: '15,000',
      comparisonBCR: '55',
      comparisonTime: '2025/03/03 20:03:12',
      src: 'assets/image/illustration/empty-img.png'
    },
    {
      comparisonName: 'comparison-04',
      comparisonGFA: '15,000',
      comparisonBCR: '55',
      comparisonTime: '2025/03/01 20:03:12',
      src: 'assets/image/illustration/empty-img.png'
    },
    {
      comparisonName: 'comparison-05',
      comparisonGFA: '15,000',
      comparisonBCR: '55',
      comparisonTime: '2025/03/02 20:03:12',
      src: 'assets/image/illustration/empty-img.png'
    },
    {
      comparisonName: 'comparison-06',
      comparisonGFA: '15,000',
      comparisonBCR: '55',
      comparisonTime: '2025/03/03 20:03:12',
      src: 'assets/image/illustration/empty-img.png'
    },
  ];

  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }
  buildProjectId = 0;
  buildProjectDto = new BuildProjectDto();
  buildCompBundleOpts: BuildCompBundleView[] = [];
  valForm!: UntypedFormGroup;
  formThreshold = this.thirdPartyApiServ.formThreshold;
  uploadVolumeDtos: any[] = [];
  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    public thirdPartyApiServ: ThirdPartyApiServ,
    public tPSShapediverServ: TPSShapediverServ,
    private appStoreApiServ: AppStoreApiServ,
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    protected override injector: Injector,
  ) {
    super(injector);
    this.getCaches();
    this.doFormInit();
    // this.valForm = this._fb.group({
    //   buildingCoverRatio: [60, Validators.required],
    //   floorAreaRatio: [120, Validators.required]
    // });
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
  doRouteMap(): void {
    this._route.queryParamMap.subscribe(params => {
      this.buildProjectId = Number(params.get('buildProjectId') || 0);
      if (!this.buildProjectId) {
        this.messageServ.warning('查無專案，請重新操作。');
        this._router.navigate(['/']);
        return;
      }

      this.doDataInit();
    });
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

  doDataInit() {
    this.buildProjectApiServ.getBuildProjectDtoById(this.buildProjectId).subscribe({
      next: (res) => {
        if (!res) {
          this.messageServ.warning('查無專案，請重新操作。');
          this._router.navigate(['/']);
          return;
        }

        this.buildProjectDto = res;
        this.valForm.patchValue(JSON.parse(this.buildProjectDto.volParam || '{}'));
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
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
      typology: [0,],
    });
    this.doFormValidSet();
  }

  doFormValidSet(): void {
    this.f['buildingCoverRatio'].setValidators([
      Validators.required,
      ...(this.formThreshold.buildingCoverRatio.min != null ? [Validators.min(this.formThreshold.buildingCoverRatio.min)] : []),
      ...(this.formThreshold.buildingCoverRatio.max != null ? [Validators.max(this.formThreshold.buildingCoverRatio.max)] : []),
      ...(this.formThreshold.buildingCoverRatio.pattern != null ? [Validators.pattern(this.formThreshold.buildingCoverRatio.pattern)] : [])
    ]);
    this.f['buildingCoverRatio'].updateValueAndValidity();

    this.f['floorAreaRatio'].setValidators([
      Validators.required,
      ...(this.formThreshold.floorAreaRatio.min != null ? [Validators.min(this.formThreshold.floorAreaRatio.min)] : []),
      ...(this.formThreshold.floorAreaRatio.max != null ? [Validators.max(this.formThreshold.floorAreaRatio.max)] : []),
      ...(this.formThreshold.floorAreaRatio.pattern != null ? [Validators.pattern(this.formThreshold.floorAreaRatio.pattern)] : [])
    ]);
    this.f['floorAreaRatio'].updateValueAndValidity();

    this.f['typology'].setValidators([
      Validators.required,
      ...(this.formThreshold.typology.min != null ? [Validators.min(this.formThreshold.typology.min)] : []),
      ...(this.formThreshold.typology.max != null ? [Validators.max(this.formThreshold.typology.max)] : []),
      ...(this.formThreshold.typology.pattern != null ? [Validators.pattern(this.formThreshold.typology.pattern)] : [])
    ]);
    this.f['typology'].updateValueAndValidity();

    this.f['numBuildings'].setValidators([
      Validators.required,
      ...(this.formThreshold.numBuildings.min != null ? [Validators.min(this.formThreshold.numBuildings.min)] : []),
      ...(this.formThreshold.numBuildings.max != null ? [Validators.max(this.formThreshold.numBuildings.max)] : []),
      ...(this.formThreshold.numBuildings.pattern != null ? [Validators.pattern(this.formThreshold.numBuildings.pattern)] : [])
    ]);
    this.f['numBuildings'].updateValueAndValidity();

    this.f['numFloors'].setValidators([
      Validators.required,
      ...(this.formThreshold.numFloors.min != null ? [Validators.min(this.formThreshold.numFloors.min)] : []),
      ...(this.formThreshold.numFloors.max != null ? [Validators.max(this.formThreshold.numFloors.max)] : []),
      ...(this.formThreshold.numFloors.pattern != null ? [Validators.pattern(this.formThreshold.numFloors.pattern)] : [])
    ]);
    this.f['numFloors'].updateValueAndValidity();
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
        id: this.tPSShapediverServ.generateOption.viewport,
        canvas: this.canvasRef.nativeElement,
      });

      // 建立 session
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

  onSubmit(): void {
    this.initShapeDiver(this.f['typology'].value || 0).then(() => {
      this.canSubmit();
      this.buildProjectDto.volParam = JSON.stringify(this.valForm.value);
      const uploadFormReq = new UploadFormReq();
      uploadFormReq.jsonContent = JSON.stringify(this.buildProjectDto);
      Object.entries(uploadFormReq).forEach(([key, value]) => {
        uploadFormReq.append(key, value);
      });

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
      }).add(() => console.log());
    });
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
              offsetDistances: [10, 10, 10],
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
            typology: 0,
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
    // console.log(optionInput);
    // console.log(compBundle);
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
        this.doDataInit();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => { this.spinnerServ.hide() });
  }

  uploadBuildProjVolumeDto(file: File, param = '{}', result = '{}', isSpinner = true): void {
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

    if (isSpinner) { this.spinnerServ.show(); }
    this.buildProjectApiServ.uploadBuildProjVolumeDto(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => {
      if (isSpinner) { this.spinnerServ.hide(); }
    });
  }

  deleteBuildProjVolume(id: number): void {
    const dialogRef = this._dialog.open(BBDConfirmDialogComponent, {
      data: {
        title: '您確認要「刪除」?',
        content: '「刪除」量體綜合比較紀錄，刪除後將無法復原。',
      },
      panelClass: 'rounded-md', // optional
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.spinnerServ.show();
        this.buildProjectApiServ.deleteBuildProjVolume(id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success(`刪除成功`);
              this.doDataInit();
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          },
        }).add(() => this.spinnerServ.hide());
      }
    });
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

  onCardClick(event: MouseEvent, item: BuildProjVolumeDto) {
    // 如果點到的是 menu button 或它的子元素，就不要導航
    const target = event.target as HTMLElement;
    if (target.closest('.card-action')) {
      return;
    }
    this.doRouterPage(item.id);
  }

  doRouterPage(buildProjVolumeId: number): void {
    this.spinnerServ.show()
    this.buildProjectApiServ.getBuildProjRenderViewsByVolumeId(buildProjVolumeId).subscribe({
      next: (res) => {
        if (res?.length) {
          this._router.navigate(['/project/render-list'], {
            queryParams: {
              buildProjectId: this.buildProjectDto.id,
              buildProjVolumeId: buildProjVolumeId
            }
          });
          return;
        }

        this._router.navigate(['/project/mass-refinement'], {
          queryParams: {
            buildProjectId: this.buildProjectDto.id,
            buildProjVolumeId: buildProjVolumeId
          }
        });
      },
      error: (err) => {
        this._router.navigate(['/project/mass-refinement'], {
          queryParams: {
            buildProjectId: this.buildProjectDto.id,
            buildProjVolumeId: buildProjVolumeId
          }
        });
      }
    }).add(() => this.spinnerServ.hide());
  }

  onMenuClick(event: MouseEvent) {
    // 阻止事件冒泡
    event.stopPropagation();
  }

  handleCardClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // 如果點擊的是 menu 按鈕或其子元素，就取消導航
    if (target.closest('.card-action')) {
      event.preventDefault();
    }
  }

  selectionChangeSort(): void {
    const volumeList = new List<BuildProjVolumeDto>(this.buildProjectDto.volumes || []);
    switch (this.sortOptSelect) {
      case 'crtAt':
        this.buildProjectDto.volumes = volumeList.OrderByDescending(ob => ob.crtAt).ToArray();
        break;
      case 'scoreParking':
        this.buildProjectDto.volumes = volumeList.OrderByDescending(ob => ob.scoreParking).ToArray();
        break;
      case 'scoreStructure':
        this.buildProjectDto.volumes = volumeList.OrderByDescending(ob => ob.scoreStructure).ToArray();
        break;
      case 'scoreUnitMix':
        this.buildProjectDto.volumes = volumeList.OrderByDescending(ob => ob.scoreUnitMix).ToArray();
        break;
      default:
        break;
    }
  }
}