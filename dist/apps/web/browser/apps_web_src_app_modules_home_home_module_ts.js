"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_home_home_module_ts"],{

/***/ 55650:
/*!**************************************************************!*\
  !*** ./apps/web/src/app/modules/home/home-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 50706);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 16051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages



const routes = [{
  path: '',
  component: _pages__WEBPACK_IMPORTED_MODULE_1__.DefaultComponent,
  data: {
    title: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    description: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteName}`,
    url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}`,
    image: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteServer}/assets/image/og/tslmai.png`
  }
}];
class HomeRoutingModule {
  static {
    this.ɵfac = function HomeRoutingModule_Factory(t) {
      return new (t || HomeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 33419:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/home/home.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 55650);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 16051);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components */ 44457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages




const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_2__.DefaultComponent];
const STANDALONE_COMPONENTS = [_shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationPrinciplesComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationTimelineComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationFaqComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationPricingComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationEquipmentComponent];
class HomeModule {
  static {
    this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, CUSTOM_MODULES, STANDALONE_COMPONENTS]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__.DefaultComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationPrinciplesComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationTimelineComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationFaqComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationPricingComponent, _shared_components__WEBPACK_IMPORTED_MODULE_3__.CustomizationEquipmentComponent]
  });
})();

/***/ }),

/***/ 75513:
/*!**************************************************************************!*\
  !*** ./apps/web/src/app/modules/home/pages/default/default.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultComponent: () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _shared_services_customization_reference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/customization-reference.service */ 24081);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _shared_components_customization_principles_customization_principles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/customization-principles/customization-principles.component */ 98487);
/* harmony import */ var _shared_components_customization_timeline_customization_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/customization-timeline/customization-timeline.component */ 30723);
/* harmony import */ var _shared_components_customization_faq_customization_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/customization-faq/customization-faq.component */ 32447);
/* harmony import */ var _shared_components_customization_pricing_customization_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/customization-pricing/customization-pricing.component */ 27939);
/* harmony import */ var _shared_components_customization_equipment_customization_equipment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/customization-equipment/customization-equipment.component */ 84515);












function DefaultComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Phase 2 \u5373\u5C07\u63D0\u4F9B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u8D70\u9032\u60A8\u7684\u672A\u4F86\u5BB6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " \u865B\u64EC\u6A23\u54C1\u5C4B\u8B93\u60A8\u5728\u7C3D\u7D04\u5F8C\u3001\u958B\u5DE5\u524D\u5C31\u80FD 360\u00B0 \u9810\u89BD\u4E0D\u540C\u6236\u578B\u8207\u9078\u914D\u7D44\u5408\uFF0C\u5E6B\u52A9\u60A8\u69CB\u601D\u5BA2\u8B8A\u9700\u6C42\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ul", 22)(11, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\u4E3B\u529B\u6236\u578B A1 / B10 / B9 \u5148\u884C\u4E0A\u7DDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u4E09\u7A2E\u98A8\u683C\uFF1A\u5317\u6B50 / \u73FE\u4EE3 / \u65B0\u53E4\u5178");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\u7CFB\u7D71\u6AC3\u8272\u7CFB\u3001\u5730\u677F\u6750\u8CEA\u5DEE\u7570\u5373\u6642\u6BD4\u8F03");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 24)(18, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " \u9032\u5165\u865B\u64EC\u6A23\u54C1\u5C4B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "360");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 26)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "view_in_ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "360\u00B0 \u9810\u89BD \u00B7 \u5373\u5C07\u63D0\u4F9B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}
class DefaultComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.refService = this.injector.get(_shared_services_customization_reference_service__WEBPACK_IMPORTED_MODULE_1__.CustomizationReferenceService);
    this.principles = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(this.refService.principles);
    this.processSteps = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(this.refService.processSteps);
    this.faqGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(this.refService.faqGroups);
    this.priceByCategory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(this.refService.getPriceByCategory());
    this.equipmentByCategory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(this.refService.getEquipmentByCategory());
  }
  static {
    this.ɵfac = function DefaultComponent_Factory(t) {
      return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DefaultComponent,
      selectors: [["app-default"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 6,
      consts: [["id", "hero", 1, "hero", "section"], [1, "hero__inner"], [1, "hero__content"], [1, "hero__eyebrow"], [1, "hero__title"], [1, "hero__subtitle"], [1, "hero__cta-row"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-lg"], ["href", "#principles", 1, "btn", "btn-outline", "btn-lg"], [3, "principles"], [3, "processSteps"], [3, "faqGroups"], [3, "priceByCategory"], [3, "equipmentByCategory"], ["id", "vr-tour", "class", "section", 4, "ngIf"], ["id", "vr-tour", 1, "section"], [1, "section__inner"], [1, "vr-entry"], [1, "vr-entry__content"], [1, "vr-entry__badge"], [1, "vr-entry__title"], [1, "vr-entry__lead"], [1, "vr-entry__features"], [1, "vr-entry__feature"], [1, "vr-entry__cta-row"], ["href", "/#vr-coming-soon", 1, "btn", "btn-primary", "btn-lg"], [1, "vr-entry__visual"], [1, "vr-entry__visual-label"]],
      template: function DefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u5BCC\u83EF\u6F90\u5149 \u00B7 \u5BA2\u8B8A\u7DDA\u4E0A\u670D\u52D9");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u6B61\u8FCE\u56DE\u4F86\uFF01");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u9019\u662F\u5C08\u5C6C\u65BC\u60A8\u7684\u7A7A\u9593\u79C1\u8A02\u7CFB\u7D71\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " \u7DDA\u4E0A\u700F\u89BD\u5BA2\u8B8A\u539F\u5247\u3001\u898F\u5283\u9700\u6C42\u3001\u8FFD\u8E64\u9032\u5EA6\u3002\u5F9E\u683C\u5C40\u3001\u6C34\u96FB\u5230\u5EFA\u6750\u9078\u914D\uFF0C\u4E00\u7AD9\u5F0F\u5B8C\u6210\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6)(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " \u767B\u5165\u5BA2\u8B8A\u7CFB\u7D71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "arrow_forward");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " \u4E86\u89E3\u5BA2\u8B8A\u539F\u5247 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "app-customization-principles", 9)(19, "app-customization-timeline", 10)(20, "app-customization-faq", 11)(21, "app-customization-pricing", 12)(22, "app-customization-equipment", 13)(23, "section");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DefaultComponent_section_24_Template, 27, 0, "section", 14);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("principles", ctx.principles());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("processSteps", ctx.processSteps());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("faqGroups", ctx.faqGroups());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("priceByCategory", ctx.priceByCategory());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("equipmentByCategory", ctx.equipmentByCategory());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _shared_components_customization_principles_customization_principles_component__WEBPACK_IMPORTED_MODULE_2__.CustomizationPrinciplesComponent, _shared_components_customization_timeline_customization_timeline_component__WEBPACK_IMPORTED_MODULE_3__.CustomizationTimelineComponent, _shared_components_customization_faq_customization_faq_component__WEBPACK_IMPORTED_MODULE_4__.CustomizationFaqComponent, _shared_components_customization_pricing_customization_pricing_component__WEBPACK_IMPORTED_MODULE_5__.CustomizationPricingComponent, _shared_components_customization_equipment_customization_equipment_component__WEBPACK_IMPORTED_MODULE_6__.CustomizationEquipmentComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.hero[_ngcontent-%COMP%] {\n  padding-top: 32px;\n}\n@media (min-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding-top: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHQTtFQUVFLGlCQUFBO0FBREY7QUFHRTtFQUpGO0lBS0ksaUJBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gw6XCjcKAw6XCocKKw6nClsKTw6bCnMKAw6XCsMKPw6nClsKTw6jCt8Kdw6/CvMKMw6fClMKxIF9zZWN0aW9uLnNjc3Mgw6bCjsKnw6XCiMK2IHBhZGRpbmfDr8K8wozDqcKAwpnDqMKjwqHDpcKPwqrDqMKZwpXDp8KQwobDpcKFwoPDpMK7wrbDpcKxwoDDqcKDwqhcbi5oZXJvIHtcbiAgLy8gw6jCiMKHIHRvcGJhciDDpsKOwqXDp8K6wozDqMKZwpXDp8KawoTDqMKmwpbDqMKmwrrDpcKRwrzDpcKQwrhcbiAgcGFkZGluZy10b3A6IDMycHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 16051:
/*!******************************************************!*\
  !*** ./apps/web/src/app/modules/home/pages/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultComponent: () => (/* reexport safe */ _default_default_component__WEBPACK_IMPORTED_MODULE_0__.DefaultComponent)
/* harmony export */ });
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/default.component */ 75513);


/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_home_home_module_ts.js.map