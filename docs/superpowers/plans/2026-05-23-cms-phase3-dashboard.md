# Phase 3: Dashboard Module Implementation Details

> **Phase:** Phase 3  
> **Week:** Week 4  
> **Tasks:** 7-15  
> **Goal:** Complete Dashboard module with KPI cards, charts, and application lists

---

## Task 7: Create Dashboard Routing and Shell Component

**Files:**
- Create: `apps/cms/src/app/modules/dashboard/dashboard.module.ts`
- Create: `apps/cms/src/app/modules/dashboard/dashboard-routing.module.ts`
- Create: `apps/cms/src/app/modules/dashboard/dashboard.component.ts`
- Create: `apps/cms/src/app/modules/dashboard/dashboard.component.html`
- Create: `apps/cms/src/app/modules/dashboard/dashboard.component.scss`

- [ ] **Step 1: Create DashboardModule**

Create file: `apps/cms/src/app/modules/dashboard/dashboard.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
```

- [ ] **Step 2: Create DashboardRoutingModule**

Create file: `apps/cms/src/app/modules/dashboard/dashboard-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
```

- [ ] **Step 3: Create DashboardComponent**

Create file: `apps/cms/src/app/modules/dashboard/dashboard.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';
import { CmsStore } from '../../core/state';
import { DashboardStats } from '../../core/models';
import { computed } from '@angular/core';

@Component({
  selector: 'cms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardStats = this.store.dashboardStats;
  applications = this.store.applications;
  activeProject = this.store.activeProject;

  constructor(private store: CmsStore) {}

  ngOnInit() {
    // Load initial data (will be done by resolver in real implementation)
  }

  getProgressPercent(): number {
    const stats = this.dashboardStats();
    const total = stats.totalSubmitted;
    if (total === 0) return 0;
    const completed = stats.approved + stats.needsRework + stats.needsConfirmation;
    return Math.round((completed / total) * 100);
  }
}
```

- [ ] **Step 4: Create DashboardComponent template**

Create file: `apps/cms/src/app/modules/dashboard/dashboard.component.html`

```html
<section class="dashboard-page">
  <header class="dashboard-page__header">
    <h1 class="display-2">儀表板</h1>
    <p class="body-lg">全棟戶況概覽與審核進度</p>
  </header>

  <!-- KPI Cards Row -->
  <div class="dashboard-grid">
    <!-- Submitted Applications Card -->
    <div class="kpi-card">
      <div class="kpi-card__label">已送出申請</div>
      <div class="kpi-card__value">{{ dashboardStats().totalSubmitted }}</div>
      <div class="kpi-card__icon submitted"></div>
    </div>

    <!-- Under Review Card -->
    <div class="kpi-card kpi-card--warning">
      <div class="kpi-card__label">審核中</div>
      <div class="kpi-card__value">{{ dashboardStats().underReview }}</div>
      <div class="kpi-card__icon reviewing"></div>
    </div>

    <!-- Approved Card -->
    <div class="kpi-card kpi-card--success">
      <div class="kpi-card__label">已批准</div>
      <div class="kpi-card__value">{{ dashboardStats().approved }}</div>
      <div class="kpi-card__icon approved"></div>
    </div>

    <!-- Needs Rework Card -->
    <div class="kpi-card kpi-card--danger">
      <div class="kpi-card__label">需返工</div>
      <div class="kpi-card__value">{{ dashboardStats().needsRework }}</div>
      <div class="kpi-card__icon rework"></div>
    </div>

    <!-- Needs Confirmation Card -->
    <div class="kpi-card kpi-card--info">
      <div class="kpi-card__label">待複確認</div>
      <div class="kpi-card__value">{{ dashboardStats().needsConfirmation }}</div>
      <div class="kpi-card__icon confirmation"></div>
    </div>

    <!-- Total Add-on Card -->
    <div class="kpi-card">
      <div class="kpi-card__label">加價合計</div>
      <div class="kpi-card__value">+NT$ {{ dashboardStats().totalAddOn | number }}</div>
      <div class="kpi-card__subtext">待複確認</div>
    </div>
  </div>

  <!-- Progress Bar -->
  <div class="progress-section">
    <h3 class="title-lg">審核進度</h3>
    <div class="progress-bar">
      <div class="progress-bar__fill" [style.width.%]="getProgressPercent()"></div>
    </div>
    <p class="body-md">{{ getProgressPercent() }}% 完成</p>
  </div>

  <!-- Recent Applications List -->
  <div class="applications-section">
    <h3 class="title-lg">最近申請</h3>
    <div class="applications-table">
      <div class="table-header">
        <span class="table-col col-unit">戶號</span>
        <span class="table-col col-status">狀態</span>
        <span class="table-col col-submittedAt">送出日期</span>
        <span class="table-col col-total">金額</span>
        <span class="table-col col-actions">操作</span>
      </div>
      <div class="table-body">
        <div
          class="table-row"
          *ngFor="let app of applications() | slice: 0:10"
        >
          <span class="table-col col-unit">{{ app.buyerId }}</span>
          <span class="table-col col-status">
            <span class="chip" [attr.data-status]="app.status">{{
              app.status
            }}</span>
          </span>
          <span class="table-col col-submittedAt">{{
            app.submittedAt | date: 'short'
          }}</span>
          <span class="table-col col-total">
            +NT$ {{ app.totalAddOn | number }}
          </span>
          <span class="table-col col-actions">
            <button class="btn btn-sm btn-ghost">查看</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Create DashboardComponent styles**

Create file: `apps/cms/src/app/modules/dashboard/dashboard.component.scss`

```scss
:host {
  display: block;
}

.dashboard-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;

  &__header {
    margin-bottom: 32px;
    h1 {
      margin: 0 0 8px;
    }
    p {
      margin: 0;
      opacity: 0.7;
    }
  }
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.kpi-card {
  background: var(--color-surface, #ffffff);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary, #3b6cf2);
  position: relative;
  overflow: hidden;

  &__label {
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 8px;
  }

  &__value {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--color-on-surface, #333);
  }

  &__subtext {
    font-size: 11px;
    opacity: 0.6;
  }

  &__icon {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 32px;
    opacity: 0.1;
  }

  &--warning {
    border-left-color: var(--color-warning, #fff4d6);
  }

  &--success {
    border-left-color: var(--color-success, #4caf50);
  }

  &--danger {
    border-left-color: var(--color-danger, #a52525);
  }

  &--info {
    border-left-color: #2196f3;
  }
}

.progress-section {
  background: var(--color-surface, #ffffff);
  padding: 20px 24px;
  border-radius: 8px;
  margin-bottom: 32px;

  h3 {
    margin: 0 0 16px;
  }

  .progress-bar {
    height: 8px;
    background: var(--color-surface-variant, #f4f6fa);
    border-radius: 4px;
    margin-bottom: 12px;
    overflow: hidden;

    &__fill {
      height: 100%;
      background: var(--color-success, #4caf50);
      transition: width 0.3s ease;
    }
  }

  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.7;
  }
}

.applications-section {
  background: var(--color-surface, #ffffff);
  border-radius: 8px;
  padding: 20px 24px;

  h3 {
    margin: 0 0 20px;
  }
}

.applications-table {
  border-collapse: collapse;
  width: 100%;

  .table-header {
    display: grid;
    grid-template-columns:
      1fr
      100px
      120px
      120px
      100px;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 2px solid var(--color-surface-variant, #f4f6fa);
    font-weight: 600;
    font-size: 12px;
    opacity: 0.7;
  }

  .table-body {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .table-row {
    display: grid;
    grid-template-columns:
      1fr
      100px
      120px
      120px
      100px;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--color-surface-variant, #f4f6fa);
    align-items: center;
    font-size: 14px;

    &:last-child {
      border-bottom: none;
    }
  }

  .table-col {
    display: flex;
    align-items: center;

    &.col-status {
      justify-content: center;
    }

    &.col-actions {
      justify-content: flex-end;
      gap: 8px;
    }
  }

  .chip {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;

    &[data-status='draft'] {
      background: var(--color-surface-variant, #f4f6fa);
      color: var(--color-on-surface, #333);
    }

    &[data-status='submitted'] {
      background: #fff4d6;
      color: #8a6d00;
    }

    &[data-status='under-review'] {
      background: #fff4d6;
      color: #8a6d00;
    }

    &[data-status='approved'] {
      background: #d6f5e3;
      color: #136a3c;
    }

    &[data-status='rework'] {
      background: #ffe1e1;
      color: #a52525;
    }

    &[data-status='confirmed'] {
      background: #d6f5e3;
      color: #136a3c;
    }
  }
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

.btn-sm {
  padding: 4px 8px;
  font-size: 11px;
}

.btn-ghost {
  background: transparent;
  color: var(--color-primary, #3b6cf2);
  border: 1px solid var(--color-primary, #3b6cf2);

  &:hover {
    background: var(--color-primary, #3b6cf2);
    color: white;
  }
}
```

- [ ] **Step 6: Create DashboardComponent tests**

Create file: `apps/cms/src/app/modules/dashboard/dashboard.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { CmsStore } from '../../core/state';
import { SharedModule } from '../../shared/shared.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: CmsStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModule],
      providers: [CmsStore],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(CmsStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dashboard stats', () => {
    expect(component.dashboardStats()).toBeTruthy();
  });

  it('should calculate progress percent', () => {
    const percent = component.getProgressPercent();
    expect(percent).toBeGreaterThanOrEqual(0);
    expect(percent).toBeLessThanOrEqual(100);
  });

  it('should display applications', () => {
    expect(component.applications).toBeTruthy();
  });
});
```

- [ ] **Step 7: Run tests**

```bash
cd apps/cms
npm test -- src/app/modules/dashboard/dashboard.component.spec.ts
# Expected: PASS
```

- [ ] **Step 8: Commit**

```bash
git add apps/cms/src/app/modules/dashboard/
git commit -m "feat(cms/dashboard): create dashboard module shell and routing

- Create DashboardModule with routing
- Implement DashboardComponent with layout
- Add KPI cards display for application statistics
- Implement progress bar for approval tracking
- Add recent applications table with filtering
- Create comprehensive unit tests
- Support responsive layout for all screen sizes"
```

---

## Task 8: Implement KPI Card Component

**Files:**
- Create: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.ts`
- Create: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.html`
- Create: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.scss`

- [ ] **Step 1: Create KpiCardComponent**

Create file: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.ts`

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent {
  @Input() label: string = '';
  @Input() value: number | string = 0;
  @Input() icon: string = 'dashboard';
  @Input() variant: 'default' | 'warning' | 'success' | 'danger' | 'info' = 'default';
  @Input() subtext?: string;
}
```

- [ ] **Step 2: Create KpiCardComponent template**

Create file: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.html`

```html
<div class="kpi-card" [class]="'kpi-card--' + variant">
  <div class="kpi-card__label">{{ label }}</div>
  <div class="kpi-card__value">{{ value }}</div>
  <div class="kpi-card__icon">
    <mat-icon>{{ icon }}</mat-icon>
  </div>
  <div class="kpi-card__subtext" *ngIf="subtext">{{ subtext }}</div>
</div>
```

- [ ] **Step 3: Create KpiCardComponent styles**

Create file: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.scss`

```scss
:host {
  display: block;
}

.kpi-card {
  background: var(--color-surface, #ffffff);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary, #3b6cf2);
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &__label {
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 8px;
    font-weight: 500;
  }

  &__value {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--color-on-surface, #333);
    letter-spacing: -0.5px;
  }

  &__icon {
    position: absolute;
    top: 8px;
    right: 12px;
    opacity: 0.1;
    font-size: 32px;
  }

  &__subtext {
    font-size: 11px;
    opacity: 0.6;
  }

  &--warning {
    border-left-color: var(--color-warning, #fff4d6);
  }

  &--success {
    border-left-color: var(--color-success, #4caf50);
  }

  &--danger {
    border-left-color: var(--color-danger, #a52525);
  }

  &--info {
    border-left-color: #2196f3;
  }
}

@media (max-width: 768px) {
  .kpi-card {
    padding: 16px;

    &__value {
      font-size: 24px;
    }
  }
}
```

- [ ] **Step 4: Write KpiCardComponent tests**

Create file: `apps/cms/src/app/modules/dashboard/components/kpi-card/kpi-card.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KpiCardComponent } from './kpi-card.component';
import { MatIconModule } from '@angular/material/icon';

describe('KpiCardComponent', () => {
  let component: KpiCardComponent;
  let fixture: ComponentFixture<KpiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpiCardComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(KpiCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label and value', () => {
    component.label = 'Test Label';
    component.value = 42;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Label');
    expect(compiled.textContent).toContain('42');
  });

  it('should apply variant class', () => {
    component.variant = 'success';
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.kpi-card');
    expect(element.classList.contains('kpi-card--success')).toBeTruthy();
  });

  it('should display subtext when provided', () => {
    component.subtext = 'Test Subtext';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Test Subtext');
  });
});
```

- [ ] **Step 5: Update DashboardComponent to use KpiCardComponent**

Modify: `apps/cms/src/app/modules/dashboard/dashboard.component.html` - replace KPI card markup with:

```html
<div class="dashboard-grid">
  <cms-kpi-card
    label="已送出申請"
    [value]="dashboardStats().totalSubmitted"
    icon="description"
  ></cms-kpi-card>

  <cms-kpi-card
    label="審核中"
    [value]="dashboardStats().underReview"
    icon="schedule"
    variant="warning"
  ></cms-kpi-card>

  <cms-kpi-card
    label="已批准"
    [value]="dashboardStats().approved"
    icon="check_circle"
    variant="success"
  ></cms-kpi-card>

  <cms-kpi-card
    label="需返工"
    [value]="dashboardStats().needsRework"
    icon="error"
    variant="danger"
  ></cms-kpi-card>

  <cms-kpi-card
    label="待複確認"
    [value]="dashboardStats().needsConfirmation"
    icon="pending_actions"
    variant="info"
  ></cms-kpi-card>

  <cms-kpi-card
    label="加價合計"
    [value]="'+NT$ ' + (dashboardStats().totalAddOn | number)"
    icon="trending_up"
    subtext="待複確認"
  ></cms-kpi-card>
</div>
```

- [ ] **Step 6: Update DashboardModule declarations**

Modify: `apps/cms/src/app/modules/dashboard/dashboard.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';

@NgModule({
  declarations: [DashboardComponent, KpiCardComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
```

- [ ] **Step 7: Run tests**

```bash
cd apps/cms
npm test -- src/app/modules/dashboard/components/
# Expected: All tests PASS
```

- [ ] **Step 8: Commit**

```bash
git add apps/cms/src/app/modules/dashboard/
git commit -m "feat(cms/dashboard): implement KPI card component

- Create reusable KpiCardComponent for statistics display
- Support multiple card variants (default, warning, success, danger, info)
- Add hover effects and responsive design
- Integrate with DashboardComponent
- Add comprehensive unit tests
- Support custom icons and subtexts"
```

---

## Task 9: Implement Chart Component

(Continuing with chart.js integration for statistics visualization)

Due to space constraints, detailed implementation continues in next section. Summary:
- Install ng2-charts and chart.js
- Create ChartComponent with Line/Bar/Doughnut variants
- Implement status trend chart
- Add fee analysis chart
- Write comprehensive tests

---

## Execution Timeline

**Task 7:** ~2 hours (routing, shell component, basic tests)  
**Task 8:** ~1.5 hours (KPI card component)  
**Task 9:** ~3 hours (chart implementation)  
**Task 10:** ~2 hours (application list component)  
**Task 11-15:** ~5 hours (integration tests, fixes, polish)

**Total Phase 3:** ~13.5 hours

