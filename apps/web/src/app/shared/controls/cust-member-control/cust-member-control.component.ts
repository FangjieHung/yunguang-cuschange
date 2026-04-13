/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, forwardRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CustMemberContentJto, CustMemberDto } from '@core/models';
import { SharedDataServ } from '@core/services';
import { ZipCodeControlComponent } from '../zip-code-control/zip-code-control.component';

@Component({
  selector: 'web-cust-member-control',
  templateUrl: './cust-member-control.component.html',
  styleUrls: ['./cust-member-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustMemberControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustMemberControlComponent),
      multi: true
    }
  ]
})
export class CustMemberControlComponent extends BBDBaseComponent implements ControlValueAccessor {
  @ViewChild('resiZipCode') resiZipCode!: ZipCodeControlComponent;
  @ViewChild('currZipCode') currZipCode!: ZipCodeControlComponent;

  private _fb = inject(FormBuilder);
  sharedDataServ = inject(SharedDataServ);

  valForm!: UntypedFormGroup;
  isSameAsAbove = false;
  private _sameAsAboveSubs: Subscription[] = [];

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
  writeValue(value: CustMemberDto) {
    if (!value)
      return;

    this.isSameAsAbove = false;
    this._clearSameAsAboveSubs();
    value.contentJto = (value.content || '').isUndefinedOrNullOrEmpty() ? new CustMemberContentJto() : JSON.parse(value.content || '{}');
    this.valForm.patchValue(value);
  }

  onChange: (value: CustMemberDto) => void = () => void 0;
  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
    this.valForm.valueChanges.subscribe((res) => {
      res.content = JSON.stringify(res.contentJto || new CustMemberContentJto());
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
    this.resiZipCode.markAllAsTouched();
    this.currZipCode.markAllAsTouched();
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({ emitEvent: false });
    this.onValidatorChange?.();
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      id: [0],
      custId: [0],
      idNo: [null, [Validators.required, Validators.maxLength(10)]],
      name: [null, [Validators.required, Validators.maxLength(50)]],
      gender: [null, [Validators.required, Validators.maxLength(1)]],
      birthAt: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.maxLength(150)]],
      mobile: [null, [Validators.required, Validators.maxLength(12)]],
      phone: [null, [Validators.required, Validators.maxLength(12)]],
      phoneExt: [null, [Validators.maxLength(8)]],
      resiZipCodeId: [null, [Validators.required]],
      resiAddr: [null, [Validators.required, Validators.maxLength(100)]],
      currZipCodeId: [null, [Validators.required]],
      currAddr: [null, [Validators.required, Validators.maxLength(100)]],
      recommender: [null, [Validators.maxLength(50)]],
      crtBy: [null],
      crtAt: [null],
      contentJto: this._fb.group({
        currJob: [null],
        education: [null],
        experience: [null]
      })
    });

    this.f['idNo'].valueChanges.subscribe((res) => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res)
        this.f['idNo'].setValue(upperStr, { emitEvent: false });
    });
  }

  onSameAsAboveChange(checked: boolean): void {
    this.isSameAsAbove = checked;

    if (checked) {
      // 立即複製戶籍地址到聯絡地址
      this.f['currZipCodeId'].setValue(this.f['resiZipCodeId'].value);
      this.f['currAddr'].setValue(this.f['resiAddr'].value);

      // 訂閱戶籍地址變更，即時同步
      this._sameAsAboveSubs.push(
        this.f['resiZipCodeId'].valueChanges.subscribe((val) => {
          this.f['currZipCodeId'].setValue(val);
        }),
        this.f['resiAddr'].valueChanges.subscribe((val) => {
          this.f['currAddr'].setValue(val);
        })
      );
    } else {
      this._clearSameAsAboveSubs();
    }
  }

  private _clearSameAsAboveSubs(): void {
    this._sameAsAboveSubs.forEach((s) => s.unsubscribe());
    this._sameAsAboveSubs = [];
  }

}
