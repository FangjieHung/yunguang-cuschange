"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_campaign_campaign_module_ts"],{

/***/ 15484:
/*!**********************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/campaign-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignRoutingModule: () => (/* binding */ CampaignRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 50706);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 80874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





const routes = [{
  path: 'list',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.CampaignListComponent,
  data: {
    title: `學術活動｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    description: '學術活動',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/campaign/list`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'detail/:uniqueId',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.CampaignDetailComponent,
  data: {
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'register/:campUniqueId',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.CampaignRegisterComponent
}];
class CampaignRoutingModule {
  static {
    this.ɵfac = function CampaignRoutingModule_Factory(t) {
      return new (t || CampaignRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CampaignRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CampaignRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 84381:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/campaign.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignModule: () => (/* binding */ CampaignModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 80874);
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-routing.module */ 15484);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);





const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule];
class CampaignModule {
  static {
    this.ɵfac = function CampaignModule_Factory(t) {
      return new (t || CampaignModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CampaignModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__.CampaignRoutingModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CampaignModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent, _pages__WEBPACK_IMPORTED_MODULE_0__.CampaignDetailComponent, _pages__WEBPACK_IMPORTED_MODULE_0__.CampRegInfoComponent, _pages__WEBPACK_IMPORTED_MODULE_0__.CampaignRegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__.CampaignRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 57616:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/camp-reg-info/camp-reg-info.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegInfoComponent: () => (/* binding */ CampRegInfoComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);

// Custom packages



function CampRegInfoComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.price), "");
  }
}
function CampRegInfoComponent_ng_template_32_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CampRegInfoComponent_ng_template_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u514D\u8CBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CampRegInfoComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CampRegInfoComponent_ng_template_32_span_0_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CampRegInfoComponent_ng_template_32_span_1_Template, 2, 0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.price === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.price !== null);
  }
}
class CampRegInfoComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    // Properties
    this.price = null;
    // IOs
    this.campInfo = null;
  }
  ngOnInit() {
    this.initData();
  }
  ngOnChanges(changes) {
    if (changes['campInfo'] && changes['campInfo'].currentValue) {
      this.initData();
    }
  }
  initData() {
    if (!this.campInfo) return;
    if (this.isSignin) this.price = this.campInfo.salePrice;else this.price = this.campInfo.pricing;
  }
  static {
    this.ɵfac = function CampRegInfoComponent_Factory(t) {
      return new (t || CampRegInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CampRegInfoComponent,
      selectors: [["app-camp-reg-info"]],
      inputs: {
        campInfo: "campInfo"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 50,
      vars: 35,
      consts: [[1, "date-duration"], [1, "month-wrap"], [1, "date"], [1, "line"], [1, "headline"], [1, "describe-list"], [1, "title"], [1, "min-w-fit"], ["class", "flex-auto", 4, "ngIf", "ngIfElse"], ["forFree", ""], [1, "flex-auto"], ["class", "flex-auto", 4, "ngIf"]],
      template: function CampRegInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ol", 0)(2, "li")(3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "div", 1)(16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 5)(28, "li", 6)(29, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u6D3B\u52D5\u8CBB\u7528");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CampRegInfoComponent_span_31_Template, 3, 3, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CampRegInfoComponent_ng_template_32_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u5831\u540D\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u2223");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u53D6\u6D88\u65B9\u5F0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u2223");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u975E\u6703\u54E1\u5831\u540D\u8ACB\u806F\u7D61\u672C\u6703\u9032\u884C\u53D6\u6D88\u6216\u9000\u6B3E\u4F5C\u696D\uFF1B\u6703\u54E1\u5831\u540D\u53EF\u767B\u5165\u5E73\u53F0\u81F3\u6211\u7684\u6D3B\u52D5\u9032\u884C\u53D6\u6D88\u4F5C\u696D\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 11, ctx.campInfo == null ? null : ctx.campInfo.startAt, "MM"), " \u2215");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 14, ctx.campInfo == null ? null : ctx.campInfo.startAt, "EEEEE"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 17, ctx.campInfo == null ? null : ctx.campInfo.startAt, "dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 20, ctx.campInfo == null ? null : ctx.campInfo.endAt, "MM"), " \u2215");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 23, ctx.campInfo == null ? null : ctx.campInfo.endAt, "EEEEE"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 26, ctx.campInfo == null ? null : ctx.campInfo.endAt, "dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.campInfo == null ? null : ctx.campInfo.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.price || 0) > 0)("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](41, 29, ctx.campInfo == null ? null : ctx.campInfo.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](42, 32, ctx.campInfo == null ? null : ctx.campInfo.regEndAt, "yyyy.MM.dd HH:mm"), "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 25568:
/*!**********************************************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/campaign-detail/campaign-detail.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignDetailComponent: () => (/* binding */ CampaignDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 50706);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 20288);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 7376);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-loading-indicator/bbd-loading-indicator.component */ 23028);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 96304);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-same-date.pipe */ 38177);
/* eslint-disable @typescript-eslint/no-explicit-any */



// Custom packages












function CampaignDetailComponent_bbd_loading_indicator_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "bbd-loading-indicator", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "spinner")("message", "\u6D3B\u52D5\u8CC7\u6599\u8B80\u53D6\u4E2D\uFF0C\u8ACB\u7A0D\u5019");
  }
}
function CampaignDetailComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "li")(3, "div", 4)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 3, ctx_r1.response == null ? null : ctx_r1.response.endAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 6, ctx_r1.response == null ? null : ctx_r1.response.endAt, "E"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 9, ctx_r1.response == null ? null : ctx_r1.response.endAt, "dd"));
  }
}
function CampaignDetailComponent_ng_container_73_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r13.response == null ? null : ctx_r13.response.pricing), "");
  }
}
function CampaignDetailComponent_ng_container_73_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u514D\u8CBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CampaignDetailComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CampaignDetailComponent_ng_container_73_span_1_Template, 3, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CampaignDetailComponent_ng_container_73_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.response == null ? null : ctx_r2.response.pricing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx_r2.response == null ? null : ctx_r2.response.pricing));
  }
}
function CampaignDetailComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u4E0D\u958B\u653E\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CampaignDetailComponent_span_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r5.response == null ? null : ctx_r5.response.salePrice), "");
  }
}
function CampaignDetailComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u514D\u8CBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CampaignDetailComponent_ng_container_82_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CampaignDetailComponent_ng_container_82_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.onCancelReg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u53D6\u6D88\u5831\u540D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CampaignDetailComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 31)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u5831\u540D\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 34)(11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " \u5DF2\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, CampaignDetailComponent_ng_container_82_button_14_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 2, ctx_r7.response == null ? null : ctx_r7.response.regData == null ? null : ctx_r7.response.regData.regAt, "yyyy.MM.dd HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.nowAt < ((ctx_r7.response == null ? null : ctx_r7.response.startAt) || ctx_r7.nowAt));
  }
}
const _c0 = function (a1) {
  return ["/campaign/register/", a1];
};
function CampaignDetailComponent_ng_container_83_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u91CD\u65B0\u5831\u540D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r18.response == null ? null : ctx_r18.response.uniqueId));
  }
}
function CampaignDetailComponent_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 31)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u524D\u6B21\u53D6\u6D88\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, CampaignDetailComponent_ng_container_83_button_10_Template, 2, 3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 2, ctx_r8.response == null ? null : ctx_r8.response.regData == null ? null : ctx_r8.response.regData.cxlAt, "yyyy.MM.dd HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.nowAt < ((ctx_r8.response == null ? null : ctx_r8.response.regEndAt) || ctx_r8.nowAt));
  }
}
function CampaignDetailComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u5831\u540D\u5DF2\u984D\u6EFF");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CampaignDetailComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u5831\u540D\u5DF2\u622A\u6B62");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CampaignDetailComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " \u7ACB\u5373\u5831\u540D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r11.response == null ? null : ctx_r11.response.uniqueId));
  }
}
function CampaignDetailComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u5C1A\u672A\u958B\u653E");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
class CampaignDetailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_1__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.isLoading = false;
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router);
    this._seoServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.SEOServ);
    this.campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CampaignApiServ);
    this._uniqueId = '';
    this.nowAt = new Date();
    this.response = null;
    this.currRegStatus = 'loading';
  }
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._uniqueId = params.get('uniqueId') || '';
      this.doDataInit();
    });
    this.storeServ.getZipCodesCache().subscribe();
  }
  doDataInit() {
    this.campaignApiServ.getCampaignViewByUniqueId(this._uniqueId).subscribe({
      next: res => {
        if (!res) {
          this.onGoHome();
          return;
        }
        this.response = res;
        this.contentInfo = JSON.parse(this.response.content || '{}');
        this.initRegStatus();
        // SEO tags
        const seoData = this._route.snapshot.data;
        this._seoServ.updateMetaTags(`${this.response.name}｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`, `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/campaign/detail/${this._uniqueId}`, seoData['image'], this.response.name);
        // JSON-LD: Event (AEO 信號)
        this._seoServ.injectStructuredData('page-ld', {
          '@context': 'https://schema.org',
          '@type': 'Event',
          'name': this.response.name,
          'url': `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/campaign/detail/${this._uniqueId}`,
          'startDate': new Date(this.response.startAt).toISOString(),
          'endDate': new Date(this.response.endAt).toISOString(),
          'description': this.response.name,
          'image': seoData['image'],
          'eventStatus': 'https://schema.org/EventScheduled',
          'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
          'organizer': {
            '@type': 'Organization',
            '@id': 'https://tslmai.org.tw/#organization',
            'name': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName,
            'url': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer
          }
        });
      },
      error: err => {
        this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
        this.onGoHome();
      }
    });
  }
  initRegStatus() {
    if (!this.response) {
      this.currRegStatus = '';
      return;
    }
    const campStatus = +this.response.status;
    switch (campStatus) {
      case +this.campaignApiServ.campaignStatuses.尚未開放:
        {
          this.currRegStatus = '';
          return;
        }
      case +this.campaignApiServ.campaignStatuses.截止:
        {
          if (this.response.regData && this.response.regData.id > 0 && this.response.regData.status <= +this.campaignApiServ.campRegStatuses.已報名) {
            this.currRegStatus = 'registered';
            return;
          }
          this.currRegStatus = 'closed';
          return;
        }
      case +this.campaignApiServ.campaignStatuses.額滿:
        {
          if (this.response.regData && this.response.regData.id > 0 && this.response.regData.status <= +this.campaignApiServ.campRegStatuses.已報名) {
            this.currRegStatus = 'registered';
            return;
          }
          this.currRegStatus = 'fulled';
          return;
        }
      case +this.campaignApiServ.campaignStatuses.報名中:
        {
          if (!this.response.isOpenReg && !this.isSignin) {
            this.currRegStatus = '';
            return;
          }
          if (!this.response.regData || this.response.regData.id <= 0) {
            this.currRegStatus = 'registering';
            return;
          }
          if (this.response.regData.status <= +this.campaignApiServ.campRegStatuses.已報名) {
            this.currRegStatus = 'registered';
            return;
          }
          if (this.response.regData.status >= +this.campaignApiServ.campRegStatuses.待退款) {
            this.currRegStatus = 'cancelled';
            return;
          }
          return;
        }
      default:
        this.currRegStatus = '';
        return;
    }
  }
  onCancelReg() {
    if (!this.response || !this.response.regData || this.response.regData.id <= 0) {
      this.bbdNotifyServ.error('取消報名失敗，無法取得報名資料。');
      return;
    }
    this.spinnerServ.show();
    this.campaignApiServ.cancelCampReg(this.response.regData.id).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error(`取消報名失敗，請再重試一次。`);
          return;
        }
        this.bbdNotifyServ.success(`取消成功。`);
        this.doDataInit();
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  onGoHome() {
    this._router.navigate(['/']);
  }
  static {
    this.ɵfac = function CampaignDetailComponent_Factory(t) {
      return new (t || CampaignDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CampaignDetailComponent,
      selectors: [["app-campaign-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
      decls: 93,
      vars: 49,
      consts: [[3, "type", "message", 4, "ngIf"], [1, "min-h-container", "campaign-detail-container"], [1, "info-container"], [1, "date-duration"], [1, "month-wrap"], [1, "date"], [4, "ngIf"], [1, "headline"], [1, "describe-list"], ["mode", "determinate", "color", "primary", 1, "mb-10", 3, "value"], [1, "icon-list-container", "border-b", "pb-7"], [1, "info-label"], [1, "material-symbols-rounded"], [1, "ml-1"], [1, "ml-7"], [1, "h-auto", "text-base", "my-10", "text-pretty"], [3, "content"], [1, "action-container"], [1, "p-5"], [1, "option-wrap"], [1, "option-name"], [4, "ngIf", "ngIfElse"], ["notOpenReg", ""], ["class", "option-price", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["routerLink", "/campaign/list", 1, "link-underline", "mb-4"], [3, "type", "message"], [1, "line"], [1, "option-price"], [1, "reg-info-block"], [1, "reg-info-label"], [1, "reg-info-value"], [1, "btn-primary", "disabled", "btn-lg"], [1, "material-symbols-rounded", "pr-1"], ["mat-button", "", "color", "primary", "class", "mx-auto text-sm mt-1", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 1, "mx-auto", "text-sm", "mt-1", 3, "click"], ["class", "btn-primary btn-lg", 3, "routerLink", 4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "routerLink"], ["disabled", "", 1, "btn-primary", "disabled", "btn-lg"]],
      template: function CampaignDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CampaignDetailComponent_bbd_loading_indicator_0_Template, 1, 2, "bbd-loading-indicator", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "section", 2)(3, "header")(4, "ol", 3)(5, "li")(6, "div", 4)(7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, CampaignDetailComponent_ng_container_16_Template, 13, 12, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "isSameDate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ul", 8)(21, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " \u5831\u540D\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\u2223");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "mat-progress-bar", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ul", 10)(30, "li")(31, "p", 11)(32, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\u6D3B\u52D5\u8B1B\u5E2B");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "li")(39, "p", 11)(40, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "date_range");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "\u6D3B\u52D5\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "li")(49, "p", 11)(50, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "location_on");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "\u6D3B\u52D5\u5730\u9EDE");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "li")(57, "p", 11)(58, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "restaurant_menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "\u4F9B\u9910");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "section", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "bbd-quill-editor-viewer", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "section", 17)(67, "web-glass-bg")(68, "div", 18)(69, "ul", 19)(70, "li")(71, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\u975E\u6703\u54E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, CampaignDetailComponent_ng_container_73_Template, 3, 2, "ng-container", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, CampaignDetailComponent_ng_template_74_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "li")(77, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "\u6B63\u5F0F\u6703\u54E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, CampaignDetailComponent_span_79_Template, 3, 3, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, CampaignDetailComponent_span_80_Template, 2, 0, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](81, 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, CampaignDetailComponent_ng_container_82_Template, 15, 5, "ng-container", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, CampaignDetailComponent_ng_container_83_Template, 11, 5, "ng-container", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, CampaignDetailComponent_ng_container_84_Template, 3, 0, "ng-container", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](85, CampaignDetailComponent_ng_container_85_Template, 3, 0, "ng-container", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, CampaignDetailComponent_ng_container_86_Template, 3, 3, "ng-container", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, CampaignDetailComponent_ng_container_87_Template, 3, 0, "ng-container", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "a", 27)(89, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "arrow_left_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "\u6D3B\u52D5\u5217\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 25, ctx.response == null ? null : ctx.response.startAt, "MM"), " \u2215");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 28, ctx.response == null ? null : ctx.response.startAt, "E"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 31, ctx.response == null ? null : ctx.response.startAt, "dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](17, 34, ctx.response == null ? null : ctx.response.endAt, ctx.response == null ? null : ctx.response.startAt));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](26, 37, ctx.response == null ? null : ctx.response.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](27, 40, ctx.response == null ? null : ctx.response.regEndAt, "yyyy.MM.dd HH:mm"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (ctx.response == null ? null : ctx.response.maxRegNum) ? ((ctx.response == null ? null : ctx.response.regNum) || 0) / ((ctx.response == null ? null : ctx.response.maxRegNum) || 1) * 100 : 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.contentInfo == null ? null : ctx.contentInfo.speakers);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](46, 43, ctx.response == null ? null : ctx.response.startAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](47, 46, ctx.response == null ? null : ctx.response.endAt, "yyyy.MM.dd HH:mm"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.contentInfo == null ? null : ctx.contentInfo.location);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.contentInfo == null ? null : ctx.contentInfo.hasMeal) ? "\u6709" : "\u7121");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("content", ctx.contentInfo == null ? null : ctx.contentInfo.desc);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.response == null ? null : ctx.response.isOpenReg)("ngIfElse", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.response == null ? null : ctx.response.salePrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx.response == null ? null : ctx.response.salePrice));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.currRegStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "registered");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "cancelled");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "fulled");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "closed");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "registering");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_3__.BBDQuillEditorViewerComponent, _libs_core_src_lib_shared_components_bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__.BBDLoadingIndicatorComponent, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_5__.GlassBgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_7__.IsSameDatePipe],
      styles: [".campaign-detail-container[_ngcontent-%COMP%] {\n\n    position: relative;\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    display: grid;\n\n    width: 100%;\n\n    max-width: 64rem;\n\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n\n    align-items: flex-start;\n\n    gap: 2.5rem;\n\n    padding-left: 1.25rem;\n\n    padding-right: 1.25rem\n}\n\n@media (min-width: 1024px) {\n\n    .campaign-detail-container[_ngcontent-%COMP%] {\n\n        grid-template-columns: repeat(3, minmax(0, 1fr))\n    }\n\n    .campaign-detail-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n\n        grid-column: span 2 / span 2\n    }\n}\n\n.option-wrap[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n\n    --tw-divide-y-reverse: 0;\n\n    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n\n    border-bottom-width: calc(1px * var(--tw-divide-y-reverse))\n}\n\n.option-wrap[_ngcontent-%COMP%] {\n\n    padding-bottom: 1rem;\n\n    font-size: 1.375rem\n}\n.option-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    padding-top: 0.75rem;\n\n    padding-bottom: 0.75rem\n}\n.option-wrap[_ngcontent-%COMP%]   .option-name[_ngcontent-%COMP%] {\n\n    font-weight: 700\n}\n\n.reg-info-block[_ngcontent-%COMP%] {\n\n    margin-bottom: 1rem;\n\n    display: flex;\n\n    align-items: flex-start;\n\n    gap: 0.25rem\n}\n.reg-info-block[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n\n    font-size: 1.5rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(100 116 139 / var(--tw-text-opacity, 1))\n}\n.reg-info-block[_ngcontent-%COMP%]   .reg-info-label[_ngcontent-%COMP%] {\n\n    margin-bottom: 0.125rem;\n\n    font-size: 1.125rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(107 114 128 / var(--tw-text-opacity, 1))\n}\n.reg-info-block[_ngcontent-%COMP%]   .reg-info-value[_ngcontent-%COMP%] {\n\n    font-size: 1.125rem;\n\n    font-weight: 500\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1kZXRhaWwvY2FtcGFpZ24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLGtCQUFBOztJQUFBLGlCQUFBOztJQUFBLGtCQUFBOztJQUFBLGFBQUE7O0lBQUEsV0FBQTs7SUFBQSxnQkFBQTs7SUFBQSxnREFBQTs7SUFBQSx1QkFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUE7SUFBQTs7SUFHRTs7UUFBQTtJQUFBO0FBSEY7O0FBUUE7O0lBQUEsd0JBQUE7O0lBQUEsa0VBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBO0FBR0U7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSw4QkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBO0FBSUE7O0lBQUE7QUFBQTs7QUFLRjs7SUFBQSxtQkFBQTs7SUFBQSxhQUFBOztJQUFBLHVCQUFBOztJQUFBO0FBQUE7QUFHRTs7SUFBQSxpQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBO0FBSUE7O0lBQUEsdUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTtBQUlBOztJQUFBLG1CQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtcGFpZ24tZGV0YWlsLWNvbnRhaW5lciB7XG4gIEBhcHBseSByZWxhdGl2ZSB3LWZ1bGwgcHgtNSBtYXgtdy01eGwgbXgtYXV0byBncmlkIGl0ZW1zLXN0YXJ0IGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC0xMDtcblxuICAuaW5mby1jb250YWluZXIge1xuICAgIEBhcHBseSBsZzpjb2wtc3Bhbi0yO1xuICB9XG59XG5cbi5vcHRpb24td3JhcCB7XG4gIEBhcHBseSB0ZXh0LWxnIGRpdmlkZS15IHBiLTQ7XG5cbiAgbGkge1xuICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMztcbiAgfVxuXG4gIC5vcHRpb24tbmFtZSB7XG4gICAgQGFwcGx5IGZvbnQtYm9sZDtcbiAgfVxufVxuXG4ucmVnLWluZm8tYmxvY2sge1xuICBAYXBwbHkgZmxleCBpdGVtcy1zdGFydCBnYXAtMSBtYi00O1xuXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIEBhcHBseSB0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhsO1xuICB9XG5cbiAgLnJlZy1pbmZvLWxhYmVsIHtcbiAgICBAYXBwbHkgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTAuNTtcbiAgfVxuXG4gIC5yZWctaW5mby12YWx1ZSB7XG4gICAgQGFwcGx5IHRleHQtc20gZm9udC1tZWRpdW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 31192:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/campaign-list/campaign-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignListComponent: () => (/* binding */ CampaignListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 20288);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/paginator/paginator.component */ 94643);
/* harmony import */ var _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/results/result-empty/result-empty.component */ 9898);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 96304);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-empty.pipe */ 49841);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-same-date.pipe */ 38177);

// Custom packages

















function CampaignListComponent_web_result_empty_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "web-result-empty", 13);
  }
}
function CampaignListComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CampaignListComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r3.request.queryRequest.queryString = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function CampaignListComponent_web_glass_bg_18_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "li")(3, "div", 20)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 3, item_r5.endAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 6, item_r5.endAt, "E"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 9, item_r5.endAt, "dd"));
  }
}
const _c0 = function (a1) {
  return ["/campaign/detail/", a1];
};
function CampaignListComponent_web_glass_bg_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "web-glass-bg", 16)(1, "a", 17)(2, "div", 18)(3, "ol", 19)(4, "li")(5, "div", 20)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CampaignListComponent_web_glass_bg_18_ng_container_15_Template, 13, 12, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "isSameDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ul", 24)(20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\u5831\u540D\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\u2223");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\u8A73\u7D30\u8CC7\u8A0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](27, _c0, item_r5.uniqueId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 9, item_r5.startAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 12, item_r5.startAt, "E"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 15, item_r5.startAt, "dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 18, item_r5.endAt, item_r5.startAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](25, 21, item_r5.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](26, 24, item_r5.regEndAt, "yyyy.MM.dd HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r5.maxRegNum ? (item_r5.regNum || 0) / (item_r5.maxRegNum || 1) * 100 : 0);
  }
}
const _c1 = function (a0) {
  return {
    "disabled-hide": a0
  };
};
const _c2 = function (a0, a1, a2) {
  return {
    length: a0,
    pageSize: a1,
    pageIndex: a2
  };
};
class CampaignListComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CampaignApiServ);
    this.dataSource = [];
    this.request = new _core_models__WEBPACK_IMPORTED_MODULE_1__.PagingRequest();
    this.response = null;
    this.focusedIndex = null;
  }
  ngOnInit() {
    this.doParamsInit();
    this.onSearch();
  }
  doParamsInit() {
    this.request.queryRequest = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CampaignReq();
    this.doParamsReset();
  }
  doParamsReset() {
    this.response = null;
    this.dataSource = [];
  }
  doScrollToTop() {
    if (!this.isBrowser) return;
    window.scrollTo({
      top: 0
    });
  }
  onSearch(pageIndex = 1) {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.spinnerServ.show();
    this.campaignApiServ.getCampaignViewsPaging(this.request).subscribe({
      next: res => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  static {
    this.ɵfac = function CampaignListComponent_Factory(t) {
      return new (t || CampaignListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: CampaignListComponent,
      selectors: [["web-campaign-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
      decls: 20,
      vars: 15,
      consts: [[1, "max-w-container"], [1, "display", "d-black"], [1, "headline"], ["class", "block mt-5", 4, "ngIf"], ["action", "", 1, "search-wrap", "md:w-1/2", "xl:w-1/3"], ["appearance", "outline", 1, "fill-black"], ["matPrefix", "", 1, "material-symbols-rounded"], ["matInput", "", "type", "text", "name", "searchValue", "placeholder", "\u641C\u5C0B", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "ngClass", "disabled", "click"], [1, "campain-list"], ["class", "container-hover", 4, "ngFor", "ngForOf"], [3, "params", "pageIndexChange"], [1, "block", "mt-5"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "material-symbols-rounded"], [1, "container-hover"], [1, "block", "p-2", 3, "routerLink"], [1, "p-3"], [1, "date-duration"], [1, "month-wrap"], [1, "date"], [4, "ngIf"], [1, "title-sm"], [1, "describe-list"], ["mode", "determinate", "color", "primary", 1, "mb-5", 3, "value"], [1, "btn-white", "w-full", "rounded-full", "h-12"], [1, "line"]],
      template: function CampaignListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h2")(3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Academic Activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u5B78\u8853\u6D3B\u52D5");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, CampaignListComponent_web_result_empty_7_Template, 1, 0, "web-result-empty", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "form", 4)(10, "mat-form-field", 5)(11, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CampaignListComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.request.queryRequest.queryString = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, CampaignListComponent_button_14_Template, 3, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CampaignListComponent_Template_button_click_15_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " \u641C\u5C0B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "section", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, CampaignListComponent_web_glass_bg_18_Template, 30, 29, "web-glass-bg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "web-paginator", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageIndexChange", function CampaignListComponent_Template_web_paginator_pageIndexChange_19_listener($event) {
            return ctx.onSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 7, ctx.dataSource));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c1, !ctx.request.queryRequest.queryString))("disabled", !ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](11, _c2, (ctx.response == null ? null : ctx.response.totalCount) || 0, (ctx.response == null ? null : ctx.response.pageSize) || 0, (ctx.response == null ? null : ctx.response.pageIndex) || 0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__.GlassBgComponent, _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__.ResultEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_7__.IsEmptyPipe, _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_8__.IsSameDatePipe],
      styles: [".campain-list[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1.25rem;\n    padding-bottom: 1.25rem\n}\n@media (min-width: 768px) {\n    .campain-list[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, minmax(0, 1fr))\n    }\n}\n@media (min-width: 1024px) {\n    .campain-list[_ngcontent-%COMP%] {\n        padding-top: 1.25rem\n    }\n}\n@media (min-width: 1280px) {\n    .campain-list[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(3, minmax(0, 1fr))\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1saXN0L2NhbXBhaWduLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxhQUFBO0lBQUEsWUFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQTtRQUFBO0lBQUE7QUFBQTtBQUFBO0lBQUE7UUFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtcGFpbi1saXN0IHtcbiAgICBAYXBwbHkgZ3JpZCBnYXAtNSBwYi01IGxnOnB0LTUgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 74228:
/*!**************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/campaign-register/campaign-register.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignRegisterComponent: () => (/* binding */ CampaignRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 50706);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/controls */ 72255);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 99120);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-loading-indicator/bbd-loading-indicator.component */ 23028);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/results/complete/complete.component */ 7398);
/* harmony import */ var _shared_controls_camp_reg_control_camp_reg_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/controls/camp-reg-control/camp-reg-control.component */ 25611);
/* harmony import */ var _camp_reg_info_camp_reg_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../camp-reg-info/camp-reg-info.component */ 57616);
/* eslint-disable @typescript-eslint/no-explicit-any */




// Custom packages


















function CampaignRegisterComponent_bbd_loading_indicator_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "bbd-loading-indicator", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "spinner")("message", "\u6D3B\u52D5\u8CC7\u6599\u8B80\u53D6\u4E2D\uFF0C\u8ACB\u7A0D\u5019");
  }
}
function CampaignRegisterComponent_web_glass_bg_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "web-glass-bg", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "web-complete", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\u57FA\u672C\u8CC7\u6599");
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CampaignRegisterComponent_mat_horizontal_stepper_7_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u78BA\u8A8D\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u4E0B\u4E00\u6B65");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\u8AB2\u7A0B\u9700\u6C42");
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_11_ng_template_1_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "web-glass-bg")(3, "div", 15)(4, "section", 24)(5, "ul", 25)(6, "li")(7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u81B3\u98DF\u985E\u578B");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-form-field", 27)(10, "mat-select", 28)(11, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u4E0D\u62D8");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u8477\u98DF");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\u7D20\u98DF");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li")(18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\u5718\u9AD4\u4EE3\u78BC (\u9078\u586B)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "li", 33)(23, "mat-checkbox", 34)(24, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\u9700\u8981\u4E0A\u8AB2\u8B49\u660E");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-checkbox", 34)(27, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\u9700\u8981\u9577\u7167\u7A4D\u5206");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-checkbox", 34)(30, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "\u9700\u8981\u8B77\u7406\u5B78\u5206");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 18)(33, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "\u4E0A\u4E00\u6B65");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\u5B8C\u6210\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\u4ED8\u6B3E\u8CC7\u8A0A");
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_12_ng_template_1_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "web-glass-bg")(3, "div", 37)(4, "div", 38)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u672C\u6703\u4F7F\u7528");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\u63D0\u4F9B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u4FE1\u7528\u5361\u3001WebATM\u3001ATM\u3001\u8D85\u5546\u4EE3\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " \u7B49\u7E73\u6B3E\u591A\u5143\u4ED8\u6B3E\u65B9\u5F0F\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u6309\u4E0B\u300C\u524D\u5F80\u4ED8\u6B3E\u300D\u5F8C\u5C07\u8DF3\u8F49\u81F3\u91D1\u6D41\u4ED8\u6B3E\u9801\u9762 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "(SSL 256 bits \u5B89\u5168\u52A0\u5BC6\u6A5F\u5236)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\uFF0C\u8ACB\u5B89\u5FC3\u4ED8\u6B3E\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_12_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\u524D\u5F80\u4ED8\u6B3E");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 18)(21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\u4E0A\u4E00\u6B65");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function CampaignRegisterComponent_mat_horizontal_stepper_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-horizontal-stepper", 12)(1, "mat-step")(2, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CampaignRegisterComponent_mat_horizontal_stepper_7_ng_template_3_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "web-glass-bg")(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "web-camp-reg-control", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, CampaignRegisterComponent_mat_horizontal_stepper_7_button_9_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, CampaignRegisterComponent_mat_horizontal_stepper_7_button_10_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_11_Template, 37, 0, "mat-step", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, CampaignRegisterComponent_mat_horizontal_stepper_7_mat_step_12_Template, 23, 0, "mat-step", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r2.valForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.allowPayFlow);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.allowPayFlow);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.allowPayFlow);
  }
}
class CampaignRegisterComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_1__.BBDBaseComponent {
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CampaignApiServ);
    this._commerceApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CommerceApiServ);
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder);
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router);
    this._seoServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.SEOServ);
    this._campUniqueId = '';
    this.isCompleted = false;
    this.allowPayFlow = false;
    this.response = null;
    this.doFormInit();
  }
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._campUniqueId = params.get('campUniqueId') || '';
      this.doDataInit();
    });
  }
  doDataInit() {
    this._campaignApiServ.getCampaignViewByUniqueId(this._campUniqueId).subscribe({
      next: res => {
        if (!res) {
          this.onGoHome();
          return;
        }
        this.response = res;
        this.allowPayFlow = this.isSignin ? this.response.salePrice > 0 : this.response.pricing > 0;
        this.doFormPatchValue();
        // SEO tags
        const seoData = this._route.snapshot.data;
        this._seoServ.updateMetaTags(`${this.response.name}｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`, `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/campaign/detail/${this._campUniqueId}`, seoData['image'], this.response.name);
      },
      error: err => {
        this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
        this.onGoHome();
      }
    });
  }
  doFormInit() {
    this.valForm = this._fb.group({
      regData: [null]
    });
  }
  doFormPatchValue() {
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
          control.updateValueAndValidity({
            onlySelf: true
          });
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
  onGoHome() {
    this._router.navigate(['/']);
  }
  onGoPayment() {
    this._router.navigate(['/result/payment-redirect']);
  }
  onSubmit() {
    this.canSubmit();
    if (!this.response?.regData) {
      this.bbdNotifyServ.error('送出失敗，請確認是否有欄位尚未填寫。');
      throw new Error("送出失敗");
    }
    this.spinnerServ.show();
    this._campaignApiServ.campRegister(this.response.regData).subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error(`報名失敗，請再重試一次。`);
          return;
        }
        this.allowPayFlow = !(res.postReq || '').isUndefinedOrNullOrEmpty();
        if (!this.allowPayFlow) {
          this.bbdNotifyServ.success(`報名成功。`);
          this.isCompleted = true;
        } else {
          this._commerceApiServ.postReq = res.postReq;
          this.onGoPayment();
        }
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }
  static {
    this.ɵfac = function CampaignRegisterComponent_Factory(t) {
      return new (t || CampaignRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: CampaignRegisterComponent,
      selectors: [["app-campaign-register"]],
      viewQuery: function CampaignRegisterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_controls__WEBPACK_IMPORTED_MODULE_3__.CampRegControlComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.regDataCtrl = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 4,
      consts: [[3, "type", "message", 4, "ngIf"], [1, "min-h-container"], [1, "max-w-container", "grid", "grid-cols-1", "gap-y-2", "gap-x-10", "xl:grid-cols-3"], [1, "info-header"], [3, "campInfo"], [1, "account-wrap", "xl:col-span-2"], ["class", "w-fit block mx-auto", 4, "ngIf"], ["labelPosition", "bottom", 4, "ngIf"], [3, "type", "message"], [1, "w-fit", "block", "mx-auto"], [1, "p-10"], ["message", "\u6D3B\u52D5\u5831\u540D\u5B8C\u6210"], ["labelPosition", "bottom"], [3, "formGroup"], ["matStepLabel", ""], [1, "inner-wrap"], ["formControlName", "regData"], ["regDataCtrl", ""], [1, "toolbar"], ["class", "btn-primary btn-lg", 3, "click", 4, "ngIf"], ["matStepperNext", "", "class", "btn-primary btn-lg", 4, "ngIf"], [4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "click"], ["matStepperNext", "", 1, "btn-primary", "btn-lg"], [1, "form-section"], [1, "input-group", "lg:grid-cols-2"], [1, "form-label"], ["appearance", "outline", 1, "w-full", "fill-black"], ["value", "\u4E0D\u62D8"], ["value", "\u4E0D\u62D8", "checked", ""], ["value", "\u8477\u98DF"], ["value", "\u7D20\u98DF"], ["matInput", "", "type", "text", "placeholder", "\u5718\u9AD4\u4EE3\u78BC"], [1, "flex", "flex-col", "space-y-3"], ["color", "primary"], [1, "-ml-2"], ["matStepperPrevious", "", "mat-button", ""], [1, "px-5", "py-14", "max-w-fit", "mx-auto"], [1, "pb-3"], ["src", "assets/image/icon/ecpay_logo.png", "alt", "\u7DA0\u754C\u79D1\u6280", 1, "mx-auto", "sm:ml-0"], [1, "font-bold"], [1, "opacity-70"], [1, "btn-primary", "btn-lg", "mt-5", 3, "click"]],
      template: function CampaignRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CampaignRegisterComponent_bbd_loading_indicator_0_Template, 1, 2, "bbd-loading-indicator", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-camp-reg-info", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, CampaignRegisterComponent_web_glass_bg_6_Template, 3, 0, "web-glass-bg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, CampaignRegisterComponent_mat_horizontal_stepper_7_Template, 13, 5, "mat-horizontal-stepper", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("campInfo", ctx.response);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isCompleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isCompleted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperPrevious, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _libs_core_src_lib_shared_components_bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__.BBDLoadingIndicatorComponent, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_5__.GlassBgComponent, _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_6__.CompleteComponent, _shared_controls_camp_reg_control_camp_reg_control_component__WEBPACK_IMPORTED_MODULE_7__.CampRegControlComponent, _camp_reg_info_camp_reg_info_component__WEBPACK_IMPORTED_MODULE_8__.CampRegInfoComponent],
      styles: [".info-header[_ngcontent-%COMP%] {\n\n    max-width: -moz-fit-content;\n\n    max-width: fit-content;\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.5rem\n}\n\nweb-glass-bg[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%] {\n\n    overflow-y: auto;\n\n    padding-top: 1.25rem\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1yZWdpc3Rlci9jYW1wYWlnbi1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSwyQkFBQTs7SUFBQSxzQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxxQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGdCQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1oZWFkZXIge1xuICAgIEBhcHBseSBtYXgtdy1maXQgcHgtMiBwdC0yO1xufVxuXG53ZWItZ2xhc3MtYmcgLmlubmVyLXdyYXAge1xuICAgIEBhcHBseSBwdC01IG92ZXJmbG93LXktYXV0bztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 80874:
/*!**********************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegInfoComponent: () => (/* reexport safe */ _camp_reg_info_camp_reg_info_component__WEBPACK_IMPORTED_MODULE_3__.CampRegInfoComponent),
/* harmony export */   CampaignDetailComponent: () => (/* reexport safe */ _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_1__.CampaignDetailComponent),
/* harmony export */   CampaignListComponent: () => (/* reexport safe */ _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent),
/* harmony export */   CampaignRegisterComponent: () => (/* reexport safe */ _campaign_register_campaign_register_component__WEBPACK_IMPORTED_MODULE_2__.CampaignRegisterComponent)
/* harmony export */ });
/* harmony import */ var _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-list/campaign-list.component */ 31192);
/* harmony import */ var _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-detail/campaign-detail.component */ 25568);
/* harmony import */ var _campaign_register_campaign_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign-register/campaign-register.component */ 74228);
/* harmony import */ var _camp_reg_info_camp_reg_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camp-reg-info/camp-reg-info.component */ 57616);





/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_campaign_campaign_module_ts.js.map