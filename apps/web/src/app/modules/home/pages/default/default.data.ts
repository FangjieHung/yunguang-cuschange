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

// ─── 常見問題 ───────────────────────────────────────────
export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  groupId: 'general' | 'design' | 'fees' | 'schedule' | 'designer';
  groupTitle: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    groupId: 'general',
    groupTitle: '一般問題',
    items: [
      {
        q: '客變是什麼？什麼時候可以開始？',
        a: '客變是預售屋在交屋前依買家需求調整室內配置（格局、水電、建材等）的服務。本建案客變開放時點將另行通知，您可在簽約後先透過公開區與虛擬樣品屋預習，正式開放後系統會以簡訊與 Email 通知您登入。',
      },
      {
        q: '我可以做哪些客變？哪些不行？',
        a: '您可調整非承重牆位、水電插座配置、廚具升級、磁磚選色等。但結構承重牆、共用管道、公共區域設備、建築外觀立面不在客變範圍。詳細規則請參考客變原則區的各類別說明。',
      },
      {
        q: '是否一定要透過系統申請？可否口頭或紙本？',
        a: '為確保所有變更留有正式紀錄並通過合規審核，本案客變一律透過系統線上申請。系統會自動產生確認單並由買家電子簽名，作為日後爭議的依據。',
      },
      {
        q: '若我不做任何客變，會怎樣？',
        a: '完全沒問題。系統預設為標準交屋規格，您只需確認戶型資訊後即可關閉，建案會依標準規格交屋。',
      },
    ],
  },
  {
    groupId: 'fees',
    groupTitle: '費用與付款',
    items: [
      {
        q: '客變費用怎麼計算？',
        a: '客變費用分為「加價」（升級項目須加付）與「退款」（取消項目可退費）。各項目費用請參考費用表區的對照表，實際金額以後台審核結果為準。',
      },
      {
        q: '退料項目（如拆牆）會退錢嗎？',
        a: '會。拆除類項目採「退料不退工」原則，建材成本會核退，但拆除工資不退。明細會在費用試算中清楚標示。',
      },
      {
        q: '客變費用何時繳？',
        a: '客變確認後，業務會依建商規範通知繳費時點，通常於施工前繳清。Phase 1 系統不支援線上金流，仍維持銀行匯款。',
      },
      {
        q: '若申請後反悔可以取消嗎？',
        a: '在施工前複確認之前都可修改或取消申請。一旦完成電子簽名複確認，原則上不可再變更。如有特殊狀況，可聯絡業務申請解除鎖定（須走審核流程）。',
      },
    ],
  },
  {
    groupId: 'schedule',
    groupTitle: '時程與截止',
    items: [
      {
        q: '每個項目都有截止日嗎？',
        a: '是的。各類客變項目依施工順序有不同截止日（如格局類最早、磁磚類較晚）。系統會依您的戶型樓層自動顯示可申請項目與剩餘天數。',
      },
      {
        q: '超過截止日怎麼辦？',
        a: '超過截止日的項目會自動鎖定無法申請。系統會在截止日前一週與三天分別發送提醒通知。建議您及早規劃。',
      },
      {
        q: '施工前複確認如果我沒回應呢？',
        a: '系統會發送複確認通知並提供 7 天回應期。超過 7 天未回應系統自動標記「逾期視為同意」並進入施工程序。我們強烈建議您主動完成確認。',
      },
    ],
  },
  {
    groupId: 'designer',
    groupTitle: '委託設計師',
    items: [
      {
        q: '我能讓設計師代為操作嗎？',
        a: '可以。您可在帳號設定中授權「受委託方」帳號給設計師，由設計師代為瀏覽規則、填寫申請、上傳圖面。但最終電子簽名仍須由您本人執行。',
      },
      {
        q: '如何取消對設計師的授權？',
        a: '隨時都可以。登入後進入帳號設定，移除受委託方即可，設計師端將立即失去存取權。',
      },
      {
        q: '設計師需要另外付費才能使用嗎？',
        a: '設計師使用本系統無額外費用。委託關係由您與設計師另行約定。',
      },
    ],
  },
  {
    groupId: 'design',
    groupTitle: '設計與圖面',
    items: [
      {
        q: '我可以拿到戶型圖嗎？',
        a: '可以。在登入後的「我的戶型」頁可下載 PDF 格式戶型圖（含尺寸、比例尺、現有水電配置）。給設計師標注後再上傳作為申請附件。',
      },
      {
        q: '為什麼有些項目要求上傳圖面？',
        a: '涉及多工程系統連動的項目（如衛浴全套改裝、新增電路迴路），文字無法完整描述，必須有正式施工圖才能審核。系統會在對應項目明確標示需要上傳。',
      },
      {
        q: '虛擬樣品屋現在能看嗎？',
        a: '主力戶型（A1、B10/B9）的虛擬樣品屋已可瀏覽。其他戶型素材還在準備中，請參考公開區的「虛擬樣品屋」入口。',
      },
      {
        q: 'DWG 格式圖面什麼時候提供？',
        a: 'Phase 1 提供 PDF 格式戶型圖。Phase 3 將提供 DWG 格式，供設計師在 CAD 軟體中直接標注。',
      },
    ],
  },
];
