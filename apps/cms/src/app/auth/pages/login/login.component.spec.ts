import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../core/auth/auth.service';
import { of, throwError } from 'rxjs';
import { User } from '../../../core/models';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'ROLE-01',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: (email: string, password: string) => of(mockUser),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: () => Promise.resolve(true),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    // Clear localStorage
    localStorage.clear();
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login form', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.get('email')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
    expect(component.loginForm.get('rememberMe')).toBeTruthy();
  });

  it('should have empty form initially', () => {
    expect(component.loginForm.value).toEqual({
      email: '',
      password: '',
      rememberMe: false,
    });
  });

  it('should validate email field as required', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.hasError('required')).toBe(true);
  });

  it('should validate email field format', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBe(true);

    emailControl?.setValue('valid@example.com');
    expect(emailControl?.hasError('email')).toBe(false);
  });

  it('should validate password field as required', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.hasError('required')).toBe(true);
  });

  it('should validate password minimum length', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('123');
    expect(passwordControl?.hasError('minlength')).toBe(true);

    passwordControl?.setValue('123456');
    expect(passwordControl?.hasError('minlength')).toBe(false);
  });

  it('should call authService.login with correct credentials', fakeAsync(() => {
    spyOn(authService, 'login').and.returnValue(of(mockUser));

    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: false,
    });

    component.onSubmit();
    tick();

    expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password123');
  }));

  it('should navigate to dashboard on successful login', fakeAsync(() => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: false,
    });

    component.onSubmit();
    tick();

    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  }));

  it('should save email to localStorage if rememberMe is checked', fakeAsync(() => {
    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: true,
    });

    component.onSubmit();
    tick();

    expect(localStorage.getItem('cms_remember_email')).toBe('test@example.com');
  }));

  it('should not save email if rememberMe is unchecked', fakeAsync(() => {
    localStorage.setItem('cms_remember_email', 'old@example.com');

    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: false,
    });

    component.onSubmit();
    tick();

    expect(localStorage.getItem('cms_remember_email')).toBeNull();
  }));

  it('should load remembered email on init', () => {
    localStorage.setItem('cms_remember_email', 'remembered@example.com');

    // Create new component instance
    const newFixture = TestBed.createComponent(LoginComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    expect(newComponent.loginForm.get('email')?.value).toBe('remembered@example.com');
    expect(newComponent.loginForm.get('rememberMe')?.value).toBe(true);
  });

  it('should show loading state during login', fakeAsync(() => {
    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(component.isLoading()).toBe(false);

    component.onSubmit();
    tick();

    // After the observable completes, loading should be false
    expect(component.isLoading()).toBe(false);
  }));

  it('should handle login error', fakeAsync(() => {
    spyOn(authService, 'login').and.returnValue(
      throwError(() => new Error('Login failed'))
    );

    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
    });

    component.onSubmit();
    tick();

    expect(component.errorMessage()).toBeTruthy();
    expect(component.isLoading()).toBe(false);
  }));

  it('should toggle password visibility', () => {
    expect(component.hidePassword()).toBe(true);
    component.togglePasswordVisibility();
    expect(component.hidePassword()).toBe(false);
    component.togglePasswordVisibility();
    expect(component.hidePassword()).toBe(true);
  });

  it('should return correct email error message for required field', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    emailControl?.markAsTouched();

    expect(component.getEmailError()).toBe('請輸入信箱');
  });

  it('should return correct email error message for invalid format', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid');
    emailControl?.markAsTouched();

    expect(component.getEmailError()).toBe('請輸入有效的信箱格式');
  });

  it('should return correct password error message for required field', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    passwordControl?.markAsTouched();

    expect(component.getPasswordError()).toBe('請輸入密碼');
  });

  it('should return correct password error message for minimum length', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('123');
    passwordControl?.markAsTouched();

    expect(component.getPasswordError()).toBe('密碼長度至少6個字符');
  });

  it('should disable submit button when form is invalid', () => {
    fixture.detectChanges();
    const submitBtn = fixture.nativeElement.querySelector('.submit-btn');
    expect(submitBtn.disabled).toBe(true);
  });

  it('should enable submit button when form is valid', () => {
    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
    });
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('.submit-btn');
    expect(submitBtn.disabled).toBe(false);
  });

  it('should render login form elements', () => {
    fixture.detectChanges();

    const emailInput = fixture.nativeElement.querySelector('#email');
    const passwordInput = fixture.nativeElement.querySelector('#password');
    const submitBtn = fixture.nativeElement.querySelector('.submit-btn');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  });

  it('should display error message when login fails', fakeAsync(() => {
    spyOn(authService, 'login').and.returnValue(
      throwError(() => new Error('Login failed'))
    );

    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
    });

    component.onSubmit();
    fixture.detectChanges();
    tick();

    const errorElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorElement).toBeTruthy();
  }));

  it('should not submit form if form is invalid', () => {
    spyOn(authService, 'login').and.returnValue(of(mockUser));

    component.loginForm.patchValue({
      email: '',
      password: '',
    });

    component.onSubmit();

    expect(authService.login).not.toHaveBeenCalled();
  });
});
