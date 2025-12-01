"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_news_news_module_ts"],{

/***/ 33690:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/news/news-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsRoutingModule: () => (/* binding */ NewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 28171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);




const routes = [{
  path: 'list',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.NewsListComponent
}, {
  path: 'detail/:uniqueId',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.NewsDetailComponent
}];
class NewsRoutingModule {
  static {
    this.ɵfac = function NewsRoutingModule_Factory(t) {
      return new (t || NewsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NewsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 94051:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/news/news.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsModule: () => (/* binding */ NewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 28171);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-routing.module */ 33690);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);



// Custom packages


// Config settings
const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule];
class NewsModule {
  static {
    this.ɵfac = function NewsModule_Factory(t) {
      return new (t || NewsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: NewsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _news_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewsRoutingModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewsModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_0__.NewsListComponent, _pages__WEBPACK_IMPORTED_MODULE_0__.NewsDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _news_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 28171:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/news/pages/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsDetailComponent: () => (/* reexport safe */ _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_1__.NewsDetailComponent),
/* harmony export */   NewsListComponent: () => (/* reexport safe */ _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_0__.NewsListComponent)
/* harmony export */ });
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-list/news-list.component */ 37137);
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-detail/news-detail.component */ 68989);



/***/ }),

/***/ 68989:
/*!**********************************************************************************!*\
  !*** ./apps/web/src/app/modules/news/pages/news-detail/news-detail.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsDetailComponent: () => (/* binding */ NewsDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 7376);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 96304);
/* harmony import */ var _libs_core_src_lib_shared_pipes_json_parse_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/json-parse.pipe */ 78981);


// Custom packages







class NewsDetailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this._appMsgApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.AppMsgApiServ);
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
    this._appMsgApiServ.getAppNewsMsgViewByUniqueId(this._uniqueId).subscribe({
      next: res => {
        if (!res) {
          this.onGoHome();
          return;
        }
        this.response = res;
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
    this.ɵfac = function NewsDetailComponent_Factory(t) {
      return new (t || NewsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: NewsDetailComponent,
      selectors: [["app-news-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 17,
      vars: 9,
      consts: [[1, "min-h-container", "w-full", "max-w-2xl", "mx-auto", "py-20"], [1, "space-x-2", "label"], [1, "sort"], [1, "headline"], [1, "h-auto", "text-base", "my-10", "text-pretty"], [3, "content"], ["routerLink", "/news/list", 1, "link", "link-underline"], [1, "material-symbols-rounded", "pr-2"]],
      template: function NewsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "p", 1)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u5B78\u6703\u516C\u544A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "section", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "bbd-quill-editor-viewer", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "jsonParse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 6)(14, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "arrow_left_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " \u6D88\u606F\u5217\u8868 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](5, 3, ctx.response == null ? null : ctx.response.startAt, "yyyy.MM.dd", ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.response == null ? null : ctx.response.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("content", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, (ctx.response == null ? null : ctx.response.content) || "{}")) == null ? null : tmp_2_0.desc);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__.BBDQuillEditorViewerComponent, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_json_parse_pipe__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9uZXdzL3BhZ2VzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIGludGVudGlvbmFsbHkgbGVmdCBibGFuay4gKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 37137:
/*!******************************************************************************!*\
  !*** ./apps/web/src/app/modules/news/pages/news-list/news-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsListComponent: () => (/* binding */ NewsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80489);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/paginator/paginator.component */ 94643);
/* harmony import */ var _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/results/result-empty/result-empty.component */ 9898);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 96304);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-empty.pipe */ 49841);


// Custom packages










function NewsListComponent_web_result_empty_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "web-result-empty", 12);
  }
}
const _c0 = function () {
  return {
    "focusd": true
  };
};
function NewsListComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewsListComponent_a_13_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const cat_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onCatChange(cat_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cat_r3.name, " ");
  }
}
const _c1 = function (a1) {
  return ["/news/detail/", a1];
};
function NewsListComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 13)(1, "p", 14)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c1, item_r6.uniqueId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](4, 4, item_r6.startAt, "yyyy.MM.dd", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.catName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r6.title, "");
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    length: a0,
    pageSize: a1,
    pageIndex: a2
  };
};
class NewsListComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._appMsgApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppMsgApiServ);
    this.dataSource = [];
    this.request = new _core_models__WEBPACK_IMPORTED_MODULE_1__.PagingRequest();
    this.response = null;
    // Caches
    this.newsCatsCache = [];
    this.getCaches();
  }
  ngOnInit() {
    this.doParamsInit();
    this.onCatChange();
  }
  getCaches() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([this.storeServ.getAppNewsMsgCatsCache()]).subscribe(([cats]) => {
      this.newsCatsCache = cats || [];
    });
  }
  doParamsInit() {
    this.request.queryRequest = new _core_models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgReq();
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
  onCatChange(newsCatId = 0) {
    this.doParamsReset();
    this.request.queryRequest.catId = newsCatId;
    this.onSearch();
  }
  onSearch(pageIndex = 1) {
    this.request.pageIndex = pageIndex;
    this._appMsgApiServ.getAppNewsMsgViewsPaging(this.request).subscribe({
      next: res => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    });
  }
  static {
    this.ɵfac = function NewsListComponent_Factory(t) {
      return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NewsListComponent,
      selectors: [["app-news-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 17,
      vars: 12,
      consts: [[1, "max-w-container", "pt-32"], [1, "mt-20", "xl:mt-10"], [1, "display", "d-black"], [1, "headline"], ["class", "block mt-5", 4, "ngIf"], [1, "sort-list-container"], [1, "sort-link"], [1, "link-item", 3, "ngClass", "click"], ["class", "link-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "news-list", "flex-auto"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "params", "pageIndexChange"], [1, "block", "mt-5"], [3, "routerLink"], [1, "space-x-2"], [1, "sort"]],
      template: function NewsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h2")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Latest News");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u6700\u65B0\u6D88\u606F");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NewsListComponent_web_result_empty_7_Template, 1, 0, "web-result-empty", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "section", 5)(10, "div", 6)(11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewsListComponent_Template_a_click_11_listener() {
            return ctx.onCatChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " \u6240\u6709\u6D88\u606F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NewsListComponent_a_13_Template, 2, 3, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, NewsListComponent_a_15_Template, 9, 10, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "web-paginator", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageIndexChange", function NewsListComponent_Template_web_paginator_pageIndexChange_16_listener($event) {
            return ctx.onSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 5, ctx.dataSource));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.newsCatsCache);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](8, _c2, (ctx.response == null ? null : ctx.response.totalCount) || 0, (ctx.response == null ? null : ctx.response.pageSize) || 0, (ctx.response == null ? null : ctx.response.pageIndex) || 0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__.PaginatorComponent, _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_4__.ResultEmptyComponent, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_6__.IsEmptyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_news_news_module_ts.js.map