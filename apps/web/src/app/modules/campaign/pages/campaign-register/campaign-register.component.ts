import { Component, Injector, OnInit } from '@angular/core';
/*
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { environment as env } from '../../../../../environments/environment';

// Third party packages
import { List } from 'linqts';

// Custom packages
import { CampaignView, CampRegInfo, CustomerStatuses } from 'src/app/models';
import {
  CampaignApiService, CommerceApiService, CustomerApiService, SharedStaticDataService
} from 'src/app/services';
 */
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-campaign-register',
  templateUrl: './campaign-register.component.html',
  styleUrls: ['./campaign-register.component.scss']
})
export class CampaignRegisterComponent extends BBDBaseComponent implements OnInit {
  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('CampaignRegisterComponent');
  }
  /*
  // Properties
  public currId = 0;
  public campaignView: CampaignView = null;
  public campRegInfo: CampRegInfo = new CampRegInfo();
  public basicForm: FormGroup;
  public corrForm: FormGroup;
  public env = env;
  public isCompleted = false;

  // Caches
  public campaignTypes$ = this.storeService.campaignTypeCache$;
  public campaignStatusInfos$ = this.campaignApiService.getCampaignStatusInfos();
  public genders$ = this.sharedStaticDataService.getGenders();
  public cities: any[] = [];
  public districts: any[] = [];

  // Gets & Sets
  get bf(): { [key: string]: AbstractControl } {
    return this.basicForm.controls;
  }

  get cf(): { [key: string]: AbstractControl } {
    return this.corrForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private campaignApiService: CampaignApiService,
    private commerceApiService: CommerceApiService,
    private customerApiService: CustomerApiService,
    private sharedStaticDataService: SharedStaticDataService,
    protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(() => {
        this.currId = +this.route.snapshot.paramMap.get('id');
        this.getCampaignView();
      });

    this.getCaches();
    this.doFormInit();
  }

  getCaches(): void {
    combineLatest(
      [
        this.storeService.twZipCodeCache$
      ]
    ).subscribe(([twZipCodes]) => {
      if (twZipCodes) {
        this.cities = new List<any>(twZipCodes).DistinctBy(item => item.city).Select(item => item.city).ToArray();
        this.districts = new List<any>(twZipCodes)
          .Select(item => ({ city: item.city, district: item.district, zipCode: item.zipCode })).ToArray();
      }
    });
  }

  getCampaignView(): void {
    this.spinnerService.show();
    this.campaignApiService.getActiveCampaignViewById(this.currId)
      .subscribe(
        res => {
          if (!res) {
            this.notificationService.open('查無任何資料。');
            this.router.navigate(['/campaign/list/']);
            return;
          }

          this.campaignView = res;

          if (!this.campaignView.isOpenReg && !this.isSignin) {
            this.router.navigate(['/account/signin'], { queryParams: { return: '/campaign/register/' + this.currId } });
            return;
          }

          if (!this.campaignView.canPreCustReg && (this.currUserInfo.sidStatus !== +CustomerStatuses.正式會員))
          {
            this.dialogService.openPrompt('此活動目前僅限正式會員報名參與，謝謝您。');
            this.router.navigate(['/campaign/detail/', this.campaignView.id]);
            return;
          }

          this.campaignApiService.doCalcCampaignRegPercent(this.campaignView);
          this.doDataInit();
        },
        err => {
          if (err.status === 401) {
            return;
          }
          this.notificationService.open(`查詢時發生錯誤。訊息：「${err?.error?.errorMessage}」`);
        },
      ).add(() => this.spinnerService.hide());
  }

  doFormInit(): void {
    this.basicForm = this.fb.group({
      custIdNo: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      custName: [null, [Validators.required, Validators.maxLength(20)]],
      custGender: [null, [Validators.required]],
      meal: [null, [Validators.required]],
      couponCode: [null, [Validators.maxLength(10)]],
      needCert: [null, [Validators.required]],
      needLtCredit: [null, [Validators.required]],
      needNsCredit: [null, [Validators.required]],
      presentCompany: [null, [Validators.required]],
      presentDept: [null, [Validators.required]],
      presentTitle: [null, [Validators.required]],
    });

    this.corrForm = this.fb.group({
      custMobile: [null, [Validators.required, Validators.maxLength(10)]],
      custTel: [null, [Validators.maxLength(10)]],
      custTelExt: [null, [Validators.maxLength(8)]],
      custEmail: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
      corrZipCode: [null, [Validators.required, Validators.maxLength(6)]],
      corrCity: [null, [Validators.required]],
      corrDistrict: [null, [Validators.required]],
      corrAddr: [null, [Validators.required]],
    });
  }

  doFormPatchValue(): void {
    this.basicForm.patchValue(this.campRegInfo);
    this.corrForm.patchValue(this.campRegInfo);
  }

  doFormReset(): void {
    this.basicForm.reset();
    this.corrForm.reset();
  }

  doDataInit(): void {
    if (!this.campRegInfo) {
      this.campRegInfo = new CampRegInfo();
    }

    this.campRegInfo.campId = this.campaignView.id;
    this.campRegInfo.campNameTc = this.campaignView.nameTc;
    this.doFormPatchValue();

    if (this.isSignin) {
      this.customerApiService.getCurrCustomerDefautCampRegInfo()
        .subscribe(res => {
          if (!res) {
            return;
          }

          if (res.corrZipCode) {
            const district = this.districts.find(item => item.zipCode === res.corrZipCode);
            res.corrCity = district?.city || null;
            res.corrDistrict = district?.district || null;
          }

          Object.assign(this.campRegInfo, res);
          this.doFormPatchValue();
        });
    }
  }

  canPayment(): boolean {
    if (!this.campaignView) {
      return false;
    }

    if (this.isSignin) {
      return (this.campaignView.salePrice > 0 ? true : false);
    }

    return (this.campaignView.pricing > 0 ? true : false);
  }

  canSaving(): boolean {
    // Form fields check
    // tslint:disable-next-line: forin
    for (const key in this.basicForm.controls) {
      this.basicForm.controls[key].markAsPristine();
      this.basicForm.controls[key].updateValueAndValidity();
    }

    this.basicForm.markAllAsTouched();

    if (this.basicForm.valid === false) {
      return false;
    }

    // Form fields check
    // tslint:disable-next-line: forin
    for (const key in this.corrForm.controls) {
      this.corrForm.controls[key].markAsPristine();
      this.corrForm.controls[key].updateValueAndValidity();
    }

    this.corrForm.markAllAsTouched();

    if (this.corrForm.valid === false) {
      return false;
    }

    Object.assign(this.campRegInfo, this.basicForm.value);
    Object.assign(this.campRegInfo, this.corrForm.value);
    this.campRegInfo.content = JSON.stringify({
      campData: {
        id: this.campaignView.id,
        nameTc: this.campaignView.nameTc
      },
      regData: this.campRegInfo
    });

    if (this.isSignin) {
      this.campRegInfo.custId = this.currUserInfo.appUserSid;
    }

    return true;
  }

  onDistrictSelectionChange(city: any, district: any, targetCtrl: AbstractControl): void {
    if (!city || !district) {
      return;
    }

    if (!targetCtrl) {
      return;
    }

    const zipCode = this.districts.find(dist => dist.city === city && dist.district === district.value)?.zipCode;

    targetCtrl.setValue(zipCode);
  }

  onScrollTop(): void {
    window.scrollTo(0, 0);
  }

  onSubmit(): void {
    if (this.canSaving() === false) {
      return;
    }

    this.spinnerService.show();
    this.campaignApiService.registerCampaign(this.campRegInfo)
      .subscribe(res => {
        if (!res) {
          this.notificationService.open(`報名失敗，請再重試一次，謝謝您。`);
          return;
        }

        if (!res.isPayable || !res.allowPaymentFlow) {
          this.isCompleted = true;
          this.notificationService.open(`報名成功。`);
          return;
        }

        this.commerceApiService.setPostReq(res.postReq);
        this.router.navigate(['/commerce/payment/redirect']);
      },
        err => {
          if (err.status === 401) {
            return;
          }
          this.notificationService.open(`報名時發生錯誤。訊息：「${err?.error?.errorMessage}」`);
        }).add(() => this.spinnerService.hide());

  }
*/
}
