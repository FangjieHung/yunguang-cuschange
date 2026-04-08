"use strict";
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 52839:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/news/news-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsRoutingModule: () => (/* binding */ NewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 88207);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 3098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);





const routes = [{
  path: 'list',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.NewsListComponent,
  data: {
    title: `最新消息｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    description: '最新消息',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/news/list`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'detail/:uniqueId',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.NewsDetailComponent,
  data: {
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}];
class NewsRoutingModule {
  static {
    this.ɵfac = function NewsRoutingModule_Factory(t) {
      return new (t || NewsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NewsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 52278:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/news/news.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsModule: () => (/* binding */ NewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 3098);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-routing.module */ 52839);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 53896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);



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

/***/ 3098:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/news/pages/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsDetailComponent: () => (/* reexport safe */ _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_1__.NewsDetailComponent),
/* harmony export */   NewsListComponent: () => (/* reexport safe */ _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_0__.NewsListComponent)
/* harmony export */ });
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-list/news-list.component */ 46460);
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-detail/news-detail.component */ 48016);



/***/ }),

/***/ 48016:
/*!**********************************************************************************!*\
  !*** ./apps/web/src/app/modules/news/pages/news-detail/news-detail.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsDetailComponent: () => (/* binding */ NewsDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 88207);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 46793);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 92863);
/* harmony import */ var _libs_core_src_lib_shared_pipes_json_parse_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/json-parse.pipe */ 73010);



// Custom packages








function NewsDetailComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "pinboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u7F6E\u9802");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class NewsDetailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_1__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._appMsgApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppMsgApiServ);
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this._seoServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.SEOServ);
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
        // SEO tags
        const seoData = this._route.snapshot.data;
        this._seoServ.updateMetaTags(`${this.response.title}｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`, `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/news/detail/${this._uniqueId}`, seoData['image'], this.response.title);
        // JSON-LD: NewsArticle (AEO 信號)
        this._seoServ.injectStructuredData('page-ld', {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          'headline': this.response.title,
          'url': `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/news/detail/${this._uniqueId}`,
          'datePublished': new Date(this.response.startAt).toISOString(),
          'dateModified': new Date(this.response.endAt).toISOString(),
          'image': seoData['image'],
          'description': this.response.title,
          'publisher': {
            '@type': 'Organization',
            '@id': 'https://tslmai.org.tw/#organization',
            'name': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName,
            'logo': {
              '@type': 'ImageObject',
              'url': `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
            }
          }
        });
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
      return new (t || NewsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NewsDetailComponent,
      selectors: [["app-news-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 19,
      vars: 10,
      consts: [[1, "min-h-container", "w-full", "max-w-3xl", "mx-auto", "p-5"], [1, "news-list"], [1, "info-wrap"], ["class", "pin", 4, "ngIf"], [1, "headline"], [1, "h-auto", "text-base", "my-10", "text-pretty"], [3, "content"], ["routerLink", "/news/list", 1, "link-underline"], [1, "material-symbols-rounded"], [1, "pin"], [1, "material-symbols-rounded", "pr-1"]],
      template: function NewsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NewsDetailComponent_p_3_Template, 4, 0, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u5B78\u6703\u516C\u544A \u2223");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "dateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "section", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "bbd-quill-editor-viewer", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "jsonParse");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 7)(15, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "arrow_left_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\u6D88\u606F\u5217\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.response == null ? null : ctx.response.stickyAt);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](8, 4, ctx.response == null ? null : ctx.response.startAt, "yyyy.MM.dd", ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.response == null ? null : ctx.response.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 8, (ctx.response == null ? null : ctx.response.content) || "{}")) == null ? null : tmp_3_0.desc);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_3__.BBDQuillEditorViewerComponent, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_json_parse_pipe__WEBPACK_IMPORTED_MODULE_5__.JsonParsePipe],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9uZXdzL3BhZ2VzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIGludGVudGlvbmFsbHkgbGVmdCBibGFuay4gKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 46460:
/*!******************************************************************************!*\
  !*** ./apps/web/src/app/modules/news/pages/news-list/news-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsListComponent: () => (/* binding */ NewsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 65244);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-loading-indicator/bbd-loading-indicator.component */ 3653);
/* harmony import */ var _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/paginator/paginator.component */ 40564);
/* harmony import */ var _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/results/result-empty/result-empty.component */ 23309);
/* harmony import */ var _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/date-formatter.pipe */ 92863);
/* harmony import */ var _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/is-empty.pipe */ 610);



// Custom packages
















function NewsListComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewsListComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r5.request.queryRequest.queryString = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewsListComponent_mat_chip_option_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewsListComponent_mat_chip_option_20_Template_mat_chip_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const cat_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.onCatChange(cat_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](cat_r7.name);
  }
}
function NewsListComponent_bbd_loading_indicator_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "bbd-loading-indicator", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "skeleton")("message", "\u6D3B\u52D5\u8CC7\u6599\u8B80\u53D6\u4E2D\uFF0C\u8ACB\u7A0D\u5019");
  }
}
function NewsListComponent_web_result_empty_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "web-result-empty", 22);
  }
}
function NewsListComponent_ng_container_25_a_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "pinboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u7F6E\u9802");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/news/detail/", a1];
};
function NewsListComponent_ng_container_25_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NewsListComponent_ng_container_25_a_1_p_2_Template, 4, 0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "dateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c0, item_r11.uniqueId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r11.stickyAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r11.catName, " \u2223");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](7, 5, item_r11.startAt, "yyyy.MM.dd", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r11.title, "");
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    length: a0,
    pageSize: a1,
    pageIndex: a2
  };
};
function NewsListComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewsListComponent_ng_container_25_a_1_Template, 10, 11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "web-paginator", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageIndexChange", function NewsListComponent_ng_container_25_Template_web_paginator_pageIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.onSearch($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](2, _c1, (ctx_r4.response == null ? null : ctx_r4.response.totalCount) || 0, (ctx_r4.response == null ? null : ctx_r4.response.pageSize) || 0, (ctx_r4.response == null ? null : ctx_r4.response.pageIndex) || 0));
  }
}
const _c2 = function (a0) {
  return {
    "disabled-hide": a0
  };
};
class NewsListComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.searchValue = '';
    this.isLoading = true;
    this._appMsgApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppMsgApiServ);
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute);
    this._seoServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.SEOServ);
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
    const seoData = this._route.snapshot.data;
    this._seoServ.updateMetaTags(seoData['title'], seoData['url'], seoData['image'], seoData['description']);
  }
  getCaches() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.storeServ.getAppNewsMsgCatsCache()]).subscribe(([cats]) => {
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
    if (!this.isBrowser) return;
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
    this.isLoading = true;
    this.request.pageIndex = pageIndex;
    this._appMsgApiServ.getAppNewsMsgViewsPaging(this.request).subscribe({
      next: res => {
        // API 失敗或沒資料
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.isLoading = false;
          this.dataSource = [];
          this.response = res || {
            totalCount: 0,
            pageIndex,
            pageSize: this.request.pageSize
          };
          return;
        }
        // 有資料
        this.response = res;
        this.dataSource = [...this.response.rows];
        this.doScrollToTop();
        this.isLoading = false;
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
        this.isLoading = false;
      }
    });
  }
  static {
    this.ɵfac = function NewsListComponent_Factory(t) {
      return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: NewsListComponent,
      selectors: [["app-news-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
      decls: 27,
      vars: 14,
      consts: [[1, "max-w-container"], [1, "display", "d-black"], [1, "headline"], [1, "sort-list-container"], ["action", "", 1, "pb-5"], [1, "search-wrap"], ["appearance", "outline", 1, "fill-black"], ["matPrefix", "", 1, "material-symbols-rounded"], ["matInput", "", "type", "text", "name", "searchValue", "placeholder", "\u641C\u5C0B", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "btn-primary", "btn-lg", 3, "ngClass", "disabled", "click"], ["aria-label", "sort selection", 1, "sort-link"], ["selected", "", 3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [1, "news-list"], [3, "type", "message", 4, "ngIf"], ["class", "block mt-5", 4, "ngIf"], [4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "material-symbols-rounded"], [3, "click"], [3, "type", "message"], [1, "block", "mt-5"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "params", "pageIndexChange"], [3, "routerLink"], [1, "info-wrap"], ["class", "pin", 4, "ngIf"], [1, "pin"], [1, "material-symbols-rounded", "pr-1"]],
      template: function NewsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h2")(3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Latest News");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u6700\u65B0\u6D88\u606F");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 3)(8, "form", 4)(9, "div", 5)(10, "mat-form-field", 6)(11, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function NewsListComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.request.queryRequest.queryString = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, NewsListComponent_button_14_Template, 3, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewsListComponent_Template_button_click_15_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " \u641C\u5C0B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-chip-listbox", 11)(18, "mat-chip-option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewsListComponent_Template_mat_chip_option_click_18_listener() {
            return ctx.onCatChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\u6240\u6709\u6D88\u606F");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, NewsListComponent_mat_chip_option_20_Template, 2, 1, "mat-chip-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, NewsListComponent_bbd_loading_indicator_22_Template, 1, 2, "bbd-loading-indicator", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, NewsListComponent_web_result_empty_23_Template, 1, 0, "web-result-empty", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, NewsListComponent_ng_container_25_Template, 3, 6, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c2, !ctx.request.queryRequest.queryString))("disabled", !ctx.request.queryRequest.queryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.newsCatsCache);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 8, ctx.dataSource));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 10, ctx.dataSource));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipOption, _libs_core_src_lib_shared_components_bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_3__.BBDLoadingIndicatorComponent, _shared_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _shared_components_results_result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_5__.ResultEmptyComponent, _libs_core_src_lib_shared_pipes_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe, _libs_core_src_lib_shared_pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_7__.IsEmptyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

};
;
//# sourceMappingURL=278.js.map