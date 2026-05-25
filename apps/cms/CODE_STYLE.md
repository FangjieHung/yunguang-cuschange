# Code Style Guide

## TypeScript Conventions

### File Naming
- **Components**: `my-component.component.ts`
- **Services**: `my.service.ts`
- **Directives**: `my.directive.ts`
- **Pipes**: `my.pipe.ts`
- **Models**: `my.model.ts`
- **Modules**: `my.module.ts`

### Class Naming
- **Components**: `MyComponentComponent` (ends with "Component")
- **Services**: `MyService`
- **Directives**: `MyDirective`
- **Pipes**: `MyPipe`
- **Models**: `User`, `Application` (domain models)

### Variable Naming
- **Constants**: `CONSTANT_NAME` (SCREAMING_SNAKE_CASE)
- **Variables**: `variableName` (camelCase)
- **Private**: `_privateVar` or `private privateVar`
- **Signals**: `mySignal`, `isLoading`, `selectedItem`

### Function Naming
- **Methods**: `methodName()` (camelCase)
- **Getters**: `get propertyName()` (like properties)
- **Setters**: `set propertyName(value)` (like properties)

## Angular Conventions

### Component Structure

```typescript
@Component({
  selector: 'cms-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  // Always use OnPush
})
export class MyComponentComponent implements OnInit, OnDestroy {
  // 1. Input properties
  @Input() items: Item[] = [];

  // 2. Signals
  isLoading = signal(false);
  selectedItem = signal<Item | null>(null);

  // 3. Computed signals
  itemCount = computed(() => this.items.length);

  // 4. Subject for cleanup
  private destroy$ = new Subject<void>();

  constructor(
    private service: MyService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // 5. Public methods
  loadData() {
    this.isLoading.set(true);
    this.service.getData()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (data) => this.updateData(data),
        error: (err) => this.handleError(err)
      });
  }

  // 6. Private methods
  private updateData(data: Item[]) {
    this.isLoading.set(false);
  }

  private handleError(error: any) {
    console.error('Error:', error);
    this.isLoading.set(false);
  }
}
```

### Service Structure

```typescript
@Injectable({ providedIn: 'root' })
export class MyService {
  // 1. Dependencies
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {}

  // 2. Public methods
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.config.apiUrl}/data`);
  }

  // 3. Private methods
  private handleError(error: any): void {
    console.error('Error:', error);
  }
}
```

### Template Style

Use new control flow syntax:
```html
<!-- If block -->
@if (isLoading()) {
  <loading-spinner />
}

<!-- For loop -->
@for (item of items(); track item.id) {
  <app-item [item]="item" />
}

<!-- Switch -->
@switch (status()) {
  @case ('active') {
    <span class="active">Active</span>
  }
  @case ('inactive') {
    <span class="inactive">Inactive</span>
  }
}
```

## Styling Conventions

### SCSS Structure

```scss
// 1. Variables
$primary-color: #007bff;
$spacing-unit: 8px;

// 2. Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 3. Component styles
.component {
  margin: $spacing-unit * 2;
  
  &__header {
    @include flex-center;
    color: $primary-color;
  }

  &__content {
    padding: $spacing-unit * 3;
  }
}

// 4. Responsive
@media (max-width: 768px) {
  .component {
    padding: $spacing-unit;
  }
}
```

### CSS Class Naming (BEM)
```
.component { ... }        // Block
.component__header { ... } // Element
.component--active { ... } // Modifier
```

## Directive Conventions

```typescript
@Directive({
  selector: '[appMyDirective]',
  standalone: true
})
export class MyDirective {
  @Input() appMyDirective: any;
  
  @Input() myDirectiveConfig: Config;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    // Handle click
  }
}
```

## Pipe Conventions

```typescript
@Pipe({
  name: 'myPipe',
  pure: true,  // Pure pipes for performance
  standalone: true
})
export class MyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // Transform logic
    return transformed;
  }
}
```

## Module Conventions

```typescript
@NgModule({
  declarations: [
    MyComponent,
    MyDirective,
    MyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    MyComponent  // Export public API
  ]
})
export class MyModule { }
```

## Guard Conventions

```typescript
@Injectable({ providedIn: 'root' })
export class MyGuard implements CanActivate {
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
    this.router.navigate(['/login']);
    return false;
  }
}
```

## Testing Conventions

```typescript
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style
- `refactor` - Code refactoring
- `perf` - Performance
- `test` - Tests
- `chore` - Build/config

### Example
```
feat(auth): add two-factor authentication

- Implement TOTP-based 2FA
- Add QR code generation

Closes #123
```

## Code Quality Checklist

- [ ] TypeScript strict mode enabled
- [ ] No `any` types (use proper typing)
- [ ] OnPush change detection used
- [ ] Proper error handling
- [ ] Tests written and passing
- [ ] No console.log in production code
- [ ] Accessibility checked
- [ ] Performance considered
- [ ] Security reviewed
- [ ] Documentation updated

---

**Document Version**: 1.0
