"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 83365:
/*!**********************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/campaign-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignRoutingModule: () => (/* binding */ CampaignRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 69355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);




const routes = [{
  path: 'list',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent
}, {
  path: 'detail/:uniqueId',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.CampaignDetailComponent
}];
class CampaignRoutingModule {
  static {
    this.ɵfac = function CampaignRoutingModule_Factory(t) {
      return new (t || CampaignRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CampaignRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CampaignRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 65356:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/campaign.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignModule: () => (/* binding */ CampaignModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 69355);
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-routing.module */ 83365);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 53896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);





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
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent, _pages__WEBPACK_IMPORTED_MODULE_0__.CampaignDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__.CampaignRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 48013:
/*!**********************************************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/campaign-detail/campaign-detail.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignDetailComponent: () => (/* binding */ CampaignDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 19418);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 46793);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 92863);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-same-date.pipe */ 79562);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages









function CampaignDetailComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "li")(3, "div", 2)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 3, ctx_r0.response == null ? null : ctx_r0.response.endAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 6, ctx_r0.response == null ? null : ctx_r0.response.endAt, "E"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 9, ctx_r0.response == null ? null : ctx_r0.response.endAt, "dd"));
  }
}
class CampaignDetailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this._campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.CampaignApiServ);
    this._uniqueId = '';
    this.response = null;
  }
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._uniqueId = params.get('uniqueId') || '';
      this.doDataInit();
    });
  }
  doDataInit() {
    this._campaignApiServ.getCampaignViewByUniqueId(this._uniqueId).subscribe({
      next: res => {
        if (!res) {
          this.onGoHome();
          return;
        }
        this.response = res;
        this.contentInfo = JSON.parse(this.response.content || '{}');
      },
      error: err => {
        this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
        this.onGoHome();
      }
    });
  }
  onGoHome() {
    this._router.navigate(['/']);
  }
  static {
    this.ɵfac = function CampaignDetailComponent_Factory(t) {
      return new (t || CampaignDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CampaignDetailComponent,
      selectors: [["app-campaign-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 69,
      vars: 37,
      consts: [[1, "min-h-container", "w-full", "max-w-2xl", "mx-auto", "py-20"], [1, "date-duration"], [1, "month-wrap"], [1, "date"], [4, "ngIf"], [1, "headline"], [1, "describe-list"], ["mode", "determinate", "color", "primary", "value", "100", 1, "mb-10"], [1, "info-wrap"], [1, "info-label"], [1, "material-symbols-rounded"], [1, "ml-1"], [1, "ml-7"], [1, "h-auto", "text-base", "my-10", "text-pretty"], [3, "content"], ["routerLink", "/campaign/list", 1, "link-underline"], [1, "line"]],
      template: function CampaignDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "ol", 1)(3, "li")(4, "div", 2)(5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CampaignDetailComponent_ng_container_14_Template, 13, 12, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "isSameDate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ul", 6)(19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\u5831\u540D\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\u2223");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "mat-progress-bar", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ul", 8)(28, "li")(29, "p", 9)(30, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u6D3B\u52D5\u8B1B\u5E2B");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "li")(37, "p", 9)(38, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "date_range");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "\u6D3B\u52D5\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li")(47, "p", 9)(48, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "location_on");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "\u6D3B\u52D5\u5730\u9EDE");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li")(55, "p", 9)(56, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "restaurant_menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u4F9B\u9910");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "section", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "bbd-quill-editor-viewer", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "a", 15)(65, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "arrow_left_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "\u6D3B\u52D5\u5217\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 13, ctx.response == null ? null : ctx.response.startAt, "MM"), " \u2215");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 16, ctx.response == null ? null : ctx.response.startAt, "E"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 19, ctx.response == null ? null : ctx.response.startAt, "dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 22, ctx.response == null ? null : ctx.response.endAt, ctx.response == null ? null : ctx.response.startAt));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](24, 25, ctx.response == null ? null : ctx.response.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](25, 28, ctx.response == null ? null : ctx.response.regEndAt, "yyyy.MM.dd HH:mm"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.contentInfo == null ? null : ctx.contentInfo.speakers);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](44, 31, ctx.response == null ? null : ctx.response.startAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](45, 34, ctx.response == null ? null : ctx.response.endAt, "yyyy.MM.dd HH:mm"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.contentInfo == null ? null : ctx.contentInfo.location);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.contentInfo == null ? null : ctx.contentInfo.hasMeal) ? "\u6709" : "\u7121");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("content", ctx.contentInfo == null ? null : ctx.contentInfo.desc);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__.BBDQuillEditorViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe],
      styles: [".info-wrap[_ngcontent-%COMP%] {\n    margin-bottom: 1.75rem\n}\n.info-wrap[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.75rem * var(--tw-space-y-reverse))\n}\n.info-wrap[_ngcontent-%COMP%] {\n    border-bottom-width: 1px;\n    padding-bottom: 1.75rem\n}\n.info-wrap[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    --tw-text-opacity: 1;\n    color: rgb(2 132 199 / var(--tw-text-opacity, 1))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1kZXRhaWwvY2FtcGFpZ24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0lBQUE7QUFBQTtBQUFBO0lBQUEsdUJBQUE7SUFBQSwrREFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBLHdCQUFBO0lBQUE7QUFBQTtBQUdJO0lBQUEsYUFBQTtJQUFBLG1CQUFBO0lBQUEsZ0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby13cmFwIHtcbiAgICBAYXBwbHkgbWItNyBzcGFjZS15LTcgYm9yZGVyLWIgcGItNztcblxuICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtc2t5LTYwMDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7778:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/campaign-list/campaign-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignListComponent: () => (/* binding */ CampaignListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 19418);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/paginator/paginator.component */ 40564);
/* harmony import */ var _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/results/result-empty/result-empty.component */ 23309);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 92863);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-empty.pipe */ 610);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-same-date.pipe */ 79562);

// Custom packages

















function CampaignListComponent_web_result_empty_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "web-result-empty", 13);
  }
}
function CampaignListComponent_web_result_empty_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "web-result-empty", 13);
  }
}
function CampaignListComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CampaignListComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r4.request.queryRequest.queryString = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function CampaignListComponent_web_glass_bg_19_ng_container_15_Template(rf, ctx) {
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
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 3, item_r6.endAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 6, item_r6.endAt, "E"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 9, item_r6.endAt, "dd"));
  }
}
const _c0 = function (a1) {
  return ["/campaign/detail/", a1];
};
function CampaignListComponent_web_glass_bg_19_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CampaignListComponent_web_glass_bg_19_ng_container_15_Template, 13, 12, "ng-container", 22);
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
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](26, _c0, item_r6.uniqueId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 8, item_r6.startAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 11, item_r6.startAt, "E"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 14, item_r6.startAt, "dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 17, item_r6.endAt, item_r6.startAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](25, 20, item_r6.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](26, 23, item_r6.regEndAt, "yyyy.MM.dd HH:mm"), "");
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
      decls: 21,
      vars: 16,
      consts: [[1, "max-w-container"], [1, "display", "d-black"], [1, "headline"], ["class", "block mt-5", 4, "ngIf"], ["action", "", 1, "search-wrap", "mt-5", "md:w-1/2", "xl:w-1/3"], ["appearance", "outline", 1, "fill-black"], ["matPrefix", "", 1, "material-symbols-rounded"], ["matInput", "", "type", "text", "name", "searchValue", "placeholder", "\u641C\u5C0B", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "ngClass", "disabled", "click"], [1, "campain-list"], ["class", "container-hover", 4, "ngFor", "ngForOf"], [3, "params", "pageIndexChange"], [1, "block", "mt-5"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "material-symbols-rounded"], [1, "container-hover"], [1, "block", "p-2", 3, "routerLink"], [1, "p-3"], [1, "date-duration"], [1, "month-wrap"], [1, "date"], [4, "ngIf"], [1, "title-sm"], [1, "describe-list"], ["mode", "determinate", "color", "primary", "value", "100", 1, "mb-5"], [1, "btn-white", "w-full", "rounded-full", "h-12"], [1, "line"]],
      template: function CampaignListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h2")(3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Academic Activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u5B78\u8853\u6D3B\u52D5");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, CampaignListComponent_web_result_empty_7_Template, 1, 0, "web-result-empty", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, CampaignListComponent_web_result_empty_8_Template, 1, 0, "web-result-empty", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "form", 4)(11, "mat-form-field", 5)(12, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CampaignListComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.request.queryRequest.queryString = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CampaignListComponent_button_15_Template, 3, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CampaignListComponent_Template_button_click_16_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, " \u641C\u5C0B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "section", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, CampaignListComponent_web_glass_bg_19_Template, 30, 28, "web-glass-bg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "web-paginator", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageIndexChange", function CampaignListComponent_Template_web_paginator_pageIndexChange_20_listener($event) {
            return ctx.onSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 8, ctx.dataSource));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c1, !ctx.request.queryRequest.queryString))("disabled", !ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](12, _c2, (ctx.response == null ? null : ctx.response.totalCount) || 0, (ctx.response == null ? null : ctx.response.pageSize) || 0, (ctx.response == null ? null : ctx.response.pageIndex) || 0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__.GlassBgComponent, _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__.ResultEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_7__.IsEmptyPipe, _libs_core_src_lib_shared_pipes_is_same_date_pipe__WEBPACK_IMPORTED_MODULE_8__.IsSameDatePipe],
      styles: [".campain-list[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1.25rem;\n    padding-bottom: 1.25rem\n}\n@media (min-width: 768px) {\n    .campain-list[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, minmax(0, 1fr))\n    }\n}\n@media (min-width: 1024px) {\n    .campain-list[_ngcontent-%COMP%] {\n        padding-top: 1.25rem\n    }\n}\n@media (min-width: 1280px) {\n    .campain-list[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(3, minmax(0, 1fr))\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1saXN0L2NhbXBhaWduLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxhQUFBO0lBQUEsWUFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQTtRQUFBO0lBQUE7QUFBQTtBQUFBO0lBQUE7UUFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtcGFpbi1saXN0IHtcbiAgICBAYXBwbHkgZ3JpZCBnYXAtNSBwYi01IGxnOnB0LTUgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 69355:
/*!**********************************************************!*\
  !*** ./apps/web/src/app/modules/campaign/pages/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignDetailComponent: () => (/* reexport safe */ _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_1__.CampaignDetailComponent),
/* harmony export */   CampaignListComponent: () => (/* reexport safe */ _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent)
/* harmony export */ });
/* harmony import */ var _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-list/campaign-list.component */ 7778);
/* harmony import */ var _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-detail/campaign-detail.component */ 48013);



/***/ })

};
;
//# sourceMappingURL=356.js.map