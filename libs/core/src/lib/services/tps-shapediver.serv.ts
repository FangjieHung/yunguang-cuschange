/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISessionApi } from "@shapediver/viewer";

// Thired party packages

// Custom packages

/**
 * Third Party Services Shapediver
 */
@Injectable({
  providedIn: 'root',
})
export class TPSShapediverServ {
  readonly modelViewUrl = "https://tunghai-prod.ap-northeast-1.shapediver.com";
  readonly optionInput = "optionInput";
  readonly visualizerInput = "visualizerInput";
  readonly optionOutput = "optionOutput";
  readonly projectInput = "projectInput"; // ProjectInputJson

  generateOption = {
    canvas: "generate-option-canvas",
    viewport: "generate-option-viewport",
    session: "generate-option-session",
    // ticket: '',
    // ticket: "423ea3ef7fc3a8b01233e6ca926f8fbdca2aecc2a6de1893228720e4b8c200966ce384fda49bbae55d44386bde8b3410bded65b7cd2138da2fb8d9244114f99a0fea46ee35e9de64f5bf57208d790e682febdd4c562430e8949a882f1597d1a83d70d1654a7831-393256f9220c934c1b127b2c8c287668"
  };

  changeModelV2 = {
    canvas: "change-model-v2-canvas",
    viewport: "change-model-v2-viewport",
    session: "change-model-v2-session",
    // ticket: '',
    // ticket: "190d8561273fbc0357088121ddf1f02af8b9176b9536a7a4c2a75acca5584cb3d611c7e4105fe2d085d3424af1c143a232d280464bb4cb05e3f5c27d5fe4953790df2eedfbef562cabbfd9a774c3a9f816b33a1c110f2652262e3cde260a0f93562a23d59cc45a-e32949389e1b00c93b1030314dd47c17"
    // ticketV0627: "2757952f21304d49dd1e5b23de6002078b86922fc59795ea55082c7a999cbc5a150e320089c1880ac6a95096c7f4e56cfe812ed9f3ae13353df945679e80b677ebd35951df9831ff80aada5774cd8a1e141d0aac0c1d91395acd3fbd70d04033bc8326cacdf301-c27dce7a80199a878660e55b818590ad"
  };

  selectCard?: CardType;
  optionName = "";
  constructor(private http: HttpClient) {
  }

  getTicketV2(typologyVal: number | null = null, ticketJto: any) {
    if (!typologyVal) {
      // 預設I型
      return ticketJto.v2.typology0;
    }

    switch (typologyVal) {
      case 0:
        return ticketJto.v2.typology0;
      case 1:
        return ticketJto.v2.typology1;
      default:
        return ticketJto.v2.typology0;
    }
  }
  getDegreesPerMeterAtLatitude(lat: number): { lng: number; lat: number } {
    if (typeof lat !== "number" || isNaN(lat) || lat < -90 || lat > 90) {
      console.log("請輸入有效的緯度數值（-90 至 90 度）");
      return { lng: 0, lat: 0 };
    }

    const earthRadius = 6378137;
    const oneDegreeLatInMeters = 111320;
    const latDegreePerMeter = 1 / oneDegreeLatInMeters;
    const radLat = (lat * Math.PI) / 180;
    const metersPerDegreeLng = (Math.PI / 180) * earthRadius * Math.cos(radLat);
    const lngDegreePerMeter = 1 / metersPerDegreeLng;

    return {
      lng: lngDegreePerMeter,
      lat: latDegreePerMeter,
    };
  }
  convertToRelativeCoordinates(boundary: [number, number][], roads: [number, number][]
  ): { boundary: [number, number, number][]; roads: [number, number, number][] } {
    if (!boundary?.length || boundary.length < 2) {
      return { boundary: [], roads: [] };
    }

    const [originLng, originLat] = boundary[0];
    const { lng: lngDegPerMeter, lat: latDegPerMeter } = this.getDegreesPerMeterAtLatitude(originLat);

    const convert = ([lng, lat]: [number, number]): [number, number, number] => {
      const deltaLng = lng - originLng;
      const deltaLat = lat - originLat;

      return [
        deltaLng / lngDegPerMeter,  // X 
        deltaLat / latDegPerMeter, // Y
        0
      ];
    };

    // boundary 除去第一點與最後一點（閉合點），其餘轉換
    const relativeBoundary = boundary.slice(1, -1).map(convert);
    const relativeRoads = roads.map(convert);

    return {
      boundary: [[0, 0, 0], ...relativeBoundary],
      roads: relativeRoads,
    };
  }

  //#region AI Generate API
  // waitingNum(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrlAiGenerate}/ai/waiting_num`);
  // }
  // generateImage(request: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrlAiGenerate}/ai/generate_image`, request);
  // }
  //#endregion
}


export const GetOutputsData = (name: string, session: ISessionApi) => {
  const outputs = session.getOutputByName(name);

  if (
    !outputs ||
    outputs.length === 0 ||
    !outputs[0].content ||
    outputs[0].content.length === 0
  )
    return;
  return outputs[0].content[0].data;
};

export const changePageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

export interface Location3D {
  x: number;
  y: number;
  z: number;
}

export interface ApartmentUnitMix {
  name: string;  // 房型名稱
  template: string; // 房型id
  ratio: number; // 房型占比
  unitArea: number;
}

export interface BasicCriteria {
  siteConstraints: {
    buildingCoverRatio: number; // 建蔽率
    floorAreaRatio: number; // 容積率
    offsetDistances: number[]; // 退縮距離
    excavationRatio: number; // 開挖率
    flightLimitation?: number // 航高限制:2508ADD
  };
  apartmentUnitMix: ApartmentUnitMix[]; // name、id 會是在創建專案時的”選擇房型組”
  numBasements: number; // 地下樓層數
  numFloors: number; // 地上樓層數
  floorToFloor: number; // 樓高
  numApartmentUnits: number; // 最低住戶數
  publicSpaceRatio: number; // 公共空間比例
  numCarParks: number; // 最低汽車停車數
  numMotorParks: number; // 最低機車停車數
  typology: number; // 0 : I-TYPE, 1 : O-TYPE ，需搭配Token
  numBuildings: number; // 棟數
}

export interface AdvancedCriteria {
  corridorWidth: number; // 走廊寬度
  coreWidth: number; // 核心筒寬度
  coreLength: number; // 核心統長度
  coreSide: number;
  egressDistance: number; // 防火逃生距離
}

export interface ProjectCriteria {
  basicCriteria: BasicCriteria;
  advancedCriteria: AdvancedCriteria;
}

export interface ProjectInputJson {
  project: {
    id: string; //看專案是存string or number
    name: string;
    location: {
      lat: number;
      lng: number;
    };
    address: string;
    unit: string; // 單位
    boundary: number[][]; // mapbox畫的基地座標
    roads: number[][]; // mapbox畫的線段
    projectCriteria: ProjectCriteria; // pdf抓到的東西
  };
}

export interface Plane {
  origin: Location3D;
  x_axis: Location3D;
  y_axis: Location3D;
  z_axis: Location3D;
}

export interface OptionInputJson {
  option: {
    seed: number; // 亂數當前時間(ms)取最後7位數
    project: string; // 專案id EX:xxxx-xxxx-proj-0001
    optionCriteria: ProjectCriteria;
  };
}

export interface OutputJson {
  option: {
    seed: number; //傳當前秒數(ms) % 1000000
    project: string;
    optionCriteria: {
      basicCriteria: BasicCriteria & {
        totalFloorArea: number;
      };
      advancedCriteria: AdvancedCriteria;
    };
    metrix: {
      totalAreaAboveGround: number;
      totalAreaUnderGround: number;
      totalAreaOfFacade: number;
    };
    site: {
      name: string;
      boundary: number[][];
      buildings: {
        boundary: Location3D[];
        origin_plane: Plane;
        floors: [];
        spine: Location3D[];
        name: string;
        id: string;
        template: string;
        corridor_length: number;
      }[];
      origin_plane: Plane;
    };
  };
}

export interface VisualizerInputJson {
  visualizer: {
    layoutAndTags: boolean; // 只顯示單一樓層
    massing: boolean; // 只顯示量體
    massingWithTemplate: boolean; // 量體顯示房型顏色  // 2508ADD 量體頁面送true，Detail頁面送false
    template: boolean; // 顯示量體(有陽台) // 2508ADD 量體頁面送false，Detail頁面送true
    structure: boolean; // 結構體
    setbackBoundary: boolean; // 是否顯示退縮線
    maximunBuildingArea: boolean; // 是否顯示最大開挖面積
    parking: boolean; // 是否顯示停車場
    basementLayout: boolean; // 是否顯示地下室
    envelope: boolean; // 是否顯示金鐘罩 // 2508ADD 法規檢討 落物曲線
    slope36?: false, // 2508ADD 法規檢討 36削線
    slope50?: false, // 2508ADD 法規檢討 50削線
    setbackCheck?: false, // 2508ADD 法規檢討 退縮檢查
    flightLimitationCheck?: false, // 2508ADD 法規檢討 航高限制檢討
  };
}

export interface CardType {
  img: string;
  data: OutputJson;
  time: string;
}