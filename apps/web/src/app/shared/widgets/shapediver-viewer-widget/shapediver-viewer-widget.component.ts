/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, Injector, Input, OnInit, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { createSession, createViewport, ISessionApi } from '@shapediver/viewer';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'web-shapediver-viewer-widget',
  templateUrl: './shapediver-viewer-widget.component.html',
  styleUrls: ['./shapediver-viewer-widget.component.scss'],
})

export class ShapediverViewerWidgetComponent extends BBDBaseComponent implements OnInit, AfterViewInit {
  readonly actionName = '預覽';
  @ViewChild('canvasElement', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private readonly ticket: string = '423ea3ef7fc3a8b01233e6ca926f8fbdca2aecc2a6de1893228720e4b8c200966ce384fda49bbae55d44386bde8b3410bded65b7cd2138da2fb8d9244114f99a0fea46ee35e9de64f5bf57208d790e682febdd4c562430e8949a882f1597d1a83d70d1654a7831-393256f9220c934c1b127b2c8c287668';
  private readonly modelViewUrl: string = 'https://tunghai-prod.ap-northeast-1.shapediver.com';
  private readonly canvasID: string = 'shapediver-canvas';
  private readonly modelParams = {
    apt_1br_target_ratio: 0.5,
    apt_2br_target_ratio: 0.4,
    apt_3br_target_ratio: 0.1,
    public_area_ratio: 0.5,
    floor_num: 10,
    corridor_width: 2.0,
    corridor_length: 80.0,
    egress_length: 25.0,
    lift_core_location: 'Top',
    lift_core_width: 9.0,
    show_tags: false,
    show_massing: false,
    show_apt: true,
    show_structure: false,
  };

  constructor(
    @Optional() public modal: NzModalRef,
    protected override injector: Injector,) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
    // this.loadViewer();
  }

  async ngAfterViewInit() {
    await this.loadViewer();
  }

  public async loadViewer(): Promise<void> {
    const canvas = this.canvasRef.nativeElement;

    await createViewport({
      id: 'myViewport',
      canvas: canvas,
    });

    const session = await createSession({
      id: this.canvasID,
      ticket: this.ticket,
      modelViewUrl: this.modelViewUrl,
    });

    const param = session.getParameterByName('AptInputs');
    if (param.length > 0) {
      param[0].value = JSON.stringify(this.modelParams);
    }

    await session.customize();
  }

  public getCaptureScreenshotBase64(): string {
    const canvas = this.canvasRef.nativeElement;
    const base64WithPrefix = canvas.toDataURL('image/png');
    const base64Image = base64WithPrefix.replace(/^data:image\/png;base64,/, '');
    console.log(base64Image); // base64 字串，可送出或下載
    return base64Image;
  }

  public downloadScreenshot(): void {
    const base64 = this.canvasRef.nativeElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = base64;
    a.download = 'shapediver-screenshot.png';
    a.click();
  }


  doModalDestroy(val: any = null): void {
    if (val) {
      this.modal.destroy(val);
      return;
    }
    this.modal.destroy(false);
  }
}

