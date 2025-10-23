
import { Component, OnInit, Injector, ViewChild, Input } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';
import { FormControl } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

import { ActivatedRoute, Router } from '@angular/router';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { JsonViewDialogWidgetComponent, MapboxEditWidgetComponent } from '../../../../shared/widgets';
import { BuildProjectApiServ, ThirdPartyApiServ } from '@core/services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BuildCompBundleReq, BuildCompBundleView, BuildProjDocReq, BuildProjectContentJto, BuildProjectDto, BuildProjectReq, UploadFormReq } from '@core/models';
import { BehaviorSubject, debounceTime, forkJoin, Subject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

export interface PeriodicElement {
  name: string, uploadTime: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: '文件一',
    uploadTime: '2025-04-10 14:32'
  },
  {
    name: '圖像二',
    uploadTime: '2025-04-11 09:15'
  },
  {
    name: '報告三',
    uploadTime: '2025-04-12 17:48'
  },
];

@Component({
  selector: 'web-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})

export class ProjectEditComponent extends BBDBaseComponent implements OnInit {
  @ViewChild('mapboxA') mapboxAComponent!: MapboxEditWidgetComponent;
  @ViewChild('mapboxB') mapboxBComponent!: MapboxEditWidgetComponent;

  @ViewChild('stepper') stepper!: MatStepper;
  demoDocId = '';
  coords: [number, number][] = [];
  borderCoords: [number, number][] = [];
  currBacks: [number, number][] = [];
  edgeBacks: number[] = [];
  isShowLineBack = false;
  selectedStepIndex = 0;
  currArea = 0;
  screenshotFile: File | null = null;

  accountInfo = this._fb.group({
    firstCtrl: ['', Validators.required],
  });
  basicInfo = this._fb.group({
    isCompleted: ['', Validators.required],
  });
  currentEmployment = this._fb.group({
    isCompleted: ['', Validators.required],
  });
  forthFormGroup = this._fb.group({
    isCompleted: ['', Validators.required],
  });

  displayedColumns: string[] = ['name', 'uploadTime', 'action'];
  dataSource = ELEMENT_DATA;

  templateList = [
    {
      templateName: '國安國宅建案',
      srcA: 'assets/image/demo/demo-001.png',
      srcB: 'assets/image/demo/demo-002.png',
      srcC: 'assets/image/demo/demo-003.png',
    },
    {
      templateName: '干城好宅建案',
      srcA: 'assets/image/illustration/empty-img.png',
      srcB: 'assets/image/demo/demo-002.png',
      srcC: 'assets/image/demo/demo-003.png',
    },
    {
      templateName: '尊榮貴賓建案',
      srcA: 'assets/image/demo/demo-001.png',
      srcB: 'assets/image/demo/demo-002.png',
      srcC: 'assets/image/demo/demo-003.png',
    },
  ];

  searchControl = new FormControl('');
  searchOptions: string[] = ['臺中市西屯區國安段 585-1', '臺中市西屯區國安段 585-2', '臺中市西屯區國安段 585-3'];
  searchValue = '';

  isDrawingOpen = false;

  isFileSelected = false;
  previewUrl = 'assets/image/demo/building-001.jpg';

  _id = 0;
  // BuildProject
  buildProjectDto = new BuildProjectDto();
  buildProjectForm!: UntypedFormGroup;
  buildProjectContentJto = new BuildProjectContentJto();
  buildProjectCoverAttFiles: File[] = [];
  editMode = '';
  stepperLinear = true;
  // buildProjectCoverAttUrl: string | null = null;

  // BuildProjDoc
  docDispCols: string[] = ['fileName', 'updAt', 'action'];
  buildCompBundleOpts: BuildCompBundleView[] = [];

  move$ = new Subject<{ center: [number, number], zoom: number }>();
  center$ = new BehaviorSubject<[number, number]>([120.6000, 24.1797]);
  zoom$ = new BehaviorSubject<number>(15);
  lastCenter: [number, number] = [0, 0];
  lastZoom = 0;
  isProgrammaticMove = false;
  isChangingStep = false;
  targetStepIndex = 0;

  // IOs & Gets & Sets
  @Input()
  set id(value: number | undefined | null) {
    this._id = value || 0;
    this.doDataInit();
  }
  get fBP(): { [key: string]: AbstractControl } {
    return this.buildProjectForm.controls;
  }

  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    private thirdPartyApiServ: ThirdPartyApiServ,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private dialog: MatDialog,
    protected override injector: Injector,
  ) {
    super(injector);
    this.doFormInit();
    this.getCaches();
  }
  ngOnInit(): void {
    this.doRouteMap();
    this.move$
      .pipe(debounceTime(100))
      .subscribe(({ center, zoom }) => {
        if (!this.arraysEqual(center, this.center$.getValue())) {
          this.center$.next(center);
        }
        if (Math.abs(zoom - this.zoom$.getValue()) > 1e-3) {
          this.zoom$.next(zoom);
        }
        this.lastCenter = center;
        this.lastZoom = zoom;
      });
  }
  getCaches(): void {
    this.spinnerServ.show();
    const buildCompBundleReq = new BuildCompBundleReq();
    buildCompBundleReq.corpId = this.currUserInfo?.corpId || 0;
    forkJoin(
      [this.buildProjectApiServ.getBuildCompBundleViews(buildCompBundleReq),]
    ).subscribe(([buildCompBundleOpts]) => {
      this.buildCompBundleOpts = [...buildCompBundleOpts || []];
    }).add(() => this.spinnerServ.hide());
  }

  doRouteMap(): void {
    this._route.queryParamMap.subscribe(params => {
      this._id = Number(params.get('buildProjectId') || 0);
      this.editMode = params.get('mode') || '';
      this.doDataInit();
    });
  }

  doDataInit() {
    // add
    if (!this._id) {
      this.buildProjectDto = new BuildProjectDto();
      this.doFormPatchValue();
      return;
    }
    // update
    this.buildProjectApiServ.getBuildProjectDtoById(this._id).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
          if (!this._id) {
            this.messageServ.warning('查無專案，請重新操作。');
            this._router.navigate(['/']);
            return;
          }
        }

        this.buildProjectDto = res;
        this.doFormPatchValue();
        this.doStepperInit();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
        // this.doCancel();
      },
    });
  }
  doFormInit(): void {
    this.buildProjectForm = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(100)]],
      addr: [null, [Validators.required, Validators.maxLength(150)]],
      isCompleted: ['', Validators.required],
      contentJto: this._fb.group({
        remark: [null],
      })
    });
  }

  onMapMoved(event: { center: [number, number]; zoom: number }) {
    if (this.isProgrammaticMove) return;
    this.move$.next({
      center: event.center,
      zoom: event.zoom
    });
  }
  arraysEqual(a: [number, number], b: [number, number]) {
    return a[0] === b[0] && a[1] === b[1];
  }

  doStepperInit(): void {
    if (this.editMode === 'edit') {
      this.basicInfo.get('isCompleted')?.setValue('OK');
      this.currentEmployment.get('isCompleted')?.setValue('OK');
      this.stepperLinear = false;
      this.doBindMapbox();
    }

  }
  doBindMapbox(): void {
    const baseCoord = JSON.parse(this.buildProjectDto.baseCoord || '{}');
    this.currBacks = baseCoord?.backs || [];
    this.coords = baseCoord?.coords || [];
    this.edgeBacks = baseCoord?.edgeBacks || [];
    this.borderCoords = baseCoord?.borderCoords || [];
    this.lastZoom = baseCoord?.lastZoom || 15;
    this.lastCenter = baseCoord?.lastCenter;
    this.currArea = this.buildProjectDto.baseArea;

    if (this.lastCenter) {
      this.center$.next(this.lastCenter);
    }
    if (this.lastZoom) {
      this.zoom$.next(this.lastZoom);
    }
  }
  doFormPatchValue(): void {
    if (!this.buildProjectDto) {
      return;
    }

    this.buildProjectForm.patchValue(this.buildProjectDto);
    this.buildProjectContentJto = JSON.parse(String(this.buildProjectDto.content || '{}'));
    this.buildProjectContentJto.flightLimitation = this.buildProjectContentJto.flightLimitation ? this.buildProjectContentJto.flightLimitation : 100;
    this.fBP['contentJto'].patchValue(this.buildProjectContentJto);
  }

  onBuildProjectCoverAttFileSelected(file: File | null) {
    if (file) {
      this.buildProjectCoverAttFiles = [file];
    } else {
      this.buildProjectCoverAttFiles = [];
      this.buildProjectDto.coverAttId = 0;
    }
  }

  onBuildProjectSubmit(): void {
    this.canBuildProjectSubmit();

    const uploadFormReq = new UploadFormReq();
    if (this.buildProjectCoverAttFiles.length) {
      uploadFormReq.append('file', this.buildProjectCoverAttFiles[0]);
    }
    uploadFormReq.jsonContent = JSON.stringify(this.buildProjectDto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show();
    this.buildProjectApiServ.uploadBuildProjectDto(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          // this.bbdNotifyServ.error(`新增${this.actionName}失敗，請再重試一次。`);
          return;
        }
        this.buildProjectDto = res;
        this._id = this.buildProjectDto.id;
        this.stepper.next();
        // this.bbdNotifyServ.success(this._id ? `修改${this.actionName}成功。` : `新增${this.actionName}成功。`);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
  canBuildProjectSubmit() {
    this.fBP['isCompleted'].setValue('OK');
    this.buildProjectForm.markAllAsTouched();
    if (this.buildProjectForm.valid === false) {
      Object.values(this.buildProjectForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      this.fBP['isCompleted'].setValue('');
      throw new Error("送出失敗");
    }
    if (!this.buildProjectDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      this.fBP['isCompleted'].setValue('');
      throw new Error("送出失敗");
    }
    Object.assign(this.buildProjectDto, this.buildProjectForm.value);
    Object.assign(this.buildProjectContentJto, this.fBP['contentJto'].value);
    this.buildProjectDto.content = JSON.stringify(this.buildProjectContentJto);
    this.buildProjectDto.baseCoord = this.buildProjectDto.baseCoord || '{}';
    this.buildProjectDto.volParam = this.buildProjectDto.volParam || '{}';
    this.buildProjectDto.docs = this.buildProjectDto.docs || [];
    this.buildProjectDto.volumes = this.buildProjectDto.volumes || [];
  }

  onBuildProjectDocSubmit(file: File): void {
    const uploadFormReq = new UploadFormReq();
    if (!file) {
      this.bbdNotifyServ.error('請選擇需求書檔案');
      return;
    }
    uploadFormReq.append('file', file);
    const buildProjDocReq = new BuildProjDocReq();
    buildProjDocReq.buildProjectId = this._id;
    uploadFormReq.jsonContent = JSON.stringify(buildProjDocReq);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show();
    this.buildProjectApiServ.uploadBuildProjDocDtos(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error('操作失敗：請重新上傳檔案');
          return;
        }
        this.doDataInit();
        this.buildProjectDto.docs = [...this.buildProjectDto.docs || []];
        this.bbdNotifyServ.success('檔案上傳成功');
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  deleteBuildProjDoc(id: number): void {
    this.spinnerServ.show();
    this.buildProjectApiServ.deleteBuildProjDoc(id).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.doDataInit();
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  removeDoc(idx: number, buildProjDocId: number) {
    if (this.buildProjectDto.docs) {
      this.buildProjectDto.docs.splice(idx, 1);
      this.buildProjectDto.docs = [...this.buildProjectDto.docs]; // 觸發變更偵測
      this.deleteBuildProjDoc(buildProjDocId);
      this.doDataInit();
    }
  }

  doNextStartDraw(): void {
    // 0620 調整非必填
    // if (!this.buildProjectDto.docs?.length) {
    //   this.bbdNotifyServ.warning('提示：請上傳需求書');
    //   return;
    // }
    if (!this.buildProjectDto.buildCompBundleId) {
      this.bbdNotifyServ.warning('提示：請選擇房型');
      return;
    }
    this.basicInfo.get('isCompleted')?.setValue('OK');
    this.stepper.next();
  }

  doNextFinishDraw(): void {
    if (!this.coords?.length) {
      this.bbdNotifyServ.warning('提示：請劃基地範圍');
      return;
    }
    if (!this.borderCoords?.length) {
      this.bbdNotifyServ.warning('提示：請劃界線');
      return;
    }
    if (!this.currArea) {
      this.bbdNotifyServ.warning('提示：基地範圍尚未完成，無法計算面積');
      return;
    }
    this.currentEmployment.get('isCompleted')?.setValue('OK');
    this.stepper.next();
  }

  doFinishSubmit(): void {
    this.canSubmit();
    // 取最後view中心點及放大倍率
    this.mapboxBComponent.onMove();
    const buildProjectReq = new BuildProjectReq();
    buildProjectReq.id = this._id;
    // console.log(this.screenshotFile);

    if (this.screenshotFile) {
      const uploadFormReq = new UploadFormReq();
      uploadFormReq.append('file', this.screenshotFile);
      uploadFormReq.jsonContent = JSON.stringify(this.buildProjectDto);
      Object.entries(uploadFormReq).forEach(([key, value]) => {
        uploadFormReq.append(key, value);
      });

      this.spinnerServ.show();
      this.buildProjectApiServ.uploadBuildProjectBaseMapAtt(uploadFormReq).subscribe({
        next: (res) => {
          if (!res) {
            return;
          }
          this.buildProjectDto.baseMapAttId = res.baseMapAttId;
          this.onFinishSubmit();
        },
        error: (err) => {
          // this.bbdNotifyServ.error('執行失敗', err);
        },
      }).add(() => this.spinnerServ.hide());
    } else {
      this.onFinishSubmit();
    }
  }

  canSubmit(): void {
    this.doFinishCheck();
    this.buildProjectDto.content = JSON.stringify(this.buildProjectContentJto);

  }

  onFinishSubmit(): void {
    const baseCoord = {
      coords: this.coords,
      borderCoords: this.borderCoords,
      backs: this.currBacks,
      edgeBacks: this.edgeBacks,
      lastCenter: this.lastCenter,
      lastZoom: this.lastZoom,
    };
    this.buildProjectDto.baseCoord = JSON.stringify(baseCoord);
    this.buildProjectDto.baseArea = this.currArea;

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
        this.buildProjectDto = res;
        this._router.navigate(['project/integrate'], { queryParams: { buildProjectId: this._id } });
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }

  doFinishCheck(): void {
    this.edgeBacks = this.edgeBacks.map(v => (typeof v === 'number' && !isNaN(v) ? v : 0));

    if (!this.buildProjectDto.buildCompBundleId) {
      this.bbdNotifyServ.error('送出失敗: [步驟2][房型]尚未選擇。');
      throw new Error("送出失敗");
    }
    if (!this.coords.length) {
      this.bbdNotifyServ.error('送出失敗: [步驟3][基地範圍]尚未標記。');
      throw new Error("送出失敗");
    }
    if (!this.borderCoords.length) {
      this.bbdNotifyServ.error('送出失敗: [步驟3][邊界線]尚未標記。');
      throw new Error("送出失敗");
    }
    if (!this.buildProjectContentJto.flightLimitation) {
      this.bbdNotifyServ.error('送出失敗: [步驟4][航高限制相對高度]為必填欄位。');
      throw new Error("送出失敗");
    }
  }

  toggleDrawing(): void {
    this.isDrawingOpen = !this.isDrawingOpen;
  }

  closeDrawing(): void {
    this.isDrawingOpen = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.previewUrl = reader.result as string;
        this.isFileSelected = true;
      };

      reader.readAsDataURL(file);
    }
  }

  editImage(event: Event): void {
    event.preventDefault(); // 避免按鈕點擊跳頁或重整
    this.isFileSelected = false;

    // 若想自動打開檔案選擇器：
    setTimeout(() => {
      const fileInput = document.getElementById('upload-file') as HTMLElement;
      fileInput.click();
    }, 0);
  }

  onDocSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // 檢查檔案類型
      if (file.type !== 'application/pdf') {
        this.bbdNotifyServ.warning('❌ 上傳失敗：只允許上傳 PDF 檔案');
        input.value = ''; // 清空選擇
        return;
      }
      // 檢查檔案大小 (10MB = 10 * 1024 * 1024 bytes)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        this.bbdNotifyServ.warning('❌ 上傳失敗：檔案大小不可超過 10MB');
        input.value = ''; // 清空選擇
        return;
      }
      this.onBuildProjectDocSubmit(file);
    } else {
      this.bbdNotifyServ.warning('提示：您尚未選擇檔案');
    }
    input.value = '';
  }
  /**
   * 改後端UploadBuildProjDocDtos處理
   * @param file
   */
  postArcgenDocs(file: File) {
    this.thirdPartyApiServ.postArcgenDocs(file).subscribe({
      next: (res) => {
        if (res?.docId) {
          this.bbdNotifyServ.success(`✅ 上傳成功: docId:${res?.docId}`);
          console.log('✅ 上傳成功:', res);
          this.demoDocId = res?.docId;
        } else {
          this.bbdNotifyServ.error(`❌ 上傳失敗 狀態：${res?.status}`);
        }
      },
      error: (err) => {
        this.bbdNotifyServ.error('❌ 上傳失敗', err);
      },
    });
  }
  getArcgenDocs(id: string): void {
    this.spinnerServ.show();
    this.thirdPartyApiServ.getArcgenDocs(id).subscribe({
      next: (res) => {
        if ((!res)) {
          this.bbdNotifyServ.error(`❌ 查詢失敗 狀態：${res?.status}`);
          return;
        }
        this.bbdNotifyServ.success(`✅ 查詢成功: docId:${res?.docId} 狀態:${res?.status}`);
      },
      error: (err) => {
        this.bbdNotifyServ.error('查詢失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  getArcgenDocsAnalysis(id: string): void {
    this.spinnerServ.show();
    this.thirdPartyApiServ.getArcgenDocsAnalysis(id).subscribe({
      next: (res) => {
        if ((!res)) {
          this.bbdNotifyServ.error(`❌ 查詢失敗 狀態：${res?.status}`);
          return;
        }
        this.bbdNotifyServ.success(`✅ 查詢成功: docId:${res?.docId} 狀態:${res?.status}`);
        this.dialog.open(JsonViewDialogWidgetComponent, {
          data: res,
          width: '600px',
        });
      },
      error: (err) => {
        this.bbdNotifyServ.error('查詢失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  handleCoordsChange(newCoords: [number, number][]) {
    this.coords = [...newCoords]; // immutable 賦值以觸發變更
    this.syncEdgeBacks();
  }

  handleBorderCoordChange(newborderCoords: [number, number][]) {
    this.borderCoords = [...newborderCoords]; // immutable 賦值以觸發變更
  }

  handleAreaChange(val: number) {
    this.currArea = val; // immutable 賦值以觸發變更
  }

  onEdgeBackChange(): void {
    const validBacks = this.edgeBacks.map(v => v || 0); // 預設 0
    this.mapboxBComponent.doDrawingBacks(validBacks);
  }

  private syncEdgeBacks() {
    // console.log(this.coords);

    let edgeCount = this.coords?.length || 0;
    edgeCount = edgeCount ? edgeCount - 1 : 0;
    this.edgeBacks = Array(edgeCount).fill(0); // 預設值可調整
    this.onEdgeBackChange();
  }

  onStepChange(event: StepperSelectionEvent) {
    this.selectedStepIndex = event.selectedIndex;

    // 檢查是否切換到第二步
    if (event.selectedIndex === 2 && this.mapboxAComponent) { // 索引從 0 開始
      setTimeout(() => {
        // 呼叫第二步地圖的 resize
        this.mapboxAComponent.map?.resize();
      }, 50);
    }

    // 檢查是否切換到第三步
    if (event.selectedIndex === 3 && this.mapboxBComponent) {
      setTimeout(() => {
        // 呼叫第三步地圖的 resize
        this.mapboxBComponent.map?.resize();
      }, 50);
    }
  }

  loadingDialog(): void {
    const dialogRef = this.dialog.open(LoadingComponent, {
      panelClass: 'bg-none-dialog',
      backdropClass: 'backdrop-blur-dialg'
    });
  }

  trackByEdgeIndex(index: number, item: number): number {
    return index; // 使用 index 作為唯一標識
  }

  screenshotFileChange(val: File | null): void {
    this.screenshotFile = val;
    const buildProjectReq = new BuildProjectReq();
    buildProjectReq.id = this._id;

    if (!this.screenshotFile) {
      return;
    }
    const uploadFormReq = new UploadFormReq();
    uploadFormReq.append('file', this.screenshotFile);
    uploadFormReq.jsonContent = JSON.stringify(this.buildProjectDto);
    Object.entries(uploadFormReq).forEach(([key, value]) => {
      uploadFormReq.append(key, value);
    });

    this.spinnerServ.show();
    this.buildProjectApiServ.uploadBuildProjectBaseMapAtt(uploadFormReq).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.buildProjectDto = res;
      },
      error: (err) => {
        // this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
}

@Component({
  selector: 'web-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['./project-edit.component.scss'],
})

export class LoadingComponent extends BBDBaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoadingComponent>,
    protected override injector: Injector,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/project/integrate']);
    }, 3000)
    console.log();
  }
}
