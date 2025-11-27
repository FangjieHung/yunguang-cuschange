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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 52452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);




const routes = [{
  path: 'charter',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent
}, {
  path: 'privacy',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent
}, {
  path: 'terms',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent
}];
class AboutRoutingModule {
  static {
    this.ɵfac = function AboutRoutingModule_Factory(t) {
      return new (t || AboutRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.AboutContentViewerComponent],
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

/***/ 52452:
/*!*******************************************************!*\
  !*** ./apps/web/src/app/modules/about/pages/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutContentViewerComponent: () => (/* reexport safe */ _about_content_viewer_about_content_viewer_component__WEBPACK_IMPORTED_MODULE_0__.AboutContentViewerComponent)
/* harmony export */ });
/* harmony import */ var _about_content_viewer_about_content_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-content-viewer/about-content-viewer.component */ 16640);


/***/ })

};
;
//# sourceMappingURL=662.js.map