# CMS Backend System

Enterprise-grade Content Management System (CMS) built with Angular 16+, featuring advanced Signal-based state management, role-based access control (RBAC), and comprehensive business workflow automation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Building for Production](#building-for-production)
- [Environment Configuration](#environment-configuration)
- [Running Tests](#running-tests)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Features

### Core Capabilities
- **Authentication & Authorization**: Complete user authentication with JWT support and role-based access control
- **Application Management**: Full lifecycle management of buyer applications with status tracking and workflow automation
- **Business Operator Dashboard**: Real-time dashboard with statistics, trends, and actionable insights
- **Notification System**: Multi-channel notification support with delivery tracking
- **Report Generation**: Dynamic report creation with export capabilities
- **Audit Logging**: Comprehensive audit trails for compliance and security

### Advanced Features
- **Signal-based State Management**: Reactive state using Angular Signals for optimal performance
- **OnPush Change Detection**: All components use OnPush strategy for maximum efficiency
- **Lazy-loaded Feature Modules**: Optimized bundle loading with feature-based module organization
- **Mock API Support**: Built-in mock API for development and testing
- **Responsive Design**: Full mobile, tablet, and desktop support
- **Accessibility**: WCAG 2.1 AA compliant for inclusive user experience
- **Performance Optimization**: Bundle size < 2MB, lazy loading, tree-shaking enabled

## Tech Stack

### Core Framework
- **Angular 16+** with Signals API (zoneless change detection ready)
- **TypeScript 5+** with strict mode enabled
- **RxJS 7+** for reactive programming

### UI & Styling
- **Angular Material 3** for design system
- **SCSS** for component styling
- **Tailwind CSS** (optional) for utility-first styling
- **Responsive Design Framework**

### State Management
- **Angular Signals** (WritableSignal, computed, effect)
- **RxJS Subjects & Observables**
- **Service-based state architecture**

### Testing
- **Jest** for unit testing
- **Karma** (optional) for browser testing
- **Test Coverage**: 97.9% (530/541 tests passing)

### Build & Deployment
- **Nx Workspace** for monorepo management
- **Angular CLI** for build configuration
- **Production optimizations**: AOT compilation, tree-shaking, minification

## Project Structure

```
apps/cms/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── api/                 # API integration services
│   │   │   ├── auth/                # Authentication services
│   │   │   ├── models/              # Domain models and interfaces
│   │   │   ├── state/               # Shared state services using Signals
│   │   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── guards/              # Route guards
│   │   │   └── integration-tests/   # API integration tests
│   │   │
│   │   ├── auth/
│   │   │   └── pages/
│   │   │       └── login/           # Login page component
│   │   │
│   │   ├── shell/
│   │   │   ├── app-shell.component  # Root shell component
│   │   │   ├── topbar/              # Navigation topbar
│   │   │   └── sidebar/             # Navigation sidebar
│   │   │
│   │   ├── shared/
│   │   │   ├── components/          # Reusable components
│   │   │   ├── directives/          # Custom directives
│   │   │   ├── pipes/               # Custom pipes
│   │   │   └── services/            # Shared services
│   │   │
│   │   ├── features/                # Feature modules (lazy-loaded)
│   │   │   ├── business-operator/   # Business operator module
│   │   │   ├── applications/        # Applications management
│   │   │   ├── notifications/       # Notification management
│   │   │   └── reports/             # Report generation
│   │   │
│   │   ├── modules/                 # Feature-specific modules
│   │   │   └── ...
│   │   │
│   │   └── app.module.ts            # Root module
│   │
│   ├── assets/                      # Static assets
│   ├── environments/                # Environment configurations
│   ├── styles/                      # Global styles
│   └── main.ts                      # Application entry point
│
├── project.json                     # Nx project configuration
├── tsconfig.app.json               # TypeScript configuration
├── jest.config.ts                  # Jest testing configuration
└── README.md                        # This file
```

## Installation

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)
- **Git**: For version control

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd yunguang-cus-change-angular16-apps
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Verify Installation

```bash
npx nx list
npx nx test cms --coverage
```

## Development Setup

### Start Development Server

```bash
# Start CMS development server
npx nx serve cms

# Application will be available at http://localhost:4200
```

### Development Environment Configuration

The development environment is configured in `apps/cms/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  useMockApi: true,           // Use mock API for development
  apiTimeout: 30000,          // 30 second timeout
  cacheEnabled: true,         // Enable response caching
  cacheDuration: 3600000,     // 1 hour cache duration
  loggingLevel: 'debug',      // Detailed logging
  appVersion: '1.0.0-beta',
};
```

### Available Development Commands

```bash
# Build the application
npx nx build cms

# Run tests with coverage
npx nx test cms --coverage

# Lint code
npx nx lint cms

# Format code (if prettier configured)
npx nx format:write cms

# Run end-to-end tests
npx nx e2e cms

# Serve static files
npx nx serve-static cms
```

## Building for Production

### Build Command

```bash
npx nx build cms --configuration production
```

### Build Configuration

The production build is configured in `apps/cms/project.json`:

- **Output Hashing**: Enabled for cache busting
- **Build Optimizer**: Enabled for advanced optimizations
- **Source Maps**: Disabled for smaller bundle size
- **License Extraction**: Enabled for license compliance
- **Vendor Chunk**: Disabled for optimal splitting
- **AOT Compilation**: Enabled
- **Tree-shaking**: Enabled

### Build Output

```
dist/apps/cms/
├── index.html                # Main HTML file
├── main.[hash].js           # Main bundle
├── polyfills.[hash].js      # Polyfills
├── styles.[hash].css        # Global styles
├── assets/                  # Static assets
└── favicon.ico
```

### Production Build Optimization

- **Bundle Size**: Main bundle < 500KB (uncompressed)
- **Gzip Compression**: ~150KB when gzipped
- **Lazy Loading**: Feature modules loaded on demand
- **Tree-shaking**: Unused code removed
- **Minification**: Full code minification and obfuscation

### Production Build Checklist

- [ ] No console warnings or errors
- [ ] All feature modules lazy-loaded
- [ ] Bundle size within limits
- [ ] Source maps not included
- [ ] Asset paths correctly configured
- [ ] Environment variables set correctly
- [ ] Service worker configured (if applicable)

## Environment Configuration

### Environment Variables

#### Development (`environment.ts`)

```typescript
{
  production: false,
  apiUrl: 'http://localhost:3000/api',
  useMockApi: true,
  apiTimeout: 30000,
  cacheEnabled: true,
  cacheDuration: 3600000,
  loggingLevel: 'debug',
  appVersion: '1.0.0-beta'
}
```

#### Production (`environment.prod.ts`)

```typescript
{
  production: true,
  apiUrl: 'https://api.example.com/api',
  useMockApi: false,
  apiTimeout: 15000,
  cacheEnabled: true,
  cacheDuration: 7200000,
  loggingLevel: 'error',
  appVersion: '1.0.0',
  sentry: {
    dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0'
  },
  analytics: {
    enabled: true
  }
}
```

### Runtime Configuration

Set these as environment variables before deployment:

```bash
# API Configuration
export API_URL="https://api.example.com/api"
export API_TIMEOUT="15000"

# Feature Flags
export CACHE_ENABLED="true"
export LOGGING_LEVEL="error"

# Analytics
export ANALYTICS_ENABLED="true"
export SENTRY_DSN="https://..."
```

## Running Tests

### Test Configuration

Tests are configured using Jest with the following setup:

```bash
# Run all tests
npx nx test cms

# Run tests with coverage report
npx nx test cms --coverage

# Run tests in watch mode
npx nx test cms --watch

# Run specific test file
npx nx test cms --testFile=path/to/test.spec.ts

# Run tests matching pattern
npx nx test cms --testNamePattern="Authentication"
```

### Coverage Report

After running tests with coverage:

```bash
# Open coverage report
open coverage/apps/cms/index.html
```

Coverage targets:
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

Current coverage: 97.9% (530/541 tests passing)

### Test Structure

```
src/
├── app/
│   ├── core/
│   │   ├── api/
│   │   │   └── api.service.spec.ts
│   │   └── ...
│   └── ...
└── ...
```

### Writing Tests

Tests follow Angular testing best practices:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Deployment

### Deployment Checklist

- [ ] All tests passing (npx nx test cms)
- [ ] No console errors (ng build --configuration production)
- [ ] Bundle size verified (< 2MB main bundle)
- [ ] Environment variables configured
- [ ] API endpoints verified
- [ ] SSL certificate configured
- [ ] CDN configured for assets
- [ ] Service worker verified (if applicable)
- [ ] Monitoring configured
- [ ] Backup procedures in place
- [ ] Rollback plan tested

### Deployment Steps

1. **Build Application**
   ```bash
   npx nx build cms --configuration production
   ```

2. **Verify Build**
   ```bash
   # Check build output
   ls -lh dist/apps/cms/
   ```

3. **Deploy to Server**
   ```bash
   # SCP to server
   scp -r dist/apps/cms/* user@server:/var/www/cms/
   
   # Or use deployment tool (Docker, Kubernetes, etc.)
   docker build -t cms:latest .
   docker push registry/cms:latest
   ```

4. **Verify Deployment**
   - Test application functionality
   - Check API connectivity
   - Verify authentication flow
   - Test critical workflows

5. **Monitor Deployment**
   - Monitor error logs
   - Check performance metrics
   - Verify user activity

### Rolling Back

```bash
# Revert to previous version
git revert <commit-hash>
npx nx build cms --configuration production
# Redeploy
```

## Documentation

Comprehensive documentation is available:

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and design patterns
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment procedures
- **[API.md](./API.md)** - API endpoint documentation
- **[TESTING.md](./TESTING.md)** - Testing strategy and procedures
- **[CODE_STYLE.md](./CODE_STYLE.md)** - Code style guidelines
- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - Accessibility features and compliance

## Contributing

### Git Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "feat: description of feature"
   ```

3. **Push to remote**
   ```bash
   git push origin feature/feature-name
   ```

4. **Create pull request**
   - Describe changes
   - Link related issues
   - Request review

### Commit Message Format

Follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Code style
- **refactor**: Code refactoring
- **perf**: Performance improvement
- **test**: Test addition/modification
- **chore**: Build, dependencies, etc.

Example:
```
feat(auth): add two-factor authentication

- Implement TOTP-based 2FA
- Add QR code generation
- Update user model

Closes #123
```

### Code Review Checklist

- [ ] Code follows style guidelines
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Performance impact assessed
- [ ] Accessibility verified
- [ ] Security considerations reviewed

## Support

For issues, questions, or suggestions:

1. Check existing documentation
2. Search GitHub issues
3. Create new issue with details
4. Contact development team

## License

[Your License Here]

## Version History

- **1.0.0** (Current) - Production release
- **1.0.0-beta** - Beta release
- **0.1.0** - Initial development

---

**Last Updated**: May 2026
**Maintained By**: Development Team
