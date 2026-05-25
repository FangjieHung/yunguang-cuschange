import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SendNotificationComponent } from './send-notification.component';
import { ApiService } from '../../../../core/api';
import { of, throwError } from 'rxjs';

describe('SendNotificationComponent', () => {
  let component: SendNotificationComponent;
  let fixture: ComponentFixture<SendNotificationComponent>;
  let apiService: jest.Mocked<ApiService>;

  beforeEach(async () => {
    const apiServiceMock = {
      sendNotification: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [SendNotificationComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatCardModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    fixture = TestBed.createComponent(SendNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('title')?.value).toBe('');
    expect(component.form.get('content')?.value).toBe('');
    expect(component.form.get('recipientScope')?.value).toBe('global');
    expect(component.form.get('sendDate')?.value).toBeNull();
  });

  it('should validate title field as required', () => {
    const titleControl = component.form.get('title');
    titleControl?.setValue('');
    expect(titleControl?.hasError('required')).toBe(true);

    titleControl?.setValue('Test Title');
    expect(titleControl?.hasError('required')).toBe(false);
  });

  it('should validate content field as required', () => {
    const contentControl = component.form.get('content');
    contentControl?.setValue('');
    expect(contentControl?.hasError('required')).toBe(true);

    contentControl?.setValue('Test Content');
    expect(contentControl?.hasError('required')).toBe(false);
  });

  it('should validate recipientScope field as required', () => {
    const scopeControl = component.form.get('recipientScope');
    scopeControl?.setValue('');
    expect(scopeControl?.hasError('required')).toBe(true);

    scopeControl?.setValue('global');
    expect(scopeControl?.hasError('required')).toBe(false);
  });

  it('should make selectedUnits required when recipientScope is specific-units', () => {
    const unitsControl = component.form.get('selectedUnits');
    const scopeControl = component.form.get('recipientScope');

    scopeControl?.setValue('specific-units');
    component.form.updateValueAndValidity();

    expect(unitsControl?.hasError('required')).toBe(true);

    unitsControl?.setValue(['unit-001']);
    expect(unitsControl?.hasError('required')).toBe(false);
  });

  it('should make selectedBuyers required when recipientScope is specific-buyers', () => {
    const buyersControl = component.form.get('selectedBuyers');
    const scopeControl = component.form.get('recipientScope');

    scopeControl?.setValue('specific-buyers');
    component.form.updateValueAndValidity();

    expect(buyersControl?.hasError('required')).toBe(true);

    buyersControl?.setValue(['buyer-001']);
    expect(buyersControl?.hasError('required')).toBe(false);
  });

  it('should not require selectedUnits when recipientScope is global', () => {
    const unitsControl = component.form.get('selectedUnits');
    const scopeControl = component.form.get('recipientScope');

    scopeControl?.setValue('global');
    component.form.updateValueAndValidity();

    expect(unitsControl?.hasError('required')).toBe(false);
  });

  it('should submit form with global scope', (done) => {
    apiService.sendNotification.mockReturnValue(
      of({ success: true, message: 'Notification sent successfully' })
    );

    component.form.patchValue({
      title: 'Test Notification',
      content: 'This is a test notification',
      recipientScope: 'global',
    });

    component.onSubmit();

    setTimeout(() => {
      expect(apiService.sendNotification).toHaveBeenCalledWith({
        title: 'Test Notification',
        content: 'This is a test notification',
        recipientScope: 'global',
        selectedUnits: [],
        selectedBuyers: [],
        sendDate: null,
      });
      done();
    }, 100);
  });

  it('should submit form with specific units', (done) => {
    apiService.sendNotification.mockReturnValue(
      of({ success: true, message: 'Notification sent successfully' })
    );

    component.form.patchValue({
      title: 'Unit Notification',
      content: 'This is for specific units',
      recipientScope: 'specific-units',
      selectedUnits: ['unit-001', 'unit-002'],
    });

    component.onSubmit();

    setTimeout(() => {
      expect(apiService.sendNotification).toHaveBeenCalledWith({
        title: 'Unit Notification',
        content: 'This is for specific units',
        recipientScope: 'specific-units',
        selectedUnits: ['unit-001', 'unit-002'],
        selectedBuyers: [],
        sendDate: null,
      });
      done();
    }, 100);
  });

  it('should submit form with specific buyers', (done) => {
    apiService.sendNotification.mockReturnValue(
      of({ success: true, message: 'Notification sent successfully' })
    );

    component.form.patchValue({
      title: 'Buyer Notification',
      content: 'This is for specific buyers',
      recipientScope: 'specific-buyers',
      selectedBuyers: ['buyer-001', 'buyer-002'],
    });

    component.onSubmit();

    setTimeout(() => {
      expect(apiService.sendNotification).toHaveBeenCalledWith({
        title: 'Buyer Notification',
        content: 'This is for specific buyers',
        recipientScope: 'specific-buyers',
        selectedUnits: [],
        selectedBuyers: ['buyer-001', 'buyer-002'],
        sendDate: null,
      });
      done();
    }, 100);
  });

  it('should show success snackbar after successful submission', (done) => {
    const snackBarSpy = jest.spyOn(component['snackBar'], 'open');
    apiService.sendNotification.mockReturnValue(
      of({ success: true, message: 'Notification sent successfully' })
    );

    component.form.patchValue({
      title: 'Test Notification',
      content: 'Test content',
      recipientScope: 'global',
    });

    component.onSubmit();

    setTimeout(() => {
      expect(snackBarSpy).toHaveBeenCalledWith(
        'Notification sent successfully',
        'Close',
        { duration: 3000 }
      );
      done();
    }, 100);
  });

  it('should reset form after successful submission', (done) => {
    apiService.sendNotification.mockReturnValue(
      of({ success: true, message: 'Notification sent successfully' })
    );

    component.form.patchValue({
      title: 'Test Notification',
      content: 'Test content',
      recipientScope: 'global',
      sendDate: new Date(),
    });

    component.onSubmit();

    setTimeout(() => {
      expect(component.form.get('title')?.value).toBe('');
      expect(component.form.get('content')?.value).toBe('');
      expect(component.form.get('recipientScope')?.value).toBe('global');
      expect(component.form.get('sendDate')?.value).toBeNull();
      done();
    }, 100);
  });

  it('should handle API error gracefully', (done) => {
    const snackBarSpy = jest.spyOn(component['snackBar'], 'open');
    apiService.sendNotification.mockReturnValue(
      throwError(() => new Error('API Error'))
    );

    component.form.patchValue({
      title: 'Test Notification',
      content: 'Test content',
      recipientScope: 'global',
    });

    component.onSubmit();

    setTimeout(() => {
      expect(snackBarSpy).toHaveBeenCalledWith(
        'Failed to send notification',
        'Close',
        { duration: 3000 }
      );
      done();
    }, 100);
  });

  it('should reset form on reset button click', () => {
    component.form.patchValue({
      title: 'Test Notification',
      content: 'Test content',
      recipientScope: 'specific-units',
      selectedUnits: ['unit-001'],
      sendDate: new Date(),
    });

    component.onReset();

    expect(component.form.get('title')?.value).toBe('');
    expect(component.form.get('content')?.value).toBe('');
    expect(component.form.get('recipientScope')?.value).toBe('global');
    expect(component.form.get('selectedUnits')?.value).toEqual([]);
    expect(component.form.get('sendDate')?.value).toBeNull();
  });
});
