# 客變說明獨立路由設計文檔

**日期：** 2026-05-27  
**作者：** Claude Code  
**狀態：** 草案

## 概述

將首頁中的5個客變說明組件（原則、流程、常見問題、費用表、設備表）提升為獨立路由，支援在新標籤頁打開，同時保留首頁簡化版預覽與導航入口。

## 需求

1. 為5個customization組件各自創建獨立路由
2. 替換首頁anchor link導航為路由導航，`target="_blank"` 打開新標籤頁
3. 首頁保留簡化版預覽，點擊「查看詳情」導向完整頁面
4. 各客變說明頁面保留layout（header、footer、navigation）

## 方案設計

### 路由架構

新增獨立的 `Explanation Module`，與現有的 `Customization`、`Home` 等modules平行。

```
/explanation/principles      → 客變原則完整頁
/explanation/timeline        → 客變流程完整頁
/explanation/faq            → 常見問題完整頁
/explanation/pricing        → 費用表完整頁
/explanation/equipment      → 設備表完整頁
```

### 文件結構

```
apps/web/src/app/modules/explanation/
├─ explanation.module.ts
├─ explanation-routing.module.ts
└─ pages/
    ├─ principles-page/
    │   ├─ principles-page.component.ts
    │   ├─ principles-page.component.html
    │   └─ principles-page.component.scss
    ├─ timeline-page/
    │   ├─ timeline-page.component.ts
    │   ├─ timeline-page.component.html
    │   └─ timeline-page.component.scss
    ├─ faq-page/
    │   ├─ faq-page.component.ts
    │   ├─ faq-page.component.html
    │   └─ faq-page.component.scss
    ├─ pricing-page/
    │   ├─ pricing-page.component.ts
    │   ├─ pricing-page.component.html
    │   └─ pricing-page.component.scss
    └─ equipment-page/
        ├─ equipment-page.component.ts
        ├─ equipment-page.component.html
        └─ equipment-page.component.scss
```

### 首頁改動

#### default.component.html 變更

**移除：**
- 完整的 `<app-customization-principles>`、`<app-customization-timeline>` 等組件

**保留：**
- 簡化版預覽section（如principles的category icons grid、timeline的步驟circles簡圖）
- 每個預覽區域加「查看詳情」按鈕，鏈接到對應的 `/explanation/*` 路由，`target="_blank"`

#### default.component.ts 保持不變

- 保留data供應（`principles()`、`processSteps()` 等signals）用於首頁預覽
- 保留 SEO service調用

### 導航改動

#### default.data.ts

**NavSection 介面擴展：**
```typescript
export interface NavSection {
  id: string;
  label: string;
  route: string;  // 新增
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'principles', label: '客變原則', route: '/explanation/principles' },
  { id: 'process', label: '客變流程', route: '/explanation/timeline' },
  { id: 'faq', label: '常見問題', route: '/explanation/faq' },
  { id: 'fees', label: '費用表', route: '/explanation/pricing' },
  { id: 'equipment', label: '設備表', route: '/explanation/equipment' },
];
```

#### default-container.component.html

**原anchor link：**
```html
<a href="#{{ section.id }}" (click)="scrollToSection(section.id, $event)">
  {{ section.label }}
</a>
```

**改為路由導航：**
```html
<a [routerLink]="section.route" target="_blank" class="topbar-public__nav-link">
  {{ section.label }}
</a>
```

#### default-container.component.ts

**移除：**
- `scrollToSection()` 方法（不再需要）
- Section intersection observer 邏輯（anchor nav不再依賴）

**保留：**
- 其他navigation邏輯（drawer、login等）

### 客變說明頁面設計

#### 各子頁面組件

每個頁面（principles-page、timeline-page等）：

1. **複用existing組件：**
   - 使用 shared 中的 `app-customization-*` 組件（如 `customization-principles`、`customization-timeline`）

2. **頁面結構：**
   ```html
   <section id="[component-name]" class="section">
     <app-customization-[component] [data]="data()"></app-customization-[component]>
   </section>
   ```

3. **data供應：**
   - 從 `CustomizationReferenceService` 取得數據（同首頁）
   - 使用 signal 包裝以支援reactive updates

4. **SEO meta tags：**
   - 在 `ngOnInit` 中通過 `SEOServ` 設置對應頁面的title、description等

5. **返回首頁：**
   - 可選：頁面底部「返回首頁」按鈕

### 路由配置

#### explanation-routing.module.ts

```typescript
const routes: Routes = [
  {
    path: 'principles',
    component: PrinciplesPageComponent,
    data: {
      title: '客變原則 | 富華澐光',
      description: '瞭解客變規則與限制',
      url: `${env.siteServer}/explanation/principles`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`
    }
  },
  // 類似配置...timeline、faq、pricing、equipment
];
```

#### app-routing.module.ts

```typescript
{
  path: 'explanation',
  loadChildren: () => import('./modules/explanation/explanation.module')
    .then(m => m.ExplanationModule)
},
```

### 組件複用

**shared/components 的 customization-* 組件：**
- `customization-principles` → principles-page 複用
- `customization-timeline` → timeline-page 複用
- `customization-faq` → faq-page 複用
- `customization-pricing` → pricing-page 複用
- `customization-equipment` → equipment-page 複用

無需修改existing組件，直接在新頁面中使用。

## 實現步驟

1. 建立 Explanation Module 與路由配置
2. 建立5個子頁面組件
3. 修改 home module 的首頁
4. 更新導航數據與layout組件
5. 更新app-routing.module.ts
6. 測試路由與新標籤頁打開
7. 驗證SEO meta tags

## 測試策略

- **路由導航：** 驗證5個路由正確加載對應組件
- **target="_blank"：** 確認導航鏈接在新標籤頁打開
- **首頁預覽：** 簡化版內容正確顯示與布局
- **SEO驗證：** 各頁面 meta tags 正確設置
- **data供應：** 各頁面能正確取得與顯示數據
- **返回首頁：** 新標籤頁可順利返回首頁

## 相關文件

- [default.component.html](../../modules/home/pages/default/default.component.html)
- [default.data.ts](../../modules/home/pages/default/default.data.ts)
- [default-container.component.ts](../../modules/_layout/pages/default-container/default-container.component.ts)
- [customization-reference.service.ts](../../shared/services/customization-reference.service.ts)
