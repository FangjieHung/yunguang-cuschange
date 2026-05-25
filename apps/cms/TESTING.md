# Testing Guide

## Test Strategy

### Coverage Targets
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

Current: 97.9% (530/541 tests passing)

## Running Tests

### All Tests
```bash
npx nx test cms --coverage
```

### Watch Mode
```bash
npx nx test cms --watch
```

### Single Test File
```bash
npx nx test cms --testFile=path/to/test.spec.ts
```

### Test Pattern
```bash
npx nx test cms --testNamePattern="Authentication"
```

## Test Structure

### Unit Tests

Location: `src/**/*.spec.ts`

```typescript
describe('ServiceName', () => {
  let service: ServiceName;
  let dependency: Dependency;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceName]
    });
    service = TestBed.inject(ServiceName);
  });

  it('should do something', () => {
    expect(service.method()).toBeDefined();
  });
});
```

### Component Tests

```typescript
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent],
      imports: [SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Test Categories

### Core Module Tests
- Authentication service
- Authorization guards
- API service
- HTTP interceptors

### Feature Module Tests
- Component rendering
- User interactions
- State management
- Routing
- Signal changes

### Integration Tests
- API integration
- End-to-end workflows
- Cross-module communication

## Signal Testing

```typescript
// Test Signal changes
it('should update signal', () => {
  const counter = signal(0);
  counter.set(5);
  expect(counter()).toBe(5);
});

// Test computed signals
it('should compute value', () => {
  const count = signal(5);
  const doubled = computed(() => count() * 2);
  expect(doubled()).toBe(10);
});

// Test effects
it('should trigger effect', () => {
  const count = signal(0);
  let effectRun = false;
  
  effect(() => {
    if (count() > 0) effectRun = true;
  });
  
  count.set(1);
  expect(effectRun).toBe(true);
});
```

## Mocking

### Service Mocking
```typescript
const apiServiceMock = {
  getApplications: jest.fn().mockReturnValue(of([]))
};

TestBed.configureTestingModule({
  providers: [
    { provide: ApiService, useValue: apiServiceMock }
  ]
});
```

### HTTP Mocking
```typescript
let httpMock: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  });
  httpMock = TestBed.inject(HttpTestingController);
});

it('should fetch data', () => {
  service.getData().subscribe(data => {
    expect(data.length).toBe(2);
  });

  const req = httpMock.expectOne('/api/data');
  expect(req.request.method).toBe('GET');
  req.flush([{ id: 1 }, { id: 2 }]);
});
```

## Coverage Report

View coverage report:
```bash
open coverage/apps/cms/index.html
```

## CI/CD Integration

Tests run automatically on:
- Pull requests
- Commits to main branch
- Pre-deployment checks

Failure blocks merge and deployment.

---

**Document Version**: 1.0
