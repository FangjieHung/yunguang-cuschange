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

    this.viewer = pannellum.viewer(this.containerRef.nativeElement, {
      type: 'cubemap',
      cubeMap: this.scenes[sceneId],
      autoLoad: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
    });
  }

  switchScene(sceneId: string): void {
    if (this.currentScene === sceneId) return;
    this.currentScene = sceneId;
    this.initViewer(sceneId);
  }
}