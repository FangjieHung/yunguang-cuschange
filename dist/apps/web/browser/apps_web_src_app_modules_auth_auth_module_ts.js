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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 34502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages



const routes = [{
  path: 'forget-password',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordComponent
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
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent];
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
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent],
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
/* harmony export */   ForgetPasswordComponent: () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class ForgetPasswordComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  ngOnInit() {
    console.log('');
  }
  static {
    this.ɵfac = function ForgetPasswordComponent_Factory(t) {
      return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgetPasswordComponent,
      selectors: [["app-forget-password"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function ForgetPasswordComponent_Template(rf, ctx) {},
      styles: [".field[_ngcontent-%COMP%] {\n    width: 100%\n}\n@media (min-width: 1024px) {\n    .field[_ngcontent-%COMP%] {\n        width: 50%\n    }\n}\n.field[_ngcontent-%COMP%]   span[class^=floating-][_ngcontent-%COMP%] {\n    display: flex;\n    height: 10rem;\n    width: 10rem;\n    align-items: center;\n    justify-content: center;\n    border-radius: 9999px;\n    border-width: 4px;\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n    --tw-bg-opacity: 0.6;\n    font-size: 1.125rem;\n    font-weight: 700;\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n    outline-style: solid\n}\n@media (min-width: 1024px) {\n    .field[_ngcontent-%COMP%]   span[class^=floating-][_ngcontent-%COMP%] {\n        height: 12rem;\n        width: 12rem;\n        font-size: 1.25rem\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQTtBQUFBO0FBQUE7SUFBQTtRQUFBO0lBQUE7QUFBQTtBQUdJO0lBQUEsYUFBQTtJQUFBLGFBQUE7SUFBQSxZQUFBO0lBQUEsbUJBQUE7SUFBQSx1QkFBQTtJQUFBLHFCQUFBO0lBQUEsaUJBQUE7SUFBQSxzQkFBQTtJQUFBLDREQUFBO0lBQUEsb0JBQUE7SUFBQSxtQkFBQTtJQUFBLGdCQUFBO0lBQUEsb0JBQUE7SUFBQSxtREFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUEsYUFBQTtRQUFBLFlBQUE7UUFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQge1xuICAgIEBhcHBseSB3LWZ1bGwgbGc6dy0xLzI7XG5cbiAgICBzcGFuW2NsYXNzXj0nZmxvYXRpbmctJ10ge1xuICAgICAgICBAYXBwbHkgZm9udC1ib2xkIHRleHQtd2hpdGUgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIG91dGxpbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctb3BhY2l0eS02MCByb3VuZGVkLWZ1bGxcbiAgICAgICAgdy00MCBoLTQwIHRleHQtbGcgbGc6dy00OCBsZzpoLTQ4IGxnOnRleHQteGw7XG4gICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony export */   ForgetPasswordComponent: () => (/* reexport safe */ _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordComponent),
/* harmony export */   SigninComponent: () => (/* reexport safe */ _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent),
/* harmony export */   SignupCompletedComponent: () => (/* reexport safe */ _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupCompletedComponent),
/* harmony export */   SignupComponent: () => (/* reexport safe */ _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent)
/* harmony export */ });
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 38232);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ 43698);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 33286);




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













function SigninComponent_mat_error_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r4);
  }
}
function SigninComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SigninComponent_mat_error_21_div_1_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.formHelper.errorMsgs(ctx_r0.f["account"].errors, "\u5E33\u865F"));
  }
}
function SigninComponent_mat_error_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r6);
  }
}
function SigninComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SigninComponent_mat_error_34_div_1_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["password"].errors, "\u5BC6\u78BC"));
  }
}
function SigninComponent_a_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u5FD8\u8A18\u5BC6\u78BC?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
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
      console.log('account upper');
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
      decls: 51,
      vars: 14,
      consts: [[1, "sky-gradient-animated", "flex", "items-center", "justify-center", "h-full", "relative"], [1, "floating-bg", "rotate-[160deg]", "opacity-70"], ["src", "/assets/image/illustration/sphere-001.webp", "alt", "", 1, "sphere-01"], ["src", "/assets/image/illustration/sphere-002.webp", "alt", "", 1, "sphere-02"], [1, "relative", "grid", "items-center", "gap-y-5", "gap-x-10", "max-w-6xl", "w-full", "mx-auto", "lg:grid-cols-2"], ["src", "assets/image/logo/mark.png", "alt", "logo", 1, "w-32", "mx-auto", "md:w-40", "lg:w-full", "max-w-md"], [1, "block", "w-full", "max-w-64", "mx-auto", "xs:max-w-none", "sm:max-w-md"], [1, "p-6"], [1, "text-2xl", "font-bold", "text-center", "mb-5", "mt-2"], [3, "formGroup"], [1, "space-y-5"], [1, "form-label"], [1, "required-mark"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "account", 3, "required"], ["class", "text-sm", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", 3, "required", "type", "keydown.enter"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "material-symbols-rounded"], [1, "mb-5", "space-y-5"], [1, "flex", "justify-between", "items-center"], ["color", "primary"], [1, "text-base", "-ml-2"], ["class", "btn-text", "routerLink", "/auth/forget-password", 4, "ngIf"], ["href", "mailto:hello@sparkgen.cc", 1, "btn-text"], [1, "btn-primary", "btn-lg", 3, "click"], ["mat-button", "", "routerLink", "/auth/signup", 1, "btn-lg"], [1, "text-center", "text-sm", "m-auto", "text-slate-500", "mt-auto", "mb-0"], ["target", "_blank", "routerLink", "/auth/policy"], [1, "text-sm"], [4, "ngFor", "ngForOf"], ["routerLink", "/auth/forget-password", 1, "btn-text"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2)(3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "web-glass-bg", 6)(7, "div", 7)(8, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u6B61\u8FCE\u56DE\u4F86!");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 9)(11, "ul", 10)(12, "li")(13, "div", 11)(14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u5E33\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SigninComponent_mat_error_21_Template, 2, 1, "mat-error", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li")(23, "div", 11)(24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u5BC6\u78BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 13)(29, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SigninComponent_Template_input_keydown_enter_29_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_31_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SigninComponent_mat_error_34_Template, 2, 1, "mat-error", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19)(36, "div", 20)(37, "mat-checkbox", 21)(38, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u8A18\u4F4F\u6211");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, SigninComponent_a_40_Template, 2, 0, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u5FD8\u8A18\u5BC6\u78BC? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_43_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u767B\u5165");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u8A3B\u518A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u767B\u5165\u6216\u8A3B\u518A\u5373\u8868\u793A\u60A8\u540C\u610F\u6211\u5011\u7684 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\u96B1\u79C1\u6B0A\u8207\u670D\u52D9\u653F\u7B56");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.validateForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 10, ctx.f["account"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["account"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 12, ctx.f["password"]))("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "hide password")("aria-pressed", ctx.hidePassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["password"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_2__.GlassBgComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe],
      styles: [".bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0px;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.signin-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.signin-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  max-width: 56rem;\n  overflow: hidden;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(186 230 253 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@media (min-width: 768px) {\n\n  .signin-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.signin-container[_ngcontent-%COMP%] {\n  border-radius: 2.25rem;\n}\n\n.logo-tl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  left: 2.25rem;\n  width: 9rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxrQkFBQTtFQUFBLFVBQUE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEsZ0JBQUE7RUFBQSxnQkFBQTtFQUFBLGlCQUFBO0VBQUEsc0JBQUE7RUFBQSw0REFBQTtFQUFBLGtCQUFBO0VBQUEsNERBQUE7RUFBQSwrRUFBQTtFQUFBLG1HQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFESjtFQUVJLHNCQUFBO0FBQ0o7O0FBR0k7RUFBQSxrQkFBQTtFQUFBLFNBQUE7RUFBQSxhQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWFnZSB7XG4gICAgQGFwcGx5IGFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXI7XG59XG5cbi5zaWduaW4taW1nIHtcbiAgICBAYXBwbHkgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXI7XG59XG5cbi5zaWduaW4tY29udGFpbmVyIHtcbiAgICBAYXBwbHkgYmctd2hpdGUgZ3JpZCBtZDpncmlkLWNvbHMtMiB3LWZ1bGwgbWF4LXctNHhsIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLXNreS0yMDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDIuMjVyZW1cbn1cblxuLmxvZ28tdGwge1xuICAgIEBhcHBseSBhYnNvbHV0ZSB0b3AtOCBsZWZ0LTkgdy0zNjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 68477);
/* harmony import */ var _shared_widgets_cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/widgets/cust-edit-widget/cust-edit-widget.component */ 90252);

// Custom packages





class SignupComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.custApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.CustApiServ);
  }
  ngOnInit() {
    console.log('');
  }
  static {
    this.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 31,
      vars: 4,
      consts: [[1, "sky-gradient-animated", "overflow-auto"], [1, "floating-bg", "opacity-70"], ["src", "/assets/image/illustration/sphere-001.webp", "alt", "", 1, "sphere-01"], ["src", "/assets/image/illustration/sphere-002.webp", "alt", "", 1, "sphere-02"], [1, "max-w-container", "relative"], [1, "display", "d-black", "text-pretty"], [1, "headline", "font-bold", "mt-4"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start"], ["label", "\u500B\u4EBA\u6703\u54E1"], [1, "mb-2"], [1, "text-base", "list-circle", "pl-4", "space-y-2", "mt-4"], [3, "custId", "type"], ["label", "\u5718\u9AD4\u6703\u54E1"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2)(3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h2")(6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Join the Future of Smart Diagnostics");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u8A3B\u518A\u6703\u54E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-tab-group", 7)(11, "mat-tab", 8)(12, "header", 9)(13, "ol", 10)(14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " \u5165\u6703\u8CBB\u7528\uFF1A\u500B\u4EBA\u6703\u54E1\u5165\u6703\u8CBB\u53C3\u4F70\u5143\uFF0C\u5E38\u5E74\u8CBB\u9678\u4F70\u5143\uFF0C\u5408\u8A08\u7396\u4F70\u5143\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u5B78\u751F\u6703\u54E1\u5165\u6703\u8CBB\u8CB3\u4F70\u5143\uFF0C\u5E38\u5E74\u8CBB\u53C3\u4F70\u5143\uFF0C\u5408\u8A08\u4F0D\u4F70\u5143\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Regular membership: Joining fee 300 NTD, Annual fee 600 NTD, Total 900 NTD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Student membership: Joining fee 200 NTD, Annual fee 300 NTD, Total 500 NTD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "web-cust-edit-widget", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-tab", 12)(24, "header", 9)(25, "ol", 10)(26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u5718\u9AD4\u6703\u54E1\u5165\u6703\u8CBB\u53C3\u4EDF\u5143\uFF0C\u5E38\u5E74\u8CBB\u53C3\u4EDF\u5143\uFF0C\u5408\u8A08\u9678\u4EDF\u5143\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Group membership: Joining fee 3000 NTD, Annual fee 3000 NTD, Total 6000 NTD");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "web-cust-edit-widget", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("custId", 0)("type", +ctx.custApiServ.customerTypes["\u500B\u4EBA\u6703\u54E1"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("custId", 0)("type", +ctx.custApiServ.customerTypes["\u5718\u9AD4\u6703\u54E1"]);
        }
      },
      dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _shared_widgets_cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_2__.CustEditWidgetComponent],
      styles: ["web-glass-bg[_ngcontent-%COMP%] {\n\n    display: block;\n\n    width: 100%\n}\n\n.title[_ngcontent-%COMP%] {\n\n    margin-bottom: 1rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(0 0 0 / var(--tw-text-opacity, 1))\n}\n\nform[_ngcontent-%COMP%] {\n\n    display: grid;\n\n    gap: 1.5rem;\n\n    padding: 1rem\n}\n\n@media (min-width: 1024px) {\n\n    form[_ngcontent-%COMP%] {\n\n        grid-template-columns: repeat(3, minmax(0, 1fr))\n    }\n\n    form[_ngcontent-%COMP%]   web-glass-bg[_ngcontent-%COMP%] {\n\n        grid-column: span 2 / span 2\n    }\n}\nform[_ngcontent-%COMP%]   web-glass-bg[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n\n    padding-left: 2rem;\n\n    padding-right: 2rem;\n\n    padding-top: 1rem\n}\nform[_ngcontent-%COMP%]   .multi-inputs[_ngcontent-%COMP%] {\n\n    display: grid;\n\n    gap: 0.5rem\n}\nform[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:not(:first-of-type) {\n\n    border-top-width: 2px;\n\n    border-color: rgb(255 255 255 / 0.5);\n\n    padding-top: 1.25rem\n}\n\n.btn-white[_ngcontent-%COMP%] {\n\n    padding-left: 1.25rem;\n\n    padding-right: 1.25rem;\n\n    padding-top: 0.75rem;\n\n    padding-bottom: 0.75rem\n}\n\n.toolbar[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    align-items: center;\n\n    justify-content: flex-end\n}\n\n.toolbar[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n\n    --tw-space-x-reverse: 0;\n\n    margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n\n    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.toolbar[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n\n    margin-top: 1rem;\n\n    margin-bottom: 1rem;\n\n    height: 3.5rem;\n\n    width: 10rem;\n\n    border-radius: 9999px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsY0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUE7SUFBQTs7SUFHSTs7UUFBQTtJQUFBO0FBSEo7QUFPSTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQTtBQUFBO0FBSUE7O0lBQUEsYUFBQTs7SUFBQTtBQUFBO0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsb0NBQUE7O0lBQUE7QUFBQTs7QUFLSjs7SUFBQSxxQkFBQTs7SUFBQSxzQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGFBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQSx1QkFBQTs7SUFBQSxzREFBQTs7SUFBQTtBQUFBO0FBR0k7O0lBQUEsZ0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsY0FBQTs7SUFBQSxZQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ3ZWItZ2xhc3MtYmcge1xuICAgIEBhcHBseSBibG9jayB3LWZ1bGw7XG59XG5cbi50aXRsZSB7XG4gICAgQGFwcGx5IHRleHQtYmxhY2sgbWItNDtcbn1cblxuZm9ybSB7XG4gICAgQGFwcGx5IHAtNCBncmlkIGdhcC02IGxnOmdyaWQtY29scy0zO1xuXG4gICAgd2ViLWdsYXNzLWJnIHtcbiAgICAgICAgQGFwcGx5IGxnOmNvbC1zcGFuLTI7XG4gICAgfVxuXG4gICAgd2ViLWdsYXNzLWJnIHNlY3Rpb24ge1xuICAgICAgICBAYXBwbHkgcHgtOCBwdC00O1xuICAgIH1cblxuICAgIC5tdWx0aS1pbnB1dHMge1xuICAgICAgICBAYXBwbHkgZ3JpZCBnYXAtMjtcbiAgICB9XG5cbiAgICBzZWN0aW9uID4gdWw6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgIEBhcHBseSBib3JkZXItdC0yIGJvcmRlci13aGl0ZS81MCBwdC01O1xuICAgIH1cbn1cblxuLmJ0bi13aGl0ZSB7XG4gICAgQGFwcGx5IHB4LTUgcHktMztcbn1cblxuLnRvb2xiYXIge1xuICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTI7XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBAYXBwbHkgbXktNCBoLTE0IHctNDAgcm91bmRlZC1mdWxsO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}
class SignupCompletedComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  ngOnInit() {
    console.log('');
  }
  static {
    this.ɵfac = function SignupCompletedComponent_Factory(t) {
      return new (t || SignupCompletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SignupCompletedComponent,
      selectors: [["app-signup-completed"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      template: function SignupCompletedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\u8A3B\u518A\u5B8C\u6210\u9801\u9762\n");
        }
      },
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_auth_auth_module_ts.js.map