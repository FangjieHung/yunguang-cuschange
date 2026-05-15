# Phase 1 / S1+S2 公開資訊區 — 實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將 `apps/web` 的公開首頁 `/` 從 Intellecta Dashboard demo 改造為「富華澐光客變」公開資訊長頁（Hero + 7 區塊 + Footer），同時建立沿用 Seafoam Glassmorphism 設計語言的視覺地基，供後續 S3-S5 共用。

**Architecture:** 改造既有 `_layout/DefaultContainerComponent`（保留 `BBDBaseComponent` / SEO / breadcrumb 基礎結構）為公開區 shell；改寫 `home/DefaultComponent` 為單頁長滾動公開頁，內容資料置於 `default.data.ts`（typed TS 模型）。新增 10 個 SCSS partials + 補強 3 個既有檔；既有 dashboard 元件 SCSS 不刪，於 `styles.scss` 取消引用。

**Tech Stack:** Angular 16.2、Angular Material 16.2、Tailwind CSS、SCSS、Nx monorepo（`apps/web`）。

**Spec：** `docs/superpowers/specs/2026-05-15-public-info-area-design.md`

---

## Token 採用既有值（重要）

Spec §4 列了補強 token，但既有 `_mat-theme.scss` 已有部分相近 token（值不同）。本計畫採「既有值優先」：

| Token | Spec 提議 | 既有值 | 採用 |
|---|---|---|---|
| `--radius-sm` | 8px | **10px** | 既有 10px |
| `--radius-md` | 12px | **16px** | 既有 16px |
| `--radius-lg` | 20px | 20px | 既有 20px |
| `--text-secondary` | #4a6562 | **#5a8480** | 既有 #5a8480 |
| `--text-muted` | #8aa5a2 | **#9bbfbb** | 既有 #9bbfbb |
| `--shadow-elevated` | new | – | **新增** |
| `--shadow-soft` | new | – | **新增** |
| `--max-content` | new | – | **新增** |
| `--topbar-h` | new | – | **新增** |
| `--section-gap` | new | – | **新增** |

---

## 路徑前綴

所有相對路徑以 `apps/web/` 為前綴，文中省略前綴。倉根為 `yunguang-cus-change-angular16-apps/`。

---

## 檔案異動總覽

**新增檔案：**
```
apps/web/src/assets/scss/component/
  _topbar-public.scss
  _hero.scss
  _principles.scss
  _process-timeline.scss
  _faq.scss
  _price-table.scss
  _equipment-table.scss
  _vr-entry.scss
  _anchor-nav.scss

apps/web/src/app/modules/home/pages/default/
  default.data.ts
```

**修改檔案：**
```
apps/web/src/assets/scss/
  _mat-theme.scss          ← 補 5 個新 token
  _typo.scss               ← 補 utility class
  _section.scss            ← 改寫為公開區 section 容器
  _button.scss             ← 改寫為 btn 變體系統

apps/web/src/styles.scss   ← 取消註解 section/button、加入 9 個新 partial 引用、註解 dashboard 引用

apps/web/src/app/modules/_layout/pages/default-container/
  default-container.component.ts    ← 替換 navList、加入 currentSection state
  default-container.component.html  ← 1 行 → 公開區 shell
  default-container.component.scss  ← 補 shell 樣式

apps/web/src/app/modules/_layout/pages/footer/
  footer.component.html             ← 改為公開區 footer
  footer.component.scss             ← 套用新 _footer 樣式（footer .scss 沿用 component scope）

apps/web/src/app/modules/home/pages/default/
  default.component.ts              ← 大幅簡化（移除 GSAP/Swiper/API、引入 data）
  default.component.html            ← Intellecta dashboard → 公開區長頁
  default.component.scss            ← 改為公開頁細部樣式

apps/web/src/app/modules/home/home.module.ts   ← 移除 LottieModule + GoogleMapsModule
```

**沿用，不改動：**
```
apps/web/src/assets/scss/
  _dialog.scss, _form.scss, _layout.scss, _glass-bg.scss, _quill-editor.scss, _swiper.scss
  component/_common.scss, _card.scss
  （既有 dashboard 元件 SCSS：_topbar / _sidebar / _main / _chat-card / _activity-card / _timeline /
   _todo-card / _summary-card / _header-row / _middle-row / _bottom-row — 保留檔案不刪，僅從 styles.scss 取消引用）

apps/web/src/app/modules/_layout/layout.module.ts  （Material 模組已透過 SharedModule 取得）
```

---

## Phase A：Token & 基底 SCSS

### Task A1：補 `_mat-theme.scss` token

**Files:**
- Modify: `apps/web/src/assets/scss/_mat-theme.scss`（在最後 `:root` 區塊末尾追加）

- [ ] **Step 1：開啟檔案，找到最末的 `:root` 區塊（line 197-220）**

該區塊以 `--shadow-card: 0 4px 24px rgba(103,205,201,.10);` 結尾、第 220 行為 `}`。

- [ ] **Step 2：在 `--shadow-card` 之後、`}` 之前插入新 token**

修改後該段內容尾段如下：
```scss
    --shadow-card:   0 4px 24px rgba(103,205,201,.10);

    /* ── S1+S2 公開區補充 token ── */
    --shadow-elevated: 0 10px 36px rgba(103,205,201,.18);
    --shadow-soft:     0 2px 12px rgba(103,205,201,.06);
    --max-content:     1200px;
    --topbar-h:        64px;
    --section-gap:     clamp(48px, 6vw, 80px);
  }
```

- [ ] **Step 3：commit**
```bash
cd apps/web && git add src/assets/scss/_mat-theme.scss
git commit -m "feat(scss): add public area design tokens (shadow/maxw/topbar/section-gap)"
```

---

### Task A2：改寫 `_typo.scss` 補 utility class

**Files:**
- Modify: `apps/web/src/assets/scss/_typo.scss`（追加於檔尾）

- [ ] **Step 1：開啟檔案，於檔尾追加以下內容**

```scss

/* ============================================
   公開區 typography utilities
   ============================================ */
.display-1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.display-2 {
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--seafoam-dark);
}

.body-lg {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  background: rgba(103, 205, 201, 0.15);
  color: var(--seafoam-dark);
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
}

.chip--solid {
  background: var(--seafoam);
  color: #fff;
}

.chip--outline {
  background: transparent;
  border: 1px solid var(--seafoam);
  color: var(--seafoam-dark);
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/_typo.scss
git commit -m "feat(scss): add display/eyebrow/body-lg/chip typography utilities"
```

---

### Task A3：改寫 `_section.scss`

**Files:**
- Modify: `apps/web/src/assets/scss/_section.scss`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```scss
/* ============================================
   公開區 Section 通用容器
   ============================================ */

.section {
  scroll-margin-top: calc(var(--topbar-h) + 16px); // 錨點對位

  padding-top: var(--section-gap);
  padding-bottom: var(--section-gap);
  padding-left: clamp(20px, 5vw, 80px);
  padding-right: clamp(20px, 5vw, 80px);

  &__inner {
    max-width: var(--max-content);
    margin: 0 auto;
  }

  &__head {
    text-align: center;
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  &__eyebrow {
    @extend .eyebrow;
  }

  &__title {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  &__lead {
    font-size: clamp(15px, 1.5vw, 17px);
    line-height: 1.7;
    color: var(--text-secondary);
    max-width: 640px;
    margin: 0;
  }

  &__body {
    width: 100%;
  }

  &--alt {
    // 交錯背景（極淺玻璃感）— 與 body 漸層底搭配
    background: rgba(255, 255, 255, 0.25);
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/_section.scss
git commit -m "feat(scss): rewrite _section as public area generic container"
```

---

### Task A4：改寫 `_button.scss`

**Files:**
- Modify: `apps/web/src/assets/scss/_button.scss`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```scss
/* ============================================
   按鈕系統 .btn
   ============================================ */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  border: none;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease, transform 0.05s ease;

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid var(--seafoam);
    outline-offset: 2px;
  }

  /* Variants */
  &-primary {
    background: var(--seafoam);
    color: #fff;
    box-shadow: 0 2px 8px rgba(103, 205, 201, 0.3);

    &:hover {
      background: var(--seafoam-dark);
      box-shadow: var(--shadow-elevated);
    }
  }

  &-outline {
    background: transparent;
    border: 1.5px solid var(--seafoam);
    color: var(--seafoam-dark);

    &:hover {
      background: rgba(103, 205, 201, 0.1);
    }
  }

  &-ghost {
    background: transparent;
    color: var(--text-primary);

    &:hover {
      background: rgba(103, 205, 201, 0.1);
    }
  }

  /* Sizes */
  &-sm {
    height: 36px;
    padding: 0 16px;
    font-size: 13px;
  }

  &-lg {
    height: 52px;
    padding: 0 32px;
    font-size: 16px;
  }

  /* Disabled */
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/_button.scss
git commit -m "feat(scss): rewrite _button with primary/outline/ghost variants and sizes"
```

---

## Phase B：新增公開區 SCSS partials

### Task B1：新增 `_topbar-public.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_topbar-public.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   公開區頂欄（sticky glass topbar）
   ============================================ */

.topbar-public {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--topbar-h);
  padding: 0 clamp(16px, 4vw, 32px);
  display: flex;
  align-items: center;
  gap: 16px;

  background: var(--glass-nav);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border-bottom: 1px solid var(--border);

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 16px;
    color: var(--text-primary);
    text-decoration: none;
    flex-shrink: 0;

    &-mark {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--seafoam), var(--seafoam-dark));
      box-shadow: 0 2px 8px rgba(103, 205, 201, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }

    &-text {
      letter-spacing: 0.02em;
    }
  }

  &__nav {
    display: none;
    flex: 1;
    justify-content: center;
    gap: 4px;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  &__nav-link {
    position: relative;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: color 0.15s, background-color 0.15s;
    cursor: pointer;

    &:hover {
      color: var(--text-primary);
      background: rgba(103, 205, 201, 0.08);
    }

    &[data-active='true'] {
      color: var(--seafoam-dark);

      &::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 14px;
        right: 14px;
        height: 2px;
        background: var(--seafoam);
        border-radius: 2px;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
  }

  &__cta {
    @media (max-width: 480px) {
      display: none; // 超小手機收進漢堡選單
    }
  }

  &__hamburger {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    cursor: pointer;

    &:hover {
      background: rgba(103, 205, 201, 0.1);
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
}

/* ── Drawer（手機選單，使用 Material mat-sidenav） ── */
.topbar-drawer {
  width: min(320px, 85vw);
  padding: 24px 20px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: var(--blur);

  &__close {
    align-self: flex-end;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--text-primary);
    border-radius: var(--radius-sm);
    margin-bottom: 16px;

    &:hover { background: rgba(103, 205, 201, 0.1); }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 24px;
  }

  &__nav-link {
    padding: 14px 16px;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    text-decoration: none;
    border-radius: var(--radius-md);

    &:hover { background: rgba(103, 205, 201, 0.1); }

    &[data-active='true'] {
      background: var(--seafoam-mist);
      color: var(--seafoam-dark);
    }
  }

  &__cta {
    width: 100%;
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_topbar-public.scss
git commit -m "feat(scss): add _topbar-public glass topbar with mobile drawer"
```

---

### Task B2：新增 `_hero.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_hero.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   首屏 Hero
   ============================================ */

.hero {
  min-height: calc(100vh - var(--topbar-h));
  padding: clamp(48px, 8vw, 96px) clamp(24px, 5vw, 80px);
  display: flex;
  align-items: center;

  &__inner {
    width: 100%;
    max-width: var(--max-content);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 1.1fr 1fr;
      gap: 80px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__eyebrow {
    @extend .eyebrow;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3.25rem);
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0;
  }

  &__subtitle {
    font-size: clamp(15px, 1.6vw, 18px);
    line-height: 1.7;
    color: var(--text-secondary);
    max-width: 560px;
    margin: 0;
  }

  &__cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
  }

  &__visual {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    background: var(--glass-card);
    backdrop-filter: var(--blur);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: var(--shadow-elevated);
    overflow: hidden;

    // Placeholder 視覺：seafoam 漸層 + 裝飾圓
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 30% 20%, var(--pale-seafoam) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, var(--seafoam-mist) 0%, transparent 60%),
                  linear-gradient(135deg, rgba(255,255,255,.4), rgba(218,247,242,.3));
    }

    &-label {
      position: absolute;
      bottom: 16px;
      left: 16px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: var(--radius-sm);
      font-size: 12px;
      font-weight: 600;
      color: var(--seafoam-dark);
      backdrop-filter: blur(8px);
    }
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_hero.scss
git commit -m "feat(scss): add _hero with split layout + glass visual placeholder"
```

---

### Task B3：新增 `_principles.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_principles.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   客變原則 — 類別卡片網格
   ============================================ */

.principles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.principle-card {
  position: relative;
  padding: 28px 24px;
  background: var(--glass-card);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-elevated);
  }

  &__icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--seafoam-mist), var(--pale-seafoam));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--seafoam-dark);

    mat-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  &__scope {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  &__rules {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__rule {
    position: relative;
    padding-left: 18px;
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-primary);

    &::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--seafoam);
    }
  }

  &__examples {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_principles.scss
git commit -m "feat(scss): add _principles card grid"
```

---

### Task B4：新增 `_process-timeline.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_process-timeline.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   客變流程 — 豎排時間軸
   ============================================ */

.process-timeline {
  position: relative;
  max-width: 920px;
  margin: 0 auto;
  padding: 0 16px;

  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: linear-gradient(
      180deg,
      var(--seafoam) 0%,
      var(--seafoam-mist) 100%
    );
    border-radius: 2px;

    @media (min-width: 1024px) {
      left: 50%;
      transform: translateX(-1px);
    }
  }
}

.process-step {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 16px;
  padding: 16px 0;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 40px 1fr;
    gap: 24px;

    &:nth-child(odd) {
      .process-step__content {
        grid-column: 1;
        text-align: right;
        align-items: flex-end;
      }
      .process-step__node {
        grid-column: 2;
      }
      .process-step__spacer { display: none; }
    }

    &:nth-child(even) {
      .process-step__content {
        grid-column: 3;
      }
      .process-step__node {
        grid-column: 2;
      }
    }
  }

  &__node {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--seafoam), var(--seafoam-dark));
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(103, 205, 201, 0.4);
    z-index: 1;
    position: relative;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px 0;
  }

  &__phase {
    @extend .eyebrow;
  }

  &__label {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  &__duration {
    @extend .chip;
    align-self: flex-start;

    @media (min-width: 1024px) {
      .process-step:nth-child(odd) & {
        align-self: flex-end;
      }
    }
  }

  &__description {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  &__actions {
    list-style: none;
    padding: 0;
    margin: 8px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__action {
    position: relative;
    padding-left: 18px;
    font-size: 13px;
    color: var(--text-primary);
    line-height: 1.5;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: var(--seafoam-dark);
      font-weight: 700;
    }

    @media (min-width: 1024px) {
      .process-step:nth-child(odd) & {
        padding-left: 0;
        padding-right: 18px;

        &::before {
          left: auto;
          right: 0;
        }
      }
    }
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_process-timeline.scss
git commit -m "feat(scss): add _process-timeline vertical zigzag timeline"
```

---

### Task B5：新增 `_faq.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_faq.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   FAQ — 手風琴
   ============================================ */

.faq {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.faq__group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq__group-title {
  @extend .eyebrow;
  margin-bottom: 4px;
}

/* 套用至 Angular Material mat-expansion-panel */
.faq__panel.mat-expansion-panel {
  background: var(--glass-card);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-md) !important;
  box-shadow: var(--shadow-soft) !important;
  margin-bottom: 12px;

  &.mat-expanded {
    box-shadow: var(--shadow-card) !important;
  }

  .mat-expansion-panel-header {
    height: auto;
    min-height: 64px;
    padding: 16px 20px;

    &.mat-expanded {
      height: auto;
    }
  }

  .mat-expansion-panel-header-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }

  .mat-expansion-indicator::after {
    color: var(--seafoam-dark);
  }

  .mat-expansion-panel-body {
    padding: 0 20px 20px 20px;
    font-size: 14px;
    line-height: 1.7;
    color: var(--text-secondary);
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_faq.scss
git commit -m "feat(scss): add _faq glass accordion styling for mat-expansion-panel"
```

---

### Task B6：新增 `_price-table.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_price-table.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   費用表 — 桌機表格 / 手機卡片化
   ============================================ */

.price-table {
  max-width: var(--max-content);
  margin: 0 auto;
  background: var(--glass-card);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  /* 桌機表格樣式 */
  @media (min-width: 768px) {
    thead {
      background: rgba(218, 247, 242, 0.6);
    }

    th {
      padding: 16px 20px;
      text-align: left;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--seafoam-dark);
      border-bottom: 1px solid var(--border);
    }

    td {
      padding: 14px 20px;
      font-size: 14px;
      color: var(--text-primary);
      border-bottom: 1px solid rgba(103, 205, 201, 0.08);
      vertical-align: top;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }

    tbody tr:hover {
      background: rgba(103, 205, 201, 0.04);
    }
  }

  &__code {
    font-family: 'Inter', monospace;
    font-weight: 700;
    color: var(--seafoam-dark);
  }

  &__price {
    font-weight: 700;
    color: var(--text-primary);
  }

  &__note {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  &__category-header td {
    background: rgba(218, 247, 242, 0.4);
    font-weight: 700;
    color: var(--seafoam-dark);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* 手機卡片化 */
  @media (max-width: 767px) {
    thead { display: none; }
    table, tbody, tr, td { display: block; width: 100%; }

    tr {
      padding: 16px;
      border-bottom: 1px solid var(--border);

      &:last-child { border-bottom: none; }
    }

    td {
      padding: 6px 0;
      font-size: 14px;
      color: var(--text-primary);
      display: flex;
      justify-content: space-between;
      gap: 12px;

      &::before {
        content: attr(data-label);
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--text-muted);
        flex-shrink: 0;
      }
    }

    &__category-header {
      background: rgba(218, 247, 242, 0.5);

      td {
        display: block;
        text-align: center;
        font-weight: 700;
        color: var(--seafoam-dark);
        font-size: 13px;
        text-transform: uppercase;

        &::before { content: none; }
      }
    }
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_price-table.scss
git commit -m "feat(scss): add _price-table with desktop table + mobile card layout"
```

---

### Task B7：新增 `_equipment-table.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_equipment-table.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   設備表 — 縮圖 + 規格 row
   ============================================ */

.equipment-table {
  max-width: var(--max-content);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.equipment-group {
  background: var(--glass-card);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;

  &__title {
    padding: 16px 20px;
    background: rgba(218, 247, 242, 0.5);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--seafoam-dark);
    margin: 0;
    border-bottom: 1px solid var(--border);
  }
}

.equipment-row {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(103, 205, 201, 0.08);

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 100px 1fr auto;
    gap: 24px;
  }

  &__thumb {
    width: 80px;
    height: 80px;
    border-radius: var(--radius-md);
    background: linear-gradient(
      135deg,
      var(--pale-seafoam),
      var(--seafoam-mist)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--seafoam-dark);

    @media (min-width: 768px) {
      width: 100px;
      height: 100px;
    }

    mat-icon {
      font-size: 36px;
      width: 36px;
      height: 36px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  &__name {
    font-size: 15px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  &__model {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    font-family: 'Inter', monospace;
  }

  &__spec {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 4px 0 0 0;
  }

  &__brand {
    @extend .chip;
    align-self: flex-start;

    @media (min-width: 768px) {
      align-self: center;
    }
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_equipment-table.scss
git commit -m "feat(scss): add _equipment-table with thumb/info/brand row"
```

---

### Task B8：新增 `_vr-entry.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_vr-entry.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   虛擬樣品屋入口卡
   ============================================ */

.vr-entry {
  position: relative;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: clamp(40px, 6vw, 72px) clamp(24px, 5vw, 56px);
  background: linear-gradient(
    135deg,
    var(--pale-seafoam) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    var(--seafoam-mist) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-elevated);
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__badge {
    @extend .chip;
    @extend .chip--solid;
    align-self: flex-start;
  }

  &__title {
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    line-height: 1.2;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  &__lead {
    font-size: clamp(14px, 1.5vw, 16px);
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
    max-width: 520px;
  }

  &__features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__feature {
    position: relative;
    padding-left: 22px;
    font-size: 13px;
    color: var(--text-primary);

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: var(--seafoam-dark);
      font-weight: 700;
    }
  }

  &__cta-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  &__visual {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.8);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    mat-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      color: var(--seafoam-dark);
      opacity: 0.6;
    }

    &-label {
      position: absolute;
      bottom: 12px;
      left: 12px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.85);
      border-radius: var(--radius-sm);
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
    }
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_vr-entry.scss
git commit -m "feat(scss): add _vr-entry hero-style entry card"
```

---

### Task B9：新增 `_anchor-nav.scss`

**Files:**
- Create: `apps/web/src/assets/scss/component/_anchor-nav.scss`

- [ ] **Step 1：建立新檔，填入以下內容**

```scss
/* ============================================
   桌機側邊浮動錨點導覽
   ============================================ */

.anchor-nav {
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: fixed;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
    padding: 12px 8px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: var(--blur);
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    box-shadow: var(--shadow-card);
  }

  &__item {
    position: relative;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid var(--seafoam);
    background: transparent;
    cursor: pointer;
    padding: 0;
    transition: transform 0.15s, background-color 0.15s;

    &:hover {
      transform: scale(1.4);

      .anchor-nav__tooltip {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &--active {
      background: var(--seafoam);
      box-shadow: 0 0 0 4px rgba(103, 205, 201, 0.2);
    }
  }

  &__tooltip {
    position: absolute;
    right: calc(100% + 12px);
    top: 50%;
    transform: translate(8px, -50%);
    padding: 4px 10px;
    background: var(--text-primary);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s, transform 0.15s;

    &::after {
      content: '';
      position: absolute;
      right: -4px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 4px solid var(--text-primary);
    }
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/assets/scss/component/_anchor-nav.scss
git commit -m "feat(scss): add _anchor-nav floating dot navigation (desktop)"
```

---

## Phase C：styles.scss 重組

### Task C1：更新 `styles.scss` 取消舊引用、加新引用

**Files:**
- Modify: `apps/web/src/styles.scss`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```scss
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── 基底 ── */
@import "assets/scss/mat-theme";
@import "assets/scss/dialog";
@import "assets/scss/typo";

/* ── S1+S2 公開區基底 ── */
@import "assets/scss/section";
@import "assets/scss/button";

/* ── 共用元件 ── */
@import "assets/scss/component/common";
@import "assets/scss/component/card";

/* ── S1+S2 公開區元件 ── */
@import "assets/scss/component/topbar-public";
@import "assets/scss/component/hero";
@import "assets/scss/component/principles";
@import "assets/scss/component/process-timeline";
@import "assets/scss/component/faq";
@import "assets/scss/component/price-table";
@import "assets/scss/component/equipment-table";
@import "assets/scss/component/vr-entry";
@import "assets/scss/component/anchor-nav";

/*
  保留供 S3+（buyer/admin shells）使用，目前不引用：

  Dashboard layout pattern：
  @import "assets/scss/component/topbar";
  @import "assets/scss/component/sidebar";
  @import "assets/scss/component/main";
  @import "assets/scss/component/header-row";
  @import "assets/scss/component/middle-row";
  @import "assets/scss/component/bottom-row";

  Dashboard 元件（chat/activity/timeline/todo/summary）：
  @import "assets/scss/component/chat-card";
  @import "assets/scss/component/activity-card";
  @import "assets/scss/component/timeline";
  @import "assets/scss/component/todo-card";
  @import "assets/scss/component/summary-card";

  其他：
  @import "assets/scss/form";
  @import "assets/scss/layout";
  @import "assets/scss/glass-bg.scss";
  @import "assets/scss/swiper";
  @import "assets/scss/quill-editor";
*/

@layer base {
  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  html {
    @apply text-base text-pretty;
    margin: 0;
    font-family: "Noto Sans TC", "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  body {
    font-family: "Noto Sans TC", "Inter", sans-serif;
    color: var(--text-primary);
    /* multi-stop gradient matching the seafoam palette */
    background:
      radial-gradient(ellipse at 0% 0%, #b2ece8 0%, transparent 55%),
      radial-gradient(ellipse at 100% 0%, #daf7f2 0%, transparent 50%),
      radial-gradient(ellipse at 100% 100%, #d0f0e0 0%, transparent 55%),
      radial-gradient(ellipse at 0% 100%, #e0ffff 0%, transparent 50%),
      linear-gradient(135deg, #cdf5ef 0%, #e8fdf8 50%, #daf7f2 100%);
    background-attachment: fixed;
  }
}

web-default-container {
  @apply w-full overflow-x-hidden;
  display: block;
  min-height: 100vh;
}

/* Scrollbar */
::-webkit-scrollbar {
  @apply h-1 w-1;
}

::-webkit-scrollbar-track {
  background-color: #00000000;

  &:hover {
    background-color: #0000001b;
  }
}

::-webkit-scrollbar-thumb {
  background-color: #00000010;
  border-radius: 100px;
}

.overflow-auto {
  scrollbar-gutter: stable;
}
```

- [ ] **Step 2：commit**
```bash
git add src/styles.scss
git commit -m "feat(scss): reorganize styles.scss for public area; comment out dashboard partials"
```

---

## Phase D：公開區 Data（S2 內容資料）

### Task D1：建立 `default.data.ts` 框架 + Nav + Principles

**Files:**
- Create: `apps/web/src/app/modules/home/pages/default/default.data.ts`

- [ ] **Step 1：建立檔案，填入以下內容**

```ts
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
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.data.ts
git commit -m "feat(data): add NAV_SECTIONS + 7 PRINCIPLES categories"
```

---

### Task D2：擴充 data — `PROCESS_STEPS`

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.data.ts`

- [ ] **Step 1：在檔尾追加以下內容**

```ts

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
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.data.ts
git commit -m "feat(data): add 7 PROCESS_STEPS for customization flow"
```

---

### Task D3：擴充 data — `FAQ_GROUPS`

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.data.ts`

- [ ] **Step 1：在檔尾追加以下內容**

```ts

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
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.data.ts
git commit -m "feat(data): add 5 FAQ_GROUPS with 18 items"
```

---

### Task D4：擴充 data — `PRICE_ITEMS`

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.data.ts`

- [ ] **Step 1：在檔尾追加以下內容**

```ts

// ─── 費用表 ─────────────────────────────────────────────
export interface PriceItem {
  category: string;
  code: string;
  name: string;
  unit: string;
  priceRange: string;
  note?: string;
}

export const PRICE_ITEMS: PriceItem[] = [
  // 輕隔間
  { category: '輕隔間', code: 'G-01', name: '客廳輕隔間牆拆除', unit: '式', priceRange: 'NT$ 12,000 起（退料不退工）', note: '依坪數差異' },
  { category: '輕隔間', code: 'G-03', name: '門位置移動', unit: '式', priceRange: 'NT$ 8,500', note: '同一空間內' },
  { category: '輕隔間', code: 'G-05', name: '廚房隔間變更', unit: '式', priceRange: 'NT$ 18,000 起', note: '15F 以下適用' },

  // 水電
  { category: '水電', code: 'E-02', name: '新增插座點位', unit: '點', priceRange: 'NT$ 1,500 / 點' },
  { category: '水電', code: 'E-03', name: '插座位置移動', unit: '點', priceRange: 'NT$ 1,200 / 點' },
  { category: '水電', code: 'E-05', name: '新增專用電路迴路', unit: '迴', priceRange: 'NT$ 6,500 起', note: '須配電箱備用迴路' },
  { category: '水電', code: 'W-02', name: '新增網路插座', unit: '點', priceRange: 'NT$ 1,200 / 點' },
  { category: '水電', code: 'P-03', name: '排水孔位移（30cm 內）', unit: '處', priceRange: 'NT$ 3,800' },
  { category: '水電', code: 'P-04', name: '排水孔位移（超過 30cm）', unit: '處', priceRange: 'NT$ 25,000 起', note: '須打樓板' },

  // 廚具
  { category: '廚具', code: 'K-01', name: '廚具升級至高階款', unit: '式', priceRange: 'NT$ 35,000 起', note: '依品牌與長度' },
  { category: '廚具', code: 'K-02', name: '檯面升級石英石', unit: 'm²', priceRange: 'NT$ 8,000 / m²' },
  { category: '廚具', code: 'K-03', name: '抽油煙機升級', unit: '台', priceRange: 'NT$ 6,500 起' },

  // 空調
  { category: '空調', code: 'AC-01', name: '冷氣管路位移', unit: '處', priceRange: 'NT$ 2,800 / 處' },
  { category: '空調', code: 'AC-02', name: '吊隱式安裝預埋', unit: '台', priceRange: 'NT$ 4,500 起' },

  // 磁磚
  { category: '磁磚', code: 'T-01', name: '客廳地坪升級木地板', unit: 'm²', priceRange: 'NT$ 3,500 / m²', note: '退原磚差額另計' },
  { category: '磁磚', code: 'T-02', name: '衛浴壁磚換色', unit: '間', priceRange: 'NT$ 5,000 / 間' },

  // 泥作
  { category: '泥作', code: 'M-01', name: '淋浴區防水拉滿（至頂）', unit: '間', priceRange: 'NT$ 7,500 / 間' },
  { category: '泥作', code: 'M-02', name: '浴缸改淋浴', unit: '間', priceRange: 'NT$ 12,000 起', note: '須重做排水坡度' },

  // 油漆
  { category: '油漆', code: 'PA-01', name: '主牆面換色（建商指定色系）', unit: '面', priceRange: 'NT$ 1,800 / 面' },
  { category: '油漆', code: 'PA-02', name: '黑板漆 / 磁性漆', unit: 'm²', priceRange: 'NT$ 2,200 / m²' },

  // 預埋設備
  { category: '預埋設備', code: 'PR-01', name: '衛浴電熱毛巾架預埋', unit: '組', priceRange: 'NT$ 2,500' },
  { category: '預埋設備', code: 'PR-02', name: '除霧鏡預埋插座', unit: '組', priceRange: 'NT$ 1,500' },
];
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.data.ts
git commit -m "feat(data): add 23 PRICE_ITEMS across 8 categories"
```

---

### Task D5：擴充 data — `EQUIPMENT_ITEMS`

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.data.ts`

- [ ] **Step 1：在檔尾追加以下內容**

```ts

// ─── 標準設備表 ──────────────────────────────────────────
export interface EquipmentItem {
  category: string;
  icon: string;
  name: string;
  brand: string;
  model?: string;
  spec: string;
}

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  // 廚具
  {
    category: '廚具',
    icon: 'kitchen',
    name: '廚具系統',
    brand: '櫻花',
    model: 'KE-S330L',
    spec: '系統櫃廚具 L 型 2.4m，含人造石檯面、緩衝門板五金',
  },
  {
    category: '廚具',
    icon: 'air',
    name: '抽油煙機',
    brand: '櫻花',
    model: 'R-3500',
    spec: '近吸式排油煙機，風量 1100 CMH，三段火焰偵測',
  },
  {
    category: '廚具',
    icon: 'soup_kitchen',
    name: '電陶爐',
    brand: '櫻花',
    model: 'G-2901S',
    spec: '雙口電陶爐，輸出功率 3.6kW，9 段火力',
  },

  // 衛浴
  {
    category: '衛浴',
    icon: 'shower',
    name: '馬桶',
    brand: 'TOTO',
    model: 'CW988GR',
    spec: '單體式 ECO 馬桶，省水 4.8L / 3.0L 雙段沖水',
  },
  {
    category: '衛浴',
    icon: 'bathtub',
    name: '面盆組',
    brand: 'TOTO',
    model: 'L546GU',
    spec: '檯面式面盆 600mm，含 TLS01304 龍頭、排水組',
  },
  {
    category: '衛浴',
    icon: 'shower',
    name: '淋浴龍頭',
    brand: 'TOTO',
    model: 'TBS04302',
    spec: '冷熱混合恆溫龍頭，含手持蓮蓬頭與滑桿組',
  },

  // 門窗
  {
    category: '門窗',
    icon: 'door_front',
    name: '玄關大門',
    brand: '永記',
    model: 'EG-T2',
    spec: '硫化銅鑄鋼門，含三段式鎖具與電子鎖預留',
  },
  {
    category: '門窗',
    icon: 'door_sliding',
    name: '室內房門',
    brand: '永堉',
    spec: '實木貼皮房門，含五金與門擋',
  },
  {
    category: '門窗',
    icon: 'window',
    name: '對外窗',
    brand: '正新',
    spec: '隔熱複層玻璃，5+9A+5mm，採鋁合金窗框',
  },

  // 電器
  {
    category: '電器',
    icon: 'ac_unit',
    name: '冷氣',
    brand: '日立',
    spec: '分離式變頻冷暖空調，主臥 1.0 噸、客廳 1.5 噸',
  },
  {
    category: '電器',
    icon: 'thermostat',
    name: '熱水器',
    brand: '林內',
    model: 'RUA-C1620WF',
    spec: '強制排氣 16L 數位恆溫熱水器',
  },
  {
    category: '電器',
    icon: 'electrical_services',
    name: '對講機',
    brand: 'Aiphone',
    spec: '彩色影音對講機，含大門口機與電鎖控制',
  },

  // 五金
  {
    category: '五金',
    icon: 'lock',
    name: '電子鎖',
    brand: 'GATEMAN',
    model: 'Z-Bio',
    spec: '指紋 + 密碼雙模式電子鎖，含 RFID 卡片',
  },
  {
    category: '五金',
    icon: 'light',
    name: '燈具',
    brand: 'Panasonic',
    spec: 'LED 嵌燈與吸頂燈組合，色溫 3000K / 5000K 可切換',
  },
  {
    category: '五金',
    icon: 'water_drop',
    name: '淨水設備',
    brand: '3M',
    model: 'DWS6000ST',
    spec: '中央淨水器，含前置濾芯，廚房預留接口',
  },
];
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.data.ts
git commit -m "feat(data): add 15 EQUIPMENT_ITEMS across 5 categories"
```

---

## Phase E：Layout shell 改造

### Task E1：改造 `default-container.component.ts`

**Files:**
- Modify: `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts`（整檔覆寫，保留 BBDBaseComponent 與 SEO 結構）

- [ ] **Step 1：用以下內容整檔覆寫**

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Injector,
  inject,
  ViewChild,
  OnInit,
  OnDestroy,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';

import { NAV_SECTIONS, NavSection } from '../../../home/pages/default/default.data';

@Component({
  selector: 'web-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss'],
})
export class DefaultContainerComponent
  extends BBDBaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('drawer') drawer!: MatSidenav;

  navSections: NavSection[] = NAV_SECTIONS;
  currentSection = '';
  isDrawerOpen = false;

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

  private _observer?: IntersectionObserver;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._seoServ.updateMetaTags(
      '富華澐光 — 預售屋客變線上服務',
      this.appEnv.siteServer,
      '',
      '從簽約到交屋，您的家由您決定。瀏覽客變原則、流程、費用與虛擬樣品屋。'
    );
    this._seoServ.updateCanonical();

    this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const currRoute = this.getDeepestChildRoute(this._route);
        const seoData = currRoute.snapshot.data;
        if (seoData?.['title']) {
          this._seoServ.updateMetaTags(
            seoData['title'],
            seoData['url'],
            seoData['image'],
            seoData['description']
          );
          this._seoServ.updateCanonical(seoData['url']);
        }
      });
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this._initSectionObserver();
  }

  ngOnDestroy(): void {
    this._observer?.disconnect();
  }

  private _initSectionObserver(): void {
    const sectionIds = this.navSections.map((s) => s.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    this._observer = new IntersectionObserver(
      (entries) => {
        // 找到目前可見比例最高的 section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          this.currentSection = visible[0].target.id;
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => this._observer!.observe(el));
  }

  private getDeepestChildRoute(route: ActivatedRoute): ActivatedRoute {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }

  scrollToSection(id: string, event?: Event): void {
    event?.preventDefault();
    if (!this.isBrowser) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeDrawer();
    }
  }

  openDrawer(): void {
    this.drawer?.open();
    this.isDrawerOpen = true;
  }

  closeDrawer(): void {
    this.drawer?.close();
    this.isDrawerOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isDrawerOpen) this.closeDrawer();
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/_layout/pages/default-container/default-container.component.ts
git commit -m "feat(layout): rewrite DefaultContainerComponent for public area shell with IntersectionObserver"
```

---

### Task E2：改造 `default-container.component.html`

**Files:**
- Modify: `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.html`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```html
<mat-sidenav-container class="layout-shell" autosize>
  <!-- 漢堡選單 drawer -->
  <mat-sidenav #drawer mode="over" position="end" class="topbar-drawer">
    <button
      type="button"
      class="topbar-drawer__close"
      (click)="closeDrawer()"
      aria-label="關閉選單"
    >
      <mat-icon>close</mat-icon>
    </button>

    <nav class="topbar-drawer__nav">
      <a
        *ngFor="let section of navSections"
        href="#{{ section.id }}"
        class="topbar-drawer__nav-link"
        [attr.data-active]="currentSection === section.id"
        (click)="scrollToSection(section.id, $event)"
      >
        {{ section.label }}
      </a>
    </nav>

    <a routerLink="/auth/login" class="btn btn-primary topbar-drawer__cta">
      登入客變系統
    </a>
  </mat-sidenav>

  <mat-sidenav-content>
    <!-- Public topbar -->
    <header class="topbar-public">
      <a routerLink="/" class="topbar-public__logo">
        <span class="topbar-public__logo-mark">澐</span>
        <span class="topbar-public__logo-text">富華澐光</span>
      </a>

      <nav class="topbar-public__nav">
        <a
          *ngFor="let section of navSections"
          href="#{{ section.id }}"
          class="topbar-public__nav-link"
          [attr.data-active]="currentSection === section.id"
          (click)="scrollToSection(section.id, $event)"
        >
          {{ section.label }}
        </a>
      </nav>

      <div class="topbar-public__actions">
        <a
          routerLink="/auth/login"
          class="btn btn-primary btn-sm topbar-public__cta"
        >
          登入客變系統
        </a>

        <button
          type="button"
          class="topbar-public__hamburger"
          (click)="openDrawer()"
          aria-label="開啟選單"
        >
          <mat-icon>menu</mat-icon>
        </button>
      </div>
    </header>

    <!-- 浮動錨點導覽（桌機） -->
    <nav class="anchor-nav" aria-label="區塊快速導覽">
      <button
        *ngFor="let section of navSections"
        type="button"
        class="anchor-nav__item"
        [class.anchor-nav__item--active]="currentSection === section.id"
        (click)="scrollToSection(section.id)"
        [attr.aria-label]="'跳至 ' + section.label"
      >
        <span class="anchor-nav__tooltip">{{ section.label }}</span>
      </button>
    </nav>

    <!-- 主內容（router 投放） -->
    <main class="layout-shell__main">
      <router-outlet></router-outlet>
    </main>

    <!-- Footer -->
    <web-footer></web-footer>
  </mat-sidenav-content>
</mat-sidenav-container>
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/_layout/pages/default-container/default-container.component.html
git commit -m "feat(layout): rewrite default-container template as public shell"
```

---

### Task E3：改造 `default-container.component.scss`

**Files:**
- Modify: `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.scss`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```scss
.layout-shell {
  min-height: 100vh;
  background: transparent;

  // Material sidenav container 與 body 漸層搭配
  ::ng-deep .mat-drawer-container,
  ::ng-deep .mat-sidenav-container {
    background: transparent;
  }

  &__main {
    display: block;
    min-height: calc(100vh - var(--topbar-h));
  }
}

// 漢堡 drawer 內部容器（mat-sidenav）外觀
::ng-deep .topbar-drawer.mat-drawer {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: var(--blur);
}
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/_layout/pages/default-container/default-container.component.scss
git commit -m "feat(layout): default-container scss for shell + drawer transparency"
```

---

### Task E4：改造 footer 元件

**Files:**
- Modify: `apps/web/src/app/modules/_layout/pages/footer/footer.component.html`（整檔覆寫）
- Modify: `apps/web/src/app/modules/_layout/pages/footer/footer.component.scss`（整檔覆寫）

- [ ] **Step 1：先確認 footer.component.ts 的 selector**

```bash
grep -E "selector|@Component" apps/web/src/app/modules/_layout/pages/footer/footer.component.ts | head -3
```
預期：`selector: 'web-footer'`（若不同，需在 `default-container.component.html` 對應改 tag）。

- [ ] **Step 2：改寫 footer.component.html**

```html
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__columns">
      <div class="footer__brand">
        <div class="footer__brand-mark">
          <span class="topbar-public__logo-mark">澐</span>
          <span class="topbar-public__logo-text">富華澐光</span>
        </div>
        <p class="footer__brand-desc">
          富華建設 · 預售屋客變線上服務系統
        </p>
      </div>

      <div class="footer__col">
        <h4 class="footer__col-title">公開資訊</h4>
        <ul class="footer__list">
          <li><a href="#principles">客變原則</a></li>
          <li><a href="#process">客變流程</a></li>
          <li><a href="#faq">常見問題</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4 class="footer__col-title">參考工具</h4>
        <ul class="footer__list">
          <li><a href="#fees">費用表</a></li>
          <li><a href="#equipment">設備表</a></li>
          <li><a href="#vr-tour">虛擬樣品屋</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4 class="footer__col-title">聯絡資訊</h4>
        <ul class="footer__list">
          <li>客服電話：02-XXXX-XXXX</li>
          <li>LINE：@fuhua-yunguang</li>
          <li>Email：service&#64;fuhua.com.tw</li>
        </ul>
      </div>
    </div>

    <div class="footer__legal">
      <span>© 2026 富華建設股份有限公司. All rights reserved.</span>
      <span class="footer__legal-links">
        <a href="/privacy">隱私權政策</a>
        <span aria-hidden="true">·</span>
        <a href="/terms">服務條款</a>
      </span>
    </div>
  </div>
</footer>
```

- [ ] **Step 3：改寫 footer.component.scss**

```scss
.footer {
  margin-top: 80px;
  padding: 56px clamp(20px, 5vw, 80px) 32px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border-top: 1px solid var(--border);

  &__inner {
    max-width: var(--max-content);
    margin: 0 auto;
  }

  &__columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 40px;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1.5fr repeat(3, 1fr);
      gap: 48px;
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-mark {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 16px;
      color: var(--text-primary);
    }

    &-desc {
      font-size: 13px;
      line-height: 1.6;
      color: var(--text-secondary);
      margin: 0;
      max-width: 280px;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__col-title {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--seafoam-dark);
    margin: 0;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.5;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.15s;

        &:hover {
          color: var(--seafoam-dark);
        }
      }
    }
  }

  &__legal {
    padding-top: 24px;
    border-top: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 12px;
    color: var(--text-muted);

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__legal-links {
    display: flex;
    align-items: center;
    gap: 8px;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--seafoam-dark);
      }
    }
  }
}
```

- [ ] **Step 4：commit**
```bash
git add src/app/modules/_layout/pages/footer/footer.component.html src/app/modules/_layout/pages/footer/footer.component.scss
git commit -m "feat(layout): rewrite footer for public area with 4 columns + legal row"
```

---

## Phase F：公開頁主元件

### Task F1：改寫 `default.component.ts`

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.ts`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, OnInit } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';

import {
  PRINCIPLES,
  PROCESS_STEPS,
  FAQ_GROUPS,
  PRICE_ITEMS,
  EQUIPMENT_ITEMS,
  PrincipleCategory,
  ProcessStep,
  FaqGroup,
  PriceItem,
  EquipmentItem,
} from './default.data';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements OnInit {
  principles: PrincipleCategory[] = PRINCIPLES;
  processSteps: ProcessStep[] = PROCESS_STEPS;
  faqGroups: FaqGroup[] = FAQ_GROUPS;
  equipmentItems: EquipmentItem[] = EQUIPMENT_ITEMS;

  /** 費用表依 category 分組 */
  priceByCategory: { category: string; items: PriceItem[] }[] = [];

  /** 設備表依 category 分組 */
  equipmentByCategory: { category: string; items: EquipmentItem[] }[] = [];

  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.priceByCategory = this._groupByCategory(PRICE_ITEMS);
    this.equipmentByCategory = this._groupEquipmentByCategory(EQUIPMENT_ITEMS);
  }

  private _groupByCategory(items: PriceItem[]): { category: string; items: PriceItem[] }[] {
    const map = new Map<string, PriceItem[]>();
    items.forEach((item) => {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
    });
    return Array.from(map, ([category, items]) => ({ category, items }));
  }

  private _groupEquipmentByCategory(
    items: EquipmentItem[]
  ): { category: string; items: EquipmentItem[] }[] {
    const map = new Map<string, EquipmentItem[]>();
    items.forEach((item) => {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
    });
    return Array.from(map, ([category, items]) => ({ category, items }));
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.component.ts
git commit -m "feat(home): simplify DefaultComponent — remove gsap/swiper, load static data"
```

---

### Task F2：改寫 `default.component.html` — Hero + Principles

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.html`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```html
<!-- ─── Hero ─── -->
<section id="hero" class="hero section">
  <div class="hero__inner">
    <div class="hero__content">
      <span class="hero__eyebrow">富華澐光 · 客變線上服務</span>
      <h1 class="hero__title">從簽約到交屋，<br />您的家由您決定。</h1>
      <p class="hero__subtitle">
        線上瀏覽客變原則、規劃需求、追蹤進度。從格局、水電到建材選配，一站式完成。
      </p>
      <div class="hero__cta-row">
        <a routerLink="/auth/login" class="btn btn-primary btn-lg">
          登入客變系統
          <mat-icon>arrow_forward</mat-icon>
        </a>
        <a href="#principles" class="btn btn-outline btn-lg">
          了解客變原則
        </a>
      </div>
    </div>

    <div class="hero__visual">
      <span class="hero__visual-label">虛擬樣品屋預覽</span>
    </div>
  </div>
</section>

<!-- ─── 客變原則 ─── -->
<section id="principles" class="section">
  <div class="section__inner">
    <div class="section__head">
      <span class="section__eyebrow">Customization Principles</span>
      <h2 class="section__title">客變原則</h2>
      <p class="section__lead">
        各類別的變更範圍與限制總覽。實際可變項目依您的戶型樓層而定，登入後系統會自動篩選顯示。
      </p>
    </div>

    <div class="section__body">
      <div class="principles-grid">
        <article
          *ngFor="let p of principles"
          class="principle-card"
        >
          <div class="principle-card__icon">
            <mat-icon>{{ p.icon }}</mat-icon>
          </div>
          <h3 class="principle-card__title">{{ p.title }}</h3>
          <p class="principle-card__scope">{{ p.scope }}</p>

          <ul class="principle-card__rules">
            <li *ngFor="let rule of p.rules" class="principle-card__rule">
              {{ rule }}
            </li>
          </ul>

          <div class="principle-card__examples">
            <span *ngFor="let ex of p.examples" class="chip chip--outline">
              {{ ex }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.component.html
git commit -m "feat(home): rewrite default template — hero + principles sections"
```

---

### Task F3：續寫 HTML — Process + FAQ

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.html`（在檔尾追加）

- [ ] **Step 1：在檔尾追加以下內容**

```html

<!-- ─── 客變流程 ─── -->
<section id="process" class="section section--alt">
  <div class="section__inner">
    <div class="section__head">
      <span class="section__eyebrow">Customization Flow</span>
      <h2 class="section__title">客變流程</h2>
      <p class="section__lead">
        從簽約到交屋的完整時間軸，每個階段的關鍵動作與時程。
      </p>
    </div>

    <div class="section__body">
      <div class="process-timeline">
        <div *ngFor="let step of processSteps" class="process-step">
          <div class="process-step__node">{{ step.stepNumber }}</div>

          <div class="process-step__content">
            <span class="process-step__phase">Step {{ step.stepNumber }}</span>
            <h3 class="process-step__label">{{ step.label }}</h3>

            <span *ngIf="step.durationHint" class="process-step__duration">
              {{ step.durationHint }}
            </span>

            <p class="process-step__description">{{ step.description }}</p>

            <ul class="process-step__actions">
              <li
                *ngFor="let action of step.buyerActions"
                class="process-step__action"
              >
                {{ action }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── 常見問題 FAQ ─── -->
<section id="faq" class="section">
  <div class="section__inner">
    <div class="section__head">
      <span class="section__eyebrow">FAQ</span>
      <h2 class="section__title">常見問題</h2>
      <p class="section__lead">
        針對客變流程、費用、時程、設計師委託等常見疑問的回答。
      </p>
    </div>

    <div class="section__body">
      <div class="faq">
        <div *ngFor="let group of faqGroups" class="faq__group">
          <h3 class="faq__group-title">{{ group.groupTitle }}</h3>

          <mat-accordion multi>
            <mat-expansion-panel
              *ngFor="let item of group.items"
              class="faq__panel"
            >
              <mat-expansion-panel-header>
                <mat-panel-title>{{ item.q }}</mat-panel-title>
              </mat-expansion-panel-header>
              <p>{{ item.a }}</p>
            </mat-expansion-panel>
          </mat-accordion>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.component.html
git commit -m "feat(home): append process timeline + faq sections"
```

---

### Task F4：續寫 HTML — Fees + Equipment

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.html`（在檔尾追加）

- [ ] **Step 1：在檔尾追加以下內容**

```html

<!-- ─── 費用表 ─── -->
<section id="fees" class="section section--alt">
  <div class="section__inner">
    <div class="section__head">
      <span class="section__eyebrow">Price Reference</span>
      <h2 class="section__title">常見費用表</h2>
      <p class="section__lead">
        各類客變項目的參考費用範圍。實際金額以後台審核結果為準，登入後系統會即時試算您的客變總價。
      </p>
    </div>

    <div class="section__body">
      <div class="price-table">
        <table>
          <thead>
            <tr>
              <th>代號</th>
              <th>項目</th>
              <th>單位</th>
              <th>費用範圍</th>
            </tr>
          </thead>
          <tbody>
            <ng-container *ngFor="let group of priceByCategory">
              <tr class="price-table__category-header">
                <td colspan="4">{{ group.category }}</td>
              </tr>
              <tr *ngFor="let item of group.items">
                <td data-label="代號">
                  <span class="price-table__code">{{ item.code }}</span>
                </td>
                <td data-label="項目">
                  {{ item.name }}
                  <div *ngIf="item.note" class="price-table__note">
                    {{ item.note }}
                  </div>
                </td>
                <td data-label="單位">{{ item.unit }}</td>
                <td data-label="費用">
                  <span class="price-table__price">{{ item.priceRange }}</span>
                </td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- ─── 設備表 ─── -->
<section id="equipment" class="section">
  <div class="section__inner">
    <div class="section__head">
      <span class="section__eyebrow">Standard Equipment</span>
      <h2 class="section__title">標準交屋設備</h2>
      <p class="section__lead">
        本建案標準交屋包含的主要建材與設備規格。如有升級需求，請於客變期間透過系統申請。
      </p>
    </div>

    <div class="section__body">
      <div class="equipment-table">
        <div
          *ngFor="let group of equipmentByCategory"
          class="equipment-group"
        >
          <h3 class="equipment-group__title">{{ group.category }}</h3>

          <div
            *ngFor="let item of group.items"
            class="equipment-row"
          >
            <div class="equipment-row__thumb">
              <mat-icon>{{ item.icon }}</mat-icon>
            </div>

            <div class="equipment-row__info">
              <h4 class="equipment-row__name">
                {{ item.name }}
                <span *ngIf="item.model" class="equipment-row__model">
                  · {{ item.model }}
                </span>
              </h4>
              <p class="equipment-row__spec">{{ item.spec }}</p>
            </div>

            <span class="equipment-row__brand">{{ item.brand }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.component.html
git commit -m "feat(home): append fees table + equipment table sections"
```

---

### Task F5：續寫 HTML — VR Entry

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.html`（在檔尾追加）

- [ ] **Step 1：在檔尾追加以下內容**

```html

<!-- ─── 虛擬樣品屋入口 ─── -->
<section id="vr-tour" class="section">
  <div class="section__inner">
    <div class="vr-entry">
      <div class="vr-entry__content">
        <span class="vr-entry__badge">Phase 1 即將提供</span>
        <h2 class="vr-entry__title">走進您的未來家</h2>
        <p class="vr-entry__lead">
          虛擬樣品屋讓您在簽約後、開工前就能 360° 預覽不同戶型與選配組合，幫助您構思客變需求。
        </p>

        <ul class="vr-entry__features">
          <li class="vr-entry__feature">主力戶型 A1 / B10 / B9 先行上線</li>
          <li class="vr-entry__feature">三種風格：北歐 / 現代 / 新古典</li>
          <li class="vr-entry__feature">系統櫃色系、地板材質差異即時比較</li>
        </ul>

        <div class="vr-entry__cta-row">
          <a href="/#vr-coming-soon" class="btn btn-primary btn-lg">
            進入虛擬樣品屋
            <mat-icon>360</mat-icon>
          </a>
        </div>
      </div>

      <div class="vr-entry__visual">
        <mat-icon>view_in_ar</mat-icon>
        <span class="vr-entry__visual-label">360° 預覽 · 即將提供</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.component.html
git commit -m "feat(home): append vr-entry section"
```

---

### Task F6：改寫 `default.component.scss`

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.scss`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```scss
:host {
  display: block;
}

// 區塊間最小間距，由 _section.scss 控制 padding，這裡只處理元件局部
.hero {
  // 與 topbar 接續處的視覺呼吸
  padding-top: 32px;

  @media (min-width: 768px) {
    padding-top: 48px;
  }
}
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/pages/default/default.component.scss
git commit -m "feat(home): default.scss minimal — hero spacing only"
```

---

### Task F7：清理 `home.module.ts` 移除不需要的模組

**Files:**
- Modify: `apps/web/src/app/modules/home/home.module.ts`（整檔覆寫）

- [ ] **Step 1：用以下內容整檔覆寫**

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './pages';

const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [DefaultComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...CUSTOM_MODULES,
  ],
})
export class HomeModule {}
```

- [ ] **Step 2：commit**
```bash
git add src/app/modules/home/home.module.ts
git commit -m "chore(home): remove unused LottieModule + GoogleMapsModule imports"
```

---

## Phase G：驗收

### Task G1：啟動 dev server，視覺檢查

**Files:** N/A（執行驗證）

- [ ] **Step 1：在倉根啟動 dev server**

```bash
cd /Users/fangjiemini/bbd-projects/yunguang-cus-change/yunguang-cus-change-angular16-apps
npx nx serve web
```

預期：終端輸出 `Local: http://localhost:4200`（或專案設定的 port）。
若 build 失敗：依錯誤訊息排查（常見：missing import、Material module 未經 SharedModule 暴露 → 確認 `libs/core/src/lib/shared/modules/material.module.ts` 已輸出對應 module）。

- [ ] **Step 2：開瀏覽器到 http://localhost:4200**

預期看到：
1. 玻璃感頂欄（左 logo「澐 富華澐光」、中 6 個 nav link、右「登入客變系統」 CTA）
2. Hero 區塊（左文字「從簽約到交屋，您的家由您決定。」+ 兩個 CTA、右 placeholder 視覺）
3. 7 張類別卡（網格）
4. 流程時間軸（豎排，桌機左右交錯，圓點 1-7）
5. FAQ 5 群組手風琴
6. 費用表（桌機真表格）
7. 設備表（5 群組，每群縮圖 + 規格）
8. VR 入口卡（漸層大卡）
9. Footer（4 欄）
10. 右側浮動錨點 dot（桌機才顯示）

- [ ] **Step 3：commit（如有微調修正）**

若視覺有明顯偏差需修正，個別檔案 commit 後再回到此步驟。

---

### Task G2：響應式 RWD 驗證

**Files:** N/A

- [ ] **Step 1：Chrome DevTools 切寬度 375px（iPhone SE）**

預期：
- Topbar：logo + CTA + 漢堡 icon（中間 nav 隱藏）
- Hero：上下排（文字在上、視覺在下），標題縮小
- Principles：1 欄
- Process：圓點靠左、內容在右
- FAQ：全寬展開
- Fees：卡片化（每列一卡，欄名顯示在左、值顯示在右）
- Equipment：縮圖 + 規格垂直堆疊
- VR：上下排
- Anchor nav：隱藏
- Footer：1-2 欄

- [ ] **Step 2：切寬度 768px（iPad）**

預期：
- Topbar：完整 nav link 顯示、漢堡隱藏
- Principles：2 欄
- Fees：真表格
- Footer：2 欄

- [ ] **Step 3：切寬度 1440px（桌機）**

預期：
- Hero：左右排
- Principles：3 欄
- Process：豎排左右交錯
- Anchor nav：右側顯示，6 個 dot
- Footer：4 欄

- [ ] **Step 4：拍 3 張 screenshot 存檔（可選）**

```bash
mkdir -p docs/superpowers/screenshots
# 手動拍 mobile / tablet / desktop 三張 jpeg，命名 s2-mobile.jpg / s2-tablet.jpg / s2-desktop.jpg
```

---

### Task G3：互動驗證

**Files:** N/A

- [ ] **Step 1：點 topbar 的「客變流程」連結**

預期：平滑滾動到 #process 區塊；topbar 該連結出現底線（active）；右側對應 dot 變填充。

- [ ] **Step 2：手動向下慢速滾動**

預期：滾經每個 section 時，topbar nav 與右側 dot 的 active 狀態同步切換。

- [ ] **Step 3：點 FAQ 任一題目**

預期：題目展開答案，再次點擊收合；可同時開多個（mat-accordion 為 multi mode）。

- [ ] **Step 4：375px 寬度下，點漢堡 icon**

預期：右側滑出 drawer，列出 6 個 nav + CTA；點任一 nav 自動關閉 drawer 並滾到對應 section；按 ESC 鍵也能關閉。

- [ ] **Step 5：點 Hero 區的「登入客變系統」CTA**

預期：跳轉到 `/auth/login`（即使該頁尚未實作會 404 也沒關係，確認 routerLink 有作用）。

- [ ] **Step 6：點 VR 入口的「進入虛擬樣品屋」CTA**

預期：URL 變為 `/#vr-coming-soon`（不會跳頁，僅錨點變化；該錨點不存在，畫面停留）。

- [ ] **Step 7：commit 任何修正**

```bash
git status
# 若有修正，依檔案 commit
```

---

### Task G4：建置驗證

**Files:** N/A

- [ ] **Step 1：在倉根執行 production build**

```bash
cd /Users/fangjiemini/bbd-projects/yunguang-cus-change/yunguang-cus-change-angular16-apps
npx nx build web --configuration=production
```

預期：
- Build 成功，輸出至 `dist/apps/web/`
- 無 TypeScript error
- 無 SCSS compile error

若失敗：依錯誤類型排查
- `Property 'X' does not exist`：檢查 ts file 的 type / import
- `Could not find module`：檢查 SCSS @import 路徑
- `Bundle exceeded budget`：暫不處理（屬效能調優範疇）

- [ ] **Step 2：commit 修正（如有）**

---

## Phase H：總結

### Task H1：驗收清單對照 spec §10

**Files:** N/A

- [ ] **Step 1：對照 spec §10 驗收項目逐項勾選**

```
1. 視覺一致性
   [ ] 所有區塊用 seafoam glass card 風格
   [ ] Token 集中於 _mat-theme.scss

2. 響應式
   [ ] 375 / 768 / 1024 / 1440 四寬度 layout 正常
   [ ] 漢堡選單 < md 出現、≥ md 隱藏

3. 互動
   [ ] Topbar nav 平滑滾動 + active 狀態
   [ ] FAQ 展開收合
   [ ] 右側 anchor dot 點擊跳轉

4. 內容完整性
   [ ] 7 區塊 + Footer 都有內容
   [ ] Principles 7 / Process 7 / FAQ 18 / Fees 23 / Equipment 15

5. 效能
   [ ] 無 API call
   [ ] Build 成功

6. 既有 SCSS 沿用
   [ ] 既有 token 未被覆蓋
   [ ] 既有 dashboard SCSS 檔案保留不刪
   [ ] styles.scss 註解區乾淨
```

- [ ] **Step 2：最終 commit（如有微調）**

---

## 完成標準

- 所有 Tasks 全部勾選完成
- Build 成功
- 視覺與互動符合 spec §7、§8
- 驗收清單（spec §10）全部通過
- Git 歷史每個 task 一個 commit（細粒度可追溯）

---

## 附錄 A：Spec 覆蓋對照

| Spec 章節 | 對應 Tasks |
|---|---|
| §3 架構 | E1, E2, E3, E4, F1, F7 |
| §4 Token 補強 | A1 |
| §5 SCSS 元件規格 | A2, A3, A4, B1-B9, E4 |
| §6 區塊與資料模型 | D1-D5, F2-F5 |
| §7 互動行為 | E1（observer + scroll）, E2（HTML） |
| §8 響應式 | 所有 SCSS（內含 media queries）, G2 |
| §9 無障礙 | E2（aria-label）, B5（mat-expansion-panel） |
| §10 驗收計畫 | G1, G2, G3, G4, H1 |

## 附錄 B：每階段時間估算（給執行者參考）

| Phase | 預估時間 | 內容 |
|---|---|---|
| A | 30 min | 4 個既有 SCSS 改 |
| B | 90 min | 9 個新 SCSS |
| C | 15 min | styles.scss 重組 |
| D | 60 min | 5 個 data section |
| E | 60 min | layout shell + footer |
| F | 60 min | home component + 5 HTML 區塊 |
| G | 30-60 min | 視覺驗收 + RWD + 互動 |
| **合計** | **約 6-7 小時** | 含驗收 |
