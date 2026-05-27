/* eslint-disable @typescript-eslint/no-explicit-any */
// Mock data for S4 buyer UI (UI-only, no API).
// Based on requirement spec v1.2 (G-01 / E-02 / A1 type / 12F-A1 etc.)

export interface BuyerInfo {
  unit: string;
  ownerName: string;
  size: number;
  layout: string;
  facing: string;
  floor: number;
  project: string;
}

export interface ApplicationStatus {
  status: 'draft' | 'review' | 'rework' | 'approved' | 'reconfirm';
  statusLabel: string;
  daysLeft: number;
  applyEndDate: string;
  progressPercent: number;
}

export interface NotificationItem {
  id: string;
  source: 'sales' | 'system' | 'review';
  icon: string;
  title: string;
  body: string;
  timeAgo: string;
}

export interface WholeHouseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  layer: 1 | 2 | 3 | 4;
}

export interface MaterialOption {
  id: string;
  name: string;
  image: string;
  isDefault?: boolean;
  priceDelta?: number;
}

export interface MaterialCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  options: MaterialOption[];
}

export interface FloorOption {
  id: string;
  name: string;
  series: string;
  priceDelta: number;
  isStandard?: boolean;
  swatchBg: string; // CSS background for placeholder
}

export interface ListItem {
  code: string;
  name: string;
  location: string;
  fee: number; // positive = 加價, negative = 退款
}

export interface ListCategory {
  category: string;
  items: ListItem[];
}

export interface DesignerPackFile {
  name: string;
  description: string;
  size: string;
  format: 'PDF' | 'ZIP';
}

export interface DeadlineAlert {
  code: string;
  category: string;
  deadline: string;
}

// ========== Buyer ==========
export const MOCK_BUYER: BuyerInfo = {
  unit: '12F-A1',
  ownerName: '李亮怡',
  size: 35.7,
  layout: '3房2廳2衛',
  facing: '東南',
  floor: 12,
  project: '富華澐光',
};

export const MOCK_STATUS: ApplicationStatus = {
  status: 'draft',
  statusLabel: '草稿中',
  daysLeft: 14,
  applyEndDate: '2026-05-31',
  progressPercent: 35,
};

// ========== Notifications ==========
export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    source: 'sales',
    icon: 'campaign',
    title: '業務 王業務 上傳新版客變規則',
    body: '請至客變原則頁查看最新規定。',
    timeAgo: '2 天前',
  },
  {
    id: 'n2',
    source: 'system',
    icon: 'save',
    title: '您的草稿已自動儲存',
    body: '上次儲存：2026/05/15 14:32',
    timeAgo: '5 天前',
  },
  {
    id: 'n3',
    source: 'review',
    icon: 'mark_chat_read',
    title: '審核人員留言',
    body: '請確認 E-05 配電箱備用迴路可行性。',
    timeAgo: '6 天前',
  },
];

// ========== Deadline alerts ==========
export const MOCK_DEADLINE_ALERTS: DeadlineAlert[] = [
  { code: 'G-01 ~ G-05', category: '格局類', deadline: '2026-05-20' },
  { code: 'E-01 ~ E-07', category: '水電類', deadline: '2026-05-25' },
];

// ========== Whole house items ==========
export const MOCK_WHOLE_HOUSE_ITEMS: WholeHouseItem[] = [
  {
    id: 'wh-floor',
    icon: 'view_in_ar',
    title: '地板材質',
    description: '全室木地板統一選色、各區磁磚差異選色',
    layer: 1,
  },
  {
    id: 'wh-ceiling',
    icon: 'view_quilt',
    title: '天花高度',
    description: '是否申請平釘天花、高度設定',
    layer: 1,
  },
  /* 
  {
    id: 'wh-electrical',
    icon: 'electrical_services',
    title: '全室弱電規格',
    description: '面板顏色、插座規格（國際型／一般型）',
    layer: 2,
  },
  */
  {
    id: 'wh-door',
    icon: 'door_front',
    title: '大門',
    description: '門片材質、顏色、鎖具規格',
    layer: 1,
  },
  {
    id: 'wh-entry-door',
    icon: 'meeting_room',
    title: '玄關門',
    description: '門片材質、顏色與五金',
    layer: 1,
  },
];

// ========== Material categories (whole-house single-page form) ==========
const MATERIAL_ASSET_BASE = 'assets/image/building-material-options';

export const MOCK_MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: 'wood-floor',
    title: '木地板顏色',
    description: '全室木地板統一選色',
    icon: 'view_in_ar',
    options: [
      {
        id: 'wf-bea502',
        name: 'BEA502 冰島橡木',
        image: `${MATERIAL_ASSET_BASE}/木地板顏色/BEA502-冰島橡木1(預設).jpg`,
        isDefault: true,
        priceDelta: 0,
      },
      {
        id: 'wf-bea366',
        name: 'BEA366 布拉格橡木',
        image: `${MATERIAL_ASSET_BASE}/木地板顏色/BEA366-布拉格橡木1.jpg`,
        priceDelta: 12000,
      },
      {
        id: 'wf-tile-617',
        name: '客變磁磚 TES-617',
        image: `${MATERIAL_ASSET_BASE}/木地板顏色/客變磁磚-TES-617.jpg`,
        priceDelta: 18500,
      },
    ],
  },
  {
    id: 'kitchen-cabinet',
    title: '廚具櫃體',
    description: '廚房櫃體飾面顏色',
    icon: 'kitchen',
    options: [
      {
        id: 'kc-d230',
        name: 'D230 深海藍',
        image: `${MATERIAL_ASSET_BASE}/廚具櫃體/D230-深海藍-預設.jpg`,
        isDefault: true,
        priceDelta: 0,
      },
      {
        id: 'kc-d218',
        name: 'D218 喀什米爾',
        image: `${MATERIAL_ASSET_BASE}/廚具櫃體/D218-喀什米爾.jpg`,
        priceDelta: 8500,
      },
    ],
  },
  {
    id: 'system-cabinet',
    title: '系統櫃體',
    description: '全室系統櫃飾面顏色',
    icon: 'door_sliding',
    options: [
      {
        id: 'sc-l6012p',
        name: '浪淘沙 牛津藍 (L6012P)',
        image: `${MATERIAL_ASSET_BASE}/系統櫃體/浪淘沙-牛津藍(L6012P)(預設).jpg`,
        isDefault: true,
        priceDelta: 0,
      },
      {
        id: 'sc-l0901p',
        name: '浪淘沙 奶昔棕 (L0901P)',
        image: `${MATERIAL_ASSET_BASE}/系統櫃體/浪淘沙-奶昔棕(L0901P).jpg`,
        priceDelta: 6500,
      },
    ],
  },
];

// ========== Floor options (Layer 1 form sample) ==========
export const MOCK_FLOOR_OPTIONS: FloorOption[] = [
  {
    id: 'floor-a',
    name: '淺色木紋',
    series: '系列 A · 標配',
    priceDelta: 0,
    isStandard: true,
    swatchBg: 'linear-gradient(135deg, #e6d3b3 0%, #d4b88a 100%)',
  },
  {
    id: 'floor-b',
    name: '深色木紋',
    series: '系列 B · 升級',
    priceDelta: 12000,
    swatchBg: 'linear-gradient(135deg, #7a5230 0%, #4a2f1a 100%)',
  },
  {
    id: 'floor-c',
    name: '石紋磁磚',
    series: '系列 C · 升級',
    priceDelta: 18500,
    swatchBg: 'linear-gradient(135deg, #d8d2c4 0%, #a8a094 100%)',
  },
];

// ========== My list ==========
export const MOCK_LIST: ListCategory[] = [
  {
    category: '格局類',
    items: [
      { code: 'G-01', name: '客廳輕隔間牆拆除', location: '客廳', fee: -12000 },
      { code: 'G-03', name: '書房門位置移動', location: '書房', fee: 8500 },
    ],
  },
  {
    category: '水電類',
    items: [
      { code: 'E-02', name: '書房新增插座 × 2', location: '書房南牆', fee: 3000 },
      { code: 'W-02', name: '主臥新增網路插座 × 1', location: '主臥', fee: 1200 },
    ],
  },
  {
    category: '全室設定',
    items: [
      { code: 'WH-01', name: '地板材質：淺色木紋', location: '全室', fee: 0 },
    ],
  },
];

// ========== Designer pack files ==========
export const MOCK_DESIGNER_PACK: DesignerPackFile[] = [
  {
    name: 'A1-平面圖.pdf',
    description: '含房間尺寸、比例尺、現有水電配置位置',
    size: '2.4 MB',
    format: 'PDF',
  },
  {
    name: 'A1-衛浴尺寸圖.pdf',
    description: '主衛、次衛各一張，含排水孔、管道間位置',
    size: '1.8 MB',
    format: 'PDF',
  },
  {
    name: '客變規則摘要.pdf',
    description: '本戶型適用的申請限制與禁止項目',
    size: '0.9 MB',
    format: 'PDF',
  },
  {
    name: '買家規劃參考.pdf',
    description: '您已完成的 Layer 1-3 選擇，供設計師參考',
    size: '0.6 MB',
    format: 'PDF',
  },
];

export const MOCK_DESIGNER_PACK_ZIP: DesignerPackFile = {
  name: 'A1-設計師圖面包.zip',
  description: '以上 4 份文件打包下載',
  size: '5.7 MB',
  format: 'ZIP',
};

// ========== Sidebar nav ==========
export interface BuyerNavItem {
  path: string;
  icon: string;
  label: string;
  exact?: boolean;
}

export const BUYER_NAV: BuyerNavItem[] = [
  { path: '/customization', icon: 'dashboard', label: '儀表板', exact: true },
  { path: '/customization/whole-house', icon: 'chair', label: '客變設定' },
  { path: '/customization/my-list', icon: 'fact_check', label: '我的清單' },
];

export function sumFees(items: ListCategory[]): { addOn: number; refund: number; net: number } {
  let addOn = 0;
  let refund = 0;
  items.forEach((cat) =>
    cat.items.forEach((it) => {
      if (it.fee > 0) addOn += it.fee;
      else if (it.fee < 0) refund += -it.fee;
    })
  );
  return { addOn, refund, net: addOn - refund };
}
