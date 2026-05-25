import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../../../core/api';

interface NotificationPayload {
  title: string;
  content: string;
  recipientScope: 'global' | 'specific-units' | 'specific-buyers';
  selectedUnits: string[];
  selectedBuyers: string[];
  sendDate: Date | null;
}

@Component({
  selector: 'cms-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss'],
})
export class SendNotificationComponent implements OnInit {
  form!: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setupConditionalValidators();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      recipientScope: ['global', [Validators.required]],
      selectedUnits: [[]],
      selectedBuyers: [[]],
      sendDate: [null],
    });
  }

  private setupConditionalValidators(): void {
    const recipientScopeControl = this.form.get('recipientScope');
    const selectedUnitsControl = this.form.get('selectedUnits');
    const selectedBuyersControl = this.form.get('selectedBuyers');

    if (recipientScopeControl && selectedUnitsControl && selectedBuyersControl) {
      recipientScopeControl.valueChanges.subscribe((scope) => {
        if (scope === 'specific-units') {
          selectedUnitsControl.setValidators([Validators.required]);
          selectedBuyersControl.clearValidators();
        } else if (scope === 'specific-buyers') {
          selectedBuyersControl.setValidators([Validators.required]);
          selectedUnitsControl.clearValidators();
        } else {
          selectedUnitsControl.clearValidators();
          selectedBuyersControl.clearValidators();
        }

        selectedUnitsControl.updateValueAndValidity({ emitEvent: false });
        selectedBuyersControl.updateValueAndValidity({ emitEvent: false });
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.isSubmitting = true;

    const payload: NotificationPayload = {
      title: this.form.get('title')?.value,
      content: this.form.get('content')?.value,
      recipientScope: this.form.get('recipientScope')?.value,
      selectedUnits: this.form.get('selectedUnits')?.value || [],
      selectedBuyers: this.form.get('selectedBuyers')?.value || [],
      sendDate: this.form.get('sendDate')?.value,
    };

    this.apiService.sendNotification(payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.snackBar.open(response.message, 'Close', { duration: 3000 });
        this.form.reset({
          title: '',
          content: '',
          recipientScope: 'global',
          selectedUnits: [],
          selectedBuyers: [],
          sendDate: null,
        });
      },
      error: (error) => {
        this.isSubmitting = false;
        this.snackBar.open('Failed to send notification', 'Close', { duration: 3000 });
        console.error('Failed to send notification', error);
      },
    });
  }

  onReset(): void {
    this.form.reset({
      title: '',
      content: '',
      recipientScope: 'global',
      selectedUnits: [],
      selectedBuyers: [],
      sendDate: null,
    });
  }

  get isGlobalScope(): boolean {
    return this.form.get('recipientScope')?.value === 'global';
  }

  get isSpecificUnitsScope(): boolean {
    return this.form.get('recipientScope')?.value === 'specific-units';
  }

  get isSpecificBuyersScope(): boolean {
    return this.form.get('recipientScope')?.value === 'specific-buyers';
  }
}
