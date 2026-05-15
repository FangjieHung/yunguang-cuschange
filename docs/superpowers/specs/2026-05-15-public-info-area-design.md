# 富華澐光客變系統 — Phase 1 / Slice 1+2：視覺地基 + 公開資訊區

> 版本：v1.0｜日期：2026-05-15
> 上層需求：`系統需求規格-v1.2.md`（Phase 1）
> 本 spec 範疇：S1（視覺地基）+ S2（公開資訊區 M0）

---

## 1. 目標與範圍

### 1.1 目標
讓未登入訪客（含等待客變開放期的買家、潛在買家、受委託設計師）能在公開區瀏覽：
1. 客變原則（各類別規則總覽）
2. 客變流程（時間軸）
3. 常見問題 FAQ
4. 常見費用表（差價參考）
5. 標準交屋設備表
6. 虛擬樣品屋入口（Phase 1 後段補實際 360° Viewer，本 slice 先做入口卡）

並建立後續所有頁面共用的視覺地基（token、layout shell、共用 SCSS 元件）。

### 1.2 範圍內

- **視覺地基（S1）**
  - 沿用既有 Seafoam Glassmorphism 設計語言
  - 補強 token、按鈕、section、typography
  - 改造 `_layout/DefaultContainerComponent` 為公開區 shell（topbar + content + footer）
  - 新增公開區專屬 SCSS partials
- **公開資訊區（S2）**
  - 改造 `home/pages/default` 為單頁長滾動公開頁
  - 7 個區塊（Hero + 6 內容區）+ Footer
  - Topbar 含錨點導覽 + 漢堡選單（手機）
  - 桌機右側浮動錨點 dot 導覽
  - IntersectionObserver 同步 active 狀態
  - 全部內容寫成結構化 TypeScript data（按 v1.2 規格示意值）
- **響應式**：手機 / 平板 / 桌機（375 / 768 / 1024 / 1440）

### 1.3 範圍外（明列以避免 scope creep）

- ❌ 登入 / OTP / 帳號（Hero / Topbar 的「登入客變系統」CTA 連結到 `/auth/login` placeholder）
- ❌ 虛擬樣品屋 360° Viewer 實作（VR 入口卡 CTA 連到 `/#vr-coming-soon`）
- ❌ Buyer / Admin layout shell（留給 S3-S5）
- ❌ 真實素材（建商 logo / 渲染圖 / 戶型圖 / 設備照）— 用 placeholder
- ❌ CMS 後台維護公開區內容（內容寫死於 `default.data.ts`）
- ❌ i18n（先做繁中）
- ❌ Storybook / E2E 測試

---

## 2. 設計語言（沿用既有）

**Seafoam Glassmorphism**：
- 主色：`#67CDC9` seafoam、`#4db8b4` deep seafoam
- 背景：白色磨砂玻璃（`rgba(255,255,255,.45-.55)` + `backdrop-filter: blur(16px)`）
- body 背景：粉嫩青綠多點漸層（已在 styles.scss）
- 圓角：20px（lg）/ 12px（md，新增）/ 8px（sm，新增）
- 字色：`#1a3533` 深綠墨色
- 字體：Noto Sans TC（繁中）+ Inter（拉丁/數字）
- 邊框：seafoam 20% 透明
- 陰影：青綠色微透明陰影（柔和）

---

## 3. 架構

### 3.1 路由（不變動）

- `/` 由 `home` 模組 `DefaultComponent` 接管 = 公開資訊長頁
- 維持 `_layout/DefaultContainerComponent` 作為 shell
- 維持 `app-routing.module.ts` 既有結構
- 利用既有 `anchorScrolling: 'enabled'`、`scrollPositionRestoration: 'enabled'` 設定

### 3.2 檔案異動

**現有檔案改造**：
```
src/app/modules/_layout/pages/default-container/
  default-container.component.html  ← 1 行 → public shell（topbar + <router-outlet> + footer）
  default-container.component.scss  ← 公開區 layout 樣式
  default-container.component.ts    ← 新增 currentSection signal + nav 資料

src/app/modules/home/pages/default/
  default.component.html            ← Intellecta dashboard → 公開區長頁
  default.component.scss            ← 區塊間距、scroll-margin-top
  default.component.ts              ← 提供 sections data、IntersectionObserver
  default.data.ts                   ← 新增：所有區塊的結構化資料

src/styles.scss                     ← 取消 layout/section/button 註解；註解 dashboard 元件
src/app/modules/home/home.module.ts ← 移除 LottieModule + GoogleMapsModule（公開區用不到）
```

**新增 SCSS partials**（`src/assets/scss/component/`）：
```
_topbar-public.scss      公開區頂欄
_footer.scss             頁腳
_hero.scss               首屏
_principles.scss         客變原則卡片
_process-timeline.scss   流程豎排時間軸
_faq.scss                手風琴 FAQ
_price-table.scss        費用表
_equipment-table.scss    設備表
_vr-entry.scss           VR 入口卡
_anchor-nav.scss         桌機側邊浮動錨點
```

**沿用、不改動**：
- `_mat-theme.scss`（只新增 token，既有 token 不變）
- `_card.scss`、`_common.scss`、`_typo.scss`、`_dialog.scss`
- 既有 dashboard 元件 SCSS（`_topbar.scss` / `_sidebar.scss` / `_main.scss` / `_chat-card.scss` / `_activity-card.scss` / `_timeline.scss` / `_todo-card.scss` / `_summary-card.scss` / `_header-row.scss` / `_middle-row.scss` / `_bottom-row.scss`）—— 保留檔案不刪，從 styles.scss 取消引用，留待 S3+

**啟用既有但被註解的 SCSS**：
- `_section.scss` → 改寫為「公開區 section 通用容器」
- `_button.scss` → 補三種變體：`.btn-primary` / `.btn-outline` / `.btn-ghost`

---

## 4. Token 補強

`_mat-theme.scss` 在 `:root` 區塊新增：

```scss
:root {
  /* 既有 token 不動 */

  /* 新增 */
  --radius-md: 12px;
  --radius-sm: 8px;
  --text-secondary: #4a6562;
  --text-muted: #8aa5a2;
  --shadow-elevated: 0 10px 36px rgba(103,205,201,.18);
  --shadow-soft: 0 2px 12px rgba(103,205,201,.06);
  --max-content: 1200px;
  --topbar-h: 64px;
  --section-gap: clamp(48px, 6vw, 80px);
}
```

---

## 5. SCSS 元件規格

### 5.1 _topbar-public.scss
- `.topbar-public`：sticky、玻璃感、height `--topbar-h`、左右 24px、border-bottom `--border`
- `.topbar-public__logo`：建案 logo 圖+文，連結到 `/`
- `.topbar-public__nav`：6 個錨點 link，桌機顯示，< md 隱藏
- `.topbar-public__nav-link`：active 狀態用 `data-active` 屬性，下方有 seafoam 底線
- `.topbar-public__cta`：「登入客變系統」`.btn-primary`
- `.topbar-public__hamburger`：< md 顯示，點擊開啟 drawer
- `.topbar-public__drawer`：< md 用，從右滑入，顯示 6 個 nav + CTA

### 5.2 _footer.scss
- `.footer`：玻璃白底、border-top、padding 48px 24px
- `.footer__columns`：4 欄 grid（建商品牌 / 快速連結 / 客變相關 / 聯絡資訊）
- `.footer__brand`：建商 logo + 簡介
- `.footer__columns h4`：欄標題（uppercase eyebrow）
- `.footer__legal`：版權列，置中、border-top

### 5.3 _hero.scss
- `.hero`：min-height 80vh、左右 padding `clamp(24px, 5vw, 80px)`
- `.hero__inner`：max-width `--max-content`、桌機左右 grid、手機上下 flex
- `.hero__title`：`.display-1`、`clamp(2rem, 5vw, 3.5rem)`、weight 700
- `.hero__subtitle`：`.body-lg`、`--text-secondary`
- `.hero__cta-row`：兩個 button（主：登入 / 次：了解客變）
- `.hero__visual`：玻璃卡片 + placeholder 視覺（CSS 漸層即可）

### 5.4 _principles.scss
- `.principles-grid`：grid 1 / 2 / 3 欄響應
- `.principle-card`：套用 `.card`、padding 24px、hover 升起
- `.principle-card__icon`：32px mat-icon、seafoam 圓形底
- `.principle-card__title`：類別名稱
- `.principle-card__scope`：一句範圍說明
- `.principle-card__rules`：ul、bullet 改 seafoam 圓點
- `.principle-card__examples`：項目代號 chip（如 G-01）

### 5.5 _process-timeline.scss
- `.process-timeline`：豎軸 timeline，左軸線
- `.process-step`：grid（圓點欄 + 內容欄）
- `.process-step__node`：seafoam 圓點（24px），相鄰節點以 dotted line 連接
- `.process-step__phase`：階段標籤（eyebrow）
- `.process-step__label`：階段名稱
- `.process-step__duration`：時長提示 chip
- `.process-step__description`：說明文字
- `.process-step__actions`：買家動作 ul

### 5.6 _faq.scss
- `.faq`：max-width 800、居中
- `.faq__group`：群組容器
- `.faq__group-title`：群組標題（eyebrow 風格）
- `.faq__item`：套 Material `mat-expansion-panel`、玻璃感 panel、移除 Material 預設陰影
- `.faq__question`：問題文字、左 expand-icon
- `.faq__answer`：答案文字、line-height 1.7

### 5.7 _price-table.scss
- `.price-table`：玻璃 card 容器
- 桌機：真 `<table>`、4 欄（類別 / 項目 / 單位 / 價格範圍）、header 玻璃淺色底
- 手機（< md）：CSS `display: block`、每 `<tr>` 變一張卡，欄位用 `::before` 或 `<span class="label">` 顯示欄名
- `.price-table__category-header`：類別分隔列、seafoam 淺底

### 5.8 _equipment-table.scss
- `.equipment-table`：玻璃 card 容器
- `.equipment-row`：grid（縮圖 80x80 / 內容 / 廠牌標籤）
- `.equipment-row__thumb`：圓角 12、placeholder 漸層
- `.equipment-row__category`：類別 eyebrow
- `.equipment-row__name`：品名 + 型號
- `.equipment-row__spec`：規格說明
- `.equipment-row__brand`：廠牌 chip

### 5.9 _vr-entry.scss
- `.vr-entry`：全寬卡、玻璃漸層底（seafoam → pale-seafoam）
- `.vr-entry__title`：「虛擬樣品屋」`.display-1`
- `.vr-entry__lead`：副標
- `.vr-entry__cta`：`.btn-primary` 大尺寸「進入虛擬樣品屋」連結 `/#vr-coming-soon`
- `.vr-entry__badge`：「即將提供」chip（提示）
- 視覺：右側 placeholder 樣品屋示意圖（CSS 漸層 + icon）

### 5.10 _anchor-nav.scss
- `.anchor-nav`：`position: fixed; right: 24px; top: 50%; transform: translateY(-50%)`
- `.anchor-nav__item`：seafoam 透明圓點，hover 放大
- `.anchor-nav__item--active`：填充 seafoam
- `.anchor-nav__tooltip`：hover 顯示區塊名（右側展開）
- 顯示條件：`@media (min-width: 1024px)` 桌機才顯示

### 5.11 _section.scss（改寫既有）
```scss
.section {
  scroll-margin-top: calc(var(--topbar-h) + 16px);  // 錨點對位
  padding: var(--section-gap) clamp(24px, 5vw, 80px);

  &__inner { max-width: var(--max-content); margin: 0 auto; }
  &__head { text-align: center; margin-bottom: 48px; }
  &__eyebrow { /* uppercase 小標 */ }
  &__title { /* h2 大標 */ }
  &__lead { /* 副標說明 */ }
  &__body { /* 主內容區 */ }

  &--alt { /* 交錯背景變化用 */ }
}
```

### 5.12 _button.scss（改寫既有）
```scss
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all .15s;

  &-primary { background: var(--seafoam); color: #fff; }
  &-primary:hover { background: var(--seafoam-dark); box-shadow: var(--shadow-elevated); }

  &-outline { background: transparent; border: 1.5px solid var(--seafoam); color: var(--seafoam-dark); }
  &-outline:hover { background: rgba(103,205,201,.1); }

  &-ghost { background: transparent; color: var(--text-primary); }
  &-ghost:hover { background: rgba(103,205,201,.1); }

  &-lg { height: 52px; padding: 0 32px; font-size: 16px; }
  &-sm { height: 36px; padding: 0 16px; font-size: 13px; }
}
```

### 5.13 _typo.scss（補充）
```scss
.display-1 { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }
.display-2 { font-size: clamp(1.5rem, 3.5vw, 2.5rem); line-height: 1.2; font-weight: 700; }
.eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--seafoam-dark); }
.body-lg { font-size: 18px; line-height: 1.7; color: var(--text-secondary); }
.chip { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: var(--radius-sm); background: rgba(103,205,201,.15); color: var(--seafoam-dark); font-size: 12px; font-weight: 600; }
```

---

## 6. 區塊與內容資料模型

### 6.1 區塊順序

| # | Section ID | 標題 | 元件 |
|---|---|---|---|
| 0 | `#hero` | Hero | `_hero.scss` |
| 1 | `#principles` | 客變原則 | `_principles.scss` |
| 2 | `#process` | 客變流程 | `_process-timeline.scss` |
| 3 | `#faq` | 常見問題 | `_faq.scss` |
| 4 | `#fees` | 費用表 | `_price-table.scss` |
| 5 | `#equipment` | 標準設備表 | `_equipment-table.scss` |
| 6 | `#vr-tour` | 虛擬樣品屋入口 | `_vr-entry.scss` |
| – | – | Footer | `_footer.scss` |

### 6.2 TypeScript 資料模型

放在 `src/app/modules/home/pages/default/default.data.ts`：

```ts
export interface PrincipleCategory {
  code: 'paint' | 'masonry' | 'partition' | 'mep' | 'kitchen' | 'ac' | 'tile';
  icon: string;
  title: string;
  scope: string;
  rules: string[];
  examples?: string[];
}

export interface ProcessStep {
  phase: 'sign' | 'wait' | 'open' | 'apply' | 'review' | 'reconfirm' | 'build';
  label: string;
  durationHint?: string;
  description: string;
  buyerActions: string[];
}

export interface FaqGroup {
  groupId: 'general' | 'design' | 'fees' | 'schedule' | 'designer';
  groupTitle: string;
  items: { q: string; a: string }[];
}

export interface PriceItem {
  category: string;
  code: string;
  name: string;
  unit: string;
  priceRange: string;
  note?: string;
}

export interface EquipmentItem {
  category: string;
  name: string;
  brand: string;
  model?: string;
  spec: string;
}

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

export const PRINCIPLES: PrincipleCategory[] = [ /* 7 筆 */ ];
export const PROCESS_STEPS: ProcessStep[] = [ /* 7 筆 */ ];
export const FAQ_GROUPS: FaqGroup[] = [ /* 5 群 × 3-4 題 ≈ 18 題 */ ];
export const PRICE_ITEMS: PriceItem[] = [ /* 7 類別 × 平均 3 項 ≈ 21 列 */ ];
export const EQUIPMENT_ITEMS: EquipmentItem[] = [ /* 5 類別 × 3 項 ≈ 15 列 */ ];
```

### 6.3 示意內容份量

| 區塊 | 筆數 | 內容對應 |
|---|---|---|
| Hero | 1 標題 + 1 副標 + 2 CTA | 「澐光客變線上服務」、「從簽約到交屋，您的家由您決定。」 |
| Principles | 7 筆 | 油漆 / 泥作 / 輕隔間 / 水電 / 廚具 / 空調 / 磁磚（對應 §13.2） |
| Process | 7 步驟 | 簽約 → 等待 → 開放 → 申請 → 審核 → 複確認 → 施工 |
| FAQ | 5 群 × 3-4 題 ≈ 18 題 | 對應 §1-5 補強規格中的常見疑問（含設計師代理、逾期、複確認） |
| Fees | ≈ 21 列 | 對應 §5.2 範例（G-01 NT$12,000、G-03 NT$8,500、E-02 NT$3,000 等） |
| Equipment | ≈ 15 列 | TOTO / Panasonic / 林內 / 櫻花 等廠牌 placeholder |
| VR | 1 卡 | 「即將提供」chip + CTA |

---

## 7. 互動行為

### 7.1 錨點導覽
- Topbar nav link 點擊 → 平滑滾動到對應 section
- 利用既有 `anchorScrolling: 'enabled'`、`scrollPositionRestoration: 'enabled'`
- `scroll-margin-top` 確保不被 sticky topbar 遮擋

### 7.2 Active 狀態
- 在 `DefaultContainerComponent` 用 IntersectionObserver 監聽每個 section
- 維護一個 `currentSection` signal（或 `BehaviorSubject`，看 Angular 版本）
- Topbar nav 與右側 anchor-nav 都訂閱、加 active class

### 7.3 漢堡選單（< md）
- 點擊漢堡 icon → 顯示全屏 overlay 或從右滑入的 drawer
- 列出 6 個 nav + 登入 CTA
- 點任一項自動關閉

### 7.4 FAQ 展開
- 用 Material `mat-expansion-panel`
- 預設全部收合
- 移除 Material 預設陰影，套玻璃感樣式

### 7.5 浮動錨點 dot
- 桌機 (≥ lg) 右側 fixed
- 點 dot 跳轉同 topbar nav
- Active dot 填充 seafoam

---

## 8. 響應式策略

| 區塊 | 手機 (< md) | 桌機 (≥ lg) |
|---|---|---|
| Topbar | logo + 漢堡 → drawer | logo + 6 nav links + CTA |
| Hero | 上下排，標題 32px | 左右排，標題 56px |
| Principles | 1 欄 | 3 欄 |
| Process | 豎排，圓點靠左 | 豎排，圓點置中、左右交錯 |
| FAQ | 全寬，padding 大 | 800px 居中 |
| Fees | 卡片化 | 真表格 |
| Equipment | 縮圖 + 規格垂直堆疊 | 水平排列 |
| VR | 全寬卡 | 全寬卡 + 浮層裝飾 |
| Anchor nav | 隱藏 | 右側顯示 |
| Footer | 4 欄 → 2 欄或 1 欄 | 4 欄 |

字級 / 間距用 `clamp()` 做流體 scale。

---

## 9. 無障礙

- Topbar nav active 設 `aria-current="true"`
- FAQ 用 Material accordion（內建 a11y）
- Fees table 用真 `<table>`（手機僅 CSS 改外觀）
- 圖片有 `alt`
- 焦點環沿用 Material + seafoam
- 對比度：`#1a3533` on white = AAA；seafoam 主色 CTA 需確認 ≥ AA

---

## 10. 驗收計畫

S1+S2 完成需驗收：

1. **視覺一致性**
   - 所有區塊用 seafoam glass card 風格
   - Token 集中於 `_mat-theme.scss`，無散落硬編碼

2. **響應式**
   - Chrome DevTools 切換 375 / 768 / 1024 / 1440，每寬度 layout 正常
   - 漢堡選單 < md 出現、≥ md 隱藏

3. **互動**
   - 點 topbar 連結 → 平滑滾到對應 section、對位正確（不被 sticky topbar 蓋住）
   - 滾動時 topbar nav active 狀態跟隨
   - FAQ 點問題能展開/收合
   - 浮動錨點 dot 點擊跳轉

4. **內容完整性**
   - 7 區塊 + Footer 都有內容，無 lorem
   - 各區塊示意筆數達 §6.3 規定

5. **效能**
   - 公開頁無 API call、首屏 LCP < 2s（本地）
   - 圖片用 placeholder

6. **既有 SCSS 沿用**
   - `_mat-theme.scss` 既有 token 未被覆蓋
   - 既有 dashboard SCSS 檔案保留不刪
   - styles.scss 註解區處理乾淨

---

## 11. 開發完成後的後續

S1+S2 完成後，下一個自然的 slice：
- **S3 虛擬樣品屋（M2）**：實作 360° Viewer 與素材管理（公開區 VR 入口連進）
- **S4 買家端核心**：OTP 登入 + 首次核對 + Room Navigator + 分層表單
- 兩個都需要新 layout shell（buyer logged-in shell），屆時可拆掉公開區 shell 的 `登入 CTA` 變成 user menu

本 spec 不包含 S3-S5 的設計。

---

## 附錄 A：與 v1.2 規格對應

| 本 spec 內容 | v1.2 規格章節 |
|---|---|
| 公開資訊區 7 區塊 | §九 公開資訊區 |
| 客變原則 7 類別 | §13.2 工程分類對照表 |
| 客變流程 7 步驟 | §4.3 施工節點 + §5 施工前複確認 |
| FAQ 18 題 | §九 + §1-5 補強重點 |
| 費用表參考值 | §5.2 確認單範例 |
| VR 入口 | §十 虛擬樣品屋 Phase 1 策略 |
| Phase 範圍 | §八 更新後的分期功能規劃（Phase 1 公開區段） |
