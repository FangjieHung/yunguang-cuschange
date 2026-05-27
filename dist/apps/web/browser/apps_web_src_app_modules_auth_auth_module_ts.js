"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_auth_auth_module_ts"],{

/***/ 43572:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/auth-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 50706);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 34502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages



const routes = [{
  path: 'login',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  data: {
    title: `登入客變系統｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: '登入客變系統',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/auth/login`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'forget-password',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.ForgetResetPasswordComponent,
  data: {
    title: `忘記密碼｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: '忘記密碼',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/auth/forget-password`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'signin',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.SigninComponent,
  data: {
    title: `登入｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: '登入',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/auth/signin`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'signup',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.SignupComponent,
  data: {
    title: `申請入會｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: '申請入會',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/auth/signup`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'signup/complete',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.SignupCompletedComponent,
  data: {
    title: `申請完成｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: '申請完成',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/auth/signup/complete`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(t) {
      return new (t || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 78101:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/auth/auth.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 43572);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 34502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages
//import { SharedModule } from '@core/shared';



const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.ForgetResetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent];
class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.ForgetResetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 38232:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/forget-password/forget-password.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetResetPasswordComponent: () => (/* binding */ ForgetResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/results/complete/complete.component */ 7398);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);


// Custom packages












function ForgetResetPasswordComponent_web_glass_bg_1_mat_error_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](msg_r4);
  }
}
function ForgetResetPasswordComponent_web_glass_bg_1_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ForgetResetPasswordComponent_web_glass_bg_1_mat_error_15_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.formHelper.errorMsgs(ctx_r2.f["account"].errors, "\u8EAB\u5206\u8B49\u5B57\u865F"));
  }
}
function ForgetResetPasswordComponent_web_glass_bg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "web-glass-bg", 3)(1, "div", 4)(2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u5FD8\u8A18\u5BC6\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 6)(5, "ul", 7)(6, "li")(7, "div", 8)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u8EAB\u5206\u8B49\u5B57\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "ctrlHasRequired");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ForgetResetPasswordComponent_web_glass_bg_1_mat_error_15_Template, 2, 1, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ForgetResetPasswordComponent_web_glass_bg_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u9001\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.valForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 3, ctx_r0.f["account"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.f["account"].errors);
  }
}
function ForgetResetPasswordComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "web-complete", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 18)(3, "a", 19)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u7ACB\u5373\u767B\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
class ForgetResetPasswordComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder);
    this._appUserApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppUserApiServ);
    // Properties
    this.request = new _core_models__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordReq();
    this.isCompleted = false;
  }
  ngOnInit() {
    this.doFormInit();
  }
  doFormInit() {
    this.valForm = this._fb.group({
      account: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]]
    });
    this.f['account'].valueChanges.subscribe(res => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res) this.f['account'].setValue(upperStr, {
        emitEvent: false
      });
    });
  }
  doFormPatchValue() {
    if (!this.request) {
      return;
    }
    this.valForm.patchValue(this.request);
  }
  canSubmit() {
    this.valForm.markAllAsTouched();
    if (this.valForm.valid === false) {
      Object.values(this.valForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({
            onlySelf: true
          });
        }
      });
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    if (!this.request) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    Object.assign(this.request, this.valForm.value);
  }
  onSubmit() {
    this.canSubmit();
    this.spinnerServ.show();
    this._appUserApiServ.forgetPassword(this.request).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error(`寄發失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`寄發成功。`);
        this.isCompleted = true;
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  static {
    this.ɵfac = function ForgetResetPasswordComponent_Factory(t) {
      return new (t || ForgetResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ForgetResetPasswordComponent,
      selectors: [["app-forget-password"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "flex", "items-center", "justify-center", "px-4", "md:pb-10"], ["class", "block w-full mx-auto md:max-w-sm", 4, "ngIf"], ["class", "min-h-container max-w-container mt-20", 4, "ngIf"], [1, "block", "w-full", "mx-auto", "md:max-w-sm"], [1, "p-6"], [1, "text-2xl", "font-bold", "text-center", "mb-5", "mt-2"], [3, "formGroup"], [1, "space-y-5"], [1, "form-label"], [1, "required-mark"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "account", 3, "required"], ["class", "text-xs", 4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "click"], [1, "text-xs"], [4, "ngFor", "ngForOf"], [1, "min-h-container", "max-w-container", "mt-20"], ["message", "\u5DF2\u5C07\u5BC6\u78BC\u5BC4\u9001\u81F3\u60A8\u7684\u96FB\u5B50\u4FE1\u7BB1"], [1, "complete-container"], ["routerLink", "/auth/signin", 1, "link-underline"], [1, "material-symbols-rounded"]],
      template: function ForgetResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ForgetResetPasswordComponent_web_glass_bg_1_Template, 18, 5, "web-glass-bg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ForgetResetPasswordComponent_div_2_Template, 8, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isCompleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCompleted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__.GlassBgComponent, _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_4__.CompleteComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 34502:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetResetPasswordComponent: () => (/* reexport safe */ _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetResetPasswordComponent),
/* harmony export */   LoginComponent: () => (/* reexport safe */ _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent),
/* harmony export */   SigninComponent: () => (/* reexport safe */ _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent),
/* harmony export */   SignupCompletedComponent: () => (/* reexport safe */ _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupCompletedComponent),
/* harmony export */   SignupComponent: () => (/* reexport safe */ _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent)
/* harmony export */ });
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 38232);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 54688);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 43698);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 33286);





/***/ }),

/***/ 54688:
/*!**********************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/login/login.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);






function LoginComponent_form_7_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8ACB\u8F38\u5165\u8EAB\u5206\u8B49\u672B 4 \u78BC\u6578\u5B57 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_7_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8ACB\u8F38\u5165\u6709\u6548\u7684\u624B\u6A5F\u865F\u78BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.requestOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u8EAB\u5206\u8B49\u672B\u56DB\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_7_p_5_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10)(7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u624B\u6A5F\u865F\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_form_7_p_10_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u53D6\u5F97\u9A57\u8B49\u78BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u9996\u6B21\u767B\u5165\uFF1F\u8ACB\u6383\u63CF\u5408\u7D04\u4E0A\u7684 QR Code\uFF0C\u6216\u806F\u7D61\u696D\u52D9\u53D6\u5F97\u5C08\u5C6C\u9023\u7D50\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r0.form.get("idLast4")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r0.form.get("idLast4")) == null ? null : tmp_1_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r0.form.get("phone")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r0.form.get("phone")) == null ? null : tmp_2_0.invalid));
  }
}
function LoginComponent_div_8_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LoginComponent_div_8_input_4_Template_input_input_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const i_r10 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onOtpInput(i_r10, $event));
    })("keydown", function LoginComponent_div_8_input_4_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const i_r10 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onOtpKey(i_r10, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.otpDigits[i_r10]);
  }
}
function LoginComponent_div_8_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u91CD\u65B0\u767C\u9001 (", ctx_r7.countdown, ")");
  }
}
function LoginComponent_div_8_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u91CD\u65B0\u767C\u9001\u9A57\u8B49\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_8_input_4_Template, 1, 1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_8_span_6_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_8_span_7_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.submitOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u767B\u5165 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.backToRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u8FD4\u56DE\u4FEE\u6539\u624B\u6A5F\u865F\u78BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u5DF2\u5C07\u9A57\u8B49\u78BC\u767C\u9001\u81F3 ", (tmp_0_0 = ctx_r1.form.get("phone")) == null ? null : tmp_0_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.otpDigits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.countdown > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.countdown > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.countdown === 0);
  }
}
class LoginComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.step = 'request';
    this.countdown = 0;
    this.timerId = null;
    this.otpDigits = ['', '', '', '', '', ''];
    this.form = this.fb.group({
      idLast4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(/^\d{4}$/)]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(/^09\d{8}$/)]]
    });
  }
  requestOtp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.step = 'verify';
    this.startCountdown();
  }
  resendOtp() {
    if (this.countdown > 0) return;
    this.startCountdown();
  }
  startCountdown() {
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
  onOtpInput(index, event) {
    const value = (event.target.value || '').replace(/\D/g, '').slice(-1);
    this.otpDigits[index] = value;
    event.target.value = value;
    if (value && index < 5) {
      const next = event.target.parentElement.querySelectorAll('input')[index + 1];
      next?.focus();
    }
  }
  onOtpKey(index, event) {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      const target = event.target;
      const prev = target.parentElement.querySelectorAll('input')[index - 1];
      prev?.focus();
    }
  }
  get otpComplete() {
    return this.otpDigits.every(d => d.length === 1);
  }
  submitOtp() {
    if (!this.otpComplete) return;
    this.router.navigate(['/customization/welcome']);
  }
  backToRequest() {
    this.step = 'request';
    this.otpDigits = ['', '', '', '', '', ''];
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.countdown = 0;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 14,
      vars: 2,
      consts: [[1, "otp-form-section"], [1, "otp-form", "card"], [1, "otp-form__head"], [1, "otp-form__title"], [1, "otp-form__lead"], ["class", "otp-form__body", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-form__body", 4, "ngIf"], [1, "otp-form__foot"], ["href", "tel:0800-000-000"], [1, "otp-form__body", 3, "formGroup", "ngSubmit"], [1, "otp-form__field"], [1, "otp-form__label"], ["type", "text", "inputmode", "numeric", "maxlength", "4", "formControlName", "idLast4", "placeholder", "\u4F8B\uFF1A1234", 1, "otp-form__input"], ["class", "otp-form__error", 4, "ngIf"], ["type", "tel", "inputmode", "numeric", "maxlength", "10", "formControlName", "phone", "placeholder", "09XX-XXX-XXX", 1, "otp-form__input"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "otp-form__submit"], [1, "otp-form__hint"], [1, "otp-form__error"], [1, "otp-form__body"], [1, "otp-form__verify-hint"], [1, "otp-form__digits"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "class", "otp-form__digit", 3, "value", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", 1, "otp-form__resend", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", "routerLink", "/customization/welcome", 1, "btn", "btn-primary", "btn-lg", "otp-form__submit", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", "otp-form__back", 3, "click"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "otp-form__digit", 3, "value", "input", "keydown"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u767B\u5165\u5BA2\u8B8A\u7CFB\u7D71");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5BCC\u83EF\u6F90\u5149 \u7DDA\u4E0A\u5BA2\u8B8A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_7_Template, 15, 3, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 12, 5, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 7)(10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u82E5\u9700\u5354\u52A9\uFF0C\u8ACB\u806F\u7D61\u5BA2\u670D\uFF1A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "0800-000-000");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step === "request");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step === "verify");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2NvcGVkIHR3ZWFrcyDDosKAwpQgbWFpbiBzdHlsaW5nIGluIGFzc2V0cy9zY3NzL2NvbXBvbmVudC9fb3RwLWZvcm0uc2Nzc1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 43698:
/*!************************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/signin/signin.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponent: () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);


// Custom packages













function SigninComponent_mat_error_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r3);
  }
}
function SigninComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SigninComponent_mat_error_16_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.formHelper.errorMsgs(ctx_r0.f["account"].errors, "\u5E33\u865F"));
  }
}
function SigninComponent_mat_error_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r5);
  }
}
function SigninComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SigninComponent_mat_error_29_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["password"].errors, "\u5BC6\u78BC"));
  }
}
class SigninComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.validateForm.controls;
  }
  constructor(fb, router, route, injector) {
    super(injector);
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.injector = injector;
    // Properties
    this.signinReq = new _core_models__WEBPACK_IMPORTED_MODULE_1__.SigninReq();
    this.hidePassword = true;
    this.next = null;
    this.doFormInit();
  }
  ngOnInit() {
    if (this.isSignin) {
      this.bbdNotifyServ.success('您已登入狀態，無需再登入');
      this.doNavDefUrl();
      return;
    }
    this.doRouteMap();
  }
  doFormInit() {
    this.validateForm = this.fb.group({
      account: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(15)]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    this.f['account'].valueChanges.subscribe(value => {
      if (!value) return;
      this.f['account'].setValue(String(value).trim().toUpperCase(), {
        emitEvent: false
      });
    });
  }
  doNavDefUrl() {
    if (this.next) {
      // navigate 無法使用queryParams 字串改用 navigateByUrl
      this.router.navigateByUrl(this.next);
    } else {
      this.router.navigate(['/']);
    }
  }
  doRouteMap() {
    this.route.queryParamMap.subscribe(() => {
      this.next = this.route.snapshot.queryParamMap.get('next');
    });
  }
  canSubmit() {
    if (this.validateForm.valid === false) {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({
            onlySelf: true
          });
        }
      });
      return false;
    }
    Object.assign(this.signinReq, this.validateForm.value);
    return true;
  }
  onSubmit() {
    if (this.canSubmit() === false) {
      return;
    }
    this.spinnerServ.show();
    this.appAuthApiServ.signin(this.signinReq).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error('登入失敗: 請確認您的帳號及密碼是否有效。');
          return;
        }
        this.storeServ.getCurrAuthUserCache();
        this.bbdNotifyServ.success('登入成功。');
        this.doNavDefUrl();
      },
      error: err => {
        this.appAuthApiServ.signout();
        this.bbdNotifyServ.error('登入失敗: 請確認您的帳號及密碼是否有效。', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  static {
    this.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 49,
      vars: 13,
      consts: [[1, "flex", "items-center", "justify-center", "px-4", "md:pb-10"], [1, "block", "w-full", "mx-auto", "md:max-w-sm"], [1, "p-6"], [1, "text-2xl", "font-bold", "text-center", "mb-5", "mt-2"], [3, "formGroup"], [1, "space-y-5"], [1, "form-label"], [1, "required-mark"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "account", 3, "required"], ["class", "text-sm", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", 3, "required", "type", "keydown.enter"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "material-symbols-rounded"], [1, "mb-5", "space-y-5"], [1, "flex", "justify-between", "items-center"], ["color", "primary"], [1, "text-base", "-ml-2"], ["routerLink", "/auth/forget-password", 1, "btn-text"], [1, "btn-primary", "btn-lg", 3, "click"], ["routerLink", "/auth/signup", 1, "btn-lg"], [1, "terms-wrap"], [1, "w-full"], ["target", "_blank", "routerLink", "/about/privacy"], ["target", "_blank", "routerLink", "/about/terms"], [1, "text-sm"], [4, "ngFor", "ngForOf"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "web-glass-bg", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u6B61\u8FCE\u56DE\u4F86!");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4)(6, "ul", 5)(7, "li")(8, "div", 6)(9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u5E33\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SigninComponent_mat_error_16_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li")(18, "div", 6)(19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u5BC6\u78BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 8)(24, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SigninComponent_Template_input_keydown_enter_24_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_26_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SigninComponent_mat_error_29_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14)(31, "div", 15)(32, "mat-checkbox", 16)(33, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u8A18\u4F4F\u6211");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u5FD8\u8A18\u5BC6\u78BC?");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_37_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u767B\u5165");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\u8A3B\u518A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 21)(42, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u767B\u5165\u6216\u8A3B\u518A\u5373\u8868\u793A\u60A8\u540C\u610F\u6211\u5011\u7684");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u96B1\u79C1\u6B0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " \u8207 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u670D\u52D9\u653F\u7B56");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.validateForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 9, ctx.f["account"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["account"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 11, ctx.f["password"]))("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "hide password")("aria-pressed", ctx.hidePassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["password"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_2__.GlassBgComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe],
      styles: [".terms-wrap[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    text-align: center;\n    font-size: 1.125rem;\n    --tw-text-opacity: 1;\n    color: rgb(100 116 139 / var(--tw-text-opacity, 1))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxZQUFBO0lBQUEsYUFBQTtJQUFBLGVBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0lBQUEsbUJBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtd3JhcCB7XG4gICAgQGFwcGx5IGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHRleHQtc20gbS1hdXRvIHRleHQtc2xhdGUtNTAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 33286:
/*!************************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/signup/signup.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupCompletedComponent: () => (/* binding */ SignupCompletedComponent),
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 68477);
/* harmony import */ var _shared_widgets_cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/widgets/cust-edit-widget/cust-edit-widget.component */ 90252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/results/complete/complete.component */ 7398);

// Custom packages







class SignupComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.custApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.CustApiServ);
  }
  static {
    this.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 31,
      vars: 4,
      consts: [[1, "display", "d-black"], [1, "max-w-container", "px-0"], [1, "tab-label-lg", "stretch-none-dk"], ["label", "\u8A3B\u518A\u500B\u4EBA\u6703\u54E1"], [1, "tab-container"], [1, "lg:col-span-2"], [3, "custId", "type"], ["label", "\u8A3B\u518A\u5718\u9AD4\u6703\u54E1"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Join the Future");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "of Smart Diagnostics");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1)(6, "mat-tab-group", 2)(7, "mat-tab", 3)(8, "div", 4)(9, "header")(10, "ol")(11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u5165\u6703\u8CBB\u7528\uFF1A\u500B\u4EBA\u6703\u54E1\u5165\u6703\u8CBB\u53C3\u4F70\u5143\uFF0C\u5E38\u5E74\u8CBB\u9678\u4F70\u5143\uFF0C\u5408\u8A08\u7396\u4F70\u5143\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u5B78\u751F\u6703\u54E1\u5165\u6703\u8CBB\u8CB3\u4F70\u5143\uFF0C\u5E38\u5E74\u8CBB\u53C3\u4F70\u5143\uFF0C\u5408\u8A08\u4F0D\u4F70\u5143\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Regular membership: Joining fee 300 NTD, Annual fee 600 NTD, Total 900 NTD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Student membership: Joining fee 200 NTD, Annual fee 300 NTD, Total 500 NTD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "web-cust-edit-widget", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-tab", 7)(22, "div", 4)(23, "header")(24, "ol")(25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u5718\u9AD4\u6703\u54E1\u5165\u6703\u8CBB\u53C3\u4EDF\u5143\uFF0C\u5E38\u5E74\u8CBB\u53C3\u4EDF\u5143\uFF0C\u5408\u8A08\u9678\u4EDF\u5143\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Group membership: Joining fee 3000 NTD, Annual fee 3000 NTD, Total 6000 NTD");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "web-cust-edit-widget", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("custId", 0)("type", +ctx.custApiServ.customerTypes["\u500B\u4EBA\u6703\u54E1"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("custId", 0)("type", +ctx.custApiServ.customerTypes["\u5718\u9AD4\u6703\u54E1"]);
        }
      },
      dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _shared_widgets_cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_2__.CustEditWidgetComponent],
      styles: [".display[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.25rem;\n  left: 1.25rem;\n  text-wrap: pretty;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 1.25rem;\n}\n\n@media (min-width: 1024px) {\n\n  .tab-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.tab-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-top: 1.25rem;\n}\n@media (min-width: 640px) {\n\n  .tab-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n}\n\nheader[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%] {\n  list-style-type: circle;\n}\n\nheader[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\nheader[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%] {\n  padding-left: 1.75rem;\n  font-size: 1.25rem;\n}\n\n@media screen and (max-width: 640px) {\n  .max-w-container[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxlQUFBO0VBQUEsZUFBQTtFQUFBLGFBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsYUFBQTtFQUFBLGdEQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUdJO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTs7RUFBQTtJQUFBLGdCQUFBO0lBQUE7RUFBQTtBQUFBOztBQUtKO0VBQUE7QUFBQTs7QUFBQTtFQUFBLHVCQUFBO0VBQUEsOERBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEscUJBQUE7RUFBQTtBQUFBOztBQUtBO0VBRko7SUFHUSxlQUFBO0lBQ0EsZ0JBQUE7RUFETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXkge1xuICAgIEBhcHBseSB0ZXh0LXByZXR0eSBmaXhlZCBib3R0b20tNSBsZWZ0LTU7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBAYXBwbHkgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNSBsZzpncmlkLWNvbHMtMztcblxuICAgIGhlYWRlciB7XG4gICAgICAgIEBhcHBseSBtdC01IG14LTQgc206bXgtMDtcbiAgICB9XG59XG5cbmhlYWRlciA+IG9sIHtcbiAgICBAYXBwbHkgdGV4dC1iYXNlIGxpc3QtY2lyY2xlIHBsLTcgc3BhY2UteS0yO1xufVxuXG4ubWF4LXctY29udGFpbmVyIHtcbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
class SignupCompletedComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  static {
    this.ɵfac = function SignupCompletedComponent_Factory(t) {
      return new (t || SignupCompletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SignupCompletedComponent,
      selectors: [["app-signup-completed"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 0,
      consts: [[1, "min-h-container", "max-w-container", "mt-20"], ["message", "\u8A3B\u518A\u6210\u529F\uFF01"], [1, "complete-container"], [1, "text-lg"], ["routerLink", "/auth/signin", 1, "link-underline"], [1, "material-symbols-rounded"]],
      template: function SignupCompletedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "web-complete", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u767B\u5165\u5F8C\u5373\u4EAB\u53D7\u6703\u54E1\u7368\u6709\u7684\u529F\u80FD\u8207\u670D\u52D9\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 4)(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u7ACB\u5373\u767B\u5165");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "arrow_right_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__.CompleteComponent],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_auth_auth_module_ts.js.map