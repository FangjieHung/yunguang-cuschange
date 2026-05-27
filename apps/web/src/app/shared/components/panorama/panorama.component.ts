import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';

declare const pannellum: any;

@Component({
  selector: 'app-panorama',
  template: `
    <div class="panorama">
      <div #panoramaContainer class="panorama-container card" tabindex="0" aria-label="360 度全景預覽"></div>

      <div class="scene-buttons" role="tablist" aria-label="場景切換">
        <button
          *ngFor="let scene of sceneList; let i = index"
          type="button"
          class="btn btn-sm"
          [ngClass]="currentScene === scene.id ? 'btn-primary' : 'btn-ghost'"
          [attr.aria-pressed]="currentScene === scene.id"
          (click)="switchScene(scene.id)">
          {{ scene.label }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .panorama { display: block; }
    .scene-buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .panorama-container { width: 100%; aspect-ratio: 16 / 9; min-height: 320px; max-height: 720px; overflow: hidden; border-radius: var(--radius-md); background: var(--color-surface); }

    /* Hotspot 樣式 */
    .custom-hotspot { pointer-events: auto; }
    .custom-hotspot .hotspot-btn {
      background: rgba(0,0,0,0.65);
      color: #fff;
      border: none;
      padding: 6px 10px;
      border-radius: 18px;
      font-size: 13px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      transition: transform .12s ease, background .12s ease;
    }
    .custom-hotspot .hotspot-btn:hover { transform: translateY(-2px); background: rgba(0,0,0,0.8); }
    .custom-hotspot .hotspot-btn:focus { outline: 2px solid rgba(255,255,255,0.28); }
  `],
})
export class PanoramaComponent implements AfterViewInit, OnDestroy {

  @ViewChild('panoramaContainer') containerRef!: ElementRef;

  private viewer: any = null;
  currentScene = 'scene1';

  // 場景清單，方便切換按鈕顯示
  sceneList = [
    { id: 'scene1', label: '客餐廳' },
    { id: 'scene2', label: '主臥室' },
    { id: 'scene3', label: '次臥室' },
  ];

  // Cubemap 圖片路徑設定（順序：front, right, back, left, up, down）
  private scenes: Record<string, string[]> = {
    scene1: [
      'assets/image/pano/scene1/f.jpg',
      'assets/image/pano/scene1/r.jpg',
      'assets/image/pano/scene1/b.jpg',
      'assets/image/pano/scene1/l.jpg',
      'assets/image/pano/scene1/u.jpg',
      'assets/image/pano/scene1/d.jpg',
    ],
    scene2: [
      'assets/image/pano/scene2/f.jpg',
      'assets/image/pano/scene2/r.jpg',
      'assets/image/pano/scene2/b.jpg',
      'assets/image/pano/scene2/l.jpg',
      'assets/image/pano/scene2/u.jpg',
      'assets/image/pano/scene2/d.jpg',
    ],
    scene3: [
      'assets/image/pano/scene3/f.jpg',
      'assets/image/pano/scene3/r.jpg',
      'assets/image/pano/scene3/b.jpg',
      'assets/image/pano/scene3/l.jpg',
      'assets/image/pano/scene3/u.jpg',
      'assets/image/pano/scene3/d.jpg',
    ],
  };

  // 每個場景的 hotspot 定義（pitch, yaw 單位為度）
  private hotSpots: Record<string, Array<{ pitch: number; yaw: number; tooltip?: string; target?: string }>> = {
    scene1: [
      { pitch: -4, yaw: 40, tooltip: '主臥室', target: 'scene2' },
      { pitch: -2, yaw: -50, tooltip: '次臥室', target: 'scene3' },
    ],
    scene2: [],
    scene3: [],
  };

  ngAfterViewInit(): void {
    this.initViewer(this.currentScene);
  }

  ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  private initViewer(sceneId: string): void {
    if (this.viewer) {
      this.viewer.destroy();
    }

    // 準備 hotspot 陣列，交由 pannellum 的 createTooltipFunc 建立可點擊按鈕
    const hotSpotsConfig = (this.hotSpots[sceneId] || []).map(h => ({
      pitch: h.pitch,
      yaw: h.yaw,
      createTooltipFunc: this.createHotspot.bind(this),
      createTooltipArgs: { target: h.target, text: h.tooltip }
    }));

    this.viewer = pannellum.viewer(this.containerRef.nativeElement, {
      type: 'cubemap',
      cubeMap: this.scenes[sceneId],
      autoLoad: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
      autoRotate: -2,
      hotSpots: hotSpotsConfig,
    });
  }

  // Pannellum hotspot callback: 建立按鈕並綁定點擊切換場景
  private createHotspot(hotSpotDiv: HTMLElement, args: { target?: string; text?: string }): void {
    hotSpotDiv.classList.add('custom-hotspot');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hotspot-btn';
    btn.setAttribute('aria-label', args.text || 'hotspot');
    btn.innerText = args.text || '';

    btn.addEventListener('click', (ev: Event) => {
      ev.stopPropagation();
      if (args && args.target) {
        this.switchScene(args.target);
      }
    });

    hotSpotDiv.appendChild(btn);
  }

  switchScene(sceneId: string): void {
    if (this.currentScene === sceneId) return;
    this.currentScene = sceneId;
    this.initViewer(sceneId);
  }
}