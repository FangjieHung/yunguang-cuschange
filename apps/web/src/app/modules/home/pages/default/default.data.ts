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

// ─── 客變流程 ───────────────────────────────────────────
export interface ProcessStep {
  phase:
    | 'sign'
    | 'wait'
    | 'open'
    | 'apply'
    | 'review'
    | 'reconfirm'
    | 'build';
  stepNumber: number;
  label: string;
  durationHint?: string;
  description: string;
  buyerActions: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: 'sign',
    stepNumber: 1,
    label: '簽約完成',
    durationHint: 'Day 0',
    description: '完成購屋簽約後，建案會發送客變系統開通通知（QR Code / 連結 / 簡訊）。',
    buyerActions: [
      '完成簽約程序',
      '收到客變系統開通通知',
      '掃描 QR Code 或點擊連結進入',
    ],
  },
  {
    phase: 'wait',
    stepNumber: 2,
    label: '等待開放期',
    durationHint: '約 60-180 天',
    description: '此階段可瀏覽公開資訊與虛擬樣品屋，預先構思客變需求，必要時可委託設計師。',
    buyerActions: [
      '瀏覽客變原則與費用表',
      '參觀虛擬樣品屋',
      '可選：委託設計師（需透過系統授權）',
    ],
  },
  {
    phase: 'open',
    stepNumber: 3,
    label: '客變開放',
    durationHint: '依工程進度',
    description: '建案宣布客變正式開放，買家可登入系統並完成首次戶型核對。',
    buyerActions: [
      '收到開放通知（LINE / Email）',
      '登入系統並核對戶型資訊',
      '確認所有權人資訊正確',
    ],
  },
  {
    phase: 'apply',
    stepNumber: 4,
    label: '提出申請',
    durationHint: '約 30 天',
    description: '透過 Room Navigator 逐空間規劃需求，系統自動彙整為工程類別清單與費用試算。',
    buyerActions: [
      '在 Room Navigator 標注各空間需求',
      '上傳必要施工圖（衛浴改裝、迴路新增）',
      '確認費用試算後送出申請',
    ],
  },
  {
    phase: 'review',
    stepNumber: 5,
    label: '審核回覆',
    durationHint: '約 7-14 天',
    description: '各工程類別由對應的承包商審核員獨立審核，全部通過後申請成立。',
    buyerActions: [
      '收到審核結果通知',
      '若有退件，依說明補件後重新送出',
      '與業務或設計師確認細節',
    ],
  },
  {
    phase: 'reconfirm',
    stepNumber: 6,
    label: '施工前複確認',
    durationHint: '施工前 7 天',
    description: '建案發起最終確認，買家簽署電子確認單後申請鎖定，不可再修改。',
    buyerActions: [
      '收到複確認通知',
      '檢視最終客變項目與費用合計',
      '電子簽名確認，文件加蓋時間戳',
    ],
  },
  {
    phase: 'build',
    stepNumber: 7,
    label: '施工執行',
    durationHint: '依工程進度',
    description: '工務依確認後的客變內容施作，期間客變內容鎖定不可變動。',
    buyerActions: [
      '工務團隊依確認內容施工',
      '可透過系統查詢施工進度節點',
      '完工驗收',
    ],
  },
];
