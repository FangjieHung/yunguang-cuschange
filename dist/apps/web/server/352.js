"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 9889:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/auth-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 48023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages



const routes = [{
  path: 'forget-password',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.ForgetResetPasswordComponent
}, {
  path: 'signin',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.SigninComponent
}, {
  path: 'signup',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.SignupComponent
}, {
  path: 'signup/complete',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.SignupCompletedComponent
}];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(t) {
      return new (t || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 27352:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/auth/auth.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 9889);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 53896);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 48023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);


// Custom packages
//import { SharedModule } from '@core/shared';



const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.ForgetResetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent];
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
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.ForgetResetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 87125:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/forget-password/forget-password.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetResetPasswordComponent: () => (/* binding */ ForgetResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/results/complete/complete.component */ 12193);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);


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
function ForgetResetPasswordComponent_web_complete_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "web-complete", 16);
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
      consts: [[1, "flex", "items-center", "justify-center", "px-4", "md:pb-10"], ["class", "block w-full mx-auto md:max-w-sm", 4, "ngIf"], ["message", "\u5DF2\u5C07\u5BC6\u78BC\u5BC4\u9001\u81F3\u60A8\u7684\u96FB\u5B50\u4FE1\u7BB1", 4, "ngIf"], [1, "block", "w-full", "mx-auto", "md:max-w-sm"], [1, "p-6"], [1, "text-2xl", "font-bold", "text-center", "mb-5", "mt-2"], [3, "formGroup"], [1, "space-y-5"], [1, "form-label"], [1, "required-mark"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "account", 3, "required"], ["class", "text-xs", 4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "click"], [1, "text-xs"], [4, "ngFor", "ngForOf"], ["message", "\u5DF2\u5C07\u5BC6\u78BC\u5BC4\u9001\u81F3\u60A8\u7684\u96FB\u5B50\u4FE1\u7BB1"]],
      template: function ForgetResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ForgetResetPasswordComponent_web_glass_bg_1_Template, 18, 5, "web-glass-bg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ForgetResetPasswordComponent_web_complete_2_Template, 1, 0, "web-complete", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isCompleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCompleted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__.GlassBgComponent, _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_4__.CompleteComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 48023:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetResetPasswordComponent: () => (/* reexport safe */ _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetResetPasswordComponent),
/* harmony export */   SigninComponent: () => (/* reexport safe */ _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent),
/* harmony export */   SignupCompletedComponent: () => (/* reexport safe */ _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent),
/* harmony export */   SignupComponent: () => (/* reexport safe */ _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent)
/* harmony export */ });
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 87125);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ 24927);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 38279);




/***/ }),

/***/ 24927:
/*!************************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/signin/signin.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponent: () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 52328);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);


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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SigninComponent_mat_error_16_div_1_Template, 2, 1, "div", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SigninComponent_mat_error_29_div_1_Template, 2, 1, "div", 25);
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
          this.bbdNotifyServ.error('登入失敗: 請確認電子信箱及密碼是否有效。');
          return;
        }
        this.storeServ.getCurrAuthUserCache();
        this.bbdNotifyServ.success('登入成功。');
        this.doNavDefUrl();
      },
      error: err => {
        this.appAuthApiServ.signout();
        this.bbdNotifyServ.error('登入失敗: 請確認電子信箱及密碼是否有效。', err);
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
      decls: 48,
      vars: 13,
      consts: [[1, "flex", "items-center", "justify-center", "px-4", "md:pb-10"], [1, "block", "w-full", "mx-auto", "md:max-w-sm"], [1, "p-6"], [1, "text-2xl", "font-bold", "text-center", "mb-5", "mt-2"], [3, "formGroup"], [1, "space-y-5"], [1, "form-label"], [1, "required-mark"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "account", 3, "required"], ["class", "text-sm", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", 3, "required", "type", "keydown.enter"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "material-symbols-rounded"], [1, "mb-5", "space-y-5"], [1, "flex", "justify-between", "items-center"], ["color", "primary"], [1, "text-base", "-ml-2"], ["routerLink", "/auth/forget-password", 1, "btn-text"], [1, "btn-primary", "btn-lg", 3, "click"], ["routerLink", "/auth/signup", 1, "btn-lg"], [1, "text-center", "text-sm", "m-auto", "text-slate-500", "mt-auto", "mb-0"], ["target", "_blank", "routerLink", "/about/privacy"], ["target", "_blank", "routerLink", "/about/terms"], [1, "text-sm"], [4, "ngFor", "ngForOf"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u767B\u5165\u6216\u8A3B\u518A\u5373\u8868\u793A\u60A8\u540C\u610F\u6211\u5011\u7684 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u96B1\u79C1\u6B0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u8207");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u670D\u52D9\u653F\u7B56");
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
      styles: [".bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0px;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.signin-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.signin-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  max-width: 56rem;\n  overflow: hidden;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(186 230 253 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@media (min-width: 768px) {\n\n  .signin-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.signin-container[_ngcontent-%COMP%] {\n  border-radius: 2.25rem;\n}\n\n.logo-tl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  left: 2.25rem;\n  width: 9rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxrQkFBQTtFQUFBLFVBQUE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEsZ0JBQUE7RUFBQSxnQkFBQTtFQUFBLGlCQUFBO0VBQUEsc0JBQUE7RUFBQSw0REFBQTtFQUFBLGtCQUFBO0VBQUEsNERBQUE7RUFBQSwrRUFBQTtFQUFBLG1HQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFESjtFQUVJLHNCQUFBO0FBQ0o7O0FBR0k7RUFBQSxrQkFBQTtFQUFBLFNBQUE7RUFBQSxhQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWFnZSB7XG4gICAgQGFwcGx5IGFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXI7XG59XG5cbi5zaWduaW4taW1nIHtcbiAgICBAYXBwbHkgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXI7XG59XG5cbi5zaWduaW4tY29udGFpbmVyIHtcbiAgICBAYXBwbHkgYmctd2hpdGUgZ3JpZCBtZDpncmlkLWNvbHMtMiB3LWZ1bGwgbWF4LXctNHhsIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLXNreS0yMDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDIuMjVyZW1cbn1cblxuLmxvZ28tdGwge1xuICAgIEBhcHBseSBhYnNvbHV0ZSB0b3AtOCBsZWZ0LTkgdy0zNjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 38279:
/*!************************************************************************!*\
  !*** ./apps/web/src/app/modules/auth/pages/signup/signup.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupCompletedComponent: () => (/* binding */ SignupCompletedComponent),
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 74807);
/* harmony import */ var _shared_widgets_cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/widgets/cust-edit-widget/cust-edit-widget.component */ 9513);
/* harmony import */ var _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/results/complete/complete.component */ 12193);

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
      consts: [[1, "pt-10", "xl:pt-5", "4xl:pt-0"], [1, "display", "d-black"], [1, "max-w-container", "px-0"], [1, "tab-label-lg", "stretch-none-dk"], ["label", "\u8A3B\u518A\u500B\u4EBA\u6703\u54E1"], [1, "tab-container"], [1, "lg:col-span-2"], [3, "custId", "type"], ["label", "\u8A3B\u518A\u5718\u9AD4\u6703\u54E1"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Join the Future");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "of Smart Diagnostics");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "mat-tab-group", 3)(7, "mat-tab", 4)(8, "div", 5)(9, "header")(10, "ol")(11, "li");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "web-cust-edit-widget", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-tab", 8)(22, "div", 5)(23, "header")(24, "ol")(25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u5718\u9AD4\u6703\u54E1\u5165\u6703\u8CBB\u53C3\u4EDF\u5143\uFF0C\u5E38\u5E74\u8CBB\u53C3\u4EDF\u5143\uFF0C\u5408\u8A08\u9678\u4EDF\u5143\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Group membership: Joining fee 3000 NTD, Annual fee 3000 NTD, Total 6000 NTD");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "web-cust-edit-widget", 7);
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
      styles: [".display[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.25rem;\n  left: 1.25rem;\n  text-wrap: pretty;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 1.25rem;\n}\n\n@media (min-width: 1024px) {\n\n  .tab-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.tab-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-top: 1.25rem;\n}\n@media (min-width: 640px) {\n\n  .tab-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n}\n\nheader[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%] {\n  list-style-type: circle;\n}\n\nheader[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\nheader[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%] {\n  padding-left: 1.75rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 640px) {\n  .max-w-container[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxlQUFBO0VBQUEsZUFBQTtFQUFBLGFBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsYUFBQTtFQUFBLGdEQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUdJO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTs7RUFBQTtJQUFBLGdCQUFBO0lBQUE7RUFBQTtBQUFBOztBQUtKO0VBQUE7QUFBQTs7QUFBQTtFQUFBLHVCQUFBO0VBQUEsOERBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEscUJBQUE7RUFBQTtBQUFBOztBQUtBO0VBRko7SUFHUSxlQUFBO0lBQ0EsZ0JBQUE7RUFETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXkge1xuICAgIEBhcHBseSB0ZXh0LXByZXR0eSBmaXhlZCBib3R0b20tNSBsZWZ0LTU7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBAYXBwbHkgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNSBsZzpncmlkLWNvbHMtMztcblxuICAgIGhlYWRlciB7XG4gICAgICAgIEBhcHBseSBtdC01IG14LTQgc206bXgtMDtcbiAgICB9XG59XG5cbmhlYWRlciA+IG9sIHtcbiAgICBAYXBwbHkgdGV4dC1iYXNlIGxpc3QtY2lyY2xlIHBsLTcgc3BhY2UteS0yO1xufVxuXG4ubWF4LXctY29udGFpbmVyIHtcbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
      decls: 1,
      vars: 0,
      consts: [["message", "\u8A3B\u518A\u6210\u529F\uFF01\u767B\u5165\u5F8C\u5373\u4EAB\u53D7\u6703\u54E1\u7368\u6709\u7684\u529F\u80FD\u8207\u670D\u52D9\u3002"]],
      template: function SignupCompletedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "web-complete", 0);
        }
      },
      dependencies: [_shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__.CompleteComponent],
      encapsulation: 2
    });
  }
}

/***/ })

};
;
//# sourceMappingURL=352.js.map