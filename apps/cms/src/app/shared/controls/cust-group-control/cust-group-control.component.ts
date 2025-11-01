/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit, forwardRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustGroupContentJto, CustGroupDto } from '@core/models';
import { SharedDataServ } from '@core/services';
import { ZipCodeControlComponent } from '@core/shared'

@Component({
  selector: 'cms-cust-group-control',
  templateUrl: './cust-group-control.component.html',
  styleUrls: ['./cust-group-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustGroupControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustGroupControlComponent),
      multi: true
    }
  ]
})
export class CustGroupControlComponent extends BBDBaseComponent implements OnInit, ControlValueAccessor {
  @ViewChild('currZipCode') currZipCode!: ZipCodeControlComponent;

  private _fb = inject(FormBuilder);
  sharedDataServ = inject(SharedDataServ);

  valForm!: UntypedFormGroup;

  // IOs & Gets & Sets
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    protected override injector: Injector
  ) {
    super(injector);
    this.doFormInit();
  }

  // Custom control required methods
  ngOnInit(): void {
    console.log('init');
  }

  // NG_VALUE_ACCESSOR 實作
  writeValue(value: CustGroupDto) {
    if (!value)
      return;

    value.contentJto = (value?.content || '').isUndefinedOrNullOrEmpty() ? new CustGroupContentJto() : JSON.parse(value?.content || '{}');
    this.valForm.patchValue(value);
  }

  onChange: (value: CustGroupDto) => void = () => void 0;
  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
    this.valForm.valueChanges.subscribe((res) => {
      res.content = JSON.stringify(res.contentJto || new CustGroupContentJto());
      this.onChange(res);
    })
  }

  onTouched: () => void = () => void 0;
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onValidatorChange?: () => void;
  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  validate(): ValidationErrors | null {
    if (this.valForm.invalid)
      return { invalid: true };

    return null;
  }

  markAllAsTouched(): void {
    this.currZipCode.markAllAsTouched();
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({ emitEvent: false });
    this.onValidatorChange?.();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      id: [0],
      custId: [0],
      taxId: [null, [Validators.required, Validators.maxLength(10)]],
      name: [null, [Validators.required, Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(150)]],
      phone: [null, [Validators.required, Validators.maxLength(12)]],
      phoneExt: [null, [Validators.maxLength(8)]],
      currZipCodeId: [null, [Validators.required]],
      currAddr: [null, [Validators.required, Validators.maxLength(100)]],
      owner: [null, [Validators.required, Validators.maxLength(50)]],
      ownerTitle: [null, [Validators.required, Validators.maxLength(30)]],
      cpName: [null, [Validators.required, Validators.maxLength(50)]],
      cpGender: [null, [Validators.required, Validators.maxLength(1)]],
      cpBirthAt: [null, [Validators.required]],
      cpIdNo: [null, [Validators.required, Validators.maxLength(10)]],
      cpMobile: [null, [Validators.required, Validators.maxLength(12)]],
      cpTitle: [null, [Validators.required, Validators.maxLength(30)]],
      cpEmail: [null, [Validators.required, Validators.email, Validators.maxLength(150)]],
      crtBy: [null],
      crtAt: [null],
      contentJto: this._fb.group({
        cpEducation: [null],
        cpExperience: [null]
      })
    });

    this.f['cpIdNo'].valueChanges.subscribe((res) => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res)
        this.f['cpIdNo'].setValue(upperStr, { emitEvent: false });
    });
  }

}
