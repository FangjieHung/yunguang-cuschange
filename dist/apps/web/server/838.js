"use strict";
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 19271:
/*!********************************************************************!*\
  !*** ./apps/web/src/app/modules/account/account-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountRoutingModule: () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 69666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages



const routes = [{
  path: '',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AccountComponent,
  children: [{
    path: 'profile',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
  }, {
    path: 'password',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent
  }, {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }]
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

/***/ 38838:
/*!************************************************************!*\
  !*** ./apps/web/src/app/modules/account/account.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 19271);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 53896);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 69666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);


// Custom packages
//import { SharedModule } from '@core/shared';



// Config settings
const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.AccountComponent];
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
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.AccountComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 2856:
/*!*****************************************************************************!*\
  !*** ./apps/web/src/app/modules/account/pages/account/account.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 54161);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 82583);
/* eslint-disable @typescript-eslint/no-explicit-any */

// Custom packages





const _c0 = function () {
  return {
    exact: true
  };
};
class AccountComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  static {
    this.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["web-account"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 4,
      consts: [[1, "sub-sidenav"], [1, "hidden", "lg:block"], ["mat-list-item", "", "routerLink", "profile", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["mat-list-item", "", "routerLink", "password", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "w-full", "mx-auto", "lg:px-10"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "div", 1)(2, "mat-nav-list")(3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u500B\u4EBA\u8CC7\u6599");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u91CD\u8A2D\u5BC6\u78BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContainer, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem],
      styles: [".sub-sidenav[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    max-width: 1440px;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hY2NvdW50L3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtJQUFBLGlCQUFBO0lBQUEsa0JBQUE7SUFBQSxXQUFBO0lBQUEsaUJBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLXNpZGVuYXYge1xuICAgIEBhcHBseSBweC0yIG1heC13LXNjcmVlbi0yeGwgdy1mdWxsIG14LWF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 69666:
/*!*********************************************************!*\
  !*** ./apps/web/src/app/modules/account/pages/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* reexport safe */ _account_account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent),
/* harmony export */   ProfileComponent: () => (/* reexport safe */ _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent),
/* harmony export */   ResetPasswordComponent: () => (/* reexport safe */ _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 49884);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.component */ 2856);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 73376);




/***/ }),

/***/ 49884:
/*!*****************************************************************************!*\
  !*** ./apps/web/src/app/modules/account/pages/profile/profile.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/controls */ 59828);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _shared_controls_cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/controls/cust-group-control/cust-group-control.component */ 22546);
/* harmony import */ var _shared_controls_cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/controls/cust-member-control/cust-member-control.component */ 98814);
/* eslint-disable @typescript-eslint/no-explicit-any */



// Custom packages










function ProfileComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "web-cust-group-control", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function ProfileComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "web-cust-member-control", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
class ProfileComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router);
    this.custApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CustApiServ);
    this.editDto = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustomerDto();
    this.custType = 0;
    this.doFormInit();
  }
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    this.custApiServ.getCurrCustomerDto().subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error('無存取權限，請確認您的帳號是否啟用。');
          this._router.navigate(['/']);
          return;
        }
        this.custType = res.type || 0;
        if (!this.custType) {
          this.bbdNotifyServ.error('無存取權限，請確認您的帳號是否啟用。');
          this._router.navigate(['/']);
          return;
        }
        this.editDto = res;
        this.doDateParse(true);
        this.doFormPatchValue();
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    });
  }
  doDateParse(isInit = false) {
    if (isInit) {
      this.editDto.appUserEndAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.appUserEndAt);
      this.editDto.endAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.endAt);
      this.editDto.expAt = this.dateHelper.parseAppMaxUtcDateToNull(this.editDto.expAt);
    } else {
      this.editDto.appUserEndAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.appUserEndAt);
      this.editDto.endAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.endAt);
      this.editDto.expAt = this.dateHelper.parseNullToAppMaxUtcDate(this.editDto.expAt);
    }
  }
  doFormInit() {
    this.valForm = this._fb.group({
      custGroup: [null],
      custMember: [null]
    });
    this.f['custGroup'].valueChanges.subscribe(res => {
      this.f['account'].setValue(res?.taxId || '', {
        emitEvent: false
      });
    });
    this.f['custMember'].valueChanges.subscribe(res => {
      this.f['account'].setValue(res?.idNo || '', {
        emitEvent: false
      });
    });
  }
  doFormPatchValue() {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
  }
  canSubmit() {
    this.groupCtrl?.markAllAsTouched();
    this.memberCtrl?.markAllAsTouched();
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
    this.doDateParse();
  }
  onSubmit() {
    this.canSubmit();
    this.spinnerServ.show();
    this.custApiServ.setCurrCustomerDto(this.editDto).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error(`修改會員資料失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`修改會員資料成功。`);
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["web-profile"]],
      viewQuery: function ProfileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_controls__WEBPACK_IMPORTED_MODULE_3__.CustGroupControlComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_controls__WEBPACK_IMPORTED_MODULE_3__.CustMemberControlComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.groupCtrl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.memberCtrl = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 3,
      consts: [[1, "account", 3, "formGroup"], [1, "inner-wrap"], [4, "ngIf"], [1, "toolbar"], [1, "btn-primary", "btn-lg", 3, "click"], ["formControlName", "custGroup"], ["groupCtrl", ""], ["formControlName", "custMember"], ["memberCtrl", ""]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "web-glass-bg")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ProfileComponent_ng_container_3_Template, 3, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ProfileComponent_ng_container_4_Template, 3, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u9001\u51FA");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.custType === +ctx.custApiServ.customerTypes["\u5718\u9AD4\u6703\u54E1"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.custType === +ctx.custApiServ.customerTypes["\u500B\u4EBA\u6703\u54E1"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__.GlassBgComponent, _shared_controls_cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_5__.CustGroupControlComponent, _shared_controls_cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_6__.CustMemberControlComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73376:
/*!*******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/account/pages/reset-password/reset-password.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 20904);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages












function ResetPasswordComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_mat_error_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r7);
  }
}
function ResetPasswordComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ResetPasswordComponent_mat_error_18_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["oldPassword"].errors, "\u539F\u5BC6\u78BC"));
  }
}
function ResetPasswordComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_mat_error_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r9);
  }
}
function ResetPasswordComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ResetPasswordComponent_mat_error_30_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["newPassword"].errors, "\u65B0\u5BC6\u78BC"));
  }
}
function ResetPasswordComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_mat_error_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r11);
  }
}
function ResetPasswordComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ResetPasswordComponent_mat_error_42_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.formHelper.errorMsgs(ctx_r5.f["confirmNewPassword"].errors, "\u518D\u6B21\u78BA\u8A8D\u65B0\u5BC6\u78BC"));
  }
}
class ResetPasswordComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.appUserApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppUserApiServ);
    this.editDto = new _core_models__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordReq();
    this.passwordHide = true;
  }
  ngOnInit() {
    this.doFormInit();
  }
  doFormInit() {
    this.valForm = this._fb.group({
      oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(128)]],
      newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(128)]],
      confirmNewPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(128)]]
    }, {
      validators: [_core_shared__WEBPACK_IMPORTED_MODULE_0__.Validation.match('newPassword', 'confirmNewPassword')]
    });
  }
  doFormPatchValue() {
    if (!this.editDto) {
      return;
    }
    this.valForm.patchValue(this.editDto);
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
  }
  onSubmit() {
    this.canSubmit();
    this.spinnerServ.show();
    this.appUserApiServ.changeCurrAppUserPassword(this.editDto).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error(`修改會員資料失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`修改會員資料成功。`);
        this.valForm.reset();
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["web-reset-password"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 46,
      vars: 34,
      consts: [[1, "account", "max-w-md", "mx-auto", 3, "formGroup"], [1, "inner-wrap"], [1, "form-section"], [1, "title"], [1, "input-group"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "formControlName", "oldPassword", 3, "type", "required"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "min-w-8"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "formControlName", "newPassword", 3, "type", "required"], ["matInput", "", "formControlName", "confirmNewPassword", 3, "type", "required"], [1, "toolbar"], [1, "btn-primary", "btn-lg", 3, "click"], [1, "required-mark"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "web-glass-bg")(2, "div", 1)(3, "section", 2)(4, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u91CD\u8A2D\u5BC6\u78BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ul", 4)(7, "li")(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u539F\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ResetPasswordComponent_span_10_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_15_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ResetPasswordComponent_mat_error_18_Template, 2, 1, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li")(20, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u65B0\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ResetPasswordComponent_span_22_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_27_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ResetPasswordComponent_mat_error_30_Template, 2, 1, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "li")(32, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u518D\u6B21\u78BA\u8A8D\u65B0\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ResetPasswordComponent_span_34_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_39_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ResetPasswordComponent_mat_error_42_Template, 2, 1, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 14)(44, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_44_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\u78BA\u5B9A\u66F4\u6539");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 22, ctx.f["oldPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text")("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 24, ctx.f["oldPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "\u4E0D\u986F\u793A\u5BC6\u78BC")("aria-pressed", ctx.passwordHide);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["oldPassword"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 26, ctx.f["newPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text")("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 28, ctx.f["newPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "\u4E0D\u986F\u793A\u5BC6\u78BC")("aria-pressed", ctx.passwordHide);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["newPassword"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 30, ctx.f["confirmNewPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text")("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 32, ctx.f["confirmNewPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "\u4E0D\u986F\u793A\u5BC6\u78BC")("aria-pressed", ctx.passwordHide);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["confirmNewPassword"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__.GlassBgComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

};
;
//# sourceMappingURL=838.js.map