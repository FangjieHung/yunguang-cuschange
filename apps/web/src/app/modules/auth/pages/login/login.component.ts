import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  step: 'request' | 'verify' = 'request';
  countdown = 0;
  private timerId: any = null;

  form: FormGroup;
  otpDigits: string[] = ['', '', '', '', '', ''];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      idLast4: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^09\d{8}$/)]],
    });
  }

  requestOtp(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.step = 'verify';
    this.startCountdown();
  }

  resendOtp(): void {
    if (this.countdown > 0) return;
    this.startCountdown();
  }

  private startCountdown(): void {
    this.countdown = 60;
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }, 1000);
  }

  onOtpInput(index: number, event: any): void {
    const value = (event.target.value || '').replace(/\D/g, '').slice(-1);
    this.otpDigits[index] = value;
    event.target.value = value;
    if (value && index < 5) {
      const next = event.target.parentElement.querySelectorAll('input')[index + 1];
      next?.focus();
    }
  }

  onOtpKey(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      const target = event.target as HTMLInputElement;
      const prev = target.parentElement!.querySelectorAll('input')[index - 1] as HTMLInputElement;
      prev?.focus();
    }
  }

  get otpComplete(): boolean {
    return this.otpDigits.every((d) => d.length === 1);
  }

  submitOtp(): void {
    if (!this.otpComplete) return;
    this.router.navigate(['/customization/welcome']);
  }

  backToRequest(): void {
    this.step = 'request';
    this.otpDigits = ['', '', '', '', '', ''];
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.countdown = 0;
  }
}
