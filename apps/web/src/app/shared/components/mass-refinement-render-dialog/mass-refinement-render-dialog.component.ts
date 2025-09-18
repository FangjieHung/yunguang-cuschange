/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, OnInit, Inject } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ArcGenApiServ, BuildProjectApiServ, ThirdPartyApiServ } from '@core/services';
import { ImagePreviewDialogWidgetComponent } from '../../widgets';
import { BuildProjRenderDto, UploadFormReq } from '@core/models';

@Component({
  selector: 'web-mass-refinement-render-dialog',
  templateUrl: './mass-refinement-render-dialog.component.html',
  styleUrls: ['./mass-refinement-render-dialog.component.scss'],
})

export class MassRefinementRenderDialogComponent extends BBDBaseComponent implements OnInit {
  styles: any[] = [];
  selectStyle: any;
  selectedStyleValue = '';
  selectedWallMatValue = '';
  buildProjectId = 0;
  currRenderVersion = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private arcGenApiServ: ArcGenApiServ,
    public buildProjectApiServ: BuildProjectApiServ,
    private thirdPartyApiServ: ThirdPartyApiServ,
    private dialog: MatDialog,
    private _router: Router,
    public dialogRef: MatDialogRef<MassRefinementRenderDialogComponent>,
    protected override injector: Injector
  ) {
    super(injector);
    this.styles = this.thirdPartyApiServ.getStyles();
  }

  ngOnInit(): void {
    console.log();
    if (this.styles.length > 0) {
      // 預設選擇第一個風格
      this.selectedStyleValue = this.styles[0].value;
      this.doStyleSelect(this.styles[0]);
    }
    this.getRenderVersion();
  }

  getRenderVersion(): void {
    this.spinnerServ.show()
    const buildProjVolumeId = this.data?.buildProjVolumeId;
    this.buildProjectApiServ.getBuildProjRenderViewsByVolumeId(buildProjVolumeId).subscribe({
      next: (res) => {
        if (!res) {
          this.currRenderVersion = 0;
          return;
        }
        this.currRenderVersion = res.length;
      },
      error: (err) => {
        this.currRenderVersion = 0;
      }
    }).add(() => this.spinnerServ.hide());
  }

  doStyleSelect(val: any) {
    this.selectStyle = val;
    if (val.wallMats && val.wallMats.length > 0) {
      this.selectedWallMatValue = val.wallMats[0].value;
    } else {
      this.selectedWallMatValue = '';
    }
  }

  onSubmit(): void {
    this.canSubmit();
    this.onGenerateImage(`${this.selectedStyleValue}_${this.selectedWallMatValue}`)
  }

  canSubmit() {
    if ((!this.selectedStyleValue) || (!this.selectedWallMatValue)) {
      this.bbdNotifyServ.error('送出失敗，請確認是否選擇風格及材質。');
      throw new Error("送出失敗");
    }
  }

  onGenerateImage(lora_name = ''): void {
    const request = {
      img: this.data.captureImg,
      lora_name: lora_name
    };
    this.spinnerServ.show();
    this.arcGenApiServ.generateImg(request).subscribe({
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

  uploadBuildProjRenderDto(file: File, isSpinner = true): void {
    const uploadFormReq = new UploadFormReq();
    if (!file) {
      this.bbdNotifyServ.error('無檔案上傳');
      return;
    }
    uploadFormReq.append('file', file);
    const dto = new BuildProjRenderDto();
    const styleName = this.thirdPartyApiServ.getStyleByValue(this.selectedStyleValue)?.name || '';
    const wallMatName = this.thirdPartyApiServ.getWallMatsByStyles(this.selectedStyleValue).filter(w => w.value === this.selectedWallMatValue)[0]?.name || '';
    const versionName = `${styleName}${wallMatName}V${this.currRenderVersion + 1}`
    const result = {
      versionName: versionName,
      volOutput: this.data?.volOutput,
      costGen: this.getCostGen(),
    };

    dto.buildStyle = this.selectedStyleValue;
    dto.wallMat = this.selectedWallMatValue;
    dto.result = JSON.stringify(result || '{}');
    dto.buildProjVolumeId = this.data?.buildProjVolumeId;
    // dto.imgBase64 = imgBase64;
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
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => {
      if (isSpinner) { this.spinnerServ.hide(); }
    });
  }

  getCostGen(): any {
    const report = this.data?.volOutput?.option?.report;

    if (!report) {
      return { totalCost: 0, sellPrice: 0 };
    }

    // 基地面積
    const totalSiteArea = report.totalSiteArea || 0;
    // 總樓地板面積 m2（地上）
    const totalFloorAreaAbove = report.totalFloorAreaAboveGround || 0;
    // 總樓地板面積 m2（地下）
    const totalFloorAreaUnder = report.totalFloorAreaUnderGround || 0;
    // 總立面表面積 m2 
    const totalFacadeArea = report.totalFacadeArea || 0;
    // 總可銷售面積（不含停車格）
    const totalSellableArea = report.totalSellableArea || 0;

    // 請聚亮直接計算 // 一坪 = 3.3m2
    // 建案造價 = 地價＋建造價
    const landCost = (totalSiteArea / 3.3) * 700000;
    const consCost = ((totalFloorAreaAbove + totalFloorAreaUnder) / 3.3) * 200000;

    let factor = 1.0;
    if (this.selectedWallMatValue == 'SandStone') factor = 1.2; // 砂岩材質
    if (this.selectedWallMatValue == 'WhiteTile') factor = 1.3; // 白色丁掛磚材質
    if (this.selectedWallMatValue == 'Concrete') factor = 1.1; // 混凝土材質

    const facadeCost = totalFacadeArea * factor; // facade 用平方米算，不用除 3.3
    const totalCost = landCost + consCost + facadeCost;

    // 建案售價
    const sellPrice = (totalSellableArea / 3.3) * 1000000;
    // 預估利潤 = 建案售價 - 建案成本
    const profit = sellPrice - totalCost;

    return { totalCost: totalCost / 100000000, sellPrice: sellPrice / 100000000, profit: profit }
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

  openImagePreview(base64Image: string): void {
    this.dialog.open(ImagePreviewDialogWidgetComponent, {
      data: {
        imageBase64: base64Image
      },
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'image-preview-dialog'
    });
  }

  doModalDestroy(val: any = null): void {
    // if (val) {
    //   this.modal.destroy(val);
    //   return;
    // }
    // this.modal.destroy(false);
  }
}

