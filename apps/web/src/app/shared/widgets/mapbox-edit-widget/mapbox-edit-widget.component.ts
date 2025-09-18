/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, EventEmitter, HostListener, Injector, Input, OnChanges, OnInit, Optional, Output, SimpleChanges, ViewChild } from '@angular/core';
import { LngLatLike, Map, MapMouseEvent } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
// import { Position } from 'ngx-mapbox-gl';
import type { Position, Polygon, Feature, FeatureCollection, LineString, Point } from 'geojson';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as jsts from 'jsts';
import * as turf from '@turf/turf';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'web-mapbox-edit-widget',
  templateUrl: './mapbox-edit-widget.component.html',
  styleUrls: ['./mapbox-edit-widget.component.scss'],
})

export class MapboxEditWidgetComponent extends BBDBaseComponent implements OnInit, OnChanges {
  readonly actionName = 'mapbox';
  readonly maxCoordLength = 6;
  @ViewChild('mapRef') mapRef!: ElementRef;
  @ViewChild('geocoder', { static: true }) geocoder!: ElementRef;
  map: Map | undefined;
  @Input() drawingMode: 'view' | 'area' | 'border' | 'backs' | 'readOnly' = 'view';
  @Input() currCoords: [number, number][] = [];
  @Input() borderCoords: [number, number][] = [];
  @Input() isShowLineBack = false;
  @Input() currBacks: [number, number][] = [];
  @Input() edgeBacks: number[] = []; // 儲存每一個 edge 的退縮距離
  @Input() currArea = 0;
  @Input() screenshotFile: File | null = null;

  @Output() coordsChange = new EventEmitter<[number, number][]>();
  @Output() borderChange = new EventEmitter<[number, number][]>();
  @Output() currBacksChange = new EventEmitter<[number, number][]>();
  @Output() edgeBacksChange = new EventEmitter<number[]>();
  @Output() currAreaOnChange = new EventEmitter<number>();
  @Output() screenshotFileChange = new EventEmitter<File | null>();
  // 定位
  @Input() center$!: Observable<[number, number]>;
  @Input() zoom$!: Observable<number>;
  @Output() mapMoved = new EventEmitter<{ center: [number, number]; zoom: number }>();
  center: [number, number] = [120.6000, 24.1797];
  zoom = 15;

  isDrawCoordFinish = false;
  isDrawBorderFinish = false;
  drawingToggle = 'area';
  currMapDim = '2d';
  isDrawingOpen = false;
  drawingBorderStartPoint: [number, number] | null = null;
  borderPreviewLineData: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: []
  };
  borderPrevierStartPointData: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: []
  };

  get lineData(): Feature<LineString> {
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: this.currCoords
      }
    };
  }
  get coordFillData(): Feature<Polygon> {
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[...this.currCoords]]
      }
    };
  }
  get pointData(): FeatureCollection<Point> {
    return {
      type: 'FeatureCollection',
      features: this.currCoords.map(coord => ({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coord
        }
      }))
    };
  }

  get lineBackData(): Feature<LineString> {
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: this.currBacks
      }
    };
  }
  get lineBackFillData(): Feature<Polygon> {
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[...this.currBacks]]
      }
    };
  }

  get borderLineData(): any {
    // 建立所有成對的線段
    const lineSegments = [];
    for (let i = 0; i < this.borderCoords.length; i += 2) {
      if (i + 1 < this.borderCoords.length) {
        lineSegments.push({
          type: "Feature",
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [this.borderCoords[i], this.borderCoords[i + 1]]
          }
        });
      }
    }

    return {
      type: 'FeatureCollection',
      features: lineSegments
    };
  }

  get edgeLabelData(): any {
    if (!this.currCoords || this.currCoords.length < 2) return null;

    // 若非順時鐘則反轉（保持一致方向）
    const coords = turf.booleanClockwise(this.currCoords)
      ? [...this.currCoords]
      : [...this.currCoords].reverse();

    const features: any[] = [];

    for (let i = 0; i < coords.length - 1; i++) {
      const start = coords[i];
      const end = coords[i + 1];

      // 計算中點
      const midLng = (start[0] + end[0]) / 2;
      const midLat = (start[1] + end[1]) / 2;

      // 計算向量
      const dx = end[0] - start[0];
      const dy = end[1] - start[1];
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len === 0) continue; // 避免除以 0

      // 單位法線向量
      const nx = -dy / len;
      const ny = dx / len;

      const offsetDistance = 0.0002; // 偏移量
      const offsetLng = midLng + nx * offsetDistance;
      const offsetLat = midLat + ny * offsetDistance;

      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [offsetLng, offsetLat],
        },
        properties: {
          label: `Edge${i + 1}`,
        },
      });
    }

    return {
      type: 'FeatureCollection',
      features,
    };
  }


  get edgeLabelDataV1() {
    const features: any[] = [];

    for (let i = 0; i < this.currCoords.length - 1; i++) {
      const start = this.currCoords[i];
      const end = this.currCoords[i + 1];

      // 中點
      const midLng = (start[0] + end[0]) / 2;
      const midLat = (start[1] + end[1]) / 2;

      // 向量方向 (dx, dy)
      const dx = end[0] - start[0];
      const dy = end[1] - start[1];

      // 單位法線向量 (-dy, dx)
      const len = Math.sqrt(dx * dx + dy * dy);
      const nx = -dy / len;
      const ny = dx / len;

      // 往外偏移，例如 0.0002 度（大約 20 公尺）
      // const offsetDistance = 0.0002; // 20 公尺
      const offsetDistance = 0.0002;
      const offsetLng = midLng + nx * offsetDistance;
      const offsetLat = midLat + ny * offsetDistance;

      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [offsetLng, offsetLat],
        },
        properties: {
          // label: `Edge${i + 1}: ${this.edgeBacks?.[i] || 0}m`,
          label: `Edge${i + 1}`,
        },
      });
    }

    return {
      type: 'FeatureCollection',
      features,
    };
  }


  constructor(
    @Optional() public modal: NzModalRef,
    protected override injector: Injector,) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
    this.center$.subscribe(center => {
      this.center = center;
      if (this.map) {

        this.map.setCenter(center);
      }
    });

    this.zoom$.subscribe(zoom => {
      this.zoom = zoom;
      if (this.map) {

        this.map.setZoom(zoom);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currCoords']) {
      this.renderCoords(this.currCoords);
    }
    if (changes['currBacks']) {
      this.renderBacks(this.currBacks);
    }
  }

  doModalDestroy(val: any = null): void {
    if (val) {
      this.modal.destroy(val);
      return;
    }
    this.modal.destroy(false);
  }

  // Two-way Bindings
  updateCurrCoords(): void {
    this.coordsChange.emit(this.currCoords);
    this.takeScreenshotOfCurrCoords();
  }
  updateCurrBacks(newBacks: [number, number][]) {
    this.currBacks = newBacks;
    this.currBacksChange.emit(this.currBacks);
  }
  updateScreenshot(input: File | null) {
    this.screenshotFile = input;
    this.screenshotFileChange.emit(this.screenshotFile);
  }
  updateBorderCoords(): void {
    this.borderChange.emit(this.borderCoords);
    this.takeScreenshotOfCurrCoords();
  }

  renderCoords(coords: [number, number][]): void {
    if (coords.length < 3) return;

    // 確保多邊形閉合（首尾點相同）
    const closedCoords = [...coords];
    if (!this.isCoordinatesEqual(closedCoords[0], closedCoords[closedCoords.length - 1])) {
      closedCoords.push(closedCoords[0]);
    }

    // 使用 JSTS 驗證並修復幾何
    const reader = new jsts.io.GeoJSONReader();
    const writer = new jsts.io.GeoJSONWriter();
    const polygon = turf.polygon([closedCoords]);

    try {
      const geom = reader.read(polygon.geometry);
      const validGeom = geom.isValid() ? geom : geom.buffer(0); // 自動修復無效多邊形

      const fixedPolygon = writer.write(validGeom);
      const fixedCoords = (fixedPolygon as any).coordinates[0] as [number, number][];

      // 更新地圖源數據
      this.updateMapSource('line', {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [fixedCoords]
        }
      });
      this.updateMapSource('fill-area', {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [[...fixedCoords]]
        }
      });
    } catch (e) {
      console.error('Geometry validation failed:', e);
    }
  }

  onMove(event: any = null) {
    if (this.map) {
      this.mapMoved.emit({
        center: this.map.getCenter().toArray() as [number, number],
        zoom: this.map.getZoom()
      });
    }
  }

  private isCoordinatesEqual(coord1: [number, number], coord2: [number, number]): boolean {
    return coord1[0] === coord2[0] && coord1[1] === coord2[1];
  }

  renderBacks(backs: [number, number][]): void {
    // 渲染退縮線
  }

  switchToAreaDrawing() {
    this.drawingMode = 'area';
  }

  switchToBacksDrawing() {
    this.drawingMode = 'backs';
  }

  onMapLoad(map: Map): void {
    const geocoder = new MapboxGeocoder({
      accessToken: 'pk.eyJ1IjoiaHBicm90aGVyIiwiYSI6ImNtODVmZGtsbTJicTEybXExcXQ1dzJmNzQifQ.641_BzJs9sz9pcdtxo_lqA',
      mapboxgl: mapboxgl,
      marker: true,
      placeholder: '請輸入名稱或地址',

    });
    geocoder.addTo(this.geocoder.nativeElement);
    geocoder.on('result', (e) => {
      map.flyTo({
        center: e.result.center,
        zoom: 15
      });
    });

    this.map = map;

    // 添加縮放/平移結束事件監聽
    map.on('moveend', () => {
      if (this.currCoords.length > 2) {
        // this.renderCoords(this.currCoords); // 強制重繪
      }
    });

    // 添加視窗大小變化監聽
    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (this.map) {   // <-- 確認 map 存在
          this.map.resize();
          if (this.currCoords?.length > 2) {
            // this.renderCoords(this.currCoords);
          }
        }
      }, 200);
    });
  }

  toggleDrawing(): void {
    this.isDrawingOpen = !this.isDrawingOpen;
    if (this.isDrawingOpen) {
      this.doChangeMode('area');
    }
  }
  closeDrawing(): void {
    this.isDrawingOpen = false;
    this.doChangeMode('view');
    this.clearBorderPreview();
  }

  onSubmit(): void {
    if (this.currCoords.length > 1 && (this.currCoords.length < this.maxCoordLength) && (!this.isDrawCoordFinish)) {
      this.doCoordClose();
      // this.renderCoords(this.currCoords); // 提交時強制驗證
      this.isDrawCoordFinish = true;
    }
    if (this.drawingMode == 'area') {
      this.updateCurrCoords();
    }
    if (this.drawingMode == 'border') {
      this.isDrawBorderFinish = true;
      this.updateBorderCoords();
    }
    this.closeDrawing();
  }

  /**
   * 收合
   */
  doCoordClose(): void {
    const closedCoords = [...this.currCoords];
    // 防止重複收合
    if (this.isCoordinatesEqual(closedCoords[0], closedCoords[closedCoords.length - 1])) {
      return;
    }

    this.isDrawCoordFinish = true;
    this.currCoords.push(this.currCoords[0]);
    const polygon = turf.polygon([[...this.currCoords]]);
    this.currArea = turf.area(polygon);
    this.currAreaOnChange.emit(this.currArea);
    this.updateCurrCoords();
    this.syncEdgeBacks();

    this.bbdNotifyServ.info(`提示：已完成基地範圍，請繼續繪畫「畫邊界線」`);
    // this.doChangeMode('border');
  }

  onChangeDimension(dim: '2d' | '3d'): void {
    if (!this.map)
      return;

    if (dim === '3d') {
      this.map.setLayoutProperty('3d-buildings', 'visibility', 'visible');
      this.map.easeTo({ pitch: 60, bearing: 20 });
    } else {
      this.map.setLayoutProperty('3d-buildings', 'visibility', 'none');
      this.map.easeTo({ pitch: 0, bearing: 0 });
    }

    this.currMapDim = dim;
  }

  onMapClick(event: MapMouseEvent): void {
    if (this.drawingMode == 'area') {
      this.doDrawingArea(event);
    } else if (this.drawingMode === 'border') {
      this.doDrawingBorder(event);
      if (event?.lngLat) {
        if (this.drawingBorderStartPoint === null) {
          this.drawingBorderStartPoint = [event.lngLat.lng, event.lngLat.lat];
          this.borderPrevierStartPointData = {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: this.drawingBorderStartPoint
              },
              properties: {}
            }]
          };
        } else {
          this.drawingBorderStartPoint = null;
          this.borderPreviewLineData = {
            type: 'FeatureCollection',
            features: []
          };
          this.borderPrevierStartPointData = {
            type: 'FeatureCollection',
            features: []
          };
        }
      }
    }
  }

  onMapMouseMove(event: MapMouseEvent): void {
    if (!this.drawingBorderStartPoint) return;
    if (!event?.lngLat) return;

    const previewPoint: [number, number] = [event.lngLat.lng, event.lngLat.lat];
    this.borderPreviewLineData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [this.drawingBorderStartPoint, previewPoint]
          },
          properties: {}
        }
      ]
    };
  }

  onMapPointClick(event: any): void {
    if (this.isDrawingOpen == false)
      return;
    if (this.isDrawCoordFinish)
      return;

    // Map click 會先觸發並把點擊座標先加入陣列，所以比較最後點座標與點點擊座標相同就把最後一個座標移除
    if (this.isCoordinatesEqual([event?.lngLat.lng, event?.lngLat.lat], this.currCoords[this.currCoords.length - 1])) {
      this.currCoords.pop();
    }
    if (this.currCoords.length <= 2)
      return;

    let minDist = Infinity;
    let nearest = this.currCoords[0];
    for (const coord of this.currCoords || []) {
      const dist = turf.distance(turf.point([event?.lngLat.lng, event?.lngLat.lat]), turf.point(coord));
      if (dist < minDist) {
        minDist = dist;
        nearest = coord;
      }
    }

    if (this.isCoordinatesEqual(nearest, this.currCoords[0])) {
      this.doCoordClose();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.drawingMode === 'border') {
      this.clearBorderPreview();
    }
  }
  // 取消未完成點及預覽線
  clearBorderPreview(): void {
    // 如果 borderCoords 是奇數個點（代表最後一個是未完成的起點）
    if (this.borderCoords.length % 2 === 1) {
      this.borderCoords.pop();
    }

    this.drawingBorderStartPoint = null;

    this.borderPreviewLineData = {
      type: 'FeatureCollection',
      features: []
    };

    this.borderPrevierStartPointData = {
      type: 'FeatureCollection',
      features: []
    };
  }

  doDrawingArea(event: MapMouseEvent) {
    if (!event?.lngLat)
      return;

    //const maxCoordLength = 6;
    if (this.currCoords.length > this.maxCoordLength) {
      this.bbdNotifyServ.warning(`提示：最多只能標記${this.maxCoordLength}個點`);
      return;
    }

    if (this.isDrawCoordFinish) {
      this.bbdNotifyServ.warning(`提示：基地範圍已完成標記，如需變更請重繪`);
      return;
    }

    this.currCoords.push([event.lngLat.lng, event.lngLat.lat]);
    this.updateCurrCoords();

    // 最後標記點自動收合
    if (this.currCoords.length === this.maxCoordLength) {
      // 等待手動收合
      setTimeout(() => {
        this.doCoordClose();
      }, 200);

      return;
    }
    this.syncEdgeBacks();
  }

  private syncEdgeBacks() {
    let edgeCount = this.currCoords?.length || 0;
    edgeCount = edgeCount ? edgeCount - 1 : 0;
    this.edgeBacks = Array(edgeCount).fill(40); // 預設值可調整
    this.edgeBacksChange.emit(this.edgeBacks);
    this.doDrawingBacks();
  }

  doDrawingBacks(edgeBacks: number[] | null = null): void {
    if (!this.currCoords || this.currCoords.length < 3) return;

    edgeBacks ??= this.edgeBacks;
    const isClockwise = turf.booleanClockwise(this.currCoords);
    const coords = isClockwise ? [...this.currCoords] : [...this.currCoords].reverse();

    const offsetLines: [number, number][][] = [];

    // 處理每一條邊線，單邊偏移
    for (let i = 0; i < coords.length - 1; i++) {
      const start = coords[i];
      const end = coords[i + 1];
      const offsetDist = edgeBacks[i] ?? 0;

      const line = turf.lineString([start, end]);
      const offset = turf.lineOffset(line, offsetDist, { units: 'meters' });

      offsetLines.push(offset.geometry.coordinates.map(c => [c[0], c[1]]));
    }

    // 計算交點形成新 polygon
    const newPoints: [number, number][] = [];

    for (let i = 0; i < offsetLines.length; i++) {
      const prev = offsetLines[(i - 1 + offsetLines.length) % offsetLines.length];
      const curr = offsetLines[i];

      const intersect = this.getLineIntersection(prev[0], prev[1], curr[0], curr[1]);
      if (intersect) {
        newPoints.push(intersect);
      } else {
        // 如果無交點則採用目前線段的起點保底
        newPoints.push(curr[0]);
      }
    }

    newPoints.push(newPoints[0]); // 閉合

    // 修正 polygon 有效性
    this.currBacks = this.fixPolygonWithJSTS(newPoints);
    this.updateCurrBacks(this.currBacks);
  }
  private getLineIntersection(
    p1: [number, number], p2: [number, number],
    p3: [number, number], p4: [number, number]
  ): [number, number] | null {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    const [x4, y4] = p4;

    const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denom === 0) return null;

    const px = ((x1 * y2 - y1 * x2) * (x3 - x4) -
      (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
    const py = ((x1 * y2 - y1 * x2) * (y3 - y4) -
      (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;

    return [px, py];
  }
  private fixPolygonWithJSTS(coords: [number, number][]): [number, number][] {
    const reader = new jsts.io.GeoJSONReader();
    const writer = new jsts.io.GeoJSONWriter();
    const polygon = turf.polygon([coords]);
    const geom = reader.read(polygon.geometry as any);
    const fixed = geom.buffer(0); // 修復自交或非法區塊
    const fixedPolygon = writer.write(fixed);

    const result: [number, number][] = [];
    ((fixedPolygon as any)?.coordinates as any[])?.forEach((ring: [number, number][]) => {
      ring.forEach(([lng, lat]) => result.push([lng, lat]));
    });
    return result;
  }

  doDrawingBacksV5(edgeBacks: number[] | null = null): void {
    if (!this.currCoords || this.currCoords.length < 2) return;

    edgeBacks ??= this.edgeBacks;
    this.currBacks = [];

    // 判斷 currCoords 是否為順時鐘，若否則反轉
    const polygonCheck = turf.polygon([[...this.currCoords]]);
    const isClockwise = turf.booleanClockwise(this.currCoords);
    const coords = isClockwise ? [...this.currCoords] : [...this.currCoords].reverse();

    if (coords.length > 3) {
      for (let i = 0; i < coords.length - 1; i++) {
        const distance = edgeBacks[i] ?? 0;
        const line = turf.lineString([coords[i], coords[i + 1]]);
        const offsetLine = turf.lineOffset(line, distance, { units: 'meters' });
        const offsetCoords = offsetLine.geometry.coordinates;

        if (i === 0) {
          offsetCoords.forEach(([lng, lat]) => {
            this.currBacks.push([lng, lat]);
          });

          // 補尾
          this.currBacks = [
            ...this.currBacks,
            ...coords.slice(2, coords.length - 1),
            this.currBacks[0],
          ];

          this.currBacks = this.fixPolygonWithJSTS(this.currBacks);
        } else {
          const line2 = turf.lineString([this.currBacks[i], this.currBacks[i + 1]]);
          const offsetLine2 = turf.lineOffset(line2, distance, { units: 'meters' });
          const offsetCoords2 = offsetLine2.geometry.coordinates;

          const backCache: [number, number][] = offsetCoords2.map(([lng, lat]) => [lng, lat]);

          if (coords.length - 1 === i + 1) {
            this.currBacks = [backCache[1], ...this.currBacks.slice(1, -2), ...backCache];
          } else {
            this.currBacks.splice(i, 2, ...backCache);
          }

          this.currBacks = this.fixPolygonWithJSTS(this.currBacks);
        }
      }
    }

    this.updateCurrBacks(this.currBacks);
  }

  doDrawingBorder(event: MapMouseEvent) {
    if (!event?.lngLat) return;

    // 簡單添加新點
    this.borderCoords.push([event.lngLat.lng, event.lngLat.lat]);
    this.updateBorderCoords();
  }

  doChangeMode(mode: 'view' | 'area' | 'border' | 'backs') {
    this.drawingMode = mode;
    if (!this.map) {
      return;
    }

    switch (mode) {
      case 'view':
        this.map.getCanvas().style.cursor = 'pointer';
        break;
      case 'area':
        this.drawingToggle = 'area';
        this.map.getCanvas().style.cursor = 'crosshair';
        break;
      case 'border':
        this.drawingToggle = 'border';
        this.map.getCanvas().style.cursor = 'crosshair';
        break;
      default:
        this.map.getCanvas().style.cursor = 'pointer';
        break;
    }
  }

  doRefreshMarker(): void {
    if (this.drawingToggle === 'area') {
      this.currCoords = [];
      this.currArea = 0;
      this.updateCurrCoords();
      this.currBacks = [];
      this.updateCurrBacks(this.currBacks);
      this.isDrawCoordFinish = false;
    } else {
      this.borderCoords = [];
      this.updateBorderCoords();
      this.isDrawBorderFinish = false;
      this.clearBorderPreview();
    }
  }
  updateMapSource(sourceId: string, data: any): void {
    if (!this.map || !data) return;

    const source = this.map.getSource(sourceId) as mapboxgl.GeoJSONSource;
    if (source) {
      source.setData(data);
    }
  }

  takeScreenshotOfCurrCoords(): void {
    if (!this.map) {
      return;
    }
    // 移動焦點
    // this.fitToCurrCoordsBounds(this.map, this.currCoords);

    // 等 map 完成移動後再截圖
    this.map.once('idle', () => {
      if (!this.map) return;
      const dataUrl = this.captureMapScreenshot(this.map);
      this.screenshotFile = this.dataURLtoFile(dataUrl, 'map-screenshot.png');
      this.updateScreenshot(this.screenshotFile);
      console.log(this.screenshotFile);

      // debug開新視窗預覽
      // const imgWindow = window.open('', '_blank');
      // imgWindow?.document.write(`<img src="${dataUrl}" style="width:100%">`);
    });
  }

  captureMapScreenshot(map: mapboxgl.Map): string {
    const canvas = map.getCanvas();
    return canvas.toDataURL('image/png'); // 可改 'image/jpeg' 若你偏好
  }

  fitToCurrCoordsBounds(map: mapboxgl.Map, currCoords: [number, number][]): void {
    if (!currCoords || currCoords.length === 0) return;

    const bounds = new mapboxgl.LngLatBounds(currCoords[0], currCoords[0]);
    for (const coord of currCoords) {
      bounds.extend(coord);
    }

    map.fitBounds(bounds, {
      padding: 80,
      animate: false
    });
  }

  dataURLtoFile(dataURL: string, filename: string): File {
    const arr = dataURL.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : 'image/png';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
}

