/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
// import { ProdUnitDto } from '@core/models';
// Custom packages
import { BBDBaseComponent } from '../../bbd-base.component';
import { List } from 'linqts';
import { combineLatest } from 'rxjs';
import { ZipCodeView } from '../../../../models';

@Component({
  selector: 'bbd-zip-code-widget',
  templateUrl: './zip-code-widget.component.html',
  styleUrls: ['./zip-code-widget.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZipCodeWidgetComponent),
      multi: true
    }
  ]
})
export class ZipCodeWidgetComponent extends BBDBaseComponent implements OnInit, ControlValueAccessor {
  valForm!: UntypedFormGroup;
  _onChange: any;
  _onTouched: any;

  cities: any[] = [];
  districts: any[] = [];
  @Input() title = '';
  @Input() required: string | boolean = false;
  @Input() control: AbstractControl<any, any> | undefined;
  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    protected override injector: Injector
  ) {
    super(injector);
    this.getCaches();
    this.doFormInit();
  }

  ngOnInit(): void {
    // https://github.com/vmware-archive/clarity/issues/3191
    if (this.control) {
      this.control.markAsTouched = () => {
        // console.log('Control marked as touched');
        this.canSubmit();
      };
    }
  }

  // NG_VALUE_ACCESSOR 實作
  writeValue(value: any) {
    this.valForm = this.fb.group({
      id: [value,],
      city: [null,],
      district: [null,],
    });
    this.doSetValidators();

    if (this.districts.length) {
      this.doReverseZipCode(value);
    } else {
      // 防止跟不上快取處理
      setTimeout(() => {
        this.doReverseZipCode(value);
      }, 100);
    }

    this.f['id'].valueChanges.subscribe(res => {
      if (!res) {
        // 防呆，防止只選擇縣市被放行
        if (this.required) {
          this._onChange(null);
          return;
        }else{
          this._onChange(0);
          return;
        }
      }
      this._onChange(+res);
    });
  }
  registerOnChange(fn: (value: any) => void) { this._onChange = fn; }
  registerOnTouched(fn: any) { this._onTouched = fn; }
  // 使用 NG_VALIDATORS 需實作
  // validate({ value }: FormControl) {
  //   return !this.formArray || this.formArray.valid ?
  //     null : { error: "Some fields are not fullfilled" };
  // }

  doFormInit(): void {
    this.valForm = this.fb.group({
      id: [null,],
      city: [null,],
      district: [null,],
    });
  }

  getCaches(): void {
    combineLatest([this.storeServ.getZipCodesCache()]
    ).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this.cities = new List<ZipCodeView>(zipCodeViews).DistinctBy(
          item => item.city).Select(item => item.city).ToArray();
        this.districts = new List<ZipCodeView>(zipCodeViews).Select(
          item => ({ id: item.id, code: item.code, city: item.city, district: item.district, })).ToArray();
      }
    });
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

  doReverseZipCode(id: number): void {
    if (id) {
      const twZipCode = new List(this.districts).Where(w => w?.id === id).FirstOrDefault();
      this.f['city'].setValue(twZipCode?.city);
      this.f['district'].setValue(twZipCode?.district);
    }
  }

  canSubmit(): void {
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
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
}
