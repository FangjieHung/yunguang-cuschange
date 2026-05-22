# CMS 後台管理系統｜設計規格

> **版本：** v1.0  
> **日期：** 2026-05-23  
> **項目：** 富華澐光客變系統 - 後台管理系統  
> **狀態：** 待審批  

---

## 目錄

1. [概述](#概述)
2. [系統架構](#系統架構)
3. [核心模組結構](#核心模組結構)
4. [角色與權限設計](#角色與權限設計)
5. [視覺設計系統](#視覺設計系統)
6. [數據流與狀態管理](#數據流與狀態管理)
7. [權限守卫與安全](#權限守卫與安全)
8. [核心功能流程](#核心功能流程)
9. [測試策略](#測試策略)
10. [技術棧與初期任務](#技術棧與初期任務)

---

## 概述

CMS 後台管理系統是為富華澐光客變系統的管理端，服務 5 個不同角色的用戶（系統管理員、建案管理員、業務人員、審核人員、唯讀觀察員），提供建案管理、買家帳號管理、申請審核、通知發送、報表匯出等核心功能。

### 設計原則

- **獨立數據庫**：CMS 擁有完全獨立的數據庫，買家前端通過 API 讀取
- **模塊化架構**：功能按業務域劃分，便於並行開發和維護
- **角色優先**：UI 層根據用戶角色提供差異化體驗，特別優化業務人員手機場景
- **繼承視覺語言**：複用 apps/web/customization 的設計系統（色彩、排版、組件）
- **Mock-First 開發**：初期使用 Mock API，後續對接真實後端

---

## 系統架構

### 高層架構

```
┌─────────────────────────────────────┐
│      Angular CMS 前端                │
│  (apps/cms, Angular 16+, Signals)   │
└────────────┬────────────────────────┘
             │
    ┌────────┴────────┐
    ▼                 ▼
┌─────────────┐  ┌──────────────┐
│ Mock API    │  │ 真實 API     │
│ (開發階段)  │  │ (後續對接)   │
└─────────────┘  └──────────────┘
```

### 數據持久化策略

| 階段 | API 來源 | 環境配置 | 說明 |
|------|---------|--------|------|
| 開發初期（Phase 1） | Mock API | `environment.useMockApi = true` | Mock 數據驅動開發 |
| 後期集成 | 真實後端 | `environment.useMockApi = false` | 對接後端服務 |

---

## 核心模組結構

### 目錄組織

```
apps/cms/
├── src/app/
│   ├── core/                          # 核心服務層
│   │   ├── auth/                      # 認證、權限守卫
│   │   │   ├── auth.service.ts
│   │   │   └── role.guard.ts
│   │   ├── api/                       # HTTP 客戶端
│   │   │   ├── api.service.ts
│   │   │   ├── mock-api.service.ts
│   │   │   └── mock-data.ts           # Mock 數據（風格同 customization.data.ts）
│   │   ├── state/                     # 全局狀態管理（Signals）
│   │   │   └── cms.store.ts
│   │   └── audit/                     # 審計日誌
│   │       └── audit.service.ts
│   │
│   ├── shared/                        # 共用組件、工具
│   │   ├── components/
│   │   │   ├── app-topbar/
│   │   │   ├── app-sidebar/
│   │   │   └── ...
│   │   ├── directives/
│   │   │   └── has-permission.directive.ts
│   │   ├── pipes/
│   │   │   └── mask-id.pipe.ts
│   │   └── utils/
│   │
│   ├── modules/
│   │   ├── dashboard/                 # 儀表板（全棟戶況概览）
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.component.html
│   │   │   └── dashboard.component.scss
│   │   ├── project-mgmt/              # 建案管理
│   │   │   ├── project-list/
│   │   │   ├── project-edit/
│   │   │   └── material-config/
│   │   ├── buyer-mgmt/                # 買家帳號管理
│   │   │   ├── buyer-list/
│   │   │   ├── buyer-detail/
│   │   │   └── batch-import/
│   │   ├── application-review/        # 申請審核工作流
│   │   │   ├── application-list/
│   │   │   ├── application-detail/
│   │   │   └── review-form/
│   │   ├── notifications/             # 通知管理
│   │   │   ├── send-notification/
│   │   │   └── notification-history/
│   │   └── reports/                   # 報表匯出
│   │       └── reports.component.ts
│   │
│   ├── features/                      # 角色特定功能
│   │   └── business-operator/         # 業務人員專屬手機視圖
│   │       ├── quick-search/
│   │       ├── today-reminder/
│   │       └── status-overview/
│   │
│   ├── app-routing.module.ts          # 主路由
│   ├── app.component.ts               # 根組件
│   └── app.module.ts
│
└── styles/
    └── _tokens.scss                   # 設計 Token（色彩、排版、間距）
```

### 模塊職責

| 模塊 | 功能 | 主要頁面 |
|------|------|--------|
| **dashboard** | 全棟戶況總覽、統計圖表 | Dashboard、Statistics |
| **project-mgmt** | 建案基本資料、截止日、材質品項 | Project List、Project Edit、Material Config |
| **buyer-mgmt** | 買家批次匯入、查看資料、重設密碼 | Buyer List、Buyer Detail、Batch Import |
| **application-review** | 申請列表、審核表單、留言、複確認流程 | Application List、Application Detail、Review Form |
| **notifications** | 發送通知（全棟/單戶）、通知紀錄 | Send Notification、Notification History |
| **reports** | 申請報表、費用彙整匯出 | Report Builder、Export |
| **business-operator** | 業務快查頁（手機優化）| Quick Search、Today's Reminders、Status Overview |

---

## 角色與權限設計

### 5 個角色定義

| 角色代碼 | 角色名稱 | 典型使用者 | 主要工作裝置 |
|---------|--------|----------|------------|
| ROLE-01 | 系統管理員 | 建商 IT / 工程人員 | 桌機 |
| ROLE-02 | 建案管理員 | 建商專案負責人 | 桌機 |
| ROLE-03 | 業務人員 | 銷售業務 | 📱 手機為主 |
| ROLE-04 | 審核人員 | 工務/設計審圖人員 | 桌機 |
| ROLE-05 | 唯讀觀察員 | 高層主管、財務 | 桌機 |

### 功能權限矩陣

| 功能 | ROLE-01 | ROLE-02 | ROLE-03 | ROLE-04 | ROLE-05 |
|------|:-------:|:-------:|:-------:|:-------:|:-------:|
| **建案管理** | | | | | |
| 新增/刪除建案 | ✅ | ❌ | ❌ | ❌ | ❌ |
| 編輯建案設定 | ✅ | ✅ | ❌ | ❌ | ❌ |
| 上傳材質品項 | ✅ | ✅ | ❌ | ❌ | ❌ |
| 設定截止日期 | ✅ | ✅ | ❌ | ❌ | ❌ |
| **買家帳號管理** | | | | | |
| 批次匯入買家名單 | ✅ | ✅ | ❌ | ❌ | ❌ |
| 查看買家基本資料 | ✅ | ✅ | ✅（限本案） | ❌ | ❌ |
| 重設買家密碼 | ✅ | ✅ | ✅（限本案） | ❌ | ❌ |
| **申請審核** | | | | | |
| 查看申請列表 | ✅ | ✅ | ✅（唯讀） | ✅ | ✅（唯讀） |
| 審核申請（核准/退件） | ✅ | ✅ | ❌ | ✅ | ❌ |
| 批次審核 | ✅ | ✅ | ❌ | ✅ | ❌ |
| 留言給買家 | ✅ | ✅ | ✅ | ✅ | ❌ |
| **通知發送** | | | | | |
| 對全棟發通知 | ✅ | ✅ | ❌ | ❌ | ❌ |
| 對單戶發通知 | ✅ | ✅ | ✅ | ❌ | ❌ |
| **報表匯出** | | | | | |
| 匯出全棟申請報表 | ✅ | ✅ | ❌ | ❌ | ✅（唯讀） |
| 匯出費用彙整 | ✅ | ✅ | ❌ | ❌ | ✅（唯讀） |
| **儀表板** | | | | | |
| 全棟戶況總覽 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 數據分析儀表板 | ✅ | ✅ | ❌ | ❌ | ✅ |

### 導航菜單（按角色）

**ROLE-01、ROLE-02、ROLE-04、ROLE-05（桌機版）：**
```
📊 Dashboard (全部/本案數據)
🏢 Project Management 
👥 Buyer Management
📋 Application Review
📢 Notifications
📊 Reports
⚙️ System Settings (ROLE-01 only)
```

**ROLE-03（業務人員，手機優化）：**
```
🔍 Quick Search (首頁)
👥 Buyer Management (本案)
📋 Application List (唯讀)
📢 Send Notification
[返回快查]
```

---

## 視覺設計系統

### 色彩系統（繼承自 customization）

```scss
// 核心色彩
--color-primary: #3b6cf2;              // 主色（藍）
--color-success: #4caf50;              // 成功（綠）
--color-warning: #fff4d6;              // 警告（黃）
--color-danger: #a52525;               // 危險（紅）

// 狀態指示
--status-draft: #fff4d6;               // 草稿
--status-review: #fff4d6;              // 審核中
--status-approved: #d6f5e3;            // 已批准
--status-rework: #ffe1e1;              // 返工/拒絕
--status-confirmed: #d6f5e3;           // 已確認

// 中性色
--color-surface: #ffffff;
--color-surface-variant: #f4f6fa;
--color-on-surface: #333333;
```

### 排版系統（Material Design 3）

```scss
--font-display-2: 32px / 600;          // 大標題
--font-headline-md: 28px / 500;        // 次標題
--font-title-lg: 22px / 500;           // 卡片標題
--font-body-lg: 16px / 400;            // 段落大
--font-body-md: 14px / 400;            // 段落中
--font-eyebrow: 12px / 600;            // 標籤
```

### 間距系統

```scss
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 20px;
--spacing-xxl: 24px;
```

### 佈局規範

**桌機版主容器：**
- 頂欄：h=60px
- 側邊欄：w=80px（圖標模式）
- 主內容區：flex: 1, overflow: auto
- 卡片：padding 20-24px, border-radius 8px

**手機版（業務人員）：**
- 頂欄：h=48px
- 側邊欄：隱藏
- 按鈕最小高度：44px（易點擊）
- 卡片寬度：100vw - padding

---

## 數據流與狀態管理

### 核心數據模型

```typescript
// 建案
interface Project {
  id: string;
  name: string;           // 富華澐光
  code: string;
  status: 'active' | 'closed';
  startDate: string;
  endDate: string;
  totalUnits: number;
}

// 買家
interface Buyer {
  id: string;
  projectId: string;
  unitNo: string;         // 12F-A1
  ownerName: string;
  ownerIdLast4: string;   // 脫敏存儲
  phone: string;
  email?: string;
  layout: string;
  size: number;
  floor: number;
  facing: string;
}

// 申請
interface Application {
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

// 申請項目
interface ApplicationItem {
  id: string;
  code: string;           // G-01
  name: string;
  category: string;       // 格局類
  location: string;
  fee: number;
  description?: string;
  attachmentUrls?: string[];
}

// 通知
interface Notification {
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
```

### 狀態管理（Signal-based）

採用 Angular 16+ 的 Signal API 實現全局狀態管理：

```typescript
@Injectable({ providedIn: 'root' })
export class CmsStore {
  // 認證狀態
  private readonly currentUserSignal = signal<User | null>(null);
  private readonly currentRoleSignal = signal<Role | null>(null);
  currentUser = this.currentUserSignal.asReadonly();
  currentRole = this.currentRoleSignal.asReadonly();

  // 建案狀態
  private readonly projectsSignal = signal<Project[]>([]);
  private readonly activeProjectIdSignal = signal<string | null>(null);
  projects = this.projectsSignal.asReadonly();
  activeProject = computed(() => {
    const id = this.activeProjectIdSignal();
    return this.projectsSignal().find(p => p.id === id);
  });

  // 申請狀態
  private readonly applicationsSignal = signal<Application[]>([]);
  applications = this.applicationsSignal.asReadonly();
  
  // 計算儀表板統計數據
  dashboardStats = computed(() => {
    const apps = this.applicationsSignal();
    return {
      totalSubmitted: apps.filter(a => a.status !== 'draft').length,
      underReview: apps.filter(a => a.status === 'under-review').length,
      approved: apps.filter(a => a.status === 'approved').length,
      needsRework: apps.filter(a => a.status === 'rework').length,
      totalAddOn: apps.reduce((sum, a) => sum + a.totalAddOn, 0),
      totalRefund: apps.reduce((sum, a) => sum + a.totalRefund, 0),
    };
  });

  // 方法
  loadProjects(projects: Project[]) { ... }
  setActiveProject(projectId: string) { ... }
  loadApplications(applications: Application[]) { ... }
  updateApplication(id: string, updates: Partial<Application>) { ... }
  setCurrentUser(user: User) { ... }
}
```

### 數據流

```
用戶交互 (Click, Form Submit)
    ↓
組件調用 Store 方法
    ↓
Store 更新 Signal
    ↓
Computed 自動重新計算
    ↓
模板綁定 (async | 變化偵測)
    ↓
視圖重新渲染
```

### API 層（Mock + 真實分離）

```typescript
// 接口抽象
interface IApiService {
  getProjects(): Observable<Project[]>;
  getApplications(projectId: string): Observable<Application[]>;
  reviewApplication(id: string, decision: string, comment: string): Observable<Application>;
  // ...
}

// Mock 實現（開發階段）
class MockApiService implements IApiService {
  getProjects(): Observable<Project[]> {
    return of(MOCK_PROJECTS).pipe(delay(500));
  }
  // ...
}

// 真實實現（後續）
class HttpApiService implements IApiService {
  constructor(private http: HttpClient) {}
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API_URL}/projects`);
  }
  // ...
}

// 環境配置決定使用哪個實現
export const apiProvider = environment.useMockApi 
  ? { provide: IApiService, useClass: MockApiService }
  : { provide: IApiService, useClass: HttpApiService };
```

---

## 權限守卫與安全

### 路由級權限守卫

```typescript
export function roleGuard(allowedRoles: Role[]): CanActivateFn {
  return (route, state) => {
    const store = inject(CmsStore);
    const router = inject(Router);
    
    const currentRole = store.currentRole();
    if (!currentRole || !allowedRoles.includes(currentRole)) {
      router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  };
}

// 使用
const routes: Routes = [
  {
    path: 'application/review',
    component: ApplicationReviewComponent,
    canActivate: [roleGuard(['ROLE-01', 'ROLE-02', 'ROLE-04'])],
  },
];
```

### 指令級權限控制

```typescript
@Directive({
  selector: '[cmsHasPermission]',
  standalone: true,
})
export class HasPermissionDirective {
  @Input() set cmsHasPermission(requiredRoles: Role[]) {
    const currentRole = this.store.currentRole();
    if (currentRole && requiredRoles.includes(currentRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  // ...
}

<!-- 使用 -->
<button *cmsHasPermission="['ROLE-01', 'ROLE-02', 'ROLE-04']">
  核准申請
</button>
```

### 審計日誌

每項關鍵操作記錄：

```typescript
interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;              // 'REVIEW_APPROVED', 'SENT_NOTIFICATION'
  resourceType: string;        // 'application', 'project'
  resourceId: string;
  resourceName: string;
  changes?: Array<{ field: string; oldValue: any; newValue: any }>;
  timestamp: string;
  ipAddress?: string;
}
```

記錄操作：審核申請、發送通知、修改建案、匯入買家、重設密碼等。

### 敏感信息脫敏

- 買家身份證：僅存儲末 4 碼（`ownerIdLast4`）
- 電話號碼：顯示時遮蔽中間位數
- 模板管道：`maskId` 管道實現可重用脫敏邏輯

---

## 核心功能流程

### 申請審核工作流

```
買家提交申請
    ↓
[系統驗證]
  ✓ 未超截止日
  ✓ 無格式錯誤
  ✓ 所需附件完整
    ↓
[自動路由審核]
  格局類 → 工務審核人員
  水電類 → 水電審核人員
  發送通知：審核人員
    ↓
[審核人員查看]
  申請明細
  圖面附件
  系統警示
  歷史紀錄
    ↓
[審核決定]
  ├─ 核准 → 進入複確認流程
  ├─ 退件 → 買家收到通知，修改後重新提交
  └─ 待溝通 → 業務跟進
    ↓
[買家收到通知]
  LINE / Email / 系統內消息
```

### 複確認流程

```
[已核准申請]
    ↓
[管理員發起複確認]
  單戶或批次
  設定確認截止日（通常 7 天）
    ↓
[買家收到通知]
  進入「施工前複確認」頁面
    ↓
[買家選擇]
  ├─ 「確認同意施工」
  │   → 狀態改為「複確認完成」
  │   → 紀錄時間戳
  │   → 此後無法修改申請
  │
  ├─ 「有疑問」
  │   → 狀態改為「複確認待溝通」
  │   → 業務收到通知
  │
  └─ [超過截止日未回應]
      → 系統自動確認
      → 紀錄「自動確認」標記
```

### 通知發送流程

```
[後台人員點擊發送通知]
    ↓
[填寫通知內容]
  標題、內容、渠道、目標
    ↓
[驗證]
  接收者清單、內容格式
    ↓
[草稿 → 排期 → 發送]
  草稿可編輯
  排期後不可修改
  發送後記錄時間戳
    ↓
[買家端接收]
  LINE 推送
  Email 郵件
  系統「通知」分頁
    ↓
[後台記錄]
  誰發送、何時、發給誰、接收狀態
```

---

## 測試策略

### 單元測試

- **Store 邏輯**：Signal 更新、Computed 計算正確性
- **權限守卫**：測試路由守卫和指令級權限控制
- **管道和指令**：脫敏管道、權限指令的輸出

### 集成測試

- **權限工作流**：不同角色的訪問限制
- **數據流**：Store 更新→模板綁定→視圖渲染
- **Mock API**：驗證數據加載和狀態同步

### E2E 測試（關鍵場景）

- **申請審核完整流程**：查看 → 審核 → 提交 → 驗證狀態更新
- **權限控制**：驗證不同角色的菜單和操作限制
- **通知發送**：創建 → 驗證 → 確認發送

### 可訪問性測試

- ARIA 標籤和語義 HTML
- 鍵盤導航支持
- 色彩對比度符合 WCAG

---

## 技術棧與初期任務

### 技術棧

| 層級 | 技術 | 備註 |
|------|------|------|
| **前端框架** | Angular 16+ | 同 apps/web |
| **狀態管理** | Signal API | Angular 原生，無額外依賴 |
| **UI 組件** | Angular Material | 同 apps/web |
| **樣式** | SCSS + Tailwind | 同 apps/web |
| **HTTP** | HttpClient | 原生 Angular |
| **表單** | Reactive Forms | 原生 Angular |
| **路由** | Angular Router | 原生 Angular |
| **API** | Mock Service + HttpClient | 環境配置切換 |

### 初期任務劃分

**Phase 1：基礎架構與認證（Week 1-2）**
- [ ] 清空 apps/cms，初始化 Angular 項目
- [ ] 創建目錄結構和共用組件庫
- [ ] 實現 CmsStore（Signal-based 狀態管理）
- [ ] 實現認證服務和路由守卫
- [ ] 創建 Mock API 和數據模型

**Phase 2：核心頁面（Week 3-4）**
- [ ] Dashboard（儀表板）
- [ ] Project Management（建案管理）
- [ ] Buyer Management（買家帳號）
- [ ] Application List（申請列表）

**Phase 3：審核工作流（Week 5-6）**
- [ ] Application Detail 和 Review Form
- [ ] 複確認流程頁面
- [ ] 審核邏輯和留言功能
- [ ] 自動路由審核（業務邏輯）

**Phase 4：通知與報表（Week 7-8）**
- [ ] 通知發送模組
- [ ] 報表和匯出功能
- [ ] 業務人員手機版優化

**Phase 5：測試與優化（Week 9-10）**
- [ ] 單元測試和集成測試
- [ ] E2E 測試關鍵流程
- [ ] 性能優化和可訪問性檢查
- [ ] 生產環境部署準備

---

## 審批狀態

- **設計提案**：✅ 已完成
- **用戶審批**：⏳ 待審批
- **實現計劃**：⏳ 待生成

---

## 附錄

### A. 角色視圖示例

**業務人員手機首頁：**
```
┌──────────────────────────────────────┐
│ CMS 業務快查                          │
├──────────────────────────────────────┤
│ [搜尋戶號/姓名__________________] 🔍 │
├──────────────────────────────────────┤
│ 📅 今日到期提醒                      │
│ ⚠️ 3 戶 冷氣管線截止今日             │
│ ⚠️ 7 戶 格局申請截止明日             │
├──────────────────────────────────────┤
│ 🔴 待處理                            │
│ 🔴 退件補件中  5 戶  [查看]          │
│ 🟡 待買家確認  8 戶  [查看]          │
├──────────────────────────────────────┤
│ [查看全棟狀態] [發送通知]             │
└──────────────────────────────────────┘
```

### B. 設計令牌（SCSS）

參考 apps/web 的設計系統，在 `apps/cms/styles/_tokens.scss` 中定義所有色彩、排版、間距令牌，確保跨組件一致性。

### C. 權限矩陣完整參考

見上文「角色與權限設計」部分。

---

**文檔版本歷史：**
| 版本 | 日期 | 變更 |
|------|------|------|
| v1.0 | 2026-05-23 | 初版：完整設計規格 |
