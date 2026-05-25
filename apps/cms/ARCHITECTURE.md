# CMS System Architecture

## Table of Contents

- [Overview](#overview)
- [High-Level Architecture](#high-level-architecture)
- [Module Structure](#module-structure)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [API Integration](#api-integration)
- [Authentication & Authorization](#authentication--authorization)
- [Change Detection Strategy](#change-detection-strategy)
- [Performance Considerations](#performance-considerations)
- [Security Architecture](#security-architecture)

## Overview

The CMS is built following modern Angular architecture principles with emphasis on:

- **Modularity**: Feature-based module organization
- **Reactivity**: Signal-based state management
- **Performance**: OnPush change detection, lazy loading, tree-shaking
- **Maintainability**: Clear separation of concerns, comprehensive testing
- **Scalability**: Service-based architecture ready for growth

### Architectural Layers

```
┌─────────────────────────────────────────────────────────┐
│              Presentation Layer (Components)            │
├─────────────────────────────────────────────────────────┤
│              State Management Layer (Signals)           │
├─────────────────────────────────────────────────────────┤
│              Service Layer (API + Business Logic)       │
├─────────────────────────────────────────────────────────┤
│              Core Layer (Auth, Guards, Interceptors)    │
├─────────────────────────────────────────────────────────┤
│              API Layer (HTTP + Mock)                     │
└─────────────────────────────────────────────────────────┘
```

## High-Level Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                         AppModule                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                    AppShellComponent                     │ │
│  │  ┌──────────────────────────────────────────────────┐   │ │
│  │  │              Navigation Components              │   │ │
│  │  │  ┌──────────┐        ┌────────────┐           │   │ │
│  │  │  │  TopBar  │        │  Sidebar   │           │   │ │
│  │  │  └──────────┘        └────────────┘           │   │ │
│  │  └──────────────────────────────────────────────────┘   │ │
│  │  ┌──────────────────────────────────────────────────┐   │ │
│  │  │        Router Outlet (Feature Modules)         │   │ │
│  │  │                                                │   │ │
│  │  │  • Business Operator Module  (Lazy)          │   │ │
│  │  │  • Applications Module       (Lazy)          │   │ │
│  │  │  • Notifications Module      (Lazy)          │   │ │
│  │  │  • Reports Module            (Lazy)          │   │ │
│  │  │                                                │   │ │
│  │  └──────────────────────────────────────────────────┘   │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
        ↓
┌────────────────────────────────────────────────────────────────┐
│                      Core Services                             │
├────────────────────────────────────────────────────────────────┤
│  • ApiService          - HTTP communication                  │
│  • AuthService         - Authentication & JWT                │
│  • AuthorizationService - RBAC & permissions                │
│  • StateService        - Shared state (Signals)             │
│  • NotificationService - User notifications                 │
└────────────────────────────────────────────────────────────────┘
```

## Module Structure

### Core Module (`core/`)

**Responsibility**: Singleton services, guards, interceptors

```
core/
├── api/
│   ├── api.service.ts          # HTTP API calls
│   ├── api.types.ts            # API request/response types
│   └── mock-api/               # Mock API implementation
│       ├── mock-applications.ts
│       ├── mock-buyers.ts
│       ├── mock-notifications.ts
│       └── ...
│
├── auth/
│   ├── auth.service.ts         # Authentication logic
│   ├── auth.guard.ts           # Route protection
│   └── auth.interceptor.ts     # JWT token injection
│
├── guards/
│   ├── auth.guard.ts           # Protect authenticated routes
│   ├── role.guard.ts           # Role-based access
│   └── unsaved.guard.ts        # Warn on unsaved changes
│
├── interceptors/
│   ├── auth.interceptor.ts     # JWT injection
│   ├── error.interceptor.ts    # Global error handling
│   └── logging.interceptor.ts  # HTTP logging
│
├── models/
│   ├── application.model.ts    # Application domain model
│   ├── buyer.model.ts          # Buyer domain model
│   ├── user.model.ts           # User domain model
│   ├── notification.model.ts   # Notification model
│   └── index.ts                # Barrel export
│
├── state/
│   ├── auth.state.ts           # Authentication state
│   ├── global.state.ts         # Global application state
│   ├── notifications.state.ts  # Notifications state
│   └── user.state.ts           # User preferences state
│
└── core.module.ts              # Core module definition
```

### Shared Module (`shared/`)

**Responsibility**: Reusable components, directives, pipes

```
shared/
├── components/
│   ├── error-dialog/           # Error display component
│   ├── confirmation-dialog/    # Confirmation dialog
│   ├── loading-spinner/        # Loading indicator
│   ├── status-badge/           # Status display
│   └── ...
│
├── directives/
│   ├── has-role.directive.ts   # Role-based visibility
│   ├── has-permission.directive.ts # Permission checking
│   └── ...
│
├── pipes/
│   ├── format-currency.pipe.ts # Currency formatting
│   ├── format-date.pipe.ts     # Date formatting
│   └── ...
│
├── services/
│   ├── theme.service.ts        # Theme management
│   ├── storage.service.ts      # Local/session storage
│   └── ...
│
└── shared.module.ts            # Shared module definition
```

### Feature Modules

#### Business Operator Module (`features/business-operator/`)

Primary dashboard and management interface

```
business-operator/
├── pages/
│   ├── status-overview/        # Dashboard overview
│   ├── applications-list/      # Applications management
│   ├── buyers-list/            # Buyers management
│   ├── notifications/          # Notification center
│   └── reports/                # Report generation
│
├── components/
│   ├── application-card/       # Application display card
│   ├── status-widget/          # Status display widget
│   └── ...
│
├── services/
│   ├── dashboard.service.ts    # Dashboard data
│   ├── bulk-actions.service.ts # Bulk operation handling
│   └── ...
│
└── business-operator-routing.module.ts
```

#### Applications Module (`features/applications/`)

Application lifecycle management

```
applications/
├── pages/
│   ├── application-list/       # List all applications
│   ├── application-detail/     # View application details
│   ├── application-review/     # Review/approve application
│   └── application-form/       # Create/edit application
│
├── components/
│   ├── application-items/      # Item selection
│   ├── add-on-selector/        # Add-on management
│   └── ...
│
└── applications-routing.module.ts
```

#### Notifications Module (`features/notifications/`)

Notification management and delivery

```
notifications/
├── pages/
│   ├── notifications-center/   # Notification inbox
│   ├── notification-detail/    # View notification
│   └── notification-settings/  # User preferences
│
├── components/
│   ├── notification-list/      # Display notifications
│   ├── notification-badge/     # Unread badge
│   └── ...
│
└── notifications-routing.module.ts
```

#### Reports Module (`features/reports/`)

Report generation and management

```
reports/
├── pages/
│   ├── reports-list/           # Available reports
│   ├── report-generator/       # Create custom report
│   └── report-viewer/          # View generated report
│
└── reports-routing.module.ts
```

### Authentication Module (`auth/`)

User authentication and login

```
auth/
├── pages/
│   ├── login/                  # Login page
│   └── reset-password/         # Password reset
│
└── auth-routing.module.ts
```

## State Management

### Signal-Based State Architecture

The application uses Angular Signals for reactive state management:

```typescript
// Global Application State
export class GlobalState {
  // User-related signals
  currentUser = signal<User | null>(null);
  isAuthenticated = signal(false);
  userRoles = signal<string[]>([]);

  // UI State
  sidebarOpen = signal(true);
  isMobile = signal(false);
  isDarkMode = signal(false);

  // Application State
  applications = signal<Application[]>([]);
  selectedApplication = signal<Application | null>(null);
  
  // Computed signals
  isUserAdmin = computed(() => {
    const roles = this.userRoles();
    return roles.includes('admin');
  });

  canManageUsers = computed(() => {
    const roles = this.userRoles();
    return roles.includes('admin') || roles.includes('manager');
  });
}
```

### Usage Pattern

```typescript
@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private globalState = inject(GlobalState);
  
  // WritableSignal for component state
  isLoading = signal(false);
  selectedItems = signal<string[]>([]);

  // Computed for derived state
  selectedCount = computed(() => this.selectedItems().length);
  canApprove = computed(() => {
    return this.selectedCount() > 0 && 
           this.globalState.isUserAdmin();
  });

  loadApplications() {
    this.isLoading.set(true);
    this.api.getApplications().subscribe({
      next: (apps) => {
        this.globalState.applications.set(apps);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
}
```

### Component Integration

```typescript
@Component({
  selector: 'cms-app-list',
  template: `
    @if (isLoading()) {
      <loading-spinner />
    } @else {
      @for (app of applications(); track app.id) {
        <app-card [application]="app" />
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationListComponent {
  private appService = inject(ApplicationService);
  
  applications = this.appService.applications;
  isLoading = this.appService.isLoading;

  ngOnInit() {
    this.appService.loadApplications();
  }
}
```

## Data Flow

### Authentication Flow

```
User Login
    ↓
[Login Component]
    ↓
[AuthService.login(credentials)]
    ↓
[API Call: POST /auth/login]
    ↓
[Receive JWT Token]
    ↓
[GlobalState.currentUser.set(user)]
[GlobalState.isAuthenticated.set(true)]
    ↓
[Store JWT in localStorage]
    ↓
[Router.navigate(['/dashboard'])]
```

### Application Lifecycle Flow

```
View Applications
    ↓
[ApplicationService.loadApplications()]
    ↓
[API Call: GET /applications]
    ↓
[GlobalState.applications.set(apps)]
    ↓
[Components reactively update]
    ↓
    
User selects Application
    ↓
[GlobalState.selectedApplication.set(app)]
    ↓
[Load application details]
    ↓
[API Call: GET /applications/:id]
    ↓
[Update detail view reactively]
```

### Approval Workflow

```
Select Application → Review → Approve/Reject
        ↓              ↓          ↓
    Signal Set    Computed    API Call
                           ↓
                    Update State
                           ↓
                   UI Reflects Change
```

## API Integration

### API Service Structure

```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private config = inject(ConfigService);
  private env = inject(EnvironmentInjectionToken);

  // Applications
  getApplications(): Observable<Application[]>
  getApplication(id: string): Observable<Application>
  createApplication(app: Application): Observable<Application>
  updateApplication(id: string, app: Application): Observable<Application>
  approveApplication(id: string, comment: string): Observable<void>

  // Buyers
  getBuyers(): Observable<Buyer[]>
  getBuyer(id: string): Observable<Buyer>

  // Dashboard
  getDashboardStats(): Observable<DashboardStats>

  // Notifications
  getNotifications(): Observable<Notification[]>
  sendNotification(notification: Notification): Observable<void>
}
```

### API Response Handling

```typescript
// Success
Observable<T> → [Interceptor] → Component Signal

// Error
Observable<Error> → [Error Interceptor] → [Global Error Handler]
                  → [Optional: Retry Logic]
                  → [Show Error Message]
```

### Mock API Support

For development/testing without backend:

```typescript
// environment.ts
export const environment = {
  useMockApi: true,  // Enable mock
  apiUrl: 'http://localhost:3000/api'
};

// ApiService
private getMockData() {
  if (this.env.useMockApi) {
    return this.mockApi.getApplications();  // Mock implementation
  }
  return this.http.get<Application[]>(...);  // Real API
}
```

## Authentication & Authorization

### JWT Token Flow

```
1. User Login
   ↓
2. Backend issues JWT
   { header.payload.signature }
   ↓
3. Client stores in localStorage
   ↓
4. Auth Interceptor adds to requests
   Authorization: Bearer <token>
   ↓
5. Backend validates signature
   ↓
6. Request processed / Rejected
```

### Role-Based Access Control (RBAC)

```typescript
// User roles
type UserRole = 'admin' | 'manager' | 'operator' | 'viewer';

// Permission model
interface Permission {
  resource: string;  // 'application', 'user', 'report'
  action: string;    // 'read', 'create', 'update', 'delete'
  roleAllowed: UserRole[];
}

// Usage
@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective {
  @Input() set hasRole(role: UserRole) {
    const isAllowed = this.authService.hasRole(role);
    this.viewContainer.clear();
    if (isAllowed) {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }
}

<!-- Usage in template -->
<button *hasRole="'admin'">Delete User</button>
```

### Guard Implementation

```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}

// Route configuration
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];
```

## Change Detection Strategy

### OnPush Strategy

All components use `ChangeDetectionStrategy.OnPush` for optimal performance:

```typescript
@Component({
  selector: 'cms-application-card',
  template: `...`,
  changeDetection: ChangeDetectionStrategy.OnPush  // Only check on input changes
})
export class ApplicationCardComponent {
  @Input() application: Application;  // Input property
  
  // Change detection triggered only when:
  // 1. @Input property changes
  // 2. Event handler fires
  // 3. Observable from async pipe emits
}
```

### Signal Integration

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  items = signal<Item[]>([]);  // Automatic change detection
  
  constructor() {
    // Signal changes automatically trigger CD
    effect(() => {
      console.log('Items changed:', this.items());
    });
  }
}
```

## Performance Considerations

### Bundle Optimization

```
Production Build Size:
├── main bundle: ~450 KB (uncompressed)
│   └── gzipped: ~140 KB
├── vendor bundle: ~200 KB (uncompressed)
│   └── gzipped: ~60 KB
├── Feature modules: Lazy-loaded on demand
└── Total initial load: ~200 KB (gzipped)
```

### Lazy Loading Strategy

```typescript
// Route configuration
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent  // Loaded eagerly (Core)
  },
  {
    path: 'business-operator',
    loadChildren: () => import('./features/business-operator/business-operator.module')
      .then(m => m.BusinessOperatorModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./features/applications/applications.module')
      .then(m => m.ApplicationsModule)
  }
];
```

### Memory Management

```typescript
// Unsubscribe pattern
private destroy$ = new Subject<void>();

ngOnInit() {
  this.service.getData()
    .pipe(
      takeUntil(this.destroy$)  // Auto-unsubscribe
    )
    .subscribe(data => {
      this.data.set(data);
    });
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

## Security Architecture

### Input Validation

```typescript
// Server-side validation
[API] → [Validation Rules] → [Response/Error]

// Client-side validation
[Form Input] → [AsyncValidators] → [User Feedback]
```

### XSS Prevention

```typescript
// Angular sanitizes by default
<div [innerHTML]="userContent"></div>

// Sanitizer service for trusted content
<div [innerHTML]="sanitizer.sanitize(...)"></div>
```

### CSRF Protection

```typescript
// Backend provides CSRF token in response
// Client automatically includes in requests
// HTTP interceptor handles token injection
```

### Secure Communication

```
HTTPS/TLS
  ↓
All data encrypted in transit
  ↓
JWT tokens in Authorization header (not cookies)
  ↓
Secure, httpOnly cookies for refresh tokens (if used)
```

---

**Document Version**: 1.0
**Last Updated**: May 2026
**Maintained By**: Development Team
