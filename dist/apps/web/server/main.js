/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 44339:
/*!****************************!*\
  !*** ./apps/web/server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_7__.AppServerModule),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 41095);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone-node */ 83301);
/* harmony import */ var zone_js_dist_zone_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nguniversal/express-engine */ 5598);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ 38569);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ 79896);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ 16928);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/environments/environment */ 88207);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/main.server */ 2485);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-server */ 56228);

// ... 其他 SSR 程式碼 ...








// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_3__();
  const distFolder = (0,path__WEBPACK_IMPORTED_MODULE_5__.join)(process.cwd(), _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production ? 'dist' : 'dist/apps/web/browser');
  const indexHtml = (0,fs__WEBPACK_IMPORTED_MODULE_4__.existsSync)((0,path__WEBPACK_IMPORTED_MODULE_5__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_2__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_7__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_3__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 80;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 781:
/*!************************************************!*\
  !*** ./apps/web/src/app/app-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_layout */ 23349);
/* harmony import */ var _modules_result_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/result/pages */ 1616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages




const routes = [
// {
//   path: '',
//   pathMatch: 'full'
// },
{
  path: '',
  children: [{
    path: '',
    component: _modules_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultContainerComponent,
    // canActivate: [AppAuthGuard],
    children: [{
      path: '',
      title: '首頁',
      loadChildren: () => __webpack_require__.e(/*! import() */ 590).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 9590)).then(m => m.HomeModule)
    }, {
      path: 'about',
      title: '關於',
      loadChildren: () => __webpack_require__.e(/*! import() */ 662).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about/about.module */ 19662)).then(m => m.AboutModule)
    }, {
      path: 'auth',
      title: '帳號',
      loadChildren: () => __webpack_require__.e(/*! import() */ 352).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 27352)).then(m => m.AuthModule)
    }, {
      path: 'account',
      loadChildren: () => __webpack_require__.e(/*! import() */ 838).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/account/account.module */ 38838)).then(m => m.AccountModule)
    }, {
      path: 'news',
      title: '最新消息',
      loadChildren: () => __webpack_require__.e(/*! import() */ 278).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/news/news.module */ 52278)).then(m => m.NewsModule)
    }, {
      path: 'campaign',
      loadChildren: () => __webpack_require__.e(/*! import() */ 356).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/campaign/campaign.module */ 65356)).then(m => m.CampaignModule)
    }, {
      path: 'result',
      title: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ 346).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/result/result.module */ 93346)).then(m => m.ResultModule)
    }, {
      path: '**',
      component: _modules_result_pages__WEBPACK_IMPORTED_MODULE_1__.ResultErrorComponent,
      title: '錯誤'
    }]
  }]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
        initialNavigation: 'enabledBlocking',
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        onSameUrlNavigation: 'reload'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 19249:
/*!*******************************************!*\
  !*** ./apps/web/src/app/app.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 23225);



class AppComponent {
  constructor() {
    //
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 1,
      consts: [["bdColor", "rgba(0, 0, 0, 0.6)", 3, "fullScreen"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "ngx-spinner", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 87188:
/*!****************************************!*\
  !*** ./apps/web/src/app/app.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   playerFact: () => (/* binding */ playerFact)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 15596);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 19249);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 781);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 33443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 98819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 88207);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ 22971);
/* harmony import */ var _core_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/+states */ 98578);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);








// Third party packages

// Custom packages




function playerFact() {
  return __webpack_require__.e(/*! import() */ 429).then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 78429, 23));
}
const THIRD_MODULES = [ngx_lottie__WEBPACK_IMPORTED_MODULE_5__.LottieModule.forRoot({
  player: playerFact
})];
const CUSTOM_MODULES = [_core_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _core_states__WEBPACK_IMPORTED_MODULE_3__.StatesModule];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [_core_shared__WEBPACK_IMPORTED_MODULE_4__.AppEnvHelper.getValueProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment), {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _core_shared__WEBPACK_IMPORTED_MODULE_4__.HttpRequestInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _core_shared__WEBPACK_IMPORTED_MODULE_4__.HttpResponseInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _core_shared__WEBPACK_IMPORTED_MODULE_4__.JWTAuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, THIRD_MODULES, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_5__.LottieModule, _core_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _core_states__WEBPACK_IMPORTED_MODULE_3__.StatesModule]
  });
})();

/***/ }),

/***/ 93469:
/*!***********************************************!*\
  !*** ./apps/web/src/app/app.server.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 56228);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 87188);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 19249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);




class AppServerModule {
  static {
    this.ɵfac = function AppServerModule_Factory(t) {
      return new (t || AppServerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppServerModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 23349:
/*!***************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent),
/* harmony export */   LayoutModule: () => (/* reexport safe */ _layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule)
/* harmony export */ });
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.module */ 59545);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 26202);



/***/ }),

/***/ 59545:
/*!***********************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/layout.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 53896);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 26202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);


// Custom packages



const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent, _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent];
class LayoutModule {
  static {
    this.ɵfac = function LayoutModule_Factory(t) {
      return new (t || LayoutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent, _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 38576:
/*!*************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* binding */ DefaultContainerComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 54161);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 82583);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 46956);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages









const _c0 = ["snav"];
const _c1 = ["logoImg"];
function DefaultContainerComponent_ng_container_7_div_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_ng_container_7_div_1_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.closeNavbarMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r12.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r12.label, " ");
  }
}
function DefaultContainerComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_ng_container_7_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.toggleNavbarMenu(menu_r7.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 27)(4, "web-glass-bg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DefaultContainerComponent_ng_container_7_div_1_a_5_Template, 2, 2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r8.activeMenu === menu_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menu_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r8.activeMenu === menu_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", menu_r7.children);
  }
}
function DefaultContainerComponent_ng_container_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", menu_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", menu_r7.label, " ");
  }
}
function DefaultContainerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DefaultContainerComponent_ng_container_7_div_1_Template, 6, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DefaultContainerComponent_ng_container_7_ng_template_2_Template, 2, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menu_r7.children)("ngIfElse", _r9);
  }
}
function DefaultContainerComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u8A3B\u518A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u767B\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DefaultContainerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 25)(2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.toggleSingleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_div_11_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.closeNavbarMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "web-glass-bg", 8)(7, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u5E33\u865F\u8A2D\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_div_11_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.appAuthApiServ.signout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u767B\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r3.isMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](((ctx_r3.currUserInfo == null ? null : ctx_r3.currUserInfo.name) || "-").charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r3.isMenuOpen);
  }
}
function DefaultContainerComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DefaultContainerComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "menu_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class DefaultContainerComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.currentUrl = '';
    this.activeMenu = null;
    this.isMenuOpen = false;
    this.navList = [{
      label: '關於本會',
      children: [{
        label: '組織章程',
        link: '/about/charter'
      }, {
        label: '理監事名單',
        link: '/about/supervisor'
      }]
    }, {
      label: '最新消息',
      link: '/news/list'
    }, {
      label: '學術活動',
      link: '/campaign/list'
    }];
  }
  ngOnInit() {
    if (this.appAuthApiServ.hasAccessToken) {
      this.storeServ.getCurrAuthUserCache();
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    const clickedInsideMenu = target.closest('.menu-wrap');
    if (!clickedInsideMenu) {
      this.activeMenu = null;
    }
  }
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const logo = this.logoRef.nativeElement;
    if (scrollY > 50) {
      logo.classList.add('img-shrink');
    } else {
      logo.classList.remove('img-shrink');
    }
  }
  toggleSideMenu() {
    this.snav.toggle();
  }
  toggleNavbarMenu(label) {
    this.activeMenu = this.activeMenu === label ? null : label;
  }
  closeNavbarMenu() {
    this.activeMenu = null;
  }
  toggleSingleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  static {
    this.ɵfac = function DefaultContainerComponent_Factory(t) {
      return new (t || DefaultContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DefaultContainerComponent,
      selectors: [["web-default-container"]],
      viewQuery: function DefaultContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.snav = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.logoRef = _t.first);
        }
      },
      hostBindings: function DefaultContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"])("scroll", function DefaultContainerComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 28,
      vars: 5,
      consts: [[1, "nav-bar"], ["routerLink", "/"], ["id", "logoImg", "src", "assets/image/logo/mark.png", "alt", "logo"], ["logoImg", ""], [1, "ml-auto", "mt-3", "flex", "items-center", "space-x-4"], [1, "container-hover", "hidden", "lg:block"], [1, "flex", "items-center"], [4, "ngFor", "ngForOf"], [1, "container-hover"], [1, "flex", "items-center", "px-1", "space-x-2"], ["class", "items-center hidden lg:flex", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "lg:hidden"], ["mat-button", "", 1, "h-14", 3, "click"], ["class", "material-symbols-rounded", 4, "ngIf"], ["mode", "over", "position", "end"], ["snav", ""], [1, "sidenav-list"], ["mat-list-item", "", "routerLink", "/", 1, "focused"], [1, "floating-bg"], ["src", "/assets/image/illustration/sphere-001.webp", "alt", "", 1, "sphere-01"], ["src", "/assets/image/illustration/sphere-002.webp", "alt", "", 1, "sphere-02"], [1, "main-container"], ["class", "menu-wrap", 4, "ngIf", "ngIfElse"], ["singleLink", ""], [1, "menu-wrap"], ["mat-button", "", 1, "nav-link", 3, "click"], [1, "menu-list"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], ["mat-button", "", 1, "nav-link", 3, "routerLink"], [1, "items-center", "hidden", "lg:flex"], ["mat-button", "", "routerLink", "/auth/signup", 1, "nav-link"], ["mat-button", "", "routerLink", "/auth/signin", 1, "nav-link"], [1, "avatar-btn", "nav-links", 3, "click"], [1, "user"], [1, "menu-list", 3, "click"], ["routerLink", "/account/profile"], [3, "click"], [1, "material-symbols-rounded"]],
      template: function DefaultContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "web-glass-bg", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DefaultContainerComponent_ng_container_7_Template, 4, 2, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "web-glass-bg", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DefaultContainerComponent_div_10_Template, 7, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DefaultContainerComponent_div_11_Template, 11, 5, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultContainerComponent_Template_button_click_13_listener() {
            return ctx.toggleSideMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DefaultContainerComponent_span_14_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DefaultContainerComponent_span_15_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-sidenav-container")(17, "mat-sidenav", 15, 16)(19, "mat-nav-list", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-sidenav-content")(22, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 20)(24, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "web-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.navList);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isSignin);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSignin);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(_r6 == null ? null : _r6.opened));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6 == null ? null : _r6.opened);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem\n}\n.nav-link[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  font-size: 1.25rem\n}\n\n[id=logoImg][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 8rem;\n  padding: 0.75rem;\n  transition-property: all;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n\n@media (min-width: 321px) {\n\n  [id=logoImg][_ngcontent-%COMP%] {\n    width: 10rem\n  }\n}\n\n@media (min-width: 1920px) {\n\n  [id=logoImg][_ngcontent-%COMP%] {\n    width: 12rem\n  }\n}\n[id=logoImg].img-shrink[_ngcontent-%COMP%] {\n  width: 5rem;\n  padding: 0px\n}\n\n.avatar-btn[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  align-items: center\n}\n.avatar-btn[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  height: 2.25rem;\n  width: 2.25rem;\n  min-width: 2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(186 230 253 / var(--tw-bg-opacity, 1));\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(2 132 199 / var(--tw-text-opacity, 1));\n  font-size: 0.875rem\n}\n\n.main-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  flex: 1 1 0%;\n  overflow-y: auto\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n  min-width: 15rem\n}\n\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto\n}\n\n.menu-button[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  opacity: 1;\n  transition: all 0.3s ease\n}\n.menu-button[_ngcontent-%COMP%]   .material-symbols-rounded.hide[_ngcontent-%COMP%] {\n  width: 0px;\n  opacity: 0\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9fbGF5b3V0L3BhZ2VzL2RlZmF1bHQtY29udGFpbmVyL2RlZmF1bHQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQUEsZUFBQTtFQUFBLFdBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHVCQUFBO0VBQUEsOEJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsYUFBQTtFQUFBLG1CQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBO0FBR0k7RUFBQTtBQUFBOztBQUtKO0VBQUEsa0JBQUE7RUFBQSxXQUFBO0VBQUEsZ0JBQUE7RUFBQSx3QkFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUdJO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBS0o7RUFBQSxhQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFHSTtFQUFBLGFBQUE7RUFBQSxlQUFBO0VBQUEsY0FBQTtFQUFBLGVBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsc0JBQUE7RUFBQSxrQkFBQTtFQUFBLDREQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLGlEQUFBO0VBQ0E7QUFEQTs7QUFNSjtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFlBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsa0JBQUE7RUFBQSw0REFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxzQkFBQTtFQUFBLDhCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsVUFBQTtFQUNBO0FBREE7QUFJSTtFQUFBLFVBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xuICAgIEBhcHBseSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTQgdy1mdWxsIGZpeGVkIHotMTA7XG59XG5cbi5uYXYtbGluayB7XG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiByb3VuZGVkLWZ1bGw7XG5cbiAgICAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICAgICAgQGFwcGx5IHRleHQteGw7XG4gICAgfVxufVxuXG5baWQ9XCJsb2dvSW1nXCJdIHtcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwIGFic29sdXRlIHAtMyB3LTMyIHhzOnctNDAgNHhsOnctNDg7XG5cbiAgICAmLmltZy1zaHJpbmsge1xuICAgICAgICBAYXBwbHkgdy0yMCBwLTA7XG4gICAgfVxufVxuXG4uYXZhdGFyLWJ0biB7XG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIG1pbi13LWZpdDtcblxuICAgIC51c2VyIHtcbiAgICAgICAgQGFwcGx5IHJvdW5kZWQteGwgbWluLXctOCB3LTkgaC05IGJnLXNreS0yMDAgdGV4dC1za3ktNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgQGFwcGx5IGZsZXgtMSBoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvIHJlbGF0aXZlO1xufVxuXG4ubWF0LXNpZGVuYXYge1xuICAgIEBhcHBseSBiZy1zdG9uZS01MDtcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xufVxuXG4ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgIEBhcHBseSBzaGFkb3ctbm9uZTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBAYXBwbHkgZmxleC1hdXRvO1xufVxuXG4ubWVudS1idXR0b24gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgQGFwcGx5IG9wYWNpdHktMTAwIHctNjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJi5oaWRlIHtcbiAgICAgICAgQGFwcGx5IG9wYWNpdHktMCB3LTA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 46956:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/footer/footer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ary-find-value.pipe */ 19276);

// Custom packages







function FooterComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const phone_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](phone_r9);
  }
}
function FooterComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fax_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](fax_r10);
  }
}
function FooterComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "opening hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opening_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](opening_r11);
  }
}
function FooterComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mail_r12);
  }
}
function FooterComponent_li_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const enAddr_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", enAddr_r15, " ");
  }
}
const _c0 = function () {
  return [];
};
function FooterComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p")(4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FooterComponent_li_14_span_6_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "aryFindValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chtAddr_r13 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](chtAddr_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](7, 2, "LOCATION(\u82F1\u6587\u5730\u5740)", (ctx_r4.response == null ? null : ctx_r4.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0), "name", "value"));
  }
}
function FooterComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fbUrl_r16 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", fbUrl_r16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const igUrl_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", igUrl_r17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_a_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ytUrl_r18 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", ytUrl_r18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u672C\u7DB2\u7AD9\u63A1\u7528\u85CD\u65B0\u91D1\u6D41\uFF0C\u63D0\u4F9B\u60A8\u5B89\u5168\u3001\u4FBF\u5229\u7684\u4EA4\u6613\u74B0\u5883\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class FooterComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._appStoreApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppStoreApiServ);
    this.currYear = new Date().getFullYear();
    this.response = null;
  }
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    this._appStoreApiServ.getAppObjectStoreValueByCode(_core_models__WEBPACK_IMPORTED_MODULE_1__.AppObjectStoreCodes.學會聯絡方式設定檔).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.response = res;
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    });
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["web-footer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 58,
      consts: [["src", "assets/image/logo/mark-white.png", "alt", "logo", 1, "w-36", "h-36", "object-contain", "mr-10", "mb-4"], [1, "web-map"], [1, "flex", "flex-wrap"], [4, "ngIf"], [1, "social-links"], ["target", "_blank", "rel", "noopener noreferrer", 4, "ngIf"], ["target", "_blank", 4, "ngIf"], [1, "copy-right"], [1, "pr-1"], ["routerLink", "/about/terms"], ["routerLink", "/about/privacy"], [1, "label"], [1, "inline-block"], ["class", "inline-block text-sm", 4, "ngIf"], [1, "inline-block", "text-sm"], ["target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/image/icon/fb.webp", "alt", "facebook"], ["target", "_blank"], ["src", "assets/image/icon/ig.webp", "alt", "instagram"], ["src", "assets/image/icon/yt.webp", "alt", "youtube"], ["src", "assets/image/logo/newebpay.png", "alt", "logo", 1, "w-60", "h-auto", "mb-2"], [1, "opacity-60", "tracking-wider", "-ml-1"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 1)(3, "div", 2)(4, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FooterComponent_li_5_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FooterComponent_li_7_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FooterComponent_li_9_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FooterComponent_li_12_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FooterComponent_li_14_Template, 8, 8, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FooterComponent_a_17_Template, 2, 1, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FooterComponent_a_19_Template, 2, 1, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FooterComponent_a_21_Template, 2, 1, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "section", 7)(24, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u53F0\u7063\u9577\u671F\u7167\u9867\u611F\u67D3\u9810\u9632\u66A8\u63A7\u5236\u5B78\u6703 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p")(29, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u670D\u52D9\u689D\u6B3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\uFF0E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u96B1\u79C1\u6B0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, FooterComponent_div_34_Template, 4, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](6, 10, "PHONE", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](8, 15, "FAX", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](51, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](10, 20, "OPENING HOURS", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](52, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](13, 25, "MAIL", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](53, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](15, 30, "LOCATION(\u4E2D\u6587\u5730\u5740)", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](54, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](18, 35, "Facebook", (ctx.response == null ? null : ctx.response.socialMedia) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](55, _c0), "name", "url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](20, 40, "Instagram", (ctx.response == null ? null : ctx.response.socialMedia) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](56, _c0), "name", "url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](22, 45, "Youtube", (ctx.response == null ? null : ctx.response.socialMedia) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](57, _c0), "name", "url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currYear, " All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _libs_core_src_lib_shared_pipes_ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_3__.AryFindValuePipe],
      styles: ["footer[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}@media (min-width: 1024px) {footer[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}footer[_ngcontent-%COMP%] {\n  background-color: var(--md-sys-color-on-sky-fixed-variant);\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 300;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.logo-col[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-direction: column;\n  padding: 1.25rem;\n  background-color: var(--md-sys-color-surface-dim);\n}\n\n.copy-right[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  border-top-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n  padding-top: 1.5rem;\n  opacity: 0.4;\n}\n\n@media (min-width: 1024px) {.copy-right[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n.web-map[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.web-map[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.web-map[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n@media (min-width: 1024px) {.web-map[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-right: 3rem;\n    margin-bottom: 3rem;\n  }\n}\n.web-map[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.web-map[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.web-map[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  opacity: 0.6;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-left: auto;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n.social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  padding: 0.5rem;\n  transition-property: all;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(125 211 252 / 0.1);\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 2rem;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9fbGF5b3V0L3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxrQkFBQTtFQUFBLGFBQUE7RUFBQSxzQkFBQTtFQUFBLGVBQUE7RUFBQSxlQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBLENBQUEsNEJBQUE7SUFBQTtFQUFBO0FBQUEsQ0FESjtFQUVJLDBEQUFBO0FBQ0o7QUFHUTs7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLSjtFQUFBLGFBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQUEsc0JBQUE7RUFBQSxnQkFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHNCQUFBO0VBQUEscUJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBLDRCQUFBO0lBQUEsbUJBQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBO0FBR0k7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLHVCQUFBO0VBQUEsNERBQUE7RUFBQTtBQUFBO0FBQUEsNEJBQUE7SUFBQSxrQkFBQTtJQUFBO0VBQUE7QUFBQTtBQUlBO0VBQUE7QUFBQTtBQUFBO0VBQUEsdUJBQUE7RUFBQSwrREFBQTtFQUFBO0FBQUE7QUFJQTtFQUFBLHlCQUFBO0VBQUE7QUFBQTs7QUFLSjtFQUFBLGdCQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLGFBQUE7RUFBQTtBQUFBO0FBR0k7RUFBQSxxQkFBQTtFQUFBLGVBQUE7RUFBQSx3QkFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUlBO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBAYXBwbHkgdGV4dC13aGl0ZSByZWxhdGl2ZSBwLTYgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgbGc6ZmxleC1yb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtc3lzLWNvbG9yLW9uLXNreS1maXhlZC12YXJpYW50KTtcblxuICAgIHAsXG4gICAgbGkge1xuICAgICAgICBAYXBwbHkgdGV4dC13aGl0ZSBmb250LWxpZ2h0O1xuICAgIH1cbn1cblxuLmxvZ28tY29sIHtcbiAgICBAYXBwbHkgbWF4LXctZml0IHAtNSBmbGV4IGZsZXgtY29sO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kLXN5cy1jb2xvci1zdXJmYWNlLWRpbSk7XG59XG5cbi5jb3B5LXJpZ2h0IHtcbiAgICBAYXBwbHkgdy1mdWxsIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6anVzdGlmeS1iZXR3ZWVuIHB0LTYgYm9yZGVyLXQgYm9yZGVyLXdoaXRlIG9wYWNpdHktNDA7XG59XG5cbi53ZWItbWFwIHtcbiAgICBAYXBwbHkgZmxleC1hdXRvO1xuXG4gICAgdWwge1xuICAgICAgICBAYXBwbHkgc3BhY2UteS00IG1yLTYgbWItNiBsZzptci0xMiBsZzptYi0xMjtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIEBhcHBseSBzcGFjZS15LTEgbWF4LXctbWQ7XG4gICAgfVxuXG4gICAgbGkgLmxhYmVsIHtcbiAgICAgICAgQGFwcGx5IHVwcGVyY2FzZSBvcGFjaXR5LTYwO1xuICAgIH1cbn1cblxuLnNvY2lhbC1saW5rcyB7XG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIG10LWF1dG8gbWwtYXV0byBtYi00O1xuXG4gICAgPiBhIHtcbiAgICAgICAgQGFwcGx5IHAtMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgaG92ZXI6Ymctc2t5LTMwMC8xMDtcbiAgICB9XG5cbiAgICBhID4gaW1nIHtcbiAgICAgICAgQGFwcGx5IHctOCBoLTggb2JqZWN0LWNvbnRhaW47XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 26202:
/*!*********************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* reexport safe */ _default_container_default_container_component__WEBPACK_IMPORTED_MODULE_0__.DefaultContainerComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent)
/* harmony export */ });
/* harmony import */ var _default_container_default_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-container/default-container.component */ 38576);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 46956);



/***/ }),

/***/ 1616:
/*!********************************************************!*\
  !*** ./apps/web/src/app/modules/result/pages/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultErrorComponent: () => (/* reexport safe */ _result_error_result_error_component__WEBPACK_IMPORTED_MODULE_0__.ResultErrorComponent)
/* harmony export */ });
/* harmony import */ var _result_error_result_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-error/result-error.component */ 55500);


/***/ }),

/***/ 55500:
/*!**************************************************************************************!*\
  !*** ./apps/web/src/app/modules/result/pages/result-error/result-error.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultErrorComponent: () => (/* binding */ ResultErrorComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 45536);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 5982);

// Custom packages





class ResultErrorComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  ngOnInit() {
    console.log('init');
  }
  static {
    this.ɵfac = function ResultErrorComponent_Factory(t) {
      return new (t || ResultErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResultErrorComponent,
      selectors: [["app-result-error"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 0,
      consts: [[1, "max-w-4xl", "mx-auto", "text-center", "my-10", "lg:flex", "items-center", "justify-center", "lg:text-left"], ["src", "assets/image/illustration/404.svg", "alt", "\u627E\u4E0D\u5230\u9801\u9762", 1, "w-full", "max-w-lg"], [1, "w-full", "max-w-xl", "mx-auto", "p-4"], [1, "text-3xl", "font-black"], [1, "text-base", "mt-5"], ["nz-button", "", "nzType", "default", "nzSize", "large", "routerLink", "/", 1, "mx-auto", "mt-5"]],
      template: function ResultErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u627E\u4E0D\u5230\u6B64\u9801\u9762");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u53EF\u80FD\u7DB2\u5740\u932F\u8AA4\u6216\u662F\u5DF2\u88AB\u522A\u9664");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u56DE\u9996\u9801");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 57002:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/glass-bg/glass-bg.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlassBgComponent: () => (/* binding */ GlassBgComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages


const _c0 = ["*"];
class GlassBgComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  ngOnInit() {
    console.log('init');
  }
  static {
    this.ɵfac = function GlassBgComponent_Factory(t) {
      return new (t || GlassBgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GlassBgComponent,
      selectors: [["web-glass-bg"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 0,
      consts: [[1, "liquidGlass-wrapper"], [1, "liquidGlass-effect"], [1, "liquidGlass-tint"], [1, "liquidGlass-shine"], [1, "liquidGlass-text"]],
      template: function GlassBgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 82910:
/*!*****************************************************!*\
  !*** ./apps/web/src/app/shared/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlassBgComponent: () => (/* reexport safe */ _glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_0__.GlassBgComponent),
/* harmony export */   PaginatorComponent: () => (/* reexport safe */ _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent),
/* harmony export */   ResultEmptyComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator/paginator.component */ 40564);
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results */ 4863);




/***/ }),

/***/ 40564:
/*!*****************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/paginator/paginator.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatorComponent: () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 16824);

// Custom packages



class PaginatorComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.params = null;
    this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onPageIndexChange(e) {
    this.pageIndexChange.emit(e.pageIndex + 1);
  }
  static {
    this.ɵfac = function PaginatorComponent_Factory(t) {
      return new (t || PaginatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PaginatorComponent,
      selectors: [["web-paginator"]],
      inputs: {
        params: "params"
      },
      outputs: {
        pageIndexChange: "pageIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 5,
      consts: [[1, "pt-10", 3, "hidePageSize", "showFirstLastButtons", "length", "pageSize", "pageIndex", "page"]],
      template: function PaginatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-paginator", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function PaginatorComponent_Template_mat_paginator_page_0_listener($event) {
            return ctx.onPageIndexChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidePageSize", true)("showFirstLastButtons", false)("length", (ctx.params == null ? null : ctx.params.length) || 0)("pageSize", (ctx.params == null ? null : ctx.params.pageSize) || 0)("pageIndex", (ctx.params == null ? null : ctx.params.pageIndex) ? ((ctx.params == null ? null : ctx.params.pageIndex) || 0) - 1 : 0);
        }
      },
      dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4863:
/*!*************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultEmptyComponent: () => (/* reexport safe */ _result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_0__.ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-empty/result-empty.component */ 23309);


/***/ }),

/***/ 23309:
/*!*******************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/result-empty/result-empty.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultEmptyComponent: () => (/* binding */ ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages


class ResultEmptyComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '目前尚無資料';
  }
  static {
    this.ɵfac = function ResultEmptyComponent_Factory(t) {
      return new (t || ResultEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResultEmptyComponent,
      selectors: [["web-result-empty"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 1,
      consts: [[1, "empty-content"], ["src", "assets/image/illustration/content.svg", "alt", "\u76EE\u524D\u5C1A\u7121\u8CC7\u6599", 1, "w-full", "max-w-xs"]],
      template: function ResultEmptyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: [".empty-content[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: center;\n\n    border-radius: 0.5rem;\n\n    background-color: rgb(2 132 199 / 0.2);\n\n    padding-top: 2.5rem;\n\n    padding-bottom: 2.5rem;\n\n    opacity: 0.6\n}\n\nh1[_ngcontent-%COMP%] {\n\n    font-size: 1.5rem;\n\n    color: rgb(2 132 199 / 0.7)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQtZW1wdHkvcmVzdWx0LWVtcHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGFBQUE7O0lBQUEsc0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsdUJBQUE7O0lBQUEscUJBQUE7O0lBQUEsc0NBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHR5LWNvbnRlbnQge1xuICAgIEBhcHBseSBiZy1za3ktNjAwLzIwIG9wYWNpdHktNjAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBweS0xMDtcbn1cblxuaDEge1xuICAgIEBhcHBseSB0ZXh0LXNreS02MDAvNzAgdGV4dC0yeGw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 22546:
/*!*********************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/cust-group-control/cust-group-control.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupControlComponent: () => (/* binding */ CustGroupControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 16111);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 56238);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 90305);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zip-code-control/zip-code-control.component */ 6334);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages














const _c0 = ["currZipCode"];
function CustGroupControlComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r38);
  }
}
function CustGroupControlComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_13_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["name"].errors, "\u540D\u7A31"));
  }
}
function CustGroupControlComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r40);
  }
}
function CustGroupControlComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_22_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["taxId"].errors, "\u7D71\u4E00\u7DE8\u865F"));
  }
}
function CustGroupControlComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r42);
  }
}
function CustGroupControlComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_31_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.formHelper.errorMsgs(ctx_r5.f["ownerTitle"].errors, "\u8077\u7A31"));
  }
}
function CustGroupControlComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r44);
  }
}
function CustGroupControlComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_40_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.formHelper.errorMsgs(ctx_r7.f["owner"].errors, "\u8CA0\u8CAC\u4EBA"));
  }
}
function CustGroupControlComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r46);
  }
}
function CustGroupControlComponent_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_53_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.formHelper.errorMsgs(ctx_r9.f["phone"].errors, "\u806F\u7D61\u96FB\u8A71"));
  }
}
function CustGroupControlComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r48);
  }
}
function CustGroupControlComponent_mat_error_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_62_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r11.formHelper.errorMsgs(ctx_r11.f["phoneExt"].errors, "\u5206\u6A5F"));
  }
}
function CustGroupControlComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r50);
  }
}
function CustGroupControlComponent_mat_error_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_71_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.formHelper.errorMsgs(ctx_r13.f["email"].errors, "\u96FB\u5B50\u4FE1\u7BB1"));
  }
}
function CustGroupControlComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_84_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r52);
  }
}
function CustGroupControlComponent_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_84_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.formHelper.errorMsgs(ctx_r16.f["currAddr"].errors, "\u5730\u5740"));
  }
}
function CustGroupControlComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r54);
  }
}
function CustGroupControlComponent_mat_error_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_97_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r18.formHelper.errorMsgs(ctx_r18.f["cpTitle"].errors, "\u8077\u7A31"));
  }
}
function CustGroupControlComponent_span_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_106_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r56);
  }
}
function CustGroupControlComponent_mat_error_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_106_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r20.formHelper.errorMsgs(ctx_r20.f["cpName"].errors, "\u59D3\u540D"));
  }
}
function CustGroupControlComponent_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_118_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r58);
  }
}
function CustGroupControlComponent_mat_error_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_118_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r23.formHelper.errorMsgs(ctx_r23.f["cpBirthAt"].errors, "\u51FA\u751F\u65E5\u671F"));
  }
}
function CustGroupControlComponent_span_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_ng_container_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r59.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r59.name);
  }
}
function CustGroupControlComponent_mat_error_128_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r61);
  }
}
function CustGroupControlComponent_mat_error_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_128_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r26.formHelper.errorMsgs(ctx_r26.f["cpGender"].errors, "\u6027\u5225"));
  }
}
function CustGroupControlComponent_span_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_137_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r63);
  }
}
function CustGroupControlComponent_mat_error_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_137_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r28.formHelper.errorMsgs(ctx_r28.f["cpIdNo"].errors, "\u8EAB\u5206\u8B49\u865F"));
  }
}
function CustGroupControlComponent_span_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_147_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r65);
  }
}
function CustGroupControlComponent_mat_error_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_147_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r30.formHelper.errorMsgs(ctx_r30.f["cpMobile"].errors, "\u884C\u52D5\u96FB\u8A71"));
  }
}
function CustGroupControlComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_156_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r67);
  }
}
function CustGroupControlComponent_mat_error_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_156_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r32.formHelper.errorMsgs(ctx_r32.f["cpEmail"].errors, "\u96FB\u5B50\u4FE1\u7BB1"));
  }
}
function CustGroupControlComponent_span_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_168_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r69);
  }
}
function CustGroupControlComponent_mat_error_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_168_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r34.formHelper.errorMsgs((tmp_0_0 = ctx_r34.f["contentJto"].get("cpEducation")) == null ? null : tmp_0_0.errors, "\u5B78\u6B77"));
  }
}
function CustGroupControlComponent_span_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_mat_error_178_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r71);
  }
}
function CustGroupControlComponent_mat_error_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_178_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r36.formHelper.errorMsgs((tmp_0_0 = ctx_r36.f["contentJto"].get("cpExperience")) == null ? null : tmp_0_0.errors, "\u7D93\u6B77"));
  }
}
class CustGroupControlComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.sharedDataServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.SharedDataServ);
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.doFormInit();
  }
  // Custom control required methods
  ngOnInit() {
    console.log('init');
  }
  // NG_VALUE_ACCESSOR 實作
  writeValue(value) {
    if (!value) return;
    value.contentJto = (value?.content || '').isUndefinedOrNullOrEmpty() ? new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustGroupContentJto() : JSON.parse(value?.content || '{}');
    this.valForm.patchValue(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
    this.valForm.valueChanges.subscribe(res => {
      res.content = JSON.stringify(res.contentJto || new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustGroupContentJto());
      this.onChange(res);
    });
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  validate() {
    if (this.valForm.invalid) return {
      invalid: true
    };
    return null;
  }
  markAllAsTouched() {
    this.currZipCode.markAllAsTouched();
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({
      emitEvent: false
    });
    this.onValidatorChange?.();
  }
  doFormInit() {
    this.valForm = this._fb.group({
      id: [0],
      custId: [0],
      taxId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(150)]],
      phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12)]],
      phoneExt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(8)]],
      currZipCodeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      currAddr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
      owner: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      ownerTitle: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(30)]],
      cpName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      cpGender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(1)]],
      cpBirthAt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      cpIdNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
      cpMobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12)]],
      cpTitle: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(30)]],
      cpEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(150)]],
      crtBy: [null],
      crtAt: [null],
      contentJto: this._fb.group({
        cpTitle: [null],
        cpEducation: [null],
        cpExperience: [null]
      })
    });
    this.f['cpIdNo'].valueChanges.subscribe(res => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res) this.f['cpIdNo'].setValue(upperStr, {
        emitEvent: false
      });
    });
  }
  static {
    this.ɵfac = function CustGroupControlComponent_Factory(t) {
      return new (t || CustGroupControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CustGroupControlComponent,
      selectors: [["web-cust-group-control"]],
      viewQuery: function CustGroupControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.currZipCode = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CustGroupControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CustGroupControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 179,
      vars: 126,
      consts: [[3, "formGroup"], [1, "title"], [1, "input-group", "lg:grid-cols-3"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "name", 3, "required"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "taxId", 3, "required"], ["matInput", "", "type", "text", "formControlName", "ownerTitle", 3, "required"], ["matInput", "", "type", "text", "formControlName", "owner", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phone", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phoneExt", 3, "required"], ["matInput", "", "type", "text", "formControlName", "email", 3, "required"], [1, "col-span-full"], [1, "multi-inputs", "grid-cols-6"], ["formControlName", "currZipCodeId", 3, "required"], ["currZipCode", ""], ["appearance", "outline", 1, "w-full", "fill-black", "col-span-4"], ["matInput", "", "type", "text", "formControlName", "currAddr", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpTitle", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpName", 3, "required"], ["matInput", "", "formControlName", "cpBirthAt", 3, "matDatepicker", "required"], ["matSuffix", "", 3, "for"], ["birthAtDatepicker", ""], ["formControlName", "cpGender", 3, "required"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "cpIdNo", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpMobile", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpEmail", 3, "required"], ["formGroupName", "contentJto"], ["matInput", "", "formControlName", "cpEducation", "rows", "8", "placeholder", "\u5B78\u6B77...", 3, "required"], ["matInput", "", "formControlName", "cpExperience", "rows", "8", "placeholder", "\u7D93\u6B77...", 3, "required"], [1, "required-mark"], [1, "text-xs"], [3, "value"]],
      template: function CustGroupControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "section")(2, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u57FA\u672C\u8CC7\u6599");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 2)(5, "li")(6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u5718\u9AD4\u540D\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CustGroupControlComponent_span_8_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CustGroupControlComponent_mat_error_13_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u7D71\u4E00\u7DE8\u865F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CustGroupControlComponent_span_17_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CustGroupControlComponent_mat_error_22_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li")(24, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u8077\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CustGroupControlComponent_span_26_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CustGroupControlComponent_mat_error_31_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "li")(33, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "\u8CA0\u8CAC\u4EBA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CustGroupControlComponent_span_35_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CustGroupControlComponent_mat_error_40_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "section")(42, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\u806F\u7D61\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ul", 2)(45, "li")(46, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\u806F\u7D61\u96FB\u8A71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CustGroupControlComponent_span_48_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CustGroupControlComponent_mat_error_53_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li")(55, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "\u5206\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, CustGroupControlComponent_span_57_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, CustGroupControlComponent_mat_error_62_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "li")(64, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, CustGroupControlComponent_span_66_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](70, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, CustGroupControlComponent_mat_error_71_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li", 14)(73, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, CustGroupControlComponent_span_75_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "web-zip-code-control", 16, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](80, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](83, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, CustGroupControlComponent_mat_error_84_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "section")(86, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "\u6703\u54E1\u4EE3\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "ul", 2)(89, "li")(90, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\u8077\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, CustGroupControlComponent_span_92_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](96, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, CustGroupControlComponent_mat_error_97_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "li")(99, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "\u59D3\u540D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, CustGroupControlComponent_span_101_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](102, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](105, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, CustGroupControlComponent_mat_error_106_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "li")(108, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "\u51FA\u751F\u65E5\u671F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, CustGroupControlComponent_span_110_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](111, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](114, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "mat-datepicker-toggle", 23)(116, "mat-datepicker", null, 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, CustGroupControlComponent_mat_error_118_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "li")(120, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "\u6027\u5225 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, CustGroupControlComponent_span_122_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](123, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "mat-form-field", 5)(125, "mat-select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](126, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, CustGroupControlComponent_ng_container_127_Template, 3, 2, "ng-container", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](128, CustGroupControlComponent_mat_error_128_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "li")(130, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "\u8EAB\u5206\u8B49\u865F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, CustGroupControlComponent_span_132_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](133, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](136, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, CustGroupControlComponent_mat_error_137_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "ul", 2)(139, "li")(140, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\u884C\u52D5\u96FB\u8A71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, CustGroupControlComponent_span_142_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](143, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](146, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, CustGroupControlComponent_mat_error_147_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "li")(149, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](151, CustGroupControlComponent_span_151_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](152, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](155, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, CustGroupControlComponent_mat_error_156_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "ul", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](158, 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "li")(160, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "\u5B78\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](162, CustGroupControlComponent_span_162_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](163, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "mat-form-field", 5)(165, "textarea", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](166, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "            ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](168, CustGroupControlComponent_mat_error_168_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "li")(170, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "\u7D93\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](172, CustGroupControlComponent_span_172_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](173, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "mat-form-field", 5)(175, "textarea", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](176, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "            ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](178, CustGroupControlComponent_mat_error_178_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](117);
          let tmp_52_0;
          let tmp_55_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 56, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 58, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["name"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 60, ctx.f["taxId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 62, ctx.f["taxId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["taxId"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 64, ctx.f["ownerTitle"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 66, ctx.f["ownerTitle"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["ownerTitle"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 68, ctx.f["owner"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 70, ctx.f["owner"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["owner"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 72, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 74, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["phone"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 76, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 78, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["phoneExt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 80, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](70, 82, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 84, ctx.f["currAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](80, 86, ctx.f["currZipCodeId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](83, 88, ctx.f["currAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["currAddr"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 90, ctx.f["cpTitle"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](96, 92, ctx.f["cpTitle"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpTitle"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](102, 94, ctx.f["cpName"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](105, 96, ctx.f["cpName"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpName"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](111, 98, ctx.f["cpBirthAt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r22)("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](114, 100, ctx.f["cpBirthAt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpBirthAt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](123, 102, ctx.f["cpGender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](126, 104, ctx.f["cpGender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sharedDataServ.genderOpts);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpGender"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](133, 106, ctx.f["cpIdNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](136, 108, ctx.f["cpIdNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpIdNo"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](143, 110, ctx.f["cpMobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](146, 112, ctx.f["cpMobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpMobile"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](152, 114, ctx.f["cpEmail"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](155, 116, ctx.f["cpEmail"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["cpEmail"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](163, 118, ctx.f["cpEducation"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](166, 120, ctx.f["cpEducation"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_52_0 = ctx.f["contentJto"].get("cpEducation")) == null ? null : tmp_52_0.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](173, 122, ctx.f["cpExperience"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](176, 124, ctx.f["cpExperience"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_55_0 = ctx.f["contentJto"].get("cpExperience")) == null ? null : tmp_55_0.errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__.ZipCodeControlComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 98814:
/*!***********************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/cust-member-control/cust-member-control.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberControlComponent: () => (/* binding */ CustMemberControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 52328);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 16111);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 56238);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 90305);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zip-code-control/zip-code-control.component */ 6334);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages















const _c0 = ["resiZipCode"];
const _c1 = ["currZipCode"];
function CustMemberControlComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r33);
  }
}
function CustMemberControlComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_13_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["name"].errors, "\u59D3\u540D"));
  }
}
function CustMemberControlComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r35);
  }
}
function CustMemberControlComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_25_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.formHelper.errorMsgs(ctx_r4.f["birthAt"].errors, "\u51FA\u751F\u65E5\u671F"));
  }
}
function CustMemberControlComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r36.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r36.name);
  }
}
function CustMemberControlComponent_mat_error_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r38);
  }
}
function CustMemberControlComponent_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_35_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.formHelper.errorMsgs(ctx_r7.f["gender"].errors, "\u6027\u5225"));
  }
}
function CustMemberControlComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r40);
  }
}
function CustMemberControlComponent_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_45_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.formHelper.errorMsgs(ctx_r9.f["idNo"].errors, "\u8EAB\u5206\u8B49\u865F"));
  }
}
function CustMemberControlComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r42);
  }
}
function CustMemberControlComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_55_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r11.formHelper.errorMsgs(ctx_r11.f["recommender"].errors, "\u63A8\u85A6\u4EBA"));
  }
}
function CustMemberControlComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r44);
  }
}
function CustMemberControlComponent_mat_error_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_68_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.formHelper.errorMsgs(ctx_r13.f["mobile"].errors, "\u806F\u7D61\u624B\u6A5F"));
  }
}
function CustMemberControlComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_77_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r46);
  }
}
function CustMemberControlComponent_mat_error_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_77_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r15.formHelper.errorMsgs(ctx_r15.f["phone"].errors, "\u806F\u7D61\u96FB\u8A71"));
  }
}
function CustMemberControlComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_86_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r48);
  }
}
function CustMemberControlComponent_mat_error_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_86_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r17.formHelper.errorMsgs(ctx_r17.f["phoneExt"].errors, "\u5206\u6A5F"));
  }
}
function CustMemberControlComponent_span_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r50);
  }
}
function CustMemberControlComponent_mat_error_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_95_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r19.formHelper.errorMsgs(ctx_r19.f["email"].errors, "\u96FB\u5B50\u4FE1\u7BB1"));
  }
}
function CustMemberControlComponent_span_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_108_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r52);
  }
}
function CustMemberControlComponent_mat_error_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_108_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r22.formHelper.errorMsgs(ctx_r22.f["resiAddr"].errors, "\u6236\u85C9\u5730\u5740"));
  }
}
function CustMemberControlComponent_span_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_124_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r54);
  }
}
function CustMemberControlComponent_mat_error_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_124_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r25.formHelper.errorMsgs(ctx_r25.f["currAddr"].errors, "\u806F\u7D61\u5730\u5740"));
  }
}
function CustMemberControlComponent_span_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_138_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r56);
  }
}
function CustMemberControlComponent_mat_error_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_138_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r27.formHelper.errorMsgs((tmp_0_0 = ctx_r27.f["contentJto"].get("education")) == null ? null : tmp_0_0.errors, "\u5B78\u6B77"));
  }
}
function CustMemberControlComponent_span_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_147_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r58);
  }
}
function CustMemberControlComponent_mat_error_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_147_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r29.formHelper.errorMsgs((tmp_0_0 = ctx_r29.f["contentJto"].get("experience")) == null ? null : tmp_0_0.errors, "\u7D93\u6B77"));
  }
}
function CustMemberControlComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_mat_error_156_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r60);
  }
}
function CustMemberControlComponent_mat_error_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_156_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r31.formHelper.errorMsgs((tmp_0_0 = ctx_r31.f["contentJto"].get("currJob")) == null ? null : tmp_0_0.errors, "\u73FE\u8077"));
  }
}
class CustMemberControlComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  // IOs & Gets & Sets
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.sharedDataServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.SharedDataServ);
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.doFormInit();
  }
  // Custom control required methods
  ngOnInit() {
    console.log('init');
  }
  // NG_VALUE_ACCESSOR 實作
  writeValue(value) {
    if (!value) return;
    value.contentJto = (value.content || '').isUndefinedOrNullOrEmpty() ? new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustMemberContentJto() : JSON.parse(value.content || '{}');
    this.valForm.patchValue(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
    this.valForm.valueChanges.subscribe(res => {
      res.content = JSON.stringify(res.contentJto || new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustMemberContentJto());
      this.onChange(res);
    });
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  validate() {
    console.log(this.valForm);
    if (this.valForm.invalid) return {
      invalid: true
    };
    return null;
  }
  markAllAsTouched() {
    this.resiZipCode.markAllAsTouched();
    this.currZipCode.markAllAsTouched();
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({
      emitEvent: false
    });
    this.onValidatorChange?.();
  }
  doFormInit() {
    this.valForm = this._fb.group({
      id: [0],
      custId: [0],
      idNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(1)]],
      birthAt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(150)]],
      mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12)]],
      phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12)]],
      phoneExt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(8)]],
      resiZipCodeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      resiAddr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
      currZipCodeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      currAddr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
      recommender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      crtBy: [null],
      crtAt: [null],
      contentJto: this._fb.group({
        currJob: [null],
        education: [null],
        experience: [null]
      })
    });
    this.f['idNo'].valueChanges.subscribe(res => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res) this.f['idNo'].setValue(upperStr, {
        emitEvent: false
      });
    });
  }
  static {
    this.ɵfac = function CustMemberControlComponent_Factory(t) {
      return new (t || CustMemberControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CustMemberControlComponent,
      selectors: [["web-cust-member-control"]],
      viewQuery: function CustMemberControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.resiZipCode = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.currZipCode = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CustMemberControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CustMemberControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 157,
      vars: 108,
      consts: [[3, "formGroup"], [1, "title"], [1, "input-group", "lg:grid-cols-3"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "name", 3, "required"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "formControlName", "birthAt", 3, "matDatepicker", "required"], ["matSuffix", "", 3, "for"], ["birthAtDatepicker", ""], ["formControlName", "gender", 3, "required"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "idNo", 3, "required"], ["matInput", "", "type", "text", "formControlName", "recommender", 3, "required"], ["matInput", "", "type", "text", "formControlName", "mobile", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phone", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phoneExt", 3, "required"], [1, "col-span-full"], ["matInput", "", "type", "text", "formControlName", "email", 3, "required"], [1, "multi-inputs", "grid-cols-6"], ["formControlName", "resiZipCodeId", 3, "required"], ["resiZipCode", ""], ["appearance", "outline", 1, "w-full", "fill-black", "col-span-4"], ["matInput", "", "type", "text", "formControlName", "resiAddr", 3, "required"], ["color", "primary"], [1, "text-base", "-ml-2"], ["formControlName", "currZipCodeId", 1, "w-full", "col-span-2", 3, "required"], ["currZipCode", ""], ["matInput", "", "type", "text", "formControlName", "currAddr", 3, "required"], [1, "input-group"], ["formGroupName", "contentJto"], ["matInput", "", "formControlName", "education", "rows", "8", "placeholder", "\u60A8\u7684\u5B78\u6B77...", 3, "required"], ["matInput", "", "formControlName", "experience", "rows", "8", "placeholder", "\u60A8\u7684\u7D93\u6B77...", 3, "required"], ["matInput", "", "type", "text", "formControlName", "currJob", 3, "required"], [1, "required-mark"], [1, "text-xs"], [3, "value"]],
      template: function CustMemberControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "section")(2, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u57FA\u672C\u8CC7\u6599");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 2)(5, "li")(6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u59D3\u540D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CustMemberControlComponent_span_8_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CustMemberControlComponent_mat_error_13_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u51FA\u751F\u65E5\u671F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CustMemberControlComponent_span_17_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "mat-datepicker-toggle", 9)(23, "mat-datepicker", null, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CustMemberControlComponent_mat_error_25_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li")(27, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\u6027\u5225 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CustMemberControlComponent_span_29_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 5)(32, "mat-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CustMemberControlComponent_ng_container_34_Template, 3, 2, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CustMemberControlComponent_mat_error_35_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "li")(37, "div", 3)(38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\u8EAB\u5206\u8B49\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CustMemberControlComponent_span_40_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CustMemberControlComponent_mat_error_45_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li")(47, "div", 3)(48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\u63A8\u85A6\u4EBA");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CustMemberControlComponent_span_50_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CustMemberControlComponent_mat_error_55_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "section")(57, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\u806F\u7D61\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ul", 2)(60, "li")(61, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "\u806F\u7D61\u624B\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, CustMemberControlComponent_span_63_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CustMemberControlComponent_mat_error_68_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li")(70, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "\u806F\u7D61\u96FB\u8A71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, CustMemberControlComponent_span_72_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, CustMemberControlComponent_mat_error_77_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "li")(79, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "\u5206\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, CustMemberControlComponent_span_81_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](85, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, CustMemberControlComponent_mat_error_86_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "li", 18)(88, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, CustMemberControlComponent_span_90_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](91, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, CustMemberControlComponent_mat_error_95_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "li", 18)(97, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "\u6236\u85C9\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, CustMemberControlComponent_span_99_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "web-zip-code-control", 21, 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-form-field", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](106, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](107, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, CustMemberControlComponent_mat_error_108_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "li", 18)(110, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "\u806F\u7D61\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](112, CustMemberControlComponent_span_112_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](113, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "mat-checkbox", 25)(115, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "\u540C\u4E0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](118, "web-zip-code-control", 27, 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](120, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "mat-form-field", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](122, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](123, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, CustMemberControlComponent_mat_error_124_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "section")(126, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "\u5B78\u7D93\u6B77");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ul", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](129, 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "li")(131, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "\u5B78\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](133, CustMemberControlComponent_span_133_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](134, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "textarea", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](137, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, CustMemberControlComponent_mat_error_138_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "li")(140, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\u7D93\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, CustMemberControlComponent_span_142_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](143, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "textarea", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](146, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, CustMemberControlComponent_mat_error_147_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "li")(149, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "\u73FE\u8077 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](151, CustMemberControlComponent_span_151_Template, 2, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](152, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "mat-form-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](155, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, CustMemberControlComponent_mat_error_156_Template, 2, 1, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
          let tmp_41_0;
          let tmp_44_0;
          let tmp_47_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 48, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 50, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["name"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 52, ctx.f["birthAt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r3)("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 54, ctx.f["birthAt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["birthAt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 56, ctx.f["gender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 58, ctx.f["gender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sharedDataServ.genderOpts);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["gender"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 60, ctx.f["idNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 62, ctx.f["idNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["idNo"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 64, ctx.f["recommender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 66, ctx.f["recommender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["recommender"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 68, ctx.f["mobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 70, ctx.f["mobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["mobile"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 72, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 74, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["phone"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 76, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](85, 78, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["phoneExt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](91, 80, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 82, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](100, 84, ctx.f["resiAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](104, 86, ctx.f["resiZipCodeId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](107, 88, ctx.f["resiAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["resiAddr"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](113, 90, ctx.f["currAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](120, 92, ctx.f["currZipCodeId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](123, 94, ctx.f["currAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["currAddr"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](134, 96, ctx.f["education"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](137, 98, ctx.f["education"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_41_0 = ctx.f["contentJto"].get("education")) == null ? null : tmp_41_0.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](143, 100, ctx.f["experience"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](146, 102, ctx.f["experience"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_44_0 = ctx.f["contentJto"].get("experience")) == null ? null : tmp_44_0.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](152, 104, ctx.f["currJob"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](155, 106, ctx.f["currJob"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_47_0 = ctx.f["contentJto"].get("currJob")) == null ? null : tmp_47_0.errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__.ZipCodeControlComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59828:
/*!***************************************************!*\
  !*** ./apps/web/src/app/shared/controls/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupControlComponent: () => (/* reexport safe */ _cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_0__.CustGroupControlComponent),
/* harmony export */   CustMemberControlComponent: () => (/* reexport safe */ _cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_1__.CustMemberControlComponent),
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cust-group-control/cust-group-control.component */ 22546);
/* harmony import */ var _cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cust-member-control/cust-member-control.component */ 98814);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zip-code-control/zip-code-control.component */ 6334);




/***/ }),

/***/ 6334:
/*!*****************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/zip-code-control/zip-code-control.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* binding */ ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linqts */ 28780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 16111);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 56238);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ary-filter.pipe */ 41575);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages











function ZipCodeControlComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4);
  }
}
function ZipCodeControlComponent_mat_error_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r6);
  }
}
function ZipCodeControlComponent_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_5_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["city"].errors, "\u7E23\u5E02"));
  }
}
function ZipCodeControlComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", opt_r7.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", opt_r7.code, " - ", opt_r7.district, " ");
  }
}
function ZipCodeControlComponent_mat_error_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", msg_r9, " ");
  }
}
function ZipCodeControlComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_11_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["district"].errors, "\u9109\u93AE\u5340"));
  }
}
const _c0 = function (a1) {
  return {
    fieldName: "city",
    fieldValue: a1
  };
};
class ZipCodeControlComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get f() {
    return this.valForm.controls;
  }
  constructor(fb, injector) {
    super(injector);
    this.fb = fb;
    this.injector = injector;
    this.cities = [];
    this.districts = [];
    this.required = false;
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.getCaches();
  }
  ngOnInit() {
    console.log('init');
  }
  writeValue(value) {
    this.valForm = this.fb.group({
      id: [value],
      city: [null],
      district: [null]
    });
    this.doSetValidators();
    if (this.districts.length) {
      this.doReverseZipCodeId(value);
    } else {
      // 防止跟不上快取處理
      setTimeout(() => {
        this.doReverseZipCodeId(value);
      }, 100);
    }
    this.f['id'].valueChanges.subscribe(res => {
      this.onChange(res);
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  validate() {
    if (this.valForm.invalid) return {
      invalid: true
    };
    return null;
  }
  markAllAsTouched() {
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({
      emitEvent: false
    });
    this.onValidatorChange?.();
  }
  getCaches() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.storeServ.getZipCodesCache()]).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this.cities = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).DistinctBy(item => item.city).Select(item => item.city).ToArray();
        this.districts = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).Select(item => ({
          id: item.id,
          code: item.code,
          city: item.city,
          district: item.district
        })).ToArray();
      }
    });
  }
  doReverseZipCodeId(id) {
    if (id) {
      const twZipCode = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(this.districts).Where(w => w?.id === id).FirstOrDefault();
      this.f['city'].setValue(twZipCode?.city);
      this.f['district'].setValue(twZipCode?.district);
    }
  }
  doSetValidators() {
    if (this.required) {
      this.f['city'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
      this.f['district'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
    } else {
      this.f['city'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator);
      this.f['district'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator);
    }
    this.f['city'].updateValueAndValidity();
    this.f['district'].updateValueAndValidity();
  }
  onDistrictSelectionChange(city, district, targetCtrl) {
    if (!city || !district) {
      return;
    }
    const dist = this.districts.find(item => item.city === city && item.district === district);
    if (!dist) {
      return;
    }
    targetCtrl.setValue(dist.id);
  }
  static {
    this.ɵfac = function ZipCodeControlComponent_Factory(t) {
      return new (t || ZipCodeControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ZipCodeControlComponent,
      selectors: [["web-zip-code-control"]],
      inputs: {
        required: "required"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 16,
      consts: [[1, "grid", "grid-cols-2", "gap-x-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full", "fill-black", "col-span-1"], ["formControlName", "city", 3, "required", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs", 4, "ngIf"], ["formControlName", "district", 3, "required", "selectionChange"], [3, "value"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function ZipCodeControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_2_listener() {
            ctx.f["district"].setValue(null);
            return ctx.f["id"].setValue(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ZipCodeControlComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ZipCodeControlComponent_mat_error_5_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 1)(7, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_7_listener() {
            return ctx.onDistrictSelectionChange(ctx.f["city"].value, ctx.f["district"].value, ctx.f["id"]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ZipCodeControlComponent_mat_option_9_Template, 2, 3, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "aryFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ZipCodeControlComponent_mat_error_11_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, ctx.f["city"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cities);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["city"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, ctx.f["district"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 11, ctx.districts, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.f["city"].value)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["district"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _libs_core_src_lib_shared_pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.AryFilterPipe, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 53896:
/*!**************************************************!*\
  !*** ./apps/web/src/app/shared/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 91096);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ 47131);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 23225);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 82910);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ 59828);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets */ 48851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);



// Third party packages


// Custom packages





const CUST_MODULES = [_core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule];
const CUST_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent];
const CUST_CONTROLS = [_controls__WEBPACK_IMPORTED_MODULE_2__.CustGroupControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent];
const CUST_WIDGETS = [_widgets__WEBPACK_IMPORTED_MODULE_3__.CustEditWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent];
const THIRD_MODULES = [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, CUST_MODULES, THIRD_MODULES, _core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustGroupControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.CustEditWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule],
    exports: [_core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustGroupControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.CustEditWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 9513:
/*!****************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/cust-edit-widget/cust-edit-widget.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustEditWidgetComponent: () => (/* binding */ CustEditWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 95954);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 96101);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 54935);
/* harmony import */ var _controls___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls/ */ 59828);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 20904);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/glass-bg/glass-bg.component */ 57002);
/* harmony import */ var _controls_cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls/cust-group-control/cust-group-control.component */ 22546);
/* harmony import */ var _controls_cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls/cust-member-control/cust-member-control.component */ 98814);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 9162);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages















function CustEditWidgetComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "web-cust-group-control", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CustEditWidgetComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "web-cust-member-control", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CustEditWidgetComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CustEditWidgetComponent_mat_error_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](msg_r9);
  }
}
function CustEditWidgetComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustEditWidgetComponent_mat_error_20_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["password"].errors, "\u5BC6\u78BC"));
  }
}
function CustEditWidgetComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CustEditWidgetComponent_mat_error_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", msg_r11, " ");
  }
}
function CustEditWidgetComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustEditWidgetComponent_mat_error_32_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.formHelper.errorMsgs(ctx_r5.f["confirmPassword"].errors, "\u5BC6\u78BC", "\u78BA\u8A8D\u5BC6\u78BC"));
  }
}
class CustEditWidgetComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get f() {
    return this.valForm.controls;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder);
    this.custApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CustApiServ);
    this.editDto = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustomerDto();
    this.passwordHide = true;
    // IOs & Gets & Sets
    this.custId = 0;
    this.type = 0;
    this.doFormInit();
  }
  // Custom control required methods
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    // Add
    if (!this.custId) {
      this.editDto = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustomerDto();
      this.editDto.type = this.type;
      switch (this.type) {
        case +this.custApiServ.customerTypes.個人會員:
          this.editDto.custMember = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustMemberDto();
          break;
        case +this.custApiServ.customerTypes.團體會員:
          this.editDto.custGroup = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CustGroupDto();
          break;
      }
      this.doFormPatchValue();
      return;
    }
    // Update
    this.custApiServ.getCurrCustomerDto().subscribe({
      next: res => {
        if (!res) {
          this.bbdNotifyServ.error('無法取得資料。');
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
      account: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(64)]],
      confirmPassword: [''],
      type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(8)]],
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
    console.log(this.valForm);
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
    if (this.custId) {
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
    } else {
      this.custApiServ.signupCustomerDto(this.editDto).subscribe({
        next: res => {
          if (!res) {
            this.bbdNotifyServ.error(this.custId ? `修改會員資料失敗，請再重試一次。` : `註冊會員失敗，請再重試一次。`);
            return;
          }
          this.bbdNotifyServ.success(this.custId ? `修改會員資料成功。` : `註冊會員成功。`);
        },
        error: err => {
          this.bbdNotifyServ.error('執行失敗', err);
        }
      }).add(() => this.spinnerServ.hide());
    }
  }
  static {
    this.ɵfac = function CustEditWidgetComponent_Factory(t) {
      return new (t || CustEditWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CustEditWidgetComponent,
      selectors: [["web-cust-edit-widget"]],
      viewQuery: function CustEditWidgetComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_controls___WEBPACK_IMPORTED_MODULE_3__.CustGroupControlComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_controls___WEBPACK_IMPORTED_MODULE_3__.CustMemberControlComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.groupCtrl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.memberCtrl = _t.first);
        }
      },
      inputs: {
        custId: "custId",
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
      decls: 36,
      vars: 25,
      consts: [[3, "formGroup"], [1, "pt-4", "pb-12"], [4, "ngIf"], [1, "title"], [1, "input-group", "lg:grid-cols-2"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "formControlName", "password", 3, "type", "required"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "min-w-8"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "formControlName", "confirmPassword", 3, "type", "required"], [1, "toolbar", "col-span-full"], [1, "btn-primary", 3, "click"], ["formControlName", "custGroup"], ["groupCtrl", ""], ["formControlName", "custMember"], ["memberCtrl", ""], [1, "required-mark"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function CustEditWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "web-glass-bg")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CustEditWidgetComponent_ng_container_3_Template, 3, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CustEditWidgetComponent_ng_container_4_Template, 3, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "section")(6, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u60A8\u7684\u5BC6\u78BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ul", 4)(9, "li")(10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, CustEditWidgetComponent_span_12_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustEditWidgetComponent_Template_button_click_17_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CustEditWidgetComponent_mat_error_20_Template, 2, 1, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li")(22, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\u78BA\u8A8D\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CustEditWidgetComponent_span_24_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-form-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustEditWidgetComponent_Template_button_click_29_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, CustEditWidgetComponent_mat_error_32_Template, 2, 1, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 13)(34, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustEditWidgetComponent_Template_button_click_34_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\u9001\u51FA");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type === +ctx.custApiServ.customerTypes["\u5718\u9AD4\u6703\u54E1"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type === +ctx.custApiServ.customerTypes["\u500B\u4EBA\u6703\u54E1"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 17, ctx.f["password"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text")("required", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 19, ctx.f["password"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "\u4E0D\u986F\u793A\u5BC6\u78BC")("aria-pressed", ctx.passwordHide);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f["password"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 21, ctx.f["confirmPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text")("required", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 23, ctx.f["confirmPassword"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "\u4E0D\u986F\u793A\u5BC6\u78BC")("aria-pressed", ctx.passwordHide);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f["confirmPassword"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__.GlassBgComponent, _controls_cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_5__.CustGroupControlComponent, _controls_cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_6__.CustMemberControlComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_7__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 87709:
/*!**************************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/image-preview-dialog-widget/image-preview-dialog-widget.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreviewDialogWidgetComponent: () => (/* binding */ ImagePreviewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 86243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);



class ImagePreviewDialogWidgetComponent {
  constructor(data) {
    this.data = data;
  }
  static {
    this.ɵfac = function ImagePreviewDialogWidgetComponent_Factory(t) {
      return new (t || ImagePreviewDialogWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagePreviewDialogWidgetComponent,
      selectors: [["web-image-preview-dialog-widget"]],
      decls: 5,
      vars: 1,
      consts: [["mat-dialog-content", ""], ["alt", "\u9810\u89BD\u5716\u7247", 2, "max-width", "100%", "max-height", "80vh", 3, "src"], ["mat-dialog-actions", "", "align", "end"], ["mat-dialog-close", ""]],
      template: function ImagePreviewDialogWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/jpeg;base64," + ctx.data.imageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
      styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding: 0;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL3dpZGdldHMvaW1hZ2UtcHJldmlldy1kaWFsb2ctd2lkZ2V0L2ltYWdlLXByZXZpZXctZGlhbG9nLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsY0FBYztNQUNkLFVBQVU7SUFDWiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 48851:
/*!**************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustEditWidgetComponent: () => (/* reexport safe */ _cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_0__.CustEditWidgetComponent),
/* harmony export */   ImagePreviewDialogWidgetComponent: () => (/* reexport safe */ _image_preview_dialog_widget_image_preview_dialog_widget_component__WEBPACK_IMPORTED_MODULE_1__.ImagePreviewDialogWidgetComponent),
/* harmony export */   JsonViewDialogWidgetComponent: () => (/* reexport safe */ _json_view_dialog_widget_json_view_dialog_widget_component__WEBPACK_IMPORTED_MODULE_2__.JsonViewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cust-edit-widget/cust-edit-widget.component */ 9513);
/* harmony import */ var _image_preview_dialog_widget_image_preview_dialog_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-preview-dialog-widget/image-preview-dialog-widget.component */ 87709);
/* harmony import */ var _json_view_dialog_widget_json_view_dialog_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-view-dialog-widget/json-view-dialog-widget.component */ 66109);




/***/ }),

/***/ 66109:
/*!******************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/json-view-dialog-widget/json-view-dialog-widget.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonViewDialogWidgetComponent: () => (/* binding */ JsonViewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 86243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 18516);




class JsonViewDialogWidgetComponent {
  constructor(data) {
    this.data = data;
  }
  static {
    this.ɵfac = function JsonViewDialogWidgetComponent_Factory(t) {
      return new (t || JsonViewDialogWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JsonViewDialogWidgetComponent,
      selectors: [["web-json-view-dialog-widget"]],
      decls: 9,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-dialog-close", ""]],
      template: function JsonViewDialogWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "JSON \u5167\u5BB9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 1)(7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.data));
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
      styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding: 0;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL3dpZGdldHMvanNvbi12aWV3LWRpYWxvZy13aWRnZXQvanNvbi12aWV3LWRpYWxvZy13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGNBQWM7TUFDZCxVQUFVO0lBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 88207:
/*!**************************************************!*\
  !*** ./apps/web/src/environments/environment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  appPfm: 'WEB',
  storageTokenName: 'tslmaiWebDevToken',
  storageAuthUserName: 'tslmaiWebDevAuthUser',
  siteName: '台灣人工智慧檢驗醫學學會',
  siteServer: 'http://localhost:4200',
  apiServer: 'http://localhost:5038/Portal',
  cdnServer: 'http://localhost:5038',
  downloadUrl: '/AppAttach/DownloadAppFileAtt'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 2485:
/*!*************************************!*\
  !*** ./apps/web/src/main.server.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 93469);


/***/ }),

/***/ 30552:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.actions.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrAuthUserActionStates: () => (/* binding */ CurrAuthUserActionStates),
/* harmony export */   failureCurrAuthUserAction: () => (/* binding */ failureCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserAction: () => (/* binding */ initialCurrAuthUserAction),
/* harmony export */   requestCurrAuthUserAction: () => (/* binding */ requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* binding */ successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 42831);

// States
var CurrAuthUserActionStates;
(function (CurrAuthUserActionStates) {
  CurrAuthUserActionStates["Initial"] = "[CurrAuthUser] Initial";
  CurrAuthUserActionStates["Request"] = "[CurrAuthUser] Request";
  CurrAuthUserActionStates["Success"] = "[CurrAuthUser] Success";
  CurrAuthUserActionStates["Failure"] = "[CurrAuthUser] Failure";
})(CurrAuthUserActionStates || (CurrAuthUserActionStates = {}));
// Actions
const initialCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Initial);
const requestCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Request);
const successCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Success, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const failureCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Failure,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 75725:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.effects.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrAuthUserEffects: () => (/* binding */ CurrAuthUserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 39507);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 40600);
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 30552);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers */ 56476);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);



// Custom packages






class CurrAuthUserEffects {
  constructor(actions$, appEnv, appUserApiServ) {
    this.actions$ = actions$;
    this.appEnv = appEnv;
    this.appUserApiServ = appUserApiServ;
    this.getCurrAuthUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
      return this.appUserApiServ.getCurrAuthUserInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
        if (res) {
          window.sessionStorage.setItem(this.appEnv.storageAuthUserName, JSON.stringify(res));
          return _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction({
            payload: res
          });
        } else {
          return _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction({
            payload: new Error('無法取得有效使用者資訊')
          });
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction({
        payload: err
      }))));
    })));
  }
  static {
    this.ɵfac = function CurrAuthUserEffects_Factory(t) {
      return new (t || CurrAuthUserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_1__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__.AppUserApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: CurrAuthUserEffects,
      factory: CurrAuthUserEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 71567:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.reducer.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* binding */ CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   currAuthUserReducer: () => (/* binding */ currAuthUserReducer),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* binding */ initialCurrAuthUserCacheState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 42831);
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 30552);

// Custom packages

const CURR_AUTH_USER_FEATURE_KEY = 'curr-auth-user';
const initialCurrAuthUserCacheState = {
  cache: null,
  loading: false
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialCurrAuthUserCacheState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserAction, state => ({
  ...state,
  cache: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction, state => ({
  ...state,
  cache: null,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction, state => ({
  ...state,
  cache: state.cache,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction, state => ({
  ...state,
  cache: null,
  loading: false
})));
function currAuthUserReducer(state, action) {
  return reducer(state, action);
}

/***/ }),

/***/ 47173:
/*!******************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.selectors.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrAuthUserCache: () => (/* binding */ getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* binding */ getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* binding */ getCurrAuthUserState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 42831);
/* harmony import */ var _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.reducer */ 71567);


const getCurrAuthUserState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY);
const getCurrAuthUserLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getCurrAuthUserState, state => state.loading);
const getCurrAuthUserCache = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getCurrAuthUserState, state => state.cache);

/***/ }),

/***/ 8976:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* reexport safe */ _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__.CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   CurrAuthUserActionStates: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.CurrAuthUserActionStates),
/* harmony export */   currAuthUserReducer: () => (/* reexport safe */ _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__.currAuthUserReducer),
/* harmony export */   failureCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction),
/* harmony export */   getCurrAuthUserCache: () => (/* reexport safe */ _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* reexport safe */ _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* reexport safe */ _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrAuthUserState),
/* harmony export */   initialCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* reexport safe */ _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__.initialCurrAuthUserCacheState),
/* harmony export */   requestCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 30552);
/* harmony import */ var _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curr-auth-user.reducer */ 71567);
/* harmony import */ var _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curr-auth-user.selectors */ 47173);




/***/ }),

/***/ 98578:
/*!********************************************!*\
  !*** ./libs/core/src/lib/+states/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   CurrAuthUserActionStates: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.CurrAuthUserActionStates),
/* harmony export */   StatesModule: () => (/* reexport safe */ _states_module__WEBPACK_IMPORTED_MODULE_1__.StatesModule),
/* harmony export */   currAuthUserReducer: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.currAuthUserReducer),
/* harmony export */   failureCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction),
/* harmony export */   getCurrAuthUserCache: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.getCurrAuthUserState),
/* harmony export */   initialCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserCacheState),
/* harmony export */   requestCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user */ 8976);
/* harmony import */ var _states_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.module */ 3846);



/***/ }),

/***/ 3846:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/+states/states.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatesModule: () => (/* binding */ StatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 42831);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 39507);
/* harmony import */ var _curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user/curr-auth-user.reducer */ 71567);
/* harmony import */ var _curr_auth_user_curr_auth_user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curr-auth-user/curr-auth-user.effects */ 75725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);








class StatesModule {
  static {
    this.ɵfac = function StatesModule_Factory(t) {
      return new (t || StatesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: StatesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot({
        [_curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY]: _curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.currAuthUserReducer
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([_curr_auth_user_curr_auth_user_effects__WEBPACK_IMPORTED_MODULE_1__.CurrAuthUserEffects])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StatesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsRootModule]
  });
})();

/***/ }),

/***/ 15057:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/consts/global.const.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MAX_UTC_DATE_ISO_FORMAT: () => (/* binding */ APP_MAX_UTC_DATE_ISO_FORMAT),
/* harmony export */   MAT_DATE_TW_FORMATS: () => (/* binding */ MAT_DATE_TW_FORMATS),
/* harmony export */   PAGING_DEFAULT_PAGE_INDEX: () => (/* binding */ PAGING_DEFAULT_PAGE_INDEX),
/* harmony export */   PAGING_DEFAULT_PAGE_SIZE: () => (/* binding */ PAGING_DEFAULT_PAGE_SIZE)
/* harmony export */ });
const APP_MAX_UTC_DATE_ISO_FORMAT = '2999-12-31T00:00:00.000Z';
const PAGING_DEFAULT_PAGE_INDEX = 1;
const PAGING_DEFAULT_PAGE_SIZE = 30;
const MAT_DATE_TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM/DD',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM/DD'
  }
};

/***/ }),

/***/ 82407:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/consts/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MAX_UTC_DATE_ISO_FORMAT: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT),
/* harmony export */   MAT_DATE_TW_FORMATS: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_TW_FORMATS),
/* harmony export */   PAGING_DEFAULT_PAGE_INDEX: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_INDEX),
/* harmony export */   PAGING_DEFAULT_PAGE_SIZE: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_SIZE)
/* harmony export */ });
/* harmony import */ var _global_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.const */ 15057);


/***/ }),

/***/ 7197:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-admin-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminDto: () => (/* binding */ AppAdminDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class AppAdminDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppAdmin {
  constructor() {
    super();
    this.avatarAttId = 0;
    this.account = '';
    this.password = '';
    this.appUserStartAt = null;
    this.appUserEndAt = null;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 46688:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-file-att-dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFileAttDto: () => (/* binding */ AppFileAttDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class AppFileAttDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppFileAtt {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 67798:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-news-msg-cat-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCatDto: () => (/* binding */ AppNewsMsgCatDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class AppNewsMsgCatDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgCat {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 95187:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-news-msg-dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgDto: () => (/* binding */ AppNewsMsgDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos */ 98034);


class AppNewsMsgDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsg {
  constructor() {
    super();
    this.contentJto = new _jtos__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgContentJto();
  }
}

/***/ }),

/***/ 23355:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-object-store-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppObjectStoreDto: () => (/* binding */ AppObjectStoreDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class AppObjectStoreDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppObjectStore {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 28408:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-role-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleDto: () => (/* binding */ AppRoleDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRoleDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRole {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 36432:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-role-route-dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRouteDto: () => (/* binding */ AppRoleRouteDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRoleRouteDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRoleRoute {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 35035:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-route-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteDto: () => (/* binding */ AppRouteDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRouteDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRoute {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 59375:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-user-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserDto: () => (/* binding */ AppUserDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class AppUserDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppUser {
  constructor() {
    super();
    this.adminId = 0;
    this.custId = 0;
    this.name = '';
  }
}

/***/ }),

/***/ 30480:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-user-role-dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRoleDto: () => (/* binding */ AppUserRoleDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppUserRoleDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppUserRole {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 85848:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/banner-ad-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAdDto: () => (/* binding */ BannerAdDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class BannerAdDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.BannerAd {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 97488:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/campaign-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignDto: () => (/* binding */ CampaignDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos */ 98034);


class CampaignDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.Campaign {
  constructor() {
    super();
    this.startTimeAt = null;
    this.endTimeAt = null;
    this.regStartTimeAt = null;
    this.regEndTimeAt = null;
    this.contentJto = new _jtos__WEBPACK_IMPORTED_MODULE_1__.CampaignContentJto();
  }
}

/***/ }),

/***/ 89319:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-group-dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupDto: () => (/* binding */ CustGroupDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* harmony import */ var _jtos_cust_group_content_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos/cust-group-content-jto */ 95839);


class CustGroupDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustGroup {
  constructor() {
    super();
    this.contentJto = new _jtos_cust_group_content_jto__WEBPACK_IMPORTED_MODULE_1__.CustGroupContentJto();
  }
}

/***/ }),

/***/ 65488:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-member-dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberDto: () => (/* binding */ CustMemberDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);
/* harmony import */ var _jtos_cust_member_content_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos/cust-member-content-jto */ 23272);


class CustMemberDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustMember {
  constructor() {
    super();
    this.contentJto = new _jtos_cust_member_content_jto__WEBPACK_IMPORTED_MODULE_1__.CustMemberContentJto();
  }
}

/***/ }),

/***/ 1102:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/customer-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerDto: () => (/* binding */ CustomerDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 97649);

class CustomerDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.Customer {
  constructor() {
    super();
    this.avatarAttId = 0;
    this.appUserStartAt = new Date();
    this.appUserEndAt = null;
    this.appUserStatus = +_entities__WEBPACK_IMPORTED_MODULE_0__.AppUserStatuses.啟用;
    this.password = '';
    this.custGroup = null;
    this.custMember = null;
  }
}

/***/ }),

/***/ 23084:
/*!************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminDto: () => (/* reexport safe */ _app_admin_dto__WEBPACK_IMPORTED_MODULE_0__.AppAdminDto),
/* harmony export */   AppFileAttDto: () => (/* reexport safe */ _app_file_att_dto__WEBPACK_IMPORTED_MODULE_1__.AppFileAttDto),
/* harmony export */   AppNewsMsgCatDto: () => (/* reexport safe */ _app_news_msg_cat_dto__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatDto),
/* harmony export */   AppNewsMsgDto: () => (/* reexport safe */ _app_news_msg_dto__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgDto),
/* harmony export */   AppObjectStoreDto: () => (/* reexport safe */ _app_object_store_dto__WEBPACK_IMPORTED_MODULE_4__.AppObjectStoreDto),
/* harmony export */   AppRoleDto: () => (/* reexport safe */ _app_role_dto__WEBPACK_IMPORTED_MODULE_5__.AppRoleDto),
/* harmony export */   AppRoleRouteDto: () => (/* reexport safe */ _app_role_route_dto__WEBPACK_IMPORTED_MODULE_6__.AppRoleRouteDto),
/* harmony export */   AppRouteDto: () => (/* reexport safe */ _app_route_dto__WEBPACK_IMPORTED_MODULE_7__.AppRouteDto),
/* harmony export */   AppUserDto: () => (/* reexport safe */ _app_user_dto__WEBPACK_IMPORTED_MODULE_8__.AppUserDto),
/* harmony export */   AppUserRoleDto: () => (/* reexport safe */ _app_user_role_dto__WEBPACK_IMPORTED_MODULE_9__.AppUserRoleDto),
/* harmony export */   BannerAdDto: () => (/* reexport safe */ _banner_ad_dto__WEBPACK_IMPORTED_MODULE_10__.BannerAdDto),
/* harmony export */   CampaignDto: () => (/* reexport safe */ _campaign_dto__WEBPACK_IMPORTED_MODULE_11__.CampaignDto),
/* harmony export */   CustGroupDto: () => (/* reexport safe */ _cust_group_dto__WEBPACK_IMPORTED_MODULE_12__.CustGroupDto),
/* harmony export */   CustMemberDto: () => (/* reexport safe */ _cust_member_dto__WEBPACK_IMPORTED_MODULE_13__.CustMemberDto),
/* harmony export */   CustomerDto: () => (/* reexport safe */ _customer_dto__WEBPACK_IMPORTED_MODULE_14__.CustomerDto)
/* harmony export */ });
/* harmony import */ var _app_admin_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-dto */ 7197);
/* harmony import */ var _app_file_att_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-file-att-dto */ 46688);
/* harmony import */ var _app_news_msg_cat_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-cat-dto */ 67798);
/* harmony import */ var _app_news_msg_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-news-msg-dto */ 95187);
/* harmony import */ var _app_object_store_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-object-store-dto */ 23355);
/* harmony import */ var _app_role_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-role-dto */ 28408);
/* harmony import */ var _app_role_route_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-role-route-dto */ 36432);
/* harmony import */ var _app_route_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-route-dto */ 35035);
/* harmony import */ var _app_user_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-dto */ 59375);
/* harmony import */ var _app_user_role_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user-role-dto */ 30480);
/* harmony import */ var _banner_ad_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad-dto */ 85848);
/* harmony import */ var _campaign_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./campaign-dto */ 97488);
/* harmony import */ var _cust_group_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cust-group-dto */ 89319);
/* harmony import */ var _cust_member_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cust-member-dto */ 65488);
/* harmony import */ var _customer_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-dto */ 1102);
















/***/ }),

/***/ 1124:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-admin.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* binding */ AppAdmin)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppAdmin extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appUserId = 0;
    this.name = '';
    this.nameEn = null;
    this.mobile = null;
    this.email = null;
  }
}

/***/ }),

/***/ 48547:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-file-att.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFileAtt: () => (/* binding */ AppFileAtt)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppFileAtt extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    /*自動編號 */
    this.id = 0;
    /*上傳檔案名稱 */
    this.uploadName = '';
    /*上傳檔案名稱 */
    this.guidName = '';
    /*檔案副檔名 */
    this.extension = '';
    /*內容類型 */
    this.contentType = '';
    /*完整路徑 */
    this.fullPath = '';
    /*存取權限 */
    this.accessPriv = 0;
    /*狀態 */
    this.status = 0;
  }
}

/***/ }),

/***/ 96965:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-news-msg-cat.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCat: () => (/* binding */ AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* binding */ AppNewsMsgCatStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppNewsMsgCat extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.name = '';
    this.status = +AppNewsMsgCatStatuses.啟用;
    this.sort = 0;
  }
}
var AppNewsMsgCatStatuses;
(function (AppNewsMsgCatStatuses) {
  AppNewsMsgCatStatuses[AppNewsMsgCatStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  AppNewsMsgCatStatuses[AppNewsMsgCatStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(AppNewsMsgCatStatuses || (AppNewsMsgCatStatuses = {}));

/***/ }),

/***/ 22500:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-news-msg.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsg: () => (/* binding */ AppNewsMsg),
/* harmony export */   AppNewsMsgStatuses: () => (/* binding */ AppNewsMsgStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppNewsMsg extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.uniqueId = '';
    this.catId = null;
    this.title = '';
    this.startAt = new Date();
    this.endAt = null;
    this.stickyAt = null;
    this.status = +AppNewsMsgStatuses.發佈;
    this.content = null;
  }
}
var AppNewsMsgStatuses;
(function (AppNewsMsgStatuses) {
  AppNewsMsgStatuses[AppNewsMsgStatuses["\u767C\u4F48"] = 60] = "\u767C\u4F48";
  AppNewsMsgStatuses[AppNewsMsgStatuses["\u4E0B\u67B6"] = 100] = "\u4E0B\u67B6";
})(AppNewsMsgStatuses || (AppNewsMsgStatuses = {}));

/***/ }),

/***/ 97784:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-object-store.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppObjectStore: () => (/* binding */ AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* binding */ AppObjectStoreCodes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppObjectStore extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.type = 0;
    this.code = '';
    this.name = '';
    this.desc = '';
    this.value = '{}';
  }
}
var AppObjectStoreCodes;
(function (AppObjectStoreCodes) {
  AppObjectStoreCodes["\u95DC\u65BC\u5B78\u6703"] = "ORG_ABOUT_SETTING";
  AppObjectStoreCodes["\u5B78\u6703\u806F\u7D61\u65B9\u5F0F\u8A2D\u5B9A\u6A94"] = "ORG_CONTACT_SETTING";
  AppObjectStoreCodes["\u7DB2\u7AD9\u689D\u6B3E\u8A2D\u5B9A\u6A94"] = "WEB_POLICY_SETTING";
})(AppObjectStoreCodes || (AppObjectStoreCodes = {}));

/***/ }),

/***/ 66763:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-role-route.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRoute: () => (/* binding */ AppRoleRoute)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppRoleRoute extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appRoleId = 0;
    this.appRouteId = 0;
  }
}

/***/ }),

/***/ 91551:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-role.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRole: () => (/* binding */ AppRole),
/* harmony export */   AppRoleStatuses: () => (/* binding */ AppRoleStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppRole extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appPfm = '';
    this.name = '';
    this.status = AppRoleStatuses.啟用;
  }
}
var AppRoleStatuses;
(function (AppRoleStatuses) {
  AppRoleStatuses[AppRoleStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  AppRoleStatuses[AppRoleStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(AppRoleStatuses || (AppRoleStatuses = {}));

/***/ }),

/***/ 76654:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoute: () => (/* binding */ AppRoute)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppRoute extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.parentId = 0;
    this.appPfm = '';
    this.name = '';
    this.icon = null;
    this.path = null;
    this.startAt = new Date();
    this.endAt = null;
    this.sort = 0;
  }
}

/***/ }),

/***/ 2189:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-user-role.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRole: () => (/* binding */ AppUserRole)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppUserRole extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appUserId = 0;
    this.appRoleId = 0;
  }
}

/***/ }),

/***/ 42840:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-user.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUser: () => (/* binding */ AppUser),
/* harmony export */   AppUserStatuses: () => (/* binding */ AppUserStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class AppUser extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appPfm = '';
    this.account = '';
    this.password = '';
    this.avatarAttId = 0;
    this.startAt = new Date();
    this.endAt = null;
    this.status = AppUserStatuses.啟用;
  }
}
var AppUserStatuses;
(function (AppUserStatuses) {
  AppUserStatuses[AppUserStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  AppUserStatuses[AppUserStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(AppUserStatuses || (AppUserStatuses = {}));

/***/ }),

/***/ 42937:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/banner-ad.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAd: () => (/* binding */ BannerAd),
/* harmony export */   BannerAdStatuses: () => (/* binding */ BannerAdStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class BannerAd extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.title = '';
    this.desc = null;
    this.startAt = new Date();
    this.endAt = null;
    this.status = +BannerAdStatuses.發佈;
    this.coverAttId = 0;
    this.sort = 0;
  }
}
var BannerAdStatuses;
(function (BannerAdStatuses) {
  BannerAdStatuses[BannerAdStatuses["\u767C\u4F48"] = 60] = "\u767C\u4F48";
  BannerAdStatuses[BannerAdStatuses["\u4E0B\u67B6"] = 100] = "\u4E0B\u67B6";
})(BannerAdStatuses || (BannerAdStatuses = {}));

/***/ }),

/***/ 7455:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/campaign.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Campaign: () => (/* binding */ Campaign),
/* harmony export */   CampaignStatuses: () => (/* binding */ CampaignStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class Campaign extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.uniqueId = '';
    this.name = '';
    this.startAt = null;
    this.endAt = null;
    this.regStartAt = new Date();
    this.regEndAt = null;
    this.stickyAt = null;
    this.pricing = 0;
    this.salePrice = 0;
    this.isOpenReg = false;
    this.maxRegNum = 0;
    this.maxWaitNum = 0;
    this.regNum = 0;
    this.waitNum = 0;
    this.status = +CampaignStatuses.報名中;
    this.coverAttId = 0;
    this.content = null;
  }
}
var CampaignStatuses;
(function (CampaignStatuses) {
  CampaignStatuses[CampaignStatuses["\u5C1A\u672A\u958B\u653E"] = 50] = "\u5C1A\u672A\u958B\u653E";
  CampaignStatuses[CampaignStatuses["\u5831\u540D\u4E2D"] = 60] = "\u5831\u540D\u4E2D";
  CampaignStatuses[CampaignStatuses["\u5019\u88DC\u4E2D"] = 63] = "\u5019\u88DC\u4E2D";
  CampaignStatuses[CampaignStatuses["\u984D\u6EFF"] = 69] = "\u984D\u6EFF";
  CampaignStatuses[CampaignStatuses["\u622A\u6B62"] = 80] = "\u622A\u6B62";
  CampaignStatuses[CampaignStatuses["\u4E0B\u67B6"] = 100] = "\u4E0B\u67B6";
})(CampaignStatuses || (CampaignStatuses = {}));

/***/ }),

/***/ 86488:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-group.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroup: () => (/* binding */ CustGroup)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class CustGroup extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.custId = 0;
    this.taxId = '';
    this.name = '';
    this.nameEn = null;
    this.email = '';
    this.phone = null;
    this.phoneExt = null;
    this.currZipCodeId = null;
    this.currAddr = null;
    this.owner = '';
    this.ownerTitle = '';
    this.cpName = '';
    this.cpGender = null;
    this.cpBirthAt = null;
    this.cpIdNo = '';
    this.cpMobile = null;
    this.cpTitle = '';
    this.cpEmail = '';
    this.content = null;
  }
}

/***/ }),

/***/ 21625:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-member.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMember: () => (/* binding */ CustMember)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class CustMember extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.custId = 0;
    this.IdNo = '';
    this.name = '';
    this.nameEn = null;
    this.gender = null;
    this.birthAt = null;
    this.email = '';
    this.mobile = null;
    this.phone = null;
    this.phoneExt = null;
    this.resiZipCodeId = null;
    this.resiAddr = null;
    this.currZipCodeId = null;
    this.currAddr = null;
    this.recommender = null;
    this.content = null;
  }
}

/***/ }),

/***/ 68293:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/customer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Customer: () => (/* binding */ Customer),
/* harmony export */   CustomerStatuses: () => (/* binding */ CustomerStatuses),
/* harmony export */   CustomerTypes: () => (/* binding */ CustomerTypes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 17019);

class Customer extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appUserId = 0;
    this.uniqueId = '';
    this.type = null;
    this.code = null;
    this.name = '';
    this.startAt = new Date();
    this.endAt = null;
    this.expAt = null;
    this.status = +CustomerStatuses.審核中;
    this.content = null;
  }
}
var CustomerTypes;
(function (CustomerTypes) {
  CustomerTypes[CustomerTypes["\u500B\u4EBA\u6703\u54E1"] = 10] = "\u500B\u4EBA\u6703\u54E1";
  CustomerTypes[CustomerTypes["\u5718\u9AD4\u6703\u54E1"] = 20] = "\u5718\u9AD4\u6703\u54E1";
})(CustomerTypes || (CustomerTypes = {}));
var CustomerStatuses;
(function (CustomerStatuses) {
  CustomerStatuses[CustomerStatuses["\u5BE9\u6838\u4E2D"] = 30] = "\u5BE9\u6838\u4E2D";
  CustomerStatuses[CustomerStatuses["\u6B63\u5F0F\u6703\u54E1"] = 60] = "\u6B63\u5F0F\u6703\u54E1";
  CustomerStatuses[CustomerStatuses["\u5426\u6C7A\u7533\u8ACB"] = 90] = "\u5426\u6C7A\u7533\u8ACB";
  CustomerStatuses[CustomerStatuses["\u53D6\u6D88\u6703\u85C9"] = 100] = "\u53D6\u6D88\u6703\u85C9";
})(CustomerStatuses || (CustomerStatuses = {}));

/***/ }),

/***/ 97649:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/entities/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* reexport safe */ _app_admin__WEBPACK_IMPORTED_MODULE_0__.AppAdmin),
/* harmony export */   AppFileAtt: () => (/* reexport safe */ _app_file_att__WEBPACK_IMPORTED_MODULE_1__.AppFileAtt),
/* harmony export */   AppNewsMsg: () => (/* reexport safe */ _app_news_msg__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsg),
/* harmony export */   AppNewsMsgCat: () => (/* reexport safe */ _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* reexport safe */ _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatStatuses),
/* harmony export */   AppNewsMsgStatuses: () => (/* reexport safe */ _app_news_msg__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgStatuses),
/* harmony export */   AppObjectStore: () => (/* reexport safe */ _app_object_store__WEBPACK_IMPORTED_MODULE_4__.AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* reexport safe */ _app_object_store__WEBPACK_IMPORTED_MODULE_4__.AppObjectStoreCodes),
/* harmony export */   AppRole: () => (/* reexport safe */ _app_role__WEBPACK_IMPORTED_MODULE_6__.AppRole),
/* harmony export */   AppRoleRoute: () => (/* reexport safe */ _app_role_route__WEBPACK_IMPORTED_MODULE_5__.AppRoleRoute),
/* harmony export */   AppRoleStatuses: () => (/* reexport safe */ _app_role__WEBPACK_IMPORTED_MODULE_6__.AppRoleStatuses),
/* harmony export */   AppRoute: () => (/* reexport safe */ _app_route__WEBPACK_IMPORTED_MODULE_7__.AppRoute),
/* harmony export */   AppUser: () => (/* reexport safe */ _app_user__WEBPACK_IMPORTED_MODULE_9__.AppUser),
/* harmony export */   AppUserRole: () => (/* reexport safe */ _app_user_role__WEBPACK_IMPORTED_MODULE_8__.AppUserRole),
/* harmony export */   AppUserStatuses: () => (/* reexport safe */ _app_user__WEBPACK_IMPORTED_MODULE_9__.AppUserStatuses),
/* harmony export */   BannerAd: () => (/* reexport safe */ _banner_ad__WEBPACK_IMPORTED_MODULE_10__.BannerAd),
/* harmony export */   BannerAdStatuses: () => (/* reexport safe */ _banner_ad__WEBPACK_IMPORTED_MODULE_10__.BannerAdStatuses),
/* harmony export */   Campaign: () => (/* reexport safe */ _campaign__WEBPACK_IMPORTED_MODULE_11__.Campaign),
/* harmony export */   CampaignStatuses: () => (/* reexport safe */ _campaign__WEBPACK_IMPORTED_MODULE_11__.CampaignStatuses),
/* harmony export */   CustGroup: () => (/* reexport safe */ _cust_group__WEBPACK_IMPORTED_MODULE_12__.CustGroup),
/* harmony export */   CustMember: () => (/* reexport safe */ _cust_member__WEBPACK_IMPORTED_MODULE_13__.CustMember),
/* harmony export */   Customer: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_14__.Customer),
/* harmony export */   CustomerStatuses: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_14__.CustomerStatuses),
/* harmony export */   CustomerTypes: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_14__.CustomerTypes)
/* harmony export */ });
/* harmony import */ var _app_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin */ 1124);
/* harmony import */ var _app_file_att__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-file-att */ 48547);
/* harmony import */ var _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-cat */ 96965);
/* harmony import */ var _app_news_msg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-news-msg */ 22500);
/* harmony import */ var _app_object_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-object-store */ 97784);
/* harmony import */ var _app_role_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-role-route */ 66763);
/* harmony import */ var _app_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-role */ 91551);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-route */ 76654);
/* harmony import */ var _app_user_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-role */ 2189);
/* harmony import */ var _app_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user */ 42840);
/* harmony import */ var _banner_ad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad */ 42937);
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./campaign */ 7455);
/* harmony import */ var _cust_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cust-group */ 86488);
/* harmony import */ var _cust_member__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cust-member */ 21625);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer */ 68293);
















/***/ }),

/***/ 96101:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/models/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppAdmin),
/* harmony export */   AppAdminDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppAdminDto),
/* harmony export */   AppAdminReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppAdminReq),
/* harmony export */   AppFileAtt: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppFileAtt),
/* harmony export */   AppFileAttDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppFileAttDto),
/* harmony export */   AppNewsMsg: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsg),
/* harmony export */   AppNewsMsgCat: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgCatDto),
/* harmony export */   AppNewsMsgCatReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgCatReq),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses),
/* harmony export */   AppNewsMsgContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgContentJto),
/* harmony export */   AppNewsMsgDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgDto),
/* harmony export */   AppNewsMsgReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgReq),
/* harmony export */   AppNewsMsgStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses),
/* harmony export */   AppObjectStore: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppObjectStoreCodes),
/* harmony export */   AppObjectStoreDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppObjectStoreDto),
/* harmony export */   AppRole: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRole),
/* harmony export */   AppRoleDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppRoleDto),
/* harmony export */   AppRoleReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppRoleReq),
/* harmony export */   AppRoleRoute: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRoleRoute),
/* harmony export */   AppRoleRouteDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppRoleRouteDto),
/* harmony export */   AppRoleRouteReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppRoleRouteReq),
/* harmony export */   AppRoleStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses),
/* harmony export */   AppRoute: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRoute),
/* harmony export */   AppRouteDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppRouteDto),
/* harmony export */   AppRouteReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppRouteReq),
/* harmony export */   AppTokenInfo: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.AppTokenInfo),
/* harmony export */   AppUser: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppUser),
/* harmony export */   AppUserDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppUserDto),
/* harmony export */   AppUserReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppUserReq),
/* harmony export */   AppUserRole: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppUserRole),
/* harmony export */   AppUserRoleDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppUserRoleDto),
/* harmony export */   AppUserRoleReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppUserRoleReq),
/* harmony export */   AppUserStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses),
/* harmony export */   AuthUserInfo: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.AuthUserInfo),
/* harmony export */   AuthUserRoute: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.AuthUserRoute),
/* harmony export */   BannerAd: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.BannerAd),
/* harmony export */   BannerAdDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.BannerAdDto),
/* harmony export */   BannerAdReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.BannerAdReq),
/* harmony export */   BannerAdStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses),
/* harmony export */   Campaign: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.Campaign),
/* harmony export */   CampaignContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CampaignContentJto),
/* harmony export */   CampaignDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CampaignDto),
/* harmony export */   CampaignReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CampaignReq),
/* harmony export */   CampaignStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses),
/* harmony export */   ChangePasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordReq),
/* harmony export */   CustGroup: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustGroup),
/* harmony export */   CustGroupContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CustGroupContentJto),
/* harmony export */   CustGroupDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CustGroupDto),
/* harmony export */   CustGroupReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CustGroupReq),
/* harmony export */   CustMember: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustMember),
/* harmony export */   CustMemberContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CustMemberContentJto),
/* harmony export */   CustMemberDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CustMemberDto),
/* harmony export */   CustMemberReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CustMemberReq),
/* harmony export */   Customer: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.Customer),
/* harmony export */   CustomerDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CustomerDto),
/* harmony export */   CustomerReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CustomerReq),
/* harmony export */   CustomerStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses),
/* harmony export */   CustomerTypes: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustomerTypes),
/* harmony export */   EntityBase: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.EntityBaseStatuses),
/* harmony export */   ForgetPasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ForgetPasswordReq),
/* harmony export */   OrgAboutJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.OrgAboutJto),
/* harmony export */   OrgContactJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.OrgContactJto),
/* harmony export */   PagingRequest: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.PagingRequest),
/* harmony export */   PagingResponse: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.PagingResponse),
/* harmony export */   QueryRequestBase: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.QueryRequestBase),
/* harmony export */   ResetPasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordReq),
/* harmony export */   SigninReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.SigninReq),
/* harmony export */   UploadFormReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.UploadFormReq),
/* harmony export */   WebPolicyJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.WebPolicyJto),
/* harmony export */   ZipCodeReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dtos */ 23084);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ 97649);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jtos */ 98034);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests */ 93808);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ 17019);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views */ 14304);







/***/ }),

/***/ 16795:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/app-news-msg-content-jto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgContentJto: () => (/* binding */ AppNewsMsgContentJto)
/* harmony export */ });
class AppNewsMsgContentJto {
  constructor() {
    this.desc = '';
  }
}

/***/ }),

/***/ 61408:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/campaign-content-jto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignContentJto: () => (/* binding */ CampaignContentJto)
/* harmony export */ });
class CampaignContentJto {
  constructor() {
    this.location = '';
    this.speakers = '';
    this.hasMeal = false;
    this.desc = '';
  }
}

/***/ }),

/***/ 95839:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-group-content-jto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupContentJto: () => (/* binding */ CustGroupContentJto)
/* harmony export */ });
class CustGroupContentJto {
  constructor() {
    this.cpEducation = '';
    this.cpExperience = '';
  }
}

/***/ }),

/***/ 23272:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-member-content-jto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberContentJto: () => (/* binding */ CustMemberContentJto)
/* harmony export */ });
class CustMemberContentJto {
  constructor() {
    this.education = '';
    this.experience = '';
    this.currJob = '';
  }
}

/***/ }),

/***/ 98034:
/*!************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgContentJto: () => (/* reexport safe */ _app_news_msg_content_jto__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgContentJto),
/* harmony export */   CampaignContentJto: () => (/* reexport safe */ _campaign_content_jto__WEBPACK_IMPORTED_MODULE_1__.CampaignContentJto),
/* harmony export */   CustGroupContentJto: () => (/* reexport safe */ _cust_group_content_jto__WEBPACK_IMPORTED_MODULE_2__.CustGroupContentJto),
/* harmony export */   CustMemberContentJto: () => (/* reexport safe */ _cust_member_content_jto__WEBPACK_IMPORTED_MODULE_3__.CustMemberContentJto),
/* harmony export */   OrgAboutJto: () => (/* reexport safe */ _org_about_jto__WEBPACK_IMPORTED_MODULE_4__.OrgAboutJto),
/* harmony export */   OrgContactJto: () => (/* reexport safe */ _org_contact_jto__WEBPACK_IMPORTED_MODULE_5__.OrgContactJto),
/* harmony export */   WebPolicyJto: () => (/* reexport safe */ _web_policy_jto__WEBPACK_IMPORTED_MODULE_6__.WebPolicyJto)
/* harmony export */ });
/* harmony import */ var _app_news_msg_content_jto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-news-msg-content-jto */ 16795);
/* harmony import */ var _campaign_content_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-content-jto */ 61408);
/* harmony import */ var _cust_group_content_jto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cust-group-content-jto */ 95839);
/* harmony import */ var _cust_member_content_jto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cust-member-content-jto */ 23272);
/* harmony import */ var _org_about_jto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./org-about-jto */ 80118);
/* harmony import */ var _org_contact_jto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./org-contact-jto */ 26027);
/* harmony import */ var _web_policy_jto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-policy-jto */ 88153);








/***/ }),

/***/ 80118:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/org-about-jto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgAboutJto: () => (/* binding */ OrgAboutJto)
/* harmony export */ });
class OrgAboutJto {
  constructor() {
    this.charter = null;
  }
}

/***/ }),

/***/ 26027:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/org-contact-jto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgContactJto: () => (/* binding */ OrgContactJto)
/* harmony export */ });
class OrgContactJto {
  constructor() {
    this.contactDetails = [];
    this.socialMedia = [];
  }
}

/***/ }),

/***/ 88153:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/web-policy-jto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebPolicyJto: () => (/* binding */ WebPolicyJto)
/* harmony export */ });
class WebPolicyJto {
  constructor() {
    this.terms = null;
    this.privacy = null;
  }
}

/***/ }),

/***/ 73492:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-admin-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminReq: () => (/* binding */ AppAdminReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppAdminReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 48663:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-news-msg-cat-req.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCatReq: () => (/* binding */ AppNewsMsgCatReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppNewsMsgCatReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 76034:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-news-msg-req.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgReq: () => (/* binding */ AppNewsMsgReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppNewsMsgReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.catId = 0;
    this.uniqueId = null;
    this.takeCount = takeCount;
  }
}

/***/ }),

/***/ 37081:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-role-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleReq: () => (/* binding */ AppRoleReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppRoleReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appPfm = '';
  }
}

/***/ }),

/***/ 75321:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-role-route-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRouteReq: () => (/* binding */ AppRoleRouteReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppRoleRouteReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appRoleId = 0;
    this.appRouteId = 0;
  }
}

/***/ }),

/***/ 92034:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-route-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteReq: () => (/* binding */ AppRouteReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppRouteReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.parentId = 0;
    this.appPfm = null;
  }
}

/***/ }),

/***/ 14478:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-user-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserReq: () => (/* binding */ AppUserReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppUserReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.account = '';
    this.appPfm = '';
  }
}

/***/ }),

/***/ 98705:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-user-role-req.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRoleReq: () => (/* binding */ AppUserRoleReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class AppUserRoleReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appRoleId = 0;
    this.appPfm = null;
  }
}

/***/ }),

/***/ 81337:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/banner-ad-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAdReq: () => (/* binding */ BannerAdReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class BannerAdReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.takeCount = takeCount;
  }
}

/***/ }),

/***/ 61049:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/campaign-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignReq: () => (/* binding */ CampaignReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class CampaignReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.regActiveAt = null;
  }
}

/***/ }),

/***/ 86715:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/change-password-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordReq: () => (/* binding */ ChangePasswordReq)
/* harmony export */ });
class ChangePasswordReq {
  constructor() {
    this.appUserId = 0;
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}

/***/ }),

/***/ 94526:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-group-req.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupReq: () => (/* binding */ CustGroupReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class CustGroupReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserStatus = 0;
    this.custId = 0;
    this.custStatus = 0;
    this.taxId = null;
  }
}

/***/ }),

/***/ 16161:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-member-req.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberReq: () => (/* binding */ CustMemberReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class CustMemberReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserStatus = 0;
    this.custId = 0;
    this.custStatus = 0;
    this.idNo = null;
  }
}

/***/ }),

/***/ 21119:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/customer-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerReq: () => (/* binding */ CustomerReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class CustomerReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 10356:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/forget-password-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetPasswordReq: () => (/* binding */ ForgetPasswordReq)
/* harmony export */ });
class ForgetPasswordReq {
  constructor() {
    this.appPfm = '';
    this.account = '';
  }
}

/***/ }),

/***/ 93808:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/requests/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminReq: () => (/* reexport safe */ _app_admin_req__WEBPACK_IMPORTED_MODULE_0__.AppAdminReq),
/* harmony export */   AppNewsMsgCatReq: () => (/* reexport safe */ _app_news_msg_cat_req__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatReq),
/* harmony export */   AppNewsMsgReq: () => (/* reexport safe */ _app_news_msg_req__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgReq),
/* harmony export */   AppRoleReq: () => (/* reexport safe */ _app_role_req__WEBPACK_IMPORTED_MODULE_3__.AppRoleReq),
/* harmony export */   AppRoleRouteReq: () => (/* reexport safe */ _app_role_route_req__WEBPACK_IMPORTED_MODULE_4__.AppRoleRouteReq),
/* harmony export */   AppRouteReq: () => (/* reexport safe */ _app_route_req__WEBPACK_IMPORTED_MODULE_5__.AppRouteReq),
/* harmony export */   AppUserReq: () => (/* reexport safe */ _app_user_req__WEBPACK_IMPORTED_MODULE_6__.AppUserReq),
/* harmony export */   AppUserRoleReq: () => (/* reexport safe */ _app_user_role_req__WEBPACK_IMPORTED_MODULE_7__.AppUserRoleReq),
/* harmony export */   BannerAdReq: () => (/* reexport safe */ _banner_ad_req__WEBPACK_IMPORTED_MODULE_8__.BannerAdReq),
/* harmony export */   CampaignReq: () => (/* reexport safe */ _campaign_req__WEBPACK_IMPORTED_MODULE_9__.CampaignReq),
/* harmony export */   ChangePasswordReq: () => (/* reexport safe */ _change_password_req__WEBPACK_IMPORTED_MODULE_10__.ChangePasswordReq),
/* harmony export */   CustGroupReq: () => (/* reexport safe */ _cust_group_req__WEBPACK_IMPORTED_MODULE_11__.CustGroupReq),
/* harmony export */   CustMemberReq: () => (/* reexport safe */ _cust_member_req__WEBPACK_IMPORTED_MODULE_12__.CustMemberReq),
/* harmony export */   CustomerReq: () => (/* reexport safe */ _customer_req__WEBPACK_IMPORTED_MODULE_13__.CustomerReq),
/* harmony export */   ForgetPasswordReq: () => (/* reexport safe */ _forget_password_req__WEBPACK_IMPORTED_MODULE_14__.ForgetPasswordReq),
/* harmony export */   ResetPasswordReq: () => (/* reexport safe */ _reset_password_req__WEBPACK_IMPORTED_MODULE_15__.ResetPasswordReq),
/* harmony export */   SigninReq: () => (/* reexport safe */ _signin_req__WEBPACK_IMPORTED_MODULE_16__.SigninReq),
/* harmony export */   UploadFormReq: () => (/* reexport safe */ _upload_form_req__WEBPACK_IMPORTED_MODULE_17__.UploadFormReq),
/* harmony export */   ZipCodeReq: () => (/* reexport safe */ _zip_code_req__WEBPACK_IMPORTED_MODULE_18__.ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _app_admin_req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-req */ 73492);
/* harmony import */ var _app_news_msg_cat_req__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news-msg-cat-req */ 48663);
/* harmony import */ var _app_news_msg_req__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-req */ 76034);
/* harmony import */ var _app_role_req__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role-req */ 37081);
/* harmony import */ var _app_role_route_req__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role-route-req */ 75321);
/* harmony import */ var _app_route_req__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route-req */ 92034);
/* harmony import */ var _app_user_req__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-req */ 14478);
/* harmony import */ var _app_user_role_req__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-role-req */ 98705);
/* harmony import */ var _banner_ad_req__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-ad-req */ 81337);
/* harmony import */ var _campaign_req__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campaign-req */ 61049);
/* harmony import */ var _change_password_req__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password-req */ 86715);
/* harmony import */ var _cust_group_req__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cust-group-req */ 94526);
/* harmony import */ var _cust_member_req__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cust-member-req */ 16161);
/* harmony import */ var _customer_req__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-req */ 21119);
/* harmony import */ var _forget_password_req__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forget-password-req */ 10356);
/* harmony import */ var _reset_password_req__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reset-password-req */ 10676);
/* harmony import */ var _signin_req__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signin-req */ 69949);
/* harmony import */ var _upload_form_req__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload-form-req */ 9923);
/* harmony import */ var _zip_code_req__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zip-code-req */ 8832);




















/***/ }),

/***/ 10676:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/reset-password-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordReq: () => (/* binding */ ResetPasswordReq)
/* harmony export */ });
class ResetPasswordReq {
  constructor() {
    this.appUserId = 0;
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}

/***/ }),

/***/ 69949:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/signin-req.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninReq: () => (/* binding */ SigninReq)
/* harmony export */ });
class SigninReq {
  constructor() {
    this.account = '';
    this.password = '';
    this.appPfm = '';
  }
}

/***/ }),

/***/ 9923:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/upload-form-req.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFormReq: () => (/* binding */ UploadFormReq)
/* harmony export */ });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ 14419);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);

class UploadFormReq extends form_data__WEBPACK_IMPORTED_MODULE_0__ {
  constructor() {
    super();
    this.jsonContent = null;
  }
}

/***/ }),

/***/ 8832:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/zip-code-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeReq: () => (/* binding */ ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 17019);

class ZipCodeReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.version = 3;
    this.code = null;
  }
}

/***/ }),

/***/ 73502:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/shared/app-env.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64525:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/app-token-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTokenInfo: () => (/* binding */ AppTokenInfo)
/* harmony export */ });
class AppTokenInfo {
  constructor() {
    this.appUserName = '';
    this.accessToken = '';
  }
}

/***/ }),

/***/ 95650:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/auth-user-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthUserInfo: () => (/* binding */ AuthUserInfo)
/* harmony export */ });
class AuthUserInfo {
  constructor() {
    this.appPfm = '';
    this.appUserId = 0;
    this.adminId = 0;
    this.custId = 0;
    this.account = '';
    this.passwordExpAt = null;
    this.avatarAttId = null;
    this.name = '';
    this.status = 0;
    this.authUserRoutes = null;
  }
}

/***/ }),

/***/ 75301:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/auth-user-route.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthUserRoute: () => (/* binding */ AuthUserRoute)
/* harmony export */ });
class AuthUserRoute {
  constructor() {
    this.appPfm = '';
    this.appUserId = 0;
    this.id = 0;
    this.parentId = 0;
    this.name = '';
    this.icon = null;
    this.path = null;
    this.sort = 0;
  }
}

/***/ }),

/***/ 14396:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/entity-base.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityBase: () => (/* binding */ EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* binding */ EntityBaseStatuses)
/* harmony export */ });
class EntityBase {
  constructor() {
    this.crtBy = 0;
    this.crtAt = new Date();
    this.updBy = 0;
    this.updAt = new Date();
    this.delAt = new Date('2999-12-31T00:00:00.000Z');
  }
}
var EntityBaseStatuses;
(function (EntityBaseStatuses) {
  EntityBaseStatuses[EntityBaseStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  EntityBaseStatuses[EntityBaseStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(EntityBaseStatuses || (EntityBaseStatuses = {}));

/***/ }),

/***/ 17019:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/models/shared/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTokenInfo: () => (/* reexport safe */ _app_token_info__WEBPACK_IMPORTED_MODULE_1__.AppTokenInfo),
/* harmony export */   AuthUserInfo: () => (/* reexport safe */ _auth_user_info__WEBPACK_IMPORTED_MODULE_2__.AuthUserInfo),
/* harmony export */   AuthUserRoute: () => (/* reexport safe */ _auth_user_route__WEBPACK_IMPORTED_MODULE_3__.AuthUserRoute),
/* harmony export */   EntityBase: () => (/* reexport safe */ _entity_base__WEBPACK_IMPORTED_MODULE_4__.EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* reexport safe */ _entity_base__WEBPACK_IMPORTED_MODULE_4__.EntityBaseStatuses),
/* harmony export */   PagingRequest: () => (/* reexport safe */ _paging_request__WEBPACK_IMPORTED_MODULE_5__.PagingRequest),
/* harmony export */   PagingResponse: () => (/* reexport safe */ _paging_response__WEBPACK_IMPORTED_MODULE_6__.PagingResponse),
/* harmony export */   QueryRequestBase: () => (/* reexport safe */ _query_request_base__WEBPACK_IMPORTED_MODULE_7__.QueryRequestBase)
/* harmony export */ });
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-env */ 73502);
/* harmony import */ var _app_token_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-token-info */ 64525);
/* harmony import */ var _auth_user_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-user-info */ 95650);
/* harmony import */ var _auth_user_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-user-route */ 75301);
/* harmony import */ var _entity_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-base */ 14396);
/* harmony import */ var _paging_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paging-request */ 56359);
/* harmony import */ var _paging_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paging-response */ 87499);
/* harmony import */ var _query_request_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./query-request-base */ 65353);
/* harmony import */ var _value_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./value-info */ 13775);










/***/ }),

/***/ 56359:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/paging-request.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingRequest: () => (/* binding */ PagingRequest)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 82407);

class PagingRequest {
  constructor() {
    this.queryRequest = {};
    this.pageIndex = _consts__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_INDEX;
    this.pageSize = _consts__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_SIZE;
  }
}

/***/ }),

/***/ 87499:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/paging-response.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingResponse: () => (/* binding */ PagingResponse)
/* harmony export */ });
class PagingResponse {
  constructor() {
    this.rows = [];
    this.totalCount = 0;
    this.pageIndex = 0;
    this.pageSize = 0;
    this.totalPages = 0;
    this.hasPreviousPage = false;
    this.hasNextPage = false;
  }
}

/***/ }),

/***/ 65353:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/query-request-base.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryRequestBase: () => (/* binding */ QueryRequestBase)
/* harmony export */ });
class QueryRequestBase {
  constructor() {
    this.id = 0;
    this.type = 0;
    this.status = 0;
    this.startStatus = 0;
    this.endStatus = 0;
    this.activeAt = null;
    this.startAt = null;
    this.endAt = null;
    this.startTimeAt = null;
    this.endTimeAt = null;
    this.takeCount = 0;
    this.queryString = null;
    this.isShowContent = false;
  }
}

/***/ }),

/***/ 13775:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/shared/value-info.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 39083:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-admin-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8590:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-news-msg-cat-view.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 72033:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-news-msg-view.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 70504:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-role-route-view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 44008:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-role-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9793:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-route-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5664:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-user-role-view.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 78101:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-user-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 22600:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/banner-ad-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 23208:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/campaign-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 90789:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-group-view.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 93104:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-member-view.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 23062:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/customer-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 14304:
/*!*************************************************!*\
  !*** ./libs/core/src/lib/models/views/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_admin_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-view */ 39083);
/* harmony import */ var _app_news_msg_cat_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news-msg-cat-view */ 8590);
/* harmony import */ var _app_news_msg_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-view */ 72033);
/* harmony import */ var _app_role_route_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role-route-view */ 70504);
/* harmony import */ var _app_role_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role-view */ 44008);
/* harmony import */ var _app_route_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route-view */ 9793);
/* harmony import */ var _app_user_role_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-role-view */ 5664);
/* harmony import */ var _app_user_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-view */ 78101);
/* harmony import */ var _banner_ad_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-ad-view */ 22600);
/* harmony import */ var _campaign_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campaign-view */ 23208);
/* harmony import */ var _cust_group_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cust-group-view */ 90789);
/* harmony import */ var _cust_member_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cust-member-view */ 93104);
/* harmony import */ var _customer_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-view */ 23062);
/* harmony import */ var _zip_code_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zip-code-view */ 8447);















/***/ }),

/***/ 8447:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/zip-code-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 76778:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/services/app-attach.api.serv.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAttachApiServ: () => (/* binding */ AppAttachApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 56476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33443);


// Custom packages



class AppAttachApiServ {
  constructor(appEnv, http) {
    this.appEnv = appEnv;
    this.http = http;
    this.baseUrl = '/AppAttach';
  }
  //#region Shared
  uploadCdnFiles(request) {
    return this.http.post(`${this.baseUrl}/UploadCdnFiles`, request);
  }
  //#endregion
  //#region AppFileAtt
  downloadAppFileAtt(id) {
    return this.http.get(`${this.appEnv.downloadUrl}/${id}`, {
      responseType: 'blob'
    });
  }
  getAppFileAttObjectUrl(id) {
    return this.downloadAppFileAtt(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => URL.createObjectURL(res)));
  }
  static {
    this.ɵfac = function AppAttachApiServ_Factory(t) {
      return new (t || AppAttachApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AppAttachApiServ,
      factory: AppAttachApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 78279:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-auth.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthApiServ: () => (/* binding */ AppAuthApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 40600);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 56476);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 91096);




// Custom packages
// import { StoreService } from 'src/app/services/store.service';






class AppAuthApiServ {
  constructor(appEnv, http, storeServ, permissionServ, router) {
    this.appEnv = appEnv;
    this.http = http;
    this.storeServ = storeServ;
    this.permissionServ = permissionServ;
    this.router = router;
    this.baseUrl = '/AppAuth';
    this.currToken = null;
    this.currUser = null;
    this.getCurrUser();
  }
  get isSignin() {
    if (this.hasAccessToken) {
      return true;
    }
    return false;
  }
  get hasAccessToken() {
    const tokenStr = this.getAccessToken()?.accessToken;
    if (!tokenStr || tokenStr.length <= 0) {
      return false;
    }
    return true;
  }
  signin(request) {
    let reqUrl = '';
    switch (this.appEnv.appPfm) {
      case 'WEB':
        {
          reqUrl = `${this.baseUrl}/SigninWEB`;
          break;
        }
      case 'CMS':
        {
          reqUrl = `${this.baseUrl}/SigninCMS`;
          break;
        }
      default:
        {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('無法取得有效的登入平台來源。'));
        }
    }
    return this.http.put(reqUrl, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(tokenInfo => {
      if (!tokenInfo || !tokenInfo?.accessToken) {
        return null;
      }
      this.currToken = tokenInfo;
      this.setAppTokenToStorage();
      return this.currToken;
    }));
  }
  signout(isNavigateSignin = true) {
    this.currToken = null;
    this.currUser = null;
    this.removeUserToStorage();
    this.storeServ.initCurrAuthUserCache();
    if (isNavigateSignin) {
      this.router.navigate(['auth/signin']);
    }
  }
  getCurrUser(isRefresh = false) {
    const tokenStr = this.getAccessToken()?.accessToken;
    if (!tokenStr || tokenStr.length <= 0) {
      this.currUser = null;
      return this.currUser;
    }
    if (isRefresh) {
      this.currUser = null;
    }
    if (!this.currUser && typeof window !== 'undefined') {
      this.getAuthUserFromStorage();
    }
    // 權限清單更新，搭配Pipe使用
    this.permissionServ.setAuthRoutes(this.currUser?.authUserRoutes || []);
    return this.currUser;
  }
  getAccessToken() {
    if (!this.currToken && typeof window !== 'undefined') {
      this.getAppTokenFromStorage();
    }
    return this.currToken;
  }
  getAppTokenFromStorage() {
    if (typeof window === 'undefined') {
      return null;
    }
    const tokenInfo = window.localStorage.getItem(this.appEnv.storageTokenName);
    if (!tokenInfo) {
      return null;
    }
    this.currToken = JSON.parse(tokenInfo);
    return this.currToken;
  }
  getAuthUserFromStorage() {
    if (typeof window === 'undefined') {
      return null;
    }
    const userInfo = window.sessionStorage.getItem(this.appEnv.storageAuthUserName);
    if (!userInfo) {
      return null;
    }
    this.currUser = JSON.parse(userInfo);
    return this.currUser;
  }
  setAppTokenToStorage() {
    if (typeof window === 'undefined') {
      return;
    }
    this.removeUserToStorage();
    window.localStorage.setItem(this.appEnv.storageTokenName, JSON.stringify(this.currToken));
  }
  removeUserToStorage() {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.removeItem(this.appEnv.storageTokenName);
    window.sessionStorage.removeItem(this.appEnv.storageAuthUserName);
  }
  static {
    this.ɵfac = function AppAuthApiServ_Factory(t) {
      return new (t || AppAuthApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.StoreServ), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.PermissionServ), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AppAuthApiServ,
      factory: AppAuthApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 76550:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/app-msg.api.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMsgApiServ: () => (/* binding */ AppMsgApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 53235);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33443);

// Third party packages

// Custom packages



class AppMsgApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppMsg';
    this.appNewsMsgCatStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses;
    this.appNewsMsgCatStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses);
    this.appNewsMsgStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses;
    this.appNewsMsgStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses);
    this.bannerAdStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses;
    this.bannerAdStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses);
  }
  //#region AppNewsMsgCat
  getAppNewsMsgCatStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses.停用,
      style: 'error'
    }];
  }
  getAppNewsMsgCatDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgCatDtoById/${id}`);
  }
  getAppNewsMsgCatViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgCatViewById/${id}`);
  }
  getAppNewsMsgCatViewByUniqueId(uniqueId) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgCatViewByUniqueId/${uniqueId}`);
  }
  getAppNewsMsgCatViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatReq()) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgCatViews`, request);
  }
  getAppNewsMsgCatViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgCatViewsPaging`, request);
  }
  disableAppNewsMsgCat(id) {
    return this.http.put(`${this.baseUrl}/DisableAppNewsMsgCat/${id}`, null);
  }
  enableAppNewsMsgCat(id) {
    return this.http.put(`${this.baseUrl}/EnableAppNewsMsgCat/${id}`, null);
  }
  setAppNewsMsgCatDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppNewsMsgCatDto`, request);
  }
  //#endregion
  //#region AppNewsMsg
  getAppNewsMsgStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '發佈',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses.發佈,
      style: 'success'
    }, {
      name: '下架',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses.下架,
      style: 'error'
    }];
  }
  getAppNewsMsgDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgDtoById/${id}`);
  }
  getAppNewsMsgViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgViewById/${id}`);
  }
  getAppNewsMsgViewByUniqueId(uniqueId) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgViewByUniqueId/${uniqueId}`);
  }
  getAppNewsMsgViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgReq(5)) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgViews`, request);
  }
  getAppNewsMsgViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgViewsPaging`, request);
  }
  disableAppNewsMsg(id) {
    return this.http.put(`${this.baseUrl}/DisableAppNewsMsg/${id}`, null);
  }
  enableAppNewsMsg(id) {
    return this.http.put(`${this.baseUrl}/EnableAppNewsMsg/${id}`, null);
  }
  setAppNewsMsgDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppNewsMsgDto`, request);
  }
  //#endregion
  //#region BannerAd
  getBannerAdStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '發佈',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses.發佈,
      style: 'success'
    }, {
      name: '下架',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses.下架,
      style: 'error'
    }];
  }
  getBannerAdDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetBannerAdDtoById/${id}`);
  }
  getBannerAdViewById(id) {
    return this.http.get(`${this.baseUrl}/GetBannerAdViewById/${id}`);
  }
  getBannerAdViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdReq()) {
    return this.http.put(`${this.baseUrl}/GetBannerAdViews`, request);
  }
  getBannerAdViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetBannerAdViewsPaging`, request);
  }
  disableBannerAd(id) {
    return this.http.put(`${this.baseUrl}/DisableBannerAd/${id}`, null);
  }
  enableBannerAd(id) {
    return this.http.put(`${this.baseUrl}/EnableBannerAd/${id}`, null);
  }
  uploadBannerAdDto(request) {
    return this.http.post(`${this.baseUrl}/UploadBannerAdDto`, request);
  }
  static {
    this.ɵfac = function AppMsgApiServ_Factory(t) {
      return new (t || AppMsgApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AppMsgApiServ,
      factory: AppMsgApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 38745:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-role.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleApiServ: () => (/* binding */ AppRoleApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 53235);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33443);


// Thired party packages

// Custom packages



class AppRoleApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppRole';
    this.appRoleStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses);
  }
  //#region AppRole
  getAppRoleStatuses() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses));
  }
  getAppRoleStatusInfos() {
    const infos = [{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses.停用,
      style: 'error'
    }];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(infos);
  }
  getAppRoleDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppRoleDtoById/${id}`);
  }
  getAppRoleViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppRoleViewById/${id}`);
  }
  getAppRoleViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppRoleReq()) {
    return this.http.put(`${this.baseUrl}/GetAppRoleViews`, request);
  }
  getAppRoleViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppRoleViewsPaging`, request);
  }
  setAppRoleDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppRoleDto`, request);
  }
  //#endregion
  //#region AppRoute
  getActiveAppRouteViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppRouteReq()) {
    return this.http.put(`${this.baseUrl}/GetActiveAppRouteViews`, request);
  }
  //#endregion
  //#region AppUserRole
  getAppUserRoleDtosByAppUserId(appUserId) {
    return this.http.get(`${this.baseUrl}/GetAppUserRoleDtosByAppUserId/${appUserId}`);
  }
  setAppUserRoleDtos(request) {
    return this.http.post(`${this.baseUrl}/SetAppUserRoleDtos`, request);
  }
  static {
    this.ɵfac = function AppRoleApiServ_Factory(t) {
      return new (t || AppRoleApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AppRoleApiServ,
      factory: AppRoleApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 56526:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/services/app-store.api.serv.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStoreApiServ: () => (/* binding */ AppStoreApiServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 33443);



class AppStoreApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppStore';
  }
  //#region AppObjectStore
  getAppObjectStoreValueByCode(code) {
    return this.http.get(`${this.baseUrl}/GetAppObjectStoreValueByCode/${code}`);
  }
  getAppObjectStoreByCode(code) {
    return this.http.get(`${this.baseUrl}/GetAppObjectStoreByCode/${code}`);
  }
  setAppObjectStore(request) {
    return this.http.post(`${this.baseUrl}/SetAppObjectStore`, request);
  }
  static {
    this.ɵfac = function AppStoreApiServ_Factory(t) {
      return new (t || AppStoreApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppStoreApiServ,
      factory: AppStoreApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9112:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-user.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserApiServ: () => (/* binding */ AppUserApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! enum-values */ 53235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33443);


// Custom packages

// Third party packages



class AppUserApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppUser';
    this.appUserStatuses = _models__WEBPACK_IMPORTED_MODULE_0__.AppUserStatuses;
    this.appUserStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_1__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_0__.AppUserStatuses);
  }
  //#region AppAdmin
  getCurrAppAdminDto() {
    return this.http.get(`${this.baseUrl}/GetCurrAppAdminDto`);
  }
  getCurrAppAdminView() {
    return this.http.get(`${this.baseUrl}/GetCurrAppAdminView`);
  }
  getAppAdminDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppAdminDtoById/${id}`);
  }
  getAppAdminViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppAdminViewById/${id}`);
  }
  getAppAdminOptions(request) {
    return this.http.put(`${this.baseUrl}/GetAppAdminOptions`, request);
  }
  getAppAdminViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppAdminViewsPaging`, request);
  }
  setCurrAppAdminDto(request) {
    return this.http.post(`${this.baseUrl}/SetCurrAppAdminDto`, request);
  }
  setAppAdminDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppAdminDto`, request);
  }
  //#endregion
  //#region AppUser
  getAppUserStatuses() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(enum_values__WEBPACK_IMPORTED_MODULE_1__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_0__.AppUserStatuses));
  }
  getAppUserStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_0__.AppUserStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_0__.AppUserStatuses.停用,
      style: 'error'
    }]);
  }
  getCurrAuthUserInfo() {
    return this.http.get(`${this.baseUrl}/GetCurrAuthUserInfo`);
  }
  changeCurrAppUserPassword(request) {
    return this.http.post(`${this.baseUrl}/ChangeCurrAppUserPassword`, request);
  }
  deleteCurrAppUser() {
    return this.http.delete(`${this.baseUrl}/DeleteCurrAppUser`);
  }
  disableAppUser(id) {
    return this.http.put(`${this.baseUrl}/DisableAppUser/${id}`, null);
  }
  enableAppUser(id) {
    return this.http.put(`${this.baseUrl}/EnableAppUser/${id}`, null);
  }
  forgetPassword(request) {
    return this.http.put(`${this.baseUrl}/ForgetPassword`, request);
  }
  static {
    this.ɵfac = function AppUserApiServ_Factory(t) {
      return new (t || AppUserApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AppUserApiServ,
      factory: AppUserApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 41157:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/campaign.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignApiServ: () => (/* binding */ CampaignApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 53235);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33443);

// Thired party packages

// Custom packages



class CampaignApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/Campaign';
    this.campaignStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses;
    this.campaignStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses);
  }
  //#region Campaign
  getCampaignStatusInfos() {
    const infos = [{
      name: '尚未開放',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses.尚未開放,
      style: 'magenta'
    }, {
      name: '報名中',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses.報名中,
      style: 'green'
    }, {
      name: '候補中',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses.候補中,
      style: 'volcano'
    }, {
      name: '額滿',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses.額滿,
      style: 'orange'
    }, {
      name: '截止',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses.截止,
      style: 'purple'
    }, {
      name: '下架',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses.下架,
      style: 'red'
    }];
    return infos;
  }
  getCampaignDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetCampaignDtoById/${id}`);
  }
  getCampaignViewById(id) {
    return this.http.get(`${this.baseUrl}/GetCampaignViewById/${id}`);
  }
  getCampaignViewByUniqueId(uniqueId) {
    return this.http.get(`${this.baseUrl}/GetCampaignViewByUniqueId/${uniqueId}`);
  }
  getCampaignViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.CampaignReq()) {
    return this.http.put(`${this.baseUrl}/GetCampaignViews`, request);
  }
  getCampaignViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCampaignViewsPaging`, request);
  }
  disableCampaign(id) {
    return this.http.put(`${this.baseUrl}/DisableCampaign/${id}`, null);
  }
  enableCampaign(id) {
    return this.http.put(`${this.baseUrl}/EnableCampaign/${id}`, null);
  }
  setCampaignDto(request) {
    return this.http.post(`${this.baseUrl}/SetCampaignDto`, request);
  }
  static {
    this.ɵfac = function CampaignApiServ_Factory(t) {
      return new (t || CampaignApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CampaignApiServ,
      factory: CampaignApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 40558:
/*!*****************************************************!*\
  !*** ./libs/core/src/lib/services/cust.api.serv.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustApiServ: () => (/* binding */ CustApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 53235);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33443);

// Thired party packages

// Custom packages



class CustApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/Cust';
    this.customerStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses;
    this.customerStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses);
    this.customerTypes = _models__WEBPACK_IMPORTED_MODULE_1__.CustomerTypes;
    this.customerTypeOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CustomerTypes);
  }
  //#region Customer
  getCustomerStatusInfos() {
    const infos = [{
      name: '審核中',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses.審核中,
      style: 'magenta'
    }, {
      name: '正式會員',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses.正式會員,
      style: 'green'
    }, {
      name: '否決申請',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses.否決申請,
      style: 'orange'
    }, {
      name: '取消會藉',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustomerStatuses.取消會藉,
      style: 'red'
    }];
    return infos;
  }
  getCurrCustomerDto() {
    return this.http.get(`${this.baseUrl}/GetCurrCustomerDto`);
  }
  getCurrCustomerView() {
    return this.http.get(`${this.baseUrl}/GetCurrCustomerView`);
  }
  getCustomerDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetCustomerDtoById/${id}`);
  }
  getCustomerViewById(id) {
    return this.http.get(`${this.baseUrl}/GetCustomerViewById/${id}`);
  }
  getCustomerOptions(request) {
    return this.http.put(`${this.baseUrl}/GetCustomerOptions`, request);
  }
  getCustomerViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCustomerViewsPaging`, request);
  }
  setCurrCustomerDto(request) {
    return this.http.post(`${this.baseUrl}/SetCurrCustomerDto`, request);
  }
  setCustomerDto(request) {
    return this.http.post(`${this.baseUrl}/SetCustomerDto`, request);
  }
  signupCustomerDto(request) {
    return this.http.post(`${this.baseUrl}/SignupCustomerDto`, request);
  }
  uploadCurrCustomerDto(request) {
    return this.http.post(`${this.baseUrl}/UploadCurrCustomerDto`, request);
  }
  //#endregion
  //#region CustGroup
  getCustGroupViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCustGroupViewsPaging`, request);
  }
  //#endregion
  //#region CustMember
  getCustMemberViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCustMemberViewsPaging`, request);
  }
  static {
    this.ɵfac = function CustApiServ_Factory(t) {
      return new (t || CustApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CustApiServ,
      factory: CustApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 54935:
/*!*********************************************!*\
  !*** ./libs/core/src/lib/services/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAttachApiServ: () => (/* reexport safe */ _app_attach_api_serv__WEBPACK_IMPORTED_MODULE_0__.AppAttachApiServ),
/* harmony export */   AppAuthApiServ: () => (/* reexport safe */ _app_auth_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAuthApiServ),
/* harmony export */   AppMsgApiServ: () => (/* reexport safe */ _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_2__.AppMsgApiServ),
/* harmony export */   AppPfms: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__.AppPfms),
/* harmony export */   AppRoleApiServ: () => (/* reexport safe */ _app_role_api_serv__WEBPACK_IMPORTED_MODULE_3__.AppRoleApiServ),
/* harmony export */   AppStoreApiServ: () => (/* reexport safe */ _app_store_api_serv__WEBPACK_IMPORTED_MODULE_4__.AppStoreApiServ),
/* harmony export */   AppUserApiServ: () => (/* reexport safe */ _app_user_api_serv__WEBPACK_IMPORTED_MODULE_5__.AppUserApiServ),
/* harmony export */   CampaignApiServ: () => (/* reexport safe */ _campaign_api_serv__WEBPACK_IMPORTED_MODULE_6__.CampaignApiServ),
/* harmony export */   CustApiServ: () => (/* reexport safe */ _cust_api_serv__WEBPACK_IMPORTED_MODULE_7__.CustApiServ),
/* harmony export */   Genders: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__.Genders),
/* harmony export */   PermissionServ: () => (/* reexport safe */ _permission_serv__WEBPACK_IMPORTED_MODULE_8__.PermissionServ),
/* harmony export */   SharedDataServ: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__.SharedDataServ),
/* harmony export */   SharedFuncServ: () => (/* reexport safe */ _shared_func_serv__WEBPACK_IMPORTED_MODULE_10__.SharedFuncServ),
/* harmony export */   StoreServ: () => (/* reexport safe */ _store_serv__WEBPACK_IMPORTED_MODULE_11__.StoreServ)
/* harmony export */ });
/* harmony import */ var _app_attach_api_serv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-attach.api.serv */ 76778);
/* harmony import */ var _app_auth_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-auth.api.serv */ 78279);
/* harmony import */ var _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-msg.api.serv */ 76550);
/* harmony import */ var _app_role_api_serv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role.api.serv */ 38745);
/* harmony import */ var _app_store_api_serv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-store.api.serv */ 56526);
/* harmony import */ var _app_user_api_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-user.api.serv */ 9112);
/* harmony import */ var _campaign_api_serv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaign.api.serv */ 41157);
/* harmony import */ var _cust_api_serv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cust.api.serv */ 40558);
/* harmony import */ var _permission_serv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permission.serv */ 41316);
/* harmony import */ var _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-data.serv */ 28789);
/* harmony import */ var _shared_func_serv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-func.serv */ 4147);
/* harmony import */ var _store_serv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store.serv */ 68246);













/***/ }),

/***/ 41316:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/services/permission.serv.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionServ: () => (/* binding */ PermissionServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class PermissionServ {
  constructor() {
    this.authRoutes = [];
  }
  setAuthRoutes(routes) {
    this.authRoutes = routes;
  }
  hasRoutePath(path) {
    return this.authRoutes.some(route => route.path === path);
  }
  static {
    this.ɵfac = function PermissionServ_Factory(t) {
      return new (t || PermissionServ)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PermissionServ,
      factory: PermissionServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 86779:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/services/shared-data.api.serv.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedDataApiServ: () => (/* binding */ SharedDataApiServ)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33443);

// Custom packages



class SharedDataApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/SharedData';
  }
  //#region ZipCode
  getZipCodeViews(request = new _models__WEBPACK_IMPORTED_MODULE_0__.ZipCodeReq()) {
    return this.http.put(`${this.baseUrl}/GetZipCodeViews`, request);
  }
  static {
    this.ɵfac = function SharedDataApiServ_Factory(t) {
      return new (t || SharedDataApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SharedDataApiServ,
      factory: SharedDataApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 28789:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/shared-data.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPfms: () => (/* binding */ AppPfms),
/* harmony export */   Genders: () => (/* binding */ Genders),
/* harmony export */   SharedDataServ: () => (/* binding */ SharedDataServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 53235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);

// Thired party packages


class SharedDataServ {
  constructor() {
    this.appPfmOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(AppPfms);
    this.genderOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(Genders);
  }
  getAppPfms() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(AppPfms));
  }
  getGenders() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(Genders));
  }
  static {
    this.ɵfac = function SharedDataServ_Factory(t) {
      return new (t || SharedDataServ)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SharedDataServ,
      factory: SharedDataServ.ɵfac,
      providedIn: 'root'
    });
  }
}
var AppPfms;
(function (AppPfms) {
  AppPfms["WEB"] = "WEB";
  AppPfms["CMS"] = "CMS";
})(AppPfms || (AppPfms = {}));
var Genders;
(function (Genders) {
  Genders["\u7537"] = "M";
  Genders["\u5973"] = "F";
  Genders["\u975E\u4E8C\u5143\u6027\u5225"] = "N";
})(Genders || (Genders = {}));

/***/ }),

/***/ 4147:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/shared-func.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedFuncServ: () => (/* binding */ SharedFuncServ)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 26940);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 99987);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 36193);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 10178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);


// Thired party packages
class SharedFuncServ {
  doQueryTimeOptimize(request) {
    if (request.startTimeAt) {
      request.startAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(`${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(request.startAt || new Date(), 'yyyy-MM-dd')} ${request.startTimeAt}`);
    } else {
      if (request.startAt) {
        request.startAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfDay)(new Date(request.startAt || new Date()));
      }
    }
    if (request.endTimeAt) {
      request.endAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(`${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(request.endAt || new Date(), 'yyyy-MM-dd')} ${request.endTimeAt}:59`);
    } else {
      if (request.endAt) {
        request.endAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.endOfDay)(new Date(request.endAt || new Date()));
      }
    }
  }
  static {
    this.ɵfac = function SharedFuncServ_Factory(t) {
      return new (t || SharedFuncServ)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SharedFuncServ,
      factory: SharedFuncServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 68246:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/services/store.serv.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreServ: () => (/* binding */ StoreServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linqts */ 28780);
/* harmony import */ var _states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+states/curr-auth-user */ 8976);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ 96101);
/* harmony import */ var _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-msg.api.serv */ 76550);
/* harmony import */ var _app_role_api_serv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role.api.serv */ 38745);
/* harmony import */ var _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-data.api.serv */ 86779);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 42831);


// import { BehaviorSubject, Observable } from 'rxjs';
// Third party packages


// Custom packages







class StoreServ {
  constructor(currAuthUserStore) {
    this.currAuthUserStore = currAuthUserStore;
    // Injects
    this._appMsgApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_app_msg_api_serv__WEBPACK_IMPORTED_MODULE_3__.AppMsgApiServ);
    this._appRoleApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_app_role_api_serv__WEBPACK_IMPORTED_MODULE_4__.AppRoleApiServ);
    this._sharedDataApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_shared_data_api_serv__WEBPACK_IMPORTED_MODULE_5__.SharedDataApiServ);
    // BehaviorSubject caches
    // Caches
    this.currAuthUserLoading$ = this.currAuthUserStore.select(_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.getCurrAuthUserLoading);
    this.currAuthUserCache$ = this.currAuthUserStore.select(_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.getCurrAuthUserCache);
    this._appNewsMsgCatsCache = null;
    this._appRoutesCache = null;
    this._appRolesCache = null;
    this._zipCodesCache = null;
  }
  // CurrAuthUserStore
  initCurrAuthUserCache() {
    this.currAuthUserStore.dispatch((0,_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.initialCurrAuthUserAction)());
  }
  getCurrAuthUserCache() {
    this.currAuthUserStore.dispatch((0,_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.requestCurrAuthUserAction)());
  }
  // AppNewsMsgCat cache
  getAppNewsMsgCatsCache() {
    if (this._appNewsMsgCatsCache === null) {
      const req = new _models__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatReq();
      req.status = +_models__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatStatuses.啟用;
      return this._appMsgApiServ.getAppNewsMsgCatViews(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appNewsMsgCatsCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._appNewsMsgCatsCache);
  }
  resetAppNewsMsgCatsCache() {
    this._appNewsMsgCatsCache = null;
  }
  // AppRole cache
  getAppRolesCache() {
    if (this._appRolesCache === null) {
      return this._appRoleApiServ.getAppRoleViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appRolesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._appRolesCache);
  }
  resetAppRolesCache() {
    this._appRolesCache = null;
  }
  // AppRoute cache
  getAppRoutesCache() {
    if (this._appRoutesCache === null) {
      return this._appRoleApiServ.getActiveAppRouteViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appRoutesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._appRoutesCache);
  }
  resetAppRoutesCache() {
    this._appRoutesCache = null;
  }
  // ZipCode
  getZipCodesCache() {
    if (this._zipCodesCache === null) {
      return this._sharedDataApiServ.getZipCodeViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._zipCodesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._zipCodesCache);
  }
  getZipCodeText(zipCodeId) {
    if (!zipCodeId) {
      return '';
    }
    if (this._zipCodesCache === null) {
      return '';
    }
    const zipCodeView = new linqts__WEBPACK_IMPORTED_MODULE_0__.List(this._zipCodesCache).Where(w => w?.id === zipCodeId).FirstOrDefault();
    if (!zipCodeView) {
      return '';
    }
    return `(${zipCodeView.code})${zipCodeView.city}${zipCodeView.district}`;
  }
  static {
    this.ɵfac = function StoreServ_Factory(t) {
      return new (t || StoreServ)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: StoreServ,
      factory: StoreServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 18204:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-base.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDBaseComponent: () => (/* binding */ BBDBaseComponent)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33063);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 49989);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1351);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/notification */ 20813);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 23225);
/* harmony import */ var _extensions_array_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/array.extension */ 11275);
/* harmony import */ var _extensions_date_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/date.extension */ 50138);
/* harmony import */ var _extensions_string_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/string.extension */ 36303);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ 56476);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _bbd_notify_bbd_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbd-notify/bbd-notify.service */ 93927);
// Antd packages




// Third party packages

// Custom packages






class BBDBaseComponent {
  // Gets & Sets
  get isSignin() {
    return this.appAuthApiServ.isSignin;
  }
  get currAccessToken() {
    return this.appAuthApiServ.getAccessToken();
  }
  get currUserInfo() {
    return this.appAuthApiServ.getCurrUser();
  }
  constructor(injector) {
    this.injector = injector;
    this.formHelper = _helpers__WEBPACK_IMPORTED_MODULE_3__.FormHelper;
    this.dateHelper = _helpers__WEBPACK_IMPORTED_MODULE_3__.DateHelper;
    this.appEnv = injector.get(_helpers__WEBPACK_IMPORTED_MODULE_3__.APP_ENV);
    this.appAuthApiServ = injector.get(_services__WEBPACK_IMPORTED_MODULE_4__.AppAuthApiServ);
    this.drawerServ = injector.get(ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerService);
    this.messageServ = injector.get(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService);
    this.modalServ = injector.get(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService);
    this.notificationServ = injector.get(ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_9__.NzNotificationService);
    this.spinnerServ = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService);
    this.storeServ = injector.get(_services__WEBPACK_IMPORTED_MODULE_4__.StoreServ);
    this.bbdNotifyServ = injector.get(_bbd_notify_bbd_notify_service__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyService);
  }
  // Funcs
  combineDownloadAttUrl(attId) {
    return `${this.appEnv.apiServer}${this.appEnv.downloadUrl}/${attId}`;
  }
  combineCdnUrl(filePath) {
    if (!filePath || filePath.isUndefinedOrNullOrEmpty()) return '';
    return `${this.appEnv.cdnServer}${filePath.startsWith('/') ? '' : '/'}${filePath}`;
  }
}

/***/ }),

/***/ 19111:
/*!************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-confirm-dialog/bbd-confirm-dialog.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDConfirmDialogComponent: () => (/* binding */ BBDConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 86243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 92151);





function BBDConfirmDialogComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDConfirmDialogComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConfirm("confirmB"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.confirmTextB);
  }
}
class BBDConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onConfirm(confirmText = '') {
    if (!this.data.confirmText) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(confirmText ? confirmText : 'confirmA');
    }
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function BBDConfirmDialogComponent_Factory(t) {
      return new (t || BBDConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDConfirmDialogComponent,
      selectors: [["bbd-confirm-dialog"]],
      decls: 13,
      vars: 5,
      consts: [[1, "p-6", "text-center", "max-w-md", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "mx-auto", "mb-4", "text-red-500", "w-12", "h-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-600", "mb-6", "whitespace-pre-line"], [1, "flex", "justify-center", "space-x-4"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"]],
      template: function BBDConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDConfirmDialogComponent_Template_button_click_8_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDConfirmDialogComponent_Template_button_click_10_listener() {
            return ctx.onConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BBDConfirmDialogComponent_button_12_Template, 2, 1, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.content, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.cancelText || "\u53D6\u6D88");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.confirmText || "\u78BA\u5B9A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.confirmTextB);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 90345:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-file-upload/bbd-file-upload.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDFileUploadComponent: () => (/* binding */ BBDFileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 18516);
/* eslint-disable @typescript-eslint/no-explicit-any */



function BBDFileUploadComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8)(5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BBDFileUploadComponent_label_2_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function BBDFileUploadComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDFileUploadComponent_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.doOpenFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDFileUploadComponent_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fileName, " ");
  }
}
class BBDFileUploadComponent {
  constructor() {
    this.fileName = '下載檔案';
    this.selectedFile = null;
    this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileSelected.emit(file);
    }
  }
  doOpenFile() {
    if (!this.selectedFile) return;
    if (this.fileName) {
      const blobUrl = URL.createObjectURL(this.selectedFile);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = this.fileName;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } else {
      window.open(URL.createObjectURL(this.selectedFile), "_blank");
    }
  }
  remove() {
    this.selectedFile = null;
    this.fileName = '';
    this.fileSelected.emit(null);
  }
  static {
    this.ɵfac = function BBDFileUploadComponent_Factory(t) {
      return new (t || BBDFileUploadComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDFileUploadComponent,
      selectors: [["bbd-file-upload"]],
      inputs: {
        fileName: "fileName",
        selectedFile: "selectedFile"
      },
      outputs: {
        fileSelected: "fileSelected"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "space-y-4"], [1, "flex", "items-center", "w-full"], ["for", "bbd-file-upload", "class", "flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100", 4, "ngIf"], ["class", "mt-2 flex space-x-4", 4, "ngIf"], ["for", "bbd-file-upload", 1, "flex", "flex-col", "items-center", "justify-center", "w-full", "h-34", "border-2", "border-gray-300", "border-dashed", "rounded-lg", "cursor-pointer", "bg-gray-50", "hover:bg-gray-100"], [1, "flex", "flex-col", "items-center", "justify-center", "pt-5", "pb-6"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 20 16", 1, "w-8", "h-8", "mb-4", "text-gray-500"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"], [1, "mb-2", "text-sm", "text-gray-500"], [1, "font-semibold"], ["id", "bbd-file-upload", "type", "file", 1, "hidden", 3, "change"], [1, "mt-2", "flex", "space-x-4"], [1, "text-blue-600", "hover:underline", 3, "click"], [1, "bg-red-500", "text-white", "rounded-full", "w-5", "h-5", "flex", "items-center", "justify-center", "hover:bg-red-700", 3, "click"]],
      template: function BBDFileUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BBDFileUploadComponent_label_2_Template, 8, 0, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BBDFileUploadComponent_div_3_Template, 5, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 19059:
/*!********************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-image-upload/bbd-image-upload.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDImageUploadComponent: () => (/* binding */ BBDImageUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 89089);
/* harmony import */ var _pipes_file_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/file-url.pipe */ 65432);
/* eslint-disable @typescript-eslint/no-explicit-any */





function BBDImageUploadComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 3)(1, "div", 4)(2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " add_photo_alternate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BBDImageUploadComponent_label_1_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BBDImageUploadComponent_div_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BBDImageUploadComponent_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r5.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BBDImageUploadComponent_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "fileUrl");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r6.attId), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BBDImageUploadComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BBDImageUploadComponent_div_2_img_1_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BBDImageUploadComponent_div_2_img_2_Template, 2, 3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BBDImageUploadComponent_div_2_img_3_Template, 2, 3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BBDImageUploadComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedImage && !ctx_r1.attId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.attId > 0);
  }
}
class BBDImageUploadComponent {
  constructor() {
    this.imageUrl = null;
    this.attId = 0;
    this.imageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.selectedImage = null;
    this.file = null;
  }
  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.onload = () => this.selectedImage = reader.result;
      reader.readAsDataURL(file);
      this.imageSelected.emit(file);
    }
  }
  remove() {
    this.selectedImage = null;
    this.imageUrl = null;
    this.file = null;
    this.attId = 0;
    this.imageSelected.emit(null);
  }
  static {
    this.ɵfac = function BBDImageUploadComponent_Factory(t) {
      return new (t || BBDImageUploadComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BBDImageUploadComponent,
      selectors: [["bbd-image-upload"]],
      inputs: {
        imageUrl: "imageUrl",
        attId: "attId"
      },
      outputs: {
        imageSelected: "imageSelected"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "upload-img-label"], ["for", "bbd-image-upload", "class", "upload-img-label flex-auto", 4, "ngIf"], ["class", "uploaded-img aspect-[4/3]", 4, "ngIf"], ["for", "bbd-image-upload", 1, "upload-img-label", "flex-auto"], [1, "dash-hint", "aspect-[4/3]"], [1, "material-symbols-rounded"], ["id", "bbd-image-upload", "type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "uploaded-img", "aspect-[4/3]"], ["alt", "\u5716\u7247\u7E2E\u5716", "class", "rounded shadow", 3, "src", 4, "ngIf"], [1, "btn-ghost", 3, "click"], [1, "material-symbols-rounded", "pl-1"], ["alt", "\u5716\u7247\u7E2E\u5716", 1, "rounded", "shadow", 3, "src"]],
      template: function BBDImageUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BBDImageUploadComponent_label_1_Template, 7, 0, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BBDImageUploadComponent_div_2_Template, 7, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.selectedImage || ctx.imageUrl || ctx.attId));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedImage || ctx.imageUrl || ctx.attId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe, _pipes_file_url_pipe__WEBPACK_IMPORTED_MODULE_1__.FileUrlPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39853:
/*!******************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-img-native-upload/bbd-img-native-upload.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDImgNativeUploadComponent: () => (/* binding */ BBDImgNativeUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 18204);
/* harmony import */ var _services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-attach.api.serv */ 76778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 89089);
/* eslint-disable @typescript-eslint/no-explicit-any */








function BBDImgNativeUploadComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 2)(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BBDImgNativeUploadComponent_li_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onUploadFile($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 4)(3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u8ACB\u9078\u64C7\u5716\u7247\u6A94\u6848");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function BBDImgNativeUploadComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7)(1, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 14)(9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BBDImgNativeUploadComponent_li_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onDelAppFileAtt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("max-height", ctx_r1.maxImgHeight ? ctx_r1.maxImgHeight : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx_r1.previewSrc), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class BBDImgNativeUploadComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get attId() {
    return this._attId || 0;
  }
  set attId(value) {
    this._attId = value;
    this.propagateChange(this._attId);
    this._attIdChange.emit(this._attId);
  }
  constructor(appAttachApiServ, injector) {
    super(injector);
    this.appAttachApiServ = appAttachApiServ;
    this.injector = injector;
    this.previewSrc = '';
    // IOs
    this._attId = 0;
    this.maxImgHeight = '';
    this.isHighPixelImg = false;
    this._attIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.filesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.propagateChange = _ => {
      console.log();
    };
    this.propagateTouched = _ => {
      console.log();
    };
  }
  ngOnInit() {
    console.log();
  }
  writeValue(value) {
    if (value !== undefined) {
      this.attId = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUploadFile(target) {
    const files = target?.files;
    if (!files || files.length === 0) {
      this.bbdNotifyServ.warning('提示，您未選取要上傳的檔案。');
      return;
    }
    const formData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('file', files[0]);
    setTimeout(() => {
      if (files) {
        try {
          this.previewSrc = URL.createObjectURL(files[0]);
        } catch (e) {
          console.log(e.message);
        }
      }
    }, 200);
    this.filesChange.emit(files);
    // 臨時編號表示有上傳圖片
    this.attId = -1;
    this._attIdChange.emit(this._attId || 0);
  }
  onDelAppFileAtt() {
    this.attId = 0;
    this.previewSrc = '';
    this._attIdChange.emit(this._attId || 0);
    this.filesChange.emit(null);
  }
  static {
    this.ɵfac = function BBDImgNativeUploadComponent_Factory(t) {
      return new (t || BBDImgNativeUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAttachApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BBDImgNativeUploadComponent,
      selectors: [["bbd-img-native-upload"]],
      inputs: {
        previewSrc: "previewSrc",
        _attId: "_attId",
        files: "files",
        maxImgHeight: "maxImgHeight",
        isHighPixelImg: "isHighPixelImg"
      },
      outputs: {
        _attIdChange: "_attIdChange",
        filesChange: "filesChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => BBDImgNativeUploadComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [["matRipple", "", "class", "upload-img card card_lower", 4, "ngIf"], ["class", "card-basic mb-6", 4, "ngIf"], ["matRipple", "", 1, "upload-img", "card", "card_lower"], ["id", "upload-file", "type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["matRipple", "", "for", "upload-file", 1, "flex", "items-center", "flex-col", "justify-center", "w-full", "text-center", "border-4", "border-dashed", "border-gray-300", "rounded-lg", "py-6", "my-2", "text-gray-400"], [1, "material-icons-outlined", "w-36", "text-6xl"], [1, "font-medium", "text-lg"], [1, "card-basic", "mb-6"], ["tabindex", "0", 1, "group", "w-full", "h-full", "rounded-md", "focus:outline-none", "focus:shadow-outline", "elative", "bg-gray-100", "relative", "shadow-sm"], ["alt", "upload preview", 1, "img-preview", "w-full", "h-full", "sticky", "object-cover", "rounded-md", "bg-fixed", 3, "src"], [1, "flex", "flex-col", "rounded-md", "text-xs", "break-words", "w-full", "h-full", "z-20", "absolute", "top-0", "py-2", "px-3"], [1, "flex-1", "group-hover:text-blue-800"], [1, "flex"], [1, "p-1", "size", "text-xs", "text-gray-700"], [1, "delete", "ml-auto", "focus:outline-none", "hover:bg-gray-300", "p-1", "rounded-md", "text-gray-800"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "pointer-events-none", "fill-current", "w-4", "h-4", "ml-auto", "text-red-500"], ["d", "M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z", 1, "pointer-events-none"]],
      template: function BBDImgNativeUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BBDImgNativeUploadComponent_li_1_Template, 7, 0, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BBDImgNativeUploadComponent_li_2_Template, 12, 5, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.previewSrc);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.previewSrc);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeUrlPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80527:
/*!********************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyComponent: () => (/* binding */ BBDNotifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 41019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 18516);




class BBDNotifyComponent {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  static {
    this.ɵfac = function BBDNotifyComponent_Factory(t) {
      return new (t || BBDNotifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDNotifyComponent,
      selectors: [["bbd-notify"]],
      decls: 8,
      vars: 3,
      consts: [["role", "alert", 1, "flex", "items-center"], [1, "material-symbols-rounded", 3, "ngClass"], [1, "flex-auto", "pl-2", "truncate"], [1, "btn-ghost", "w-10", 3, "click"], [1, "material-symbols-rounded", "align-middle"]],
      template: function BBDNotifyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDNotifyComponent_Template_button_click_5_listener() {
            return ctx.snackBarRef.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.iconStyle || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icon || "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text || "", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: [".mat-snack-bar-container {\n  padding: 0px !important;\n  border-radius: 0.5rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2JiZC1ub3RpZnkvYmJkLW5vdGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFBQSxpQkFBQTtFQUFBLHNCQUFBO0VBQUEsNERBQUE7RUFBQSxrQkFBQTtFQUFBLDREQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIEBhcHBseSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgYmctc3RvbmUtNTA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 32718:
/*!*****************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyModule: () => (/* binding */ BBDNotifyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _bbd_notify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-notify.service */ 93927);
/* harmony import */ var _bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbd-notify.component */ 80527);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);





class BBDNotifyModule {
  static {
    this.ɵfac = function BBDNotifyModule_Factory(t) {
      return new (t || BBDNotifyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BBDNotifyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      providers: [_bbd_notify_service__WEBPACK_IMPORTED_MODULE_0__.BBDNotifyService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BBDNotifyModule, {
    declarations: [_bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__.BBDNotifyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule],
    exports: [_bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__.BBDNotifyComponent]
  });
})();

/***/ }),

/***/ 93927:
/*!******************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyService: () => (/* binding */ BBDNotifyService)
/* harmony export */ });
/* harmony import */ var _bbd_notify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-notify.component */ 80527);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 41019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);





class BBDNotifyService {
  constructor(snackbar) {
    this.snackbar = snackbar;
    this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarConfig();
    this.config.duration = 8000;
    this.config.verticalPosition = 'top';
  }
  open(text) {
    this.doShowLog(text);
    this.config.data = {
      text
    };
    this.openFromComponent();
  }
  success(text) {
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'check_circle',
      iconStyle: 'text-blue-500'
    };
    this.openFromComponent();
  }
  error(text, resMsg = null) {
    if (resMsg) {
      if (typeof resMsg === 'string') {
        text = `${text}「${resMsg}」`;
      } else {
        const errorMessage = resMsg?.errorMessage || resMsg?.error?.errorMessage;
        text = `${text} ${errorMessage ? '[' + errorMessage + ']' : ''}`;
      }
    }
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'cancel',
      iconStyle: 'text-red-500'
    };
    this.openFromComponent();
  }
  errorByFormValid(text, resMsg = null, controls = null) {
    if (controls) {
      Object.values(controls).forEach((control, index) => {
        if (!control.valid) {
          console.log(`請檢查必填欄位:${Object.keys(controls)[index]}`);
        }
      });
    }
    this.error(text, resMsg);
  }
  info(text) {
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'info',
      iconStyle: 'text-stone-500'
    };
    this.openFromComponent();
  }
  warning(text) {
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'warning',
      iconStyle: 'text-orange-500'
    };
    this.openFromComponent();
  }
  openFromComponent() {
    this.dialogRef = this.snackbar.openFromComponent(_bbd_notify_component__WEBPACK_IMPORTED_MODULE_0__.BBDNotifyComponent, this.config);
  }
  doShowLog(text) {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
      console.log(`BBDNotify:${new Date().toISOString()} - ${text}`);
    }
  }
  static {
    this.ɵfac = function BBDNotifyService_Factory(t) {
      return new (t || BBDNotifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BBDNotifyService,
      factory: BBDNotifyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 46793:
/*!**********************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* binding */ BBDQuillEditorViewerComponent)
/* harmony export */ });
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 18204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/safe-html.pipe */ 61467);





function BBDQuillEditorViewerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.content), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
class BBDQuillEditorViewerComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.content = '';
  }
  ngOnInit() {
    console.log();
  }
  static {
    this.ɵfac = function BBDQuillEditorViewerComponent_Factory(t) {
      return new (t || BBDQuillEditorViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BBDQuillEditorViewerComponent,
      selectors: [["bbd-quill-editor-viewer"]],
      inputs: {
        content: "content"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "ql-container ql-snow", "style", "border: none !important;", 4, "ngIf"], [1, "ql-container", "ql-snow", 2, "border", "none !important"], [1, "ql-editor", 3, "innerHTML"]],
      template: function BBDQuillEditorViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BBDQuillEditorViewerComponent_div_0_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.content);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe],
      styles: ["pdf-viewer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nquill-editor[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  padding: 0 0;\n  height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2JiZC1xdWlsbC1lZGl0b3Itdmlld2VyL2JiZC1xdWlsbC1lZGl0b3Itdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInBkZi12aWV3ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnF1aWxsLWVkaXRvciAuYW50LW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwIDA7XG4gIGhlaWdodDogODV2aDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 74103:
/*!********************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-quill-editor/bbd-quill-editor.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDQuillEditorComponent: () => (/* binding */ BBDQuillEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 18204);
/* harmony import */ var _services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-attach.api.serv */ 76778);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 40417);








const _c0 = function () {
  return {
    flex: "1 1 auto",
    "min-height": "150px"
  };
};
class BBDQuillEditorComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get content() {
    return this._content;
  }
  set content(value) {
    this._content = value;
    this.propagateChange(this._content);
    this._contentChange.emit(this._content);
  }
  constructor(appAttachApiServ, injector) {
    super(injector);
    this.appAttachApiServ = appAttachApiServ;
    this.injector = injector;
    this.placeholder = '請輸入內容';
    this.isUseLink = true;
    this.isUseImage = true;
    this.isUseVideo = true;
    this.formData = new FormData();
    // 樣式參考以下寫法才能完整正常運作
    // <div class="ql-container ql-snow" style="border: none !important;">
    //     <div class="ql-editor" [innerHTML]="(info.content || '{}' | jsonParse)?.desc | safeHtml">
    //     </div>
    // </div>
    this.quillConfig = {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote'], [{
        'header': 1
      }, {
        'header': 2
      }], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], [{
        'direction': 'rtl'
      }], [{
        'color': []
      }, {
        'background': []
      }], [{
        'size': ['small', false, 'large', 'huge']
      }], [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }], [{
        'font': []
      }], [{
        'align': []
      }], ['clean']
      // [this.isUseLink ? 'link' : '', 'image', 'video'],
      ]
    };
    // IOs
    this._content = '';
    this._contentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.propagateChange = _ => {
      console.log();
    };
    this.propagateTouched = _ => {
      console.log();
    };
  }
  ngOnInit() {
    console.log();
    if (this.quillConfig.toolbar) {
      const medias = [];
      if (this.isUseLink) {
        medias.push('link');
      }
      if (this.isUseImage) {
        medias.push('image');
      }
      if (this.isUseVideo) {
        medias.push('video');
      }
      if (medias.length) {
        this.quillConfig.toolbar.push(medias);
      }
    }
  }
  writeValue(value) {
    if (value !== undefined) {
      this._content = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }
  editorCreated(quill) {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
  }
  imageHandler() {
    const imageinput = document.createElement('input');
    imageinput.setAttribute('type', 'file');
    imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    imageinput.classList.add('ql-image');
    imageinput.addEventListener('change', () => {
      if (imageinput.files != null && imageinput.files[0] != null) {
        const formData = new FormData();
        Object.entries(this.formData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('file', (imageinput?.files || [])[0]);
        this.appAttachApiServ.uploadCdnFiles(formData).subscribe(res => {
          const range = this.editor.getSelection(true);
          const imageSrc = this.combineCdnUrl(res[0].fullPath);
          this.editor.insertEmbed(range.index, 'image', imageSrc);
        });
      }
    });
    imageinput.click();
  }
  static {
    this.ɵfac = function BBDQuillEditorComponent_Factory(t) {
      return new (t || BBDQuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAttachApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BBDQuillEditorComponent,
      selectors: [["bbd-quill-editor"]],
      inputs: {
        placeholder: "placeholder",
        isUseLink: "isUseLink",
        isUseImage: "isUseImage",
        isUseVideo: "isUseVideo",
        _content: "_content"
      },
      outputs: {
        _contentChange: "_contentChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => BBDQuillEditorComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 5,
      consts: [["trackChanges", "all", 1, "col-span-1", "w-full", 3, "ngModel", "styles", "modules", "placeholder", "ngModelChange", "onEditorCreated"]],
      template: function BBDQuillEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "quill-editor", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BBDQuillEditorComponent_Template_quill_editor_ngModelChange_0_listener($event) {
            return ctx.content = $event;
          })("onEditorCreated", function BBDQuillEditorComponent_Template_quill_editor_onEditorCreated_0_listener($event) {
            return ctx.editorCreated($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.content)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("modules", ctx.quillConfig)("placeholder", ctx.placeholder);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillEditorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 25391:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/shared/components/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDBaseComponent: () => (/* reexport safe */ _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent),
/* harmony export */   BBDConfirmDialogComponent: () => (/* reexport safe */ _bbd_confirm_dialog_bbd_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.BBDConfirmDialogComponent),
/* harmony export */   BBDFileUploadComponent: () => (/* reexport safe */ _bbd_file_upload_bbd_file_upload_component__WEBPACK_IMPORTED_MODULE_3__.BBDFileUploadComponent),
/* harmony export */   BBDImageUploadComponent: () => (/* reexport safe */ _bbd_image_upload_bbd_image_upload_component__WEBPACK_IMPORTED_MODULE_4__.BBDImageUploadComponent),
/* harmony export */   BBDImgNativeUploadComponent: () => (/* reexport safe */ _bbd_img_native_upload_bbd_img_native_upload_component__WEBPACK_IMPORTED_MODULE_5__.BBDImgNativeUploadComponent),
/* harmony export */   BBDQuillEditorComponent: () => (/* reexport safe */ _bbd_quill_editor_bbd_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent),
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* reexport safe */ _bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__.BBDQuillEditorViewerComponent)
/* harmony export */ });
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-base.component */ 18204);
/* harmony import */ var _bbd_quill_editor_bbd_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbd-quill-editor/bbd-quill-editor.component */ 74103);
/* harmony import */ var _bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 46793);
/* harmony import */ var _bbd_file_upload_bbd_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bbd-file-upload/bbd-file-upload.component */ 90345);
/* harmony import */ var _bbd_image_upload_bbd_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbd-image-upload/bbd-image-upload.component */ 19059);
/* harmony import */ var _bbd_img_native_upload_bbd_img_native_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbd-img-native-upload/bbd-img-native-upload.component */ 39853);
/* harmony import */ var _bbd_confirm_dialog_bbd_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bbd-confirm-dialog/bbd-confirm-dialog.component */ 19111);








/***/ }),

/***/ 91861:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/shared/controls/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-code-control/zip-code-control.component */ 33983);


/***/ }),

/***/ 33983:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/controls/zip-code-control/zip-code-control.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* binding */ ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _components_bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bbd-base.component */ 18204);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linqts */ 28780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 16111);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 56238);
/* harmony import */ var _pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/ary-filter.pipe */ 41575);
/* harmony import */ var _pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/ctrl-has-required.pipe */ 9162);
/* harmony import */ var _pipes_empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/empty-formatter.pipe */ 85722);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages












function ZipCodeControlComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4);
  }
}
function ZipCodeControlComponent_mat_error_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r6);
  }
}
function ZipCodeControlComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_8_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["city"].errors, "\u7E23\u5E02"));
  }
}
function ZipCodeControlComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r7.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", opt_r7.code, " - ", opt_r7.district, " ");
  }
}
function ZipCodeControlComponent_mat_error_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", msg_r9, " ");
  }
}
function ZipCodeControlComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_17_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["district"].errors, "\u9109\u93AE\u5340"));
  }
}
const _c0 = function (a1) {
  return {
    fieldName: "city",
    fieldValue: a1
  };
};
class ZipCodeControlComponent extends _components_bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get f() {
    return this.valForm.controls;
  }
  constructor(fb, injector) {
    super(injector);
    this.fb = fb;
    this.injector = injector;
    this.cities = [];
    this.districts = [];
    this.title = '';
    this.required = false;
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.getCaches();
  }
  ngOnInit() {
    console.log('init');
  }
  writeValue(value) {
    this.valForm = this.fb.group({
      id: [value],
      city: [null],
      district: [null]
    });
    this.doSetValidators();
    if (this.districts.length) {
      this.doReverseZipCodeId(value);
    } else {
      // 防止跟不上快取處理
      setTimeout(() => {
        this.doReverseZipCodeId(value);
      }, 100);
    }
    this.f['id'].valueChanges.subscribe(res => {
      this.onChange(res);
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  validate() {
    if (this.valForm.invalid) return {
      invalid: true
    };
    return null;
  }
  markAllAsTouched() {
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({
      emitEvent: false
    });
    this.onValidatorChange?.();
  }
  getCaches() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.storeServ.getZipCodesCache()]).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this.cities = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).DistinctBy(item => item.city).Select(item => item.city).ToArray();
        this.districts = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).Select(item => ({
          id: item.id,
          code: item.code,
          city: item.city,
          district: item.district
        })).ToArray();
      }
    });
  }
  doReverseZipCodeId(id) {
    if (id) {
      const twZipCode = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(this.districts).Where(w => w?.id === id).FirstOrDefault();
      this.f['city'].setValue(twZipCode?.city);
      this.f['district'].setValue(twZipCode?.district);
    }
  }
  doSetValidators() {
    if (this.required) {
      this.f['city'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
      this.f['district'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    } else {
      this.f['city'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.nullValidator);
      this.f['district'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.nullValidator);
    }
    this.f['city'].updateValueAndValidity();
    this.f['district'].updateValueAndValidity();
  }
  onDistrictSelectionChange(city, district, targetCtrl) {
    if (!city || !district) {
      return;
    }
    const dist = this.districts.find(item => item.city === city && item.district === district);
    if (!dist) {
      return;
    }
    targetCtrl.setValue(dist.id);
  }
  static {
    this.ɵfac = function ZipCodeControlComponent_Factory(t) {
      return new (t || ZipCodeControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ZipCodeControlComponent,
      selectors: [["bbd-zip-code-control"]],
      inputs: {
        title: "title",
        required: "required"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 18,
      vars: 24,
      consts: [[1, "grid", "grid-cols-12", "gap-x-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full", "col-span-full", "sm:col-span-6"], ["formControlName", "city", 3, "required", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs", 4, "ngIf"], ["formControlName", "district", 3, "required", "selectionChange"], [3, "value"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function ZipCodeControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "emptyFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_5_listener() {
            ctx.f["district"].setValue(null);
            return ctx.f["id"].setValue(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ZipCodeControlComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ZipCodeControlComponent_mat_error_8_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 1)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "emptyFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_13_listener() {
            return ctx.onDistrictSelectionChange(ctx.f["city"].value, ctx.f["district"].value, ctx.f["id"]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ZipCodeControlComponent_mat_option_15_Template, 2, 3, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "aryFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ZipCodeControlComponent_mat_error_17_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 9, ctx.title, ""), "\u7E23\u5E02");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 12, ctx.f["city"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cities);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["city"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 14, ctx.title, ""), "\u9109\u93AE\u5340");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 17, ctx.f["district"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 19, ctx.districts, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.f["city"].value)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["district"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.AryFilterPipe, _pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe, _pipes_empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 11275:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/array.extension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Array.prototype.isUndefinedOrNullOrEmpty = function () {
  if (!this) {
    return true;
  }
  if (this.length === 0) {
    return true;
  }
  return false;
};


/***/ }),

/***/ 50138:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/date.extension.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 36193);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 10178);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 99987);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 38174);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 26940);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 82407);
// date-fns packages

// Custom packages

Date.prototype.getStartOfDay = function () {
  if (!this) {
    return this;
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(this);
};
Date.prototype.getEndOfDay = function () {
  if (!this) {
    return this;
  }
  const d = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfDay)(this);
  d.setMilliseconds(0);
  return d;
};
Date.prototype.getAppMaxUtcDate = () => {
  return new Date(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT);
};
Date.prototype.getFormatString = function (dateFormat) {
  if (!this) {
    return '';
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(this, dateFormat);
};
Date.prototype.isMaxUtcDate = function () {
  if (!this) {
    return false;
  }
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isEqual)(this, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
    return true;
  }
  return false;
};

/***/ }),

/***/ 36303:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/string.extension.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
String.prototype.isUndefinedOrNullOrEmpty = function () {
  if (!this) {
    return true;
  }
  if (this.trim() === '') {
    return true;
  }
  return false;
};


/***/ }),

/***/ 46442:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/guards/app-auth.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthGuard: () => (/* binding */ AppAuthGuard)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 91096);

// Custom packages




class AppAuthGuard {
  constructor(appAuthApiServ, router) {
    this.appAuthApiServ = appAuthApiServ;
    this.router = router;
  }
  canActivate(next, state) {
    if (this.appAuthApiServ.isSignin !== true) {
      this.router.navigate(['auth/signin'], {
        queryParams: {
          next: state.url
        }
      });
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function AppAuthGuard_Factory(t) {
      return new (t || AppAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppAuthGuard,
      factory: AppAuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 34597:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/shared/guards/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthGuard: () => (/* reexport safe */ _app_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AppAuthGuard)
/* harmony export */ });
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-auth.guard */ 46442);


/***/ }),

/***/ 97091:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/app-env.helper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* binding */ APP_ENV),
/* harmony export */   AppEnvHelper: () => (/* binding */ AppEnvHelper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

const APP_ENV = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('app.env.token');
class AppEnvHelper {
  static {
    this.getValueProvider = value => ({
      provide: APP_ENV,
      useValue: value
    });
  }
}

/***/ }),

/***/ 70914:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/date.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateHelper: () => (/* binding */ DateHelper)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 38174);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 26940);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 99987);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 36193);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 82407);
// date-fns packages

// Custom packages

class DateHelper {
  static parseAppMaxUtcDateToNull(value) {
    if (!value) {
      return null;
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isEqual)(value, (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
      return null;
    }
    return value;
  }
  static parseNullToAppMaxUtcDate(value) {
    if (!value) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT);
    }
    return value;
  }
  static getDateAndTimeMerge(dateAt, timeAt) {
    if (!dateAt) {
      return dateAt || new Date();
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isEqual)(dateAt, (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
      return dateAt;
    }
    if (timeAt) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(`${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(dateAt || new Date(), 'yyyy-MM-dd')} ${timeAt}`);
    } else {
      if (dateAt) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfDay)(new Date(dateAt || new Date()));
      }
    }
    return dateAt;
  }
  static getHourMinute(value) {
    if (!value) {
      return '';
    }
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(value, "HH:mm");
  }
}

/***/ }),

/***/ 56840:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/form.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormHelper: () => (/* binding */ FormHelper)
/* harmony export */ });
class FormHelper {
  static errorMsgs(errors, label, sublabel = '') {
    const msgs = [];
    Object.keys(errors).forEach(validator => {
      if (validator === 'required') {
        msgs.push(`請輸入您的${label}`);
      }
      if (validator === 'pattern') {
        msgs.push(`請確認您輸入的格式或正負數是否正確`);
      }
      if (validator === 'phone') {
        msgs.push(`請填寫正確的行動電話`);
      }
      if (validator === 'email') {
        msgs.push(`請填寫正確的電子信箱格式`);
      }
      if (validator === 'min') {
        msgs.push(`不可小於 ${errors.min.min}`);
      }
      if (validator === 'max') {
        msgs.push(`不可大於 ${errors.max.max}`);
      }
      if (validator === 'minlength') {
        msgs.push(`長度至少為 ${errors.minlength.requiredLength} 碼字元`);
      }
      if (validator === 'maxlength') {
        msgs.push(`長度最多為 ${errors.maxlength.requiredLength} 碼字元`);
      }
      if (validator === 'matching') {
        msgs.push(`您填寫的${label}與${sublabel}必須為一樣`);
      }
      if (validator === 'noMatching') {
        msgs.push(`您填寫的${label}不能與${sublabel}一樣`);
      }
    });
    return msgs;
  }
  static hasRequired(ctrl) {
    if (!ctrl || !ctrl.validator) {
      return false;
    }
    const validator = ctrl.validator({});
    if (validator && validator['required']) {
      return true;
    }
    return false;
  }
}

/***/ }),

/***/ 56476:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* reexport safe */ _app_env_helper__WEBPACK_IMPORTED_MODULE_0__.APP_ENV),
/* harmony export */   AppEnvHelper: () => (/* reexport safe */ _app_env_helper__WEBPACK_IMPORTED_MODULE_0__.AppEnvHelper),
/* harmony export */   DateHelper: () => (/* reexport safe */ _date_helper__WEBPACK_IMPORTED_MODULE_1__.DateHelper),
/* harmony export */   FormHelper: () => (/* reexport safe */ _form_helper__WEBPACK_IMPORTED_MODULE_2__.FormHelper),
/* harmony export */   JsonHelper: () => (/* reexport safe */ _json_helper__WEBPACK_IMPORTED_MODULE_3__.JsonHelper)
/* harmony export */ });
/* harmony import */ var _app_env_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-env.helper */ 97091);
/* harmony import */ var _date_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.helper */ 70914);
/* harmony import */ var _form_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.helper */ 56840);
/* harmony import */ var _json_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json.helper */ 10032);





/***/ }),

/***/ 10032:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/json.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonHelper: () => (/* binding */ JsonHelper)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
class JsonHelper {
  static parseSafeJSON(str) {
    try {
      // 嘗試第一次解析
      let parsed = JSON.parse(str);
      // 如果結果是字串，代表原本有多包一層引號，再 parse 一次
      if (typeof parsed === 'string') {
        parsed = JSON.parse(parsed);
      }
      return parsed;
    } catch {
      return {};
    }
  }
}

/***/ }),

/***/ 95954:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/shared/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.APP_ENV),
/* harmony export */   AntdModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.AntdModule),
/* harmony export */   AppAuthGuard: () => (/* reexport safe */ _guards__WEBPACK_IMPORTED_MODULE_2__.AppAuthGuard),
/* harmony export */   AppEnvHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.AppEnvHelper),
/* harmony export */   BBDBaseComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent),
/* harmony export */   BBDConfirmDialogComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDConfirmDialogComponent),
/* harmony export */   BBDFileUploadComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDFileUploadComponent),
/* harmony export */   BBDImageUploadComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDImageUploadComponent),
/* harmony export */   BBDImgNativeUploadComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDImgNativeUploadComponent),
/* harmony export */   BBDQuillEditorComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDQuillEditorComponent),
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDQuillEditorViewerComponent),
/* harmony export */   DateHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.DateHelper),
/* harmony export */   FormHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.FormHelper),
/* harmony export */   HttpRequestInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpRequestInterceptor),
/* harmony export */   HttpResponseInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpResponseInterceptor),
/* harmony export */   JWTAuthInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.JWTAuthInterceptor),
/* harmony export */   JsonHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.JsonHelper),
/* harmony export */   MaterialModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.MaterialModule),
/* harmony export */   SharedModule: () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule),
/* harmony export */   ThirdPartyModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyModule),
/* harmony export */   Validation: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.Validation),
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 25391);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ 91861);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ 34597);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ 56476);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ 56827);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules */ 66988);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators */ 27704);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ 21459);









/***/ }),

/***/ 74293:
/*!***************************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/http.request.interceptor.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestInterceptor: () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 56476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages


class HttpRequestInterceptor {
  constructor(appEnv) {
    this.appEnv = appEnv;
  }
  intercept(request, next) {
    // 檢查 URL 是否已經是完整路徑（以 http:// 或 https:// 開頭）
    const isFullUrl = request.url.startsWith('http://') || request.url.startsWith('https://');
    // 如果是完整路徑，直接處理請求
    if (isFullUrl) {
      return next.handle(request);
    }
    let apiUrl = this.appEnv?.apiServer || '';
    if (request.url.startsWith('/ArcGen')) {
      apiUrl = apiUrl.replace('/Portal', '');
    }
    // 否則加上 API 伺服器前綴
    const newRequest = request.clone({
      url: apiUrl + request.url
    });
    return next.handle(newRequest);
  }
  static {
    this.ɵfac = function HttpRequestInterceptor_Factory(t) {
      return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpRequestInterceptor,
      factory: HttpRequestInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8563:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/http.response.interceptor.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpResponseInterceptor: () => (/* binding */ HttpResponseInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 40600);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);




// Custom packages



class HttpResponseInterceptor {
  constructor(appAuthApiServ) {
    this.appAuthApiServ = appAuthApiServ;
    this.isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(val => {
      if (val instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
        const body = val.body;
        this.doConvert(body);
      }
      return val;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(resp => {
      if (resp && resp.status && resp.status === 401) {
        this.appAuthApiServ.signout();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => resp);
    }));
  }
  isIsoDateString(value) {
    if (!value) {
      return false;
    }
    if (typeof value === 'string') {
      return this.isoDateFormat.test(value);
    }
    return false;
  }
  doConvert(body) {
    if (!body) {
      return body;
    }
    if (typeof body !== 'object') {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
        continue;
      }
      if (typeof value === 'object') {
        this.doConvert(value);
      }
    }
  }
  static {
    this.ɵfac = function HttpResponseInterceptor_Factory(t) {
      return new (t || HttpResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: HttpResponseInterceptor,
      factory: HttpResponseInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 56827:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestInterceptor: () => (/* reexport safe */ _http_request_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpRequestInterceptor),
/* harmony export */   HttpResponseInterceptor: () => (/* reexport safe */ _http_response_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpResponseInterceptor),
/* harmony export */   JWTAuthInterceptor: () => (/* reexport safe */ _jwt_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.JWTAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.request.interceptor */ 74293);
/* harmony import */ var _http_response_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.response.interceptor */ 8563);
/* harmony import */ var _jwt_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.auth.interceptor */ 79041);




/***/ }),

/***/ 79041:
/*!***********************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/jwt.auth.interceptor.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JWTAuthInterceptor: () => (/* binding */ JWTAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);

// Custom packages



class JWTAuthInterceptor {
  constructor(appAuthApiServ) {
    this.appAuthApiServ = appAuthApiServ;
  }
  intercept(request, next) {
    const token = this.appAuthApiServ.getAccessToken()?.accessToken;
    if (token && token.length > 0) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function JWTAuthInterceptor_Factory(t) {
      return new (t || JWTAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JWTAuthInterceptor,
      factory: JWTAuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 77747:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/antd.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdModule: () => (/* binding */ AntdModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 3800);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/zh */ 75891);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 34847);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/badge */ 63989);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 34);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/affix */ 74582);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 98835);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 45536);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 94958);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 17283);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49433);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 71311);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 68667);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33063);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 17247);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 61865);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ 20891);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 51074);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 81888);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ 50787);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/image */ 16347);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 45652);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 31194);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/layout */ 54202);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/list */ 51548);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/menu */ 94121);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/message */ 49989);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1351);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/notification */ 20813);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 16229);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 37704);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 37791);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/radio */ 16989);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/select */ 16672);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 68797);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/result */ 26679);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/slider */ 84739);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 89042);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/steps */ 85397);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/switch */ 30848);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/table */ 86836);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 72788);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/tag */ 65920);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 54229);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 32174);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/spin */ 29024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ 27332);

















































(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__["default"]);
const ICONS = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowDownOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowUpOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.BellOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeInvisibleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FolderOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FormOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.HomeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.KeyOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.LeftOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NotificationOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NumberOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ScanOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ClearOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FormOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NotificationOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.BellOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.LeftOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.HomeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FolderOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NumberOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowUpOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowDownOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeInvisibleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.KeyOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ScanOutline];
const MODULES = [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__.NzAffixModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__.NzBadgeModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.NzBreadCrumbModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__.NzCollapseModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__.NzDescriptionsModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__.NzEmptyModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__.NzMessageModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__.NzNotificationModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__.NzPageHeaderModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__.NzPopconfirmModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__.NzSelectModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__.NzSkeletonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__.NzSliderModule, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__.NzStatisticModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__.NzSwitchModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__.NzSpinModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__.NzTagModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__.NzTimelineModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__.NzCarouselModule];
class AntdModule {
  static {
    this.ɵfac = function AntdModule_Factory(t) {
      return new (t || AntdModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineNgModule"]({
      type: AntdModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineInjector"]({
      providers: [{
        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__.NZ_I18N,
        useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__.zh_TW
      }, {
        provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NZ_ICONS,
        useValue: ICONS
      }],
      imports: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__.NzAffixModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__.NzBadgeModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.NzBreadCrumbModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__.NzCollapseModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__.NzDescriptionsModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__.NzEmptyModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__.NzMessageModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__.NzNotificationModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__.NzPageHeaderModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__.NzPopconfirmModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__.NzSelectModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__.NzSkeletonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__.NzSliderModule, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__.NzStatisticModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__.NzSwitchModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__.NzSpinModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__.NzTagModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__.NzTimelineModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__.NzCarouselModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵsetNgModuleScope"](AntdModule, {
    exports: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__.NzAffixModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__.NzBadgeModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.NzBreadCrumbModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__.NzCollapseModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__.NzDescriptionsModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__.NzEmptyModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__.NzMessageModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__.NzNotificationModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__.NzPageHeaderModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__.NzPopconfirmModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__.NzSelectModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__.NzSkeletonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__.NzSliderModule, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__.NzStatisticModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__.NzSwitchModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__.NzSpinModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__.NzTagModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__.NzTimelineModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__.NzCarouselModule]
  });
})();

/***/ }),

/***/ 66988:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdModule: () => (/* reexport safe */ _antd_module__WEBPACK_IMPORTED_MODULE_0__.AntdModule),
/* harmony export */   MaterialModule: () => (/* reexport safe */ _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule),
/* harmony export */   ThirdPartyModule: () => (/* reexport safe */ _third_party_module__WEBPACK_IMPORTED_MODULE_2__.ThirdPartyModule)
/* harmony export */ });
/* harmony import */ var _antd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antd.module */ 77747);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 44193);
/* harmony import */ var _third_party_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third-party.module */ 15724);




/***/ }),

/***/ 44193:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/material.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 56238);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 47597);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 54161);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ 89062);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 19418);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 41019);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 79864);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 92151);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 14244);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 33184);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 52328);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 20904);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 16824);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 19497);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 89303);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 5538);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 16111);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 86243);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 69092);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 86350);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 90305);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 74807);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 71523);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ 44648);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2579);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 13742);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 25026);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 82583);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 65244);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/youtube-player */ 71480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 82407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 27332);
// Angular material packages































// Custom packages


const MODULES = [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__.MatStepperModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__.YouTubePlayerModule];
class MaterialModule {
  static {
    this.ɵfac = function MaterialModule_Factory(t) {
      return new (t || MaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_LOCALE,
        useValue: 'zh-TW'
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS,
        useValue: _consts__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_TW_FORMATS
      }],
      imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__.MatStepperModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__.YouTubePlayerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__.MatStepperModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__.YouTubePlayerModule]
  });
})();

/***/ }),

/***/ 15724:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/third-party.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThirdPartyModule: () => (/* binding */ ThirdPartyModule)
/* harmony export */ });
/* harmony import */ var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-mat-timepicker */ 55805);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 23225);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ 40417);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 57619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 27332);






;
const MODULES = [ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_2__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperModule];
class ThirdPartyModule {
  static {
    this.ɵfac = function ThirdPartyModule_Factory(t) {
      return new (t || ThirdPartyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ThirdPartyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [
      // 防止出現警告： Property "type" is missed
      ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerModule.forRoot({
        type: "''"
      }), ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_2__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ThirdPartyModule, {
    imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerModule],
    exports: [ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_2__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperModule]
  });
})();

/***/ }),

/***/ 78603:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/area-convert.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConvertPipe: () => (/* binding */ AreaConvertPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class AreaConvertPipe {
  /**
   * @param value 原始數值（坪 or m²）
   * @param mode 'toPing'：m² ➜ 坪，'toM2'：坪 ➜ m²（預設 'toPing'）
   * @param digits 保留幾位小數（預設 2）
   * @param defaultValue 無效值時回傳預設（預設 '-'）
   */
  transform(value, mode = 'toPing', digits = 2, defaultValue = '-') {
    const num = Number(value);
    if (isNaN(num)) {
      return String(defaultValue);
    }
    let result;
    if (mode === 'toPing') {
      result = num / 3.305785;
    } else if (mode === 'toM2') {
      result = num * 3.305785;
    } else {
      return String(defaultValue); // 防止 mode 錯誤
    }

    return result.toFixed(digits);
  }
  static {
    this.ɵfac = function AreaConvertPipe_Factory(t) {
      return new (t || AreaConvertPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "areaConvert",
      type: AreaConvertPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 41575:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-filter.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFilterPipe: () => (/* binding */ AryFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class AryFilterPipe {
  transform(source, condition) {
    if (!source || source.length <= 0) {
      return [];
    }
    if (!condition) {
      return [];
    }
    let conditions = [];
    if (Array.isArray(condition)) {
      if (condition.length <= 0) {
        return [];
      }
      conditions = [...condition];
    } else {
      conditions.push(condition);
    }
    let result = [...source];
    for (let idx = 0; idx < conditions.length; idx++) {
      result = result.filter(item => item[conditions[idx].fieldName] === conditions[idx].fieldValue);
      if (!result || result.length <= 0) {
        return [];
      }
    }
    return result;
  }
  static {
    this.ɵfac = function AryFilterPipe_Factory(t) {
      return new (t || AryFilterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "aryFilter",
      type: AryFilterPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 19276:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-find-value.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFindValuePipe: () => (/* binding */ AryFindValuePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class AryFindValuePipe {
  transform(value, source, keyFieldName, valueFieldName) {
    if (!value) {
      return null;
    }
    if (!source) {
      return null;
    }
    const findObj = source.find(info => {
      if (info[keyFieldName] !== undefined) {
        return info[keyFieldName] === value;
      }
      return false;
    });
    if (findObj && findObj[valueFieldName] !== undefined) {
      return findObj[valueFieldName];
    }
    return null;
  }
  static {
    this.ɵfac = function AryFindValuePipe_Factory(t) {
      return new (t || AryFindValuePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "aryFindValue",
      type: AryFindValuePipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 66312:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-find.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFindPipe: () => (/* binding */ AryFindPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class AryFindPipe {
  transform(source, onlyFieldNameValue = null, conditions) {
    if (!source) {
      return null;
    }
    if (source.length <= 0) {
      return null;
    }
    if (!conditions || conditions.length <= 0) {
      return null;
    }
    let result = [...source];
    for (let idx = 0; idx < conditions.length; idx++) {
      result = result.filter(item => item[conditions[idx].fieldName] === conditions[idx].fieldValue);
      if (!result || result.length <= 0) {
        return null;
      }
    }
    if (onlyFieldNameValue) {
      return result[0][onlyFieldNameValue];
    }
    return result[0];
  }
  static {
    this.ɵfac = function AryFindPipe_Factory(t) {
      return new (t || AryFindPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "aryFind",
      type: AryFindPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 45861:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-sort.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArySortPipe: () => (/* binding */ ArySortPipe)
/* harmony export */ });
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linqts */ 28780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);


class ArySortPipe {
  transform(source, seq = '') {
    if (!source) {
      return source;
    }
    if (source.length <= 0) {
      return source;
    }
    const items = new linqts__WEBPACK_IMPORTED_MODULE_0__.List(source);
    if (seq === 'desc') {
      return items.OrderByDescending(ob => ob.sort).ToArray();
    } else {
      return items.OrderBy(ob => ob.sort).ToArray();
    }
  }
  static {
    this.ɵfac = function ArySortPipe_Factory(t) {
      return new (t || ArySortPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "arySort",
      type: ArySortPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 9162:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ctrl-has-required.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CtrlHasRequiredPipe: () => (/* binding */ CtrlHasRequiredPipe)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 56476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
// Custom packages


class CtrlHasRequiredPipe {
  transform(ctrl) {
    if (!ctrl || !ctrl.validator) {
      return false;
    }
    return _helpers__WEBPACK_IMPORTED_MODULE_0__.FormHelper.hasRequired(ctrl);
  }
  static {
    this.ɵfac = function CtrlHasRequiredPipe_Factory(t) {
      return new (t || CtrlHasRequiredPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "ctrlHasRequired",
      type: CtrlHasRequiredPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 92863:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/date-formatter.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormatterPipe: () => (/* binding */ DateFormatterPipe)
/* harmony export */ });
/* harmony import */ var _extensions_date_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/date.extension */ 50138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);
// Custom packages


class DateFormatterPipe {
  transform(value, format = 'yyyy-MM-dd', maxDateOrNullReplaceStr = '') {
    if (!value) {
      return maxDateOrNullReplaceStr;
    }
    if (value.isMaxUtcDate()) {
      return maxDateOrNullReplaceStr;
    }
    return value.getFormatString(format);
  }
  static {
    this.ɵfac = function DateFormatterPipe_Factory(t) {
      return new (t || DateFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dateFormatter",
      type: DateFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 85722:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/empty-formatter.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyFormatterPipe: () => (/* binding */ EmptyFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class EmptyFormatterPipe {
  transform(value, emptyReplaceStr = '') {
    if (value) {
      return value;
    }
    return emptyReplaceStr;
  }
  static {
    this.ɵfac = function EmptyFormatterPipe_Factory(t) {
      return new (t || EmptyFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "emptyFormatter",
      type: EmptyFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 65432:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/file-url.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUrlPipe: () => (/* binding */ FileUrlPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 68522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 40600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 15596);







class FileUrlPipe {
  constructor(appAttachApiServ, sanitizer) {
    this.appAttachApiServ = appAttachApiServ;
    this.sanitizer = sanitizer;
    this.cachedUrl = null;
    this.lastId = null;
  }
  transform(attId) {
    if (!attId || attId <= 0) {
      return null;
    }
    // 如果 attId 有變化，重新請求
    if (attId !== this.lastId) {
      this.lastId = attId;
      this.cachedUrl = null;
      this.appAttachApiServ.downloadAppFileAtt(attId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(blob => {
        const url = URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
      })).subscribe(safeUrl => {
        this.cachedUrl = safeUrl;
      });
    }
    return this.cachedUrl;
  }
  static {
    this.ɵfac = function FileUrlPipe_Factory(t) {
      return new (t || FileUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAttachApiServ, 16), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
      name: "fileUrl",
      type: FileUrlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 42237:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/has-any-permission.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasAnyPermissionPipe: () => (/* binding */ HasAnyPermissionPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);



class HasAnyPermissionPipe {
  constructor(permissionServ) {
    this.permissionServ = permissionServ;
  }
  transform(paths) {
    return paths?.some(path => this.permissionServ.hasRoutePath(path));
  }
  static {
    this.ɵfac = function HasAnyPermissionPipe_Factory(t) {
      return new (t || HasAnyPermissionPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.PermissionServ, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "hasAnyPermission",
      type: HasAnyPermissionPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 2402:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/has-permission.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasPermissionPipe: () => (/* binding */ HasPermissionPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 54935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27332);



class HasPermissionPipe {
  constructor(permissionServ) {
    this.permissionServ = permissionServ;
  }
  transform(path) {
    return this.permissionServ.hasRoutePath(path);
  }
  static {
    this.ɵfac = function HasPermissionPipe_Factory(t) {
      return new (t || HasPermissionPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.PermissionServ, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "hasPermission",
      type: HasPermissionPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 16288:
/*!*************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConvertPipe: () => (/* reexport safe */ _area_convert_pipe__WEBPACK_IMPORTED_MODULE_0__.AreaConvertPipe),
/* harmony export */   AryFilterPipe: () => (/* reexport safe */ _ary_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.AryFilterPipe),
/* harmony export */   AryFindPipe: () => (/* reexport safe */ _ary_find_pipe__WEBPACK_IMPORTED_MODULE_3__.AryFindPipe),
/* harmony export */   AryFindValuePipe: () => (/* reexport safe */ _ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_2__.AryFindValuePipe),
/* harmony export */   ArySortPipe: () => (/* reexport safe */ _ary_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe),
/* harmony export */   CtrlHasRequiredPipe: () => (/* reexport safe */ _ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__.CtrlHasRequiredPipe),
/* harmony export */   DateFormatterPipe: () => (/* reexport safe */ _date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe),
/* harmony export */   EmptyFormatterPipe: () => (/* reexport safe */ _empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__.EmptyFormatterPipe),
/* harmony export */   FileUrlPipe: () => (/* reexport safe */ _file_url_pipe__WEBPACK_IMPORTED_MODULE_8__.FileUrlPipe),
/* harmony export */   HasAnyPermissionPipe: () => (/* reexport safe */ _has_any_permission_pipe__WEBPACK_IMPORTED_MODULE_9__.HasAnyPermissionPipe),
/* harmony export */   HasPermissionPipe: () => (/* reexport safe */ _has_permission_pipe__WEBPACK_IMPORTED_MODULE_10__.HasPermissionPipe),
/* harmony export */   IsEmptyPipe: () => (/* reexport safe */ _is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__.IsEmptyPipe),
/* harmony export */   JsonParsePipe: () => (/* reexport safe */ _json_parse_pipe__WEBPACK_IMPORTED_MODULE_12__.JsonParsePipe),
/* harmony export */   PhoneFormatterPipe: () => (/* reexport safe */ _phone_formatter_pipe__WEBPACK_IMPORTED_MODULE_13__.PhoneFormatterPipe),
/* harmony export */   RoundDefaultPipe: () => (/* reexport safe */ _round_default_pipe__WEBPACK_IMPORTED_MODULE_14__.RoundDefaultPipe),
/* harmony export */   SafeHtmlPipe: () => (/* reexport safe */ _safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__.SafeHtmlPipe),
/* harmony export */   SafeUrlPipe: () => (/* reexport safe */ _safe_url_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _area_convert_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-convert.pipe */ 78603);
/* harmony import */ var _ary_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ary-filter.pipe */ 41575);
/* harmony import */ var _ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ary-find-value.pipe */ 19276);
/* harmony import */ var _ary_find_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ary-find.pipe */ 66312);
/* harmony import */ var _ary_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ary-sort.pipe */ 45861);
/* harmony import */ var _ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ctrl-has-required.pipe */ 9162);
/* harmony import */ var _date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-formatter.pipe */ 92863);
/* harmony import */ var _empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty-formatter.pipe */ 85722);
/* harmony import */ var _file_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-url.pipe */ 65432);
/* harmony import */ var _has_any_permission_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./has-any-permission.pipe */ 42237);
/* harmony import */ var _has_permission_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./has-permission.pipe */ 2402);
/* harmony import */ var _is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./is-empty.pipe */ 610);
/* harmony import */ var _json_parse_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./json-parse.pipe */ 73010);
/* harmony import */ var _phone_formatter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phone-formatter.pipe */ 58009);
/* harmony import */ var _round_default_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./round-default.pipe */ 33272);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./safe-html.pipe */ 61467);
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./safe-url.pipe */ 89089);


















/***/ }),

/***/ 610:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/is-empty.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsEmptyPipe: () => (/* binding */ IsEmptyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class IsEmptyPipe {
  transform(value) {
    if (!value) {
      return true;
    }
    if (Array.isArray(value) === true) {
      return value.length === 0;
    }
    return false;
  }
  static {
    this.ɵfac = function IsEmptyPipe_Factory(t) {
      return new (t || IsEmptyPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "isEmpty",
      type: IsEmptyPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 73010:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/json-parse.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonParsePipe: () => (/* binding */ JsonParsePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class JsonParsePipe {
  transform(value) {
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }
  static {
    this.ɵfac = function JsonParsePipe_Factory(t) {
      return new (t || JsonParsePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "jsonParse",
      type: JsonParsePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 58009:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/phone-formatter.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneFormatterPipe: () => (/* binding */ PhoneFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class PhoneFormatterPipe {
  transform(phoneStr, extStr, emptyReplaceStr = '') {
    let value = '';
    if ((phoneStr?.trim() || '').length > 0) value = phoneStr?.trim() || '';
    if ((extStr?.trim() || '').length > 0) value = `${value} #${extStr?.trim() || ''}`;
    if (value.trim().length <= 0) return emptyReplaceStr;
    return value;
  }
  static {
    this.ɵfac = function PhoneFormatterPipe_Factory(t) {
      return new (t || PhoneFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "phoneFormatter",
      type: PhoneFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 33272:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/round-default.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundDefaultPipe: () => (/* binding */ RoundDefaultPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);

class RoundDefaultPipe {
  /**
   * @param value 要轉換的值（可為 string 或 number）
   * @param digits 保留幾位小數（預設 0）
   * @param defaultValue 當 value 無效時回傳的預設值（預設 '-'）
   * @param useThousandSeparator 是否使用千分位逗號（預設 true）
   */
  transform(value, digits = 0, defaultValue = '-', useThousandSeparator = true) {
    const num = Number(value);
    if (isNaN(num)) {
      return String(defaultValue);
    }
    const fixed = num.toFixed(digits);
    if (!useThousandSeparator) {
      return fixed;
    }
    const [intPart, decimalPart] = fixed.split('.');
    const withComma = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimalPart ? `${withComma}.${decimalPart}` : withComma;
  }
  static {
    this.ɵfac = function RoundDefaultPipe_Factory(t) {
      return new (t || RoundDefaultPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "roundDefault",
      type: RoundDefaultPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 61467:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/safe-html.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 15596);



class SafeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static {
    this.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 89089:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/safe-url.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeUrlPipe: () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27332);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 15596);



class SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
  static {
    this.ɵfac = function SafeUrlPipe_Factory(t) {
      return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeUrl",
      type: SafeUrlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 21459:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/shared.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 18516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 5808);
/* harmony import */ var _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/third-party.module */ 15724);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 25391);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ 91861);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ 66988);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes */ 16288);
/* harmony import */ var _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bbd-notify/bbd-notify.module */ 32718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 27332);


// Third party packages

// Custom packages






const CUST_MODULES = [_modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule];
const CUST_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent];
const CUST_CONTROLS = [_controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent];
const CUST_PIPES = [_pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe];
const THIRD_MODULES = [_modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, CUST_MODULES, THIRD_MODULES, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule]
  });
})();

/***/ }),

/***/ 27704:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/shared/validators/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validation: () => (/* reexport safe */ _validation_validator__WEBPACK_IMPORTED_MODULE_0__.Validation)
/* harmony export */ });
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.validator */ 3917);


/***/ }),

/***/ 3917:
/*!*********************************************************************!*\
  !*** ./libs/core/src/lib/shared/validators/validation.validator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validation: () => (/* binding */ Validation)
/* harmony export */ });
class Validation {
  static match(controlName, matchingControlName) {
    return controls => {
      const control = controls.get(controlName);
      const compareControl = controls.get(matchingControlName);
      if (compareControl?.errors && !compareControl.errors['matching']) {
        return null;
      }
      if (control?.value !== compareControl?.value) {
        controls.get(matchingControlName)?.setErrors({
          matching: true
        });
        return {
          matching: true
        };
      } else {
        return null;
      }
    };
  }
  static noMatch(controlName, matchingControlName) {
    return controls => {
      const control = controls.get(controlName);
      const compareControl = controls.get(matchingControlName);
      if (compareControl?.errors && !compareControl.errors['noMatching']) {
        return null;
      }
      if (control?.value === compareControl?.value) {
        controls.get(matchingControlName)?.setErrors({
          noMatching: true
        });
        return {
          noMatching: true
        };
      } else {
        return null;
      }
    };
  }
}

/***/ }),

/***/ 19246:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 19246;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 90290:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 20181:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 76982:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 24434:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 79896:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 58611:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 65692:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 69278:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 70857:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 16928:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 83480:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2203:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 13193:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 53557:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 52018:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 87016:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 39023:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 43106:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [121], () => (__webpack_require__(86419)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(44339)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"58":"quill","121":"vendor"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(121);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map