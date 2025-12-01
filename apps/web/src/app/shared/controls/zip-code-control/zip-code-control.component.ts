/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { List } from 'linqts';
import { combineLatest } from 'rxjs';
import { ZipCodeView } from '@core/models';

@Component({
  selector: 'web-zip-code-control',
  templateUrl: './zip-code-control.component.html',
  styleUrls: ['./zip-code-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZipCodeControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ZipCodeControlComponent),
      multi: true
    }
  ]
})
export class ZipCodeControlComponent extends BBDBaseComponent implements ControlValueAccessor {
  valForm!: UntypedFormGroup;
  cities: any[] = [];
  districts: any[] = [];
  @Input() required: string | boolean = false;
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    protected override injector: Injector
  ) {
    super(injector);
    this.getCaches();
  }

  // ngOnInit(): void { }

  writeValue(value: any) {
    this.valForm = this.fb.group({
      id: [value],
      city: [null,],
      district: [null,],
    });
    this.doSetValidators();

    if (this.districts.length) {
      this.doReverseZipCodeId(value);
    } else {
      // 防止跟不上快取處理
      setTimeout(() => {
        this.doReverseZipCodeId(value);
      }, 100);
    }

    this.f['id'].valueChanges.subscribe((res) => {
      this.onChange(res);
    });
  }

  onChange: (value: number | null) => void = () => void 0;
  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
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
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({ emitEvent: false });

    this.onValidatorChange?.();
  }

  getCaches(): void {
    combineLatest([this.storeServ.getZipCodesCache()]
    ).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this.cities = new List<ZipCodeView>(zipCodeViews).DistinctBy(
          item => item.city).Select(item => item.city).ToArray();
        this.districts = new List<ZipCodeView>(zipCodeViews).Select(
          item => ({ id: item.id, code: item.code, city: item.city, district: item.district })).ToArray();
      }
    });
  }

  doReverseZipCodeId(id: number): void {
    if (id) {
      const twZipCode = new List(this.districts).Where(w => w?.id === id).FirstOrDefault();
      this.f['city'].setValue(twZipCode?.city);
      this.f['district'].setValue(twZipCode?.district);
    }
  }

  doSetValidators(): void {
    if (this.required) {
      this.f['city'].setValidators([Validators.required]);
      this.f['district'].setValidators([Validators.required]);
    } else {
      this.f['city'].setValidators(Validators.nullValidator);
      this.f['district'].setValidators(Validators.nullValidator);
    }
    this.f['city'].updateValueAndValidity();
    this.f['district'].updateValueAndValidity();
  }

  onDistrictSelectionChange(city: string | null, district: string | null, targetCtrl: AbstractControl): void {
    if (!city || !district) {
      return;
    }

    const dist = this.districts.find(item => item.city === city && item.district === district);
    if (!dist) {
      return;
    }
    targetCtrl.setValue(dist.id);
  }
}
