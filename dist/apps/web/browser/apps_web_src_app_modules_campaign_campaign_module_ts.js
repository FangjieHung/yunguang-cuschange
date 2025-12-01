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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 80874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);




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
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent, _pages__WEBPACK_IMPORTED_MODULE_0__.CampaignDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__.CampaignRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 20288);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 7376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 96304);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages








class CampaignDetailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this._campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.CampaignApiServ);
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
      return new (t || CampaignDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CampaignDetailComponent,
      selectors: [["app-campaign-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 80,
      vars: 45,
      consts: [[1, "min-h-container", "w-full", "max-w-2xl", "mx-auto", "py-20"], [1, "date-duration", "text-base", "max-w-xs"], [1, "text-5xl"], [1, "line"], [1, "headline"], [1, "describe-list"], ["mode", "determinate", "color", "primary", "value", "100", 1, "mb-10"], [1, "info-wrap"], [1, "info-label"], [1, "material-symbols-rounded"], [1, "ml-1"], [1, "ml-7"], [1, "h-auto", "text-base", "my-10", "text-pretty"], [3, "content"], ["routerLink", "/campaign/list", 1, "link", "link-underline"], [1, "material-symbols-rounded", "pr-2"]],
      template: function CampaignDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "ol", 1)(3, "li")(4, "p")(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li")(17, "p")(18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ul", 5)(31, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u5831\u540D\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u2223");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "mat-progress-bar", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ul", 7)(40, "li")(41, "p", 8)(42, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u6D3B\u52D5\u8B1B\u5E2B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li")(49, "p", 8)(50, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "date_range");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u6D3B\u52D5\u6642\u9593");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li")(59, "p", 8)(60, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "location_on");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\u6D3B\u52D5\u5730\u9EDE");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li")(67, "p", 8)(68, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "restaurant_menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "\u4F9B\u9910");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "section", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "bbd-quill-editor-viewer", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "a", 14)(77, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "arrow_left_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, " \u6D3B\u52D5\u5217\u8868 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 15, ctx.response == null ? null : ctx.response.startAt, "MM"), " \u2215");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 18, ctx.response == null ? null : ctx.response.startAt, "E"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 21, ctx.response == null ? null : ctx.response.startAt, "dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 24, ctx.response == null ? null : ctx.response.endAt, "MM"), " \u2215");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](24, 27, ctx.response == null ? null : ctx.response.endAt, "E"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 30, ctx.response == null ? null : ctx.response.endAt, "dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](36, 33, ctx.response == null ? null : ctx.response.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](37, 36, ctx.response == null ? null : ctx.response.regEndAt, "yyyy.MM.dd HH:mm"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.contentInfo == null ? null : ctx.contentInfo.speakers);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](56, 39, ctx.response == null ? null : ctx.response.startAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](57, 42, ctx.response == null ? null : ctx.response.endAt, "yyyy.MM.dd HH:mm"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.contentInfo == null ? null : ctx.contentInfo.location);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.contentInfo == null ? null : ctx.contentInfo.hasMeal) ? "\u6709" : "\u7121");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.contentInfo == null ? null : ctx.contentInfo.desc);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__.BBDQuillEditorViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.DateFormatterPipe],
      styles: [".info-wrap[_ngcontent-%COMP%] {\n    margin-bottom: 1.75rem\n}\n.info-wrap[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.75rem * var(--tw-space-y-reverse))\n}\n.info-wrap[_ngcontent-%COMP%] {\n    border-bottom-width: 1px;\n    padding-bottom: 1.75rem\n}\n.info-wrap[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    --tw-text-opacity: 1;\n    color: rgb(2 132 199 / var(--tw-text-opacity, 1))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1kZXRhaWwvY2FtcGFpZ24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0lBQUE7QUFBQTtBQUFBO0lBQUEsdUJBQUE7SUFBQSwrREFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBLHdCQUFBO0lBQUE7QUFBQTtBQUdJO0lBQUEsYUFBQTtJQUFBLG1CQUFBO0lBQUEsZ0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby13cmFwIHtcbiAgICBAYXBwbHkgbWItNyBzcGFjZS15LTcgYm9yZGVyLWIgcGItNztcblxuICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtc2t5LTYwMDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 20288);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/paginator/paginator.component */ 94643);
/* harmony import */ var _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/results/result-empty/result-empty.component */ 9898);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 96304);

// Custom packages











function CampaignListComponent_web_result_empty_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "web-result-empty", 11);
  }
}
const _c0 = function (a0) {
  return {
    "focusd": a0
  };
};
function CampaignListComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CampaignListComponent_a_10_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const i_r4 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.setFocused(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sort_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, ctx_r1.focusedIndex === i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", sort_r3, " ");
  }
}
const _c1 = function (a1) {
  return ["/campaign/detail/", a1];
};
function CampaignListComponent_web_glass_bg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "web-glass-bg", 13)(1, "a", 14)(2, "div", 15)(3, "ol", 16)(4, "li")(5, "p")(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li")(18, "p")(19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ul", 21)(32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u5831\u540D\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\u2223");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "mat-progress-bar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\u8A73\u7D30\u8CC7\u8A0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](34, _c1, item_r7.uniqueId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 10, item_r7.startAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 13, item_r7.startAt, "E"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 16, item_r7.startAt, "dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 19, item_r7.endAt, "MM"), " \u2215");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 22, item_r7.endAt, "E"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](28, 25, item_r7.endAt, "dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](37, 28, item_r7.regStartAt, "yyyy.MM.dd HH:mm"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](38, 31, item_r7.regEndAt, "yyyy.MM.dd HH:mm"), "");
  }
}
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
    this.campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CampaignApiServ);
    this.dataSource = [];
    this.request = new _core_models__WEBPACK_IMPORTED_MODULE_1__.PagingRequest();
    this.response = null;
    this.sorts = ['所有課程', '研討會', '訓練課程', '工作坊'];
    this.focusedIndex = null;
  }
  setFocused(index) {
    this.focusedIndex = index;
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
      return new (t || CampaignListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CampaignListComponent,
      selectors: [["web-campaign-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 8,
      consts: [[1, "max-w-container", "pt-32"], [1, "mt-20", "xl:mt-10"], [1, "display", "d-black"], [1, "headline"], ["class", "block mt-5", 4, "ngIf"], [1, "sort-list-container"], [1, "sort-link"], ["class", "link-item", "routerLink", "/campaign/detail", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "campain-list"], ["class", "container-hover", 4, "ngFor", "ngForOf"], [3, "params", "pageIndexChange"], [1, "block", "mt-5"], ["routerLink", "/campaign/detail", 1, "link-item", 3, "ngClass", "click"], [1, "container-hover"], [1, "block", "w-full", "p-2", 3, "routerLink"], [1, "px-8"], [1, "date-duration"], [1, "text-2xl"], [1, "text-6xl"], [1, "line"], [1, "title-sm"], [1, "describe-list"], ["mode", "determinate", "color", "primary", "value", "100", 1, "mb-10"], [1, "btn-white", "w-full", "rounded-full", "h-12"]],
      template: function CampaignListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h2")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Academic Activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u5B78\u8853\u6D3B\u52D5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CampaignListComponent_web_result_empty_7_Template, 1, 0, "web-result-empty", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "section", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, CampaignListComponent_a_10_Template, 2, 4, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CampaignListComponent_web_glass_bg_12_Template, 42, 36, "web-glass-bg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "web-paginator", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageIndexChange", function CampaignListComponent_Template_web_paginator_pageIndexChange_13_listener($event) {
            return ctx.onSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sorts);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](4, _c2, (ctx.response == null ? null : ctx.response.totalCount) || 0, (ctx.response == null ? null : ctx.response.pageSize) || 0, (ctx.response == null ? null : ctx.response.pageIndex) || 0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_3__.GlassBgComponent, _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__.ResultEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe],
      styles: [".campain-list[_ngcontent-%COMP%] {\n    display: grid;\n    flex: 1 1 auto;\n    gap: 2.5rem\n}\n@media (min-width: 1024px) {\n    .campain-list[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, minmax(0, 1fr))\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jYW1wYWlnbi9wYWdlcy9jYW1wYWlnbi1saXN0L2NhbXBhaWduLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxhQUFBO0lBQUEsY0FBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbXBhaW4tbGlzdCB7XG4gICAgQGFwcGx5IGZsZXgtYXV0byBncmlkIGdhcC0xMCBsZzpncmlkLWNvbHMtMjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony export */   CampaignDetailComponent: () => (/* reexport safe */ _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_1__.CampaignDetailComponent),
/* harmony export */   CampaignListComponent: () => (/* reexport safe */ _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_0__.CampaignListComponent)
/* harmony export */ });
/* harmony import */ var _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-list/campaign-list.component */ 31192);
/* harmony import */ var _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-detail/campaign-detail.component */ 25568);



/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_campaign_campaign_module_ts.js.map