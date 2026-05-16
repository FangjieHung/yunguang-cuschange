# 富華澐光客變系統 — Phase 1 / Slice 4：買家端核心 UI（UI-only）

> 版本：v1.0｜日期：2026-05-16
> 上層需求：`系統需求規格-v1.2.md`（Phase 1）
> 本 spec 範疇：S4 買家端核心流程的 **9 個 UI 頁面**（不含功能/驗證/API）
> 設計語言：完全沿用 S1+S2 既定 Seafoam Glassmorphism

---

## 1. 目標與範圍

### 1.1 目標
做出買家端核心流程的視覺骨架，讓內部可以走完一遍 click-through：登入 → 核對戶型 → 看儀表板 → 看戶型 → 進入客變設定 → 看清單 → 送出。**只做 UI，沒有任何業務功能**：
- 不做表單驗證
- 不做 OTP 發送 / 驗證
- 不做檔案上傳的真實 API
- 不做截止日判斷邏輯
- 所有狀態用 component-local signal 或 mock data 寫死

### 1.2 範圍內（9 頁）

| # | 頁面 | 路由 | 對應規格 |
|---|---|---|---|
| 1 | OTP 登入 | `/auth/login` | §1.2 帳號開通流程 |
| 2 | 首次核對頁 | `/customization/welcome` | §1.3 首次登入核對頁 |
| 3 | 買家儀表板 | `/customization` | Phase 1 §八（總入口） |
| 4 | 我的戶型 | `/customization/my-unit` | §八 我的戶型頁 |
| 7 | 全室設定 | `/customization/whole-house` | §11.3 全室設定 |
| 8 | Layer 1 表單範例 | `/customization/form/layer-1/:itemId` | §12 Layer 1 純選擇類 |
| 12 | 我的清單 | `/customization/my-list` | §11.5 我的清單 |
| 13 | 設計師圖面包下載 | `/customization/designer-pack` | §12 Layer 4 設計師圖面包 |
| 14 | 申請送出確認頁 | `/customization/submit` | §5.2 施工前確認單（買家端版本） |

### 1.3 範圍外（明列）

- ❌ Room Navigator 空間總覽（item 5）、單一空間操作（item 6）→ 後續 slice
- ❌ Layer 2 / 3 / 4 表單（items 9-11）→ 後續 slice
- ❌ 真實 OTP / Auth API
- ❌ Auth Guard 真實守衛邏輯（路由 guard 直接放行）
- ❌ 表單驗證 / 錯誤訊息真實邏輯（顯示 placeholder）
- ❌ 檔案上傳 API（檔案選擇 UI 有，按上傳會 console.log）
- ❌ 受委託方帳號（Phase 2）
- ❌ RWD 之外的 a11y 細修（基本可訪即可）

### 1.4 沿用 S1+S2 既有

- Token：`_mat-theme.scss` 全部 token（含 S1+S2 新增的 `--radius-md/sm`、`--text-secondary/muted`、`--shadow-elevated/soft`、`--max-content`、`--topbar-h`、`--section-gap`）
- 共用 SCSS：`_card.scss`、`_typo.scss`、`_button.scss`、`_section.scss`、`_footer.scss`、`_topbar-public.scss`（auth 頁也用 public topbar）
- 公開區 layout shell（`_layout/DefaultContainerComponent`）— auth 頁面套用
- 設計語言：seafoam glassmorphism

---

## 2. 架構

### 2.1 路由變更（`app-routing.module.ts`）

新增 `customization` lazy route：

```ts
{
  path: 'customization',
  // 不加 AppAuthGuard（UI demo），未來補上
  loadChildren: () => import('./modules/customization/customization.module')
                          .then(m => m.CustomizationModule)
}
```

`auth` route 新增 `login`：

```ts
// auth-routing.module.ts 內加
{
  path: 'login',
  component: LoginComponent,
  data: { title: `登入客變系統｜${env.siteName}` }
}
```

既有 `signin` / `signup` 路由保留不動（學會員殘留），新增 `login` 為客變專用。

### 2.2 模組結構（新增）

```
src/app/modules/customization/
  customization.module.ts
  customization-routing.module.ts
  customization.data.ts                 ← mock 資料（戶型、清單、設備等）
  pages/
    welcome/                            ← 首次核對頁
      welcome.component.{ts,html,scss}
    dashboard/                          ← 買家儀表板
      dashboard.component.{ts,html,scss}
    my-unit/                            ← 我的戶型
      my-unit.component.{ts,html,scss}
    whole-house/                        ← 全室設定
      whole-house.component.{ts,html,scss}
    form-layer1/                        ← Layer 1 表單範例
      form-layer1.component.{ts,html,scss}
    my-list/                            ← 我的清單
      my-list.component.{ts,html,scss}
    designer-pack/                      ← 設計師圖面包下載
      designer-pack.component.{ts,html,scss}
    submit/                             ← 送出確認
      submit.component.{ts,html,scss}
    index.ts                            ← barrel
  components/                           ← 模組內共用元件（小、不外放）
    buyer-topbar/                       ← 買家專用 topbar（含用戶選單）
    buyer-shell/                        ← buyer layout shell
    info-tile/                          ← 資訊塊（戶型卡用）
    item-row/                           ← 客變項目列（清單用）
    fee-summary/                        ← 費用摘要卡
```

`auth/pages/login/login.component.{ts,html,scss}` 新增於既有 auth 模組。

### 2.3 新增 SCSS partials

```
src/assets/scss/component/
  _otp-form.scss            OTP 登入卡片
  _welcome-card.scss        首次核對卡片
  _buyer-topbar.scss        買家頂欄
  _buyer-shell.scss         買家 layout
  _unit-info-card.scss      戶型資訊卡（左右兩欄、含格局圖）
  _floorplan.scss           格局圖容器（SVG / 圖片 placeholder）
  _whole-house-grid.scss    全室設定項目網格
  _option-card-grid.scss    Layer 1 圖卡選擇器
  _list-summary.scss        我的清單彙整
  _fee-summary.scss         費用摘要
  _checklist.scss           設備清單樣式
  _submit-confirm.scss      送出確認頁面
  _pack-download.scss       圖面包下載列表
  _empty-state.scss         空狀態（清單為空等）
```

`styles.scss` 加入上述 import。

---

## 3. Buyer Layout Shell

新增 `customization/components/buyer-shell/`，所有 buyer 頁面（welcome / dashboard / my-unit / whole-house / form / my-list / designer-pack / submit）共用此 shell。

### 3.1 結構

```
┌─────────────────────────────────────────┐
│  Buyer Topbar (sticky, 64px)            │ 玻璃感
├──────┬──────────────────────────────────┤
│      │                                  │
│ Side │     <router-outlet>              │ Content
│ 60px │                                  │
│      │                                  │
└──────┴──────────────────────────────────┘
```

桌機 (≥ md)：左側 sidebar 60px（icon-only，4 個入口：儀表板 / 戶型 / 客變設定 / 清單）
手機 (< md)：sidebar 隱藏，底部 bottom-nav 4 icon

### 3.2 Buyer Topbar

```
[澐光 logo + 戶號]   [客變狀態 chip]   [距截止 X 天]   [通知鈴 🔔]  [使用者選單 ▾]
```

- 左：建案 logo + 「12F-A1 王先生」
- 中：當前狀態 chip（草稿中 / 審核中 / 待補件 / 已通過）
- 中右：截止日倒數（chip 樣式）
- 右：通知鈴鐺 icon、使用者大頭貼 + 下拉（我的帳號 / 委託方管理 / 登出）

### 3.3 Buyer Sidebar (桌機)

垂直排列 4 個圓形 icon（沿用既有 `.sidebar-item` 風格）：
- 🏠 dashboard
- 📐 my-unit
- 🛋 customization entry（暫導向 whole-house，未來連 Room Navigator）
- 📋 my-list

### 3.4 Bottom Nav (手機)

固定底部，4 個 icon + 標籤，玻璃感同 sidebar。

---

## 4. 頁面規格

### 4.1 [#1] OTP 登入 `/auth/login`

**layout**：使用既有 `_layout/DefaultContainerComponent` 的 public shell（topbar-public + footer）

**畫面結構**（玻璃卡片置中）：

```
                ╔══════════════════════════════╗
                ║   登入客變系統                ║
                ║                              ║
                ║   身分證末四碼                ║
                ║   [ ____ ]                   ║
                ║                              ║
                ║   手機號碼                    ║
                ║   [ 09__-___-___ ]           ║
                ║                              ║
                ║   [ 取得驗證碼 ]              ║
                ║                              ║
                ║   驗證碼                      ║
                ║   [ _ ][ _ ][ _ ][ _ ][ _ ][ _ ] ║
                ║                              ║
                ║   [ 登入 ]                    ║
                ║                              ║
                ║   首次登入？掃描合約 QR Code   ║
                ╚══════════════════════════════╝
```

- 卡片寬 max 480px、padding 40px、glass card 風
- OTP 6 格 input（單字符）
- 「取得驗證碼」按鈕點擊後改顯示「重新發送 (XX)」（UI only，倒數可純 setTimeout 演示，或固定文字）
- 「登入」按鈕導向 `/customization/welcome`（首次登入）或 `/customization`（非首次，本 demo 一律導 welcome）
- 底部小字：QR Code 提示 + 客服聯絡

### 4.2 [#2] 首次核對頁 `/customization/welcome`

**layout**：用 buyer-shell 但隱藏 sidebar / bottom-nav（強制流程）

**畫面結構**（置中卡片）：

```
╔═══════════════════════════════════════╗
║         請確認您的購屋資訊             ║
║         首次登入需要核對戶型           ║
╠═══════════════════════════════════════╣
║  建案名稱   富華澐光                   ║
║  戶    號   12F-A1                    ║
║  坪    數   35.7 坪                   ║
║  格    局   3 房 2 廳 2 衛             ║
║  所有權人   王○○（末三碼隱碼）        ║
║                                       ║
║  [📐 預覽戶型平面圖] ▾                ║ ← 可展開顯示 placeholder 圖
╠═══════════════════════════════════════╣
║   [ ✅ 資訊正確，進入客變系統 ]        ║
║   [ ❌ 資訊有誤，聯絡業務 ]            ║
╚═══════════════════════════════════════╝
```

- 點「資訊正確」→ 導向 `/customization`
- 點「資訊有誤」→ 顯示 Material dialog 顯示業務聯絡資訊（單純 demo dialog）

### 4.3 [#3] 買家儀表板 `/customization`

**layout**：完整 buyer-shell（topbar + sidebar/bottom-nav + content）

**畫面結構**（grid）：

```
┌──────────────────────────┬─────────────────┐
│ 歡迎卡 (greeting)         │ 進度卡 (progress)│
│ 王先生 12F-A1            │ 申請進度: 草稿中  │
│ 申請開放至 5/30           │ 進度條 35%       │
├──────────────────────────┼─────────────────┤
│ 快速入口 grid (2x2)       │ 即將到期        │
│ - 我的戶型                │ ⚠ 格局類 5/20    │
│ - 客變設定                │ ⚠ 水電類 5/25    │
│ - 我的清單                │                 │
│ - 圖面包下載              │                 │
├──────────────────────────┴─────────────────┤
│ 最新通知 list (3-5 筆 placeholder)           │
│ ● 業務 王業務 上傳新版規則 (2 天前)         │
│ ● 系統 您的草稿已自動儲存 (5 天前)          │
└────────────────────────────────────────────┘
```

- 每塊都用 `.card` 玻璃感
- 快速入口的圖卡點擊 → 對應 route
- 進度條：seafoam fill；數字寫死 35%
- 通知 list：icon + 標題 + 時間，無互動

### 4.4 [#4] 我的戶型 `/customization/my-unit`

**畫面結構**：

```
┌─────────────────────────────────────────────┐
│  我的戶型 / 12F-A1                          │
├──────────────────┬──────────────────────────┤
│                  │ 基本資訊                  │
│  [格局圖 placeholder│ 戶型: A1                 │
│   SVG 線稿或圖]   │ 坪數: 35.7 坪            │
│                  │ 格局: 3房2廳2衛           │
│  ┌──┐┌──┐         │ 朝向: 東南               │
│  │主臥││書房│      │ 樓層: 12F               │
│  └──┘└──┘         │                         │
│  ┌──────┐         │ 已申請項目: 0            │
│  │ 客廳  │         │                         │
│  └──────┘         │ [下載格局圖 PDF]         │
│                  │ [下載設計師圖面包]       │
└──────────────────┴──────────────────────────┘
│ 樓層限制提示                                │
│ ⚠ 您位於 12F (≥ 16F 才有 G-05 廚房隔間變更限制) │
│ ✅ 可申請：G-01 ~ G-05、E-01 ~ E-07、W-01 ~ W-05 │
└─────────────────────────────────────────────┘
```

- 左格局圖：CSS 畫個簡化平面（彩色矩形代表空間）或用 `<svg>` placeholder
- 右資訊欄：用 `info-tile` 元件渲染 key-value
- 樓層限制：玻璃 alert 卡

### 4.5 [#7] 全室設定 `/customization/whole-house`

**畫面結構**：

```
┌──────────────────────────────────────────┐
│ 全室設定 / 跨空間通用項目                  │
│ 適用於跨越多空間的客變項目                │
├──────────────────────────────────────────┤
│ ┌──────┬──────┬──────┐                    │
│ │ 地板  │天花板 │ 全室  │                    │
│ │ 材質  │ 高度  │ 弱電  │                    │
│ │ [圖]  │ [圖]  │ [圖]  │                    │
│ └──────┴──────┴──────┘                    │
│ ┌──────┬──────┐                            │
│ │ 大門  │ 玄關門│                            │
│ │ [圖]  │ [圖]  │                            │
│ └──────┴──────┘                            │
└──────────────────────────────────────────┘
```

- 5 個項目卡（規格 §11.3）
- 每張卡顯示縮圖（placeholder 漸層）+ 標題 + 短說明
- 點擊任一卡 → 導向 `/customization/form/layer-1/<itemId>`（連到 Layer 1 範例）

### 4.6 [#8] Layer 1 表單範例 `/customization/form/layer-1/:itemId`

以「地板材質」為示例。

**畫面結構**：

```
┌─────────────────────────────────────────────┐
│ ← 返回全室設定                              │
│                                             │
│ 地板材質                                    │
│ 選擇您偏好的地板材質。本項目為純選擇類，無    │
│ 需位置或數量設定。                          │
├─────────────────────────────────────────────┤
│ ┌────────┬────────┬────────┐                │
│ │[淺木紋A]│[深木紋B]│[石紋磁磚]│                │
│ │        │        │        │                │
│ │ 淺色木紋│ 深色木紋│ 石紋磁磚 │                │
│ │ 標配    │ +12,000 │ +18,500 │                │
│ │ [選擇]  │ [選擇]  │ [選擇]  │                │
│ └────────┴────────┴────────┘                │
├─────────────────────────────────────────────┤
│ 已選: 淺色木紋 (標配)                       │
│ [取消]  [加入清單 →]                        │
└─────────────────────────────────────────────┘
```

- 3 張圖卡選擇器（`_option-card-grid.scss`）
- 點擊卡片 → 卡片加上 selected 邊框（seafoam 邊框 + checkmark）
- 「加入清單」按鈕 → 導向 `/customization/my-list`（demo 不真存清單）

### 4.7 [#12] 我的清單 `/customization/my-list`

**畫面結構**：

```
┌─────────────────────────────────────────────┐
│ 我的清單 / 自動彙整                         │
├─────────────────────────────────────────────┤
│ 工程類別: 格局類                            │
│ ┌──────────────────────────────────────┐    │
│ │ G-01 客廳輕隔間牆拆除                  │    │
│ │ 位置: 客廳    費用: -12,000 (退料)    │    │
│ │ [編輯] [刪除]                         │    │
│ ├──────────────────────────────────────┤    │
│ │ G-03 書房門位置移動                   │    │
│ │ 位置: 書房    費用: +8,500            │    │
│ │ [編輯] [刪除]                         │    │
│ └──────────────────────────────────────┘    │
│                                             │
│ 工程類別: 水電類                            │
│ ┌──────────────────────────────────────┐    │
│ │ E-02 書房新增插座 × 2                 │    │
│ │ 位置: 書房南牆    費用: +3,000        │    │
│ └──────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│ 費用摘要                                    │
│ 加價合計: NT$ 11,500                        │
│ 退款合計: NT$ 12,000                        │
│ 淨支出:   -NT$ 500                          │
├─────────────────────────────────────────────┤
│ [儲存草稿]  [前往送出確認 →]                │
└─────────────────────────────────────────────┘
```

- 用 `item-row` 元件渲染每列
- 類別分組
- `fee-summary` 元件顯示加總
- 「儲存草稿」按鈕 → 顯示 snackbar「草稿已儲存」（UI 假動作）
- 「前往送出」→ `/customization/submit`

**空狀態**：若清單為空，顯示 empty-state 卡片：「您還沒有任何客變項目，[開始規劃 →]」連到 `/customization/whole-house`。

### 4.8 [#13] 設計師圖面包下載 `/customization/designer-pack`

**畫面結構**：

```
┌─────────────────────────────────────────────┐
│ 設計師圖面包下載                            │
│ 如您委託設計師代為規劃，下載此圖面包供其    │
│ 標注後上傳。                                │
├─────────────────────────────────────────────┤
│ 📄 A1 平面圖.pdf                            │
│    含房間尺寸、比例尺、水電配置              │
│    [下載]                                   │
├─────────────────────────────────────────────┤
│ 📄 A1 衛浴尺寸圖.pdf                        │
│    主衛、次衛、排水孔、管道間位置            │
│    [下載]                                   │
├─────────────────────────────────────────────┤
│ 📄 客變規則摘要.pdf                          │
│    本戶型適用的申請限制與禁止項目            │
│    [下載]                                   │
├─────────────────────────────────────────────┤
│ 📄 買家規劃參考.pdf                          │
│    您已完成的 Layer 1-3 選擇                │
│    [下載]                                   │
└─────────────────────────────────────────────┘
│ 圖面包 ZIP 包                               │
│ [📦 下載全部 (1 次打包)]                    │
└─────────────────────────────────────────────┘
```

- 4 個 PDF 列 + 1 個 ZIP 列
- 用 `_pack-download.scss` 風格
- 「下載」按鈕點擊只 console.log（UI only）

### 4.9 [#14] 申請送出確認頁 `/customization/submit`

**畫面結構**：

```
┌─────────────────────────────────────────────┐
│ 申請送出確認                                │
│ 請最後確認您的申請內容                       │
├─────────────────────────────────────────────┤
│ 戶號: 12F-A1 / 王先生                       │
│ 申請版本: v1 (草稿)                          │
├─────────────────────────────────────────────┤
│ ── 格局類 ──                                │
│ ✅ G-01 客廳輕隔間牆拆除      -12,000        │
│ ✅ G-03 書房門位置移動         +8,500        │
│ ── 水電類 ──                                │
│ ✅ E-02 書房新增插座 × 2       +3,000        │
│ ── 全室設定 ──                              │
│ ✅ 地板材質: 淺色木紋          (標配)        │
├─────────────────────────────────────────────┤
│ 費用合計                                    │
│ 加價: +NT$ 11,500                           │
│ 退款: -NT$ 12,000                           │
│ 淨支出: -NT$ 500                            │
├─────────────────────────────────────────────┤
│ □ 我已閱讀並同意客變規則與費用條款          │
├─────────────────────────────────────────────┤
│ [返回修改]  [送出申請]                       │
└─────────────────────────────────────────────┘
```

- 唯讀（不能編輯）
- 必須勾同意才能點「送出申請」（按鈕 disabled / enabled UI）
- 「送出申請」→ 顯示 dialog「您的申請已送出，將進入審核流程」+ 導回 `/customization`

---

## 5. 共用元件規格

| 元件 | 用途 | 主要 props（介面，UI only 可忽略真實 input） |
|---|---|---|
| `buyer-topbar` | Buyer shell 頂欄 | mock 戶號、狀態 chip、倒數天數 |
| `buyer-shell` | layout shell | router-outlet projection |
| `info-tile` | key-value 顯示 | `label: string`, `value: string` |
| `item-row` | 客變項目列 | `code, name, location, fee, deletable` |
| `fee-summary` | 費用摘要卡 | `addOn: number, refund: number` |
| `option-card` (in form-layer1) | 圖卡選擇器 | `imageBg, title, price, selected` |
| `empty-state` | 空狀態 | `icon, message, ctaLabel, ctaRoute` |

---

## 6. Mock Data（`customization.data.ts`）

```ts
export const MOCK_BUYER = {
  unit: '12F-A1',
  ownerName: '王○○',
  size: 35.7,
  layout: '3房2廳2衛',
  facing: '東南',
  floor: 12,
  project: '富華澐光',
};

export const MOCK_DEADLINE = { daysLeft: 14, status: 'draft' };

export const MOCK_LIST = [
  { category: '格局類', items: [
    { code: 'G-01', name: '客廳輕隔間牆拆除', location: '客廳', fee: -12000 },
    { code: 'G-03', name: '書房門位置移動', location: '書房', fee: 8500 },
  ]},
  { category: '水電類', items: [
    { code: 'E-02', name: '書房新增插座 × 2', location: '書房南牆', fee: 3000 },
  ]},
  { category: '全室設定', items: [
    { code: 'WH-01', name: '地板材質: 淺色木紋', location: '全室', fee: 0 },
  ]},
];

export const MOCK_NOTIFICATIONS = [ /* 3-5 筆 */ ];
export const MOCK_WHOLE_HOUSE_ITEMS = [ /* 5 項：地板/天花/弱電/大門/玄關門 */ ];
export const MOCK_FLOOR_OPTIONS = [ /* 3 選項：淺/深/石紋 */ ];
export const MOCK_DESIGNER_PACK = [ /* 4 PDF */ ];
```

---

## 7. 互動行為（UI only）

| 互動 | 行為 |
|---|---|
| OTP 「取得驗證碼」 | 按鈕變「重新發送 (60)」純 UI 倒數，無 API |
| OTP 「登入」 | 直接導向 `/customization/welcome` |
| 首次核對「資訊正確」 | 導 `/customization` |
| 首次核對「資訊有誤」 | 開 dialog 顯示業務聯絡資訊 |
| 儀表板「快速入口」卡 | 連對應 route |
| 我的戶型「下載 PDF」 | console.log |
| 全室設定卡片點擊 | 導 `/customization/form/layer-1/<itemId>` |
| Layer 1 選擇 | 卡片切換 selected 狀態（component-local signal） |
| Layer 1「加入清單」 | 導 `/customization/my-list`，不真存 |
| 我的清單「刪除」 | console.log |
| 我的清單「儲存草稿」 | Material snackbar「草稿已儲存」 |
| 圖面包「下載」 | console.log |
| 送出「送出申請」 | 開 dialog 顯示完成，按確定回 `/customization` |

---

## 8. 響應式策略

| 區塊 | 手機 (< md) | 桌機 (≥ lg) |
|---|---|---|
| Buyer Shell | 上 topbar + 底 bottom-nav | 上 topbar + 左 sidebar |
| 登入卡 | 全寬 padding 24 | max 480 居中 |
| 儀表板 grid | 1 欄 | 2 欄 |
| 我的戶型 | 上格局圖 / 下資訊 | 左格局 / 右資訊 |
| 全室設定 grid | 2 欄 | 3 欄 |
| Layer 1 卡 grid | 1 欄 | 3 欄 |
| 我的清單 item-row | 內容垂直堆疊 | 水平排列 |
| 設備清單 fee-summary | 全寬下方 | 右側固定 |
| 送出確認 | 全寬 | 800 居中 |

---

## 9. 驗收計畫

1. **路由完整**
   - `/auth/login` → `/customization/welcome` → `/customization` → 4 個分支均可走通

2. **視覺一致性**
   - 所有頁面用 seafoam glass card 風
   - Token 無散落硬編碼
   - 沿用 S1+S2 的 `.btn-primary/.btn-outline/.btn-ghost`、`.section`、`.card`

3. **響應式**
   - 375 / 768 / 1024 / 1440 四個寬度 layout 正常
   - 手機 bottom-nav 出現、桌機 sidebar 出現

4. **點擊互動**
   - 表 §7 的每一條 UI 互動可操作
   - 路由跳轉正確
   - 沒有控制台錯誤

5. **內容完整性**
   - 9 頁全部完成，無 lorem
   - mock data 按規格寫入

6. **新增 SCSS 已掛載**
   - `styles.scss` import 完整
   - 新增 token 在 `_mat-theme.scss`

---

## 10. 不在範疇（重申）

明列以避免 scope creep：

- ❌ Room Navigator 空間總覽（item 5）
- ❌ 單一空間操作頁（item 6）
- ❌ Layer 2 數量類表單（item 9）
- ❌ Layer 3 定位類表單（item 10）
- ❌ Layer 4 複合類表單 + 衛浴清單（item 11）
- ❌ 真實 OTP / Auth / API
- ❌ 真實表單驗證
- ❌ 真實檔案上傳
- ❌ 真實草稿儲存
- ❌ 路由 AuthGuard
- ❌ 後台、業務、審核
- ❌ i18n
- ❌ Storybook / E2E

---

## 附錄 A：與 v1.2 規格對應

| 頁面 | v1.2 章節 |
|---|---|
| OTP 登入 | §1.2 |
| 首次核對 | §1.3 |
| 買家儀表板 | §八 Phase 1 入口 |
| 我的戶型 | §八「我的戶型頁」 |
| 全室設定 | §11.3 |
| Layer 1 表單 | §12 Layer 1 |
| 我的清單 | §11.5 |
| 設計師圖面包 | §12 Layer 4 圖面包說明 |
| 送出確認 | §5.2 確認單（買家送出版） |
