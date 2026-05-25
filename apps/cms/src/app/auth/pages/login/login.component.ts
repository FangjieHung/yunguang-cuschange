import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'tslmai-angular16-apps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  hidePassword = signal(true);
  rememberMe = signal(false);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.loadRememberedEmail();
  }

  private initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  private loadRememberedEmail() {
    const savedEmail = localStorage.getItem('cms_remember_email');
    if (savedEmail) {
      this.loginForm.patchValue({
        email: savedEmail,
        rememberMe: true,
      });
    }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { email, password, rememberMe } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        // Save or clear remembered email
        if (rememberMe) {
          localStorage.setItem('cms_remember_email', email);
        } else {
          localStorage.removeItem('cms_remember_email');
        }

        // Redirect to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set('登入失敗，請檢查您的信箱和密碼');
        console.error('Login error:', err);
      },
    });
  }

  togglePasswordVisibility() {
    this.hidePassword.update((value) => !value);
  }

  getEmailError(): string | null {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.hasError('required')) {
      return '請輸入信箱';
    }
    if (emailControl?.hasError('email')) {
      return '請輸入有效的信箱格式';
    }
    return null;
  }

  getPasswordError(): string | null {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return '請輸入密碼';
    }
    if (passwordControl?.hasError('minlength')) {
      return '密碼長度至少6個字符';
    }
    return null;
  }
}
