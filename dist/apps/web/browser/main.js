"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ 20112:
/*!************************************************!*\
  !*** ./apps/web/src/app/app-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_layout */ 382);
/* harmony import */ var _modules_result_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/result/pages */ 21605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages




const routes = [{
  path: '',
  children: [{
    path: 'customization',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-apps_web_src_app_shared_services_customization-reference_service_ts"), __webpack_require__.e("apps_web_src_app_modules_customization_customization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/customization/customization.module */ 27579)).then(m => m.CustomizationModule)
  }, {
    path: '',
    component: _modules_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultContainerComponent,
    children: [{
      path: '',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-apps_web_src_app_shared_services_customization-reference_service_ts"), __webpack_require__.e("apps_web_src_app_modules_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 33419)).then(m => m.HomeModule)
    }, {
      path: 'auth',
      loadChildren: () => __webpack_require__.e(/*! import() */ "apps_web_src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 78101)).then(m => m.AuthModule)
    }, {
      path: 'news',
      loadChildren: () => __webpack_require__.e(/*! import() */ "apps_web_src_app_modules_news_news_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/news/news.module */ 94051)).then(m => m.NewsModule)
    }, {
      path: 'campaign',
      loadChildren: () => __webpack_require__.e(/*! import() */ "apps_web_src_app_modules_campaign_campaign_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/campaign/campaign.module */ 84381)).then(m => m.CampaignModule)
    }, {
      path: 'result',
      title: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "apps_web_src_app_modules_result_result_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/result/result.module */ 77803)).then(m => m.ResultModule)
    }, {
      path: '**',
      component: _modules_result_pages__WEBPACK_IMPORTED_MODULE_1__.ResultErrorComponent
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

/***/ 84846:
/*!*******************************************!*\
  !*** ./apps/web/src/app/app.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 16567);



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

/***/ 23489:
/*!****************************************!*\
  !*** ./apps/web/src/app/app.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   playerFact: () => (/* binding */ playerFact)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 74150);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 84846);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 20112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 77209);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 50706);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ 27453);
/* harmony import */ var _core_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/+states */ 871);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/shared */ 76777);









// Third party packages

// Custom packages




function playerFact() {
  return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 54007, 23));
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
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID,
        useValue: 'zh-Hant'
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

/***/ 382:
/*!***************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent),
/* harmony export */   LayoutModule: () => (/* reexport safe */ _layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule)
/* harmony export */ });
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.module */ 82306);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 18737);



/***/ }),

/***/ 82306:
/*!***********************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/layout.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 18737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);


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

/***/ 21579:
/*!*************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* binding */ DefaultContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _home_pages_default_default_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/pages/default/default.data */ 88820);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 54591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 72203);
/* eslint-disable @typescript-eslint/no-explicit-any */













const _c0 = ["drawer"];
function DefaultContainerComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DefaultContainerComponent_a_7_Template_a_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const section_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.scrollToSection(section_r4.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#", section_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-active", ctx_r1.currentSection === section_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", section_r4.label, " ");
  }
}
function DefaultContainerComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DefaultContainerComponent_a_15_Template_a_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const section_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.scrollToSection(section_r7.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#", section_r7.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-active", ctx_r2.currentSection === section_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", section_r7.label, " ");
  }
}
function DefaultContainerComponent_nav_22_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DefaultContainerComponent_nav_22_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const section_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.scrollToSection(section_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("anchor-nav__item--active", ctx_r10.currentSection === section_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "\u8DF3\u81F3 " + section_r11.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r11.label);
  }
}
function DefaultContainerComponent_nav_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DefaultContainerComponent_nav_22_button_1_Template, 3, 4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.navSections);
  }
}
class DefaultContainerComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.navSections = _home_pages_default_default_data__WEBPACK_IMPORTED_MODULE_2__.NAV_SECTIONS;
    this.currentSection = '';
    this.isDrawerOpen = false;
    this.showNav = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this._seoServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_1__.SEOServ);
  }
  ngOnInit() {
    this._seoServ.updateMetaTags('富華澐光 — 預售屋客變線上服務', this.appEnv.siteServer, '', '從簽約到交屋，您的家由您決定。瀏覽客變原則、流程、費用與虛擬樣品屋。');
    this._seoServ.updateCanonical();
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(() => {
      const currRoute = this.getDeepestChildRoute(this._route);
      const seoData = currRoute.snapshot.data;
      if (seoData?.['title']) {
        this._seoServ.updateMetaTags(seoData['title'], seoData['url'], seoData['image'], seoData['description']);
        this._seoServ.updateCanonical(seoData['url']);
      }
    });
  }
  ngAfterViewInit() {
    if (!this.isBrowser) return;
    this._initSectionObserver();
  }
  ngOnDestroy() {
    this._observer?.disconnect();
  }
  _initSectionObserver() {
    const sectionIds = this.navSections.map(s => s.id);
    const elements = sectionIds.map(id => document.getElementById(id)).filter(el => !!el);
    if (elements.length === 0) return;
    this._observer = new IntersectionObserver(entries => {
      // 找到目前可見比例最高的 section
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) {
        this.currentSection = visible[0].target.id;
      }
    }, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });
    elements.forEach(el => this._observer.observe(el));
  }
  getDeepestChildRoute(route) {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }
  scrollToSection(id, event) {
    event?.preventDefault();
    if (!this.isBrowser) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.closeDrawer();
    }
  }
  openDrawer() {
    this.drawer?.open();
    this.isDrawerOpen = true;
  }
  closeDrawer() {
    this.drawer?.close();
    this.isDrawerOpen = false;
  }
  onScroll() {
    const scrollThreshold = window.innerHeight * 0.9;
    this.showNav.set(window.scrollY > scrollThreshold);
  }
  onEscape() {
    if (this.isDrawerOpen) this.closeDrawer();
  }
  static {
    this.ɵfac = function DefaultContainerComponent_Factory(t) {
      return new (t || DefaultContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DefaultContainerComponent,
      selectors: [["web-default-container"]],
      viewQuery: function DefaultContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        }
      },
      hostBindings: function DefaultContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function DefaultContainerComponent_scroll_HostBindingHandler() {
            return ctx.onScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("keydown.escape", function DefaultContainerComponent_keydown_escape_HostBindingHandler() {
            return ctx.onEscape();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 26,
      vars: 3,
      consts: [["autosize", "", 1, "layout-shell"], ["mode", "over", "position", "end", 1, "topbar-drawer"], ["drawer", ""], ["type", "button", "aria-label", "\u95DC\u9589\u9078\u55AE", 1, "topbar-drawer__close", 3, "click"], [1, "topbar-drawer__nav"], ["class", "topbar-drawer__nav-link", 3, "href", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "topbar-drawer__cta"], [1, "topbar-public"], ["routerLink", "/", 1, "block"], ["src", "assets/image/logo/logo.webp", "alt", "\u5BCC\u83EF\u6F90\u5149", 1, "topbar-public__logo"], [1, "topbar-public__nav"], ["class", "topbar-public__nav-link", 3, "href", "click", 4, "ngFor", "ngForOf"], [1, "topbar-public__actions"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-sm", "topbar-public__cta"], ["type", "button", "aria-label", "\u958B\u555F\u9078\u55AE", 1, "topbar-public__hamburger", 3, "click"], ["class", "anchor-nav", "aria-label", "\u5340\u584A\u5FEB\u901F\u5C0E\u89BD", 4, "ngIf"], [1, "layout-shell__main"], [1, "topbar-drawer__nav-link", 3, "href", "click"], [1, "topbar-public__nav-link", 3, "href", "click"], ["aria-label", "\u5340\u584A\u5FEB\u901F\u5C0E\u89BD", 1, "anchor-nav"], ["type", "button", "class", "anchor-nav__item", 3, "anchor-nav__item--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "anchor-nav__item", 3, "click"], [1, "anchor-nav__label"]],
      template: function DefaultContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DefaultContainerComponent_Template_button_click_3_listener() {
            return ctx.closeDrawer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nav", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DefaultContainerComponent_a_7_Template, 2, 3, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " \u767B\u5165\u5BA2\u8B8A\u7CFB\u7D71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-sidenav-content")(11, "header", 7)(12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nav", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DefaultContainerComponent_a_15_Template, 2, 3, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u767B\u5165\u5BA2\u8B8A\u7CFB\u7D71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DefaultContainerComponent_Template_button_click_19_listener() {
            return ctx.openDrawer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DefaultContainerComponent_nav_22_Template, 2, 1, "nav", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "main", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "web-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.navSections);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.navSections);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showNav());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
      styles: [".layout-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: transparent;\n}\n.layout-shell[_ngcontent-%COMP%]     .mat-drawer-container, .layout-shell[_ngcontent-%COMP%]     .mat-sidenav-container {\n  background: transparent;\n}\n.layout-shell__main[_ngcontent-%COMP%] {\n  display: block;\n  min-height: calc(100vh - var(--topbar-h));\n}\n\n.fade-transition[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.fade-transition.fade-in[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n  .topbar-drawer.mat-drawer {\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: var(--blur);\n          backdrop-filter: var(--blur);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9fbGF5b3V0L3BhZ2VzL2RlZmF1bHQtY29udGFpbmVyL2RlZmF1bHQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUU7O0VBRUUsdUJBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0FBREo7O0FBTUE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7QUFIRjtBQUtFO0VBQ0UsVUFBQTtBQUhKOztBQVFBO0VBQ0UscUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXNoZWxsIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIC8vIE1hdGVyaWFsIHNpZGVuYXYgY29udGFpbmVyIMOowojChyBib2R5IMOmwrzCuMOlwrHCpMOmwpDCrcOpwoXCjVxuICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGFpbmVyLFxuICA6Om5nLWRlZXAgLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmX19tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wYmFyLWgpKTtcbiAgfVxufVxuXG4vLyDDpsK3wqHDpcKFwqXDpsK3wqHDpcKHwrrDpcKLwpXDp8KVwqtcbi5mYWRlLXRyYW5zaXRpb24ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJi5mYWRlLWluIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vIMOmwrzCosOlwqDCoSBkcmF3ZXIgw6XChcKnw6nCg8Kow6XCrsK5w6XCmcKow6/CvMKIbWF0LXNpZGVuYXbDr8K8wonDpcKkwpbDqMKnwoBcbjo6bmctZGVlcCAudG9wYmFyLWRyYXdlci5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1ibHVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 72203:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/footer/footer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);

// Custom packages




class FooterComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._appStoreApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppStoreApiServ);
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
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["web-footer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 57,
      vars: 1,
      consts: [[1, "footer"], [1, "footer__inner"], [1, "footer__columns"], [1, "footer__brand"], [1, "footer__brand-mark"], [1, "topbar-public__logo-mark"], [1, "topbar-public__logo-text"], [1, "footer__brand-desc"], [1, "footer__col"], [1, "footer__col-title"], [1, "footer__list"], ["href", "#principles"], ["href", "#process"], ["href", "#faq"], ["href", "#fees"], ["href", "#equipment"], ["href", "#vr-tour"], [1, "footer__legal"], [1, "footer__legal-links"], ["href", "/privacy"], ["aria-hidden", "true"], ["href", "/terms"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u6F90");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u5BCC\u83EF\u6F90\u5149");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u5BCC\u83EF\u5EFA\u8A2D \u00B7 \u9810\u552E\u5C4B\u5BA2\u8B8A\u7DDA\u4E0A\u670D\u52D9\u7CFB\u7D71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u516C\u958B\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 10)(15, "li")(16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u5BA2\u8B8A\u539F\u5247");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li")(19, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u5BA2\u8B8A\u6D41\u7A0B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li")(22, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u5E38\u898B\u554F\u984C");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8)(25, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u53C3\u8003\u5DE5\u5177");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ul", 10)(28, "li")(29, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u8CBB\u7528\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li")(32, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\u8A2D\u5099\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li")(35, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u865B\u64EC\u6A23\u54C1\u5C4B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 8)(38, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\u806F\u7D61\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ul", 10)(41, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\u5BA2\u670D\u96FB\u8A71\uFF1A02-XXXX-XXXX");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "LINE\uFF1A@fuhua-yunguang");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Email\uFF1Aservice@fuhua.com.tw");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 17)(48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 18)(51, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\u96B1\u79C1\u6B0A\u653F\u7B56");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\u00B7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\u670D\u52D9\u689D\u6B3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currYear, " \u5BCC\u83EF\u5EFA\u8A2D\u80A1\u4EFD\u6709\u9650\u516C\u53F8. All rights reserved.");
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  padding: 56px clamp(20px, 5vw, 80px) 32px;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: var(--blur);\n  -webkit-backdrop-filter: var(--blur);\n  border-top: 1px solid var(--border);\n}\n.footer__inner[_ngcontent-%COMP%] {\n  max-width: var(--max-content);\n  margin: 0 auto;\n}\n.footer__columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n  margin-bottom: 40px;\n}\n@media (min-width: 640px) {\n  .footer__columns[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .footer__columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1.5fr repeat(3, 1fr);\n    gap: 48px;\n  }\n}\n.footer__brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.footer__brand-mark[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  font-size: 16px;\n  color: var(--text-primary);\n}\n.footer__brand-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.6;\n  color: var(--text-secondary);\n  margin: 0;\n  max-width: 280px;\n}\n.footer__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.footer__col-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--seafoam-dark);\n  margin: 0;\n}\n.footer__list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.footer__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.footer__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.footer__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--seafoam-dark);\n}\n.footer__legal[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n@media (min-width: 768px) {\n  .footer__legal[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n.footer__legal-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.footer__legal-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.footer__legal-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--seafoam-dark);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9fbGF5b3V0L3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFORjtJQU9JLHFDQUFBO0VBQ0o7QUFDRjtBQUNJO0VBVkY7SUFXSSwyQ0FBQTtJQUNBLFNBQUE7RUFFSjtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUNOO0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFOO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFKSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQU1NO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFKUjtBQU1RO0VBQ0UsMEJBQUE7QUFKVjtBQVVFO0VBQ0UsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFSSjtBQVVJO0VBVEY7SUFVSSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7RUFQSjtBQUNGO0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBUko7QUFVSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQVJOO0FBVU07RUFDRSwwQkFBQTtBQVJSIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDU2cHggY2xhbXAoMjBweCwgNXZ3LCA4MHB4KSAzMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmx1cik7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1ibHVyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG5cbiAgJl9faW5uZXIge1xuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgJl9fY29sdW1ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIHJlcGVhdCgzLCAxZnIpO1xuICAgICAgZ2FwOiA0OHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2JyYW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgJi1tYXJrIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgICYtZGVzYyB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgJl9fY29sLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgY29sb3I6IHZhcigtLXNlYWZvYW0tZGFyayk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG5cbiAgICBsaSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWFmb2FtLWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbGVnYWwge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19sZWdhbC1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWFmb2FtLWRhcmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 18737:
/*!*********************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* reexport safe */ _default_container_default_container_component__WEBPACK_IMPORTED_MODULE_0__.DefaultContainerComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent)
/* harmony export */ });
/* harmony import */ var _default_container_default_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-container/default-container.component */ 21579);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 72203);



/***/ }),

/***/ 88820:
/*!*********************************************************************!*\
  !*** ./apps/web/src/app/modules/home/pages/default/default.data.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EQUIPMENT_ITEMS: () => (/* binding */ EQUIPMENT_ITEMS),
/* harmony export */   FAQ_GROUPS: () => (/* binding */ FAQ_GROUPS),
/* harmony export */   NAV_SECTIONS: () => (/* binding */ NAV_SECTIONS),
/* harmony export */   PRICE_ITEMS: () => (/* binding */ PRICE_ITEMS),
/* harmony export */   PRINCIPLES: () => (/* binding */ PRINCIPLES),
/* harmony export */   PROCESS_STEPS: () => (/* binding */ PROCESS_STEPS)
/* harmony export */ });
/**
 * 富華澐光客變系統 — 公開區內容資料
 *
 * 對應 v1.2 規格 §九 公開資訊區。
 * Phase 1 內容寫死於本檔；Phase 2+ 可換為 API。
 */
const NAV_SECTIONS = [{
  id: 'principles',
  label: '客變原則'
}, {
  id: 'process',
  label: '客變流程'
}, {
  id: 'faq',
  label: '常見問題'
}, {
  id: 'fees',
  label: '費用表'
}, {
  id: 'equipment',
  label: '設備表'
}];
const PRINCIPLES = [{
  code: 'partition',
  icon: 'view_quilt',
  title: '輕隔間',
  scope: '室內非承重牆的拆除、新建與門位調整',
  rules: ['僅可變更非承重牆，承重結構不可動', '16F 以上樓層因結構安全，廚房隔間不可變更', '門位移動須於結構施工前申請', '拆除產生之退料費依坪數核退'],
  examples: ['G-01', 'G-03', 'G-05']
}, {
  code: 'mep',
  icon: 'electrical_services',
  title: '水電',
  scope: '插座、開關、迴路、給排水管位的新增與位移',
  rules: ['插座新增不限數量，須明確標示位置', '新增專用迴路須由工務確認配電箱備用迴路', '排水孔位移超過 30cm 需打樓板，費用大幅增加', '預埋電源（暖風機、熱毛巾架）須於磁磚施工前確認'],
  examples: ['E-02', 'E-05', 'P-03', 'W-02']
}, {
  code: 'kitchen',
  icon: 'kitchen',
  title: '廚具',
  scope: '廚具品牌升級、檯面材質、排風管路徑',
  rules: ['標準款廚具可升級至建商指定加價款', '排風管路徑不可變更（涉及共用管道）', '檯面材質可選石英石、人造石、不鏽鋼', '廚具尺寸客製化須額外加價'],
  examples: ['K-01', 'K-02']
}, {
  code: 'ac',
  icon: 'ac_unit',
  title: '空調',
  scope: '冷氣管路、出風口位置、室外機位移',
  rules: ['冷氣管路位移限同一空間內', '室外機位置受建築立面規範限制', '出風口位置須避開樑下', '吊隱式安裝須確認天花高度足夠'],
  examples: ['AC-01', 'AC-02']
}, {
  code: 'tile',
  icon: 'grid_view',
  title: '磁磚',
  scope: '地坪材質升級、衛浴壁磚選色、玄關地材',
  rules: ['標準地坪可升級為超耐磨木地板或石紋磚', '衛浴壁磚可選 5 種建商指定色系', '退磁磚改鋪木地板須注意防水銜接', '玄關石材升級可單獨申請'],
  examples: ['T-01', 'T-02']
}, {
  code: 'masonry',
  icon: 'foundation',
  title: '泥作',
  scope: '衛浴防水、地坪找平、浴缸改淋浴',
  rules: ['淋浴區防水至少拉至 180cm，可選全浴拉滿', '浴缸改淋浴須重新規劃排水坡度', '地坪找平與木地板施作須整體規劃', '退浴缸不退原料費，僅退工資差額'],
  examples: ['M-01', 'M-02']
}, {
  code: 'paint',
  icon: 'format_paint',
  title: '油漆',
  scope: '牆面顏色變更、天花顏色、特殊塗料',
  rules: ['主要居住空間可選 12 種建商指定色系', '天花顏色預設白色，可同步換色', '特殊塗料（黑板漆、磁性漆）須額外申請', '深色漆面收尾須提早通知工序'],
  examples: ['PA-01']
}];
const PROCESS_STEPS = [{
  phase: 'sign',
  stepNumber: 1,
  label: '簽約完成',
  durationHint: 'Day 0',
  description: '完成購屋簽約後，建案會發送客變系統開通通知（QR Code / 連結 / 簡訊）。',
  buyerActions: ['完成簽約程序', '收到客變系統開通通知', '掃描 QR Code 或點擊連結進入']
}, {
  phase: 'wait',
  stepNumber: 2,
  label: '等待開放期',
  durationHint: '約 60-180 天',
  description: '此階段可瀏覽公開資訊與虛擬樣品屋，預先構思客變需求，必要時可委託設計師。',
  buyerActions: ['瀏覽客變原則與費用表', '參觀虛擬樣品屋', '可選：委託設計師（需透過系統授權）']
}, {
  phase: 'open',
  stepNumber: 3,
  label: '客變開放',
  durationHint: '依工程進度',
  description: '建案宣布客變正式開放，買家可登入系統並完成首次戶型核對。',
  buyerActions: ['收到開放通知（LINE / Email）', '登入系統並核對戶型資訊', '確認所有權人資訊正確']
}, {
  phase: 'apply',
  stepNumber: 4,
  label: '提出申請',
  durationHint: '約 30 天',
  description: '透過 Room Navigator 逐空間規劃需求，系統自動彙整為工程類別清單與費用試算。',
  buyerActions: ['在 Room Navigator 標注各空間需求', '上傳必要施工圖（衛浴改裝、迴路新增）', '確認費用試算後送出申請']
}, {
  phase: 'review',
  stepNumber: 5,
  label: '審核回覆',
  durationHint: '約 7-14 天',
  description: '各工程類別由對應的承包商審核員獨立審核，全部通過後申請成立。',
  buyerActions: ['收到審核結果通知', '若有退件，依說明補件後重新送出', '與業務或設計師確認細節']
}, {
  phase: 'reconfirm',
  stepNumber: 6,
  label: '施工前複確認',
  durationHint: '施工前 7 天',
  description: '建案發起最終確認，買家簽署電子確認單後申請鎖定，不可再修改。',
  buyerActions: ['收到複確認通知', '檢視最終客變項目與費用合計', '電子簽名確認，文件加蓋時間戳']
}, {
  phase: 'build',
  stepNumber: 7,
  label: '施工執行',
  durationHint: '依工程進度',
  description: '工務依確認後的客變內容施作，期間客變內容鎖定不可變動。',
  buyerActions: ['工務團隊依確認內容施工', '可透過系統查詢施工進度節點', '完工驗收']
}];
const FAQ_GROUPS = [{
  groupId: 'general',
  groupTitle: '一般問題',
  items: [{
    q: '客變是什麼？什麼時候可以開始？',
    a: '客變是預售屋在交屋前依買家需求調整室內配置（格局、水電、建材等）的服務。本建案客變開放時點將另行通知，您可在簽約後先透過公開區與虛擬樣品屋預習，正式開放後系統會以簡訊與 Email 通知您登入。'
  }, {
    q: '我可以做哪些客變？哪些不行？',
    a: '您可調整非承重牆位、水電插座配置、廚具升級、磁磚選色等。但結構承重牆、共用管道、公共區域設備、建築外觀立面不在客變範圍。詳細規則請參考客變原則區的各類別說明。'
  }, {
    q: '是否一定要透過系統申請？可否口頭或紙本？',
    a: '為確保所有變更留有正式紀錄並通過合規審核，本案客變一律透過系統線上申請。系統會自動產生確認單並由買家電子簽名，作為日後爭議的依據。'
  }, {
    q: '若我不做任何客變，會怎樣？',
    a: '完全沒問題。系統預設為標準交屋規格，您只需確認戶型資訊後即可關閉，建案會依標準規格交屋。'
  }]
}, {
  groupId: 'fees',
  groupTitle: '費用與付款',
  items: [{
    q: '客變費用怎麼計算？',
    a: '客變費用分為「加價」（升級項目須加付）與「退款」（取消項目可退費）。各項目費用請參考費用表區的對照表，實際金額以後台審核結果為準。'
  }, {
    q: '退料項目（如拆牆）會退錢嗎？',
    a: '會。拆除類項目採「退料不退工」原則，建材成本會核退，但拆除工資不退。明細會在費用試算中清楚標示。'
  }, {
    q: '客變費用何時繳？',
    a: '客變確認後，業務會依建商規範通知繳費時點，通常於施工前繳清。Phase 1 系統不支援線上金流，仍維持銀行匯款。'
  }, {
    q: '若申請後反悔可以取消嗎？',
    a: '在施工前複確認之前都可修改或取消申請。一旦完成電子簽名複確認，原則上不可再變更。如有特殊狀況，可聯絡業務申請解除鎖定（須走審核流程）。'
  }]
}, {
  groupId: 'schedule',
  groupTitle: '時程與截止',
  items: [{
    q: '每個項目都有截止日嗎？',
    a: '是的。各類客變項目依施工順序有不同截止日（如格局類最早、磁磚類較晚）。系統會依您的戶型樓層自動顯示可申請項目與剩餘天數。'
  }, {
    q: '超過截止日怎麼辦？',
    a: '超過截止日的項目會自動鎖定無法申請。系統會在截止日前一週與三天分別發送提醒通知。建議您及早規劃。'
  }, {
    q: '施工前複確認如果我沒回應呢？',
    a: '系統會發送複確認通知並提供 7 天回應期。超過 7 天未回應系統自動標記「逾期視為同意」並進入施工程序。我們強烈建議您主動完成確認。'
  }]
}, {
  groupId: 'designer',
  groupTitle: '委託設計師',
  items: [{
    q: '我能讓設計師代為操作嗎？',
    a: '可以。您可在帳號設定中授權「受委託方」帳號給設計師，由設計師代為瀏覽規則、填寫申請、上傳圖面。但最終電子簽名仍須由您本人執行。'
  }, {
    q: '如何取消對設計師的授權？',
    a: '隨時都可以。登入後進入帳號設定，移除受委託方即可，設計師端將立即失去存取權。'
  }, {
    q: '設計師需要另外付費才能使用嗎？',
    a: '設計師使用本系統無額外費用。委託關係由您與設計師另行約定。'
  }]
}, {
  groupId: 'design',
  groupTitle: '設計與圖面',
  items: [{
    q: '我可以拿到戶型圖嗎？',
    a: '可以。在登入後的「我的戶型」頁可下載 PDF 格式戶型圖（含尺寸、比例尺、現有水電配置）。給設計師標注後再上傳作為申請附件。'
  }, {
    q: '為什麼有些項目要求上傳圖面？',
    a: '涉及多工程系統連動的項目（如衛浴全套改裝、新增電路迴路），文字無法完整描述，必須有正式施工圖才能審核。系統會在對應項目明確標示需要上傳。'
  }, {
    q: '虛擬樣品屋現在能看嗎？',
    a: '主力戶型（A1、B10/B9）的虛擬樣品屋已可瀏覽。其他戶型素材還在準備中，請參考公開區的「虛擬樣品屋」入口。'
  }, {
    q: 'DWG 格式圖面什麼時候提供？',
    a: 'Phase 1 提供 PDF 格式戶型圖。Phase 3 將提供 DWG 格式，供設計師在 CAD 軟體中直接標注。'
  }]
}];
const PRICE_ITEMS = [
// 輕隔間
{
  category: '輕隔間',
  code: 'G-01',
  name: '客廳輕隔間牆拆除',
  unit: '式',
  priceRange: 'NT$ 12,000 起（退料不退工）',
  note: '依坪數差異'
}, {
  category: '輕隔間',
  code: 'G-03',
  name: '門位置移動',
  unit: '式',
  priceRange: 'NT$ 8,500',
  note: '同一空間內'
}, {
  category: '輕隔間',
  code: 'G-05',
  name: '廚房隔間變更',
  unit: '式',
  priceRange: 'NT$ 18,000 起',
  note: '15F 以下適用'
},
// 水電
{
  category: '水電',
  code: 'E-02',
  name: '新增插座點位',
  unit: '點',
  priceRange: 'NT$ 1,500 / 點'
}, {
  category: '水電',
  code: 'E-03',
  name: '插座位置移動',
  unit: '點',
  priceRange: 'NT$ 1,200 / 點'
}, {
  category: '水電',
  code: 'E-05',
  name: '新增專用電路迴路',
  unit: '迴',
  priceRange: 'NT$ 6,500 起',
  note: '須配電箱備用迴路'
}, {
  category: '水電',
  code: 'W-02',
  name: '新增網路插座',
  unit: '點',
  priceRange: 'NT$ 1,200 / 點'
}, {
  category: '水電',
  code: 'P-03',
  name: '排水孔位移（30cm 內）',
  unit: '處',
  priceRange: 'NT$ 3,800'
}, {
  category: '水電',
  code: 'P-04',
  name: '排水孔位移（超過 30cm）',
  unit: '處',
  priceRange: 'NT$ 25,000 起',
  note: '須打樓板'
},
// 廚具
{
  category: '廚具',
  code: 'K-01',
  name: '廚具升級至高階款',
  unit: '式',
  priceRange: 'NT$ 35,000 起',
  note: '依品牌與長度'
}, {
  category: '廚具',
  code: 'K-02',
  name: '檯面升級石英石',
  unit: 'm²',
  priceRange: 'NT$ 8,000 / m²'
}, {
  category: '廚具',
  code: 'K-03',
  name: '抽油煙機升級',
  unit: '台',
  priceRange: 'NT$ 6,500 起'
},
// 空調
{
  category: '空調',
  code: 'AC-01',
  name: '冷氣管路位移',
  unit: '處',
  priceRange: 'NT$ 2,800 / 處'
}, {
  category: '空調',
  code: 'AC-02',
  name: '吊隱式安裝預埋',
  unit: '台',
  priceRange: 'NT$ 4,500 起'
},
// 磁磚
{
  category: '磁磚',
  code: 'T-01',
  name: '客廳地坪升級木地板',
  unit: 'm²',
  priceRange: 'NT$ 3,500 / m²',
  note: '退原磚差額另計'
}, {
  category: '磁磚',
  code: 'T-02',
  name: '衛浴壁磚換色',
  unit: '間',
  priceRange: 'NT$ 5,000 / 間'
},
// 泥作
{
  category: '泥作',
  code: 'M-01',
  name: '淋浴區防水拉滿（至頂）',
  unit: '間',
  priceRange: 'NT$ 7,500 / 間'
}, {
  category: '泥作',
  code: 'M-02',
  name: '浴缸改淋浴',
  unit: '間',
  priceRange: 'NT$ 12,000 起',
  note: '須重做排水坡度'
},
// 油漆
{
  category: '油漆',
  code: 'PA-01',
  name: '主牆面換色（建商指定色系）',
  unit: '面',
  priceRange: 'NT$ 1,800 / 面'
}, {
  category: '油漆',
  code: 'PA-02',
  name: '黑板漆 / 磁性漆',
  unit: 'm²',
  priceRange: 'NT$ 2,200 / m²'
},
// 預埋設備
{
  category: '預埋設備',
  code: 'PR-01',
  name: '衛浴電熱毛巾架預埋',
  unit: '組',
  priceRange: 'NT$ 2,500'
}, {
  category: '預埋設備',
  code: 'PR-02',
  name: '除霧鏡預埋插座',
  unit: '組',
  priceRange: 'NT$ 1,500'
}];
const EQUIPMENT_ITEMS = [
// 廚具
{
  category: '廚具',
  icon: 'kitchen',
  name: '廚具系統',
  brand: '櫻花',
  model: 'KE-S330L',
  spec: '系統櫃廚具 L 型 2.4m，含人造石檯面、緩衝門板五金'
}, {
  category: '廚具',
  icon: 'air',
  name: '抽油煙機',
  brand: '櫻花',
  model: 'R-3500',
  spec: '近吸式排油煙機，風量 1100 CMH，三段火焰偵測'
}, {
  category: '廚具',
  icon: 'soup_kitchen',
  name: '電陶爐',
  brand: '櫻花',
  model: 'G-2901S',
  spec: '雙口電陶爐，輸出功率 3.6kW，9 段火力'
},
// 衛浴
{
  category: '衛浴',
  icon: 'shower',
  name: '馬桶',
  brand: 'TOTO',
  model: 'CW988GR',
  spec: '單體式 ECO 馬桶，省水 4.8L / 3.0L 雙段沖水'
}, {
  category: '衛浴',
  icon: 'bathtub',
  name: '面盆組',
  brand: 'TOTO',
  model: 'L546GU',
  spec: '檯面式面盆 600mm，含 TLS01304 龍頭、排水組'
}, {
  category: '衛浴',
  icon: 'shower',
  name: '淋浴龍頭',
  brand: 'TOTO',
  model: 'TBS04302',
  spec: '冷熱混合恆溫龍頭，含手持蓮蓬頭與滑桿組'
},
// 門窗
{
  category: '門窗',
  icon: 'door_front',
  name: '玄關大門',
  brand: '永記',
  model: 'EG-T2',
  spec: '硫化銅鑄鋼門，含三段式鎖具與電子鎖預留'
}, {
  category: '門窗',
  icon: 'door_sliding',
  name: '室內房門',
  brand: '永堉',
  spec: '實木貼皮房門，含五金與門擋'
}, {
  category: '門窗',
  icon: 'window',
  name: '對外窗',
  brand: '正新',
  spec: '隔熱複層玻璃，5+9A+5mm，採鋁合金窗框'
},
// 電器
{
  category: '電器',
  icon: 'ac_unit',
  name: '冷氣',
  brand: '日立',
  spec: '分離式變頻冷暖空調，主臥 1.0 噸、客廳 1.5 噸'
}, {
  category: '電器',
  icon: 'thermostat',
  name: '熱水器',
  brand: '林內',
  model: 'RUA-C1620WF',
  spec: '強制排氣 16L 數位恆溫熱水器'
}, {
  category: '電器',
  icon: 'electrical_services',
  name: '對講機',
  brand: 'Aiphone',
  spec: '彩色影音對講機，含大門口機與電鎖控制'
},
// 五金
{
  category: '五金',
  icon: 'lock',
  name: '電子鎖',
  brand: 'GATEMAN',
  model: 'Z-Bio',
  spec: '指紋 + 密碼雙模式電子鎖，含 RFID 卡片'
}, {
  category: '五金',
  icon: 'light',
  name: '燈具',
  brand: 'Panasonic',
  spec: 'LED 嵌燈與吸頂燈組合，色溫 3000K / 5000K 可切換'
}, {
  category: '五金',
  icon: 'water_drop',
  name: '淨水設備',
  brand: '3M',
  model: 'DWS6000ST',
  spec: '中央淨水器，含前置濾芯，廚房預留接口'
}];

/***/ }),

/***/ 21605:
/*!********************************************************!*\
  !*** ./apps/web/src/app/modules/result/pages/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentRedirectComponent: () => (/* reexport safe */ _payment_redirect_payment_redirect_component__WEBPACK_IMPORTED_MODULE_1__.PaymentRedirectComponent),
/* harmony export */   PaymentResultComponent: () => (/* reexport safe */ _payment_result_payment_result_component__WEBPACK_IMPORTED_MODULE_0__.PaymentResultComponent),
/* harmony export */   ResultErrorComponent: () => (/* reexport safe */ _result_error_result_error_component__WEBPACK_IMPORTED_MODULE_2__.ResultErrorComponent)
/* harmony export */ });
/* harmony import */ var _payment_result_payment_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-result/payment-result.component */ 8477);
/* harmony import */ var _payment_redirect_payment_redirect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-redirect/payment-redirect.component */ 82739);
/* harmony import */ var _result_error_result_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result-error/result-error.component */ 59205);




/***/ }),

/***/ 82739:
/*!**********************************************************************************************!*\
  !*** ./apps/web/src/app/modules/result/pages/payment-redirect/payment-redirect.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentRedirectComponent: () => (/* binding */ PaymentRedirectComponent)
/* harmony export */ });
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _libs_core_src_lib_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/safe-html.pipe */ 32650);



// Custom packages





class PaymentRedirectComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_1__.BBDBaseComponent {
  constructor(commerceApiServ, router, injector) {
    super(injector);
    this.commerceApiServ = commerceApiServ;
    this.router = router;
    this.injector = injector;
    this.slideHtml = this.commerceApiServ.postReq;
  }
  ngOnInit() {
    console.log('Init loading');
  }
  ngAfterViewInit() {
    if (!this.slideHtml) {
      this.router.navigate(['/']);
    }
    const form = document.getElementById('postForm');
    form.submit();
  }
  static {
    this.ɵfac = function PaymentRedirectComponent_Factory(t) {
      return new (t || PaymentRedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.CommerceApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PaymentRedirectComponent,
      selectors: [["app-payment-redirect"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 3,
      consts: [[1, "relative", "flex", "items-center", "justify-center", "py-[10svh]"], [1, "loader"], [1, "absolute", "inset-0", "m-auto", "w-fit", "h-fit", "text-center"], [1, "headline"], [1, "tracking-wider", "text-lg", "mt-1"], ["id", "scroll", 3, "innerHTML"]],
      template: function PaymentRedirectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u5207\u63DB\u81F3\u4ED8\u6B3E\u9801\u9762\u4E2D");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u656C\u8ACB\u8010\u5FC3\u7B49\u5019");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 1, ctx.slideHtml || ""), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_libs_core_src_lib_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe],
      styles: ["\n\n.loader[_ngcontent-%COMP%] {\n  height: 50svh;\n  aspect-ratio: 1;\n  padding: 10px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  mask: conic-gradient(#000 0 0) content-box exclude, conic-gradient(#000 0 0);\n  filter: blur(12px);\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: repeating-conic-gradient(rgba(255, 255, 255, 0) 0 5%, #8de7fb, #68bdef 50% 50%);\n  animation: _ngcontent-%COMP%_l2 1.5s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_l2 {\n  to {\n    rotate: 1turn;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9yZXN1bHQvcGFnZXMvcGF5bWVudC1yZWRpcmVjdC9wYXltZW50LXJlZGlyZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFDRTtFQUVGLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkZBQUE7RUFDQSxrQ0FBQTtBQUFGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhUTUw6IDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj4gKi9cbi5sb2FkZXIge1xuICBoZWlnaHQ6IDUwc3ZoO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXNrOlxuICAgIGNvbmljLWdyYWRpZW50KCMwMDAgMCAwKSBjb250ZW50LWJveCBleGNsdWRlLFxuICAgIGNvbmljLWdyYWRpZW50KCMwMDAgMCAwKTtcbiAgZmlsdGVyOiBibHVyKDEycHgpO1xufVxuLmxvYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctY29uaWMtZ3JhZGllbnQoI2ZmZmZmZjAwIDAgNSUsICM4ZGU3ZmIsICM2OGJkZWYgNTAlIDUwJSk7XG4gIGFuaW1hdGlvbjogbDIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGwyIHtcbiAgdG8ge1xuICAgIHJvdGF0ZTogMXR1cm47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8477:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/result/pages/payment-result/payment-result.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentResultComponent: () => (/* binding */ PaymentResultComponent)
/* harmony export */ });
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/results/complete/complete.component */ 7398);
/* harmony import */ var _shared_components_results_pending_pending_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/results/pending/pending.component */ 69650);



// Custom packages







function PaymentResultComponent_web_complete_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "web-complete", 11);
  }
}
function PaymentResultComponent_web_pending_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "web-pending", 11);
  }
}
class PaymentResultComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_1__.BBDBaseComponent {
  // paymentPostBody: Record<string, unknown> | null = null;
  constructor(route, injector) {
    super(injector);
    this.route = route;
    this.injector = injector;
    this.orderType = 0;
    this.message = '';
    this.resultCode = 0;
    this.resultMsg = '';
  }
  get isSuccess() {
    return this.resultCode === 1;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.orderType = parseInt(params.get('orderType') || '0', 0);
      this.resultCode = parseInt(params.get('resultCode') || '0', 0);
      this.resultMsg = params.get('resultMsg') || '';
      this.setMessage();
    });
    // this.loadPaymentPostBody();
  }
  // private loadPaymentPostBody(): void {
  //   if (typeof window === 'undefined') {
  //     return;
  //   }
  //   const fromLocal = window.localStorage.getItem('paymentCompletePostBody');
  //   if (fromLocal) {
  //     try {
  //       this.paymentPostBody = JSON.parse(fromLocal);
  //     } catch {
  //       this.paymentPostBody = null;
  //     }
  //     window.localStorage.removeItem('paymentCompletePostBody');
  //     return;
  //   }
  //   if (window.history.state && (window.history.state as { paymentData?: unknown }).paymentData) {
  //     this.paymentPostBody = (window.history.state as { paymentData?: unknown }).paymentData as Record<string, unknown>;
  //     return;
  //   }
  //   const payload = this.route.snapshot.queryParamMap.get('paymentData') || this.route.snapshot.queryParamMap.get('payload');
  //   if (payload) {
  //     try {
  //       this.paymentPostBody = JSON.parse(decodeURIComponent(payload));
  //     } catch {
  //       this.paymentPostBody = null;
  //     }
  //   }
  // }
  setMessage() {
    switch (this.orderType) {
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.CustOrderTypes.活動類_報名費:
        this.message = '活動報名';
        break;
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.CustOrderTypes.會費類_個人入會費:
        this.message = '入會申請';
        break;
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.CustOrderTypes.會費類_個人常年會費:
        this.message = '常年會費';
        break;
      default:
        this.message = '繳費結果';
        break;
    }
  }
  static {
    this.ɵfac = function PaymentResultComponent_Factory(t) {
      return new (t || PaymentResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PaymentResultComponent,
      selectors: [["app-payment-result"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 5,
      consts: [[1, "max-w-container"], ["class", "block w-fit mx-auto pl-4", 4, "ngIf"], [1, "text-center"], [1, "display", "d-black"], [1, "headline", "font-semibold", "space-x-2"], [3, "ngClass"], [1, "w-fit", "max-w-xl", "mx-auto", "my-10", "block"], [1, "px-8", "py-6"], [1, "title"], [1, "text-base", "mt-2", "mb-6", "space-y-2"], ["routerLink", "/", 1, "btn-primary", "rounded-full", "p-4", "w-32", "mx-auto"], [1, "block", "w-fit", "mx-auto", "pl-4"]],
      template: function PaymentResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "header");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PaymentResultComponent_web_complete_2_Template, 1, 0, "web-complete", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PaymentResultComponent_web_pending_3_Template, 1, 0, "web-pending", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 2)(5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Payment Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 4)(8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "web-glass-bg", 6)(13, "div", 7)(14, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u4ED8\u6B3E\u8655\u7406\u8AAA\u660E");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u82E5\u60A8\u9078\u64C7\u975E\u5373\u6642\u91D1\u6D41\u4ED8\u6B3E\u65B9\u5F0F\uFF08\u5982 ATM \u8F49\u5E33\u3001\u8D85\u5546\u4EE3\u78BC\u7E73\u8CBB\u7B49\uFF09\uFF0C\u7CFB\u7D71\u53EF\u80FD\u7121\u6CD5\u7ACB\u5373\u78BA\u8A8D\u5165\u5E33\u72C0\u614B\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\u8ACB\u8010\u5FC3\u7B49\u5F85 1-3 \u500B\u5DE5\u4F5C\u5929\uFF0C\u6B3E\u9805\u5165\u5E33\u5F8C\u7CFB\u7D71\u5C07\u81EA\u52D5\u66F4\u65B0\u60A8\u7684\u8A02\u55AE\u72C0\u614B\uFF0C\u4E26\u767C\u9001\u78BA\u8A8D\u901A\u77E5\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\u5982\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u8ACB\u806F\u7E6B\u5B78\u6703\u79D8\u66F8\u8655\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u56DE\u9996\u9801");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSuccess);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSuccess);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isSuccess ? "result-success" : "result-pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.resultMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_2__.GlassBgComponent, _shared_components_results_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__.CompleteComponent, _shared_components_results_pending_pending_component__WEBPACK_IMPORTED_MODULE_4__.PendingComponent],
      styles: [".result-success[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(14 165 233 / var(--tw-text-opacity, 1))\n}\n\n.result-pending[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(234 179 8 / var(--tw-text-opacity, 1))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9yZXN1bHQvcGFnZXMvcGF5bWVudC1yZXN1bHQvcGF5bWVudC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0c7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1zdWNjZXNzIHtcbiAgIEBhcHBseSB0ZXh0LXNreS01MDA7XG59XG5cbi5yZXN1bHQtcGVuZGluZyB7XG4gICBAYXBwbHkgdGV4dC15ZWxsb3ctNTAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59205:
/*!**************************************************************************************!*\
  !*** ./apps/web/src/app/modules/result/pages/result-error/result-error.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultErrorComponent: () => (/* binding */ ResultErrorComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);

// Custom packages



class ResultErrorComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
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
      consts: [[1, "max-w-4xl", "mx-auto", "text-center", "my-10", "lg:flex", "items-center", "justify-center", "lg:text-left"], ["src", "assets/image/illustration/404.svg", "alt", "\u627E\u4E0D\u5230\u9801\u9762", 1, "w-full", "max-w-lg"], [1, "w-full", "max-w-xl", "mx-auto", "p-4", "text-center"], [1, "text-3xl", "font-black"], [1, "text-base", "mt-2", "mb-6"], ["routerLink", "/", 1, "btn-primary", "rounded-full", "p-4", "w-32", "mx-auto"]],
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
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 84515:
/*!*********************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/customization-equipment/customization-equipment.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationEquipmentComponent: () => (/* binding */ CustomizationEquipmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);





function CustomizationEquipmentComponent_div_11_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00B7 ", item_r3.model, "");
  }
}
function CustomizationEquipmentComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomizationEquipmentComponent_div_11_div_3_span_7_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.spec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.brand);
  }
}
function CustomizationEquipmentComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomizationEquipmentComponent_div_11_div_3_Template, 12, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.items);
  }
}
class CustomizationEquipmentComponent {
  static {
    this.ɵfac = function CustomizationEquipmentComponent_Factory(t) {
      return new (t || CustomizationEquipmentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizationEquipmentComponent,
      selectors: [["app-customization-equipment"]],
      inputs: {
        equipmentByCategory: "equipmentByCategory"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 1,
      consts: [["id", "equipment", 1, "section"], [1, "section__inner"], [1, "section__head"], [1, "section__eyebrow"], [1, "section__title"], [1, "section__lead"], [1, "section__body"], [1, "equipment-table"], ["class", "equipment-group", 4, "ngFor", "ngForOf"], [1, "equipment-group"], [1, "equipment-group__title"], ["class", "equipment-row", 4, "ngFor", "ngForOf"], [1, "equipment-row"], [1, "equipment-row__thumb"], [1, "equipment-row__info"], [1, "equipment-row__name"], ["class", "equipment-row__model", 4, "ngIf"], [1, "equipment-row__spec"], [1, "equipment-row__brand"], [1, "equipment-row__model"]],
      template: function CustomizationEquipmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Standard Equipment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6A19\u6E96\u4EA4\u5C4B\u8A2D\u5099");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u672C\u5EFA\u6848\u6A19\u6E96\u4EA4\u5C4B\u5305\u542B\u7684\u4E3B\u8981\u5EFA\u6750\u8207\u8A2D\u5099\u898F\u683C\u3002\u5982\u6709\u5347\u7D1A\u9700\u6C42\uFF0C\u8ACB\u65BC\u5BA2\u8B8A\u671F\u9593\u900F\u904E\u7CFB\u7D71\u7533\u8ACB\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomizationEquipmentComponent_div_11_Template, 4, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.equipmentByCategory);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbi1lcXVpcG1lbnQvY3VzdG9taXphdGlvbi1lcXVpcG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 32447:
/*!*********************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/customization-faq/customization-faq.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationFaqComponent: () => (/* binding */ CustomizationFaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 17508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);





function CustomizationFaqComponent_div_11_mat_expansion_panel_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 13)(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.q);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.a);
  }
}
function CustomizationFaqComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomizationFaqComponent_div_11_mat_expansion_panel_4_Template, 6, 2, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.items);
  }
}
class CustomizationFaqComponent {
  static {
    this.ɵfac = function CustomizationFaqComponent_Factory(t) {
      return new (t || CustomizationFaqComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizationFaqComponent,
      selectors: [["app-customization-faq"]],
      inputs: {
        faqGroups: "faqGroups"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 1,
      consts: [["id", "faq", 1, "section"], [1, "section__inner"], [1, "section__head"], [1, "section__eyebrow"], [1, "section__title"], [1, "section__lead"], [1, "section__body"], [1, "faq"], ["class", "faq__group", 4, "ngFor", "ngForOf"], [1, "faq__group"], [1, "faq__group-title"], ["multi", ""], ["class", "faq__panel", 4, "ngFor", "ngForOf"], [1, "faq__panel"]],
      template: function CustomizationFaqComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5E38\u898B\u554F\u984C");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u91DD\u5C0D\u5BA2\u8B8A\u6D41\u7A0B\u3001\u8CBB\u7528\u3001\u6642\u7A0B\u3001\u8A2D\u8A08\u5E2B\u59D4\u8A17\u7B49\u5E38\u898B\u7591\u554F\u7684\u56DE\u7B54\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomizationFaqComponent_div_11_Template, 5, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqGroups);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbi1mYXEvY3VzdG9taXphdGlvbi1mYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 27939:
/*!*****************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/customization-pricing/customization-pricing.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationPricingComponent: () => (/* binding */ CustomizationPricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



function CustomizationPricingComponent_ng_container_23_tr_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.note);
  }
}
function CustomizationPricingComponent_ng_container_23_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 10)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomizationPricingComponent_ng_container_23_tr_4_div_6_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 15)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.priceRange);
  }
}
function CustomizationPricingComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 9)(2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomizationPricingComponent_ng_container_23_tr_4_Template, 12, 5, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.items);
  }
}
class CustomizationPricingComponent {
  static {
    this.ɵfac = function CustomizationPricingComponent_Factory(t) {
      return new (t || CustomizationPricingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizationPricingComponent,
      selectors: [["app-customization-pricing"]],
      inputs: {
        priceByCategory: "priceByCategory"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 1,
      consts: [["id", "fees", 1, "section", "section--alt"], [1, "section__inner"], [1, "section__head"], [1, "section__eyebrow"], [1, "section__title"], [1, "section__lead"], [1, "section__body"], [1, "price-table"], [4, "ngFor", "ngForOf"], [1, "price-table__category-header"], ["data-label", "\u4EE3\u865F"], [1, "price-table__code"], ["data-label", "\u9805\u76EE"], ["class", "price-table__note", 4, "ngIf"], ["data-label", "\u55AE\u4F4D"], ["data-label", "\u8CBB\u7528"], [1, "price-table__price"], [1, "price-table__note"]],
      template: function CustomizationPricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Price Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5E38\u898B\u8CBB\u7528\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u5404\u985E\u5BA2\u8B8A\u9805\u76EE\u7684\u53C3\u8003\u8CBB\u7528\u7BC4\u570D\u3002\u5BE6\u969B\u91D1\u984D\u4EE5\u5F8C\u53F0\u5BE9\u6838\u7D50\u679C\u70BA\u6E96\uFF0C\u767B\u5165\u5F8C\u7CFB\u7D71\u6703\u5373\u6642\u8A66\u7B97\u60A8\u7684\u5BA2\u8B8A\u7E3D\u50F9\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "table")(12, "thead")(13, "tr")(14, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u4EE3\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u9805\u76EE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u55AE\u4F4D");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u8CBB\u7528\u7BC4\u570D");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CustomizationPricingComponent_ng_container_23_Template, 5, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.priceByCategory);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbi1wcmljaW5nL2N1c3RvbWl6YXRpb24tcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 98487:
/*!***********************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/customization-principles/customization-principles.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationPrinciplesComponent: () => (/* binding */ CustomizationPrinciplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);





function CustomizationPrinciplesComponent_article_11_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r4);
  }
}
function CustomizationPrinciplesComponent_article_11_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ex_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ex_r5);
  }
}
function CustomizationPrinciplesComponent_article_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 9)(1, "div", 10)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomizationPrinciplesComponent_article_11_li_9_Template, 2, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomizationPrinciplesComponent_article_11_span_11_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.scope);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r1.rules);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r1.examples);
  }
}
class CustomizationPrinciplesComponent {
  static {
    this.ɵfac = function CustomizationPrinciplesComponent_Factory(t) {
      return new (t || CustomizationPrinciplesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizationPrinciplesComponent,
      selectors: [["app-customization-principles"]],
      inputs: {
        principles: "principles"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 1,
      consts: [["id", "principles", 1, "section"], [1, "section__inner"], [1, "section__head"], [1, "section__eyebrow"], [1, "section__title"], [1, "section__lead"], [1, "section__body"], [1, "principles-grid"], ["class", "principle-card", 4, "ngFor", "ngForOf"], [1, "principle-card"], [1, "principle-card__icon"], [1, "principle-card__title"], [1, "principle-card__scope"], [1, "principle-card__rules"], ["class", "principle-card__rule", 4, "ngFor", "ngForOf"], [1, "principle-card__examples"], ["class", "chip chip--outline", 4, "ngFor", "ngForOf"], [1, "principle-card__rule"], [1, "chip", "chip--outline"]],
      template: function CustomizationPrinciplesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customization Principles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5BA2\u8B8A\u539F\u5247");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u5404\u985E\u5225\u7684\u8B8A\u66F4\u7BC4\u570D\u8207\u9650\u5236\u7E3D\u89BD\u3002\u5BE6\u969B\u53EF\u8B8A\u9805\u76EE\u4F9D\u60A8\u7684\u6236\u578B\u6A13\u5C64\u800C\u5B9A\uFF0C\u767B\u5165\u5F8C\u7CFB\u7D71\u6703\u81EA\u52D5\u7BE9\u9078\u986F\u793A\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomizationPrinciplesComponent_article_11_Template, 12, 5, "article", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.principles);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbi1wcmluY2lwbGVzL2N1c3RvbWl6YXRpb24tcHJpbmNpcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 30723:
/*!*******************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/customization-timeline/customization-timeline.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationTimelineComponent: () => (/* binding */ CustomizationTimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



function CustomizationTimelineComponent_div_11_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.durationHint);
  }
}
function CustomizationTimelineComponent_div_11_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r5);
  }
}
function CustomizationTimelineComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11)(4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomizationTimelineComponent_div_11_span_8_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomizationTimelineComponent_div_11_li_12_Template, 2, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.stepNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Step ", step_r1.stepNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r1.durationHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", step_r1.buyerActions);
  }
}
class CustomizationTimelineComponent {
  static {
    this.ɵfac = function CustomizationTimelineComponent_Factory(t) {
      return new (t || CustomizationTimelineComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizationTimelineComponent,
      selectors: [["app-customization-timeline"]],
      inputs: {
        processSteps: "processSteps"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 1,
      consts: [["id", "process", 1, "section", "section--alt"], [1, "section__inner"], [1, "section__head"], [1, "section__eyebrow"], [1, "section__title"], [1, "section__lead"], [1, "section__body"], [1, "process-timeline"], ["class", "process-step", 4, "ngFor", "ngForOf"], [1, "process-step"], [1, "process-step__node"], [1, "process-step__content"], [1, "process-step__phase"], [1, "process-step__label"], ["class", "process-step__duration", 4, "ngIf"], [1, "process-step__description"], [1, "process-step__actions"], ["class", "process-step__action", 4, "ngFor", "ngForOf"], [1, "process-step__duration"], [1, "process-step__action"]],
      template: function CustomizationTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customization Flow");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5BA2\u8B8A\u6D41\u7A0B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u5F9E\u7C3D\u7D04\u5230\u4EA4\u5C4B\u7684\u5B8C\u6574\u6642\u9593\u8EF8\uFF0C\u6BCF\u500B\u968E\u6BB5\u7684\u95DC\u9375\u52D5\u4F5C\u8207\u6642\u7A0B\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomizationTimelineComponent_div_11_Template, 13, 6, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.processSteps);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbi10aW1lbGluZS9jdXN0b21pemF0aW9uLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8493:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/glass-bg/glass-bg.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlassBgComponent: () => (/* binding */ GlassBgComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


const _c0 = ["*"];
class GlassBgComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
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

/***/ 44457:
/*!*****************************************************!*\
  !*** ./apps/web/src/app/shared/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompleteComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.CompleteComponent),
/* harmony export */   CustomizationEquipmentComponent: () => (/* reexport safe */ _customization_equipment_customization_equipment_component__WEBPACK_IMPORTED_MODULE_7__.CustomizationEquipmentComponent),
/* harmony export */   CustomizationFaqComponent: () => (/* reexport safe */ _customization_faq_customization_faq_component__WEBPACK_IMPORTED_MODULE_5__.CustomizationFaqComponent),
/* harmony export */   CustomizationPricingComponent: () => (/* reexport safe */ _customization_pricing_customization_pricing_component__WEBPACK_IMPORTED_MODULE_6__.CustomizationPricingComponent),
/* harmony export */   CustomizationPrinciplesComponent: () => (/* reexport safe */ _customization_principles_customization_principles_component__WEBPACK_IMPORTED_MODULE_3__.CustomizationPrinciplesComponent),
/* harmony export */   CustomizationTimelineComponent: () => (/* reexport safe */ _customization_timeline_customization_timeline_component__WEBPACK_IMPORTED_MODULE_4__.CustomizationTimelineComponent),
/* harmony export */   FailComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.FailComponent),
/* harmony export */   GlassBgComponent: () => (/* reexport safe */ _glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_0__.GlassBgComponent),
/* harmony export */   PaginatorComponent: () => (/* reexport safe */ _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent),
/* harmony export */   PendingComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.PendingComponent),
/* harmony export */   ResultEmptyComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator/paginator.component */ 94643);
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results */ 60132);
/* harmony import */ var _customization_principles_customization_principles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customization-principles/customization-principles.component */ 98487);
/* harmony import */ var _customization_timeline_customization_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customization-timeline/customization-timeline.component */ 30723);
/* harmony import */ var _customization_faq_customization_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customization-faq/customization-faq.component */ 32447);
/* harmony import */ var _customization_pricing_customization_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customization-pricing/customization-pricing.component */ 27939);
/* harmony import */ var _customization_equipment_customization_equipment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customization-equipment/customization-equipment.component */ 84515);









/***/ }),

/***/ 94643:
/*!*****************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/paginator/paginator.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatorComponent: () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 79682);

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
      consts: [[3, "hidePageSize", "showFirstLastButtons", "length", "pageSize", "pageIndex", "page"]],
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

/***/ 39827:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/panorama/panorama.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanoramaComponent: () => (/* binding */ PanoramaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);



const _c0 = ["panoramaContainer"];
function PanoramaComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanoramaComponent_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const scene_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.switchScene(scene_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scene_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.currentScene === scene_r2.id ? "btn-primary" : "btn-ghost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r1.currentScene === scene_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", scene_r2.label, " ");
  }
}
class PanoramaComponent {
  constructor() {
    this.viewer = null;
    this.currentScene = 'scene1';
    // 場景清單，方便切換按鈕顯示
    this.sceneList = [{
      id: 'scene1',
      label: '客餐廳'
    }, {
      id: 'scene2',
      label: '主臥室'
    }, {
      id: 'scene3',
      label: '次臥室'
    }];
    // Cubemap 圖片路徑設定（順序：front, right, back, left, up, down）
    this.scenes = {
      scene1: ['assets/image/pano/scene1/f.jpg', 'assets/image/pano/scene1/r.jpg', 'assets/image/pano/scene1/b.jpg', 'assets/image/pano/scene1/l.jpg', 'assets/image/pano/scene1/u.jpg', 'assets/image/pano/scene1/d.jpg'],
      scene2: ['assets/image/pano/scene2/f.jpg', 'assets/image/pano/scene2/r.jpg', 'assets/image/pano/scene2/b.jpg', 'assets/image/pano/scene2/l.jpg', 'assets/image/pano/scene2/u.jpg', 'assets/image/pano/scene2/d.jpg'],
      scene3: ['assets/image/pano/scene3/f.jpg', 'assets/image/pano/scene3/r.jpg', 'assets/image/pano/scene3/b.jpg', 'assets/image/pano/scene3/l.jpg', 'assets/image/pano/scene3/u.jpg', 'assets/image/pano/scene3/d.jpg']
    };
    // 每個場景的 hotspot 定義（pitch, yaw 單位為度）
    this.hotSpots = {
      scene1: [{
        pitch: -4,
        yaw: 40,
        tooltip: '主臥室',
        target: 'scene2'
      }, {
        pitch: -2,
        yaw: -50,
        tooltip: '次臥室',
        target: 'scene3'
      }],
      scene2: [],
      scene3: []
    };
  }
  ngAfterViewInit() {
    this.initViewer(this.currentScene);
  }
  ngOnDestroy() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }
  initViewer(sceneId) {
    if (this.viewer) {
      this.viewer.destroy();
    }
    // 準備 hotspot 陣列，交由 pannellum 的 createTooltipFunc 建立可點擊按鈕
    const hotSpotsConfig = (this.hotSpots[sceneId] || []).map(h => ({
      pitch: h.pitch,
      yaw: h.yaw,
      createTooltipFunc: this.createHotspot.bind(this),
      createTooltipArgs: {
        target: h.target,
        text: h.tooltip
      }
    }));
    this.viewer = pannellum.viewer(this.containerRef.nativeElement, {
      type: 'cubemap',
      cubeMap: this.scenes[sceneId],
      autoLoad: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
      autoRotate: -2,
      hotSpots: hotSpotsConfig
    });
  }
  // Pannellum hotspot callback: 建立按鈕並綁定點擊切換場景
  createHotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hotspot-btn';
    btn.setAttribute('aria-label', args.text || 'hotspot');
    btn.innerText = args.text || '';
    btn.addEventListener('click', ev => {
      ev.stopPropagation();
      if (args && args.target) {
        this.switchScene(args.target);
      }
    });
    hotSpotDiv.appendChild(btn);
  }
  switchScene(sceneId) {
    if (this.currentScene === sceneId) return;
    this.currentScene = sceneId;
    this.initViewer(sceneId);
  }
  static {
    this.ɵfac = function PanoramaComponent_Factory(t) {
      return new (t || PanoramaComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanoramaComponent,
      selectors: [["app-panorama"]],
      viewQuery: function PanoramaComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
        }
      },
      decls: 5,
      vars: 1,
      consts: [[1, "panorama"], ["tabindex", "0", "aria-label", "360 \u5EA6\u5168\u666F\u9810\u89BD", 1, "panorama-container", "card"], ["panoramaContainer", ""], ["role", "tablist", "aria-label", "\u5834\u666F\u5207\u63DB", 1, "scene-buttons"], ["type", "button", "class", "btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", 3, "ngClass", "click"]],
      template: function PanoramaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanoramaComponent_button_4_Template, 2, 3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sceneList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".panorama[_ngcontent-%COMP%] { display: block; }\n    .scene-buttons[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }\n    .panorama-container[_ngcontent-%COMP%] { width: 100%; aspect-ratio: 16 / 9; min-height: 320px; max-height: 720px; overflow: hidden; border-radius: var(--radius-md); background: var(--color-surface); }\n\n    \n\n    .custom-hotspot[_ngcontent-%COMP%] { pointer-events: auto; }\n    .custom-hotspot[_ngcontent-%COMP%]   .hotspot-btn[_ngcontent-%COMP%] {\n      background: rgba(0,0,0,0.65);\n      color: #fff;\n      border: none;\n      padding: 6px 10px;\n      border-radius: 18px;\n      font-size: 13px;\n      cursor: pointer;\n      box-shadow: 0 2px 6px rgba(0,0,0,0.25);\n      transition: transform .12s ease, background .12s ease;\n    }\n    .custom-hotspot[_ngcontent-%COMP%]   .hotspot-btn[_ngcontent-%COMP%]:hover { transform: translateY(-2px); background: rgba(0,0,0,0.8); }\n    .custom-hotspot[_ngcontent-%COMP%]   .hotspot-btn[_ngcontent-%COMP%]:focus { outline: 2px solid rgba(255,255,255,0.28); }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFub3JhbWEvcGFub3JhbWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSSxZQUFZLGNBQWMsRUFBRTtJQUM1QixpQkFBaUIsYUFBYSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7SUFDN0Usc0JBQXNCLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRTs7SUFFcEwsZUFBZTtJQUNmLGtCQUFrQixvQkFBb0IsRUFBRTtJQUN4QztNQUNFLDRCQUE0QjtNQUM1QixXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGVBQWU7TUFDZixzQ0FBc0M7TUFDdEMscURBQXFEO0lBQ3ZEO0lBQ0EscUNBQXFDLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFO0lBQy9GLHFDQUFxQyx5Q0FBeUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5wYW5vcmFtYSB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLnNjZW5lLWJ1dHRvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogOHB4OyBtYXJnaW4tdG9wOiAxMnB4OyB9XG4gICAgLnBhbm9yYW1hLWNvbnRhaW5lciB7IHdpZHRoOiAxMDAlOyBhc3BlY3QtcmF0aW86IDE2IC8gOTsgbWluLWhlaWdodDogMzIwcHg7IG1heC1oZWlnaHQ6IDcyMHB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTsgfVxuXG4gICAgLyogSG90c3BvdCDDpsKowqPDpcK8wo8gKi9cbiAgICAuY3VzdG9tLWhvdHNwb3QgeyBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAgIC5jdXN0b20taG90c3BvdCAuaG90c3BvdC1idG4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjY1KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjEycyBlYXNlLCBiYWNrZ3JvdW5kIC4xMnMgZWFzZTtcbiAgICB9XG4gICAgLmN1c3RvbS1ob3RzcG90IC5ob3RzcG90LWJ0bjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyB9XG4gICAgLmN1c3RvbS1ob3RzcG90IC5ob3RzcG90LWJ0bjpmb2N1cyB7IG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMjgpOyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7398:
/*!***********************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/complete/complete.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompleteComponent: () => (/* binding */ CompleteComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class CompleteComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '';
  }
  static {
    this.ɵfac = function CompleteComponent_Factory(t) {
      return new (t || CompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompleteComponent,
      selectors: [["web-complete"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 1,
      consts: [[1, "md:flex", "items-start", "justify-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 160 160"], ["fill", "none", "stroke", "var(--md-sys-color-primary)", "stroke-width", "10", "stroke-miterlimit", "10", "cx", "80", "cy", "80", "r", "70", 1, "path", "circle"], ["points", "115.2 55.7 66.5 104.3 44.8 83", "fill", "none", "stroke", "var(--md-sys-color-primary)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "check"], [1, "fade-in-left"], [1, "complete-title"]],
      template: function CompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2)(3, "polyline", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: block;\n  width: 5rem;\n}\n@media (min-width: 1280px) {\n  svg[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n}\n@media (min-width: 1600px) {\n  svg[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n.path.circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out;\n}\n.path.line[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: _ngcontent-%COMP%_dash 0.9s 0.35s ease-in-out forwards;\n}\n.path.check[_ngcontent-%COMP%] {\n  stroke-dashoffset: -100;\n  animation: _ngcontent-%COMP%_dash-check 0.9s 0.35s ease-in-out forwards;\n}\n\n.complete-title[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 5.25rem;\n  letter-spacing: 0.025em;\n  color: var(--md-sys-color-primary);\n}\n\n.fade-in-left[_ngcontent-%COMP%] {\n  --tw-translate-x: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  opacity: 0;\n  transition-delay: 200ms;\n  animation: _ngcontent-%COMP%_fadeInLeft 1s ease-out forwards; \n\n}\n\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0); \n\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_dash-check {\n  0% {\n    stroke-dashoffset: -100;\n  }\n  100% {\n    stroke-dashoffset: 900;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBRUk7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsY0FBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0lBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFHSjtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBRUksZ0NBQUE7QUFFUjtBQUFJO0VBQ0ksdUJBQUE7RUFFQSwrQ0FBQTtBQUVSO0FBQUk7RUFDSSx1QkFBQTtFQUVBLHFEQUFBO0FBRVI7O0FBR0k7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsdUJBQUE7RUFDQTtBQURBOztBQUtBO0VBQUEseUJBQUE7RUFBQSwrTEFBQTtFQUFBLFVBQUE7RUFBQSx1QkFBQTtFQUNBLDBDQUFBLEVBQUEsd0JBQUE7QUFEQTs7QUFJSjtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQSxFQUFBLGlDQUFBO0VBQ0Y7QUFDRjtBQVdBO0VBQ0k7SUFDSSx1QkFBQTtFQUROO0VBR0U7SUFDSSxvQkFBQTtFQUROO0FBQ0Y7QUFhQTtFQUNJO0lBQ0ksdUJBQUE7RUFITjtFQUtFO0lBQ0ksc0JBQUE7RUFITjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29tcGxldGUgKi9cbnN2ZyB7XG4gICAgQGFwcGx5IHctMjAgYmxvY2sgbXItNCBtYi00IHhsOnctMjQgM3hsOnctMzI7XG59XG5cbi5wYXRoIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICYuY2lyY2xlIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dDtcbiAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICYubGluZSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAwLjlzIDAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb246IGRhc2ggMC45cyAwLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICB9XG4gICAgJi5jaGVjayB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaC1jaGVjayAwLjlzIDAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb246IGRhc2gtY2hlY2sgMC45cyAwLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICB9XG59XG5cbi5jb21wbGV0ZS10aXRsZSB7XG4gICAgQGFwcGx5IHRleHQtN3hsIHRyYWNraW5nLXdpZGUgbXQtMTtcbiAgICBjb2xvcjogdmFyKC0tbWQtc3lzLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZmFkZS1pbi1sZWZ0IHtcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRlbGF5LTIwMCAtdHJhbnNsYXRlLXgtMTA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0IDFzIGVhc2Utb3V0IGZvcndhcmRzOyAvKiBBcHBseSB0aGUgYW5pbWF0aW9uICovXG59XG5cbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IC8qIEVuZCBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb24gKi9cbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XG4gICAgMCUge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgICAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaC1jaGVjayB7XG4gICAgMCUge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEwMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA5MDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gtY2hlY2sge1xuICAgIDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogOTAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 92776:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/fail/fail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FailComponent: () => (/* binding */ FailComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class FailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '';
  }
  static {
    this.ɵfac = function FailComponent_Factory(t) {
      return new (t || FailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FailComponent,
      selectors: [["web-fail"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 1,
      consts: [[1, "md:flex", "items-start", "justify-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 160 160"], ["fill", "none", "stroke", "var(--md-sys-color-error)", "stroke-width", "10", "stroke-miterlimit", "10", "cx", "80", "cy", "80", "r", "70", 1, "path", "circle"], ["x1", "55", "y1", "55", "x2", "105", "y2", "105", "stroke", "var(--md-sys-color-error)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "x-line-1"], ["x1", "105", "y1", "55", "x2", "55", "y2", "105", "stroke", "var(--md-sys-color-error)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "x-line-2"], [1, "fade-in-left"], [1, "fail-title"]],
      template: function FailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2)(3, "line", 3)(4, "line", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: block;\n  width: 5rem;\n}\n@media (min-width: 1280px) {\n  svg[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n}\n@media (min-width: 1600px) {\n  svg[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n.path.circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out;\n}\n.path.x-line-1[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: _ngcontent-%COMP%_dash 0.9s 0.35s ease-in-out forwards;\n}\n.path.x-line-2[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: _ngcontent-%COMP%_dash 0.9s 0.5s ease-in-out forwards;\n}\n\n.fail-title[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 5.25rem;\n  letter-spacing: 0.025em;\n  color: var(--md-sys-color-error);\n}\n\n.fade-in-left[_ngcontent-%COMP%] {\n  --tw-translate-x: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  opacity: 0;\n  transition-delay: 200ms;\n  animation: _ngcontent-%COMP%_fadeInLeft 1s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9mYWlsL2ZhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUVJO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUVJLGdDQUFBO0FBRVI7QUFBSTtFQUNJLHVCQUFBO0VBRUEsK0NBQUE7QUFFUjtBQUFJO0VBQ0ksdUJBQUE7RUFFQSw4Q0FBQTtBQUVSOztBQUdJO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLHVCQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLHlCQUFBO0VBQUEsK0xBQUE7RUFBQSxVQUFBO0VBQUEsdUJBQUE7RUFDQTtBQURBOztBQUlKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBQ0Y7QUFDRjtBQVdBO0VBQ0k7SUFDSSx1QkFBQTtFQUROO0VBR0U7SUFDSSxvQkFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYWlsICovXG5zdmcge1xuICAgIEBhcHBseSB3LTIwIGJsb2NrIG1yLTQgbWItNCB4bDp3LTI0IDN4bDp3LTMyO1xufVxuXG4ucGF0aCB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAmLmNpcmNsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAwLjlzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICAmLngtbGluZS0xIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDAuOXMgMC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAwLjlzIDAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgIH1cbiAgICAmLngtbGluZS0yIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDAuOXMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDAuOXMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICB9XG59XG5cbi5mYWlsLXRpdGxlIHtcbiAgICBAYXBwbHkgdGV4dC03eGwgdHJhY2tpbmctd2lkZSBtdC0xO1xuICAgIGNvbG9yOiB2YXIoLS1tZC1zeXMtY29sb3ItZXJyb3IpO1xufVxuXG4uZmFkZS1pbi1sZWZ0IHtcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRlbGF5LTIwMCAtdHJhbnNsYXRlLXgtMTA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0IDFzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHtcbiAgICAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 60132:
/*!*************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompleteComponent: () => (/* reexport safe */ _complete_complete_component__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent),
/* harmony export */   FailComponent: () => (/* reexport safe */ _fail_fail_component__WEBPACK_IMPORTED_MODULE_2__.FailComponent),
/* harmony export */   PendingComponent: () => (/* reexport safe */ _pending_pending_component__WEBPACK_IMPORTED_MODULE_3__.PendingComponent),
/* harmony export */   ResultEmptyComponent: () => (/* reexport safe */ _result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_0__.ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-empty/result-empty.component */ 9898);
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete/complete.component */ 7398);
/* harmony import */ var _fail_fail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fail/fail.component */ 92776);
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending/pending.component */ 69650);





/***/ }),

/***/ 69650:
/*!*********************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/pending/pending.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingComponent: () => (/* binding */ PendingComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class PendingComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '';
  }
  static {
    this.ɵfac = function PendingComponent_Factory(t) {
      return new (t || PendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PendingComponent,
      selectors: [["web-pending"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 1,
      consts: [[1, "md:flex", "items-start", "justify-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 160 160"], ["fill", "none", "stroke", "var(--md-sys-color-surface-tint)", "stroke-width", "10", "stroke-miterlimit", "10", "cx", "80", "cy", "80", "r", "70", 1, "path"], ["x1", "80", "y1", "80", "x2", "80", "y2", "44", "stroke", "var(--md-sys-color-surface-tint)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "hour-hand"], ["x1", "80", "y1", "80", "x2", "110", "y2", "80", "stroke", "var(--md-sys-color-surface-tint)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "minute-hand"], ["fill", "var(--md-sys-color-surface-tint)", "cx", "80", "cy", "80", "r", "6"], [1, "fade-in-left"], [1, "pending-title"]],
      template: function PendingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2)(3, "line", 3)(4, "line", 4)(5, "circle", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: block;\n  width: 5rem;\n}\n@media (min-width: 1280px) {\n  svg[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n}\n@media (min-width: 1600px) {\n  svg[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n.path.hour-hand[_ngcontent-%COMP%] {\n  transform-origin: 80px 80px;\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out, _ngcontent-%COMP%_tick-hour 6s linear infinite;\n}\n.path.minute-hand[_ngcontent-%COMP%] {\n  transform-origin: 80px 80px;\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out, _ngcontent-%COMP%_tick-minute 1s linear infinite;\n}\n\n.pending-title[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 5.25rem;\n  letter-spacing: 0.025em;\n  color: var(--md-sys-color-surface-tint);\n}\n\n.fade-in-left[_ngcontent-%COMP%] {\n  --tw-translate-x: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  opacity: 0;\n  transition-delay: 200ms;\n  animation: _ngcontent-%COMP%_fadeInLeft 1s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_tick-hour {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_tick-minute {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9wZW5kaW5nL3BlbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQUVJO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLDJCQUFBO0VBRUEsOERBQUE7QUFDUjtBQUNJO0VBQ0ksMkJBQUE7RUFFQSxnRUFBQTtBQUNSOztBQUlJO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLHVCQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLHlCQUFBO0VBQUEsK0xBQUE7RUFBQSxVQUFBO0VBQUEsdUJBQUE7RUFDQTtBQURBOztBQUlKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFBTyx1QkFBQTtFQUFQO0VBQ0E7SUFBTyx5QkFBQTtFQUVQO0FBQ0Y7QUFBQTtFQUNFO0lBQU8sdUJBQUE7RUFHUDtFQUZBO0lBQU8seUJBQUE7RUFLUDtBQUNGO0FBRUE7RUFDSTtJQUFPLHVCQUFBO0VBU1Q7RUFSRTtJQUFPLG9CQUFBO0VBV1Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBlbmRpbmcgKi9cbnN2ZyB7XG4gICAgQGFwcGx5IHctMjAgYmxvY2sgbXItNCBtYi00IHhsOnctMjQgM3hsOnctMzI7XG59XG5cbi5wYXRoIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIFxuICAgICYuaG91ci1oYW5kIHtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogODBweCA4MHB4O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAwLjlzIGVhc2UtaW4tb3V0LCB0aWNrLWhvdXIgNnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dCwgdGljay1ob3VyIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gICAgJi5taW51dGUtaGFuZCB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDgwcHggODBweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dCwgdGljay1taW51dGUgMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dCwgdGljay1taW51dGUgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbn1cblxuLnBlbmRpbmctdGl0bGUge1xuICAgIEBhcHBseSB0ZXh0LTd4bCB0cmFja2luZy13aWRlIG10LTE7XG4gICAgY29sb3I6IHZhcigtLW1kLXN5cy1jb2xvci1zdXJmYWNlLXRpbnQpO1xufVxuXG4uZmFkZS1pbi1sZWZ0IHtcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRlbGF5LTIwMCAtdHJhbnNsYXRlLXgtMTA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0IDFzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGljay1ob3VyIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgdGljay1taW51dGUge1xuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8gICB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlICAgeyBzdHJva2UtZGFzaG9mZnNldDogMTAwMDsgfVxuICAgIDEwMCUgeyBzdHJva2UtZGFzaG9mZnNldDogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlICAgeyBzdHJva2UtZGFzaG9mZnNldDogMTAwMDsgfVxuICAgIDEwMCUgeyBzdHJva2UtZGFzaG9mZnNldDogMDsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9898:
/*!*******************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/result-empty/result-empty.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultEmptyComponent: () => (/* binding */ ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

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
      decls: 5,
      vars: 1,
      consts: [[1, "empty-content"], [1, "material-symbols-rounded"], [1, "text-xl"]],
      template: function ResultEmptyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "draft");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: [".empty-content[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    align-items: center;\n\n    justify-content: center;\n\n    border-radius: 0.5rem;\n\n    background-color: rgb(2 132 199 / 0.2);\n\n    padding-top: 2.5rem;\n\n    padding-bottom: 2.5rem;\n\n    opacity: 0.6\n}\n\nh1[_ngcontent-%COMP%], .material-symbols-rounded[_ngcontent-%COMP%] {\n\n    padding-left: 0.25rem;\n\n    padding-right: 0.25rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(3 105 161 / var(--tw-text-opacity, 1))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQtZW1wdHkvcmVzdWx0LWVtcHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGFBQUE7O0lBQUEsbUJBQUE7O0lBQUEsdUJBQUE7O0lBQUEscUJBQUE7O0lBQUEsc0NBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFLQTs7O0lBQUEscUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1jb250ZW50IHtcbiAgICBAYXBwbHkgYmctc2t5LTYwMC8yMCBvcGFjaXR5LTYwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgcHktMTA7XG59XG5cbmgxLFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgQGFwcGx5IHRleHQtc2t5LTcwMCBweC0xO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 25611:
/*!*****************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/camp-reg-control/camp-reg-control.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegControlComponent: () => (/* binding */ CampRegControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zip-code-control/zip-code-control.component */ 72257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages











const _c0 = ["currZipCode"];
function CampRegControlComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r18);
  }
}
function CampRegControlComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_13_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["custName"].errors, "\u59D3\u540D"));
  }
}
function CampRegControlComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r20);
  }
}
function CampRegControlComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_23_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["custIdNo"].errors, "\u8EAB\u5206\u8B49\u865F"));
  }
}
function CampRegControlComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", msg_r22, " ");
  }
}
function CampRegControlComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_33_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.formHelper.errorMsgs((tmp_0_0 = ctx_r5.f["contentJto"].get("currJob")) == null ? null : tmp_0_0.errors, "\u73FE\u8077"));
  }
}
function CampRegControlComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r24);
  }
}
function CampRegControlComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_46_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.formHelper.errorMsgs(ctx_r7.f["custMobile"].errors, "\u806F\u7D61\u624B\u6A5F"));
  }
}
function CampRegControlComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r26);
  }
}
function CampRegControlComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_55_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.formHelper.errorMsgs(ctx_r9.f["custEmail"].errors, "\u96FB\u5B50\u4FE1\u7BB1"));
  }
}
function CampRegControlComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r28);
  }
}
function CampRegControlComponent_mat_error_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_68_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.formHelper.errorMsgs(ctx_r12.f["custAddr"].errors, "\u806F\u7D61\u5730\u5740"));
  }
}
function CampRegControlComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_81_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r30);
  }
}
function CampRegControlComponent_mat_error_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_81_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.formHelper.errorMsgs(ctx_r14.f["buyerCode"].errors, "\u7D71\u4E00\u7DE8\u865F"));
  }
}
function CampRegControlComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CampRegControlComponent_mat_error_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r32);
  }
}
function CampRegControlComponent_mat_error_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CampRegControlComponent_mat_error_90_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.formHelper.errorMsgs(ctx_r16.f["buyerName"].errors, "\u8CB7\u53D7\u4EBA\u540D\u7A31"));
  }
}
class CampRegControlComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
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
  // ngOnInit(): void { }
  // NG_VALUE_ACCESSOR 實作
  writeValue(value) {
    if (!value) value = new _core_models__WEBPACK_IMPORTED_MODULE_1__.CampRegDto();
    value.contentJto = (value.content || '').isUndefinedOrNullOrEmpty() ? new _core_models__WEBPACK_IMPORTED_MODULE_1__.CampRegContentJto() : JSON.parse(value.content || '{}');
    if (!value.custZipCodeId) value.custZipCodeId = null;
    this.valForm.patchValue(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
    this.valForm.valueChanges.subscribe(res => {
      res.content = JSON.stringify(res.contentJto || new _core_models__WEBPACK_IMPORTED_MODULE_1__.CampRegContentJto());
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
      regAt: [new Date()],
      campId: [0],
      campName: [null],
      custId: [0],
      custIdNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
      custName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      custEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(150)]],
      custMobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12)]],
      custZipCodeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      custAddr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
      custOrderId: [0],
      cxlAt: [null],
      buyerCode: [null],
      buyerName: [null],
      status: [0],
      crtBy: [null],
      crtAt: [null],
      contentJto: this._fb.group({
        currJob: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
      })
    });
    this.f['custIdNo'].valueChanges.subscribe(res => {
      const upperStr = String(res || '').trim().toUpperCase();
      if (upperStr.isUndefinedOrNullOrEmpty() == false && upperStr !== res) this.f['custIdNo'].setValue(upperStr, {
        emitEvent: false
      });
    });
  }
  static {
    this.ɵfac = function CampRegControlComponent_Factory(t) {
      return new (t || CampRegControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CampRegControlComponent,
      selectors: [["web-camp-reg-control"]],
      viewQuery: function CampRegControlComponent_Query(rf, ctx) {
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
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CampRegControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CampRegControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 91,
      vars: 60,
      consts: [[1, "account-wrap", 3, "formGroup"], [1, "form-section"], [1, "title"], [1, "input-group", "lg:grid-cols-3"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "custName", 3, "required"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "custIdNo", 3, "required"], ["formGroupName", "contentJto"], ["matInput", "", "type", "text", "formControlName", "currJob", 3, "required"], [1, "input-group", "lg:grid-cols-2"], ["matInput", "", "type", "text", "formControlName", "custMobile", 3, "required"], ["matInput", "", "type", "text", "formControlName", "custEmail", 3, "required"], [1, "col-span-full"], [1, "multi-inputs", "md:grid-cols-3"], ["formControlName", "custZipCodeId", 1, "w-full", 3, "required"], ["currZipCode", ""], ["appearance", "outline", 1, "w-full", "fill-black", "md:col-span-2"], ["matInput", "", "type", "text", "formControlName", "custAddr", 3, "required"], [1, "lg:col-span-1"], ["matInput", "", "type", "text", "formControlName", "buyerCode", 3, "required"], [1, "lg:col-span-2"], ["matInput", "", "type", "text", "formControlName", "buyerName", 3, "required"], [1, "required-mark"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function CampRegControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "section", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u57FA\u672C\u8CC7\u6599");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 3)(5, "li")(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u59D3\u540D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CampRegControlComponent_span_8_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CampRegControlComponent_mat_error_13_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "div", 4)(16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u8EAB\u5206\u8B49\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CampRegControlComponent_span_18_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CampRegControlComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li")(26, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\u73FE\u8077 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CampRegControlComponent_span_28_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, CampRegControlComponent_mat_error_33_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "section", 1)(35, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "\u806F\u7D61\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ul", 12)(38, "li")(39, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "\u806F\u7D61\u624B\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, CampRegControlComponent_span_41_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CampRegControlComponent_mat_error_46_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li")(48, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CampRegControlComponent_span_50_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CampRegControlComponent_mat_error_55_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li", 15)(57, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\u806F\u7D61\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, CampRegControlComponent_span_59_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](60, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "web-zip-code-control", 17, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-form-field", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CampRegControlComponent_mat_error_68_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "section", 1)(70, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "\u6536\u64DA\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "ul", 3)(73, "li", 21)(74, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "\u7D71\u4E00\u7DE8\u865F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, CampRegControlComponent_span_76_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](77, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](80, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, CampRegControlComponent_mat_error_81_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "li", 23)(83, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "\u8CB7\u53D7\u4EBA\u540D\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, CampRegControlComponent_span_85_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](86, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, CampRegControlComponent_mat_error_90_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 26, ctx.f["custName"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 28, ctx.f["custName"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["custName"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 30, ctx.f["custIdNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 32, ctx.f["custIdNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["custIdNo"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 34, ctx.f["contentJto"].get("currJob")));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 36, ctx.f["currJob"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.f["contentJto"].get("currJob")) == null ? null : tmp_9_0.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 38, ctx.f["custMobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 40, ctx.f["custMobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["custMobile"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 42, ctx.f["custEmail"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 44, ctx.f["custEmail"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["custEmail"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](60, 46, ctx.f["custAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 48, ctx.f["custZipCodeId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 50, ctx.f["custAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["custAddr"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](77, 52, ctx.f["buyerCode"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](80, 54, ctx.f["buyerCode"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["buyerCode"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](86, 56, ctx.f["buyerName"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 58, ctx.f["buyerName"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["buyerName"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__.ZipCodeControlComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 71925:
/*!*********************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/cust-group-control/cust-group-control.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupControlComponent: () => (/* binding */ CustGroupControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zip-code-control/zip-code-control.component */ 72257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 34651);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages














const _c0 = ["currZipCode"];
function CustGroupControlComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_13_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_22_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_31_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_40_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_53_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_62_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_71_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_84_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_97_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_106_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_118_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustGroupControlComponent_ng_container_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-option", 37);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_128_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_137_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_147_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_156_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_168_div_1_Template, 2, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustGroupControlComponent_mat_error_178_div_1_Template, 2, 1, "div", 27);
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
  // ngOnInit(): void { }
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
      consts: [[1, "account-wrap", 3, "formGroup"], [1, "form-section"], [1, "title"], [1, "input-group", "lg:grid-cols-3"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "name", 3, "required"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "taxId", 3, "required"], ["matInput", "", "type", "text", "formControlName", "ownerTitle", 3, "required"], ["matInput", "", "type", "text", "formControlName", "owner", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phone", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phoneExt", 3, "required"], ["matInput", "", "type", "text", "formControlName", "email", 3, "required"], [1, "col-span-full"], [1, "multi-inputs", "grid-cols-3"], ["formControlName", "currZipCodeId", 3, "required"], ["currZipCode", ""], ["appearance", "outline", 1, "w-full", "fill-black", "col-span-2"], ["matInput", "", "type", "text", "formControlName", "currAddr", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpTitle", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpName", 3, "required"], ["matInput", "", "formControlName", "cpBirthAt", 3, "matDatepicker", "required"], ["matSuffix", "", 3, "for"], ["birthAtDatepicker", ""], ["formControlName", "cpGender", 3, "required"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "cpIdNo", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpMobile", 3, "required"], ["matInput", "", "type", "text", "formControlName", "cpEmail", 3, "required"], [1, "input-group"], ["formGroupName", "contentJto"], ["matInput", "", "formControlName", "cpEducation", "rows", "4", "placeholder", "\u5B78\u6B77...", 3, "required"], ["matInput", "", "formControlName", "cpExperience", "rows", "4", "placeholder", "\u7D93\u6B77...", 3, "required"], [1, "required-mark"], [1, "text-xs"], [3, "value"]],
      template: function CustGroupControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "section", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u57FA\u672C\u8CC7\u6599");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 3)(5, "li")(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u5718\u9AD4\u540D\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CustGroupControlComponent_span_8_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CustGroupControlComponent_mat_error_13_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u7D71\u4E00\u7DE8\u865F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CustGroupControlComponent_span_17_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CustGroupControlComponent_mat_error_22_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li")(24, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u8077\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CustGroupControlComponent_span_26_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CustGroupControlComponent_mat_error_31_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "li")(33, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "\u8CA0\u8CAC\u4EBA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CustGroupControlComponent_span_35_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CustGroupControlComponent_mat_error_40_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "section", 1)(42, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\u806F\u7D61\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ul", 3)(45, "li")(46, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\u806F\u7D61\u96FB\u8A71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CustGroupControlComponent_span_48_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CustGroupControlComponent_mat_error_53_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li")(55, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "\u5206\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, CustGroupControlComponent_span_57_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, CustGroupControlComponent_mat_error_62_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "li")(64, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, CustGroupControlComponent_span_66_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](70, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, CustGroupControlComponent_mat_error_71_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li", 15)(73, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, CustGroupControlComponent_span_75_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "web-zip-code-control", 17, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](80, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](83, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, CustGroupControlComponent_mat_error_84_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "section", 1)(86, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "\u6703\u54E1\u4EE3\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "ul", 3)(89, "li")(90, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\u8077\u7A31 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, CustGroupControlComponent_span_92_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](96, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, CustGroupControlComponent_mat_error_97_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "li")(99, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "\u59D3\u540D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, CustGroupControlComponent_span_101_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](102, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](105, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, CustGroupControlComponent_mat_error_106_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "li")(108, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "\u51FA\u751F\u65E5\u671F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, CustGroupControlComponent_span_110_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](111, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](114, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "mat-datepicker-toggle", 24)(116, "mat-datepicker", null, 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, CustGroupControlComponent_mat_error_118_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "li")(120, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "\u6027\u5225 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, CustGroupControlComponent_span_122_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](123, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "mat-form-field", 6)(125, "mat-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](126, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, CustGroupControlComponent_ng_container_127_Template, 3, 2, "ng-container", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](128, CustGroupControlComponent_mat_error_128_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "li")(130, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "\u8EAB\u5206\u8B49\u865F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, CustGroupControlComponent_span_132_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](133, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](136, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, CustGroupControlComponent_mat_error_137_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "ul", 3)(139, "li")(140, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\u884C\u52D5\u96FB\u8A71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, CustGroupControlComponent_span_142_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](143, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](146, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, CustGroupControlComponent_mat_error_147_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "li")(149, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](151, CustGroupControlComponent_span_151_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](152, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](155, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, CustGroupControlComponent_mat_error_156_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "ul", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](158, 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "li")(160, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "\u5B78\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](162, CustGroupControlComponent_span_162_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](163, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "mat-form-field", 6)(165, "textarea", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](166, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "            ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](168, CustGroupControlComponent_mat_error_168_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "li")(170, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "\u7D93\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](172, CustGroupControlComponent_span_172_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](173, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "mat-form-field", 6)(175, "textarea", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](176, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "            ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](178, CustGroupControlComponent_mat_error_178_Template, 2, 1, "mat-error", 8);
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

/***/ 12629:
/*!***********************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/cust-member-control/cust-member-control.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberControlComponent: () => (/* binding */ CustMemberControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zip-code-control/zip-code-control.component */ 72257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 34651);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages















const _c0 = ["resiZipCode"];
const _c1 = ["currZipCode"];
function CustMemberControlComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_13_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_25_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CustMemberControlComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-option", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_35_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_45_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_55_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_68_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_77_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_86_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_95_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_108_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_124_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", msg_r56, " ");
  }
}
function CustMemberControlComponent_mat_error_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_138_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", msg_r58, " ");
  }
}
function CustMemberControlComponent_mat_error_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_147_div_1_Template, 2, 1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", msg_r60, " ");
  }
}
function CustMemberControlComponent_mat_error_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustMemberControlComponent_mat_error_156_div_1_Template, 2, 1, "div", 13);
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
    this.isSameAsAbove = false;
    this._sameAsAboveSubs = [];
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.doFormInit();
  }
  // Custom control required methods
  // ngOnInit(): void { }
  // NG_VALUE_ACCESSOR 實作
  writeValue(value) {
    if (!value) return;
    this.isSameAsAbove = false;
    this._clearSameAsAboveSubs();
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
  onSameAsAboveChange(checked) {
    this.isSameAsAbove = checked;
    if (checked) {
      // 立即複製戶籍地址到聯絡地址
      this.f['currZipCodeId'].setValue(this.f['resiZipCodeId'].value);
      this.f['currAddr'].setValue(this.f['resiAddr'].value);
      // 訂閱戶籍地址變更，即時同步
      this._sameAsAboveSubs.push(this.f['resiZipCodeId'].valueChanges.subscribe(val => {
        this.f['currZipCodeId'].setValue(val);
      }), this.f['resiAddr'].valueChanges.subscribe(val => {
        this.f['currAddr'].setValue(val);
      }));
    } else {
      this._clearSameAsAboveSubs();
    }
  }
  _clearSameAsAboveSubs() {
    this._sameAsAboveSubs.forEach(s => s.unsubscribe());
    this._sameAsAboveSubs = [];
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
      vars: 111,
      consts: [[1, "account-wrap", 3, "formGroup"], [1, "form-section"], [1, "title"], [1, "input-group", "lg:grid-cols-3"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "type", "text", "formControlName", "name", 3, "required"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "formControlName", "birthAt", 3, "matDatepicker", "required"], ["matSuffix", "", 3, "for"], ["birthAtDatepicker", ""], ["formControlName", "gender", 3, "required"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "idNo", 3, "required"], ["matInput", "", "type", "text", "formControlName", "recommender", 3, "required"], ["matInput", "", "type", "text", "formControlName", "mobile", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phone", 3, "required"], ["matInput", "", "type", "text", "formControlName", "phoneExt", 3, "required"], [1, "col-span-full"], ["matInput", "", "type", "text", "formControlName", "email", 3, "required"], [1, "multi-inputs", "md:grid-cols-3"], ["formControlName", "resiZipCodeId", 1, "w-full", 3, "required"], ["resiZipCode", ""], ["appearance", "outline", 1, "w-full", "fill-black", "md:col-span-2"], ["matInput", "", "type", "text", "formControlName", "resiAddr", 3, "required"], ["color", "primary", 1, "-ml-2", 3, "checked", "change"], [1, "text-base", "pb-0.5", "min-w-11", "block", "-ml-2"], ["formControlName", "currZipCodeId", 1, "w-full", 3, "required", "disabled"], ["currZipCode", ""], ["matInput", "", "type", "text", "formControlName", "currAddr", 3, "required", "readonly"], [1, "input-group"], ["formGroupName", "contentJto"], ["matInput", "", "formControlName", "education", "rows", "4", "placeholder", "\u60A8\u7684\u5B78\u6B77...", 3, "required"], ["matInput", "", "formControlName", "experience", "rows", "4", "placeholder", "\u60A8\u7684\u7D93\u6B77...", 3, "required"], ["matInput", "", "type", "text", "formControlName", "currJob", 3, "required"], [1, "required-mark"], [1, "text-xs"], [3, "value"]],
      template: function CustMemberControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "section", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u57FA\u672C\u8CC7\u6599");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 3)(5, "li")(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u59D3\u540D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CustMemberControlComponent_span_8_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CustMemberControlComponent_mat_error_13_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u51FA\u751F\u65E5\u671F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CustMemberControlComponent_span_17_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "mat-datepicker-toggle", 10)(23, "mat-datepicker", null, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CustMemberControlComponent_mat_error_25_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li")(27, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\u6027\u5225 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CustMemberControlComponent_span_29_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 6)(32, "mat-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CustMemberControlComponent_ng_container_34_Template, 3, 2, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CustMemberControlComponent_mat_error_35_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "li")(37, "div", 4)(38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\u8EAB\u5206\u8B49\u865F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CustMemberControlComponent_span_40_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CustMemberControlComponent_mat_error_45_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li")(47, "div", 4)(48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\u63A8\u85A6\u4EBA");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CustMemberControlComponent_span_50_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CustMemberControlComponent_mat_error_55_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "section", 1)(57, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\u806F\u7D61\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ul", 3)(60, "li")(61, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "\u806F\u7D61\u624B\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, CustMemberControlComponent_span_63_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CustMemberControlComponent_mat_error_68_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li")(70, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "\u806F\u7D61\u96FB\u8A71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, CustMemberControlComponent_span_72_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, CustMemberControlComponent_mat_error_77_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "li")(79, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "\u5206\u6A5F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, CustMemberControlComponent_span_81_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](85, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, CustMemberControlComponent_mat_error_86_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "li", 19)(88, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "\u96FB\u5B50\u4FE1\u7BB1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, CustMemberControlComponent_span_90_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](91, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, CustMemberControlComponent_mat_error_95_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "li", 19)(97, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "\u6236\u85C9\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, CustMemberControlComponent_span_99_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "web-zip-code-control", 22, 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-form-field", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](106, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](107, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, CustMemberControlComponent_mat_error_108_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "li", 19)(110, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "\u806F\u7D61\u5730\u5740 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](112, CustMemberControlComponent_span_112_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](113, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "mat-checkbox", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CustMemberControlComponent_Template_mat_checkbox_change_114_listener($event) {
            return ctx.onSameAsAboveChange($event.checked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "\u540C\u4E0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](118, "web-zip-code-control", 28, 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](120, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "mat-form-field", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](122, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](123, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, CustMemberControlComponent_mat_error_124_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "section", 1)(126, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "\u5B78\u7D93\u6B77");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ul", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](129, 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "li")(131, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "\u5B78\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](133, CustMemberControlComponent_span_133_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](134, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "textarea", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](137, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, CustMemberControlComponent_mat_error_138_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "li")(140, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\u7D93\u6B77 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, CustMemberControlComponent_span_142_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](143, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "textarea", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](146, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, CustMemberControlComponent_mat_error_147_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "li")(149, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "\u73FE\u8077 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](151, CustMemberControlComponent_span_151_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](152, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](155, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, CustMemberControlComponent_mat_error_156_Template, 2, 1, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
          let tmp_44_0;
          let tmp_47_0;
          let tmp_50_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 51, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 53, ctx.f["name"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["name"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 55, ctx.f["birthAt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r3)("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 57, ctx.f["birthAt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["birthAt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 59, ctx.f["gender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 61, ctx.f["gender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sharedDataServ.genderOpts);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["gender"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 63, ctx.f["idNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 65, ctx.f["idNo"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["idNo"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 67, ctx.f["recommender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 69, ctx.f["recommender"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["recommender"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 71, ctx.f["mobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 73, ctx.f["mobile"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["mobile"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 75, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 77, ctx.f["phone"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["phone"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 79, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](85, 81, ctx.f["phoneExt"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["phoneExt"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](91, 83, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 85, ctx.f["email"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](100, 87, ctx.f["resiAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](104, 89, ctx.f["resiZipCodeId"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](107, 91, ctx.f["resiAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["resiAddr"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](113, 93, ctx.f["currAddr"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isSameAsAbove);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](120, 95, ctx.f["currZipCodeId"]))("disabled", ctx.isSameAsAbove);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](123, 97, ctx.f["currAddr"]))("readonly", ctx.isSameAsAbove);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["currAddr"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](134, 99, ctx.f["education"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](137, 101, ctx.f["education"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_44_0 = ctx.f["contentJto"].get("education")) == null ? null : tmp_44_0.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](143, 103, ctx.f["experience"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](146, 105, ctx.f["experience"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_47_0 = ctx.f["contentJto"].get("experience")) == null ? null : tmp_47_0.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](152, 107, ctx.f["currJob"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](155, 109, ctx.f["currJob"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_50_0 = ctx.f["contentJto"].get("currJob")) == null ? null : tmp_50_0.errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__.ZipCodeControlComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 72255:
/*!***************************************************!*\
  !*** ./apps/web/src/app/shared/controls/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegControlComponent: () => (/* reexport safe */ _camp_reg_control_camp_reg_control_component__WEBPACK_IMPORTED_MODULE_0__.CampRegControlComponent),
/* harmony export */   CustGroupControlComponent: () => (/* reexport safe */ _cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_1__.CustGroupControlComponent),
/* harmony export */   CustMemberControlComponent: () => (/* reexport safe */ _cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent),
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _camp_reg_control_camp_reg_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camp-reg-control/camp-reg-control.component */ 25611);
/* harmony import */ var _cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cust-group-control/cust-group-control.component */ 71925);
/* harmony import */ var _cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cust-member-control/cust-member-control.component */ 12629);
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zip-code-control/zip-code-control.component */ 72257);





/***/ }),

/***/ 72257:
/*!*****************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/zip-code-control/zip-code-control.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* binding */ ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ary-filter.pipe */ 44832);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
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
    this.disabled = false;
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.getCaches();
  }
  // ngOnInit(): void { }
  ngOnChanges(changes) {
    if (changes['disabled'] && this.valForm) {
      this._applyDisabledState();
    }
  }
  writeValue(value) {
    this.valForm = this.fb.group({
      id: [value],
      city: [null],
      district: [null]
    });
    this.doSetValidators();
    this._applyDisabledState();
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
  _applyDisabledState() {
    if (!this.valForm) return;
    const opts = {
      emitEvent: false
    };
    if (this.disabled) {
      this.f['city'].disable(opts);
      this.f['district'].disable(opts);
    } else {
      this.f['city'].enable(opts);
      this.f['district'].enable(opts);
      this.doSetValidators();
    }
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
        required: "required",
        disabled: "disabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
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

/***/ 43889:
/*!**************************************************!*\
  !*** ./apps/web/src/app/shared/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 16567);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 38585);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 44457);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ 72255);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets */ 25446);
/* harmony import */ var _components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panorama/panorama.component */ 39827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);



// Third party packages



// Custom packages






const CUST_MODULES = [_core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule];
const CUST_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FailComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PendingComponent];
const CUST_CONTROLS = [_controls__WEBPACK_IMPORTED_MODULE_2__.CampRegControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustGroupControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent];
const CUST_WIDGETS = [_widgets__WEBPACK_IMPORTED_MODULE_3__.CustEditWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent];
const THIRD_MODULES = [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, CUST_MODULES, THIRD_MODULES, _core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FailComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PendingComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CampRegControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustGroupControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.CustEditWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent, _components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_4__.PanoramaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule],
    exports: [_core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FailComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PendingComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CampRegControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustGroupControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.CustMemberControlComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.CustEditWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule, _components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_4__.PanoramaComponent]
  });
})();

/***/ }),

/***/ 90252:
/*!****************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/cust-edit-widget/cust-edit-widget.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustEditWidgetComponent: () => (/* binding */ CustEditWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _controls___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls/ */ 72255);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _controls_cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls/cust-group-control/cust-group-control.component */ 71925);
/* harmony import */ var _controls_cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls/cust-member-control/cust-member-control.component */ 12629);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
/* eslint-disable @typescript-eslint/no-explicit-any */



// Custom packages















function CustEditWidgetComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "web-cust-group-control", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CustEditWidgetComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "web-cust-member-control", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CustEditWidgetComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 20);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustEditWidgetComponent_mat_error_20_div_1_Template, 2, 1, "div", 22);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 20);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustEditWidgetComponent_mat_error_32_div_1_Template, 2, 1, "div", 22);
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
    this._commerceApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.CommerceApiServ);
    this._fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router);
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
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(64)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(64)]],
      type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(8)]],
      custGroup: [null],
      custMember: [null]
    }, {
      validators: [_core_shared__WEBPACK_IMPORTED_MODULE_0__.Validation.match('password', 'confirmPassword')]
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
            this.bbdNotifyServ.error(`註冊會員失敗，請再重試一次。`);
            return;
          }
          const allowPayFlow = !(res.postReq || '').isUndefinedOrNullOrEmpty();
          if (allowPayFlow) {
            this._commerceApiServ.postReq = res.postReq;
            this._router.navigate(['/result/payment-redirect']);
          } else {
            this.bbdNotifyServ.success(`註冊會員成功。`);
            this._router.navigate(['/auth/signup/complete']);
          }
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
      consts: [[1, "account-wrap", 3, "formGroup"], [1, "inner-wrap"], [4, "ngIf"], [1, "form-section"], [1, "title"], [1, "input-group", "lg:grid-cols-2"], [1, "form-label"], ["class", "required-mark", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "fill-black"], ["matInput", "", "formControlName", "password", 3, "type", "required"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "min-w-8"], ["class", "text-xs", 4, "ngIf"], ["matInput", "", "formControlName", "confirmPassword", 3, "type", "required"], [1, "toolbar"], [1, "btn-primary", "btn-lg", 3, "click"], ["formControlName", "custGroup"], ["groupCtrl", ""], ["formControlName", "custMember"], ["memberCtrl", ""], [1, "required-mark"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function CustEditWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "web-glass-bg")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CustEditWidgetComponent_ng_container_3_Template, 3, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CustEditWidgetComponent_ng_container_4_Template, 3, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "section", 3)(6, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u60A8\u7684\u5BC6\u78BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ul", 5)(9, "li")(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, CustEditWidgetComponent_span_12_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustEditWidgetComponent_Template_button_click_17_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CustEditWidgetComponent_mat_error_20_Template, 2, 1, "mat-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li")(22, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\u78BA\u8A8D\u5BC6\u78BC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CustEditWidgetComponent_span_24_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-form-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustEditWidgetComponent_Template_button_click_29_listener() {
            return ctx.passwordHide = !ctx.passwordHide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, CustEditWidgetComponent_mat_error_32_Template, 2, 1, "mat-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 14)(34, "button", 15);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__.GlassBgComponent, _controls_cust_group_control_cust_group_control_component__WEBPACK_IMPORTED_MODULE_5__.CustGroupControlComponent, _controls_cust_member_control_cust_member_control_component__WEBPACK_IMPORTED_MODULE_6__.CustMemberControlComponent, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_7__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31108:
/*!**************************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/image-preview-dialog-widget/image-preview-dialog-widget.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreviewDialogWidgetComponent: () => (/* binding */ ImagePreviewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



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

/***/ 25446:
/*!**************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustEditWidgetComponent: () => (/* reexport safe */ _cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_0__.CustEditWidgetComponent),
/* harmony export */   ImagePreviewDialogWidgetComponent: () => (/* reexport safe */ _image_preview_dialog_widget_image_preview_dialog_widget_component__WEBPACK_IMPORTED_MODULE_1__.ImagePreviewDialogWidgetComponent),
/* harmony export */   JsonViewDialogWidgetComponent: () => (/* reexport safe */ _json_view_dialog_widget_json_view_dialog_widget_component__WEBPACK_IMPORTED_MODULE_2__.JsonViewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _cust_edit_widget_cust_edit_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cust-edit-widget/cust-edit-widget.component */ 90252);
/* harmony import */ var _image_preview_dialog_widget_image_preview_dialog_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-preview-dialog-widget/image-preview-dialog-widget.component */ 31108);
/* harmony import */ var _json_view_dialog_widget_json_view_dialog_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-view-dialog-widget/json-view-dialog-widget.component */ 35988);




/***/ }),

/***/ 35988:
/*!******************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/json-view-dialog-widget/json-view-dialog-widget.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonViewDialogWidgetComponent: () => (/* binding */ JsonViewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);




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

/***/ 50706:
/*!**************************************************!*\
  !*** ./apps/web/src/environments/environment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  siteName: '澐光客變系統',
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

/***/ 18867:
/*!******************************!*\
  !*** ./apps/web/src/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 74150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23489);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 59853:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.actions.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrAuthUserActionStates: () => (/* binding */ CurrAuthUserActionStates),
/* harmony export */   failureCurrAuthUserAction: () => (/* binding */ failureCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserAction: () => (/* binding */ initialCurrAuthUserAction),
/* harmony export */   requestCurrAuthUserAction: () => (/* binding */ requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* binding */ successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 99797);

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

/***/ 71220:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.effects.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrAuthUserEffects: () => (/* binding */ CurrAuthUserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 99497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 59853);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers */ 45963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);



// Custom packages






class CurrAuthUserEffects {
  constructor(actions$, appEnv, appUserApiServ) {
    this.actions$ = actions$;
    this.appEnv = appEnv;
    this.appUserApiServ = appUserApiServ;
    this.getCurrAuthUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
      return this.appUserApiServ.getCurrAuthUserInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
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
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction({
        payload: err
      }))));
    })));
  }
  static {
    this.ɵfac = function CurrAuthUserEffects_Factory(t) {
      return new (t || CurrAuthUserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_1__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__.AppUserApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: CurrAuthUserEffects,
      factory: CurrAuthUserEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 35726:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.reducer.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* binding */ CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   currAuthUserReducer: () => (/* binding */ currAuthUserReducer),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* binding */ initialCurrAuthUserCacheState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 59853);

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

/***/ 51452:
/*!******************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.selectors.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrAuthUserCache: () => (/* binding */ getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* binding */ getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* binding */ getCurrAuthUserState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.reducer */ 35726);


const getCurrAuthUserState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY);
const getCurrAuthUserLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getCurrAuthUserState, state => state.loading);
const getCurrAuthUserCache = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getCurrAuthUserState, state => state.cache);

/***/ }),

/***/ 34467:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 59853);
/* harmony import */ var _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curr-auth-user.reducer */ 35726);
/* harmony import */ var _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curr-auth-user.selectors */ 51452);




/***/ }),

/***/ 871:
/*!********************************************!*\
  !*** ./libs/core/src/lib/+states/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user */ 34467);
/* harmony import */ var _states_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.module */ 92723);



/***/ }),

/***/ 92723:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/+states/states.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatesModule: () => (/* binding */ StatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 99497);
/* harmony import */ var _curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user/curr-auth-user.reducer */ 35726);
/* harmony import */ var _curr_auth_user_curr_auth_user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curr-auth-user/curr-auth-user.effects */ 71220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








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

/***/ 20204:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/consts/global.const.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 84092:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/consts/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MAX_UTC_DATE_ISO_FORMAT: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT),
/* harmony export */   MAT_DATE_TW_FORMATS: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_TW_FORMATS),
/* harmony export */   PAGING_DEFAULT_PAGE_INDEX: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_INDEX),
/* harmony export */   PAGING_DEFAULT_PAGE_SIZE: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_SIZE)
/* harmony export */ });
/* harmony import */ var _global_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.const */ 20204);


/***/ }),

/***/ 63005:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/directives/image-fallback.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFallbackDirective: () => (/* binding */ ImageFallbackDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


class ImageFallbackDirective {
  constructor(el) {
    this.el = el;
    this.defaultUrl = 'assets/img/illustration/default-image.svg';
  }
  ngOnInit() {
    // 若 input 為空字串或 undefined，改用預設圖
    if (!this.fallbackUrl || this.fallbackUrl.trim() === '') {
      this.fallbackUrl = this.defaultUrl;
    }
    const element = this.el.nativeElement;
    if (!element.src || element.src.trim() === '') {
      element.src = this.fallbackUrl;
    }
  }
  onError() {
    const element = this.el.nativeElement;
    if (element.src !== this.fallbackUrl) {
      element.src = this.fallbackUrl;
    }
  }
  static {
    this.ɵfac = function ImageFallbackDirective_Factory(t) {
      return new (t || ImageFallbackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ImageFallbackDirective,
      selectors: [["img", "appImageFallback", ""]],
      hostBindings: function ImageFallbackDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImageFallbackDirective_error_HostBindingHandler() {
            return ctx.onError();
          });
        }
      },
      inputs: {
        fallbackUrl: ["appImageFallback", "fallbackUrl"]
      }
    });
  }
}

/***/ }),

/***/ 82658:
/*!***********************************************!*\
  !*** ./libs/core/src/lib/directives/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFallbackDirective: () => (/* reexport safe */ _image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective)
/* harmony export */ });
/* harmony import */ var _image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-fallback.directive */ 63005);


/***/ }),

/***/ 64720:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-admin-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminDto: () => (/* binding */ AppAdminDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

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

/***/ 64251:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-file-att-dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFileAttDto: () => (/* binding */ AppFileAttDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppFileAttDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppFileAtt {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 58625:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-news-msg-cat-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCatDto: () => (/* binding */ AppNewsMsgCatDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppNewsMsgCatDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgCat {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 5344:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-news-msg-dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgDto: () => (/* binding */ AppNewsMsgDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos */ 5851);


class AppNewsMsgDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsg {
  constructor() {
    super();
    this.contentJto = new _jtos__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgContentJto();
  }
}

/***/ }),

/***/ 21836:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-object-store-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppObjectStoreDto: () => (/* binding */ AppObjectStoreDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppObjectStoreDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppObjectStore {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 87583:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-role-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleDto: () => (/* binding */ AppRoleDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRoleDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRole {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 66915:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-role-route-dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRouteDto: () => (/* binding */ AppRoleRouteDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRoleRouteDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRoleRoute {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 83110:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-route-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteDto: () => (/* binding */ AppRouteDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRouteDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRoute {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 9364:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-user-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserDto: () => (/* binding */ AppUserDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppUserDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppUser {
  constructor() {
    super();
    this.adminId = 0;
    this.custId = 0;
    this.name = '';
  }
}

/***/ }),

/***/ 70129:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-user-role-dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRoleDto: () => (/* binding */ AppUserRoleDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppUserRoleDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppUserRole {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 71341:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/banner-ad-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAdDto: () => (/* binding */ BannerAdDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class BannerAdDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.BannerAd {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 74730:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/camp-attend-log-dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampAttendLogDto: () => (/* binding */ CampAttendLogDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class CampAttendLogDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CampAttendLog {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 87895:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/camp-reg-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegDto: () => (/* binding */ CampRegDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* harmony import */ var _jtos_camp_reg_content_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos/camp-reg-content-jto */ 73079);


class CampRegDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CampReg {
  constructor() {
    super();
    this.buyerCode = null;
    this.buyerName = null;
    this.contentJto = new _jtos_camp_reg_content_jto__WEBPACK_IMPORTED_MODULE_1__.CampRegContentJto();
  }
}

/***/ }),

/***/ 25223:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/campaign-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignDto: () => (/* binding */ CampaignDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos */ 5851);


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

/***/ 64540:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-group-dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupDto: () => (/* binding */ CustGroupDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* harmony import */ var _jtos_cust_group_content_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos/cust-group-content-jto */ 59796);


class CustGroupDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustGroup {
  constructor() {
    super();
    this.contentJto = new _jtos_cust_group_content_jto__WEBPACK_IMPORTED_MODULE_1__.CustGroupContentJto();
  }
}

/***/ }),

/***/ 93549:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-member-dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberDto: () => (/* binding */ CustMemberDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* harmony import */ var _jtos_cust_member_content_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos/cust-member-content-jto */ 55937);


class CustMemberDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustMember {
  constructor() {
    super();
    this.contentJto = new _jtos_cust_member_content_jto__WEBPACK_IMPORTED_MODULE_1__.CustMemberContentJto();
  }
}

/***/ }),

/***/ 774:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-order-dtl-dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderDtlDto: () => (/* binding */ CustOrderDtlDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class CustOrderDtlDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustOrderDtl {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 95775:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-order-dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderDto: () => (/* binding */ CustOrderDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class CustOrderDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustOrder {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 28074:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/cust-order-refund-dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderRefundDto: () => (/* binding */ CustOrderRefundDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class CustOrderRefundDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.CustOrderRefund {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 14321:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/customer-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerDto: () => (/* binding */ CustomerDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

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

/***/ 44205:
/*!************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   CampAttendLogDto: () => (/* reexport safe */ _camp_attend_log_dto__WEBPACK_IMPORTED_MODULE_11__.CampAttendLogDto),
/* harmony export */   CampRegDto: () => (/* reexport safe */ _camp_reg_dto__WEBPACK_IMPORTED_MODULE_12__.CampRegDto),
/* harmony export */   CampaignDto: () => (/* reexport safe */ _campaign_dto__WEBPACK_IMPORTED_MODULE_13__.CampaignDto),
/* harmony export */   CustGroupDto: () => (/* reexport safe */ _cust_group_dto__WEBPACK_IMPORTED_MODULE_14__.CustGroupDto),
/* harmony export */   CustMemberDto: () => (/* reexport safe */ _cust_member_dto__WEBPACK_IMPORTED_MODULE_15__.CustMemberDto),
/* harmony export */   CustOrderDtlDto: () => (/* reexport safe */ _cust_order_dtl_dto__WEBPACK_IMPORTED_MODULE_16__.CustOrderDtlDto),
/* harmony export */   CustOrderDto: () => (/* reexport safe */ _cust_order_dto__WEBPACK_IMPORTED_MODULE_17__.CustOrderDto),
/* harmony export */   CustOrderRefundDto: () => (/* reexport safe */ _cust_order_refund_dto__WEBPACK_IMPORTED_MODULE_18__.CustOrderRefundDto),
/* harmony export */   CustomerDto: () => (/* reexport safe */ _customer_dto__WEBPACK_IMPORTED_MODULE_19__.CustomerDto),
/* harmony export */   PayTypeDto: () => (/* reexport safe */ _pay_type_dto__WEBPACK_IMPORTED_MODULE_20__.PayTypeDto),
/* harmony export */   SponsorDto: () => (/* reexport safe */ _sponsor_dto__WEBPACK_IMPORTED_MODULE_21__.SponsorDto)
/* harmony export */ });
/* harmony import */ var _app_admin_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-dto */ 64720);
/* harmony import */ var _app_file_att_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-file-att-dto */ 64251);
/* harmony import */ var _app_news_msg_cat_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-cat-dto */ 58625);
/* harmony import */ var _app_news_msg_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-news-msg-dto */ 5344);
/* harmony import */ var _app_object_store_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-object-store-dto */ 21836);
/* harmony import */ var _app_role_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-role-dto */ 87583);
/* harmony import */ var _app_role_route_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-role-route-dto */ 66915);
/* harmony import */ var _app_route_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-route-dto */ 83110);
/* harmony import */ var _app_user_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-dto */ 9364);
/* harmony import */ var _app_user_role_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user-role-dto */ 70129);
/* harmony import */ var _banner_ad_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad-dto */ 71341);
/* harmony import */ var _camp_attend_log_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./camp-attend-log-dto */ 74730);
/* harmony import */ var _camp_reg_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./camp-reg-dto */ 87895);
/* harmony import */ var _campaign_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./campaign-dto */ 25223);
/* harmony import */ var _cust_group_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cust-group-dto */ 64540);
/* harmony import */ var _cust_member_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cust-member-dto */ 93549);
/* harmony import */ var _cust_order_dtl_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cust-order-dtl-dto */ 774);
/* harmony import */ var _cust_order_dto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cust-order-dto */ 95775);
/* harmony import */ var _cust_order_refund_dto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cust-order-refund-dto */ 28074);
/* harmony import */ var _customer_dto__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer-dto */ 14321);
/* harmony import */ var _pay_type_dto__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pay-type-dto */ 91536);
/* harmony import */ var _sponsor_dto__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sponsor-dto */ 20067);























/***/ }),

/***/ 91536:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/pay-type-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayTypeDto: () => (/* binding */ PayTypeDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class PayTypeDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.PayType {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 20067:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/sponsor-dto.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorDto: () => (/* binding */ SponsorDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class SponsorDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.Sponsor {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 57453:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-admin.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* binding */ AppAdmin)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 10464:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-file-att.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFileAtt: () => (/* binding */ AppFileAtt)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 81042:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-news-msg-cat.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCat: () => (/* binding */ AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* binding */ AppNewsMsgCatStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 83335:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-news-msg.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsg: () => (/* binding */ AppNewsMsg),
/* harmony export */   AppNewsMsgStatuses: () => (/* binding */ AppNewsMsgStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 99391:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-object-store.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppObjectStore: () => (/* binding */ AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* binding */ AppObjectStoreCodes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 28096:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-role-route.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRoute: () => (/* binding */ AppRoleRoute)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppRoleRoute extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appRoleId = 0;
    this.appRouteId = 0;
  }
}

/***/ }),

/***/ 36424:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-role.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRole: () => (/* binding */ AppRole),
/* harmony export */   AppRoleStatuses: () => (/* binding */ AppRoleStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 82463:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoute: () => (/* binding */ AppRoute)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 46048:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-user-role.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRole: () => (/* binding */ AppUserRole)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppUserRole extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appUserId = 0;
    this.appRoleId = 0;
  }
}

/***/ }),

/***/ 60819:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-user.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUser: () => (/* binding */ AppUser),
/* harmony export */   AppUserStatuses: () => (/* binding */ AppUserStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 69336:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/banner-ad.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAd: () => (/* binding */ BannerAd),
/* harmony export */   BannerAdStatuses: () => (/* binding */ BannerAdStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 55479:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/camp-attend-log.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampAttendLog: () => (/* binding */ CampAttendLog),
/* harmony export */   CampAttendLogCertStatuses: () => (/* binding */ CampAttendLogCertStatuses),
/* harmony export */   CampAttendLogSignTypes: () => (/* binding */ CampAttendLogSignTypes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CampAttendLog extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.campRegId = 0;
    this.start1At = null;
    this.start2At = null;
    this.endAt = null;
    this.certNo = null;
    this.certAt = null;
    this.certStatus = +CampAttendLogCertStatuses.待審核;
    this.lastCertPrintAt = null;
  }
}
var CampAttendLogCertStatuses;
(function (CampAttendLogCertStatuses) {
  CampAttendLogCertStatuses[CampAttendLogCertStatuses["\u5F85\u5BE9\u6838"] = 30] = "\u5F85\u5BE9\u6838";
  CampAttendLogCertStatuses[CampAttendLogCertStatuses["\u5DF2\u6838\u767C"] = 60] = "\u5DF2\u6838\u767C";
  CampAttendLogCertStatuses[CampAttendLogCertStatuses["\u4E0D\u7B26\u6838\u767C\u8CC7\u683C"] = 80] = "\u4E0D\u7B26\u6838\u767C\u8CC7\u683C";
  CampAttendLogCertStatuses[CampAttendLogCertStatuses["\u5DF2\u53D6\u6D88"] = 100] = "\u5DF2\u53D6\u6D88";
})(CampAttendLogCertStatuses || (CampAttendLogCertStatuses = {}));
var CampAttendLogSignTypes;
(function (CampAttendLogSignTypes) {
  CampAttendLogSignTypes[CampAttendLogSignTypes["\u7B2C\u4E00\u6B21\u7C3D\u5230"] = 11] = "\u7B2C\u4E00\u6B21\u7C3D\u5230";
  CampAttendLogSignTypes[CampAttendLogSignTypes["\u7B2C\u4E8C\u6B21\u7C3D\u5230"] = 12] = "\u7B2C\u4E8C\u6B21\u7C3D\u5230";
  CampAttendLogSignTypes[CampAttendLogSignTypes["\u7C3D\u9000"] = 90] = "\u7C3D\u9000";
})(CampAttendLogSignTypes || (CampAttendLogSignTypes = {}));

/***/ }),

/***/ 70060:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/camp-reg.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampReg: () => (/* binding */ CampReg),
/* harmony export */   CampRegStatuses: () => (/* binding */ CampRegStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CampReg extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.regAt = new Date();
    this.campId = 0;
    this.campName = '';
    this.custId = 0;
    this.custIdNo = '';
    this.custName = '';
    this.custEmail = '';
    this.custMobile = '';
    this.custZipCodeId = null;
    this.custAddr = '';
    this.custOrderId = 0;
    this.cxlAt = null;
    this.status = +CampRegStatuses.候補中;
    this.content = null;
  }
}
var CampRegStatuses;
(function (CampRegStatuses) {
  CampRegStatuses[CampRegStatuses["\u5019\u88DC\u4E2D"] = 30] = "\u5019\u88DC\u4E2D";
  CampRegStatuses[CampRegStatuses["\u5F85\u4ED8\u6B3E"] = 40] = "\u5F85\u4ED8\u6B3E";
  CampRegStatuses[CampRegStatuses["\u5DF2\u5831\u540D"] = 60] = "\u5DF2\u5831\u540D";
  CampRegStatuses[CampRegStatuses["\u5F85\u9000\u6B3E"] = 90] = "\u5F85\u9000\u6B3E";
  CampRegStatuses[CampRegStatuses["\u5DF2\u53D6\u6D88"] = 100] = "\u5DF2\u53D6\u6D88";
})(CampRegStatuses || (CampRegStatuses = {}));

/***/ }),

/***/ 95040:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/campaign.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Campaign: () => (/* binding */ Campaign),
/* harmony export */   CampaignStatuses: () => (/* binding */ CampaignStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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
    this.totalHours = 0;
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

/***/ 7099:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-group.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroup: () => (/* binding */ CustGroup)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 26768:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-member.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMember: () => (/* binding */ CustMember)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 69485:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-order-dtl.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderDtl: () => (/* binding */ CustOrderDtl)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CustOrderDtl extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.custOrderId = 0;
    this.orderAt = new Date();
    this.itemName = '';
    this.qty = 0;
    this.price = 0;
    this.total = 0;
  }
}

/***/ }),

/***/ 33227:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-order-refund.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderRefund: () => (/* binding */ CustOrderRefund),
/* harmony export */   CustOrderRefundReasonTypes: () => (/* binding */ CustOrderRefundReasonTypes),
/* harmony export */   CustOrderRefundStatuses: () => (/* binding */ CustOrderRefundStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CustOrderRefund extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.custOrderId = 0;
    this.reasonType = +CustOrderRefundReasonTypes.訂單取消;
    this.reason = null;
    this.refundAt = null;
    this.refundAmount = 0;
    this.status = +CustOrderRefundStatuses.待退款;
    this.payTypeId = 0;
    this.payTypeCode = null;
    this.payTypeName = null;
    this.handlerName = '';
    this.content = null;
  }
}
var CustOrderRefundReasonTypes;
(function (CustOrderRefundReasonTypes) {
  CustOrderRefundReasonTypes[CustOrderRefundReasonTypes["\u8A02\u55AE\u53D6\u6D88"] = 10] = "\u8A02\u55AE\u53D6\u6D88";
})(CustOrderRefundReasonTypes || (CustOrderRefundReasonTypes = {}));
var CustOrderRefundStatuses;
(function (CustOrderRefundStatuses) {
  CustOrderRefundStatuses[CustOrderRefundStatuses["\u5F85\u9000\u6B3E"] = 40] = "\u5F85\u9000\u6B3E";
  CustOrderRefundStatuses[CustOrderRefundStatuses["\u5DF2\u9000\u6B3E"] = 60] = "\u5DF2\u9000\u6B3E";
  CustOrderRefundStatuses[CustOrderRefundStatuses["\u5DF2\u53D6\u6D88"] = 100] = "\u5DF2\u53D6\u6D88";
})(CustOrderRefundStatuses || (CustOrderRefundStatuses = {}));

/***/ }),

/***/ 196:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/cust-order.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrder: () => (/* binding */ CustOrder),
/* harmony export */   CustOrderStatuses: () => (/* binding */ CustOrderStatuses),
/* harmony export */   CustOrderTypes: () => (/* binding */ CustOrderTypes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CustOrder extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.orderAt = new Date();
    this.orderType = 0;
    this.custId = 0;
    this.custIdNo = null;
    this.custName = null;
    this.custEmail = null;
    this.custMobile = null;
    this.custZipCodeId = null;
    this.custAddr = '';
    this.buyerName = null;
    this.buyerCode = null;
    this.subTotal = 0;
    this.discount = 0;
    this.total = 0;
    this.txFee = 0;
    this.startAt = new Date();
    this.endAt = null;
    this.payTypeId = 0;
    this.payTypeCode = null;
    this.payTypeName = null;
    this.payOrderNo = null;
    this.payAt = null;
    this.cxlAt = null;
    this.receiptNo = null;
    this.receipt407No = null;
    this.status = +CustOrderStatuses.待付款;
    this.content = null;
  }
}
var CustOrderTypes;
(function (CustOrderTypes) {
  CustOrderTypes[CustOrderTypes["\u6703\u8CBB\u985E_\u6700\u5C0F\u503C"] = 100] = "\u6703\u8CBB\u985E_\u6700\u5C0F\u503C";
  CustOrderTypes[CustOrderTypes["\u6703\u8CBB\u985E_\u6700\u5927\u503C"] = 199] = "\u6703\u8CBB\u985E_\u6700\u5927\u503C";
  CustOrderTypes[CustOrderTypes["\u6703\u8CBB\u985E_\u500B\u4EBA\u5165\u6703\u8CBB"] = 100] = "\u6703\u8CBB\u985E_\u500B\u4EBA\u5165\u6703\u8CBB";
  CustOrderTypes[CustOrderTypes["\u6703\u8CBB\u985E_\u500B\u4EBA\u5E38\u5E74\u6703\u8CBB"] = 101] = "\u6703\u8CBB\u985E_\u500B\u4EBA\u5E38\u5E74\u6703\u8CBB";
  CustOrderTypes[CustOrderTypes["\u6703\u8CBB\u985E_\u5718\u9AD4\u5165\u6703\u8CBB"] = 150] = "\u6703\u8CBB\u985E_\u5718\u9AD4\u5165\u6703\u8CBB";
  CustOrderTypes[CustOrderTypes["\u6703\u8CBB\u985E_\u5718\u9AD4\u5E38\u5E74\u6703\u8CBB"] = 151] = "\u6703\u8CBB\u985E_\u5718\u9AD4\u5E38\u5E74\u6703\u8CBB";
  CustOrderTypes[CustOrderTypes["\u6D3B\u52D5\u985E_\u6700\u5C0F\u503C"] = 200] = "\u6D3B\u52D5\u985E_\u6700\u5C0F\u503C";
  CustOrderTypes[CustOrderTypes["\u6D3B\u52D5\u985E_\u6700\u5927\u503C"] = 299] = "\u6D3B\u52D5\u985E_\u6700\u5927\u503C";
  CustOrderTypes[CustOrderTypes["\u6D3B\u52D5\u985E_\u5831\u540D\u8CBB"] = 200] = "\u6D3B\u52D5\u985E_\u5831\u540D\u8CBB";
})(CustOrderTypes || (CustOrderTypes = {}));
var CustOrderStatuses;
(function (CustOrderStatuses) {
  CustOrderStatuses[CustOrderStatuses["\u5F85\u4ED8\u6B3E"] = 40] = "\u5F85\u4ED8\u6B3E";
  CustOrderStatuses[CustOrderStatuses["\u5DF2\u4ED8\u6B3E"] = 60] = "\u5DF2\u4ED8\u6B3E";
  CustOrderStatuses[CustOrderStatuses["\u5F85\u9000\u6B3E"] = 90] = "\u5F85\u9000\u6B3E";
  CustOrderStatuses[CustOrderStatuses["\u5DF2\u53D6\u6D88"] = 100] = "\u5DF2\u53D6\u6D88";
  CustOrderStatuses[CustOrderStatuses["\u5DF2\u903E\u671F"] = 101] = "\u5DF2\u903E\u671F";
})(CustOrderStatuses || (CustOrderStatuses = {}));

/***/ }),

/***/ 52090:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/customer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Customer: () => (/* binding */ Customer),
/* harmony export */   CustomerStatuses: () => (/* binding */ CustomerStatuses),
/* harmony export */   CustomerTypes: () => (/* binding */ CustomerTypes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

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

/***/ 63204:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/entities/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   CampAttendLog: () => (/* reexport safe */ _camp_attend_log__WEBPACK_IMPORTED_MODULE_11__.CampAttendLog),
/* harmony export */   CampAttendLogCertStatuses: () => (/* reexport safe */ _camp_attend_log__WEBPACK_IMPORTED_MODULE_11__.CampAttendLogCertStatuses),
/* harmony export */   CampAttendLogSignTypes: () => (/* reexport safe */ _camp_attend_log__WEBPACK_IMPORTED_MODULE_11__.CampAttendLogSignTypes),
/* harmony export */   CampReg: () => (/* reexport safe */ _camp_reg__WEBPACK_IMPORTED_MODULE_12__.CampReg),
/* harmony export */   CampRegStatuses: () => (/* reexport safe */ _camp_reg__WEBPACK_IMPORTED_MODULE_12__.CampRegStatuses),
/* harmony export */   Campaign: () => (/* reexport safe */ _campaign__WEBPACK_IMPORTED_MODULE_13__.Campaign),
/* harmony export */   CampaignStatuses: () => (/* reexport safe */ _campaign__WEBPACK_IMPORTED_MODULE_13__.CampaignStatuses),
/* harmony export */   CustGroup: () => (/* reexport safe */ _cust_group__WEBPACK_IMPORTED_MODULE_14__.CustGroup),
/* harmony export */   CustMember: () => (/* reexport safe */ _cust_member__WEBPACK_IMPORTED_MODULE_15__.CustMember),
/* harmony export */   CustOrder: () => (/* reexport safe */ _cust_order__WEBPACK_IMPORTED_MODULE_17__.CustOrder),
/* harmony export */   CustOrderDtl: () => (/* reexport safe */ _cust_order_dtl__WEBPACK_IMPORTED_MODULE_16__.CustOrderDtl),
/* harmony export */   CustOrderRefund: () => (/* reexport safe */ _cust_order_refund__WEBPACK_IMPORTED_MODULE_18__.CustOrderRefund),
/* harmony export */   CustOrderRefundReasonTypes: () => (/* reexport safe */ _cust_order_refund__WEBPACK_IMPORTED_MODULE_18__.CustOrderRefundReasonTypes),
/* harmony export */   CustOrderRefundStatuses: () => (/* reexport safe */ _cust_order_refund__WEBPACK_IMPORTED_MODULE_18__.CustOrderRefundStatuses),
/* harmony export */   CustOrderStatuses: () => (/* reexport safe */ _cust_order__WEBPACK_IMPORTED_MODULE_17__.CustOrderStatuses),
/* harmony export */   CustOrderTypes: () => (/* reexport safe */ _cust_order__WEBPACK_IMPORTED_MODULE_17__.CustOrderTypes),
/* harmony export */   Customer: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_19__.Customer),
/* harmony export */   CustomerStatuses: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_19__.CustomerStatuses),
/* harmony export */   CustomerTypes: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_19__.CustomerTypes),
/* harmony export */   PayType: () => (/* reexport safe */ _pay_type__WEBPACK_IMPORTED_MODULE_20__.PayType),
/* harmony export */   PayTypeIds: () => (/* reexport safe */ _pay_type__WEBPACK_IMPORTED_MODULE_20__.PayTypeIds),
/* harmony export */   PayTypeStatuses: () => (/* reexport safe */ _pay_type__WEBPACK_IMPORTED_MODULE_20__.PayTypeStatuses),
/* harmony export */   Sponsor: () => (/* reexport safe */ _sponsor__WEBPACK_IMPORTED_MODULE_21__.Sponsor),
/* harmony export */   SponsorStatuses: () => (/* reexport safe */ _sponsor__WEBPACK_IMPORTED_MODULE_21__.SponsorStatuses)
/* harmony export */ });
/* harmony import */ var _app_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin */ 57453);
/* harmony import */ var _app_file_att__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-file-att */ 10464);
/* harmony import */ var _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-cat */ 81042);
/* harmony import */ var _app_news_msg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-news-msg */ 83335);
/* harmony import */ var _app_object_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-object-store */ 99391);
/* harmony import */ var _app_role_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-role-route */ 28096);
/* harmony import */ var _app_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-role */ 36424);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-route */ 82463);
/* harmony import */ var _app_user_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-role */ 46048);
/* harmony import */ var _app_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user */ 60819);
/* harmony import */ var _banner_ad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad */ 69336);
/* harmony import */ var _camp_attend_log__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./camp-attend-log */ 55479);
/* harmony import */ var _camp_reg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./camp-reg */ 70060);
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./campaign */ 95040);
/* harmony import */ var _cust_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cust-group */ 7099);
/* harmony import */ var _cust_member__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cust-member */ 26768);
/* harmony import */ var _cust_order_dtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cust-order-dtl */ 69485);
/* harmony import */ var _cust_order__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cust-order */ 196);
/* harmony import */ var _cust_order_refund__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cust-order-refund */ 33227);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer */ 52090);
/* harmony import */ var _pay_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pay-type */ 96719);
/* harmony import */ var _sponsor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sponsor */ 64046);























/***/ }),

/***/ 96719:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/pay-type.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayType: () => (/* binding */ PayType),
/* harmony export */   PayTypeIds: () => (/* binding */ PayTypeIds),
/* harmony export */   PayTypeStatuses: () => (/* binding */ PayTypeStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class PayType extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.code = '';
    this.name = '';
    this.servProvider = '';
    this.status = +PayTypeStatuses.啟用;
    this.sort = 0;
  }
}
var PayTypeIds;
(function (PayTypeIds) {
  PayTypeIds[PayTypeIds["\u5167\u90E8\u91D1\u6D41_\u6700\u5C0F\u503C"] = 1000] = "\u5167\u90E8\u91D1\u6D41_\u6700\u5C0F\u503C";
  PayTypeIds[PayTypeIds["\u5167\u90E8\u91D1\u6D41_\u6700\u5927\u503C"] = 1999] = "\u5167\u90E8\u91D1\u6D41_\u6700\u5927\u503C";
})(PayTypeIds || (PayTypeIds = {}));
var PayTypeStatuses;
(function (PayTypeStatuses) {
  PayTypeStatuses[PayTypeStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  PayTypeStatuses[PayTypeStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(PayTypeStatuses || (PayTypeStatuses = {}));

/***/ }),

/***/ 64046:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/sponsor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sponsor: () => (/* binding */ Sponsor),
/* harmony export */   SponsorStatuses: () => (/* binding */ SponsorStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class Sponsor extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.name = '';
    this.desc = null;
    this.startAt = new Date();
    this.endAt = null;
    this.status = +SponsorStatuses.啟用;
    this.logoAttId = 0;
    this.sort = 0;
  }
}
var SponsorStatuses;
(function (SponsorStatuses) {
  SponsorStatuses[SponsorStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  SponsorStatuses[SponsorStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(SponsorStatuses || (SponsorStatuses = {}));

/***/ }),

/***/ 93146:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/models/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   BankAccountJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.BankAccountJto),
/* harmony export */   BannerAd: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.BannerAd),
/* harmony export */   BannerAdDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.BannerAdDto),
/* harmony export */   BannerAdReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.BannerAdReq),
/* harmony export */   BannerAdStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses),
/* harmony export */   CampAttendLog: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CampAttendLog),
/* harmony export */   CampAttendLogCertStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses),
/* harmony export */   CampAttendLogDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CampAttendLogDto),
/* harmony export */   CampAttendLogReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CampAttendLogReq),
/* harmony export */   CampAttendLogSignTypes: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogSignTypes),
/* harmony export */   CampReg: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CampReg),
/* harmony export */   CampRegContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CampRegContentJto),
/* harmony export */   CampRegDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CampRegDto),
/* harmony export */   CampRegReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CampRegReq),
/* harmony export */   CampRegStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses),
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
/* harmony export */   CustOrder: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrder),
/* harmony export */   CustOrderDtl: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrderDtl),
/* harmony export */   CustOrderDtlDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CustOrderDtlDto),
/* harmony export */   CustOrderDtlReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CustOrderDtlReq),
/* harmony export */   CustOrderDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CustOrderDto),
/* harmony export */   CustOrderRefund: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefund),
/* harmony export */   CustOrderRefundContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CustOrderRefundContentJto),
/* harmony export */   CustOrderRefundDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.CustOrderRefundDto),
/* harmony export */   CustOrderRefundReasonTypes: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundReasonTypes),
/* harmony export */   CustOrderRefundReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CustOrderRefundReq),
/* harmony export */   CustOrderRefundStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundStatuses),
/* harmony export */   CustOrderReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.CustOrderReq),
/* harmony export */   CustOrderStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses),
/* harmony export */   CustOrderTypes: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.CustOrderTypes),
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
/* harmony export */   PayInfo: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.PayInfo),
/* harmony export */   PayType: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.PayType),
/* harmony export */   PayTypeDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.PayTypeDto),
/* harmony export */   PayTypeIds: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.PayTypeIds),
/* harmony export */   PayTypeReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.PayTypeReq),
/* harmony export */   PayTypeStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.PayTypeStatuses),
/* harmony export */   QueryRequestBase: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.QueryRequestBase),
/* harmony export */   RenewMembershipReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.RenewMembershipReq),
/* harmony export */   ResetPasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordReq),
/* harmony export */   SigninReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.SigninReq),
/* harmony export */   Sponsor: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.Sponsor),
/* harmony export */   SponsorDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.SponsorDto),
/* harmony export */   SponsorReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.SponsorReq),
/* harmony export */   SponsorStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.SponsorStatuses),
/* harmony export */   UploadFormReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.UploadFormReq),
/* harmony export */   WebPolicyJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.WebPolicyJto),
/* harmony export */   ZipCodeReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dtos */ 44205);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ 63204);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jtos */ 5851);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests */ 9769);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ 78134);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views */ 41775);







/***/ }),

/***/ 96896:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/app-news-msg-content-jto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 59373:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/bank-account-jto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankAccountJto: () => (/* binding */ BankAccountJto)
/* harmony export */ });
class BankAccountJto {
  constructor() {
    this.bankName = '';
    this.branchName = '';
    this.accountNo = '';
    this.accountName = '';
  }
}

/***/ }),

/***/ 73079:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/camp-reg-content-jto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegContentJto: () => (/* binding */ CampRegContentJto)
/* harmony export */ });
class CampRegContentJto {
  constructor() {
    this.currJob = '';
  }
}

/***/ }),

/***/ 55759:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/campaign-content-jto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    this.organizers = [];
    this.coOrganizers = [];
  }
}

/***/ }),

/***/ 59796:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-group-content-jto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 55937:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-member-content-jto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 35558:
/*!************************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-order-refund-content-jto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderRefundContentJto: () => (/* binding */ CustOrderRefundContentJto)
/* harmony export */ });
class CustOrderRefundContentJto {
  constructor() {
    this.memo = '';
  }
}

/***/ }),

/***/ 5851:
/*!************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgContentJto: () => (/* reexport safe */ _app_news_msg_content_jto__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgContentJto),
/* harmony export */   BankAccountJto: () => (/* reexport safe */ _bank_account_jto__WEBPACK_IMPORTED_MODULE_1__.BankAccountJto),
/* harmony export */   CampRegContentJto: () => (/* reexport safe */ _camp_reg_content_jto__WEBPACK_IMPORTED_MODULE_2__.CampRegContentJto),
/* harmony export */   CampaignContentJto: () => (/* reexport safe */ _campaign_content_jto__WEBPACK_IMPORTED_MODULE_3__.CampaignContentJto),
/* harmony export */   CustGroupContentJto: () => (/* reexport safe */ _cust_group_content_jto__WEBPACK_IMPORTED_MODULE_4__.CustGroupContentJto),
/* harmony export */   CustMemberContentJto: () => (/* reexport safe */ _cust_member_content_jto__WEBPACK_IMPORTED_MODULE_5__.CustMemberContentJto),
/* harmony export */   CustOrderRefundContentJto: () => (/* reexport safe */ _cust_order_refund_content_jto__WEBPACK_IMPORTED_MODULE_6__.CustOrderRefundContentJto),
/* harmony export */   OrgAboutJto: () => (/* reexport safe */ _org_about_jto__WEBPACK_IMPORTED_MODULE_7__.OrgAboutJto),
/* harmony export */   OrgContactJto: () => (/* reexport safe */ _org_contact_jto__WEBPACK_IMPORTED_MODULE_8__.OrgContactJto),
/* harmony export */   WebPolicyJto: () => (/* reexport safe */ _web_policy_jto__WEBPACK_IMPORTED_MODULE_9__.WebPolicyJto)
/* harmony export */ });
/* harmony import */ var _app_news_msg_content_jto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-news-msg-content-jto */ 96896);
/* harmony import */ var _bank_account_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-account-jto */ 59373);
/* harmony import */ var _camp_reg_content_jto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camp-reg-content-jto */ 73079);
/* harmony import */ var _campaign_content_jto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-content-jto */ 55759);
/* harmony import */ var _cust_group_content_jto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cust-group-content-jto */ 59796);
/* harmony import */ var _cust_member_content_jto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cust-member-content-jto */ 55937);
/* harmony import */ var _cust_order_refund_content_jto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-order-refund-content-jto */ 35558);
/* harmony import */ var _org_about_jto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./org-about-jto */ 43851);
/* harmony import */ var _org_contact_jto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./org-contact-jto */ 9298);
/* harmony import */ var _web_policy_jto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-policy-jto */ 5574);











/***/ }),

/***/ 43851:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/org-about-jto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9298:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/org-contact-jto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5574:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/web-policy-jto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7617:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-admin-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminReq: () => (/* binding */ AppAdminReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppAdminReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 23472:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-news-msg-cat-req.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCatReq: () => (/* binding */ AppNewsMsgCatReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppNewsMsgCatReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 84817:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-news-msg-req.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgReq: () => (/* binding */ AppNewsMsgReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppNewsMsgReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.catId = 0;
    this.uniqueId = null;
    this.takeCount = takeCount;
  }
}

/***/ }),

/***/ 16254:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-role-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleReq: () => (/* binding */ AppRoleReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppRoleReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appPfm = '';
  }
}

/***/ }),

/***/ 15914:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-role-route-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRouteReq: () => (/* binding */ AppRoleRouteReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppRoleRouteReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appRoleId = 0;
    this.appRouteId = 0;
  }
}

/***/ }),

/***/ 67911:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-route-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteReq: () => (/* binding */ AppRouteReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppRouteReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.parentId = 0;
    this.appPfm = null;
  }
}

/***/ }),

/***/ 89077:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-user-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserReq: () => (/* binding */ AppUserReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppUserReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.account = '';
    this.appPfm = '';
  }
}

/***/ }),

/***/ 49512:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-user-role-req.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRoleReq: () => (/* binding */ AppUserRoleReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppUserRoleReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appRoleId = 0;
    this.appPfm = null;
  }
}

/***/ }),

/***/ 7876:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/banner-ad-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAdReq: () => (/* binding */ BannerAdReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class BannerAdReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.takeCount = takeCount;
  }
}

/***/ }),

/***/ 18827:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/camp-attend-log-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampAttendLogReq: () => (/* binding */ CampAttendLogReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CampAttendLogReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.campId = 0;
    this.campRegId = 0;
    this.certNo = null;
    this.signType = 0;
    this.signCode = null;
  }
}

/***/ }),

/***/ 54694:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/camp-reg-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegReq: () => (/* binding */ CampRegReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CampRegReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.campId = 0;
    this.campName = null;
    this.custId = 0;
    this.custIdNo = null;
    this.custName = null;
    this.custOrderId = 0;
    this.isShowCampContent = false;
  }
}

/***/ }),

/***/ 92062:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/campaign-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignReq: () => (/* binding */ CampaignReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class CampaignReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.regActiveAt = null;
  }
}

/***/ }),

/***/ 39634:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/change-password-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 22917:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-group-req.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupReq: () => (/* binding */ CustGroupReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

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

/***/ 47044:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-member-req.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberReq: () => (/* binding */ CustMemberReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

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

/***/ 42855:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-order-dtl-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderDtlReq: () => (/* binding */ CustOrderDtlReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class CustOrderDtlReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.custOrderId = 0;
  }
}

/***/ }),

/***/ 8867:
/*!********************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-order-refund-req.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderRefundReq: () => (/* binding */ CustOrderRefundReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class CustOrderRefundReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.custOrderId = 0;
    this.reasonType = 0;
    this.refundAt = null;
    this.payTypeId = 0;
    this.contentJto = null;
  }
}

/***/ }),

/***/ 66270:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/cust-order-req.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderReq: () => (/* binding */ CustOrderReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class CustOrderReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.orderType = 0;
    this.custId = 0;
    this.payTypeId = null;
    this.payOrderNo = null;
  }
}

/***/ }),

/***/ 2976:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/customer-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerReq: () => (/* binding */ CustomerReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class CustomerReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 64517:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/forget-password-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9769:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/requests/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   CampAttendLogReq: () => (/* reexport safe */ _camp_attend_log_req__WEBPACK_IMPORTED_MODULE_9__.CampAttendLogReq),
/* harmony export */   CampRegReq: () => (/* reexport safe */ _camp_reg_req__WEBPACK_IMPORTED_MODULE_10__.CampRegReq),
/* harmony export */   CampaignReq: () => (/* reexport safe */ _campaign_req__WEBPACK_IMPORTED_MODULE_11__.CampaignReq),
/* harmony export */   ChangePasswordReq: () => (/* reexport safe */ _change_password_req__WEBPACK_IMPORTED_MODULE_12__.ChangePasswordReq),
/* harmony export */   CustGroupReq: () => (/* reexport safe */ _cust_group_req__WEBPACK_IMPORTED_MODULE_13__.CustGroupReq),
/* harmony export */   CustMemberReq: () => (/* reexport safe */ _cust_member_req__WEBPACK_IMPORTED_MODULE_14__.CustMemberReq),
/* harmony export */   CustOrderDtlReq: () => (/* reexport safe */ _cust_order_dtl_req__WEBPACK_IMPORTED_MODULE_15__.CustOrderDtlReq),
/* harmony export */   CustOrderRefundReq: () => (/* reexport safe */ _cust_order_refund_req__WEBPACK_IMPORTED_MODULE_17__.CustOrderRefundReq),
/* harmony export */   CustOrderReq: () => (/* reexport safe */ _cust_order_req__WEBPACK_IMPORTED_MODULE_16__.CustOrderReq),
/* harmony export */   CustomerReq: () => (/* reexport safe */ _customer_req__WEBPACK_IMPORTED_MODULE_18__.CustomerReq),
/* harmony export */   ForgetPasswordReq: () => (/* reexport safe */ _forget_password_req__WEBPACK_IMPORTED_MODULE_19__.ForgetPasswordReq),
/* harmony export */   PayTypeReq: () => (/* reexport safe */ _pay_type_req__WEBPACK_IMPORTED_MODULE_20__.PayTypeReq),
/* harmony export */   RenewMembershipReq: () => (/* reexport safe */ _renew_membership_req__WEBPACK_IMPORTED_MODULE_24__.RenewMembershipReq),
/* harmony export */   ResetPasswordReq: () => (/* reexport safe */ _reset_password_req__WEBPACK_IMPORTED_MODULE_21__.ResetPasswordReq),
/* harmony export */   SigninReq: () => (/* reexport safe */ _signin_req__WEBPACK_IMPORTED_MODULE_22__.SigninReq),
/* harmony export */   SponsorReq: () => (/* reexport safe */ _sponsor_req__WEBPACK_IMPORTED_MODULE_23__.SponsorReq),
/* harmony export */   UploadFormReq: () => (/* reexport safe */ _upload_form_req__WEBPACK_IMPORTED_MODULE_25__.UploadFormReq),
/* harmony export */   ZipCodeReq: () => (/* reexport safe */ _zip_code_req__WEBPACK_IMPORTED_MODULE_26__.ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _app_admin_req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-req */ 7617);
/* harmony import */ var _app_news_msg_cat_req__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news-msg-cat-req */ 23472);
/* harmony import */ var _app_news_msg_req__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-req */ 84817);
/* harmony import */ var _app_role_req__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role-req */ 16254);
/* harmony import */ var _app_role_route_req__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role-route-req */ 15914);
/* harmony import */ var _app_route_req__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route-req */ 67911);
/* harmony import */ var _app_user_req__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-req */ 89077);
/* harmony import */ var _app_user_role_req__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-role-req */ 49512);
/* harmony import */ var _banner_ad_req__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-ad-req */ 7876);
/* harmony import */ var _camp_attend_log_req__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./camp-attend-log-req */ 18827);
/* harmony import */ var _camp_reg_req__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./camp-reg-req */ 54694);
/* harmony import */ var _campaign_req__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./campaign-req */ 92062);
/* harmony import */ var _change_password_req__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-password-req */ 39634);
/* harmony import */ var _cust_group_req__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cust-group-req */ 22917);
/* harmony import */ var _cust_member_req__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cust-member-req */ 47044);
/* harmony import */ var _cust_order_dtl_req__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cust-order-dtl-req */ 42855);
/* harmony import */ var _cust_order_req__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cust-order-req */ 66270);
/* harmony import */ var _cust_order_refund_req__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cust-order-refund-req */ 8867);
/* harmony import */ var _customer_req__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer-req */ 2976);
/* harmony import */ var _forget_password_req__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forget-password-req */ 64517);
/* harmony import */ var _pay_type_req__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pay-type-req */ 76401);
/* harmony import */ var _reset_password_req__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reset-password-req */ 52823);
/* harmony import */ var _signin_req__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./signin-req */ 32342);
/* harmony import */ var _sponsor_req__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sponsor-req */ 77474);
/* harmony import */ var _renew_membership_req__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./renew-membership-req */ 18888);
/* harmony import */ var _upload_form_req__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./upload-form-req */ 21942);
/* harmony import */ var _zip_code_req__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./zip-code-req */ 38879);




























/***/ }),

/***/ 76401:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/pay-type-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayTypeReq: () => (/* binding */ PayTypeReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class PayTypeReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.startId = 0;
    this.endId = 0;
    this.code = null;
  }
}

/***/ }),

/***/ 18888:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/renew-membership-req.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenewMembershipReq: () => (/* binding */ RenewMembershipReq)
/* harmony export */ });
class RenewMembershipReq {
  constructor() {
    /** 要續約的台灣年度，例如 2026 */
    this.contractYear = 0;
    /** 指定會員 Id；0 = 全體正式會員 */
    this.custId = 0;
    /** 會員身份別（CustomerTypes）；0 = 不限 */
    this.custType = 0;
  }
}

/***/ }),

/***/ 52823:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/reset-password-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 32342:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/signin-req.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 77474:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/sponsor-req.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorReq: () => (/* binding */ SponsorReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class SponsorReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 21942:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/upload-form-req.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFormReq: () => (/* binding */ UploadFormReq)
/* harmony export */ });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ 49482);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);

class UploadFormReq extends form_data__WEBPACK_IMPORTED_MODULE_0__ {
  constructor() {
    super();
    this.jsonContent = null;
  }
}

/***/ }),

/***/ 38879:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/zip-code-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeReq: () => (/* binding */ ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class ZipCodeReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.version = 3;
    this.code = null;
  }
}

/***/ }),

/***/ 17547:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/shared/app-env.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 22214:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/app-token-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 47965:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/auth-user-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 54084:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/auth-user-route.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 46285:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/camp-attend-stat.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 79812:
/*!********************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/cust-order-payment-stat.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55813:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/entity-base.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 78134:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/models/shared/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTokenInfo: () => (/* reexport safe */ _app_token_info__WEBPACK_IMPORTED_MODULE_1__.AppTokenInfo),
/* harmony export */   AuthUserInfo: () => (/* reexport safe */ _auth_user_info__WEBPACK_IMPORTED_MODULE_2__.AuthUserInfo),
/* harmony export */   AuthUserRoute: () => (/* reexport safe */ _auth_user_route__WEBPACK_IMPORTED_MODULE_3__.AuthUserRoute),
/* harmony export */   EntityBase: () => (/* reexport safe */ _entity_base__WEBPACK_IMPORTED_MODULE_6__.EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* reexport safe */ _entity_base__WEBPACK_IMPORTED_MODULE_6__.EntityBaseStatuses),
/* harmony export */   PagingRequest: () => (/* reexport safe */ _paging_request__WEBPACK_IMPORTED_MODULE_7__.PagingRequest),
/* harmony export */   PagingResponse: () => (/* reexport safe */ _paging_response__WEBPACK_IMPORTED_MODULE_8__.PagingResponse),
/* harmony export */   PayInfo: () => (/* reexport safe */ _pay_info__WEBPACK_IMPORTED_MODULE_9__.PayInfo),
/* harmony export */   QueryRequestBase: () => (/* reexport safe */ _query_request_base__WEBPACK_IMPORTED_MODULE_10__.QueryRequestBase)
/* harmony export */ });
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-env */ 17547);
/* harmony import */ var _app_token_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-token-info */ 22214);
/* harmony import */ var _auth_user_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-user-info */ 47965);
/* harmony import */ var _auth_user_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-user-route */ 54084);
/* harmony import */ var _camp_attend_stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camp-attend-stat */ 46285);
/* harmony import */ var _cust_order_payment_stat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cust-order-payment-stat */ 79812);
/* harmony import */ var _entity_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity-base */ 55813);
/* harmony import */ var _paging_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paging-request */ 28632);
/* harmony import */ var _paging_response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paging-response */ 662);
/* harmony import */ var _pay_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pay-info */ 31429);
/* harmony import */ var _query_request_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query-request-base */ 88374);
/* harmony import */ var _renew_membership_result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renew-membership-result */ 70508);
/* harmony import */ var _value_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./value-info */ 40608);














/***/ }),

/***/ 28632:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/paging-request.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingRequest: () => (/* binding */ PagingRequest)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);

class PagingRequest {
  constructor() {
    this.queryRequest = {};
    this.pageIndex = _consts__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_INDEX;
    this.pageSize = _consts__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_SIZE;
  }
}

/***/ }),

/***/ 662:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/paging-response.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 31429:
/*!*****************************************************!*\
  !*** ./libs/core/src/lib/models/shared/pay-info.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayInfo: () => (/* binding */ PayInfo)
/* harmony export */ });
class PayInfo {
  constructor() {
    this.isPayable = false;
    this.allowPayFlow = false;
    this.postReq = null;
  }
}

/***/ }),

/***/ 88374:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/query-request-base.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 70508:
/*!********************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/renew-membership-result.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 40608:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/shared/value-info.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 35458:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-admin-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55801:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-news-msg-cat-view.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 40926:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-news-msg-view.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 82875:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-role-route-view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55247:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-role-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 45772:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-route-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6365:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-user-role-view.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 68070:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-user-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8953:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/banner-ad-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 32379:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/models/views/camp-attend-log-view.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 19243:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/camp-reg-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 46395:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/campaign-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 38626:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-group-view.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 84809:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-member-view.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 22372:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-order-dtl-view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 57960:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-order-refund-view.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 80523:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/views/cust-order-view.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 99329:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/customer-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 41775:
/*!*************************************************!*\
  !*** ./libs/core/src/lib/models/views/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_admin_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-view */ 35458);
/* harmony import */ var _app_news_msg_cat_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news-msg-cat-view */ 55801);
/* harmony import */ var _app_news_msg_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-view */ 40926);
/* harmony import */ var _app_role_route_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role-route-view */ 82875);
/* harmony import */ var _app_role_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role-view */ 55247);
/* harmony import */ var _app_route_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route-view */ 45772);
/* harmony import */ var _app_user_role_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-role-view */ 6365);
/* harmony import */ var _app_user_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-view */ 68070);
/* harmony import */ var _banner_ad_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-ad-view */ 8953);
/* harmony import */ var _camp_attend_log_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./camp-attend-log-view */ 32379);
/* harmony import */ var _camp_reg_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./camp-reg-view */ 19243);
/* harmony import */ var _campaign_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./campaign-view */ 46395);
/* harmony import */ var _cust_group_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cust-group-view */ 38626);
/* harmony import */ var _cust_member_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cust-member-view */ 84809);
/* harmony import */ var _cust_order_dtl_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cust-order-dtl-view */ 22372);
/* harmony import */ var _cust_order_view__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cust-order-view */ 80523);
/* harmony import */ var _cust_order_refund_view__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cust-order-refund-view */ 57960);
/* harmony import */ var _customer_view__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer-view */ 99329);
/* harmony import */ var _pay_type_view__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pay-type-view */ 39322);
/* harmony import */ var _sponsor_view__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sponsor-view */ 78951);
/* harmony import */ var _zip_code_view__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zip-code-view */ 25244);






















/***/ }),

/***/ 39322:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/pay-type-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 78951:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/views/sponsor-view.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 25244:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/zip-code-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 89433:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/services/app-attach.api.serv.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAttachApiServ: () => (/* binding */ AppAttachApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);


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

/***/ 29544:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-auth.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthApiServ: () => (/* binding */ AppAuthApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 15463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);




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

/***/ 28079:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/app-msg.api.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMsgApiServ: () => (/* binding */ AppMsgApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);

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
    this.sponsorStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.SponsorStatuses;
    this.sponsorStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.SponsorStatuses);
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
  //#endregion
  //#region Sponsor
  getSponsorStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.SponsorStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.SponsorStatuses.停用,
      style: 'error'
    }];
  }
  getSponsorDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetSponsorDtoById/${id}`);
  }
  getSponsorViewById(id) {
    return this.http.get(`${this.baseUrl}/GetSponsorViewById/${id}`);
  }
  getSponsorViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.SponsorReq()) {
    return this.http.put(`${this.baseUrl}/GetSponsorViews`, request);
  }
  getSponsorViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetSponsorViewsPaging`, request);
  }
  disableSponsor(id) {
    return this.http.put(`${this.baseUrl}/DisableSponsor/${id}`, null);
  }
  enableSponsor(id) {
    return this.http.put(`${this.baseUrl}/EnableSponsor/${id}`, null);
  }
  uploadSponsorDto(request) {
    return this.http.post(`${this.baseUrl}/UploadSponsorDto`, request);
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

/***/ 27426:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-role.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleApiServ: () => (/* binding */ AppRoleApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 94485);


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

/***/ 62019:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/services/app-store.api.serv.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStoreApiServ: () => (/* binding */ AppStoreApiServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 94485);



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

/***/ 25599:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-user.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserApiServ: () => (/* binding */ AppUserApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 94485);


// Custom packages


// Third party packages



class AppUserApiServ {
  constructor(appEnv, http) {
    this.appEnv = appEnv;
    this.http = http;
    this.baseUrl = '/AppUser';
    this.appUserStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses;
    this.appUserStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_2__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses);
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(enum_values__WEBPACK_IMPORTED_MODULE_2__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses));
  }
  getAppUserStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses.停用,
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
    request.appPfm = this.appEnv.appPfm;
    return this.http.put(`${this.baseUrl}/ForgetPassword`, request);
  }
  static {
    this.ɵfac = function AppUserApiServ_Factory(t) {
      return new (t || AppUserApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AppUserApiServ,
      factory: AppUserApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 55130:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/campaign.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignApiServ: () => (/* binding */ CampaignApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);

// Thired party packages

// Custom packages



class CampaignApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/Campaign';
    this.campaignStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses;
    this.campaignStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CampaignStatuses);
    this.campRegStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses;
    this.campRegStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses);
    this.campAttendLogCertStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses;
    this.campAttendLogCertStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses);
    this.campAttendLogSignTypes = _models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogSignTypes;
    this.campAttendLogSignTypeOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogSignTypes);
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
  //#endregion
  //#region CampReg
  getCampRegStatusInfos() {
    const infos = [{
      name: '候補中',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses.候補中,
      style: 'orange'
    }, {
      name: '待付款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses.待付款,
      style: 'magenta'
    }, {
      name: '已報名',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses.已報名,
      style: 'green'
    }, {
      name: '待退款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses.待退款,
      style: 'volcano'
    }, {
      name: '已取消',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampRegStatuses.已取消,
      style: 'red'
    }];
    return infos;
  }
  getCampRegView(request) {
    return this.http.put(`${this.baseUrl}/GetCampRegView`, request);
  }
  getCampRegViews(request) {
    return this.http.put(`${this.baseUrl}/GetCampRegViews`, request);
  }
  getCampRegViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCampRegViewsPaging`, request);
  }
  campRegister(request) {
    return this.http.post(`${this.baseUrl}/CampRegister`, request);
  }
  cancelCampReg(id) {
    return this.http.put(`${this.baseUrl}/CancelCampReg/${id}`, null);
  }
  //#endregion
  //#region CampAttendLog
  getCampAttendLogCertStatusInfos() {
    const infos = [{
      name: '待審核',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses.待審核,
      style: 'orange'
    }, {
      name: '已核發',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses.已核發,
      style: 'green'
    }, {
      name: '不符核發資格',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses.不符核發資格,
      style: 'volcano'
    }, {
      name: '已取消',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CampAttendLogCertStatuses.已取消,
      style: 'red'
    }];
    return infos;
  }
  getCampAttendStat(campId) {
    return this.http.get(`${this.baseUrl}/GetCampAttendStat/${campId}`);
  }
  getSignCampAttendLogViewsByCampIdPaging(request) {
    return this.http.put(`${this.baseUrl}/GetSignCampAttendLogViewsByCampIdPaging`, request);
  }
  cancelCampAttendLogCert(id) {
    return this.http.put(`${this.baseUrl}/CancelCampAttendLogCert/${id}`, null);
  }
  cancelSignCampAttendLog(request) {
    return this.http.put(`${this.baseUrl}/CancelSignCampAttendLog`, request);
  }
  issueCampAttendLogCert(id) {
    return this.http.put(`${this.baseUrl}/IssueCampAttendLogCert/${id}`, null);
  }
  signCampAttendLog(request) {
    return this.http.put(`${this.baseUrl}/SignCampAttendLog`, request);
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

/***/ 45313:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/commerce.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommerceApiServ: () => (/* binding */ CommerceApiServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 94485);



class CommerceApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/Commerce';
    this.postReq = null;
  }
  // Commerce
  getAioCheckoutFormHtml(custOrderId) {
    return this.http.get(`${this.baseUrl}/GetAioCheckoutFormHtml/${custOrderId}`);
  }
  static {
    this.ɵfac = function CommerceApiServ_Factory(t) {
      return new (t || CommerceApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommerceApiServ,
      factory: CommerceApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 72758:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/services/cust-order.api.serv.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderApiServ: () => (/* binding */ CustOrderApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);

// Thired party packages

// Custom packages



class CustOrderApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/CustOrder';
    this.custOrderStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses;
    this.custOrderStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses);
    this.custOrderRefundReasonTypes = _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundReasonTypes;
    this.custOrderRefundReasonTypeOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundReasonTypes);
    this.custOrderRefundStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundStatuses;
    this.custOrderRefundStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundStatuses);
  }
  getCustOrderStatusInfos() {
    const infos = [{
      name: '待付款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses.待付款,
      style: 'magenta'
    }, {
      name: '已付款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses.已付款,
      style: 'green'
    }, {
      name: '待退款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses.待退款,
      style: 'volcano'
    }, {
      name: '已取消',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses.已取消,
      style: 'red'
    }, {
      name: '已逾期',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderStatuses.已逾期,
      style: 'purple'
    }];
    return infos;
  }
  getCustOrderViewById(id) {
    return this.http.get(`${this.baseUrl}/GetCustOrderViewById/${id}`);
  }
  getCustOrderViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderReq()) {
    return this.http.put(`${this.baseUrl}/GetCustOrderViews`, request);
  }
  getCustOrderViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCustOrderViewsPaging`, request);
  }
  cancelCustOrder(id) {
    return this.http.put(`${this.baseUrl}/CancelCustOrder/${id}`, null);
  }
  completeCustOrder(request) {
    return this.http.put(`${this.baseUrl}/CompleteCustOrder`, request);
  }
  //#region CustOrderRefund
  getCustOrderRefundStatusInfos() {
    const infos = [{
      name: '待退款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundStatuses.待退款,
      style: 'magenta'
    }, {
      name: '已退款',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundStatuses.已退款,
      style: 'green'
    }, {
      name: '已取消',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundStatuses.已取消,
      style: 'red'
    }];
    return infos;
  }
  getCustOrderRefundDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetCustOrderRefundDtoById/${id}`);
  }
  getCustOrderRefundViewById(id) {
    return this.http.get(`${this.baseUrl}/GetCustOrderRefundViewById/${id}`);
  }
  getCustOrderRefundViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.CustOrderRefundReq()) {
    return this.http.put(`${this.baseUrl}/GetCustOrderRefundViews`, request);
  }
  getCustOrderRefundViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCustOrderRefundViewsPaging`, request);
  }
  setCustOrderRefundDto(request) {
    return this.http.post(`${this.baseUrl}/SetCustOrderRefundDto`, request);
  }
  completeCustOrderRefund(request) {
    return this.http.put(`${this.baseUrl}/CompleteCustOrderRefund`, request);
  }
  revertCustOrderRefundToPending(id) {
    return this.http.put(`${this.baseUrl}/RevertCustOrderRefundToPending/${id}`, null);
  }
  static {
    this.ɵfac = function CustOrderApiServ_Factory(t) {
      return new (t || CustOrderApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CustOrderApiServ,
      factory: CustOrderApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 73185:
/*!*****************************************************!*\
  !*** ./libs/core/src/lib/services/cust.api.serv.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustApiServ: () => (/* binding */ CustApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);

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
  setCustomerDtos(request) {
    return this.http.post(`${this.baseUrl}/SetCustomerDtos`, request);
  }
  signupCustomerDto(request) {
    return this.http.post(`${this.baseUrl}/SignupCustomerDto`, request);
  }
  renewMembership(request) {
    return this.http.post(`${this.baseUrl}/RenewMembership`, request);
  }
  uploadCurrCustomerDto(request) {
    return this.http.post(`${this.baseUrl}/UploadCurrCustomerDto`, request);
  }
  //#endregion
  //#region CustGroup
  getCustGroupViews(request) {
    return this.http.put(`${this.baseUrl}/GetCustGroupViews`, request);
  }
  getCustGroupViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetCustGroupViewsPaging`, request);
  }
  //#endregion
  //#region CustMember
  getCustMemberViews(request) {
    return this.http.put(`${this.baseUrl}/GetCustMemberViews`, request);
  }
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

/***/ 82348:
/*!*********************************************!*\
  !*** ./libs/core/src/lib/services/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAttachApiServ: () => (/* reexport safe */ _app_attach_api_serv__WEBPACK_IMPORTED_MODULE_0__.AppAttachApiServ),
/* harmony export */   AppAuthApiServ: () => (/* reexport safe */ _app_auth_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAuthApiServ),
/* harmony export */   AppMsgApiServ: () => (/* reexport safe */ _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_2__.AppMsgApiServ),
/* harmony export */   AppPfms: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_13__.AppPfms),
/* harmony export */   AppRoleApiServ: () => (/* reexport safe */ _app_role_api_serv__WEBPACK_IMPORTED_MODULE_3__.AppRoleApiServ),
/* harmony export */   AppStoreApiServ: () => (/* reexport safe */ _app_store_api_serv__WEBPACK_IMPORTED_MODULE_4__.AppStoreApiServ),
/* harmony export */   AppUserApiServ: () => (/* reexport safe */ _app_user_api_serv__WEBPACK_IMPORTED_MODULE_5__.AppUserApiServ),
/* harmony export */   CampaignApiServ: () => (/* reexport safe */ _campaign_api_serv__WEBPACK_IMPORTED_MODULE_6__.CampaignApiServ),
/* harmony export */   CommerceApiServ: () => (/* reexport safe */ _commerce_api_serv__WEBPACK_IMPORTED_MODULE_7__.CommerceApiServ),
/* harmony export */   CustApiServ: () => (/* reexport safe */ _cust_api_serv__WEBPACK_IMPORTED_MODULE_9__.CustApiServ),
/* harmony export */   CustOrderApiServ: () => (/* reexport safe */ _cust_order_api_serv__WEBPACK_IMPORTED_MODULE_8__.CustOrderApiServ),
/* harmony export */   Genders: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_13__.Genders),
/* harmony export */   PermissionServ: () => (/* reexport safe */ _permission_serv__WEBPACK_IMPORTED_MODULE_10__.PermissionServ),
/* harmony export */   SEOServ: () => (/* reexport safe */ _seo_serv__WEBPACK_IMPORTED_MODULE_11__.SEOServ),
/* harmony export */   SharedDataApiServ: () => (/* reexport safe */ _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_12__.SharedDataApiServ),
/* harmony export */   SharedDataServ: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_13__.SharedDataServ),
/* harmony export */   SharedFuncServ: () => (/* reexport safe */ _shared_func_serv__WEBPACK_IMPORTED_MODULE_14__.SharedFuncServ),
/* harmony export */   StatApiServ: () => (/* reexport safe */ _stat_api_serv__WEBPACK_IMPORTED_MODULE_15__.StatApiServ),
/* harmony export */   StoreServ: () => (/* reexport safe */ _store_serv__WEBPACK_IMPORTED_MODULE_16__.StoreServ)
/* harmony export */ });
/* harmony import */ var _app_attach_api_serv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-attach.api.serv */ 89433);
/* harmony import */ var _app_auth_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-auth.api.serv */ 29544);
/* harmony import */ var _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-msg.api.serv */ 28079);
/* harmony import */ var _app_role_api_serv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role.api.serv */ 27426);
/* harmony import */ var _app_store_api_serv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-store.api.serv */ 62019);
/* harmony import */ var _app_user_api_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-user.api.serv */ 25599);
/* harmony import */ var _campaign_api_serv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaign.api.serv */ 55130);
/* harmony import */ var _commerce_api_serv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commerce.api.serv */ 45313);
/* harmony import */ var _cust_order_api_serv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cust-order.api.serv */ 72758);
/* harmony import */ var _cust_api_serv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cust.api.serv */ 73185);
/* harmony import */ var _permission_serv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./permission.serv */ 61715);
/* harmony import */ var _seo_serv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seo.serv */ 8535);
/* harmony import */ var _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-data.api.serv */ 74826);
/* harmony import */ var _shared_data_serv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared-data.serv */ 76280);
/* harmony import */ var _shared_func_serv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-func.serv */ 40966);
/* harmony import */ var _stat_api_serv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stat.api.serv */ 582);
/* harmony import */ var _store_serv__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store.serv */ 187);


















/***/ }),

/***/ 61715:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/services/permission.serv.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionServ: () => (/* binding */ PermissionServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 8535:
/*!************************************************!*\
  !*** ./libs/core/src/lib/services/seo.serv.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEOServ: () => (/* binding */ SEOServ)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 74150);






class SEOServ {
  get metaTitle() {
    return this.title.getTitle();
  }
  set metaTitle(content) {
    if (!content) {
      this.title.setTitle(this.appEnv.siteName);
      return;
    }
    this.title.setTitle(content);
  }
  constructor(meta, title, injector, doc) {
    this.meta = meta;
    this.title = title;
    this.injector = injector;
    this.doc = doc;
    this.appEnv = injector.get(_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV);
    // this.initMetaTags();
  }

  initMetaTags() {
    this.metaTitle = '';
    this.meta.addTags([{
      property: 'og:site_name',
      content: this.appEnv.siteName
    }, {
      property: 'og:title',
      content: this.appEnv.siteName
    }, {
      property: 'og:url',
      content: this.appEnv.siteServer
    }, {
      property: 'og:image',
      content: `${this.appEnv.siteServer}/assets/image/og/tslmai.png`
    }, {
      property: 'og:description',
      content: this.appEnv.siteName
    }, {
      name: 'keywords',
      content: '澐光客變系統,人工智慧,檢驗醫學'
    }, {
      name: 'description',
      content: this.appEnv.siteName
    }]);
  }
  updateMetaTags(title = this.appEnv.siteName, url = this.appEnv.siteServer, image = `${this.appEnv.siteServer}/assets/image/og/tslmai.png`, description = this.appEnv.siteName) {
    this.metaTitle = title;
    this.meta.updateTag({
      property: 'og:site_name',
      content: this.appEnv.siteName
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title
    });
    this.meta.updateTag({
      property: 'og:url',
      content: url
    });
    this.meta.updateTag({
      property: 'og:image',
      content: image
    });
    this.meta.updateTag({
      property: 'og:description',
      content: description
    });
    this.meta.updateTag({
      name: 'description',
      content: description
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: title
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: description
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: image
    });
  }
  updateCanonical(url = this.appEnv.siteServer) {
    const link = this.doc.getElementById('canonical-link');
    if (link) {
      link.href = url;
    }
  }
  injectStructuredData(id, schema) {
    let script = this.doc.getElementById(id);
    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }
  removeStructuredData(id) {
    const script = this.doc.getElementById(id);
    if (script) {
      script.remove();
    }
  }
  static {
    this.ɵfac = function SEOServ_Factory(t) {
      return new (t || SEOServ)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SEOServ,
      factory: SEOServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 74826:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/services/shared-data.api.serv.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedDataApiServ: () => (/* binding */ SharedDataApiServ)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 94485);

// Custom packages



class SharedDataApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/SharedData';
  }
  //#region PayType
  getPayTypeViews(request = new _models__WEBPACK_IMPORTED_MODULE_0__.PayTypeReq()) {
    return this.http.put(`${this.baseUrl}/GetPayTypeViews`, request);
  }
  //#endregion
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

/***/ 76280:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/shared-data.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPfms: () => (/* binding */ AppPfms),
/* harmony export */   Genders: () => (/* binding */ Genders),
/* harmony export */   SharedDataServ: () => (/* binding */ SharedDataServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 40966:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/shared-func.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedFuncServ: () => (/* binding */ SharedFuncServ)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 37286);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 23963);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 36896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);


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

/***/ 582:
/*!*****************************************************!*\
  !*** ./libs/core/src/lib/services/stat.api.serv.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatApiServ: () => (/* binding */ StatApiServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 94485);



class StatApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/Stat';
  }
  getCustOrderPaymentStats(request) {
    return this.http.put(`${this.baseUrl}/GetCustOrderPaymentStats`, request);
  }
  static {
    this.ɵfac = function StatApiServ_Factory(t) {
      return new (t || StatApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StatApiServ,
      factory: StatApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 187:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/services/store.serv.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreServ: () => (/* binding */ StoreServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var _states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+states/curr-auth-user */ 34467);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-msg.api.serv */ 28079);
/* harmony import */ var _app_role_api_serv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role.api.serv */ 27426);
/* harmony import */ var _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-data.api.serv */ 74826);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 99797);


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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._appNewsMsgCatsCache);
  }
  resetAppNewsMsgCatsCache() {
    this._appNewsMsgCatsCache = null;
  }
  // AppRole cache
  getAppRolesCache() {
    if (this._appRolesCache === null) {
      return this._appRoleApiServ.getAppRoleViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appRolesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._appRolesCache);
  }
  resetAppRolesCache() {
    this._appRolesCache = null;
  }
  // AppRoute cache
  getAppRoutesCache() {
    if (this._appRoutesCache === null) {
      return this._appRoleApiServ.getActiveAppRouteViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appRoutesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._appRoutesCache);
  }
  resetAppRoutesCache() {
    this._appRoutesCache = null;
  }
  // ZipCode
  getZipCodesCache() {
    if (this._zipCodesCache === null) {
      return this._sharedDataApiServ.getZipCodeViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._zipCodesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._zipCodesCache);
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
      return new (t || StoreServ)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
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

/***/ 56767:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-base.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDBaseComponent: () => (/* binding */ BBDBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 39421);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/message */ 32703);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/notification */ 68135);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 16567);
/* harmony import */ var _extensions_array_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/array.extension */ 17890);
/* harmony import */ var _extensions_date_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/date.extension */ 35861);
/* harmony import */ var _extensions_string_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/string.extension */ 33060);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ 45963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _bbd_notify_bbd_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbd-notify/bbd-notify.service */ 9998);


// Antd packages




// Third party packages

// Custom packages






class BBDBaseComponent {
  // Gets & Sets
  get isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId);
  }
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
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID);
    this.formHelper = _helpers__WEBPACK_IMPORTED_MODULE_3__.FormHelper;
    this.dateHelper = _helpers__WEBPACK_IMPORTED_MODULE_3__.DateHelper;
    this.appEnv = injector.get(_helpers__WEBPACK_IMPORTED_MODULE_3__.APP_ENV);
    this.appAuthApiServ = injector.get(_services__WEBPACK_IMPORTED_MODULE_4__.AppAuthApiServ);
    this.drawerServ = injector.get(ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__.NzDrawerService);
    this.messageServ = injector.get(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__.NzMessageService);
    this.modalServ = injector.get(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalService);
    this.notificationServ = injector.get(ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_11__.NzNotificationService);
    this.spinnerServ = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService);
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

/***/ 39930:
/*!************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-confirm-dialog/bbd-confirm-dialog.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDConfirmDialogComponent: () => (/* binding */ BBDConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 15849);





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

/***/ 82920:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-file-upload/bbd-file-upload.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDFileUploadComponent: () => (/* binding */ BBDFileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
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

/***/ 93266:
/*!********************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-image-upload/bbd-image-upload.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDImageUploadComponent: () => (/* binding */ BBDImageUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 51726);
/* harmony import */ var _pipes_file_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/file-url.pipe */ 79115);
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

/***/ 26740:
/*!******************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-img-native-upload/bbd-img-native-upload.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDImgNativeUploadComponent: () => (/* binding */ BBDImgNativeUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var _services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-attach.api.serv */ 89433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 51726);
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

/***/ 23028:
/*!******************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-loading-indicator/bbd-loading-indicator.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDLoadingIndicatorComponent: () => (/* binding */ BBDLoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);


function BBDLoadingIndicatorComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7)(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8)(10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function BBDLoadingIndicatorComponent_ng_container_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function BBDLoadingIndicatorComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BBDLoadingIndicatorComponent_ng_container_2_p_2_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.message);
  }
}
class BBDLoadingIndicatorComponent {
  constructor() {
    this.type = 'spinner';
    this.message = '資料讀取中...';
  }
  static {
    this.ɵfac = function BBDLoadingIndicatorComponent_Factory(t) {
      return new (t || BBDLoadingIndicatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDLoadingIndicatorComponent,
      selectors: [["bbd-loading-indicator"]],
      inputs: {
        type: "type",
        message: "message"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "loading-container", 3, "ngClass"], [4, "ngIf"], [1, "w-full", "rounded-md", "opacity-10"], [1, "animate-pulse", "space-y-6", "py-1"], [1, "h-2", "w-1/3", "rounded", "bg-current"], [1, "space-y-3"], [1, "grid", "grid-cols-3", "gap-4"], [1, "col-span-2", "h-2", "rounded", "bg-current"], [1, "col-span-1", "h-2", "rounded", "bg-current"], [1, "h-2", "rounded", "bg-current"], [1, "spinner-circle"], ["class", "spinner-message", 4, "ngIf"], [1, "spinner-message"]],
      template: function BBDLoadingIndicatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BBDLoadingIndicatorComponent_ng_container_1_Template, 12, 0, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BBDLoadingIndicatorComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "skeleton");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "spinner");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".spinner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.spinner[_ngcontent-%COMP%]   .spinner-message[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  font-size: 1.375rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n}\n\n.spinner-circle[_ngcontent-%COMP%] {\n  display: grid;\n  aspect-ratio: 1 / 1;\n  width: 5rem;\n}\n\n.spinner-circle[_ngcontent-%COMP%]::before, .spinner-circle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  grid-area: 1/1;\n  --c:no-repeat radial-gradient(farthest-side,#48d1bc 92%,#0000);\n  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;\n  background-size: 0.75rem 0.75rem;\n  animation: _ngcontent-%COMP%_l12 1s infinite;\n}\n\n.spinner-circle[_ngcontent-%COMP%]::before {\n  margin: 1.5rem;\n  filter: hue-rotate(45deg);\n  background-size: 0.5rem 0.5rem;\n  animation-timing-function: linear;\n}\n\n@keyframes _ngcontent-%COMP%_l12 {\n  100% {\n    transform: rotate(0.5turn);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2JiZC1sb2FkaW5nLWluZGljYXRvci9iYmQtbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLGFBQUE7RUFBQSxzQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUE7QUFBQTs7QUFLRjtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBRUY7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSw4REFBQTtFQUNBLGdGQUNFO0VBSUYsZ0NBQUE7RUFDQSwwQkFBQTtBQUhGOztBQU1FO0VBQUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQTtBQUhBOztBQU1GO0VBQ0U7SUFBSywwQkFBQTtFQURMO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIEBhcHBseSByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcjtcblxuICAuc3Bpbm5lci1tZXNzYWdlIHtcbiAgICBAYXBwbHkgdGV4dC1sZyBmb250LW1lZGl1bSBtdC01IHRyYWNraW5nLXdpZGVzdDtcbiAgfVxufVxuXG4uc3Bpbm5lci1jaXJjbGUge1xuICBAYXBwbHkgdy0yMCBhc3BlY3Qtc3F1YXJlIGdyaWQ7XG59XG4uc3Bpbm5lci1jaXJjbGU6OmJlZm9yZSxcbi5zcGlubmVyLWNpcmNsZTo6YWZ0ZXIgeyAgICBcbiAgY29udGVudDpcIlwiO1xuICBncmlkLWFyZWE6IDEvMTtcbiAgLS1jOm5vLXJlcGVhdCByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSwjNDhkMWJjIDkyJSwjMDAwMCk7XG4gIGJhY2tncm91bmQ6IFxuICAgIHZhcigtLWMpIDUwJSAgMCwgXG4gICAgdmFyKC0tYykgNTAlICAxMDAlLCBcbiAgICB2YXIoLS1jKSAxMDAlIDUwJSwgXG4gICAgdmFyKC0tYykgMCAgICA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogLjc1cmVtIC43NXJlbTtcbiAgYW5pbWF0aW9uOiBsMTIgMXMgaW5maW5pdGU7XG59XG4uc3Bpbm5lci1jaXJjbGU6OmJlZm9yZSB7XG4gIEBhcHBseSBtLTY7XG4gIGZpbHRlcjogaHVlLXJvdGF0ZSg0NWRlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogLjVyZW0gLjVyZW07XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhclxufVxuXG5Aa2V5ZnJhbWVzIGwxMiB7IFxuICAxMDAle3RyYW5zZm9ybTogcm90YXRlKC41dHVybil9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 93930:
/*!********************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyComponent: () => (/* binding */ BBDNotifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);




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
      consts: [["role", "alert", 1, "flex", "items-center"], [1, "material-symbols-rounded", 3, "ngClass"], [1, "flex-auto", "pl-2", "truncate", "text-white"], [1, "btn-ghost", "w-10", 3, "click"], [1, "material-symbols-rounded", "align-middle"]],
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

/***/ 16669:
/*!*****************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyModule: () => (/* binding */ BBDNotifyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _bbd_notify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-notify.service */ 9998);
/* harmony import */ var _bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbd-notify.component */ 93930);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





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

/***/ 9998:
/*!******************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyService: () => (/* binding */ BBDNotifyService)
/* harmony export */ });
/* harmony import */ var _bbd_notify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-notify.component */ 93930);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





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

/***/ 7376:
/*!**********************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* binding */ BBDQuillEditorViewerComponent)
/* harmony export */ });
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/safe-html.pipe */ 32650);





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

/***/ 24446:
/*!********************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-quill-editor/bbd-quill-editor.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDQuillEditorComponent: () => (/* binding */ BBDQuillEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var _services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-attach.api.serv */ 89433);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 13615);








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

/***/ 71378:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/shared/components/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDBaseComponent: () => (/* reexport safe */ _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent),
/* harmony export */   BBDConfirmDialogComponent: () => (/* reexport safe */ _bbd_confirm_dialog_bbd_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.BBDConfirmDialogComponent),
/* harmony export */   BBDFileUploadComponent: () => (/* reexport safe */ _bbd_file_upload_bbd_file_upload_component__WEBPACK_IMPORTED_MODULE_3__.BBDFileUploadComponent),
/* harmony export */   BBDImageUploadComponent: () => (/* reexport safe */ _bbd_image_upload_bbd_image_upload_component__WEBPACK_IMPORTED_MODULE_4__.BBDImageUploadComponent),
/* harmony export */   BBDImgNativeUploadComponent: () => (/* reexport safe */ _bbd_img_native_upload_bbd_img_native_upload_component__WEBPACK_IMPORTED_MODULE_5__.BBDImgNativeUploadComponent),
/* harmony export */   BBDLoadingIndicatorComponent: () => (/* reexport safe */ _bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__.BBDLoadingIndicatorComponent),
/* harmony export */   BBDQuillEditorComponent: () => (/* reexport safe */ _bbd_quill_editor_bbd_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent),
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* reexport safe */ _bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__.BBDQuillEditorViewerComponent),
/* harmony export */   CampAttendCertPrintComponent: () => (/* reexport safe */ _prints__WEBPACK_IMPORTED_MODULE_9__.CampAttendCertPrintComponent),
/* harmony export */   PayTypeSelectComponent: () => (/* reexport safe */ _pay_type_select_pay_type_select_component__WEBPACK_IMPORTED_MODULE_8__.PayTypeSelectComponent),
/* harmony export */   Payment407ReceiptPrintComponent: () => (/* reexport safe */ _prints__WEBPACK_IMPORTED_MODULE_9__.Payment407ReceiptPrintComponent),
/* harmony export */   PaymentReceiptPrintComponent: () => (/* reexport safe */ _prints__WEBPACK_IMPORTED_MODULE_9__.PaymentReceiptPrintComponent)
/* harmony export */ });
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-base.component */ 56767);
/* harmony import */ var _bbd_quill_editor_bbd_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbd-quill-editor/bbd-quill-editor.component */ 24446);
/* harmony import */ var _bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 7376);
/* harmony import */ var _bbd_file_upload_bbd_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bbd-file-upload/bbd-file-upload.component */ 82920);
/* harmony import */ var _bbd_image_upload_bbd_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbd-image-upload/bbd-image-upload.component */ 93266);
/* harmony import */ var _bbd_img_native_upload_bbd_img_native_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbd-img-native-upload/bbd-img-native-upload.component */ 26740);
/* harmony import */ var _bbd_confirm_dialog_bbd_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bbd-confirm-dialog/bbd-confirm-dialog.component */ 39930);
/* harmony import */ var _bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bbd-loading-indicator/bbd-loading-indicator.component */ 23028);
/* harmony import */ var _pay_type_select_pay_type_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pay-type-select/pay-type-select.component */ 58704);
/* harmony import */ var _prints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prints */ 7767);











/***/ }),

/***/ 58704:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/pay-type-select/pay-type-select.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayTypeSelectComponent: () => (/* binding */ PayTypeSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ 93146);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Third party packages

// Custom packages









function PayTypeSelectComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", pt_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", pt_r1.name, " ");
  }
}
class PayTypeSelectComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.modalData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NZ_MODAL_DATA);
    this._modal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalRef);
    this._sharedDataApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services__WEBPACK_IMPORTED_MODULE_2__.SharedDataApiServ);
    this.payTypes = [];
    this.selectedPayTypeId = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadPayTypes();
  }
  loadPayTypes() {
    this.isLoading = true;
    const req = new _models__WEBPACK_IMPORTED_MODULE_1__.PayTypeReq();
    req.status = +_models__WEBPACK_IMPORTED_MODULE_1__.PayTypeStatuses.啟用;
    this._sharedDataApiServ.getPayTypeViews(req).subscribe({
      next: res => {
        this.payTypes = (res || []).filter(cond => cond.id >= +_models__WEBPACK_IMPORTED_MODULE_1__.PayTypeIds.內部金流_最小值 && cond.id <= +_models__WEBPACK_IMPORTED_MODULE_1__.PayTypeIds.內部金流_最大值);
      },
      error: err => {
        this.bbdNotifyServ.error('載入付款方式失敗', err);
      }
    }).add(() => this.isLoading = false);
  }
  doConfirm() {
    if (!this.selectedPayTypeId) return;
    const selected = this.payTypes.find(p => p.id === this.selectedPayTypeId);
    this._modal.destroy(selected);
  }
  doCancel() {
    this._modal.destroy(null);
  }
  static {
    this.ɵfac = function PayTypeSelectComponent_Factory(t) {
      return new (t || PayTypeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PayTypeSelectComponent,
      selectors: [["bbd-pay-type-select"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 4,
      consts: [[1, "p-6", "max-w-md", "mx-auto"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-4"], ["appearance", "outline", 1, "w-full"], [3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-4", "mt-4"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"]],
      template: function PayTypeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u8ACB\u9078\u64C7\u4ED8\u6B3E\u65B9\u5F0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 2)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u4ED8\u6B3E\u65B9\u5F0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PayTypeSelectComponent_Template_mat_select_ngModelChange_6_listener($event) {
            return ctx.selectedPayTypeId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PayTypeSelectComponent_mat_option_7_Template, 2, 2, "mat-option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayTypeSelectComponent_Template_button_click_9_listener() {
            return ctx.doCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u53D6\u6D88");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayTypeSelectComponent_Template_button_click_11_listener() {
            return ctx.doConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u78BA\u5B9A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedPayTypeId)("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.payTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.selectedPayTypeId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91033:
/*!***************************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/prints/camp-attend-cert-print/camp-attend-cert-print.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampAttendCertPrintComponent: () => (/* binding */ CampAttendCertPrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bbd-base.component */ 56767);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ 93146);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 77715);
/* harmony import */ var _pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/is-empty.pipe */ 49841);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Third party packages

// Custom packages







function CampAttendCertPrintComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15)(1, "strong", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u4E3B\u8FA6\u55AE\u4F4D\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r0.contentJto.organizers == null ? null : ctx_r0.contentJto.organizers.join("\u3001")) || "-");
  }
}
function CampAttendCertPrintComponent_li_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15)(1, "strong", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u5354\u8FA6\u55AE\u4F4D\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r1.contentJto.coOrganizers == null ? null : ctx_r1.contentJto.coOrganizers.join("\u3001")) || "-");
  }
}
const _c0 = function () {
  return [];
};
class CampAttendCertPrintComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.modalData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NZ_MODAL_DATA);
    this._modal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalRef);
    this._campaignApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services__WEBPACK_IMPORTED_MODULE_2__.CampaignApiServ);
    this.regView = null;
    this.contentJto = new _models__WEBPACK_IMPORTED_MODULE_1__.CampaignContentJto();
    this.printStyle = {
      '@page': {
        size: 'A4 portrait',
        margin: '0'
      },
      'body': {
        '-webkit-print-color-adjust': 'exact',
        'print-color-adjust': 'exact'
      }
    };
    this.rocYear = new Date().getFullYear() - 1911;
  }
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    if (!this.modalData?.campRegId) return;
    const req = new _models__WEBPACK_IMPORTED_MODULE_1__.CampRegReq();
    req.id = this.modalData.campRegId;
    req.isShowCampContent = true;
    this._campaignApiServ.getCampRegView(req).subscribe({
      next: res => {
        if (!res) return;
        this.regView = res;
        this.contentJto = (res.campContent || '').isUndefinedOrNullOrEmpty() ? new _models__WEBPACK_IMPORTED_MODULE_1__.CampaignContentJto() : JSON.parse(res.campContent || '{}');
      },
      error: err => {
        this.bbdNotifyServ.error('取得資料失敗', err);
      }
    });
  }
  doCancel() {
    this._modal.destroy();
  }
  static {
    this.ɵfac = function CampAttendCertPrintComponent_Factory(t) {
      return new (t || CampAttendCertPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CampAttendCertPrintComponent,
      selectors: [["bbd-camp-attend-cert-print"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 59,
      vars: 26,
      consts: [[1, "print-mock"], ["id", "print-section", 1, "relative", "aspect-[210/297]", "w-full", "max-w-3xl", "p-12", "shadow-lg", "border", "border-gray-200", "flex", "flex-col", "print:shadow-none", "print:border-none", "print:max-w-none"], ["src", "assets/shared/img/illustration/print-bg.png", "alt", "bg", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "pointer-events-none"], [1, "relative", "z-1", "h-full", "print:p-[20mm]"], [1, "flex", "items-start", "justify-between", "gap-10", "border-b", "border-sky-800"], [1, "font-serif", "font-bold", "text-4xl", "leading-none", "lg:text-6xl", "lg:leading-tight", "print:leading-none", "print:text-[44pt]"], [1, "block"], [1, "block", "my-2", "print:my-[5mm]"], [1, "text-sky-700", "pt-2", "pb-8", "block", "print:pt-[4mm]", "print:pb-[12mm]"], ["src", "assets/shared/img/logo/mark.png", "alt", "Mark", 1, "w-1/4", "-mt-[3mm]", "max-w-[150px]", "object-contain"], [1, "flex-grow", "flex", "flex-col", "justify-between", "items-end", "pt-8", "pb-20"], [1, "text-xl", "lg:text-2xl", "print:text-[16pt]", "space-y-2", "max-w-lg"], [1, "font-bold", "block", "text-sky-700", "my-1", "lg:my-2"], [1, "mt-8", "mr-auto", "space-y-3", "text-base", "lg:text-lg", "print:text-[16pt]"], ["class", "flex items-start gap-3", 4, "ngIf"], [1, "flex", "items-start", "gap-3"], [1, "font-semibold", "whitespace-nowrap"], [1, "flex", "items-end", "justify-between", "gap-10", "mt-auto", "absolute", "bottom-0", "inset-x-0", "print:bottom-[20mm]", "print:inset-x-[20mm]"], [1, "text-lg", "print:text-[12pt]"], [1, "mb-2"], ["src", "assets/shared/img/logo/chairman-stamp.png", "alt", "Chairman Stamp", 1, "w-40"], [1, "text-base", "text-gray-500", "mt-4"], ["src", "assets/shared/img/logo/society-stamp-portrait.png", "alt", "Society Stamp", 1, "w-52", "absolute", "right-0", "bottom-0"], [1, "print-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", "printSectionId", "print-section", "styleSheetFile", "styles.css", "ngxPrint", "", 3, "printStyle", "useExistingCss"], [1, "material-icons-outlined", "pr-2"]],
      template: function CampAttendCertPrintComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "header", 4)(5, "h1", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u53F0\u7063\u4EBA\u5DE5\u667A\u6167");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u6AA2\u9A57\u91AB\u5B78\u5B78\u6703");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u7814\u8A0E\u6703\u51FA\u5E2D\u8B49\u660E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "main", 10)(14, "section", 11)(15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u8332\u8B49\u660E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p")(18, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u53C3\u52A0\u672C\u5B78\u6703\u4E3B\u8FA6 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ul", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CampAttendCertPrintComponent_li_25_Template, 5, 1, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CampAttendCertPrintComponent_li_27_Template, 5, 1, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "isEmpty");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li", 15)(30, "strong", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u6D3B\u52D5\u6642\u6578\uFF1A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li", 15)(35, "strong", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u6D3B\u52D5\u65E5\u671F\uFF1A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "footer", 17)(41, "section", 18)(42, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u7406\u4E8B\u9577\u7C3D\u7AE0");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 23)(51, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CampAttendCertPrintComponent_Template_button_click_51_listener() {
            return ctx.doCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 25)(55, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "print");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\u5217\u5370");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.regView == null ? null : ctx.regView.custName) || "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.regView == null ? null : ctx.regView.campName) || "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 11, ctx.contentJto.organizers || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c0)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 13, ctx.contentJto.coOrganizers || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c0)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u5171\u8A08 ", (ctx.regView == null ? null : ctx.regView.campTotalHours) || "-", " \u5C0F\u6642");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 15, ctx.regView == null ? null : ctx.regView.campStartAt, "yyyy/MM/dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" \u4E2D\u83EF\u6C11\u570B ", ctx.rocYear, " \u5E74 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](47, 18, "now", "MM"), " \u6708 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](48, 21, "now", "dd"), " \u65E5 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("printStyle", ctx.printStyle)("useExistingCss", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _pipes_is_empty_pipe__WEBPACK_IMPORTED_MODULE_3__.IsEmptyPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 7767:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/prints/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampAttendCertPrintComponent: () => (/* reexport safe */ _camp_attend_cert_print_camp_attend_cert_print_component__WEBPACK_IMPORTED_MODULE_0__.CampAttendCertPrintComponent),
/* harmony export */   Payment407ReceiptPrintComponent: () => (/* reexport safe */ _payment_407_receipt_print_payment_407_receipt_print_component__WEBPACK_IMPORTED_MODULE_2__.Payment407ReceiptPrintComponent),
/* harmony export */   PaymentReceiptPrintComponent: () => (/* reexport safe */ _payment_receipt_print_payment_receipt_print_component__WEBPACK_IMPORTED_MODULE_1__.PaymentReceiptPrintComponent)
/* harmony export */ });
/* harmony import */ var _camp_attend_cert_print_camp_attend_cert_print_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camp-attend-cert-print/camp-attend-cert-print.component */ 91033);
/* harmony import */ var _payment_receipt_print_payment_receipt_print_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-receipt-print/payment-receipt-print.component */ 74173);
/* harmony import */ var _payment_407_receipt_print_payment_407_receipt_print_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-407-receipt-print/payment-407-receipt-print.component */ 6801);




/***/ }),

/***/ 6801:
/*!*********************************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/prints/payment-407-receipt-print/payment-407-receipt-print.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Payment407ReceiptPrintComponent: () => (/* binding */ Payment407ReceiptPrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 62577);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bbd-base.component */ 56767);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 77715);
/* eslint-disable @typescript-eslint/no-explicit-any */



// Third party packages






function Payment407ReceiptPrintComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "header", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u6F90\u5149\u5BA2\u8B8A\u7CFB\u7D71");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u7E73\u8CBB\u8B49\u660E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u5B58\u6839\u806F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "section", 13)(16, "div", 14)(17, "div")(18, "p")(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u6263\u7E73\u55AE\u4F4D\u7D71\u4E00\u7DE8\u865F\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "00603961");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p")(23, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u7ACB\u6848\u8B49\u66F8\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u53F0\u5167\u5718\u5B57\u7B2C1140023141\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p")(27, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u5217\u5370\u65E5\u671F\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "section", 17)(31, "ul", 18)(32, "li")(33, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u7E73\u8CBB\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u4E8B\u7531");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u6C11\u570B\u5E74 / \u6B21");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ul", 18)(48, "li")(49, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u7E73\u8CBB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li")(54, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u61C9\u7E73\u91D1\u984D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u65B0\u53F0\u5E63 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li")(62, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u5408\u8A08");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ul", 23)(68, "li")(69, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u7406\u4E8B\u9577");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u859B\u535A\u4EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li")(74, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u79D8\u66F8\u9577");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\u856D\u74CA\u5B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li")(79, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\u6703\u8A08");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\u859B\u7FD4\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li", 26)(84, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\u7D93\u8FA6\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "\u5433\u6167\u82B8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "section", 28)(91, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\u5099\u8A3B\u8AAA\u660E\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "ol", 29)(94, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u672C\u55AE\u64DA\u4F9B\u7E73\u8CBB\u4EBA\u70BA\u7E73\u7D0D\u8CBB\u7528\u8B49\u660E\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " \u8CA1\u653F\u90E8\u9AD8\u96C4\u570B\u7A05\u5C40 109 \u5E74 1 \u6708 15 \u65E5\u884C\u653F\u89E3\u91CB\u300C\u975E\u4EE5\u71DF\u5229\u70BA\u76EE\u7684\u4E4B\u4E8B\u696D\u3001\u5718\u9AD4\u3001\u7D44\u7E54\uFF0C\u6709\u92B7\u552E\u8CA8\u7269\u6216\u52DE\u52D9\u6642\uFF0C\u4ECD\u61C9\u4F9D\u524D\u958B\u6CD5\u689D\u898F\u5B9A\u8AB2\u5FB5\u71DF\u696D\u7A05\u3002\u300D\u3001\u300C\u6559\u80B2\u3001\u6587\u5316\u3001\u516C\u76CA\u3001\u6148\u5584\u6A5F\u95DC\u6216\u5718\u9AD4\u4E4B\u7D44\u7E54\u578B\u614B\uFF0C\u61C9\u65BC\u92B7\u552E\u8CA8\u7269\u6216\u52DE\u52D9\u6642\uFF0C\u61C9\u5C31\u6BCF\u7B46\u4EA4\u6613\u6BCF\u6B21\u92B7\u552E\u984D\uFF0C\u4F9D\u300E\u71DF\u696D\u4EBA\u958B\u7ACB\u92B7\u552E\u6191\u8B49\u6642\u9650\u8868\u300F\u898F\u5B9A\uFF0C\u65BC\u4EA4\u8CA8\u6216\u6536\u6B3E\u6642\uFF0C\u586B\u5BEB 5 \u806F\u5F0F\u300E\u6A5F\u95DC\u5718\u9AD4\u92B7\u552E\u8CA8\u7269\u6216\u52DE\u52D9\u7533\u5831\u92B7\u552E\u984D\u8207\u71DF\u696D\u7A05\u7E73\u6B3E\u66F8\u300F( 407 \u7E73\u6B3E\u66F8 )\uFF0C\u5C07\u7B2C 4\u30015 \u806F\u4EA4\u8CB7\u53D7\u4EBA\u4F5C\u70BA\u8A18\u5E33\u53CA\u6263\u62B5\u6191\u8B49\uFF0C\u4E26\u65BC\u92B7\u552E\u4E4B\u6B21\u6708 15 \u65E5\u524D\uFF0C\u6301\u6191\u7B2C 1\u30012\u30013 \u806F\u5411\u516C\u5EAB\u7E73\u7D0D\u71DF\u696D\u7A05\uFF0C\u4EE5\u7B2C 3 \u806F\u4EE3\u66FF\u92B7\u552E\u984D\u4E4B\u7533\u5831\u3002\u300D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " \u672C\u55AE\u4F4D\u5C07\u65BC\u7E73\u8CBB\u4EBA\u7E73\u7D0D\u6B3E\u9805\u5F8C\uFF0C\u4E3B\u52D5\u5411\u570B\u7A05\u5C40\u7E73\u7D0D 407 \u71DF\u696D\u7A05\uFF0C\u4E26\u90F5\u5BC4\u63D0\u4F9B\u7E73\u8CBB\u4EBA\u4E8B\u696D\u55AE\u4F4D\uFF0C \u55AE\u4F4D\u65BC\u6536\u5230 407 \u7E73\u6B3E\u66F8\u7E73\u8CBB\u8B49\u660E\u5F8C\uFF0C\u53EF\u8996\u540C\u6536\u64DA\uFF0C\u65BC\u9694\u5E74 1 \u6708\u4E0D\u7528\u518D\u5C0D\u672C\u5B78\u6703\u7533\u8ACB\u6263\u7E73 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u6536\u64DA\u7DE8\u865F\uFF1A", ctx_r0.orderView.receipt407No || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.printDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.orderView.custName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.joinedItemNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.fiscalYearTerm || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.orderView.payTypeName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 8, ctx_r0.orderView.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u65B0\u53F0\u5E63 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 10, ctx_r0.orderView.total), " \u5143");
  }
}
class Payment407ReceiptPrintComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get joinedItemNames() {
    return this.orderView?.details?.map(item => item.itemName).join('/') || '-';
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.modalData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NZ_MODAL_DATA);
    this._modal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalRef);
    this._custOrderApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services__WEBPACK_IMPORTED_MODULE_1__.CustOrderApiServ);
    this.printStyle = {
      '@page': {
        size: 'A4 portrait',
        margin: '10mm'
      }
    };
    this.printDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), 'yyyy/MM/dd');
    this.orderView = null;
    this.fiscalYearTerm = '';
  }
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    if (!this.modalData?.custOrderId) return;
    this._custOrderApiServ.getCustOrderViewById(this.modalData.custOrderId).subscribe({
      next: res => {
        if (!res) return;
        this.orderView = res;
        if (res.payAt) {
          const rocYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.getYear)(new Date(res.payAt)) - 1911;
          this.fiscalYearTerm = `${rocYear} / 1`;
        }
      },
      error: err => {
        this.bbdNotifyServ.error('取得資料失敗', err);
      }
    });
  }
  doCancel() {
    this._modal.destroy();
  }
  static {
    this.ɵfac = function Payment407ReceiptPrintComponent_Factory(t) {
      return new (t || Payment407ReceiptPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: Payment407ReceiptPrintComponent,
      selectors: [["bbd-payment-407-receipt-print"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 3,
      consts: [["class", "print-mock", 4, "ngIf"], [1, "print-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", "printSectionId", "print-section", "ngxPrint", "", 3, "printStyle", "useExistingCss"], [1, "material-icons-outlined", "pr-2"], [1, "print-mock"], ["id", "print-section", 1, "relative", "aspect-[210/297]", "w-full", "max-w-3xl", "p-8", "shadow-lg", "border", "border-gray-200", "bg-white", "print:shadow-none", "print:border-none", "print:max-w-none"], [1, "border-b-2", "border-gray-800", "pb-3", "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2"], ["src", "assets/shared/img/logo/mark.png", "alt", "Mark", 1, "w-16"], [1, "text-sm", "text-gray-700"], [1, "text-2xl", "font-bold"], [1, "text-red-600", "font-semibold", "text-right"], [1, "text-xs", "text-gray-600", "border-b", "border-gray-400", "pb-3", "mb-4"], [1, "flex", "justify-between"], [1, "font-semibold"], [1, "text-right", "font-semibold"], [1, "text-sm", "mb-4"], [1, "grid", "grid-cols-3", "gap-4", "border-b", "border-gray-400", "pb-3", "mb-3"], [1, "font-semibold", "text-xs", "text-gray-700"], [1, "mt-1"], [1, "font-bold"], [1, "mt-1", "font-bold", "text-base"], [1, "grid", "grid-cols-6", "gap-2"], [1, "font-semibold", "text-xs", "mb-1"], [1, "text-base"], [1, "col-span-2"], ["src", "assets/shared/img/logo/society-stamp-square.png", "alt", "society-stamp", 1, "w-[20mm]", "float-right"], [1, "mt-6", "text-xs", "leading-relaxed", "text-slate-600"], [1, "list-decimal", "list-inside", "space-y-1"]],
      template: function Payment407ReceiptPrintComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Payment407ReceiptPrintComponent_div_0_Template, 100, 12, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Payment407ReceiptPrintComponent_Template_button_click_2_listener() {
            return ctx.doCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3)(6, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "print");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u5217\u5370");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("printStyle", ctx.printStyle)("useExistingCss", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 74173:
/*!*************************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/prints/payment-receipt-print/payment-receipt-print.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentReceiptPrintComponent: () => (/* binding */ PaymentReceiptPrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 62577);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bbd-base.component */ 56767);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 77715);
/* eslint-disable @typescript-eslint/no-explicit-any */



// Third party packages






function PaymentReceiptPrintComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "header", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u6F90\u5149\u5BA2\u8B8A\u7CFB\u7D71");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u96FB\u5B50\u6536\u64DA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u5B58\u6839\u806F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "section", 13)(16, "div", 14)(17, "div")(18, "p")(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u6263\u7E73\u55AE\u4F4D\u7D71\u4E00\u7DE8\u865F\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "00603961");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p")(23, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u7ACB\u6848\u8B49\u66F8\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u53F0\u5167\u5718\u5B57\u7B2C1140023141\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p")(27, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u5217\u5370\u65E5\u671F\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "section", 17)(31, "ul", 18)(32, "li")(33, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u7E73\u8CBB\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u4E8B\u7531");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u6C11\u570B\u5E74 / \u6B21");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ul", 18)(48, "li")(49, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u7E73\u8CBB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li")(54, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u61C9\u7E73\u91D1\u984D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u65B0\u53F0\u5E63 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li")(62, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u5408\u8A08");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ul", 23)(68, "li")(69, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u7406\u4E8B\u9577");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u859B\u535A\u4EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li")(74, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u79D8\u66F8\u9577");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\u856D\u74CA\u5B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li")(79, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\u6703\u8A08");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\u859B\u7FD4\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li", 26)(84, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\u7D93\u8FA6\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "\u5433\u6167\u82B8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u6536\u64DA\u7DE8\u865F\uFF1A", ctx_r0.orderView.receiptNo || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.printDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.orderView.custName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.orderView.orderDesc || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.fiscalYearTerm || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.orderView.payTypeName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 8, ctx_r0.orderView.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u65B0\u53F0\u5E63 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 10, ctx_r0.orderView.total), " \u5143");
  }
}
class PaymentReceiptPrintComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.modalData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NZ_MODAL_DATA);
    this._modal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalRef);
    this._custOrderApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services__WEBPACK_IMPORTED_MODULE_1__.CustOrderApiServ);
    this.printDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), 'yyyy/MM/dd');
    this.orderView = null;
    this.fiscalYearTerm = '';
    this.printStyle = {
      '@page': {
        size: 'A5 landscape',
        margin: '10mm'
      }
    };
  }
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    if (!this.modalData?.custOrderId) return;
    this._custOrderApiServ.getCustOrderViewById(this.modalData.custOrderId).subscribe({
      next: res => {
        if (!res) return;
        this.orderView = res;
        if (res.payAt) {
          const rocYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.getYear)(new Date(res.payAt)) - 1911;
          this.fiscalYearTerm = `${rocYear} / 1`;
        }
      },
      error: err => {
        this.bbdNotifyServ.error('取得資料失敗', err);
      }
    });
  }
  doCancel() {
    this._modal.destroy();
  }
  static {
    this.ɵfac = function PaymentReceiptPrintComponent_Factory(t) {
      return new (t || PaymentReceiptPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PaymentReceiptPrintComponent,
      selectors: [["bbd-payment-receipt-print"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 3,
      consts: [["class", "print-mock", 4, "ngIf"], [1, "print-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", "printSectionId", "print-section", "ngxPrint", "", 3, "printStyle", "useExistingCss"], [1, "material-icons-outlined", "pr-2"], [1, "print-mock"], ["id", "print-section", 1, "relative", "aspect-[297/210]", "w-full", "max-w-3xl", "p-8", "shadow-lg", "border", "border-gray-200", "bg-white", "print:shadow-none", "print:border-none", "print:max-w-none"], [1, "border-b-2", "border-gray-800", "pb-3", "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2"], ["src", "assets/shared/img/logo/mark.png", "alt", "Mark", 1, "w-16"], [1, "text-sm", "text-gray-700"], [1, "text-2xl", "font-bold"], [1, "text-red-600", "font-semibold", "text-right"], [1, "text-xs", "text-gray-600", "border-b", "border-gray-400", "pb-3", "mb-4"], [1, "flex", "justify-between"], [1, "font-semibold"], [1, "text-right", "font-semibold"], [1, "text-sm", "mb-4"], [1, "grid", "grid-cols-3", "gap-4", "border-b", "border-gray-400", "pb-3", "mb-3"], [1, "font-semibold", "text-xs", "text-gray-700"], [1, "mt-1"], [1, "font-bold"], [1, "mt-1", "font-bold", "text-base"], [1, "grid", "grid-cols-6", "gap-2"], [1, "font-semibold", "text-xs", "mb-1"], [1, "text-base"], [1, "col-span-2"], ["src", "assets/shared/img/logo/society-stamp-square.png", "alt", "society-stamp", 1, "w-[20mm]", "float-right"]],
      template: function PaymentReceiptPrintComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PaymentReceiptPrintComponent_div_0_Template, 90, 12, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentReceiptPrintComponent_Template_button_click_2_listener() {
            return ctx.doCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3)(6, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "print");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u5217\u5370");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("printStyle", ctx.printStyle)("useExistingCss", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL3ByaW50cy9wYXltZW50LXJlY2VpcHQtcHJpbnQvcGF5bWVudC1yZWNlaXB0LXByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVzIGZvciBwYXltZW50LXJlY2VpcHQtcHJpbnQgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 32920:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/shared/controls/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-code-control/zip-code-control.component */ 44082);


/***/ }),

/***/ 44082:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/controls/zip-code-control/zip-code-control.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* binding */ ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _components_bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bbd-base.component */ 56767);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/ary-filter.pipe */ 44832);
/* harmony import */ var _pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/ctrl-has-required.pipe */ 71367);
/* harmony import */ var _pipes_empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/empty-formatter.pipe */ 82287);
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

/***/ 17890:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/array.extension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 35861:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/date.extension.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 23963);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 16117);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 36896);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 87480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 37286);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);
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
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfSecond)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.endOfDay)(this));
};
Date.prototype.getAppMaxUtcDate = () => {
  return new Date(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT);
};
Date.prototype.getFormatString = function (dateFormat) {
  if (!this) {
    return '';
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(this, dateFormat);
};
Date.prototype.isMaxUtcDate = function () {
  if (!this) {
    return false;
  }
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isEqual)(this, (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
    return true;
  }
  return false;
};

/***/ }),

/***/ 33060:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/string.extension.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 65637:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/guards/app-auth.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthGuard: () => (/* binding */ AppAuthGuard)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);

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

/***/ 16232:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/shared/guards/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthGuard: () => (/* reexport safe */ _app_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AppAuthGuard)
/* harmony export */ });
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-auth.guard */ 65637);


/***/ }),

/***/ 48726:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/app-env.helper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* binding */ APP_ENV),
/* harmony export */   AppEnvHelper: () => (/* binding */ AppEnvHelper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 54917:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/date.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateHelper: () => (/* binding */ DateHelper)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 87480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 37286);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 23963);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);
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

/***/ 75103:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/form.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 45963:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* reexport safe */ _app_env_helper__WEBPACK_IMPORTED_MODULE_0__.APP_ENV),
/* harmony export */   AppEnvHelper: () => (/* reexport safe */ _app_env_helper__WEBPACK_IMPORTED_MODULE_0__.AppEnvHelper),
/* harmony export */   DateHelper: () => (/* reexport safe */ _date_helper__WEBPACK_IMPORTED_MODULE_1__.DateHelper),
/* harmony export */   FormHelper: () => (/* reexport safe */ _form_helper__WEBPACK_IMPORTED_MODULE_2__.FormHelper),
/* harmony export */   JsonHelper: () => (/* reexport safe */ _json_helper__WEBPACK_IMPORTED_MODULE_3__.JsonHelper)
/* harmony export */ });
/* harmony import */ var _app_env_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-env.helper */ 48726);
/* harmony import */ var _date_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.helper */ 54917);
/* harmony import */ var _form_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.helper */ 75103);
/* harmony import */ var _json_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json.helper */ 80703);





/***/ }),

/***/ 80703:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/json.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 76777:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/shared/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   BBDLoadingIndicatorComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDLoadingIndicatorComponent),
/* harmony export */   BBDQuillEditorComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDQuillEditorComponent),
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDQuillEditorViewerComponent),
/* harmony export */   CampAttendCertPrintComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CampAttendCertPrintComponent),
/* harmony export */   DateHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.DateHelper),
/* harmony export */   FormHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.FormHelper),
/* harmony export */   HttpRequestInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpRequestInterceptor),
/* harmony export */   HttpResponseInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpResponseInterceptor),
/* harmony export */   JWTAuthInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.JWTAuthInterceptor),
/* harmony export */   JsonHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.JsonHelper),
/* harmony export */   MaterialModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.MaterialModule),
/* harmony export */   PayTypeSelectComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PayTypeSelectComponent),
/* harmony export */   Payment407ReceiptPrintComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Payment407ReceiptPrintComponent),
/* harmony export */   PaymentReceiptPrintComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PaymentReceiptPrintComponent),
/* harmony export */   SharedModule: () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule),
/* harmony export */   ThirdPartyModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyModule),
/* harmony export */   Validation: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.Validation),
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 71378);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ 32920);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ 16232);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ 45963);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ 12838);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules */ 47691);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators */ 51977);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ 13348);









/***/ }),

/***/ 43494:
/*!***************************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/http.request.interceptor.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestInterceptor: () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 27178:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/http.response.interceptor.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpResponseInterceptor: () => (/* binding */ HttpResponseInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 15463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);




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
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(resp => {
      if (resp && resp.status && resp.status === 401) {
        this.appAuthApiServ.signout();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => resp);
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
      return new (t || HttpResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: HttpResponseInterceptor,
      factory: HttpResponseInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 12838:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestInterceptor: () => (/* reexport safe */ _http_request_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpRequestInterceptor),
/* harmony export */   HttpResponseInterceptor: () => (/* reexport safe */ _http_response_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpResponseInterceptor),
/* harmony export */   JWTAuthInterceptor: () => (/* reexport safe */ _jwt_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.JWTAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.request.interceptor */ 43494);
/* harmony import */ var _http_response_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.response.interceptor */ 27178);
/* harmony import */ var _jwt_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.auth.interceptor */ 6190);




/***/ }),

/***/ 6190:
/*!***********************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/jwt.auth.interceptor.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JWTAuthInterceptor: () => (/* binding */ JWTAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 13252:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/antd.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdModule: () => (/* binding */ AntdModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 12614);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/zh */ 93069);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 13281);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/badge */ 54643);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 3820);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/affix */ 26868);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 95289);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 46278);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 288);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 92953);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 81751);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 18801);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 85825);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 39421);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 79869);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 76987);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ 52873);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 65160);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 35634);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ 6057);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/image */ 8365);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 31774);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 86940);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/layout */ 1024);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/list */ 84938);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/menu */ 84791);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/message */ 32703);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/notification */ 68135);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 51515);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 99826);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 38129);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/radio */ 20579);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/select */ 71050);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 63671);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/result */ 49633);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/slider */ 13229);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 61724);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/steps */ 37987);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/switch */ 86614);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/table */ 40542);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 37766);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/tag */ 62138);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 17867);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 60388);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/spin */ 8034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ 90310);

















































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

/***/ 47691:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdModule: () => (/* reexport safe */ _antd_module__WEBPACK_IMPORTED_MODULE_0__.AntdModule),
/* harmony export */   MaterialModule: () => (/* reexport safe */ _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule),
/* harmony export */   ThirdPartyModule: () => (/* reexport safe */ _third_party_module__WEBPACK_IMPORTED_MODULE_2__.ThirdPartyModule)
/* harmony export */ });
/* harmony import */ var _antd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antd.module */ 13252);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 26874);
/* harmony import */ var _third_party_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third-party.module */ 14533);




/***/ }),

/***/ 26874:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/material.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 54591);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ 99120);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 20288);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 44186);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 16490);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 70738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 79682);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 55255);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 18033);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 33668);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 49678);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 44224);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 34651);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 68477);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 51661);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ 64566);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 76897);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 17508);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 85409);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 94718);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/youtube-player */ 33426);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 90310);
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

/***/ 14533:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/third-party.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThirdPartyModule: () => (/* binding */ ThirdPartyModule)
/* harmony export */ });
/* harmony import */ var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-mat-timepicker */ 39291);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-print */ 77715);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 16567);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ 13615);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ 38585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);







;
const MODULES = [ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_print__WEBPACK_IMPORTED_MODULE_1__.NgxPrintModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule];
class ThirdPartyModule {
  static {
    this.ɵfac = function ThirdPartyModule_Factory(t) {
      return new (t || ThirdPartyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: ThirdPartyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [
      // 防止出現警告： Property "type" is missed
      ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule.forRoot({
        type: "''"
      }), ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_print__WEBPACK_IMPORTED_MODULE_1__.NgxPrintModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ThirdPartyModule, {
    imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule],
    exports: [ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_print__WEBPACK_IMPORTED_MODULE_1__.NgxPrintModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule]
  });
})();

/***/ }),

/***/ 29004:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/area-convert.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConvertPipe: () => (/* binding */ AreaConvertPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 44832:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-filter.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFilterPipe: () => (/* binding */ AryFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 36175:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-find-value.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFindValuePipe: () => (/* binding */ AryFindValuePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 9955:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-find.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFindPipe: () => (/* binding */ AryFindPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 67278:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-sort.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArySortPipe: () => (/* binding */ ArySortPipe)
/* harmony export */ });
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


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

/***/ 71367:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ctrl-has-required.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CtrlHasRequiredPipe: () => (/* binding */ CtrlHasRequiredPipe)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
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

/***/ 96304:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/date-formatter.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormatterPipe: () => (/* binding */ DateFormatterPipe)
/* harmony export */ });
/* harmony import */ var _extensions_date_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/date.extension */ 35861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
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

/***/ 82287:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/empty-formatter.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyFormatterPipe: () => (/* binding */ EmptyFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 79115:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/file-url.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUrlPipe: () => (/* binding */ FileUrlPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 74150);







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
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
      })).subscribe(safeUrl => {
        this.cachedUrl = safeUrl;
      });
    }
    return this.cachedUrl;
  }
  static {
    this.ɵfac = function FileUrlPipe_Factory(t) {
      return new (t || FileUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAttachApiServ, 16), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
      name: "fileUrl",
      type: FileUrlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 51902:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/has-any-permission.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasAnyPermissionPipe: () => (/* binding */ HasAnyPermissionPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);



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

/***/ 43561:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/has-permission.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasPermissionPipe: () => (/* binding */ HasPermissionPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);



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

/***/ 34015:
/*!*************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   IsSameDatePipe: () => (/* reexport safe */ _is_same_date_pipe__WEBPACK_IMPORTED_MODULE_12__.IsSameDatePipe),
/* harmony export */   JsonParsePipe: () => (/* reexport safe */ _json_parse_pipe__WEBPACK_IMPORTED_MODULE_13__.JsonParsePipe),
/* harmony export */   PhoneFormatterPipe: () => (/* reexport safe */ _phone_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__.PhoneFormatterPipe),
/* harmony export */   RoundDefaultPipe: () => (/* reexport safe */ _round_default_pipe__WEBPACK_IMPORTED_MODULE_15__.RoundDefaultPipe),
/* harmony export */   SafeHtmlPipe: () => (/* reexport safe */ _safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe),
/* harmony export */   SafeUrlPipe: () => (/* reexport safe */ _safe_url_pipe__WEBPACK_IMPORTED_MODULE_17__.SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _area_convert_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-convert.pipe */ 29004);
/* harmony import */ var _ary_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ary-filter.pipe */ 44832);
/* harmony import */ var _ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ary-find-value.pipe */ 36175);
/* harmony import */ var _ary_find_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ary-find.pipe */ 9955);
/* harmony import */ var _ary_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ary-sort.pipe */ 67278);
/* harmony import */ var _ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ctrl-has-required.pipe */ 71367);
/* harmony import */ var _date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-formatter.pipe */ 96304);
/* harmony import */ var _empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty-formatter.pipe */ 82287);
/* harmony import */ var _file_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-url.pipe */ 79115);
/* harmony import */ var _has_any_permission_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./has-any-permission.pipe */ 51902);
/* harmony import */ var _has_permission_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./has-permission.pipe */ 43561);
/* harmony import */ var _is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./is-empty.pipe */ 49841);
/* harmony import */ var _is_same_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./is-same-date.pipe */ 38177);
/* harmony import */ var _json_parse_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./json-parse.pipe */ 78981);
/* harmony import */ var _phone_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./phone-formatter.pipe */ 41228);
/* harmony import */ var _round_default_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./round-default.pipe */ 10629);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./safe-html.pipe */ 32650);
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./safe-url.pipe */ 51726);



















/***/ }),

/***/ 49841:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/is-empty.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsEmptyPipe: () => (/* binding */ IsEmptyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class IsEmptyPipe {
  transform(value) {
    if (!value) {
      return true;
    }
    if (value instanceof Date) {
      return value.isMaxUtcDate();
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

/***/ 38177:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/is-same-date.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsSameDatePipe: () => (/* binding */ IsSameDatePipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 29328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class IsSameDatePipe {
  transform(value, compareValue = new Date()) {
    if (!value) {
      return false;
    }
    if (!compareValue) {
      return false;
    }
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(value, compareValue);
  }
  static {
    this.ɵfac = function IsSameDatePipe_Factory(t) {
      return new (t || IsSameDatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isSameDate",
      type: IsSameDatePipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 78981:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/json-parse.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonParsePipe: () => (/* binding */ JsonParsePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 41228:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/phone-formatter.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneFormatterPipe: () => (/* binding */ PhoneFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 10629:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/round-default.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundDefaultPipe: () => (/* binding */ RoundDefaultPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

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

/***/ 32650:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/safe-html.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 74150);



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

/***/ 51726:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/safe-url.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeUrlPipe: () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 74150);



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

/***/ 13348:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/shared.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/third-party.module */ 14533);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 71378);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ 32920);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ 47691);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes */ 34015);
/* harmony import */ var _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bbd-notify/bbd-notify.module */ 16669);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../directives */ 82658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);


// Third party packages

// Custom packages







const CUST_MODULES = [_modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule];
const CUST_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDLoadingIndicatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CampAttendCertPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaymentReceiptPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.Payment407ReceiptPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PayTypeSelectComponent];
const CUST_CONTROLS = [_controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent];
const CUST_PIPES = [_pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe];
const THIRD_MODULES = [_modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule];
const CUST_DIRECTIVES = [_directives__WEBPACK_IMPORTED_MODULE_6__.ImageFallbackDirective];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, CUST_MODULES, THIRD_MODULES, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_directives__WEBPACK_IMPORTED_MODULE_6__.ImageFallbackDirective, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDLoadingIndicatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CampAttendCertPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaymentReceiptPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.Payment407ReceiptPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PayTypeSelectComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDLoadingIndicatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CampAttendCertPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaymentReceiptPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.Payment407ReceiptPrintComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PayTypeSelectComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule, _directives__WEBPACK_IMPORTED_MODULE_6__.ImageFallbackDirective]
  });
})();

/***/ }),

/***/ 51977:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/shared/validators/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validation: () => (/* reexport safe */ _validation_validator__WEBPACK_IMPORTED_MODULE_0__.Validation)
/* harmony export */ });
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.validator */ 88542);


/***/ }),

/***/ 88542:
/*!*********************************************************************!*\
  !*** ./libs/core/src/lib/shared/validators/validation.validator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(18867)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map