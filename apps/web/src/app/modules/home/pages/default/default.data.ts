/**
 * 富華澐光客變系統 — 公開區內容資料
 *
 * 對應 v1.2 規格 §九 公開資訊區。
 * Phase 1 內容寫死於本檔；Phase 2+ 可換為 API。
 */

// ─── 導覽 ───────────────────────────────────────────────
export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'principles', label: '客變原則' },
  { id: 'process', label: '客變流程' },
  { id: 'faq', label: '常見問題' },
  { id: 'fees', label: '費用表' },
  { id: 'equipment', label: '設備表' },
  { id: 'vr-tour', label: '虛擬樣品屋' },
];

// ─── 客變原則 ───────────────────────────────────────────
export interface PrincipleCategory {
  code: 'paint' | 'masonry' | 'partition' | 'mep' | 'kitchen' | 'ac' | 'tile';
  icon: string; // mat-icon 名稱
  title: string;
  scope: string;
  rules: string[];
  examples: string[]; // 客變項目代號
}

export const PRINCIPLES: PrincipleCategory[] = [
  {
    code: 'partition',
    icon: 'view_quilt',
    title: '輕隔間',
    scope: '室內非承重牆的拆除、新建與門位調整',
    rules: [
      '僅可變更非承重牆，承重結構不可動',
      '16F 以上樓層因結構安全，廚房隔間不可變更',
      '門位移動須於結構施工前申請',
      '拆除產生之退料費依坪數核退',
    ],
    examples: ['G-01', 'G-03', 'G-05'],
  },
  {
    code: 'mep',
    icon: 'electrical_services',
    title: '水電',
    scope: '插座、開關、迴路、給排水管位的新增與位移',
    rules: [
      '插座新增不限數量，須明確標示位置',
      '新增專用迴路須由工務確認配電箱備用迴路',
      '排水孔位移超過 30cm 需打樓板，費用大幅增加',
      '預埋電源（暖風機、熱毛巾架）須於磁磚施工前確認',
    ],
    examples: ['E-02', 'E-05', 'P-03', 'W-02'],
  },
  {
    code: 'kitchen',
    icon: 'kitchen',
    title: '廚具',
    scope: '廚具品牌升級、檯面材質、排風管路徑',
    rules: [
      '標準款廚具可升級至建商指定加價款',
      '排風管路徑不可變更（涉及共用管道）',
      '檯面材質可選石英石、人造石、不鏽鋼',
      '廚具尺寸客製化須額外加價',
    ],
    examples: ['K-01', 'K-02'],
  },
  {
    code: 'ac',
    icon: 'ac_unit',
    title: '空調',
    scope: '冷氣管路、出風口位置、室外機位移',
    rules: [
      '冷氣管路位移限同一空間內',
      '室外機位置受建築立面規範限制',
      '出風口位置須避開樑下',
      '吊隱式安裝須確認天花高度足夠',
    ],
    examples: ['AC-01', 'AC-02'],
  },
  {
    code: 'tile',
    icon: 'grid_view',
    title: '磁磚',
    scope: '地坪材質升級、衛浴壁磚選色、玄關地材',
    rules: [
      '標準地坪可升級為超耐磨木地板或石紋磚',
      '衛浴壁磚可選 5 種建商指定色系',
      '退磁磚改鋪木地板須注意防水銜接',
      '玄關石材升級可單獨申請',
    ],
    examples: ['T-01', 'T-02'],
  },
  {
    code: 'masonry',
    icon: 'foundation',
    title: '泥作',
    scope: '衛浴防水、地坪找平、浴缸改淋浴',
    rules: [
      '淋浴區防水至少拉至 180cm，可選全浴拉滿',
      '浴缸改淋浴須重新規劃排水坡度',
      '地坪找平與木地板施作須整體規劃',
      '退浴缸不退原料費，僅退工資差額',
    ],
    examples: ['M-01', 'M-02'],
  },
  {
    code: 'paint',
    icon: 'format_paint',
    title: '油漆',
    scope: '牆面顏色變更、天花顏色、特殊塗料',
    rules: [
      '主要居住空間可選 12 種建商指定色系',
      '天花顏色預設白色，可同步換色',
      '特殊塗料（黑板漆、磁性漆）須額外申請',
      '深色漆面收尾須提早通知工序',
    ],
    examples: ['PA-01'],
  },
];
