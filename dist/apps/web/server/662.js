"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 46783:
/*!****************************************************************!*\
  !*** ./apps/web/src/app/modules/about/about-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutRoutingModule: () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 52452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 88207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);





const routes = [{
  path: 'charter',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent,
  data: {
    title: `組織章程｜${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteName}`,
    description: '組織章程',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/charter`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'supervisor',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.SupervisorComponent,
  data: {
    title: `理監事成員｜${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteName}`,
    description: '理監事成員',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/supervisor`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'committee',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.CommitteeComponent,
  data: {
    title: `委員會組織｜${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteName}`,
    description: '委員會組織',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/committee`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'privacy',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent,
  data: {
    title: `隱私權｜${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteName}`,
    description: '隱私權',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/privacy`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'terms',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent,
  data: {
    title: `服務條款｜${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteName}`,
    description: '服務條款',
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/terms`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}];
class AboutRoutingModule {
  static {
    this.ɵfac = function AboutRoutingModule_Factory(t) {
      return new (t || AboutRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 19662:
/*!********************************************************!*\
  !*** ./apps/web/src/app/modules/about/about.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 46783);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 53896);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 52452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);


// Custom packages



// Config settings
const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
class AboutModule {
  static {
    this.ɵfac = function AboutModule_Factory(t) {
      return new (t || AboutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.AboutContentViewerComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.CommitteeComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.SupervisorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 16640:
/*!*****************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/about/pages/about-content-viewer/about-content-viewer.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutContentViewerComponent: () => (/* binding */ AboutContentViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 46793);


// Custom packages





class AboutContentViewerComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._appObjectApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppStoreApiServ);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.content = '';
  }
  ngOnInit() {
    const currUrl = this._router.url || '';
    if (currUrl.startsWith('/about/charter')) {
      this._appObjectApiServ.getAppObjectStoreValueByCode(_core_models__WEBPACK_IMPORTED_MODULE_1__.AppObjectStoreCodes.關於學會).subscribe({
        next: res => {
          if (!res) {
            this.content = '';
            return;
          }
          this.content = res?.charter || '';
        },
        error: err => {
          this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
        }
      });
    }
    if (currUrl.startsWith('/about/privacy') || currUrl.startsWith('/about/terms')) {
      this._appObjectApiServ.getAppObjectStoreValueByCode(_core_models__WEBPACK_IMPORTED_MODULE_1__.AppObjectStoreCodes.網站條款設定檔).subscribe({
        next: res => {
          if (!res) {
            this.content = '';
            return;
          }
          if (currUrl.includes('privacy')) this.content = res?.privacy || '';else this.content = res?.terms || '';
        },
        error: err => {
          this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
        }
      });
    }
  }
  static {
    this.ɵfac = function AboutContentViewerComponent_Factory(t) {
      return new (t || AboutContentViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AboutContentViewerComponent,
      selectors: [["web-about-content-viewer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "min-h-container", "w-full", "max-w-2xl", "mx-auto", "py-20"], [3, "content"]],
      template: function AboutContentViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "bbd-quill-editor-viewer", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.content);
        }
      },
      dependencies: [_libs_core_src_lib_shared_components_bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_3__.BBDQuillEditorViewerComponent],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hYm91dC9wYWdlcy9hYm91dC1jb250ZW50LXZpZXdlci9hYm91dC1jb250ZW50LXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgZmlsZSBpcyBpbnRlbnRpb25hbGx5IGxlZnQgYmxhbmsuICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 37602:
/*!*******************************************************************************!*\
  !*** ./apps/web/src/app/modules/about/pages/committee/committee.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommitteeComponent: () => (/* binding */ CommitteeComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 18516);

// Custom packages



function CommitteeComponent_section_10_span_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u3001");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CommitteeComponent_section_10_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommitteeComponent_section_10_span_20_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const person_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](person_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !last_r4);
  }
}
function CommitteeComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 6)(1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 8)(4, "li")(5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u4E3B\u4EFB\u59D4\u54E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 10)(8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u57F7\u884C\u79D8\u66F8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10)(14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u59D4\u54E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CommitteeComponent_section_10_span_20_Template, 3, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r1.Chairperson);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r1.Secretary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r1.Commissioner);
  }
}
class CommitteeComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.Committee = [{
      category: '學術研究',
      Chairperson: '郭律成',
      Secretary: '朱學緯',
      Commissioner: ['吳俊忠', '黃昱璁', '王唯堯', '陳一心', '賴志政', '施宏謀', '李岱芬', '吳亞倫', '游雅言']
    }, {
      category: '國際事務',
      Chairperson: '郭錦輯',
      Secretary: '朱學緯',
      Commissioner: ['余志強', '王唯堯', '林正修']
    }, {
      category: '公關聯誼',
      Chairperson: '王敦仁',
      Secretary: '何文育',
      Commissioner: ['謝文祥', '李岱芬', '余志強']
    }, {
      category: '會務發展',
      Chairperson: '謝文祥',
      Secretary: '蔡雅雯',
      Commissioner: ['郭律成', '施宏謀', '林進福', '林正修', '王敦仁', '賴靜憶']
    }];
  }
  ngOnInit() {
    console.log('committee component init');
  }
  static {
    this.ɵfac = function CommitteeComponent_Factory(t) {
      return new (t || CommitteeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CommitteeComponent,
      selectors: [["web-committee"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 1,
      consts: [[1, "max-w-container"], [1, "display", "d-black"], [1, "headline"], [1, "label"], [1, "py-5", "space-y-10", "divide-y", "divide-dashed"], ["class", "md:flex items-start pt-10", 4, "ngFor", "ngForOf"], [1, "md:flex", "items-start", "pt-10"], [1, "category"], [1, "member-list-wrap"], [1, "text-blue-950/50"], [1, "text-2xl"], [1, ""], ["class", "inline-block", 4, "ngFor", "ngForOf"], [1, "inline-block"], ["class", "px-2 opacity-0", 4, "ngIf"], [1, "px-2", "opacity-0"]],
      template: function CommitteeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h2")(3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Committee");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u59D4\u54E1\u6703\u7D44\u7E54");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u4EFB\u671F\u671F\u9593 114 \u5E74 3 \u6708 29 \u65E5\u81F3 117 \u5E74 3 \u6708 28 \u65E5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CommitteeComponent_section_10_Template, 21, 4, "section", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Committee);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: ["h2.category[_ngcontent-%COMP%] {\n\n    margin-bottom: 1rem;\n\n    margin-right: 8rem;\n\n    min-width: -moz-fit-content;\n\n    min-width: fit-content;\n\n    font-size: 1.875rem;\n\n    font-weight: 300;\n\n    line-height: 1;\n\n    letter-spacing: 0.05em\n}\n\n.member-list-wrap[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    flex: 1 1 auto;\n\n    flex-wrap: wrap;\n\n    align-items: flex-start;\n\n    gap: 2.5rem\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hYm91dC9wYWdlcy9jb21taXR0ZWUvY29tbWl0dGVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLGtCQUFBOztJQUFBLDJCQUFBOztJQUFBLHNCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLGNBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxhQUFBOztJQUFBLGNBQUE7O0lBQUEsZUFBQTs7SUFBQSx1QkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaDIuY2F0ZWdvcnkge1xuICAgIEBhcHBseSBmb250LWxpZ2h0IHRleHQtM3hsIHRyYWNraW5nLXdpZGVyIGxlYWRpbmctbm9uZSBtYi00IG1yLTMyIG1pbi13LWZpdDtcbn1cblxuLm1lbWJlci1saXN0LXdyYXAge1xuICAgIEBhcHBseSBmbGV4LWF1dG8gZmxleCBpdGVtcy1zdGFydCBmbGV4LXdyYXAgZ2FwLTEwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 52452:
/*!*******************************************************!*\
  !*** ./apps/web/src/app/modules/about/pages/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutContentViewerComponent: () => (/* reexport safe */ _about_content_viewer_about_content_viewer_component__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent),
/* harmony export */   CommitteeComponent: () => (/* reexport safe */ _committee_committee_component__WEBPACK_IMPORTED_MODULE_1__.CommitteeComponent),
/* harmony export */   SupervisorComponent: () => (/* reexport safe */ _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_2__.SupervisorComponent)
/* harmony export */ });
/* harmony import */ var _about_content_viewer_about_content_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-content-viewer/about-content-viewer.component */ 16640);
/* harmony import */ var _committee_committee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./committee/committee.component */ 37602);
/* harmony import */ var _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supervisor/supervisor.component */ 42700);




/***/ }),

/***/ 42700:
/*!*********************************************************************************!*\
  !*** ./apps/web/src/app/modules/about/pages/supervisor/supervisor.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupervisorComponent: () => (/* binding */ SupervisorComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 18516);

// Custom packages



function SupervisorComponent_li_11_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r10, " ");
  }
}
function SupervisorComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_11_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r8.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r8.describe);
  }
}
function SupervisorComponent_li_13_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r13, " ");
  }
}
function SupervisorComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_13_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r11.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r11.describe);
  }
}
function SupervisorComponent_li_15_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r16, " ");
  }
}
function SupervisorComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_15_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r14.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r14.describe);
  }
}
function SupervisorComponent_li_17_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r19, " ");
  }
}
function SupervisorComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_17_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r17.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r17.describe);
  }
}
function SupervisorComponent_li_19_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r22, " ");
  }
}
function SupervisorComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_19_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r20.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r20.describe);
  }
}
function SupervisorComponent_li_21_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r25, " ");
  }
}
function SupervisorComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_21_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r23.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r23.describe);
  }
}
function SupervisorComponent_li_23_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r28, " ");
  }
}
function SupervisorComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_li_23_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r26.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r26.describe);
  }
}
function SupervisorComponent_ul_24_li_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r32, " ");
  }
}
function SupervisorComponent_ul_24_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SupervisorComponent_ul_24_li_1_li_8_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r30.photoUrl || "assets/image/illustration/avatar-defualt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r30.describe);
  }
}
function SupervisorComponent_ul_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SupervisorComponent_ul_24_li_1_Template, 9, 5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.alternate);
  }
}
class SupervisorComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.chairman = [{
      name: '薛博仁 教授',
      title: '理事長',
      describe: ['中國醫藥大學 副校長', '中醫大附醫檢驗醫學中心院長', '國立台灣大學醫學院附設醫院內科部主治醫師'],
      photoUrl: 'assets/image/members/chairman-01.png'
    }, {
      name: '柯文謙 教授',
      title: '常務監事',
      describe: ['國立成功大學醫學院醫學系教授', '曾任 國立成功大學醫學院附設醫院 副院長'],
      photoUrl: 'assets/image/members/standing-supervisors-01.png'
    }];
    this.standingDirectors = [{
      name: '吳俊忠 教授',
      title: '常務理事',
      describe: ['亞洲大學講座教授', '曾任亞洲大學醫學暨健康學院院長', '陽明大學生物醫學暨工程學院院長'],
      photoUrl: 'assets/image/members/standing-directors-01.png'
    }, {
      name: '張詩聖 副教授',
      title: '常務理事',
      describe: ['中國醫藥大學附設醫院人工智慧中心主任'],
      photoUrl: 'assets/image/members/standing-directors-02.png'
    }, {
      name: '郭律成 醫師',
      title: '常務理事',
      describe: ['臺大醫院內科部主治醫師', '臺大醫院醫療資訊長', '暨智慧醫療中心副主任'],
      photoUrl: 'assets/image/members/standing-directors-03.png'
    }, {
      name: '謝文祥 副部長',
      title: '常務理事',
      describe: ['義大醫療體系行政中心', '智慧醫療部 部長', '醫療品質部 副部長', '義大醫院醫學教育委員會 副主席'],
      photoUrl: 'assets/image/members/standing-directors-04.png'
    }];
    this.directors = [{
      name: '王唯堯 副教授',
      title: '理事',
      describe: ['中山醫學大學附設醫院感染科主治醫師', '中山醫學大學醫學系專任副教授'],
      photoUrl: 'assets/image/members/directors-03.png'
    }, {
      name: '余志強 副教授',
      title: '理事',
      describe: ['亞洲大學附設醫院檢驗部主任'],
      photoUrl: 'assets/image/members/directors-08.png'
    }, {
      name: '吳亞倫 工程師',
      title: '理事',
      describe: ['中國醫藥大學附設醫院人工智慧醫學診斷中心演算法工程師'],
      photoUrl: 'assets/image/members/directors-10.png'
    }, {
      name: '施宏謀 醫師',
      title: '理事',
      describe: ['中國醫藥大學附設醫院急症暨外傷中心急診部副主任', '護理部病房護理站病房主任', '急症暨外傷中心急診部主治醫師'],
      photoUrl: 'assets/image/members/directors-04.png'
    }, {
      name: '郭錦輯 教授',
      title: '理事',
      describe: ['中國醫藥大學附設醫院大數據中心副院長', '中國醫藥大學附設醫院醫學研究部副主任', '中國醫藥大學附設醫院內科部醫藥系主治醫師'],
      photoUrl: 'assets/image/members/directors-01.png'
    }, {
      name: '陳一心 醫師',
      title: '理事',
      describe: ['臺中慈濟醫院腎臟內科主任', '中興大學人工智慧與資料科學研究所助理教授'],
      photoUrl: 'assets/image/members/directors-06.png'
    }, {
      name: '游雅言 主任',
      title: '理事',
      describe: ['衛生福利部彰化醫院醫學檢驗科主任'],
      photoUrl: 'assets/image/members/directors-07.png'
    }, {
      name: '黃昱璁 醫師',
      title: '理事',
      describe: ['國立臺灣大學醫學院附設醫院檢驗醫學部主治醫師'],
      photoUrl: 'assets/image/members/directors-02.png'
    }, {
      name: '賴志政 醫師',
      title: '理事',
      describe: ['奇美醫學中心加護醫學部主治醫師'],
      photoUrl: 'assets/image/members/directors-05.png'
    }, {
      name: '賴靜憶 副主任',
      title: '理事',
      describe: ['台中榮民總醫院病理檢驗部 品保副主任', '中國醫藥大學附設醫院醫事檢驗師'],
      photoUrl: 'assets/image/members/directors-09.png'
    }];
    this.supervisors = [{
      name: '王敦仁 專員',
      title: '監事',
      describe: ['馬偕紀念醫院/總院院長辦公室/專員'],
      photoUrl: 'assets/image/members/supervisors-04.png'
    }, {
      name: '李岱芬 醫檢師',
      title: '監事',
      describe: ['國立台灣大學醫學院附設醫院醫事檢驗師'],
      photoUrl: 'assets/image/members/supervisors-02.png'
    }, {
      name: '林正修 醫師',
      title: '監事',
      describe: ['彰化基督教醫院醫師', '中國醫藥大學附設醫院 檢驗醫學部顧問主治醫師', '台中市立老人復健綜合醫院 檢驗醫學科主任'],
      photoUrl: 'assets/image/members/supervisors-01.png'
    }, {
      name: '林進福 醫檢師',
      title: '監事',
      describe: ['中國醫藥大學附設醫院醫事檢驗師'],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
      // photoUrl: 'assets/image/members/supervisors-04.png'
    }];

    this.secretaryGeneral = [{
      name: '蕭瓊子 副主任',
      title: '秘書長',
      describe: ['中國醫藥大學附設醫院檢驗醫學部副主任', '亞洲大學助理教授'],
      photoUrl: 'assets/image/members/secretary-general.png'
    }];
    this.DeputySecretaryGeneral = [{
      name: '蔡雅雯',
      title: '南區副秘書長',
      describe: ['奇美醫院院長室專員', '奇美醫院醫檢師'],
      photoUrl: 'assets/image/members/deputy-secretary-001.jpg'
    }, {
      name: '朱學緯',
      title: '北區副秘書長',
      describe: ['國立台灣大學附設醫院醫檢師'],
      photoUrl: 'assets/image/members/deputy-secretary-002.jpg'
    }, {
      name: '何文育',
      title: '中區副秘書長',
      describe: ['中國醫藥大學北港附設醫院院務秘書'],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    }];
    this.secretariat = [{
      name: '薛翔中',
      title: '秘書處',
      describe: [],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    }, {
      name: '吳慧芸',
      title: '秘書處',
      describe: [],
      photoUrl: 'assets/image/illustration/avatar-defualt-female.svg'
    }];
    this.alternate = [{
      name: '陳嘉文',
      title: '監事備 1',
      describe: ['衛生福利部豐原醫院醫事檢驗科主任'],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    }, {
      name: '何文育',
      title: '理事備 2',
      describe: ['中國醫藥大學北港附設醫院院務秘書'],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    }, {
      name: '張煜昌',
      title: '理事備 3',
      describe: ['中國醫藥大學附設醫院醫事檢驗師'],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    }, {
      name: '蔡雅雯',
      title: '理事備 4',
      describe: ['奇美醫院專員'],
      photoUrl: 'assets/image/illustration/avatar-defualt-female.svg'
    }, {
      name: '鄭敏琳',
      title: '理事備 5',
      describe: ['長安醫院檢驗科科主任'],
      photoUrl: 'assets/image/illustration/avatar-defualt-female.svg'
    }];
  }
  ngOnInit() {
    console.log('supervisor component init');
  }
  static {
    this.ɵfac = function SupervisorComponent_Factory(t) {
      return new (t || SupervisorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SupervisorComponent,
      selectors: [["web-supervisor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 8,
      consts: [[1, "max-w-container"], [1, "display", "d-black"], [1, "headline"], [1, "label"], [1, "py-16", "space-y-16"], [1, "chairman-wrap"], ["class", "member-item", 4, "ngFor", "ngForOf"], [1, "directors-row-wrap", "grid-cols-2"], [1, "directors-col-wrap", "grid-cols-2", "lg:grid-cols-4"], [1, "directors-col-wrap", "grid-cols-2", "lg:grid-cols-5"], ["class", "member-item ", 4, "ngFor", "ngForOf"], [1, "directors-col-wrap", "grid-cols-2", "lg:grid-cols-3"], [1, "directors-row-wrap", "grid-cols-2", "lg:grid-cols-3"], ["class", "directors-row-wrap grid-cols-2 lg:grid-cols-3", 4, "ngIf"], [1, "member-item"], [3, "src", "alt"], [1, "member-info"], [1, "member-title"], [1, "member-name"], [1, "member-describe"], [4, "ngFor", "ngForOf"]],
      template: function SupervisorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h2")(3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Board Members");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u7406\u76E3\u4E8B\u6210\u54E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u4EFB\u671F\u671F\u9593 114 \u5E74 3 \u6708 29 \u65E5\u81F3 117 \u5E74 3 \u6708 28 \u65E5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 4)(10, "ol", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SupervisorComponent_li_11_Template, 9, 5, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SupervisorComponent_li_13_Template, 9, 5, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SupervisorComponent_li_15_Template, 9, 5, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SupervisorComponent_li_17_Template, 9, 5, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ol", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SupervisorComponent_li_19_Template, 9, 5, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SupervisorComponent_li_21_Template, 9, 5, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SupervisorComponent_li_23_Template, 9, 5, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SupervisorComponent_ul_24_Template, 2, 1, "ul", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chairman);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.standingDirectors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.supervisors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.directors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.secretaryGeneral);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.DeputySecretaryGeneral);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.secretariat);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".member-item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start\n}\n.member-item[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse))\n}\n.member-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    border-radius: 0.25rem;\n    background-color: rgb(3 105 161 / 0.3);\n    object-fit: cover;\n    object-position: top\n}\n.member-item[_ngcontent-%COMP%]   .member-title[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n.member-item[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    font-weight: 200\n}\n@media (min-width: 1024px) {\n    .member-item[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n        font-size: 1.875rem\n    }\n}\n.member-item[_ngcontent-%COMP%]   .member-describe[_ngcontent-%COMP%] {\n    margin-top: 1.25rem\n}\n.member-item[_ngcontent-%COMP%]   .member-describe[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse))\n}\n.member-item[_ngcontent-%COMP%]   .member-describe[_ngcontent-%COMP%] {\n    font-size: 1rem\n}\n\n.chairman-wrap[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse))\n}\n@media (min-width: 768px) {\n    .chairman-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\n        flex-direction: row\n    }\n    .chairman-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n        --tw-space-x-reverse: 0;\n        margin-right: calc(2.5rem * var(--tw-space-x-reverse));\n        margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)))\n    }\n}\n@media (min-width: 1024px) {\n    .chairman-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\n        align-items: flex-end\n    }\n    .chairman-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n        --tw-space-x-reverse: 0;\n        margin-right: calc(4rem * var(--tw-space-x-reverse));\n        margin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)))\n    }\n}\n@media (min-width: 768px) {\n    .chairman-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n        width: 33.333333%\n    }\n}\n.chairman-wrap[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\n    flex: 1 1 auto\n}\n@media (min-width: 768px) {\n    .chairman-wrap[_ngcontent-%COMP%]   .member-describe[_ngcontent-%COMP%] {\n        margin-top: 2.5rem\n    }\n}\n.chairman-wrap[_ngcontent-%COMP%]   .member-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem\n}\n.chairman-wrap[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n    font-size: 3rem\n}\n\n.directors-row-wrap[_ngcontent-%COMP%] {\n    display: grid;\n    align-items: flex-start;\n    gap: 1.25rem\n}\n\n@media (min-width: 1024px) {\n    .directors-row-wrap[_ngcontent-%COMP%] {\n        gap: 4rem\n    }\n}\n@media (min-width: 768px) {\n    .directors-row-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\n        flex-direction: row\n    }\n    .directors-row-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n        --tw-space-x-reverse: 0;\n        margin-right: calc(1.25rem * var(--tw-space-x-reverse));\n        margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))\n    }\n    .directors-row-wrap[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n        width: 50%\n    }\n}\n\n.directors-col-wrap[_ngcontent-%COMP%] {\n    display: grid;\n    align-items: flex-start;\n    gap: 1rem\n}\n\n@media (min-width: 1024px) {\n    .directors-col-wrap[_ngcontent-%COMP%] {\n        gap: 2.5rem\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hYm91dC9wYWdlcy9zdXBlcnZpc29yL3N1cGVydmlzb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxhQUFBO0lBQUEsc0JBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQSx1QkFBQTtJQUFBLDREQUFBO0lBQUE7QUFBQTtBQUdJO0lBQUEsbUJBQUE7SUFBQSxXQUFBO0lBQUEsc0JBQUE7SUFBQSxzQ0FBQTtJQUFBLGlCQUFBO0lBQUE7QUFBQTtBQUlBO0lBQUE7QUFBQTtBQUlBO0lBQUEsa0JBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQTtRQUFBO0lBQUE7QUFBQTtBQUlBO0lBQUE7QUFBQTtBQUFBO0lBQUEsdUJBQUE7SUFBQSw4REFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUE7O0FBTUo7SUFBQSx1QkFBQTtJQUFBLDhEQUFBO0lBQUE7QUFBQTtBQUdJO0lBQUE7UUFBQTtJQUFBO0lBQUE7UUFBQSx1QkFBQTtRQUFBLHNEQUFBO1FBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQTtRQUFBO0lBQUE7SUFBQTtRQUFBLHVCQUFBO1FBQUEsb0RBQUE7UUFBQTtJQUFBO0FBQUE7QUFJQTtJQUFBO1FBQUE7SUFBQTtBQUFBO0FBSUE7SUFBQTtBQUFBO0FBSUE7SUFBQTtRQUFBO0lBQUE7QUFBQTtBQUlBO0lBQUE7QUFBQTtBQUlBO0lBQUE7QUFBQTs7QUFLSjtJQUFBLGFBQUE7SUFBQSx1QkFBQTtJQUFBO0FBQUE7O0FBQUE7SUFBQTtRQUFBO0lBQUE7QUFBQTtBQUdJO0lBQUE7UUFBQTtJQUFBO0lBQUE7UUFBQSx1QkFBQTtRQUFBLHVEQUFBO1FBQUE7SUFBQTtJQUlBO1FBQUE7SUFBQTtBQUpBOztBQVNKO0lBQUEsYUFBQTtJQUFBLHVCQUFBO0lBQUE7QUFBQTs7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlci1pdGVtIHtcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBzcGFjZS15LTQ7XG5cbiAgICA+IGltZyB7XG4gICAgICAgIEBhcHBseSBiZy1za3ktNzAwLzMwIHctZnVsbCByb3VuZGVkIG9iamVjdC1jb3ZlciBvYmplY3QtdG9wIGFzcGVjdC1zcXVhcmU7XG4gICAgfVxuXG4gICAgLm1lbWJlci10aXRsZSB7XG4gICAgICAgIEBhcHBseSBmb250LWJvbGQ7XG4gICAgfVxuXG4gICAgLm1lbWJlci1uYW1lIHtcbiAgICAgICAgQGFwcGx5IHRleHQteGwgZm9udC1leHRyYWxpZ2h0IGxnOnRleHQtM3hsO1xuICAgIH1cblxuICAgIC5tZW1iZXItZGVzY3JpYmUge1xuICAgICAgICBAYXBwbHkgdGV4dC1iYXNlIHNwYWNlLXktMiBtdC01O1xuICAgIH1cbn1cblxuXG4uY2hhaXJtYW4td3JhcCB7XG4gICAgQGFwcGx5IHNwYWNlLXktMTA7XG5cbiAgICAubWVtYmVyLWl0ZW0ge1xuICAgICAgICBAYXBwbHkgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC0xMCBsZzppdGVtcy1lbmQgbGc6c3BhY2UteC0xNjtcbiAgICB9XG5cbiAgICAubWVtYmVyLWl0ZW0gPiBpbWcge1xuICAgICAgICBAYXBwbHkgbWQ6dy0xLzM7XG4gICAgfVxuXG4gICAgLm1lbWJlci1pbmZvIHtcbiAgICAgICAgQGFwcGx5IGZsZXgtYXV0bztcbiAgICB9XG5cbiAgICAubWVtYmVyLWRlc2NyaWJlIHtcbiAgICAgICAgQGFwcGx5IG1kOm10LTEwO1xuICAgIH1cblxuICAgIC5tZW1iZXItdGl0bGUge1xuICAgICAgICBAYXBwbHkgdGV4dC0yeGw7XG4gICAgfVxuXG4gICAgLm1lbWJlci1uYW1lIHtcbiAgICAgICAgQGFwcGx5IHRleHQtNXhsO1xuICAgIH1cbn1cblxuLmRpcmVjdG9ycy1yb3ctd3JhcCB7XG4gICAgQGFwcGx5IGdyaWQgZ2FwLTUgbGc6Z2FwLTE2IGl0ZW1zLXN0YXJ0O1xuXG4gICAgLm1lbWJlci1pdGVtIHtcbiAgICAgICAgQGFwcGx5IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNTtcbiAgICB9XG5cbiAgICAubWVtYmVyLWl0ZW0gPiBpbWcge1xuICAgICAgICBAYXBwbHkgbWQ6dy0xLzI7XG4gICAgfVxufVxuXG4uZGlyZWN0b3JzLWNvbC13cmFwIHtcbiAgICBAYXBwbHkgZ3JpZCBnYXAtNCBsZzpnYXAtMTAgaXRlbXMtc3RhcnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

};
;
//# sourceMappingURL=662.js.map