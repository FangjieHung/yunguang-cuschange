/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Thired party packages

// Custom packages

@Injectable({
  providedIn: 'root',
})
export class ThirdPartyApiServ {
  private readonly baseUrlAiGenerate = 'http://140.128.191.91:5000';
  private readonly baseUrlArcgen = 'https://arcgen-dev.botsup.cc';
  private readonly renderImgPath = 'assets/image/project/render';

  VALIDATION_PATTERNS = {
    // 正整數 (1, 2, 3, ...)
    positiveInteger: /^[1-9]\d*$/,
    // 零或正整數 (0, 1, 2, 3, ...)
    zeroOrPositiveInteger: /^(0|[1-9]\d*)$/,
    // 零或正數 (含小數，例如 0, 0.1, 2.5)
    zeroOrPositiveNumber: /^(0|[1-9]\d*)(\.\d+)?$/,
    // 最多兩位小數的正數 (例如 1, 1.1, 1.12)
    decimal2: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
    // Email 格式
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  };

  formThreshold = {
    buildingCoverRatio: {
      text: '建蔽率',
      min: 10,
      max: 80,
      defaultVal: 60,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 10~80',
      ver: '250711'
    },
    publicSpaceRatio: {
      text: '公設比例',
      min: 25,
      max: 60,
      defaultVal: 25,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 25~60',
      ver: '250711'
    },
    floorAreaRatio: {
      text: '容積率',
      min: 120,
      max: 900,
      defaultVal: 450,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 120~900',
      ver: '250711'
    },
    apartmentUnitMix: {
      text: '房型比例',
      min: 1,
      max: 100,
      defaultVal: 0,
      defaultVals: [30, 40, 30],
      pattern: null,
      tooltip: '建議值 各部位總和100% 不可為負數',
      ver: '250711'
    },
    numFloors: {
      text: '地上樓層數',
      min: 3,
      max: 50,
      defaultVal: 10,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 3~50',
      ver: '250711'
    },
    numBuildings: {
      text: '棟數',
      min: 1,
      max: 2,
      defaultVal: 1,
      defaultVals: [],
      pattern: this.VALIDATION_PATTERNS.positiveInteger,
      tooltip: '建議值 1~2',
      ver: '250711'
    },
    numBasements: {
      text: '地下室層數',
      min: 1,
      max: 5,
      defaultVal: 3,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 1~5',
      ver: '250711'
    },
    // 其他不採用表單呈現欄位
    floorToFloor: {
      text: '樓層高度',
      min: 2,
      max: 30,
      defaultVal: 3,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 2~30',
      ver: '250621',
    },
    egressDistance: {
      text: '防火梯逃生距離',
      min: 20,
      max: 50,
      defaultVal: 30,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 20~50',
      ver: '250621',
    },
    commercialArea: {
      text: '商用空間',
      min: 0,
      max: 99999999,
      defaultVal: 0,
      defaultVals: [40, 4],
      pattern: null,
      tooltip: '建議值 不可為負數,總面積>0店鋪數量必須整數',
      ver: '250621',
    },
    corridorWidth: {
      text: '最低走廊寬度',
      min: 1.2,
      max: 2.4,
      defaultVal: 2,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 1.2~2.4',
      ver: '250621',
    },
    numCarParks: {
      text: '最少停車格數',
      min: 1,
      max: 99999999,
      defaultVal: 100,
      defaultVals: [],
      pattern: this.VALIDATION_PATTERNS.positiveInteger,
      tooltip: '建議值 正整數',
      ver: '250621',
    },
    numMotorParks: {
      text: '最少機車格數',
      min: 1,
      max: 99999999,
      defaultVal: 100,
      defaultVals: [],
      pattern: this.VALIDATION_PATTERNS.positiveInteger,
      tooltip: '建議值 正整數',
      ver: '250621',
    },
    numApartmentUnits: {
      text: '最低戶數',
      min: null,
      max: null,
      defaultVal: 100,
      defaultVals: [],
      pattern: this.VALIDATION_PATTERNS.positiveInteger,
      tooltip: '建議值 正整數',
      ver: '250621',
    },
    typology: {
      text: '量體型態',
      min: null,
      max: null,
      defaultVal: 0,
      defaultVals: [],
      pattern: null,
      tooltip: '建議值 選擇型態',
      ver: '250621',
    },
  }
  
  styles = [
    {
      value: 'NeoClassic',
      name: '新古典風格',
      img: `${this.renderImgPath}/style-neo-classic.png`,
      wallMats: [
        {
          value: 'SandStone',
          name: '砂岩',
          img: `${this.renderImgPath}/wall-mat-sand-stone.png`,
        },
        {
          value: 'WhiteTile',
          name: '丁掛磚',
          img: `${this.renderImgPath}/wall-mat-white-tile.png`,
        },
        {
          value: 'Granite',
          name: '花崗岩',
          img: `${this.renderImgPath}/wall-mat-granite.png`,
        },
      ]
    },
    {
      value: 'Modern',
      name: '現代風格',
      img: `${this.renderImgPath}/style-modern.png`,
      wallMats: [
        {
          value: 'SandStone',
          name: '砂岩',
          img: `${this.renderImgPath}/wall-mat-sand-stone.png`,
        },
        {
          value: 'WhiteTile',
          name: '丁掛磚',
          img: `${this.renderImgPath}/wall-mat-white-tile.png`,
        },
        {
          value: 'Concrete',
          name: '混凝土',
          img: `${this.renderImgPath}/wall-mat-concrete.png`,
        },
      ]
    },
    {
      value: 'GreenIntegrated',
      name: '自然風格',
      img: `${this.renderImgPath}/style-greenIntegrated.png`,
      wallMats: [
        {
          value: 'WhiteTile',
          name: '丁掛磚',
          img: `${this.renderImgPath}/wall-mat-white-tile.png`,
        },
        {
          value: 'Concrete',
          name: '混凝土',
          img: `${this.renderImgPath}/wall-mat-concrete.png`,
        },
        {
          value: 'Brick',
          name: '紅磚',
          img: `${this.renderImgPath}/wall-mat-brick.png`,
        },
      ]
    },
  ];

  constructor(private http: HttpClient) { }

  //#region AI Generate API
  waitingNum(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlAiGenerate}/ai/waiting_num`);
  }

  /**
   * req = {
  img: string; //base64
  lora_name: string; //{風格}_{材質}
  }

  [新古典風格]
  砂岩材質 NeoClassic_SandStone
  白色丁掛磚材質 NeoClassic_WhiteTile
  花崗岩材質 NeoClassic_Granite

  [自然植栽風格]
  白色丁掛磚材質 GreenIntegrated_WhiteTile
  混凝土材質 GreenIntegrated_Concrete
  紅磚材質 GreenIntegrated_Brick
   * @param request
   * @returns
   */
  generateImage(request: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrlAiGenerate}/ai/generate_image`, request);
  }
  //#endregion

  //#region AI Generate API
  getArcgenDocs(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrlArcgen}/v1/docs/${id}`);
  }
  postArcgenDocs(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.baseUrlArcgen}/v1/docs`, formData, {
      headers: new HttpHeaders({
        // Content-Type 不要手動設，讓瀏覽器自動處理 multipart boundary
        accept: 'application/json',
      }),
    });
  }
  getArcgenDocsAnalysis(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrlArcgen}/v1/docs/${id}/analysis`);
  }

  /** 取得全部 styles */
  getStyles() {
    return this.styles;
  }

  /** 依 value 取單一 style */
  getStyleByValue(value: string) {
    return this.styles.find(style => style.value === value) || null;
  }

  /** 依 style value 取 wallMats */
  getWallMatsByStyles(value: string) {
    if (!value)
      return [];

    const style = this.getStyleByValue(value);
    return style ? style.wallMats : [];
  }
  //#endregion

}
