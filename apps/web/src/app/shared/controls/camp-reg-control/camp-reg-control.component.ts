/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, forwardRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampRegContentJto, CampRegDto } from '@core/models';
import { SharedDataServ } from '@core/services';
import { ZipCodeControlComponent } from '../zip-code-control/zip-code-control.component';

@Component({
  selector: 'web-camp-reg-control',
  templateUrl: './camp-reg-control.component.html',
  styleUrls: ['./camp-reg-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CampRegControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CampRegControlComponent),
      multi: true
    }
  ]
})
export class CampRegControlComponent extends BBDBaseComponent implements ControlValueAccessor {
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
  // ngOnInit(): void { }

  // NG_VALUE_ACCESSOR 實作
  writeValue(value: CampRegDto) {
    if (!value)
      value = new CampRegDto();

    value.contentJto = (value.content || '').isUndefinedOrNullOrEmpty() ? new CampRegContentJto() : JSON.parse(value.content || '{}');
    if (!value.custZipCodeId)
      value.custZipCodeId = null;

    this.valForm.patchValue(value);
  }

  onChange: (value: CampRegDto) => void = () => void 0;
  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
    this.valForm.valueChanges.subscribe((res) => {
      res.content = JSON.stringify(res.contentJto || new CampRegContentJto());
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
      regAt: [new Date()],
      campId: [0],
      campName: [null],
      custId: [0],
      custIdNo: [null, [Validators.required, Validators.maxLength(10)]],
      custName: [null, [Validators.required, Validators.maxLength(50)]],
      custEmail: [null, [Validators.required, Validators.maxLength(150)]],
      custMobile: [null, [Validators.required, Validators.maxLength(12)]],
      custZipCodeId: [null, [Validators.required]],
      custAddr: [null, [Validators.required, Validators.maxLength(100)]],
      custOrderId: [0],
      cxlAt: [null],
      buyerCode: [null],
      buyerName: [null],
      status: [0],
      crtBy: [null],
      crtAt: [null],
      contentJto: this._fb.group({
        currJob: [null, [Validators.required]]
      })
    });

    this.f['custIdNo'].valueChanges.subscribe((res) => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res)
        this.f['custIdNo'].setValue(upperStr, { emitEvent: false });
    });
  }

}
