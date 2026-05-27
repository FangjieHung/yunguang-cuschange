"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_result_result_module_ts"],{

/***/ 86146:
/*!******************************************************************!*\
  !*** ./apps/web/src/app/modules/result/result-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultRoutingModule: () => (/* binding */ ResultRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 50706);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 21605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages



const routes = [{
  path: 'error',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.ResultErrorComponent,
  data: {
    title: `404｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: `404 找不到頁面`,
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/result/error`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}, {
  path: 'payment-redirect',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.PaymentRedirectComponent,
  data: {
    title: `前往付款｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: `前往付款轉導頁面`
  }
}, {
  path: 'payment-result/:orderType/:resultCode/:resultMsg',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.PaymentResultComponent,
  data: {
    title: `付款結果｜${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    decscription: `完成付款頁面`
  }
}];
class ResultRoutingModule {
  static {
    this.ɵfac = function ResultRoutingModule_Factory(t) {
      return new (t || ResultRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ResultRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResultRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 77803:
/*!**********************************************************!*\
  !*** ./apps/web/src/app/modules/result/result.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultModule: () => (/* binding */ ResultModule),
/* harmony export */   playerFact: () => (/* binding */ playerFact)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-routing.module */ 86146);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lottie */ 27453);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 21605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);


// Third party packages

// Custom packages




function playerFact() {
  return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 54007, 23));
}
// Config settings
const THIRD_MODULES = [ngx_lottie__WEBPACK_IMPORTED_MODULE_3__.LottieModule.forRoot({
  player: playerFact
})];
const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.PaymentRedirectComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.PaymentResultComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.ResultErrorComponent];
class ResultModule {
  static {
    this.ɵfac = function ResultModule_Factory(t) {
      return new (t || ResultModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ResultModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultRoutingModule, THIRD_MODULES, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ResultModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.PaymentRedirectComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.PaymentResultComponent, _pages__WEBPACK_IMPORTED_MODULE_2__.ResultErrorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultRoutingModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_3__.LottieModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_result_result_module_ts.js.map