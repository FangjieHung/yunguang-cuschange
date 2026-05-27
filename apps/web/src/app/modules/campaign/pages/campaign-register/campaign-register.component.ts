/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment as env } from '../../../../../environments/environment';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { CampaignView } from '@core/models';
import { CampaignApiServ, CommerceApiServ, SEOServ } from '@core/services';
import { CampRegControlComponent } from '../../../../shared/controls';

@Component({
  selector: 'app-campaign-register',
  templateUrl: './campaign-register.component.html',
  styleUrls: ['./campaign-register.component.scss']
})
export class CampaignRegisterComponent extends BBDBaseComponent implements OnInit {
  @ViewChild(CampRegControlComponent) regDataCtrl!: CampRegControlComponent;

  private _campaignApiServ = inject(CampaignApiServ);
  private _commerceApiServ = inject(CommerceApiServ);
  private _fb = inject(FormBuilder);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

  private _campUniqueId = '';
  isCompleted = false;
  allowPayFlow = false;
  valForm!: UntypedFormGroup;
  response: CampaignView | null = null;

  get f(): { [key: string]: AbstractControl } {
    return this.valForm.controls;
  }

  constructor(
    protected override injector: Injector) {
    super(injector);
    this.doFormInit();
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._campUniqueId = params.get('campUniqueId') || '';
      this.doDataInit();
    });
  }

  doDataInit(): void {
    this._campaignApiServ.getCampaignViewByUniqueId(this._campUniqueId)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.onGoHome();
            return;
          }

          this.response = res;
          this.allowPayFlow = this.isSignin ? this.response.salePrice > 0 : this.response.pricing > 0;
          this.doFormPatchValue();

          // SEO tags
          const seoData = this._route.snapshot.data;
          this._seoServ.updateMetaTags(
            `${this.response.name}｜${env.siteName}`,
            `${env.siteServer}/campaign/detail/${this._campUniqueId}`,
            seoData['image'],
            this.response.name);
        },
        error: (err) => {
          this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
          this.onGoHome();
        },
      });
  }

  doFormInit(): void {
    this.valForm = this._fb.group({
      regData: [null]
    });
  }

  doFormPatchValue(): void {
    if (!this.response) {
      return;
    }
    this.valForm.patchValue(this.response);
  }

  canSubmit() {
    this.regDataCtrl?.markAllAsTouched();
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    if (!this.response || !this.response.regData) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    Object.assign(this.response, this.valForm.value);
    this.response.regData.campId = this.response.id;
  }

  onGoHome(): void {
    this._router.navigate(['/']);
  }
  onGoPayment(): void {
    this._router.navigate(['/result/payment-redirect']);
  }

  onSubmit(): void {
    this.canSubmit();
    if (!this.response?.regData) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }

    this.spinnerServ.show();
    this._campaignApiServ.campRegister(this.response.regData).subscribe({
      next: (res) => {
        if (!res) {
          this.bbdNotifyServ.error(`報名失敗，請再重試一次。`);
          return;
        }

        this.allowPayFlow = !((res.postReq || '').isUndefinedOrNullOrEmpty());
        if (!this.allowPayFlow) {
          this.bbdNotifyServ.success(`報名成功。`);
          this.isCompleted = true;
        } else {
          this._commerceApiServ.postReq = res.postReq;
          this.onGoPayment();
        }

      },
      error: (err) => {
        // this.bbdNotifyServ.error('執行失敗', err);
      },
    }).add(() => this.spinnerServ.hide());
  }
}
