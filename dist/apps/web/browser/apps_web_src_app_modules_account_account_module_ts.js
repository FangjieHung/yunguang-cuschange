"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_account_account_module_ts"],{

/***/ 50186:
/*!********************************************************************!*\
  !*** ./apps/web/src/app/modules/account/account-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountRoutingModule: () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 20789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages



const routes = [{
  path: 'profile',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];
class AccountRoutingModule {
  static {
    this.ɵfac = function AccountRoutingModule_Factory(t) {
      return new (t || AccountRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AccountRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 59507:
/*!************************************************************!*\
  !*** ./apps/web/src/app/modules/account/account.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 50186);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 20789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages



// Config settings
const CUSTOM_MODULES = [_core_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent];
class AccountModule {
  static {
    this.ɵfac = function AccountModule_Factory(t) {
      return new (t || AccountModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AccountModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _core_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 20789:
/*!*********************************************************!*\
  !*** ./apps/web/src/app/modules/account/pages/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* reexport safe */ _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent)
/* harmony export */ });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 69475);


/***/ }),

/***/ 69475:
/*!*****************************************************************************!*\
  !*** ./apps/web/src/app/modules/account/pages/profile/profile.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
/* eslint-disable @typescript-eslint/no-explicit-any */





// Custom packages










function ProfileComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", msg_r18, " ");
  }
}
function ProfileComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_17_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["email"].errors, "\u96FB\u5B50\u4FE1\u7BB1(\u5E33\u865F)"));
  }
}
function ProfileComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r20);
  }
}
function ProfileComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_27_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["name"].errors, "\u59D3\u540D"));
  }
}
function ProfileComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r22);
  }
}
function ProfileComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_37_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.formHelper.errorMsgs(ctx_r5.f["nameEn"].errors, "\u82F1\u6587\u540D"));
  }
}
function ProfileComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", msg_r24, " ");
  }
}
function ProfileComponent_mat_error_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_47_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.formHelper.errorMsgs(ctx_r7.f["nickname"].errors, "\u66B1\u7A31"));
  }
}
function ProfileComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r26);
  }
}
function ProfileComponent_mat_error_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_57_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.formHelper.errorMsgs(ctx_r9.f["mobile"].errors, "\u624B\u6A5F"));
  }
}
function ProfileComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r28);
  }
}
function ProfileComponent_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_67_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.formHelper.errorMsgs(ctx_r11.f["phone"].errors, "\u5BA4\u8A71"));
  }
}
function ProfileComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_77_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", msg_r30, " ");
  }
}
function ProfileComponent_mat_error_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_77_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r13.formHelper.errorMsgs(ctx_r13.f["phoneExt"].errors, "\u5206\u6A5F"));
  }
}
function ProfileComponent_span_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", msg_r32, " ");
  }
}
function ProfileComponent_mat_error_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_error_94_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r16.formHelper.errorMsgs(ctx_r16.f["addr"].errors, "\u5730\u5740\uFF26"));
  }
}
class ProfileComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_2__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.valForm.controls;
  }
  constructor(custApiServ, _fb, _router, injector) {
    super(injector);
    this.custApiServ = custApiServ;
    this._fb = _fb;
    this._router = _router;
    this.injector = injector;
    this.appAttachApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.AppAttachApiServ);
    this.actionName = '個人資訊修改';
    this.editDto = new _core_models__WEBPACK_IMPORTED_MODULE_0__.CustomerDto();
    this.uploadFormReq = new _core_models__WEBPACK_IMPORTED_MODULE_0__.UploadFormReq();
    this.imgUrl = '';
    this.doFormInit();
  }
  ngOnInit() {
    this.doDataInit();
  }
  doFormInit() {
    this.valForm = this._fb.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)]],
      nameEn: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
      nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)]],
      mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12)]],
      phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12)]],
      phoneExt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]],
      zipCodeId: [null],
      addr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]]
    });
  }
  doFormPatchValue() {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
  }
  doDataInit() {
    // update
    this.spinnerServ.show();
    this.custApiServ.getCurrCustomerDto().subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error('無權限取得個人資訊。');
          this._router.navigate(['/']);
          return;
        }
        this.editDto = res;
        // this.doMaxDateTrans(true);
        this.doFormPatchValue();
        // this.getImgUrl();
      },

      error: err => {
        this.bbdNotifyServ.error(`查詢失敗: 錯誤訊息：「${err?.errorMessage}」`);
      }
    }).add(() => this.spinnerServ.hide());
  }
  onSubmit() {
    this.canSubmit();
    this.spinnerServ.show();
    this.custApiServ.uploadCurrCustomerDto(this.uploadFormReq).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error(`${this.actionName}失敗，請再重試一次。`);
          return;
        }
        // this.editDto = res;
        this.doDataInit();
        this.bbdNotifyServ.success(`${this.actionName}成功。`);
      },
      error: err => {
        this.bbdNotifyServ.error(`操作失敗: 錯誤訊息：「${err?.errorMessage}」`);
      }
    }).add(() => this.spinnerServ.hide());
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
    if (!this.editDto) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    Object.assign(this.editDto, this.valForm.value);
    this.doDtoToForm();
    // this.doMaxDateTrans();
  }

  doDtoToForm() {
    this.uploadFormReq = new _core_models__WEBPACK_IMPORTED_MODULE_0__.UploadFormReq();
    // 圖片上傳
    if (this.imgFiles) {
      this.uploadFormReq.append('file', this.imgFiles[0]);
    }
    this.uploadFormReq.jsonContent = JSON.stringify(this.editDto);
    Object.entries(this.uploadFormReq).forEach(([key, value]) => {
      this.uploadFormReq.append(key, value);
    });
  }
  getImgUrl() {
    if (!this.editDto.avatarAttId || this.editDto.avatarAttId <= 0) return;
    this.appAttachApiServ.getAppFileAttObjectUrl(this.editDto.avatarAttId).subscribe({
      next: res => {
        if (!res) {
          this.imgUrl = '';
          return;
        }
        this.imgUrl = res;
      }
    });
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.CustApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["web-profile"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 100,
      vars: 61,
      consts: [[1, "max-w-container", "pt-32"], [1, "flex", "flex-col", "h-full"], [1, "basic-header"], [1, "form-card", "mt-3", 3, "formGroup"], [1, "inputs-container", "w-full", "grid", "lg:grid-cols-2", "gap-x-6"], [1, ""], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "type", "text", "formControlName", "email", 3, "required"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "name", 3, "required"], ["matInput", "", "type", "text", "formControlName", "nameEn", 3, "required"], ["matInput", "", "type", "text", "formControlName", "nickname", 3, "required"], ["matInput", "", "type", "text", "formControlName", "mobile", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phone", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phoneExt", 3, "required"], ["formControlName", "zipCodeId", 1, "block", "mt-3", 3, "title"], ["matInput", "", "type", "text", "formControlName", "addr", 3, "required"], [1, "flex", "justify-end", "items-start", "space-x-2"], ["mat-stroked-button", "", "routerLink", "/"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "required-mark"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u500B\u4EBA\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 3)(6, "div", 4)(7, "ul", 5)(8, "li")(9, "div", 6)(10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u96FB\u5B50\u4FE1\u7BB1(\u5E33\u865F) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProfileComponent_span_12_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ProfileComponent_mat_error_17_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li")(19, "div", 6)(20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u59D3\u540D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProfileComponent_span_22_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProfileComponent_mat_error_27_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li")(29, "div", 6)(30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u82F1\u6587\u540D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ProfileComponent_span_32_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ProfileComponent_mat_error_37_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li")(39, "div", 6)(40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u66B1\u7A31");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ProfileComponent_span_42_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ProfileComponent_mat_error_47_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li")(49, "div", 6)(50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u624B\u6A5F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ProfileComponent_span_52_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](53, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ProfileComponent_mat_error_57_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li")(59, "div", 6)(60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\u5BA4\u8A71");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, ProfileComponent_span_62_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](66, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ProfileComponent_mat_error_67_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "li")(69, "div", 6)(70, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "\u5206\u6A5F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, ProfileComponent_span_72_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](76, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, ProfileComponent_mat_error_77_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li")(79, "div", 6)(80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\u90F5\u905E\u5340\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, ProfileComponent_span_82_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](83, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "bbd-zip-code-widget", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "li")(86, "div", 6)(87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "\u5730\u5740");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, ProfileComponent_span_89_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](90, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](93, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, ProfileComponent_mat_error_94_Template, 2, 1, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 19)(96, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "\u53D6\u6D88");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_98_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\u5132\u5B58");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 27, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 29, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 31, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 33, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["name"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 35, ctx.f["nameEn"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 37, ctx.f["nameEn"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["nameEn"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 39, ctx.f["nickname"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 41, ctx.f["nickname"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["nickname"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](53, 43, ctx.f["mobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 45, ctx.f["mobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["mobile"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 47, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](66, 49, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["phone"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](73, 51, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](76, 53, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["phoneExt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](83, 55, ctx.f["zipCodeId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](90, 57, ctx.f["addr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](93, 59, ctx.f["addr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["addr"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_account_account_module_ts.js.map