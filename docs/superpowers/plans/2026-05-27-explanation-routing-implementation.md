# 客變說明獨立路由 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 為客變說明5個組件創建獨立路由，實現在新標籤頁打開，同時保留首頁簡化預覽。

**Architecture:** 新增獨立的 Explanation Module，建立 `/explanation/*` 路由。各子頁面複用 shared 的 customization-* 組件。更新導航配置與首頁布局，移除anchor link邏輯改為路由導航。

**Tech Stack:** Angular 16, Material, RxJS, TypeScript

---

## 文件結構

**新增文件：**
```
apps/web/src/app/modules/explanation/
├─ explanation.module.ts
├─ explanation-routing.module.ts
├─ index.ts
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
    ├─ equipment-page/
    │   ├─ equipment-page.component.ts
    │   ├─ equipment-page.component.html
    │   └─ equipment-page.component.scss
    └─ index.ts
```

**修改文件：**
- `apps/web/src/app/app-routing.module.ts` — 新增 explanation 路由
- `apps/web/src/app/modules/home/pages/default/default.data.ts` — 更新 NAV_SECTIONS
- `apps/web/src/app/modules/home/pages/default/default.component.html` — 簡化版預覽 + 查看詳情按鈕
- `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts` — 移除 scrollToSection 邏輯
- `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.html` — 改為 routerLink

---

## 任務分解

### Task 1: 建立 Explanation Module 與路由配置

**Files:**
- Create: `apps/web/src/app/modules/explanation/explanation.module.ts`
- Create: `apps/web/src/app/modules/explanation/explanation-routing.module.ts`
- Create: `apps/web/src/app/modules/explanation/index.ts`

- [ ] **Step 1: 建立 explanation-routing.module.ts**

```typescript
// apps/web/src/app/modules/explanation/explanation-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from '../../../environments/environment';
import {
  PrinciplesPageComponent,
  TimelinePageComponent,
  FaqPageComponent,
  PricingPageComponent,
  EquipmentPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'principles',
    component: PrinciplesPageComponent,
    data: {
      title: '客變原則 | 富華澐光',
      description: '瞭解客變規則、限制與施工範圍',
      url: `${env.siteServer}/explanation/principles`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`,
    },
  },
  {
    path: 'timeline',
    component: TimelinePageComponent,
    data: {
      title: '客變流程 | 富華澐光',
      description: '了解從簽約到施工的客變完整流程',
      url: `${env.siteServer}/explanation/timeline`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`,
    },
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    data: {
      title: '常見問題 | 富華澐光',
      description: '客變常見問題與解答',
      url: `${env.siteServer}/explanation/faq`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`,
    },
  },
  {
    path: 'pricing',
    component: PricingPageComponent,
    data: {
      title: '費用表 | 富華澐光',
      description: '客變項目費用一覽表',
      url: `${env.siteServer}/explanation/pricing`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`,
    },
  },
  {
    path: 'equipment',
    component: EquipmentPageComponent,
    data: {
      title: '設備表 | 富華澐光',
      description: '標準設備與升級選項',
      url: `${env.siteServer}/explanation/equipment`,
      image: `${env.siteServer}/assets/image/og/tslmai.png`,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplanationRoutingModule {}
```

- [ ] **Step 2: 建立 explanation.module.ts**

```typescript
// apps/web/src/app/modules/explanation/explanation.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ExplanationRoutingModule } from './explanation-routing.module';
import { SharedModule } from '@shared/shared.module';
import {
  PrinciplesPageComponent,
  TimelinePageComponent,
  FaqPageComponent,
  PricingPageComponent,
  EquipmentPageComponent,
} from './pages';

@NgModule({
  declarations: [
    PrinciplesPageComponent,
    TimelinePageComponent,
    FaqPageComponent,
    PricingPageComponent,
    EquipmentPageComponent,
  ],
  imports: [CommonModule, MatIconModule, ExplanationRoutingModule, SharedModule],
})
export class ExplanationModule {}
```

- [ ] **Step 3: 建立 explanation/index.ts**

```typescript
// apps/web/src/app/modules/explanation/index.ts
export * from './pages';
```

- [ ] **Step 4: 建立 pages/index.ts**

```typescript
// apps/web/src/app/modules/explanation/pages/index.ts
export * from './principles-page/principles-page.component';
export * from './timeline-page/timeline-page.component';
export * from './faq-page/faq-page.component';
export * from './pricing-page/pricing-page.component';
export * from './equipment-page/equipment-page.component';
```

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/app/modules/explanation/
git commit -m "feat: create explanation module structure and routing"
```

---

### Task 2: 實現 Principles Page 組件

**Files:**
- Create: `apps/web/src/app/modules/explanation/pages/principles-page/principles-page.component.ts`
- Create: `apps/web/src/app/modules/explanation/pages/principles-page/principles-page.component.html`
- Create: `apps/web/src/app/modules/explanation/pages/principles-page/principles-page.component.scss`

- [ ] **Step 1: 建立 principles-page.component.ts**

```typescript
// apps/web/src/app/modules/explanation/pages/principles-page/principles-page.component.ts
import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '@shared/services/customization-reference.service';

@Component({
  selector: 'app-principles-page',
  templateUrl: './principles-page.component.html',
  styleUrls: ['./principles-page.component.scss'],
})
export class PrinciplesPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly principles = signal(this.refService.principles);

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '客變原則 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/principles`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '瞭解客變規則、限制與施工範圍'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/principles`);
  }
}
```

- [ ] **Step 2: 建立 principles-page.component.html**

```html
<!-- apps/web/src/app/modules/explanation/pages/principles-page/principles-page.component.html -->
<section id="principles" class="section">
  <app-customization-principles [principles]="principles()" />
</section>
```

- [ ] **Step 3: 建立 principles-page.component.scss (空樣式文件)**

```scss
// apps/web/src/app/modules/explanation/pages/principles-page/principles-page.component.scss
// 樣式交由 app-customization-principles 組件管理
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/modules/explanation/pages/principles-page/
git commit -m "feat: implement principles-page component"
```

---

### Task 3: 實現 Timeline Page 組件

**Files:**
- Create: `apps/web/src/app/modules/explanation/pages/timeline-page/timeline-page.component.ts`
- Create: `apps/web/src/app/modules/explanation/pages/timeline-page/timeline-page.component.html`
- Create: `apps/web/src/app/modules/explanation/pages/timeline-page/timeline-page.component.scss`

- [ ] **Step 1: 建立 timeline-page.component.ts**

```typescript
// apps/web/src/app/modules/explanation/pages/timeline-page/timeline-page.component.ts
import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '@shared/services/customization-reference.service';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss'],
})
export class TimelinePageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly processSteps = signal(this.refService.processSteps);

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '客變流程 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/timeline`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '了解從簽約到施工的客變完整流程'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/timeline`);
  }
}
```

- [ ] **Step 2: 建立 timeline-page.component.html**

```html
<!-- apps/web/src/app/modules/explanation/pages/timeline-page/timeline-page.component.html -->
<section id="timeline" class="section">
  <app-customization-timeline [processSteps]="processSteps()" />
</section>
```

- [ ] **Step 3: 建立 timeline-page.component.scss (空樣式文件)**

```scss
// apps/web/src/app/modules/explanation/pages/timeline-page/timeline-page.component.scss
// 樣式交由 app-customization-timeline 組件管理
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/modules/explanation/pages/timeline-page/
git commit -m "feat: implement timeline-page component"
```

---

### Task 4: 實現 FAQ Page 組件

**Files:**
- Create: `apps/web/src/app/modules/explanation/pages/faq-page/faq-page.component.ts`
- Create: `apps/web/src/app/modules/explanation/pages/faq-page/faq-page.component.html`
- Create: `apps/web/src/app/modules/explanation/pages/faq-page/faq-page.component.scss`

- [ ] **Step 1: 建立 faq-page.component.ts**

```typescript
// apps/web/src/app/modules/explanation/pages/faq-page/faq-page.component.ts
import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '@shared/services/customization-reference.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly faqGroups = signal(this.refService.faqGroups);

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '常見問題 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/faq`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '客變常見問題與解答'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/faq`);
  }
}
```

- [ ] **Step 2: 建立 faq-page.component.html**

```html
<!-- apps/web/src/app/modules/explanation/pages/faq-page/faq-page.component.html -->
<section id="faq" class="section">
  <app-customization-faq [faqGroups]="faqGroups()" />
</section>
```

- [ ] **Step 3: 建立 faq-page.component.scss (空樣式文件)**

```scss
// apps/web/src/app/modules/explanation/pages/faq-page/faq-page.component.scss
// 樣式交由 app-customization-faq 組件管理
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/modules/explanation/pages/faq-page/
git commit -m "feat: implement faq-page component"
```

---

### Task 5: 實現 Pricing Page 組件

**Files:**
- Create: `apps/web/src/app/modules/explanation/pages/pricing-page/pricing-page.component.ts`
- Create: `apps/web/src/app/modules/explanation/pages/pricing-page/pricing-page.component.html`
- Create: `apps/web/src/app/modules/explanation/pages/pricing-page/pricing-page.component.scss`

- [ ] **Step 1: 建立 pricing-page.component.ts**

```typescript
// apps/web/src/app/modules/explanation/pages/pricing-page/pricing-page.component.ts
import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '@shared/services/customization-reference.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss'],
})
export class PricingPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly priceByCategory = signal(this.refService.getPriceByCategory());

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '費用表 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/pricing`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '客變項目費用一覽表'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/pricing`);
  }
}
```

- [ ] **Step 2: 建立 pricing-page.component.html**

```html
<!-- apps/web/src/app/modules/explanation/pages/pricing-page/pricing-page.component.html -->
<section id="pricing" class="section">
  <app-customization-pricing [priceByCategory]="priceByCategory()" />
</section>
```

- [ ] **Step 3: 建立 pricing-page.component.scss (空樣式文件)**

```scss
// apps/web/src/app/modules/explanation/pages/pricing-page/pricing-page.component.scss
// 樣式交由 app-customization-pricing 組件管理
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/modules/explanation/pages/pricing-page/
git commit -m "feat: implement pricing-page component"
```

---

### Task 6: 實現 Equipment Page 組件

**Files:**
- Create: `apps/web/src/app/modules/explanation/pages/equipment-page/equipment-page.component.ts`
- Create: `apps/web/src/app/modules/explanation/pages/equipment-page/equipment-page.component.html`
- Create: `apps/web/src/app/modules/explanation/pages/equipment-page/equipment-page.component.scss`

- [ ] **Step 1: 建立 equipment-page.component.ts**

```typescript
// apps/web/src/app/modules/explanation/pages/equipment-page/equipment-page.component.ts
import { Component, Injector, signal } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { SEOServ } from '@core/services';
import { CustomizationReferenceService } from '@shared/services/customization-reference.service';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.scss'],
})
export class EquipmentPageComponent extends BBDBaseComponent {
  private readonly refService = this.injector.get(CustomizationReferenceService);
  private readonly seoServ = this.injector.get(SEOServ);

  readonly equipmentByCategory = signal(this.refService.getEquipmentByCategory());

  constructor(protected override injector: Injector) {
    super(injector);
    this._updateSeo();
  }

  private _updateSeo(): void {
    this.seoServ.updateMetaTags(
      '設備表 | 富華澐光',
      `${this.appEnv.siteServer}/explanation/equipment`,
      `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
      '標準設備與升級選項'
    );
    this.seoServ.updateCanonical(`${this.appEnv.siteServer}/explanation/equipment`);
  }
}
```

- [ ] **Step 2: 建立 equipment-page.component.html**

```html
<!-- apps/web/src/app/modules/explanation/pages/equipment-page/equipment-page.component.html -->
<section id="equipment" class="section">
  <app-customization-equipment [equipmentByCategory]="equipmentByCategory()" />
</section>
```

- [ ] **Step 3: 建立 equipment-page.component.scss (空樣式文件)**

```scss
// apps/web/src/app/modules/explanation/pages/equipment-page/equipment-page.component.scss
// 樣式交由 app-customization-equipment 組件管理
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/modules/explanation/pages/equipment-page/
git commit -m "feat: implement equipment-page component"
```

---

### Task 7: 更新 App Routing 配置

**Files:**
- Modify: `apps/web/src/app/app-routing.module.ts`

- [ ] **Step 1: 查看現有路由配置**

打開 `apps/web/src/app/app-routing.module.ts`，找到 routes array。

- [ ] **Step 2: 在 routes 中添加 explanation 路由**

在 routes array 中添加：

```typescript
{
  path: 'explanation',
  loadChildren: () =>
    import('./modules/explanation/explanation.module').then(
      (m) => m.ExplanationModule
    ),
},
```

完整的 routes 應該看起來像這樣（示例，根據實際情況調整）：

```typescript
const routes: Routes = [
  {
    path: '',
    component: DefaultContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      // ... 其他路由 ...
      {
        path: 'explanation',
        loadChildren: () =>
          import('./modules/explanation/explanation.module').then(
            (m) => m.ExplanationModule
          ),
      },
    ],
  },
];
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/app/app-routing.module.ts
git commit -m "feat: add explanation module route to app routing"
```

---

### Task 8: 更新導航數據結構

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.data.ts:9-20`

- [ ] **Step 1: 更新 NavSection 介面**

打開 `apps/web/src/app/modules/home/pages/default/default.data.ts`

找到 NavSection 介面：

```typescript
export interface NavSection {
  id: string;
  label: string;
}
```

更新為：

```typescript
export interface NavSection {
  id: string;
  label: string;
  route: string;
}
```

- [ ] **Step 2: 更新 NAV_SECTIONS 常數**

找到：

```typescript
export const NAV_SECTIONS: NavSection[] = [
  { id: 'principles', label: '客變原則' },
  { id: 'process', label: '客變流程' },
  { id: 'faq', label: '常見問題' },
  { id: 'fees', label: '費用表' },
  { id: 'equipment', label: '設備表' },
];
```

替換為：

```typescript
export const NAV_SECTIONS: NavSection[] = [
  { id: 'principles', label: '客變原則', route: '/explanation/principles' },
  { id: 'process', label: '客變流程', route: '/explanation/timeline' },
  { id: 'faq', label: '常見問題', route: '/explanation/faq' },
  { id: 'fees', label: '費用表', route: '/explanation/pricing' },
  { id: 'equipment', label: '設備表', route: '/explanation/equipment' },
];
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/app/modules/home/pages/default/default.data.ts
git commit -m "feat: update NavSection interface and NAV_SECTIONS with routes"
```

---

### Task 9: 更新首頁組件 (移除完整組件，保留簡化預覽)

**Files:**
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.html:27-32`
- Modify: `apps/web/src/app/modules/home/pages/default/default.component.ts` (可選，添加導航方法)

- [ ] **Step 1: 查看現有首頁模板**

打開 `apps/web/src/app/modules/home/pages/default/default.component.html`

找到：

```html
<!-- ─── Customization Reference Components ─── -->
<app-customization-principles [principles]="principles()" />
<app-customization-timeline [processSteps]="processSteps()" />
<app-customization-faq [faqGroups]="faqGroups()" />
<app-customization-pricing [priceByCategory]="priceByCategory()" />
<app-customization-equipment [equipmentByCategory]="equipmentByCategory()" />
```

- [ ] **Step 2: 替換為簡化版預覽與查看詳情按鈕**

替換上述內容為：

```html
<!-- ─── Customization Preview Sections ─── -->
<!-- 客變原則 預覽 -->
<section id="principles" class="preview-section">
  <div class="preview-section__container">
    <h2 class="preview-section__title">客變原則</h2>
    <p class="preview-section__description">瞭解客變的規則、限制與施工範圍</p>
    
    <!-- 簡化版：顯示 category icons grid -->
    <div class="principles-preview">
      <div *ngFor="let principle of principles()" class="principles-preview__item">
        <mat-icon class="principles-preview__icon">{{ principle.icon }}</mat-icon>
        <h3 class="principles-preview__name">{{ principle.title }}</h3>
      </div>
    </div>
    
    <a 
      [routerLink]="'/explanation/principles'" 
      target="_blank"
      class="btn btn-primary"
    >
      查看詳情
      <mat-icon>arrow_forward</mat-icon>
    </a>
  </div>
</section>

<!-- 客變流程 預覽 -->
<section id="process" class="preview-section">
  <div class="preview-section__container">
    <h2 class="preview-section__title">客變流程</h2>
    <p class="preview-section__description">了解從簽約到施工的完整流程</p>
    
    <!-- 簡化版：顯示步驟 circles 簡圖 -->
    <div class="timeline-preview">
      <div *ngFor="let step of processSteps()" class="timeline-preview__step">
        <div class="timeline-preview__circle">{{ step.stepNumber }}</div>
        <p class="timeline-preview__label">{{ step.label }}</p>
      </div>
    </div>
    
    <a 
      [routerLink]="'/explanation/timeline'" 
      target="_blank"
      class="btn btn-primary"
    >
      查看詳情
      <mat-icon>arrow_forward</mat-icon>
    </a>
  </div>
</section>

<!-- 常見問題 預覽 -->
<section id="faq" class="preview-section">
  <div class="preview-section__container">
    <h2 class="preview-section__title">常見問題</h2>
    <p class="preview-section__description">快速找到您想知道的答案</p>
    
    <!-- 簡化版：顯示前 3 個常見問題 -->
    <div class="faq-preview">
      <div *ngFor="let item of faqGroups()[0]?.items.slice(0, 3)" class="faq-preview__item">
        <p class="faq-preview__question">{{ item.q }}</p>
      </div>
    </div>
    
    <a 
      [routerLink]="'/explanation/faq'" 
      target="_blank"
      class="btn btn-primary"
    >
      查看詳情
      <mat-icon>arrow_forward</mat-icon>
    </a>
  </div>
</section>

<!-- 費用表 預覽 -->
<section id="fees" class="preview-section">
  <div class="preview-section__container">
    <h2 class="preview-section__title">費用表</h2>
    <p class="preview-section__description">瞭解各項客變的費用概況</p>
    
    <!-- 簡化版：顯示費用類別總覽 -->
    <div class="pricing-preview">
      <p class="pricing-preview__note">點擊「查看詳情」查看完整費用表</p>
    </div>
    
    <a 
      [routerLink]="'/explanation/pricing'" 
      target="_blank"
      class="btn btn-primary"
    >
      查看詳情
      <mat-icon>arrow_forward</mat-icon>
    </a>
  </div>
</section>

<!-- 設備表 預覽 -->
<section id="equipment" class="preview-section">
  <div class="preview-section__container">
    <h2 class="preview-section__title">設備表</h2>
    <p class="preview-section__description">標準設備與升級選項一覽</p>
    
    <!-- 簡化版：顯示設備類別 -->
    <div class="equipment-preview">
      <div *ngFor="let category of equipmentByCategory() | keyvalue" class="equipment-preview__category">
        <mat-icon>{{ getEquipmentIcon(category.key) }}</mat-icon>
        <p class="equipment-preview__label">{{ category.key }}</p>
      </div>
    </div>
    
    <a 
      [routerLink]="'/explanation/equipment'" 
      target="_blank"
      class="btn btn-primary"
    >
      查看詳情
      <mat-icon>arrow_forward</mat-icon>
    </a>
  </div>
</section>
```

- [ ] **Step 3: 在 default.component.ts 中添加工具方法**

打開 `apps/web/src/app/modules/home/pages/default/default.component.ts`

在 DefaultComponent class 中添加：

```typescript
getEquipmentIcon(category: string): string {
  const iconMap: Record<string, string> = {
    '廚具': 'kitchen',
    '衛浴': 'shower',
    '門窗': 'door_front',
    '電器': 'ac_unit',
    '五金': 'lock',
  };
  return iconMap[category] || 'build';
}
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/modules/home/pages/default/default.component.html apps/web/src/app/modules/home/pages/default/default.component.ts
git commit -m "feat: replace full customization components with preview sections and detail links"
```

---

### Task 10: 更新 Layout Navigation (改為 routerLink)

**Files:**
- Modify: `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.html:14-22, 38-46`
- Modify: `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts:83-108`

- [ ] **Step 1: 查看現有導航模板**

打開 `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.html`

找到：

```html
<a
  *ngFor="let section of navSections"
  href="#{{ section.id }}"
  class="topbar-public__nav-link"
  [attr.data-active]="currentSection === section.id"
  (click)="scrollToSection(section.id, $event)"
>
  {{ section.label }}
</a>
```

（出現 2 次，一次在 topbar-drawer__nav，一次在 topbar-public__nav）

- [ ] **Step 2: 替換導航為 routerLink**

替換第一個（topbar-drawer__nav）：

```html
<a
  *ngFor="let section of navSections"
  [routerLink]="section.route"
  target="_blank"
  class="topbar-drawer__nav-link"
>
  {{ section.label }}
</a>
```

替換第二個（topbar-public__nav）：

```html
<a
  *ngFor="let section of navSections"
  [routerLink]="section.route"
  target="_blank"
  class="topbar-public__nav-link"
>
  {{ section.label }}
</a>
```

- [ ] **Step 3: 移除 scrollToSection 邏輯**

打開 `apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts`

找到 `scrollToSection()` 方法並刪除：

```typescript
scrollToSection(id: string, event?: Event): void {
  event?.preventDefault();
  if (!this.isBrowser) return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeDrawer();
  }
}
```

- [ ] **Step 4: 移除 Section Intersection Observer 邏輯**

在 `ngAfterViewInit()` 中移除 `this._initSectionObserver()` 的調用：

```typescript
ngAfterViewInit(): void {
  if (!this.isBrowser) return;
  // 移除: this._initSectionObserver();
}
```

刪除整個 `_initSectionObserver()` 方法：

```typescript
private _initSectionObserver(): void {
  // 移除此方法
}
```

刪除 `currentSection` 和 `_observer` 屬性相關邏輯（如果只用於此目的）。

- [ ] **Step 5: 簡化組件 (可選移除不再需要的屬性)**

如果 `currentSection` 和 `_observer` 不再被使用，可以移除：

```typescript
currentSection = '';  // 移除
isDrawerOpen = false;
showNav = signal(false);

private _observer?: IntersectionObserver;  // 移除
```

- [ ] **Step 6: Commit**

```bash
git add apps/web/src/app/modules/_layout/pages/default-container/default-container.component.html apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts
git commit -m "feat: update navigation to use routerLink with target blank for explanation routes"
```

---

### Task 11: 測試路由導航與新標籤頁打開

**Files:**
- Test: `apps/web/src/app/modules/explanation/` (手動測試)

- [ ] **Step 1: 啟動開發伺服器**

```bash
npm start
# 或
ng serve
```

等待開發伺服器啟動。

- [ ] **Step 2: 測試首頁預覽區域**

在瀏覽器中打開 `http://localhost:4200`

- 驗證首頁顯示簡化版預覽（principles icons、timeline circles 等）
- 驗證「查看詳情」按鈕存在

- [ ] **Step 3: 測試導航 target="_blank"**

點擊首頁「查看詳情」按鈕：
- 驗證在新標籤頁打開 `/explanation/principles` 等路由
- 驗證新標籤頁顯示完整組件內容

點擊 header/drawer 的導航鏈接（「客變原則」等）：
- 驗證在新標籤頁打開對應的 `/explanation/*` 路由

- [ ] **Step 4: 測試各頁面的組件加載**

在各 `/explanation/*` 路由頁面：
- `/explanation/principles` — 驗證 customization-principles 組件正確加載與顯示
- `/explanation/timeline` — 驗證 customization-timeline 組件正確加載與顯示
- `/explanation/faq` — 驗證 customization-faq 組件正確加載與顯示
- `/explanation/pricing` — 驗證 customization-pricing 組件正確加載與顯示
- `/explanation/equipment` — 驗證 customization-equipment 組件正確加載與顯示

- [ ] **Step 5: 測試返回首頁與返回按鈕**

在各 `/explanation/*` 頁面：
- 驗證 header logo 或「返回首頁」按鈕能正確返回首頁
- 驗證新標籤頁可獨立操作（關閉不影響首頁）

- [ ] **Step 6: 檢查主題與樣式**

- 驗證頁面layout 正確（header、footer、navigation intact）
- 驗證組件樣式正常顯示（無破裂或布局錯誤）
- 驗證簡化預覽的樣式符合設計（如 icons grid、circles 等）

---

### Task 12: 驗證 SEO Meta Tags

**Files:**
- Verify: `apps/web/src/app/modules/explanation/pages/*.component.ts` (SEO 邏輯)

- [ ] **Step 1: 開啟瀏覽器開發者工具**

進入各 `/explanation/*` 路由頁面，打開 DevTools > Elements

- [ ] **Step 2: 檢查 meta tags**

驗證 `<head>` 中的 meta tags：

對於 `/explanation/principles`：
```html
<title>客變原則 | 富華澐光</title>
<meta name="description" content="瞭解客變規則、限制與施工範圍">
<meta name="og:title" content="客變原則 | 富華澐光">
<meta name="og:description" content="瞭解客變規則、限制與施工範圍">
<meta name="og:image" content="...og/tslmai.png">
<link rel="canonical" href="https://...../explanation/principles">
```

對於其他頁面（timeline、faq、pricing、equipment）進行類似驗證。

- [ ] **Step 3: 驗證 Canonical URL**

確認各頁面的 canonical URL 與當前路由一致。

- [ ] **Step 4: 驗證首頁 Meta Tags 未改變**

進入首頁 `http://localhost:4200`：
- 驗證 title 與 description 仍為首頁設定的值
- 驗證 og:image 仍指向首頁的 og image

---

### Task 13: 執行完整測試與最終驗證

**Files:**
- Test: 整體功能驗證

- [ ] **Step 1: 執行 ng lint**

```bash
ng lint
```

確保無 ESLint 錯誤或警告。

- [ ] **Step 2: 執行 ng build**

```bash
ng build --configuration production
```

確保 production build 無錯誤。

- [ ] **Step 3: 檢查 bundle size**

驗證新增的 explanation module 的 bundle size 合理（lazy-loaded）。

- [ ] **Step 4: 最終功能驗證**

在生產環境或 `ng serve` 中再次驗證：

- ✅ 首頁簡化預覽與導航正常
- ✅ 各 `/explanation/*` 路由正常加載與顯示
- ✅ target="_blank" 在新標籤頁打開
- ✅ SEO meta tags 正確設置
- ✅ 無控制台錯誤或警告

- [ ] **Step 5: 提交最終 commit**

```bash
git status  # 確保無未提交的更改
```

---

## 自我審查

**Spec 覆蓋：**
- ✅ 建立 Explanation Module 與路由配置 (Task 1)
- ✅ 建立 5 個子頁面組件 (Tasks 2-6)
- ✅ 更新 App Routing (Task 7)
- ✅ 更新導航數據結構 (Task 8)
- ✅ 更新首頁組件（簡化預覽 + 查看詳情按鈕） (Task 9)
- ✅ 更新 Layout Navigation (改為 routerLink) (Task 10)
- ✅ 測試路由與新標籤頁打開 (Task 11)
- ✅ 驗證 SEO Meta Tags (Task 12)
- ✅ 執行完整測試與最終驗證 (Task 13)

**佔位符掃描：**
- ✅ 無 TBD、TODO、未定義的類型或方法
- ✅ 所有代碼步驟包含完整的實現
- ✅ 所有測試步驟包含具體的驗證方法

**類型一致性：**
- ✅ `NavSection` 介面在所有使用處一致 (含 `route` 欄位)
- ✅ 路由路徑一致 (`/explanation/principles` 等)
- ✅ SEO 方法調用一致 (`_updateSeo()`)
- ✅ 組件命名一致 (`*-page.component.ts`)

---

## 執行選項

**計劃已完成並保存至 `docs/superpowers/plans/2026-05-27-explanation-routing-implementation.md`**

### 兩種執行方式：

**1. Subagent-Driven (推薦)** — 我為每個 Task 派發一個獨立 subagent，Task 間有審查檢查，快速迭代
  - 適合複雜度較高或想邊開發邊驗證的情境

**2. Inline Execution** — 在當前 session 中執行 Tasks，批次化執行 + 檢查點

**哪種方式？**