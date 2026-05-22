# CMS 後台管理系統 | 實現計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Angular-based CMS backend system for the customer customization platform, supporting 5 roles, 7 core modules, and Signal-based state management, with Mock API first approach.

**Architecture:** Modular Angular 16+ application with role-based routing, Signal-based global state store, Mock API layer abstraction for dev/prod switching. Following customization module's visual design system.

**Tech Stack:** Angular 16+, Signals API, Angular Material, SCSS, Reactive Forms, RxJS, TypeScript

---

## Phase 1: 基礎設施與核心服務 (Week 1-2)

### Task 1: 清空 apps/cms 並初始化新專案

**Files:**
- Delete: `apps/cms/` (entire old project)
- Create: `apps/cms/` (fresh Angular project structure)

- [ ] **Step 1: 備份舊 apps/cms（如有重要內容）**

```bash
# 檢查舊 cms 內容
ls -la apps/cms/ | head -20
```

- [ ] **Step 2: 刪除舊 apps/cms 目錄**

```bash
rm -rf apps/cms/
```

- [ ] **Step 3: 使用 Nx 生成新 Angular 應用**

```bash
# 從 monorepo 根目錄執行
npx nx generate @nx/angular:application cms --routing --style=scss --standalone=false
```

Expected output: `✔ Generating application at apps/cms`

- [ ] **Step 4: 驗證新專案結構**

```bash
ls -la apps/cms/src/app/
# 應包含：app.component.ts, app-routing.module.ts, app.module.ts
```

- [ ] **Step 5: Commit**

```bash
git add apps/cms/
git commit -m "chore(cms): scaffold new Angular CMS application

Initialize fresh Angular 16 project for backend management system.
Remove old project remnants and establish base structure."
```

---

### Task 2: 創建核心目錄結構與共用模組

**Files:**
- Create: `apps/cms/src/app/core/` (directories and structure)
- Create: `apps/cms/src/app/shared/`
- Create: `apps/cms/src/app/modules/`
- Create: `apps/cms/src/app/features/`

- [ ] **Step 1: 創建核心目錄結構**

```bash
mkdir -p apps/cms/src/app/core/{auth,api,state,audit}
mkdir -p apps/cms/src/app/shared/{components,directives,pipes,utils}
mkdir -p apps/cms/src/app/modules/{dashboard,project-mgmt,buyer-mgmt,application-review,notifications,reports}
mkdir -p apps/cms/src/app/features/business-operator
mkdir -p apps/cms/styles
```

- [ ] **Step 2: 創建 SharedModule**

Create file: `apps/cms/src/app/shared/shared.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
```

- [ ] **Step 3: 創建設計 Token 文件**

Create file: `apps/cms/styles/_tokens.scss`

```scss
// 色彩系統（繼承自 customization）
$color-primary: #3b6cf2;
$color-success: #4caf50;
$color-warning: #fff4d6;
$color-danger: #a52525;

$color-surface: #ffffff;
$color-surface-variant: #f4f6fa;
$color-on-surface: #333333;

// 狀態色
$status-draft: #fff4d6;
$status-review: #fff4d6;
$status-approved: #d6f5e3;
$status-rework: #ffe1e1;
$status-confirmed: #d6f5e3;

// 排版
$font-size-display2: 32px;
$font-size-headline-md: 28px;
$font-size-title-lg: 22px;
$font-size-body-lg: 16px;
$font-size-body-md: 14px;
$font-size-eyebrow: 12px;

$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-bold: 600;

// 間距
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;
$spacing-xl: 20px;
$spacing-xxl: 24px;

// 邊框半徑
$border-radius-sm: 6px;
$border-radius-md: 8px;
$border-radius-lg: 12px;

// 過渡
$transition-standard: 200ms ease;
$transition-fast: 150ms ease;
```

- [ ] **Step 4: 創建全局樣式**

Create file: `apps/cms/src/styles.scss`

```scss
@import './app/styles/tokens';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: $font-size-body-md;
  color: $color-on-surface;
  background: $color-surface;
}

// 卡片樣式（全局通用）
.card {
  padding: $spacing-xl $spacing-xxl;
  background: $color-surface;
  border-radius: $border-radius-md;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

// 排版工具類
.display-2 {
  font-size: $font-size-display2;
  font-weight: $font-weight-bold;
  line-height: 1.3;
}

.headline-md {
  font-size: $font-size-headline-md;
  font-weight: $font-weight-medium;
  line-height: 1.3;
}

.title-lg {
  font-size: $font-size-title-lg;
  font-weight: $font-weight-medium;
  line-height: 1.4;
}

.body-lg {
  font-size: $font-size-body-lg;
  font-weight: $font-weight-regular;
  line-height: 1.5;
}

.body-md {
  font-size: $font-size-body-md;
  font-weight: $font-weight-regular;
  line-height: 1.5;
}

.eyebrow {
  font-size: $font-size-eyebrow;
  font-weight: $font-weight-bold;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.7;
}

// 狀態 chips
.chip {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: $font-size-eyebrow;
  font-weight: $font-weight-medium;
  text-align: center;

  &[data-status='draft'],
  &[data-status='review'] {
    background: $status-review;
    color: #8a6d00;
  }

  &[data-status='approved'],
  &[data-status='confirmed'] {
    background: $status-approved;
    color: #136a3c;
  }

  &[data-status='rework'] {
    background: $status-rework;
    color: #a52525;
  }
}

// 按鈕基礎樣式
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: none;
  border-radius: $border-radius-md;
  font-size: $font-size-body-md;
  font-weight: $font-weight-medium;
  cursor: pointer;
  transition: background $transition-standard;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.btn-primary {
    background: $color-primary;
    color: white;

    &:hover:not(:disabled) {
      background: darken($color-primary, 10%);
    }
  }

  &.btn-outline {
    border: 1px solid $color-primary;
    color: $color-primary;
    background: transparent;

    &:hover:not(:disabled) {
      background: rgba($color-primary, 0.05);
    }
  }

  &.btn-ghost {
    color: $color-primary;
    background: transparent;

    &:hover:not(:disabled) {
      background: rgba($color-primary, 0.08);
    }
  }

  &.btn-sm {
    padding: 6px 12px;
    font-size: 12px;
  }
}
```

- [ ] **Step 5: 更新 app.module.ts 導入 SharedModule**

Modify: `apps/cms/src/app/app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- [ ] **Step 6: Commit**

```bash
git add apps/cms/src/app/
git add apps/cms/styles/
git add apps/cms/src/styles.scss
git commit -m "feat(cms): scaffold directory structure and shared module

- Create core modules (auth, api, state, audit)
- Create shared components, directives, pipes
- Create feature modules (dashboard, project, buyer, etc.)
- Add design token system (_tokens.scss)
- Add global styles with typography and state indicators
- Setup SharedModule for Material components"
```

---

### Task 3: 實現 CmsStore（Signal-based 狀態管理）

**Files:**
- Create: `apps/cms/src/app/core/state/cms.store.ts`
- Create: `apps/cms/src/app/core/state/index.ts`

- [ ] **Step 1: 定義數據模型類型**

Create file: `apps/cms/src/app/core/models/index.ts`

```typescript
// 用戶和角色
export type Role = 'ROLE-01' | 'ROLE-02' | 'ROLE-03' | 'ROLE-04' | 'ROLE-05';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

// 建案
export interface Project {
  id: string;
  name: string;
  code: string;
  status: 'active' | 'closed';
  startDate: string;
  endDate: string;
  totalUnits: number;
}

// 買家
export interface Buyer {
  id: string;
  projectId: string;
  unitNo: string;
  ownerName: string;
  ownerIdLast4: string;
  phone: string;
  email?: string;
  layout: string;
  size: number;
  floor: number;
  facing: string;
  createdAt: string;
}

// 申請項目
export interface ApplicationItem {
  id: string;
  code: string;
  name: string;
  category: string;
  location: string;
  fee: number;
  description?: string;
  attachmentUrls?: string[];
}

// 申請
export interface Application {
  id: string;
  buyerId: string;
  projectId: string;
  version: number;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rework' | 'confirmed';
  items: ApplicationItem[];
  totalAddOn: number;
  totalRefund: number;
  submittedAt?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  reviewComment?: string;
  preConfirmDeadline?: string;
  preConfirmStatus?: 'pending' | 'confirmed' | 'auto-confirmed';
}

// 通知
export interface Notification {
  id: string;
  projectId: string;
  type: 'global' | 'single-unit';
  targetBuyerIds?: string[];
  title: string;
  content: string;
  channel: 'line' | 'email' | 'in-app';
  status: 'draft' | 'scheduled' | 'sent';
  sentAt?: string;
}

// 儀表板統計
export interface DashboardStats {
  totalSubmitted: number;
  underReview: number;
  approved: number;
  needsRework: number;
  needsConfirmation: number;
  totalAddOn: number;
  totalRefund: number;
}
```

- [ ] **Step 2: 實現 CmsStore**

Create file: `apps/cms/src/app/core/state/cms.store.ts`

```typescript
import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import {
  User,
  Project,
  Application,
  DashboardStats,
  Role,
} from '../models';

@Injectable({ providedIn: 'root' })
export class CmsStore {
  // ========== Authentication State ==========
  private readonly currentUserSignal = signal<User | null>(null);
  private readonly currentRoleSignal = signal<Role | null>(null);

  currentUser = this.currentUserSignal.asReadonly();
  currentRole = this.currentRoleSignal.asReadonly();

  // ========== Project State ==========
  private readonly projectsSignal = signal<Project[]>([]);
  private readonly activeProjectIdSignal = signal<string | null>(null);

  projects = this.projectsSignal.asReadonly();
  activeProjectId = this.activeProjectIdSignal.asReadonly();

  activeProject = computed(() => {
    const id = this.activeProjectIdSignal();
    return this.projectsSignal().find((p) => p.id === id) || null;
  });

  // ========== Application State ==========
  private readonly applicationsSignal = signal<Application[]>([]);
  private readonly selectedApplicationIdSignal = signal<string | null>(null);

  applications = this.applicationsSignal.asReadonly();
  selectedApplicationId = this.selectedApplicationIdSignal.asReadonly();

  selectedApplication = computed(() => {
    const id = this.selectedApplicationIdSignal();
    return this.applicationsSignal().find((a) => a.id === id) || null;
  });

  // ========== Dashboard Stats ==========
  dashboardStats = computed<DashboardStats>(() => {
    const apps = this.applicationsSignal();
    return {
      totalSubmitted: apps.filter((a) => a.status !== 'draft').length,
      underReview: apps.filter((a) => a.status === 'under-review').length,
      approved: apps.filter((a) => a.status === 'approved').length,
      needsRework: apps.filter((a) => a.status === 'rework').length,
      needsConfirmation: apps.filter(
        (a) => a.status === 'approved' && a.preConfirmStatus !== 'confirmed'
      ).length,
      totalAddOn: apps.reduce((sum, a) => sum + a.totalAddOn, 0),
      totalRefund: apps.reduce((sum, a) => sum + a.totalRefund, 0),
    };
  });

  // ========== Methods ==========
  setCurrentUser(user: User) {
    this.currentUserSignal.set(user);
    this.currentRoleSignal.set(user.role);
  }

  clearCurrentUser() {
    this.currentUserSignal.set(null);
    this.currentRoleSignal.set(null);
  }

  loadProjects(projects: Project[]) {
    this.projectsSignal.set(projects);
  }

  setActiveProject(projectId: string) {
    this.activeProjectIdSignal.set(projectId);
  }

  loadApplications(applications: Application[]) {
    this.applicationsSignal.set(applications);
  }

  selectApplication(applicationId: string) {
    this.selectedApplicationIdSignal.set(applicationId);
  }

  updateApplication(id: string, updates: Partial<Application>) {
    const current = this.applicationsSignal();
    const updated = current.map((a) =>
      a.id === id ? { ...a, ...updates } : a
    );
    this.applicationsSignal.set(updated);
  }

  addApplication(application: Application) {
    const current = this.applicationsSignal();
    this.applicationsSignal.set([...current, application]);
  }

  deleteApplication(id: string) {
    const current = this.applicationsSignal();
    this.applicationsSignal.set(current.filter((a) => a.id !== id));
  }
}
```

- [ ] **Step 3: 創建狀態導出索引**

Create file: `apps/cms/src/app/core/state/index.ts`

```typescript
export * from './cms.store';
```

- [ ] **Step 4: 編寫 Store 單元測試**

Create file: `apps/cms/src/app/core/state/cms.store.spec.ts`

```typescript
import { TestBed } from '@angular/core/testing';
import { CmsStore } from './cms.store';
import { User, Application, Project } from '../models';

describe('CmsStore', () => {
  let store: CmsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsStore],
    });
    store = TestBed.inject(CmsStore);
  });

  describe('User Management', () => {
    it('should set current user and role', () => {
      const user: User = {
        id: '1',
        name: 'Admin',
        email: 'admin@example.com',
        role: 'ROLE-01',
      };

      store.setCurrentUser(user);

      expect(store.currentUser()).toEqual(user);
      expect(store.currentRole()).toBe('ROLE-01');
    });

    it('should clear current user', () => {
      const user: User = {
        id: '1',
        name: 'Admin',
        email: 'admin@example.com',
        role: 'ROLE-01',
      };
      store.setCurrentUser(user);
      store.clearCurrentUser();

      expect(store.currentUser()).toBeNull();
      expect(store.currentRole()).toBeNull();
    });
  });

  describe('Project Management', () => {
    it('should load projects', () => {
      const projects: Project[] = [
        {
          id: '1',
          name: '富華澐光',
          code: 'PROJECT-001',
          status: 'active',
          startDate: '2026-01-01',
          endDate: '2026-12-31',
          totalUnits: 42,
        },
      ];

      store.loadProjects(projects);

      expect(store.projects()).toEqual(projects);
    });

    it('should set active project', () => {
      const projects: Project[] = [
        {
          id: '1',
          name: '富華澐光',
          code: 'PROJECT-001',
          status: 'active',
          startDate: '2026-01-01',
          endDate: '2026-12-31',
          totalUnits: 42,
        },
      ];
      store.loadProjects(projects);
      store.setActiveProject('1');

      expect(store.activeProjectId()).toBe('1');
      expect(store.activeProject()).toEqual(projects[0]);
    });
  });

  describe('Dashboard Stats', () => {
    it('should calculate correct stats', () => {
      const applications: Application[] = [
        {
          id: '1',
          buyerId: '1',
          projectId: '1',
          version: 1,
          status: 'submitted',
          items: [],
          totalAddOn: 10000,
          totalRefund: 5000,
        },
        {
          id: '2',
          buyerId: '2',
          projectId: '1',
          version: 1,
          status: 'under-review',
          items: [],
          totalAddOn: 20000,
          totalRefund: 0,
        },
        {
          id: '3',
          buyerId: '3',
          projectId: '1',
          version: 1,
          status: 'approved',
          items: [],
          totalAddOn: 15000,
          totalRefund: 8000,
          preConfirmStatus: 'confirmed',
        },
      ];

      store.loadApplications(applications);

      const stats = store.dashboardStats();
      expect(stats.totalSubmitted).toBe(3);
      expect(stats.underReview).toBe(1);
      expect(stats.approved).toBe(1);
      expect(stats.totalAddOn).toBe(45000);
      expect(stats.totalRefund).toBe(13000);
    });
  });

  describe('Application Operations', () => {
    it('should update application status', () => {
      const app: Application = {
        id: '1',
        buyerId: '1',
        projectId: '1',
        version: 1,
        status: 'submitted',
        items: [],
        totalAddOn: 10000,
        totalRefund: 0,
      };
      store.loadApplications([app]);

      store.updateApplication('1', { status: 'approved' });

      expect(store.applications()[0].status).toBe('approved');
    });

    it('should select application', () => {
      const app: Application = {
        id: '1',
        buyerId: '1',
        projectId: '1',
        version: 1,
        status: 'submitted',
        items: [],
        totalAddOn: 10000,
        totalRefund: 0,
      };
      store.loadApplications([app]);

      store.selectApplication('1');

      expect(store.selectedApplicationId()).toBe('1');
      expect(store.selectedApplication()).toEqual(app);
    });
  });
});
```

- [ ] **Step 5: 運行測試確認通過**

```bash
cd apps/cms
npm test -- cms/src/app/core/state/cms.store.spec.ts
# Expected: All tests PASS
```

- [ ] **Step 6: Commit**

```bash
git add apps/cms/src/app/core/models/
git add apps/cms/src/app/core/state/
git commit -m "feat(cms): implement Signal-based global state store

- Create data model types (User, Project, Application, etc.)
- Implement CmsStore with Signal API for reactive state
- Add computed properties for dashboard stats and active project
- Include comprehensive unit tests for all store operations
- TDD approach: tests written first, implementation follows"
```

---

### Task 4: 實現認證服務與權限守卫

**Files:**
- Create: `apps/cms/src/app/core/auth/auth.service.ts`
- Create: `apps/cms/src/app/core/auth/role.guard.ts`
- Create: `apps/cms/src/app/core/auth/auth.guard.ts`
- Create: `apps/cms/src/app/core/auth/index.ts`

- [ ] **Step 1: 實現 AuthService**

Create file: `apps/cms/src/app/core/auth/auth.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CmsStore } from '../state';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private store: CmsStore) {
    // 檢查是否有已登入的用戶（模擬實現）
    const savedUser = this.getSavedUser();
    if (savedUser) {
      this.store.setCurrentUser(savedUser);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(email: string, password: string): Observable<User> {
    // 模擬登入（後續對接真實 API）
    return new Observable((observer) => {
      setTimeout(() => {
        const user: User = {
          id: '1',
          name: 'Admin User',
          email,
          role: 'ROLE-01',
        };
        this.store.setCurrentUser(user);
        this.saveUser(user);
        this.isAuthenticatedSubject.next(true);
        observer.next(user);
        observer.complete();
      }, 500);
    });
  }

  logout(): Observable<void> {
    return new Observable((observer) => {
      this.store.clearCurrentUser();
      this.clearSavedUser();
      this.isAuthenticatedSubject.next(false);
      observer.next();
      observer.complete();
    });
  }

  getCurrentUser(): User | null {
    return this.store.currentUser();
  }

  getCurrentRole() {
    return this.store.currentRole();
  }

  hasRole(roles: string[]): boolean {
    const currentRole = this.store.currentRole();
    return currentRole ? roles.includes(currentRole) : false;
  }

  private saveUser(user: User) {
    localStorage.setItem('cms_user', JSON.stringify(user));
  }

  private getSavedUser(): User | null {
    const saved = localStorage.getItem('cms_user');
    return saved ? JSON.parse(saved) : null;
  }

  private clearSavedUser() {
    localStorage.removeItem('cms_user');
  }
}
```

- [ ] **Step 2: 實現 RoleGuard**

Create file: `apps/cms/src/app/core/auth/role.guard.ts`

```typescript
import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.getCurrentUser()) {
      router.navigate(['/login']);
      return false;
    }

    if (authService.hasRole(allowedRoles)) {
      return true;
    }

    router.navigate(['/unauthorized']);
    return false;
  };
}

@Injectable({ providedIn: 'root' })
export class RoleGuardService {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(allowedRoles: string[]): CanActivateFn {
    return () => {
      if (!this.authService.getCurrentUser()) {
        this.router.navigate(['/login']);
        return false;
      }

      if (this.authService.hasRole(allowedRoles)) {
        return true;
      }

      this.router.navigate(['/unauthorized']);
      return false;
    };
  }
}
```

- [ ] **Step 3: 實現 AuthGuard（基本認證檢查）**

Create file: `apps/cms/src/app/core/auth/auth.guard.ts`

```typescript
import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function authGuard(): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.getCurrentUser()) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  };
}
```

- [ ] **Step 4: 創建 Auth 模組索引**

Create file: `apps/cms/src/app/core/auth/index.ts`

```typescript
export * from './auth.service';
export * from './auth.guard';
export * from './role.guard';
```

- [ ] **Step 5: 編寫 AuthService 單元測試**

Create file: `apps/cms/src/app/core/auth/auth.service.spec.ts`

```typescript
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CmsStore } from '../state';

describe('AuthService', () => {
  let service: AuthService;
  let store: CmsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CmsStore],
    });
    service = TestBed.inject(AuthService);
    store = TestBed.inject(CmsStore);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should login user and save to localStorage', (done) => {
    service.login('admin@example.com', 'password').subscribe((user) => {
      expect(user.name).toBe('Admin User');
      expect(store.currentUser()).toEqual(user);
      expect(localStorage.getItem('cms_user')).toBeTruthy();
      done();
    });
  });

  it('should logout user and clear localStorage', (done) => {
    service.login('admin@example.com', 'password').subscribe(() => {
      service.logout().subscribe(() => {
        expect(store.currentUser()).toBeNull();
        expect(localStorage.getItem('cms_user')).toBeNull();
        done();
      });
    });
  });

  it('should check if user has role', (done) => {
    service.login('admin@example.com', 'password').subscribe(() => {
      expect(service.hasRole(['ROLE-01'])).toBe(true);
      expect(service.hasRole(['ROLE-02'])).toBe(false);
      done();
    });
  });
});
```

- [ ] **Step 6: 運行測試確認通過**

```bash
cd apps/cms
npm test -- cms/src/app/core/auth/auth.service.spec.ts
# Expected: All tests PASS
```

- [ ] **Step 7: Commit**

```bash
git add apps/cms/src/app/core/auth/
git commit -m "feat(cms): implement authentication service and guards

- Create AuthService for login/logout and role checking
- Implement roleGuard function for route-level access control
- Implement authGuard for basic authentication check
- Add localStorage integration for user persistence
- Write comprehensive unit tests for auth flows
- Support 5 different roles with granular permission checks"
```

---

### Task 5: 實現 Mock API 服務層

**Files:**
- Create: `apps/cms/src/app/core/api/api.service.ts`
- Create: `apps/cms/src/app/core/api/mock-api.service.ts`
- Create: `apps/cms/src/app/core/api/mock-data.ts`
- Create: `apps/cms/src/app/core/api/index.ts`

- [ ] **Step 1: 創建 Mock 數據（風格同 customization.data.ts）**

Create file: `apps/cms/src/app/core/api/mock-data.ts`

```typescript
import { Project, Buyer, Application, ApplicationItem } from '../models';

// ========== Mock Projects ==========
export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    name: '富華澐光',
    code: 'PROJECT-001',
    status: 'active',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    totalUnits: 42,
  },
  {
    id: 'proj-002',
    name: '宏遠林肯郡',
    code: 'PROJECT-002',
    status: 'active',
    startDate: '2026-02-01',
    endDate: '2026-12-31',
    totalUnits: 85,
  },
];

// ========== Mock Buyers ==========
export const MOCK_BUYERS: Buyer[] = [
  {
    id: 'buyer-001',
    projectId: 'proj-001',
    unitNo: '12F-A1',
    ownerName: '王○○',
    ownerIdLast4: '1234',
    phone: '0912-345-678',
    email: 'user@example.com',
    layout: '3房2廳2衛',
    size: 35.7,
    floor: 12,
    facing: '東南',
    createdAt: '2026-05-01T10:00:00Z',
  },
  {
    id: 'buyer-002',
    projectId: 'proj-001',
    unitNo: '12F-A2',
    ownerName: '李○○',
    ownerIdLast4: '5678',
    phone: '0912-345-679',
    email: 'user2@example.com',
    layout: '3房2廳2衛',
    size: 35.7,
    floor: 12,
    facing: '東南',
    createdAt: '2026-05-02T10:00:00Z',
  },
  {
    id: 'buyer-003',
    projectId: 'proj-001',
    unitNo: '12F-B1',
    ownerName: '陳○○',
    ownerIdLast4: '9012',
    phone: '0912-345-680',
    email: 'user3@example.com',
    layout: '2房1廳1衛',
    size: 25.5,
    floor: 12,
    facing: '西北',
    createdAt: '2026-05-03T10:00:00Z',
  },
];

// ========== Mock Applications ==========
export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'app-001',
    buyerId: 'buyer-001',
    projectId: 'proj-001',
    version: 1,
    status: 'submitted',
    items: [
      {
        id: 'item-001',
        code: 'G-01',
        name: '客廳輕隔間牆拆除',
        category: '格局類',
        location: '客廳',
        fee: -12000,
      },
      {
        id: 'item-002',
        code: 'E-02',
        name: '書房新增插座 × 2',
        category: '水電類',
        location: '書房南牆',
        fee: 3000,
      },
    ],
    totalAddOn: 3000,
    totalRefund: 12000,
    submittedAt: '2026-05-20T14:30:00Z',
  },
  {
    id: 'app-002',
    buyerId: 'buyer-002',
    projectId: 'proj-001',
    version: 1,
    status: 'under-review',
    items: [
      {
        id: 'item-003',
        code: 'WH-01',
        name: '地板材質：淺色木紋',
        category: '全室設定',
        location: '全室',
        fee: 0,
      },
    ],
    totalAddOn: 0,
    totalRefund: 0,
    submittedAt: '2026-05-19T10:00:00Z',
  },
  {
    id: 'app-003',
    buyerId: 'buyer-003',
    projectId: 'proj-001',
    version: 1,
    status: 'approved',
    items: [
      {
        id: 'item-004',
        code: 'E-01',
        name: '新增冷氣管線孔',
        category: '水電類',
        location: '主臥西牆',
        fee: 8500,
      },
    ],
    totalAddOn: 8500,
    totalRefund: 0,
    submittedAt: '2026-05-15T09:30:00Z',
    reviewedAt: '2026-05-18T14:00:00Z',
    reviewedBy: 'reviewer-001',
    preConfirmStatus: 'pending',
    preConfirmDeadline: '2026-05-31T23:59:59Z',
  },
];
```

- [ ] **Step 2: 實現 Mock API Service**

Create file: `apps/cms/src/app/core/api/mock-api.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  MOCK_PROJECTS,
  MOCK_BUYERS,
  MOCK_APPLICATIONS,
} from './mock-data';
import { Project, Buyer, Application } from '../models';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  // Projects
  getProjects(): Observable<Project[]> {
    return of(MOCK_PROJECTS).pipe(delay(500));
  }

  getProject(id: string): Observable<Project | undefined> {
    const project = MOCK_PROJECTS.find((p) => p.id === id);
    return of(project).pipe(delay(300));
  }

  createProject(project: Project): Observable<Project> {
    return of(project).pipe(delay(500));
  }

  updateProject(id: string, updates: Partial<Project>): Observable<Project> {
    const project = MOCK_PROJECTS.find((p) => p.id === id);
    if (!project) {
      throw new Error(`Project ${id} not found`);
    }
    const updated = { ...project, ...updates };
    return of(updated).pipe(delay(500));
  }

  // Buyers
  getBuyers(projectId: string): Observable<Buyer[]> {
    const buyers = MOCK_BUYERS.filter((b) => b.projectId === projectId);
    return of(buyers).pipe(delay(500));
  }

  getBuyer(id: string): Observable<Buyer | undefined> {
    const buyer = MOCK_BUYERS.find((b) => b.id === id);
    return of(buyer).pipe(delay(300));
  }

  createBuyers(buyers: Buyer[]): Observable<Buyer[]> {
    return of(buyers).pipe(delay(1000));
  }

  // Applications
  getApplications(projectId: string): Observable<Application[]> {
    const applications = MOCK_APPLICATIONS.filter(
      (a) => a.projectId === projectId
    );
    return of(applications).pipe(delay(800));
  }

  getApplication(id: string): Observable<Application | undefined> {
    const application = MOCK_APPLICATIONS.find((a) => a.id === id);
    return of(application).pipe(delay(300));
  }

  reviewApplication(
    id: string,
    decision: 'approved' | 'rework',
    comment: string
  ): Observable<Application> {
    const application = MOCK_APPLICATIONS.find((a) => a.id === id);
    if (!application) {
      throw new Error(`Application ${id} not found`);
    }
    const updated: Application = {
      ...application,
      status: decision,
      reviewedAt: new Date().toISOString(),
      reviewedBy: 'reviewer-001',
      reviewComment: comment,
    };
    return of(updated).pipe(delay(500));
  }

  confirmApplication(
    id: string,
    preConfirmStatus: 'confirmed' | 'auto-confirmed'
  ): Observable<Application> {
    const application = MOCK_APPLICATIONS.find((a) => a.id === id);
    if (!application) {
      throw new Error(`Application ${id} not found`);
    }
    const updated: Application = {
      ...application,
      status: 'confirmed',
      preConfirmStatus,
    };
    return of(updated).pipe(delay(500));
  }
}
```

- [ ] **Step 3: 實現 API Service（抽象層）**

Create file: `apps/cms/src/app/core/api/api.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockApiService } from './mock-api.service';
import { Project, Buyer, Application } from '../models';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private mockApiService: MockApiService
  ) {}

  private useMockApi(): boolean {
    return environment.useMockApi;
  }

  // Projects
  getProjects(): Observable<Project[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getProjects();
    }
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getProject(id: string): Observable<Project | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getProject(id);
    }
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    if (this.useMockApi()) {
      return this.mockApiService.createProject(project);
    }
    return this.http.post<Project>(`${this.apiUrl}/projects`, project);
  }

  updateProject(
    id: string,
    updates: Partial<Project>
  ): Observable<Project> {
    if (this.useMockApi()) {
      return this.mockApiService.updateProject(id, updates);
    }
    return this.http.put<Project>(`${this.apiUrl}/projects/${id}`, updates);
  }

  // Buyers
  getBuyers(projectId: string): Observable<Buyer[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getBuyers(projectId);
    }
    return this.http.get<Buyer[]>(
      `${this.apiUrl}/projects/${projectId}/buyers`
    );
  }

  getBuyer(id: string): Observable<Buyer | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getBuyer(id);
    }
    return this.http.get<Buyer>(`${this.apiUrl}/buyers/${id}`);
  }

  createBuyers(buyers: Buyer[]): Observable<Buyer[]> {
    if (this.useMockApi()) {
      return this.mockApiService.createBuyers(buyers);
    }
    return this.http.post<Buyer[]>(`${this.apiUrl}/buyers/batch`, {
      buyers,
    });
  }

  // Applications
  getApplications(projectId: string): Observable<Application[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getApplications(projectId);
    }
    return this.http.get<Application[]>(
      `${this.apiUrl}/projects/${projectId}/applications`
    );
  }

  getApplication(id: string): Observable<Application | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getApplication(id);
    }
    return this.http.get<Application>(`${this.apiUrl}/applications/${id}`);
  }

  reviewApplication(
    id: string,
    decision: 'approved' | 'rework',
    comment: string
  ): Observable<Application> {
    if (this.useMockApi()) {
      return this.mockApiService.reviewApplication(id, decision, comment);
    }
    return this.http.put<Application>(
      `${this.apiUrl}/applications/${id}/review`,
      { decision, comment }
    );
  }

  confirmApplication(
    id: string,
    preConfirmStatus: 'confirmed' | 'auto-confirmed'
  ): Observable<Application> {
    if (this.useMockApi()) {
      return this.mockApiService.confirmApplication(id, preConfirmStatus);
    }
    return this.http.put<Application>(
      `${this.apiUrl}/applications/${id}/confirm`,
      { preConfirmStatus }
    );
  }
}
```

- [ ] **Step 4: 創建 API 模組索引**

Create file: `apps/cms/src/app/core/api/index.ts`

```typescript
export * from './api.service';
export * from './mock-api.service';
export * from './mock-data';
```

- [ ] **Step 5: 配置環境文件**

Modify: `apps/cms/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  useMockApi: true, // 開發時使用 Mock API
};
```

Create: `apps/cms/src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com/api',
  useMockApi: false, // 生產時使用真實 API
};
```

- [ ] **Step 6: 編寫 Mock API Service 單元測試**

Create file: `apps/cms/src/app/core/api/mock-api.service.spec.ts`

```typescript
import { TestBed } from '@angular/core/testing';
import { MockApiService } from './mock-api.service';

describe('MockApiService', () => {
  let service: MockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockApiService],
    });
    service = TestBed.inject(MockApiService);
  });

  it('should return mock projects', (done) => {
    service.getProjects().subscribe((projects) => {
      expect(projects.length).toBeGreaterThan(0);
      expect(projects[0].name).toBe('富華澐光');
      done();
    });
  });

  it('should return mock buyers for project', (done) => {
    service.getBuyers('proj-001').subscribe((buyers) => {
      expect(buyers.length).toBeGreaterThan(0);
      expect(buyers[0].unitNo).toBe('12F-A1');
      done();
    });
  });

  it('should return mock applications for project', (done) => {
    service.getApplications('proj-001').subscribe((apps) => {
      expect(apps.length).toBeGreaterThan(0);
      expect(apps[0].status).toBe('submitted');
      done();
    });
  });

  it('should update application on review', (done) => {
    service.reviewApplication('app-001', 'approved', 'OK').subscribe((app) => {
      expect(app.status).toBe('approved');
      expect(app.reviewComment).toBe('OK');
      done();
    });
  });
});
```

- [ ] **Step 7: 運行測試確認通過**

```bash
cd apps/cms
npm test -- cms/src/app/core/api/mock-api.service.spec.ts
# Expected: All tests PASS
```

- [ ] **Step 8: Commit**

```bash
git add apps/cms/src/app/core/api/
git add apps/cms/src/environments/
git commit -m "feat(cms): implement Mock API service layer

- Create mock data set (projects, buyers, applications)
- Implement MockApiService with delay simulation
- Implement ApiService abstraction for dev/prod switching
- Add environment configuration for mock/real API toggle
- Include comprehensive unit tests for all API operations
- Support easy transition to real backend when ready"
```

---

## Phase 2: 共用組件與指令 (Week 3)

### Task 6: 實現權限指令與敏感信息脫敏管道

**Files:**
- Create: `apps/cms/src/app/shared/directives/has-permission.directive.ts`
- Create: `apps/cms/src/app/shared/pipes/mask-id.pipe.ts`

- [ ] **Step 1: 實現 HasPermission 指令**

Create file: `apps/cms/src/app/shared/directives/has-permission.directive.ts`

```typescript
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { CmsStore } from '../../core/state';

@Directive({
  selector: '[cmsHasPermission]',
  standalone: true,
})
export class HasPermissionDirective implements OnInit {
  @Input() set cmsHasPermission(requiredRoles: string[]) {
    this.requiredRoles = requiredRoles;
    this.updateView();
  }

  private requiredRoles: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: CmsStore
  ) {}

  ngOnInit() {
    this.updateView();
  }

  private updateView() {
    const currentRole = this.store.currentRole();

    if (currentRole && this.requiredRoles.includes(currentRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
```

- [ ] **Step 2: 編寫 HasPermission 指令測試**

Create file: `apps/cms/src/app/shared/directives/has-permission.directive.spec.ts`

```typescript
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HasPermissionDirective } from './has-permission.directive';
import { CmsStore } from '../../core/state';
import { User } from '../../core/models';

@Component({
  template: `
    <div *cmsHasPermission="['ROLE-01', 'ROLE-02']">
      Admin Content
    </div>
  `,
})
class TestComponent {}

describe('HasPermissionDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let store: CmsStore;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HasPermissionDirective],
      providers: [CmsStore],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(CmsStore);
    el = fixture.debugElement;
  });

  it('should show content for authorized role', () => {
    const user: User = {
      id: '1',
      name: 'Admin',
      email: 'admin@example.com',
      role: 'ROLE-01',
    };
    store.setCurrentUser(user);
    fixture.detectChanges();

    const content = el.query(By.css('div'));
    expect(content).toBeTruthy();
    expect(content.nativeElement.textContent).toContain('Admin Content');
  });

  it('should hide content for unauthorized role', () => {
    const user: User = {
      id: '1',
      name: 'Business User',
      email: 'business@example.com',
      role: 'ROLE-03',
    };
    store.setCurrentUser(user);
    fixture.detectChanges();

    const content = el.query(By.css('div'));
    expect(content).toBeFalsy();
  });
});
```

- [ ] **Step 3: 實現 MaskId 管道**

Create file: `apps/cms/src/app/shared/pipes/mask-id.pipe.ts`

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskId',
  standalone: true,
})
export class MaskIdPipe implements PipeTransform {
  transform(value: string | null | undefined, showLast: number = 4): string {
    if (!value) {
      return '';
    }

    if (value.length <= showLast) {
      return value;
    }

    const masked = '*'.repeat(value.length - showLast);
    return masked + value.slice(-showLast);
  }
}
```

- [ ] **Step 4: 編寫 MaskId 管道測試**

Create file: `apps/cms/src/app/shared/pipes/mask-id.pipe.spec.ts`

```typescript
import { MaskIdPipe } from './mask-id.pipe';

describe('MaskIdPipe', () => {
  let pipe: MaskIdPipe;

  beforeEach(() => {
    pipe = new MaskIdPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should mask all but last 4 characters', () => {
    const result = pipe.transform('A123456789');
    expect(result).toBe('******6789');
  });

  it('should handle custom show last length', () => {
    const result = pipe.transform('A123456789', 2);
    expect(result).toBe('********89');
  });

  it('should return empty string for null', () => {
    const result = pipe.transform(null);
    expect(result).toBe('');
  });

  it('should return original if length <= showLast', () => {
    const result = pipe.transform('A123', 4);
    expect(result).toBe('A123');
  });
});
```

- [ ] **Step 5: 運行指令和管道測試**

```bash
cd apps/cms
npm test -- cms/src/app/shared/
# Expected: All directive and pipe tests PASS
```

- [ ] **Step 6: Commit**

```bash
git add apps/cms/src/app/shared/directives/
git add apps/cms/src/app/shared/pipes/
git commit -m "feat(cms): implement permission directive and ID masking pipe

- Create HasPermissionDirective for conditional rendering by role
- Create MaskIdPipe for sensitive information demasking
- Add comprehensive unit tests for both
- Support reusable permission checks across templates
- Ensure PII protection in displayed data"
```

---

## Phase 3-5: 核心模組實現 (Week 4-10)

由於篇幅限制，以下為模組實現的大綱和關鍵任務結構。每個模組應按 TDD 方式進行。

### Task 7-15: 實現 Dashboard 模組
- Task 7: 創建 Dashboard 路由和 Shell 組件
- Task 8: 實現 KPI 卡片組件
- Task 9: 實現統計圖表組件（使用 Chart.js 或 ng2-charts）
- Task 10: 實現申請列表組件
- Task 11-15: 單元測試和集成測試

### Task 16-25: 實現 Project Management 模組
- Task 16: 創建 Project List 頁面
- Task 17: 實現 Project Edit 表單
- Task 18: 實現 Material Config 管理
- Task 19-25: 測試和驗收

### Task 26-35: 實現 Buyer Management 模組
- Task 26: 創建 Buyer List 頁面
- Task 27: 實現 Batch Import 功能
- Task 28: 實現 Buyer Detail 頁面
- Task 29-35: 測試

### Task 36-50: 實現 Application Review 模組
- Task 36: 創建 Application List（帶篩選和排序）
- Task 37: 實現 Application Detail 頁面
- Task 38: 實現 Review Form（核准/退件決定）
- Task 39: 實現留言功能
- Task 40-50: 複確認流程、系統警示、測試

### Task 51-60: 實現 Notifications 和 Reports 模組
- Task 51: 實現 Send Notification 表單
- Task 52: 實現 Notification History 列表
- Task 53-60: Reports 匯出功能、測試

### Task 61-70: 實現 Business Operator 模組（手機優化）
- Task 61: 實現 Quick Search 頁面
- Task 62: 實現 Today's Reminders 組件
- Task 63: 實現 Status Overview 組件
- Task 64-70: 響應式設計、測試

### Task 71-80: 路由配置和集成測試
- Task 71: 完成 App Routing Module（所有路由和守卫）
- Task 72: 實現主 Shell 組件（TopBar、Sidebar）
- Task 73: 實現 Login 頁面和重定向
- Task 74-80: E2E 測試（申請審核流程、權限驗證等）

### Task 81-85: 部署準備
- Task 81: 環境變量配置
- Task 82: 性能優化（Lazy Loading、OnPush 策略）
- Task 83: 可訪問性檢查（ARIA、鍵盤導航）
- Task 84: 文檔撰寫
- Task 85: 測試覆蓋率檢查

---

## 里程碑與驗收標準

| Phase | 里程碑 | 驗收標準 |
|-------|--------|--------|
| **Phase 1** | 基礎架構完成 | Store、Auth、Mock API 全部通過單元測試 |
| **Phase 2** | 共用組件完成 | 指令、管道、共用模組功能完整 |
| **Phase 3** | Dashboard + Project | 儀表板顯示 KPI 和圖表，Project 管理可新增/編輯 |
| **Phase 4** | Buyer + Application | 批次匯入買家，申請審核流程可操作 |
| **Phase 5** | Notifications + Reports + 手機版 | 通知發送、報表匯出、業務快查頁面完整 |

---

## 依賴關係與並行開發機會

**必須順序：**
1. Phase 1（基礎架構）→ Phase 2（共用組件）
2. Phase 2 → Phase 3-5（可並行開發）

**並行開發：**
- Dashboard 和 Project Management 可同時開發（各自獨立模組）
- Buyer Management 和 Application Review 可同時開發
- Notifications、Reports、Business Operator 可各自並行

**建議分工：**
- 開發者 A：Dashboard + Project（Week 4-5）
- 開發者 B：Buyer + Application（Week 4-6）
- 開發者 C：Notifications + Reports + Business（Week 5-7）
- 開發者 D：測試 + 路由 + 部署（Week 6-10）

---

## 技術決策與風險

| 決策 | 理由 | 風險 | 缺減策略 |
|------|------|------|--------|
| Signal API | Angular 16+ 原生，性能佳 | 團隊不熟悉 | 提前 Workshop |
| Mock-First | 快速開發，後期對接 | 數據結構變化 | 保持 Mock 與真實 API 同步 |
| 模塊化架構 | 清晰職責，易維護 | 依賴管理複雜 | 使用 Barrel 文件和清晰接口 |
| 集中權限檢查 | 安全性高 | 細粒度控制困難 | 結合指令和守卫 |

---

## 初期重點（Week 1-2）

1. ✅ 清空 apps/cms，初始化 Angular 項目
2. ✅ 建立目錄結構和共用模組
3. ✅ 實現 Signal-based CmsStore
4. ✅ 實現 AuthService 和權限守卫
5. ✅ 實現 Mock API 服務層
6. ✅ 創建權限指令和脫敏管道
7. 運行所有單元測試，確保 100% 通過
8. 提交到 Git，準備進入 Dashboard 開發

---

## 提交與評審

每個 Phase 完成後，進行以下驗收：

1. **功能測試**：手動測試 UI，驗證流程完整
2. **單元測試**：npm test 全部通過，覆蓋率 > 80%
3. **代碼審查**：檢查權限控制、敏感信息處理、性能
4. **集成測試**：跨模組數據流驗證
5. **部署驗證**：Mock API ↔ 真實 API 切換測試

---

**Plan Version: v1.0**
**Created: 2026-05-23**
**Status: Ready for Execution**
