"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["apps_web_src_app_modules_customization_customization_module_ts"],{

/***/ 58183:
/*!************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/buyer-shell/buyer-shell.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyerShellComponent: () => (/* binding */ BuyerShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _reference_dialog_reference_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reference-dialog/reference-dialog.component */ 37610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 44186);
/* harmony import */ var _buyer_topbar_buyer_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buyer-topbar/buyer-topbar.component */ 64125);










const _c0 = function (a0) {
  return {
    exact: a0
  };
};
function BuyerShellComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 8)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r2.path)("routerLinkActive", "buyer-shell__sidebar-item--active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, item_r2.exact || false))("matTooltip", item_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.icon);
  }
}
function BuyerShellComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 9)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r3.path)("routerLinkActive", "buyer-shell__bottom-item--active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, item_r3.exact || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.label);
  }
}
class BuyerShellComponent {
  constructor() {
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog);
    this.nav = _customization_data__WEBPACK_IMPORTED_MODULE_0__.BUYER_NAV;
  }
  openReferenceDialog() {
    this.dialog.open(_reference_dialog_reference_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CustomizationReferenceDialogComponent, {
      width: '80%',
      maxWidth: '1000px',
      height: '90vh'
    });
  }
  static {
    this.ɵfac = function BuyerShellComponent_Factory(t) {
      return new (t || BuyerShellComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BuyerShellComponent,
      selectors: [["buyer-shell"]],
      decls: 12,
      vars: 2,
      consts: [[1, "buyer-shell"], [1, "buyer-shell__body"], ["aria-label", "\u4E3B\u8981\u529F\u80FD", 1, "buyer-shell__sidebar"], ["class", "buyer-shell__sidebar-item", "matTooltipPosition", "right", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltip", "\u5BA2\u8B8A\u53C3\u8003\u8CC7\u8A0A", "matTooltipPosition", "right", "type", "button", 1, "buyer-shell__sidebar-item", 3, "click"], [1, "buyer-shell__main"], ["aria-label", "\u884C\u52D5\u4E3B\u8981\u529F\u80FD", 1, "buyer-shell__bottom-nav"], ["class", "buyer-shell__bottom-item", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["matTooltipPosition", "right", 1, "buyer-shell__sidebar-item", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "matTooltip"], [1, "buyer-shell__bottom-item", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"]],
      template: function BuyerShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "buyer-topbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "aside", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BuyerShellComponent_a_4_Template, 3, 7, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuyerShellComponent_Template_button_click_5_listener() {
            return ctx.openReferenceDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "main", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nav", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BuyerShellComponent_a_11_Template, 5, 7, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.nav);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.nav);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _buyer_topbar_buyer_topbar_component__WEBPACK_IMPORTED_MODULE_2__.BuyerTopbarComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n\n.buyer-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.buyer-shell__body[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex: 1;\n  overflow: hidden;\n}\n.buyer-shell__sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 8px;\n  width: 80px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: width 300ms ease;\n}\n.buyer-shell__sidebar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 200ms ease;\n  color: var(--color-on-surface, #333);\n}\n.buyer-shell__sidebar-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-variant, #f5f5f5);\n}\n.buyer-shell__sidebar-item--active[_ngcontent-%COMP%] {\n  background: var(--color-primary-container, #e8f5e9);\n  color: var(--color-primary, #4caf50);\n}\n.buyer-shell__main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvYnV5ZXItc2hlbGwvYnV5ZXItc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQURKO0FBR0k7RUFDRSxpREFBQTtBQUROO0FBSUk7RUFDRSxtREFBQTtFQUNBLG9DQUFBO0FBRk47QUFNRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJ1eWVyLXNoZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAmX19ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmX19zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2U7XG4gIH1cblxuICAmX19zaWRlYmFyLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9uLXN1cmZhY2UsICMzMzMpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNmNWY1ZjUpO1xuICAgIH1cblxuICAgICYtLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRhaW5lciwgI2U4ZjVlOSk7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzRjYWY1MCk7XG4gICAgfVxuICB9XG5cbiAgJl9fbWFpbiB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 37610:
/*!**********************************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/buyer-shell/reference-dialog/reference-dialog.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationReferenceDialogComponent: () => (/* binding */ CustomizationReferenceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _shared_services_customization_reference_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/services/customization-reference.service */ 24081);








function CustomizationReferenceDialogComponent_div_11_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8);
  }
}
function CustomizationReferenceDialogComponent_div_11_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ex_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ex_r9);
  }
}
function CustomizationReferenceDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomizationReferenceDialogComponent_div_11_li_6_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomizationReferenceDialogComponent_div_11_span_8_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5.scope);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", p_r5.rules);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", p_r5.examples);
  }
}
function CustomizationReferenceDialogComponent_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r10.durationHint, " ");
  }
}
function CustomizationReferenceDialogComponent_div_20_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](action_r14);
  }
}
function CustomizationReferenceDialogComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomizationReferenceDialogComponent_div_20_span_6_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomizationReferenceDialogComponent_div_20_li_10_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const step_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r10.stepNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r10.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r10.durationHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", step_r10.buyerActions);
  }
}
function CustomizationReferenceDialogComponent_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Q: ", item_r17.q, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A: ", item_r17.a, "");
  }
}
function CustomizationReferenceDialogComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomizationReferenceDialogComponent_div_29_div_3_Template, 5, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r15.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r15.items);
  }
}
function CustomizationReferenceDialogComponent_div_38_tr_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.note);
  }
}
function CustomizationReferenceDialogComponent_div_38_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomizationReferenceDialogComponent_div_38_tr_4_div_5_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r20.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r20.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.priceRange);
  }
}
function CustomizationReferenceDialogComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomizationReferenceDialogComponent_div_38_tr_4_Template, 8, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r18.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r18.items);
  }
}
function CustomizationReferenceDialogComponent_div_47_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r25.brand, " ", item_r25.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.spec);
  }
}
function CustomizationReferenceDialogComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomizationReferenceDialogComponent_div_47_div_3_Template, 7, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r23.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r23.items);
  }
}
class CustomizationReferenceDialogComponent {
  constructor() {
    this.refService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_services_customization_reference_service__WEBPACK_IMPORTED_MODULE_0__.CustomizationReferenceService);
    this.principles = this.refService.principles;
    this.processSteps = this.refService.processSteps;
    this.faqGroups = this.refService.faqGroups;
    this.priceByCategory = this.refService.getPriceByCategory();
    this.equipmentByCategory = this.refService.getEquipmentByCategory();
    this.expandedSections = new Set(['principles']);
  }
  toggleSection(section) {
    if (this.expandedSections.has(section)) {
      this.expandedSections.delete(section);
    } else {
      this.expandedSections.add(section);
    }
  }
  isSectionExpanded(section) {
    return this.expandedSections.has(section);
  }
  static {
    this.ɵfac = function CustomizationReferenceDialogComponent_Factory(t) {
      return new (t || CustomizationReferenceDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomizationReferenceDialogComponent,
      selectors: [["app-reference-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 48,
      vars: 30,
      consts: [[1, "reference-dialog"], [1, "reference-dialog__title"], [1, "reference-dialog__section"], ["type", "button", 1, "reference-dialog__section-header", 3, "click"], [1, "reference-dialog__section-body"], [1, "reference-dialog__principles-grid"], ["class", "reference-dialog__principle-card", 4, "ngFor", "ngForOf"], [1, "reference-dialog__process-timeline"], ["class", "reference-dialog__process-step", 4, "ngFor", "ngForOf"], [1, "reference-dialog__faq-list"], ["class", "reference-dialog__faq-group", 4, "ngFor", "ngForOf"], [1, "reference-dialog__price-table"], ["class", "reference-dialog__price-group", 4, "ngFor", "ngForOf"], [1, "reference-dialog__equipment-list"], ["class", "reference-dialog__equipment-group", 4, "ngFor", "ngForOf"], [1, "reference-dialog__principle-card"], [4, "ngFor", "ngForOf"], [1, "reference-dialog__examples"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "chip"], [1, "reference-dialog__process-step"], [1, "reference-dialog__process-node"], [1, "reference-dialog__process-content"], ["class", "reference-dialog__duration", 4, "ngIf"], [1, "reference-dialog__duration"], [1, "reference-dialog__faq-group"], ["class", "reference-dialog__faq-item", 4, "ngFor", "ngForOf"], [1, "reference-dialog__faq-item"], [1, "reference-dialog__faq-q"], [1, "reference-dialog__faq-a"], [1, "reference-dialog__price-group"], [1, "reference-dialog__price-code"], [1, "reference-dialog__price-name"], ["class", "reference-dialog__price-note", 4, "ngIf"], [1, "reference-dialog__price-range"], [1, "reference-dialog__price-note"], [1, "reference-dialog__equipment-group"], ["class", "reference-dialog__equipment-item", 4, "ngFor", "ngForOf"], [1, "reference-dialog__equipment-item"]],
      template: function CustomizationReferenceDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u5BA2\u8B8A\u53C3\u8003\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizationReferenceDialogComponent_Template_button_click_4_listener() {
            return ctx.toggleSection("principles");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u5BA2\u8B8A\u539F\u5247");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CustomizationReferenceDialogComponent_div_11_Template, 9, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizationReferenceDialogComponent_Template_button_click_13_listener() {
            return ctx.toggleSection("process");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u5BA2\u8B8A\u6D41\u7A0B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CustomizationReferenceDialogComponent_div_20_Template, 11, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2)(22, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizationReferenceDialogComponent_Template_button_click_22_listener() {
            return ctx.toggleSection("faq");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u5E38\u898B\u554F\u984C");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 4)(28, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CustomizationReferenceDialogComponent_div_29_Template, 4, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2)(31, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizationReferenceDialogComponent_Template_button_click_31_listener() {
            return ctx.toggleSection("fees");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u8CBB\u7528\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4)(37, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CustomizationReferenceDialogComponent_div_38_Template, 5, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 2)(40, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizationReferenceDialogComponent_Template_button_click_40_listener() {
            return ctx.toggleSection("equipment");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u8A2D\u5099\u8868");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4)(46, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CustomizationReferenceDialogComponent_div_47_Template, 4, 2, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("principles"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isSectionExpanded("principles") ? "expand_less" : "expand_more");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("principles"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.principles);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("process"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isSectionExpanded("process") ? "expand_less" : "expand_more");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("process"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.processSteps);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("faq"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isSectionExpanded("faq") ? "expand_less" : "expand_more");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("faq"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faqGroups);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("fees"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isSectionExpanded("fees") ? "expand_less" : "expand_more");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("fees"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.priceByCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("equipment"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isSectionExpanded("equipment") ? "expand_less" : "expand_more");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.isSectionExpanded("equipment"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.equipmentByCategory);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
      styles: [".reference-dialog[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.reference-dialog__title[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.reference-dialog__section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-outline, #e0e0e0);\n  margin-bottom: 16px;\n}\n.reference-dialog__section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.reference-dialog__section-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 15px;\n  color: var(--color-on-surface, #333);\n  transition: color 200ms ease;\n}\n.reference-dialog__section-header[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  transition: transform 300ms ease;\n}\n.reference-dialog__section-header.open[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.reference-dialog__section-header[_ngcontent-%COMP%]:not(.open)   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.reference-dialog__section-body[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 300ms ease;\n}\n.reference-dialog__section-body.open[_ngcontent-%COMP%] {\n  max-height: 2000px;\n}\n.reference-dialog__principles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reference-dialog__principle-card[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: var(--color-surface-variant, #f5f5f5);\n  border-radius: 6px;\n  border-left: 3px solid var(--color-primary, #4caf50);\n}\n.reference-dialog__principle-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__principle-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 12px;\n  color: var(--color-on-surface, #666);\n  line-height: 1.5;\n}\n.reference-dialog__principle-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 6px;\n}\n.reference-dialog__principle-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 4px;\n  color: var(--color-on-surface, #666);\n}\n.reference-dialog__examples[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.reference-dialog[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  background: #fff;\n  border: 1px solid var(--color-primary, #4caf50);\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__process-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reference-dialog__process-step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  background: var(--color-surface-variant, #f5f5f5);\n  border-radius: 6px;\n}\n.reference-dialog__process-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  height: 32px;\n  background: var(--color-primary, #4caf50);\n  color: #fff;\n  border-radius: 50%;\n  font-weight: bold;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.reference-dialog__process-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reference-dialog__process-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.reference-dialog__process-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 12px;\n  color: var(--color-on-surface, #666);\n  line-height: 1.5;\n}\n.reference-dialog__process-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 4px 0 0;\n  font-size: 12px;\n}\n.reference-dialog__process-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  color: var(--color-on-surface, #666);\n}\n.reference-dialog__duration[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-primary, #4caf50);\n  font-weight: 500;\n}\n.reference-dialog__faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reference-dialog__faq-group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__faq-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: var(--color-surface-variant, #f5f5f5);\n  border-radius: 4px;\n  margin-bottom: 6px;\n}\n.reference-dialog__faq-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.reference-dialog__faq-q[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.reference-dialog__faq-a[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--color-on-surface, #666);\n}\n.reference-dialog__price-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.reference-dialog__price-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.reference-dialog__price-group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__price-group[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.reference-dialog__price-group[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-outline, #e0e0e0);\n}\n.reference-dialog__price-group[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.reference-dialog__price-group[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n  text-align: left;\n  color: var(--color-on-surface, #666);\n}\n.reference-dialog__price-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__price-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reference-dialog__price-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-on-surface, #999);\n}\n.reference-dialog__price-range[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 500;\n}\n.reference-dialog__equipment-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reference-dialog__equipment-group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-primary, #4caf50);\n}\n.reference-dialog__equipment-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: var(--color-surface-variant, #f5f5f5);\n  border-radius: 4px;\n  margin-bottom: 6px;\n}\n.reference-dialog__equipment-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.reference-dialog__equipment-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.reference-dialog__equipment-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 12px;\n  color: var(--color-on-surface, #666);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvYnV5ZXItc2hlbGwvcmVmZXJlbmNlLWRpYWxvZy9yZWZlcmVuY2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0Usc0RBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxtQkFBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUFGSjtBQUlJO0VBQ0Usb0NBQUE7QUFGTjtBQUtJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFITjtBQU1JO0VBQ0UsdUJBQUE7QUFKTjtBQU9JO0VBQ0UseUJBQUE7QUFMTjtBQVNFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFQSjtBQVNJO0VBQ0Usa0JBQUE7QUFQTjtBQVdFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUFWSjtBQWFFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBWEo7QUFjRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQVpKO0FBZUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQWRKO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBZko7QUFrQkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFoQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFqQko7QUFvQkU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0FBbEJKO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQW5CSjtBQXNCRTtFQUNFLE9BQUE7QUFwQko7QUF1QkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJKO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBdEJKO0FBeUJFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF2Qko7QUEwQkU7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0FBeEJKO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUF6Qko7QUE0QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUExQko7QUE2QkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUEzQko7QUE4QkU7RUFDRSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNUJKO0FBK0JFO0VBQ0UsZ0JBQUE7QUE3Qko7QUFnQ0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBOUJKO0FBaUNFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQS9CSjtBQWtDRTtFQUNFLG1CQUFBO0FBaENKO0FBbUNFO0VBQ0UsZ0JBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBbkNKO0FBc0NFO0VBQ0Usc0RBQUE7QUFwQ0o7QUF1Q0U7RUFDRSxtQkFBQTtBQXJDSjtBQXdDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQXRDSjtBQXlDRTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxPQUFBO0FBeENKO0FBMkNFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FBekNKO0FBNENFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQTFDSjtBQTZDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQTNDSjtBQThDRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQTVDSjtBQStDRTtFQUNFLGFBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE3Q0o7QUFnREU7RUFDRSxnQkFBQTtBQTlDSjtBQWlERTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7QUFrREU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBaERKIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVyZW5jZS1kaWFsb2cge1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDAgMCAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgJl9fc2VjdGlvbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUsICNlMGUwZTApO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmX19zZWN0aW9uLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLCAjMzMzKTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzRjYWY1MCk7XG4gICAgfVxuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbiAgICB9XG5cbiAgICAmLm9wZW4gbWF0LWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgJjpub3QoLm9wZW4pIG1hdC1pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgJl9fc2VjdGlvbi1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgICB9XG4gIH1cblxuICAmX19wcmluY2lwbGVzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICAmX19wcmluY2lwbGUtY2FyZCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNmNWY1ZjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnksICM0Y2FmNTApO1xuICB9XG5cbiAgJl9fcHJpbmNpcGxlLWNhcmQgaDQge1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzRjYWY1MCk7XG4gIH1cblxuICAmX19wcmluY2lwbGUtY2FyZCBwIHtcbiAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLCAjNjY2KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgJl9fcHJpbmNpcGxlLWNhcmQgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCA2cHg7XG4gIH1cblxuICAmX19wcmluY2lwbGUtY2FyZCBsaSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZSwgIzY2Nik7XG4gIH1cblxuICAmX19leGFtcGxlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA2cHg7XG4gIH1cblxuICAuY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNGNhZjUwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNGNhZjUwKTtcbiAgfVxuXG4gICZfX3Byb2Nlc3MtdGltZWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gICZfX3Byb2Nlc3Mtc3RlcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNmNWY1ZjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICZfX3Byb2Nlc3Mtbm9kZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzRjYWY1MCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gICZfX3Byb2Nlc3MtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gICZfX3Byb2Nlc3MtY29udGVudCBoNSB7XG4gICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgJl9fcHJvY2Vzcy1jb250ZW50IHAge1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLCAjNjY2KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgJl9fcHJvY2Vzcy1jb250ZW50IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICZfX3Byb2Nlc3MtY29udGVudCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLCAjNjY2KTtcbiAgfVxuXG4gICZfX2R1cmF0aW9uIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnksICM0Y2FmNTApO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmX19mYXEtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgJl9fZmFxLWdyb3VwIGg1IHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnksICM0Y2FmNTApO1xuICB9XG5cbiAgJl9fZmFxLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS12YXJpYW50LCAjZjVmNWY1KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgJl9fZmFxLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gICZfX2ZhcS1xIHtcbiAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAmX19mYXEtYSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZSwgIzY2Nik7XG4gIH1cblxuICAmX19wcmljZS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gICZfX3ByaWNlLWdyb3VwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmX19wcmljZS1ncm91cCBoNSB7XG4gICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNGNhZjUwKTtcbiAgfVxuXG4gICZfX3ByaWNlLWdyb3VwIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICZfX3ByaWNlLWdyb3VwIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZSwgI2UwZTBlMCk7XG4gIH1cblxuICAmX19wcmljZS1ncm91cCB0cjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgJl9fcHJpY2UtZ3JvdXAgdGQge1xuICAgIHBhZGRpbmc6IDhweCA0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZSwgIzY2Nik7XG4gIH1cblxuICAmX19wcmljZS1jb2RlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNGNhZjUwKTtcbiAgfVxuXG4gICZfX3ByaWNlLW5hbWUge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAmX19wcmljZS1ub3RlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9uLXN1cmZhY2UsICM5OTkpO1xuICB9XG5cbiAgJl9fcHJpY2UtcmFuZ2Uge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmX19lcXVpcG1lbnQtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgJl9fZXF1aXBtZW50LWdyb3VwIGg1IHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnksICM0Y2FmNTApO1xuICB9XG5cbiAgJl9fZXF1aXBtZW50LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS12YXJpYW50LCAjZjVmNWY1KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgJl9fZXF1aXBtZW50LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gICZfX2VxdWlwbWVudC1pdGVtIGg2IHtcbiAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAmX19lcXVpcG1lbnQtaXRlbSBwIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZSwgIzY2Nik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 64125:
/*!**************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/buyer-topbar/buyer-topbar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyerTopbarComponent: () => (/* binding */ BuyerTopbarComponent)
/* harmony export */ });
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 29370);





function BuyerTopbarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 14)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u59D4\u8A17\u65B9\u7BA1\u7406 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 15)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u767B\u51FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class BuyerTopbarComponent {
  constructor() {
    this.buyer = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_BUYER;
    this.status = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_STATUS;
    this.userMenuOpen = false;
  }
  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }
  static {
    this.ɵfac = function BuyerTopbarComponent_Factory(t) {
      return new (t || BuyerTopbarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BuyerTopbarComponent,
      selectors: [["buyer-topbar"]],
      inputs: {
        buyer: "buyer",
        status: "status"
      },
      decls: 24,
      vars: 5,
      consts: [[1, "buyer-topbar"], ["routerLink", "/customization", 1, "block"], ["src", "assets/image/logo/logo.webp", "alt", "\u5BCC\u83EF\u6F90\u5149", 1, "topbar-public__logo"], [1, "buyer-topbar__center"], [1, "chip", "buyer-topbar__status"], [1, "chip", "buyer-topbar__deadline"], [1, "buyer-topbar__right"], ["type", "button", "aria-label", "\u901A\u77E5", 1, "buyer-topbar__icon-btn"], [1, "buyer-topbar__badge"], [1, "buyer-topbar__user", 3, "click"], [1, "buyer-topbar__avatar"], [1, "buyer-topbar__caret"], ["class", "buyer-topbar__menu", 4, "ngIf"], [1, "buyer-topbar__menu"], ["href", "javascript:void(0)", 1, "buyer-topbar__menu-item"], ["routerLink", "/", 1, "buyer-topbar__menu-item"]],
      template: function BuyerTopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "span", 4)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "edit_note");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "schedule");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "button", 7)(14, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyerTopbarComponent_Template_div_click_18_listener() {
            return ctx.toggleUserMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "arrow_drop_down");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BuyerTopbarComponent_div_23_Template, 9, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-status", ctx.status.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.status.statusLabel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u8DDD\u622A\u6B62 ", ctx.status.daysLeft, " \u5929 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.buyer.ownerName.charAt(0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userMenuOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvYnV5ZXItdG9wYmFyL2J1eWVyLXRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 82719:
/*!************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/empty-state/empty-state.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateComponent: () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 29370);




function EmptyStateComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function EmptyStateComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.ctaRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.ctaLabel, " ");
  }
}
class EmptyStateComponent {
  constructor() {
    this.icon = 'inbox';
    this.title = '';
    this.message = '';
    this.ctaLabel = '';
    this.ctaRoute = '';
  }
  static {
    this.ɵfac = function EmptyStateComponent_Factory(t) {
      return new (t || EmptyStateComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmptyStateComponent,
      selectors: [["empty-state"]],
      inputs: {
        icon: "icon",
        title: "title",
        message: "message",
        ctaLabel: "ctaLabel",
        ctaRoute: "ctaRoute"
      },
      decls: 7,
      vars: 4,
      consts: [[1, "empty-state"], [1, "empty-state__icon"], [1, "empty-state__title"], ["class", "empty-state__message", 4, "ngIf"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], [1, "empty-state__message"], [1, "btn", "btn-primary", 3, "routerLink"]],
      template: function EmptyStateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmptyStateComponent_p_5_Template, 2, 1, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmptyStateComponent_a_6_Template, 2, 2, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon || "inbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctaLabel && ctx.ctaRoute);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvZW1wdHktc3RhdGUvZW1wdHktc3RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 96247:
/*!************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/fee-summary/fee-summary.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeeSummaryComponent: () => (/* binding */ FeeSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 29370);



function FeeSummaryComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.net), "");
  }
}
function FeeSummaryComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, -ctx_r1.net), "");
  }
}
class FeeSummaryComponent {
  constructor() {
    this.addOn = 0;
    this.refund = 0;
  }
  get net() {
    return this.addOn - this.refund;
  }
  static {
    this.ɵfac = function FeeSummaryComponent_Factory(t) {
      return new (t || FeeSummaryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeeSummaryComponent,
      selectors: [["fee-summary"]],
      inputs: {
        addOn: "addOn",
        refund: "refund"
      },
      decls: 25,
      vars: 12,
      consts: [[1, "fee-summary"], [1, "fee-summary__head"], [1, "fee-summary__list"], [1, "fee-summary__row"], [1, "fee-summary__amount", "fee-summary__amount--add"], [1, "fee-summary__amount", "fee-summary__amount--refund"], [1, "fee-summary__row", "fee-summary__row--total"], [1, "fee-summary__amount"], [4, "ngIf"]],
      template: function FeeSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "receipt_long");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u8CBB\u7528\u6458\u8981");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2)(7, "li", 3)(8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u52A0\u50F9\u5408\u8A08");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3)(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u9000\u6B3E\u5408\u8A08");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u6DE8\u652F\u51FA");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FeeSummaryComponent_ng_container_23_Template, 3, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FeeSummaryComponent_ng_container_24_Template, 3, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, ctx.addOn), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx.refund), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fee-summary__amount--add", ctx.net > 0)("fee-summary__amount--refund", ctx.net < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.net >= 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.net < 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvZmVlLXN1bW1hcnkvZmVlLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 85019:
/*!********************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/info-tile/info-tile.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoTileComponent: () => (/* binding */ InfoTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class InfoTileComponent {
  constructor() {
    this.label = '';
    this.value = '';
  }
  static {
    this.ɵfac = function InfoTileComponent_Factory(t) {
      return new (t || InfoTileComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoTileComponent,
      selectors: [["info-tile"]],
      inputs: {
        label: "label",
        value: "value"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "info-tile"], [1, "info-tile__label"], [1, "info-tile__value"]],
      template: function InfoTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        }
      },
      styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvaW5mby10aWxlL2luZm8tdGlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 14697:
/*!******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/components/item-row/item-row.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemRowComponent: () => (/* binding */ ItemRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 29370);




function ItemRowComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.item.fee), " \u52A0\u50F9");
  }
}
function ItemRowComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, -ctx_r1.item.fee), " \u9000\u6599");
  }
}
function ItemRowComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6A19\u914D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function ItemRowComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemRowComponent_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.edit.emit(ctx_r4.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u7DE8\u8F2F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemRowComponent_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.remove.emit(ctx_r6.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u522A\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ItemRowComponent {
  constructor() {
    this.editable = true;
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function ItemRowComponent_Factory(t) {
      return new (t || ItemRowComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemRowComponent,
      selectors: [["item-row"]],
      inputs: {
        item: "item",
        editable: "editable"
      },
      outputs: {
        edit: "edit",
        remove: "remove"
      },
      decls: 17,
      vars: 11,
      consts: [[1, "item-row"], [1, "item-row__main"], [1, "item-row__head"], [1, "chip", "item-row__code"], [1, "item-row__name"], [1, "item-row__meta"], [1, "item-row__meta-item"], [1, "item-row__meta-item", "item-row__fee"], [4, "ngIf"], ["class", "item-row__actions", 4, "ngIf"], [1, "item-row__actions"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"]],
      template: function ItemRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "span", 6)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "place");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ItemRowComponent_ng_container_13_Template, 3, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItemRowComponent_ng_container_14_Template, 3, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ItemRowComponent_ng_container_15_Template, 2, 0, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ItemRowComponent_div_16_Template, 5, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.location, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item-row__fee--positive", ctx.item.fee > 0)("item-row__fee--negative", ctx.item.fee < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.fee > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.fee < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.fee === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL2NvbXBvbmVudHMvaXRlbS1yb3cvaXRlbS1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 96946:
/*!********************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/customization-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationRoutingModule: () => (/* binding */ CustomizationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _components_buyer_shell_buyer_shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/buyer-shell/buyer-shell.component */ 58183);
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ 74933);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 77533);
/* harmony import */ var _pages_whole_house_whole_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/whole-house/whole-house.component */ 54009);
/* harmony import */ var _pages_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/my-list/my-list.component */ 30273);
/* harmony import */ var _pages_designer_pack_designer_pack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/designer-pack/designer-pack.component */ 78429);
/* harmony import */ var _pages_submit_submit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/submit/submit.component */ 41427);
/* harmony import */ var _pages_version_preview_version_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/version-preview/version-preview.component */ 19573);
/* harmony import */ var _shared_pages_customization_reference_customization_reference_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pages/customization-reference/customization-reference.page */ 69927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);












const routes = [
// welcome 走 shell（但 shell 內部隱藏 nav）
{
  path: 'welcome',
  component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeComponent
}, {
  path: 'reference',
  component: _shared_pages_customization_reference_customization_reference_page__WEBPACK_IMPORTED_MODULE_8__.CustomizationReferenceComponent
}, {
  path: '',
  component: _components_buyer_shell_buyer_shell_component__WEBPACK_IMPORTED_MODULE_0__.BuyerShellComponent,
  children: [{
    path: '',
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
    pathMatch: 'full'
  }, {
    path: 'whole-house',
    component: _pages_whole_house_whole_house_component__WEBPACK_IMPORTED_MODULE_3__.WholeHouseComponent
  }, {
    path: 'my-list',
    component: _pages_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_4__.MyListComponent
  }, {
    path: 'version/:id',
    component: _pages_version_preview_version_preview_component__WEBPACK_IMPORTED_MODULE_7__.VersionPreviewComponent
  }, {
    path: 'designer-pack',
    component: _pages_designer_pack_designer_pack_component__WEBPACK_IMPORTED_MODULE_5__.DesignerPackComponent
  }, {
    path: 'submit',
    component: _pages_submit_submit_component__WEBPACK_IMPORTED_MODULE_6__.SubmitComponent
  }]
}];
class CustomizationRoutingModule {
  static {
    this.ɵfac = function CustomizationRoutingModule_Factory(t) {
      return new (t || CustomizationRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: CustomizationRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CustomizationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 32959:
/*!**********************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/customization.data.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUYER_NAV: () => (/* binding */ BUYER_NAV),
/* harmony export */   MOCK_BUYER: () => (/* binding */ MOCK_BUYER),
/* harmony export */   MOCK_DEADLINE_ALERTS: () => (/* binding */ MOCK_DEADLINE_ALERTS),
/* harmony export */   MOCK_DESIGNER_PACK: () => (/* binding */ MOCK_DESIGNER_PACK),
/* harmony export */   MOCK_DESIGNER_PACK_ZIP: () => (/* binding */ MOCK_DESIGNER_PACK_ZIP),
/* harmony export */   MOCK_FLOOR_OPTIONS: () => (/* binding */ MOCK_FLOOR_OPTIONS),
/* harmony export */   MOCK_LIST: () => (/* binding */ MOCK_LIST),
/* harmony export */   MOCK_MATERIAL_CATEGORIES: () => (/* binding */ MOCK_MATERIAL_CATEGORIES),
/* harmony export */   MOCK_NOTIFICATIONS: () => (/* binding */ MOCK_NOTIFICATIONS),
/* harmony export */   MOCK_STATUS: () => (/* binding */ MOCK_STATUS),
/* harmony export */   MOCK_WHOLE_HOUSE_ITEMS: () => (/* binding */ MOCK_WHOLE_HOUSE_ITEMS),
/* harmony export */   sumFees: () => (/* binding */ sumFees)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
// Mock data for S4 buyer UI (UI-only, no API).
// Based on requirement spec v1.2 (G-01 / E-02 / A1 type / 12F-A1 etc.)
// ========== Buyer ==========
const MOCK_BUYER = {
  unit: '12F-A1',
  ownerName: '李亮怡',
  size: 35.7,
  layout: '3房2廳2衛',
  facing: '東南',
  floor: 12,
  project: '富華澐光'
};
const MOCK_STATUS = {
  status: 'draft',
  statusLabel: '草稿中',
  daysLeft: 14,
  applyEndDate: '2026-05-31',
  progressPercent: 35
};
// ========== Notifications ==========
const MOCK_NOTIFICATIONS = [{
  id: 'n1',
  source: 'sales',
  icon: 'campaign',
  title: '業務 王業務 上傳新版客變規則',
  body: '請至客變原則頁查看最新規定。',
  timeAgo: '2 天前'
}, {
  id: 'n2',
  source: 'system',
  icon: 'save',
  title: '您的草稿已自動儲存',
  body: '上次儲存：2026/05/15 14:32',
  timeAgo: '5 天前'
}, {
  id: 'n3',
  source: 'review',
  icon: 'mark_chat_read',
  title: '審核人員留言',
  body: '請確認 E-05 配電箱備用迴路可行性。',
  timeAgo: '6 天前'
}];
// ========== Deadline alerts ==========
const MOCK_DEADLINE_ALERTS = [{
  code: 'G-01 ~ G-05',
  category: '格局類',
  deadline: '2026-05-20'
}, {
  code: 'E-01 ~ E-07',
  category: '水電類',
  deadline: '2026-05-25'
}];
// ========== Whole house items ==========
const MOCK_WHOLE_HOUSE_ITEMS = [{
  id: 'wh-floor',
  icon: 'view_in_ar',
  title: '地板材質',
  description: '全室木地板統一選色、各區磁磚差異選色',
  layer: 1
}, {
  id: 'wh-ceiling',
  icon: 'view_quilt',
  title: '天花高度',
  description: '是否申請平釘天花、高度設定',
  layer: 1
},
/*
{
  id: 'wh-electrical',
  icon: 'electrical_services',
  title: '全室弱電規格',
  description: '面板顏色、插座規格（國際型／一般型）',
  layer: 2,
},
*/
{
  id: 'wh-door',
  icon: 'door_front',
  title: '大門',
  description: '門片材質、顏色、鎖具規格',
  layer: 1
}, {
  id: 'wh-entry-door',
  icon: 'meeting_room',
  title: '玄關門',
  description: '門片材質、顏色與五金',
  layer: 1
}];
// ========== Material categories (whole-house single-page form) ==========
const MATERIAL_ASSET_BASE = 'assets/image/building-material-options';
const MOCK_MATERIAL_CATEGORIES = [{
  id: 'wood-floor',
  title: '木地板顏色',
  description: '全室木地板統一選色',
  icon: 'view_in_ar',
  options: [{
    id: 'wf-bea502',
    name: 'BEA502 冰島橡木',
    image: `${MATERIAL_ASSET_BASE}/木地板顏色/BEA502-冰島橡木1(預設).jpg`,
    isDefault: true,
    priceDelta: 0
  }, {
    id: 'wf-bea502-b',
    name: 'BEA502 冰島橡木 II',
    image: `${MATERIAL_ASSET_BASE}/木地板顏色/BEA502-冰島橡木2(預設).jpg`,
    isDefault: true,
    priceDelta: 0
  }, {
    id: 'wf-bea366',
    name: 'BEA366 布拉格橡木',
    image: `${MATERIAL_ASSET_BASE}/木地板顏色/BEA366-布拉格橡木1.jpg`,
    priceDelta: 12000
  }, {
    id: 'wf-bea366-b',
    name: 'BEA366 布拉格橡木 II',
    image: `${MATERIAL_ASSET_BASE}/木地板顏色/BEA366-布拉格橡木2.jpg`,
    priceDelta: 12000
  }, {
    id: 'wf-tile-617',
    name: '客變磁磚 TES-617',
    image: `${MATERIAL_ASSET_BASE}/木地板顏色/客變磁磚-TES-617.jpg`,
    priceDelta: 18500
  }]
}, {
  id: 'kitchen-cabinet',
  title: '廚具櫃體',
  description: '廚房櫃體飾面顏色',
  icon: 'kitchen',
  options: [{
    id: 'kc-d230',
    name: 'D230 深海藍',
    image: `${MATERIAL_ASSET_BASE}/廚具櫃體/D230-深海藍-預設.jpg`,
    isDefault: true,
    priceDelta: 0
  }, {
    id: 'kc-d218',
    name: 'D218 喀什米爾',
    image: `${MATERIAL_ASSET_BASE}/廚具櫃體/D218-喀什米爾.jpg`,
    priceDelta: 8500
  }]
}, {
  id: 'system-cabinet',
  title: '系統櫃體',
  description: '全室系統櫃飾面顏色',
  icon: 'door_sliding',
  options: [{
    id: 'sc-l6012p',
    name: '浪淘沙 牛津藍 (L6012P)',
    image: `${MATERIAL_ASSET_BASE}/系統櫃體/浪淘沙-牛津藍(L6012P)(預設).jpg`,
    isDefault: true,
    priceDelta: 0
  }, {
    id: 'sc-l0901p',
    name: '浪淘沙 奶昔棕 (L0901P)',
    image: `${MATERIAL_ASSET_BASE}/系統櫃體/浪淘沙-奶昔棕(L0901P).jpg`,
    priceDelta: 6500
  }]
}];
// ========== Floor options (Layer 1 form sample) ==========
const MOCK_FLOOR_OPTIONS = [{
  id: 'floor-a',
  name: '淺色木紋',
  series: '系列 A · 標配',
  priceDelta: 0,
  isStandard: true,
  swatchBg: 'linear-gradient(135deg, #e6d3b3 0%, #d4b88a 100%)'
}, {
  id: 'floor-b',
  name: '深色木紋',
  series: '系列 B · 升級',
  priceDelta: 12000,
  swatchBg: 'linear-gradient(135deg, #7a5230 0%, #4a2f1a 100%)'
}, {
  id: 'floor-c',
  name: '石紋磁磚',
  series: '系列 C · 升級',
  priceDelta: 18500,
  swatchBg: 'linear-gradient(135deg, #d8d2c4 0%, #a8a094 100%)'
}];
// ========== My list ==========
const MOCK_LIST = [{
  category: '格局類',
  items: [{
    code: 'G-01',
    name: '客廳輕隔間牆拆除',
    location: '客廳',
    fee: -12000
  }, {
    code: 'G-03',
    name: '書房門位置移動',
    location: '書房',
    fee: 8500
  }]
}, {
  category: '水電類',
  items: [{
    code: 'E-02',
    name: '書房新增插座 × 2',
    location: '書房南牆',
    fee: 3000
  }, {
    code: 'W-02',
    name: '主臥新增網路插座 × 1',
    location: '主臥',
    fee: 1200
  }]
}, {
  category: '全室設定',
  items: [{
    code: 'WH-01',
    name: '地板材質：淺色木紋',
    location: '全室',
    fee: 0
  }]
}];
// ========== Designer pack files ==========
const MOCK_DESIGNER_PACK = [{
  name: 'A1-平面圖.pdf',
  description: '含房間尺寸、比例尺、現有水電配置位置',
  size: '2.4 MB',
  format: 'PDF'
}, {
  name: 'A1-衛浴尺寸圖.pdf',
  description: '主衛、次衛各一張，含排水孔、管道間位置',
  size: '1.8 MB',
  format: 'PDF'
}, {
  name: '客變規則摘要.pdf',
  description: '本戶型適用的申請限制與禁止項目',
  size: '0.9 MB',
  format: 'PDF'
}, {
  name: '買家規劃參考.pdf',
  description: '您已完成的 Layer 1-3 選擇，供設計師參考',
  size: '0.6 MB',
  format: 'PDF'
}];
const MOCK_DESIGNER_PACK_ZIP = {
  name: 'A1-設計師圖面包.zip',
  description: '以上 4 份文件打包下載',
  size: '5.7 MB',
  format: 'ZIP'
};
const BUYER_NAV = [{
  path: '/customization',
  icon: 'dashboard',
  label: '儀表板',
  exact: true
}, {
  path: '/customization/whole-house',
  icon: 'chair',
  label: '客變設定'
}, {
  path: '/customization/my-list',
  icon: 'fact_check',
  label: '我的清單'
}];
function sumFees(items) {
  let addOn = 0;
  let refund = 0;
  items.forEach(cat => cat.items.forEach(it => {
    if (it.fee > 0) addOn += it.fee;else if (it.fee < 0) refund += -it.fee;
  }));
  return {
    addOn,
    refund,
    net: addOn - refund
  };
}

/***/ }),

/***/ 27579:
/*!************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/customization.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationModule: () => (/* binding */ CustomizationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ 17508);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 94718);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 44186);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _customization_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customization-routing.module */ 96946);
/* harmony import */ var _components_buyer_shell_buyer_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buyer-shell/buyer-shell.component */ 58183);
/* harmony import */ var _components_buyer_topbar_buyer_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buyer-topbar/buyer-topbar.component */ 64125);
/* harmony import */ var _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/info-tile/info-tile.component */ 85019);
/* harmony import */ var _components_item_row_item_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-row/item-row.component */ 14697);
/* harmony import */ var _components_fee_summary_fee_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fee-summary/fee-summary.component */ 96247);
/* harmony import */ var _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/empty-state/empty-state.component */ 82719);
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ 74933);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 77533);
/* harmony import */ var _pages_whole_house_whole_house_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/whole-house/whole-house.component */ 54009);
/* harmony import */ var _pages_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/my-list/my-list.component */ 30273);
/* harmony import */ var _pages_version_preview_version_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/version-preview/version-preview.component */ 19573);
/* harmony import */ var _pages_designer_pack_designer_pack_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/designer-pack/designer-pack.component */ 78429);
/* harmony import */ var _pages_submit_submit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/submit/submit.component */ 41427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 90310);













// Shell + shared components






// Pages








class CustomizationModule {
  static {
    this.ɵfac = function CustomizationModule_Factory(t) {
      return new (t || CustomizationModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
      type: CustomizationModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _customization_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomizationRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](CustomizationModule, {
    declarations: [_components_buyer_shell_buyer_shell_component__WEBPACK_IMPORTED_MODULE_2__.BuyerShellComponent, _components_buyer_topbar_buyer_topbar_component__WEBPACK_IMPORTED_MODULE_3__.BuyerTopbarComponent, _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_4__.InfoTileComponent, _components_item_row_item_row_component__WEBPACK_IMPORTED_MODULE_5__.ItemRowComponent, _components_fee_summary_fee_summary_component__WEBPACK_IMPORTED_MODULE_6__.FeeSummaryComponent, _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_7__.EmptyStateComponent, _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__.WelcomeComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent, _pages_whole_house_whole_house_component__WEBPACK_IMPORTED_MODULE_10__.WholeHouseComponent, _pages_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_11__.MyListComponent, _pages_version_preview_version_preview_component__WEBPACK_IMPORTED_MODULE_12__.VersionPreviewComponent, _pages_designer_pack_designer_pack_component__WEBPACK_IMPORTED_MODULE_13__.DesignerPackComponent, _pages_submit_submit_component__WEBPACK_IMPORTED_MODULE_14__.SubmitComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _customization_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomizationRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule]
  });
})();

/***/ }),

/***/ 77533:
/*!***************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/dashboard/dashboard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59686);
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _services_version_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/version.service */ 29256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/info-tile/info-tile.component */ 85019);










function DashboardComponent_section_8_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div")(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", entry_r6.optionImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", entry_r6.optionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r6.categoryTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r6.optionName);
  }
}
function DashboardComponent_section_8_footer_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 60)(1, "small", 61)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u5BE9\u6838\u5C1A\u672A\u958B\u59CB\u4E14\u672A\u5230\u671F\uFF0C\u60A8\u4ECD\u53EF\u4FEE\u6539\u65B9\u6848\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 62)(6, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_section_8_footer_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.goPickFromSaved());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u5F9E\u5DF2\u5132\u5B58\u65B9\u6848\u9078\u64C7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_section_8_footer_19_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.goCreateNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " \u65B0\u589E\u65B9\u6848 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function DashboardComponent_section_8_footer_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 60)(1, "small", 65)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u5DF2\u9032\u5165\u5BE9\u6838\u6216\u5DF2\u904E\u7533\u8ACB\u622A\u6B62\uFF0C\u76EE\u524D\u7121\u6CD5\u4FEE\u6539\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 50)(1, "header", 51)(2, "div")(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u5DF2\u9001\u51FA\u7533\u8ACB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 54)(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u52A0\u50F9\u5408\u8A08");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DashboardComponent_section_8_li_18_Template, 7, 4, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DashboardComponent_section_8_footer_19_Template, 14, 0, "footer", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DashboardComponent_section_8_footer_20_Template, 5, 0, "footer", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.submittedVersion.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-status", ctx_r0.submission.reviewStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.reviewStatusLabel(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" \u9001\u51FA\u6642\u9593\uFF1A", ctx_r0.formatDateTime(ctx_r0.submission.submittedAt), "\u3000/\u3000\u7533\u8ACB\u622A\u6B62\uFF1A", ctx_r0.submission.applyDeadline, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 9, ctx_r0.submittedVersion.totalDelta), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.submittedVersion.entries);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.editable);
  }
}
function DashboardComponent_li_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 66)(1, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 68)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const alert_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alert_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alert_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alert_r10.deadline);
  }
}
function DashboardComponent_a_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 69)(1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", entry_r11.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r11.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r11.sub);
  }
}
class DashboardComponent {
  constructor(router, versionService) {
    this.router = router;
    this.versionService = versionService;
    this.buyer = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_BUYER;
    this.status = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_STATUS;
    this.notifications = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_NOTIFICATIONS;
    this.alerts = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_DEADLINE_ALERTS;
    this.submission = null;
    this.submittedVersion = null;
    this.editable = true;
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.quickEntries = [{
      icon: 'chair',
      label: '客變設定',
      sub: '進入全室與空間設定',
      route: '/customization/whole-house'
    }, {
      icon: 'fact_check',
      label: '比較清單',
      sub: '已儲存方案彙整',
      route: '/customization/my-list'
    }, {
      icon: 'folder_zip',
      label: '圖面包下載',
      sub: '提供設計師使用',
      route: '/customization/designer-pack'
    }];
    this.sub.add(this.versionService.submission$.subscribe(s => {
      this.submission = s;
      this.submittedVersion = this.versionService.submittedVersion;
      this.editable = this.versionService.isEditable();
    }));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  formatDateTime(ts) {
    const d = new Date(ts);
    const pad = n => `${n}`.padStart(2, '0');
    return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  reviewStatusLabel() {
    if (!this.submission) return '';
    switch (this.submission.reviewStatus) {
      case 'review':
        return '審核中';
      case 'approved':
        return '已核准';
      case 'rework':
        return '需修正';
    }
  }
  goPickFromSaved() {
    this.router.navigate(['/customization/my-list']);
  }
  goCreateNew() {
    this.router.navigate(['/customization/whole-house']);
  }
  download(name) {
    console.log('[UI-only] download requested:', name);
    alert(`(UI demo) ${name} 下載連結將串接後台`);
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_version_service__WEBPACK_IMPORTED_MODULE_1__.VersionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 92,
      vars: 19,
      consts: [[1, "dashboard-page"], [1, "dashboard-page__head"], [1, "display-2"], [1, "body-lg"], ["class", "card submitted-card", 4, "ngIf"], [1, "dashboard-grid"], [1, "card", "unit-info-card"], [1, "unit-info-card__header"], [1, "eyebrow"], [1, "headline-md"], [1, "body-md"], [1, "unit-info-card__content"], [1, "unit-info-card__floorplan"], [1, "floorplan"], [1, "floorplan__room", "floorplan__room--living"], [1, "floorplan__room", "floorplan__room--master"], [1, "floorplan__room", "floorplan__room--study"], [1, "floorplan__room", "floorplan__room--kitchen"], [1, "floorplan__room", "floorplan__room--bath1"], [1, "floorplan__room", "floorplan__room--bath2"], [1, "floorplan__room", "floorplan__room--balcony"], [1, "floorplan__room", "floorplan__room--entry"], [1, "unit-info-card__floorplan-hint"], [1, "unit-info-card__side"], [1, "unit-info-card__title"], [1, "unit-info-card__list"], ["label", "\u6236\u578B", 3, "value"], ["label", "\u576A\u6578", 3, "value"], ["label", "\u683C\u5C40", 3, "value"], ["label", "\u671D\u5411", 3, "value"], ["label", "\u6A13\u5C64", 3, "value"], ["label", "\u5DF2\u7533\u8ACB", 3, "value"], [1, "unit-info-card__restrictions"], [1, "unit-info-card__restrictions-head"], [1, "unit-info-card__restrictions-list"], [1, "ok"], [1, "warn"], [1, "card"], [1, "dashboard-progress"], [1, "dashboard-progress__head"], [1, "chip"], [1, "dashboard-progress__percent"], [1, "dashboard-progress__bar"], [1, "dashboard-progress__bar-fill"], [1, "dashboard-progress__hint"], [1, "p-6"], [1, "dashboard-alerts__list"], ["class", "dashboard-alerts__row", 4, "ngFor", "ngForOf"], [1, "dashboard-entries__grid", "p-6"], ["class", "dashboard-entries__card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "submitted-card"], [1, "submitted-card__head"], [1, "submitted-card__title"], [1, "submitted-card__time"], [1, "submitted-card__delta"], [1, "submitted-card__entries"], ["class", "submitted-card__entry", 4, "ngFor", "ngForOf"], ["class", "submitted-card__footer", 4, "ngIf"], [1, "submitted-card__entry"], [3, "src", "alt"], [1, "submitted-card__footer"], [1, "submitted-card__hint"], [1, "submitted-card__actions"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "submitted-card__hint", "submitted-card__hint--lock"], [1, "dashboard-alerts__row"], [1, "dashboard-alerts__icon"], [1, "dashboard-alerts__body"], [1, "dashboard-entries__card", 3, "routerLink"], [1, "dashboard-entries__icon"], [1, "dashboard-entries__label"], [1, "dashboard-entries__sub"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DashboardComponent_section_8_Template, 21, 11, "section", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u6211\u7684\u6236\u578B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u67E5\u770B\u6236\u578B\u683C\u5C40\u3001\u53EF\u7533\u8ACB\u7BC4\u570D\u8207\u9650\u5236\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u5BA2\u5EF3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u4E3B\u81E5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u66F8\u623F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u5EDA\u623F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u4E3B\u885B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u6B21\u885B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u967D\u53F0");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u7384\u95DC");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "small", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\uFF0A\u672C\u5E73\u9762\u5716\u70BA\u793A\u610F\u3002\u4E0B\u8F09\u5B8C\u6574\u5716\u8ACB\u6309\u4E0B\u65B9\u6309\u9215\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "aside", 23)(40, "h3", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\u57FA\u672C\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "dl", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "info-tile", 26)(44, "info-tile", 27)(45, "info-tile", 28)(46, "info-tile", 29)(47, "info-tile", 30)(48, "info-tile", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 32)(50, "div", 33)(51, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\u6A13\u5C64\u9650\u5236\u8207\u53EF\u7533\u8ACB\u7BC4\u570D");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "ul", 34)(56, "li")(57, "mat-icon", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "check_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " \u60A8\u4F4D\u65BC 12F\uFF0C\u53EF\u7533\u8ACB\u6240\u6709\u683C\u5C40\u985E\u9805\u76EE\uFF08G-01 ~ G-05\uFF09 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li")(61, "mat-icon", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "check_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " \u6C34\u96FB\uFF08E-01 ~ E-07\uFF09\u3001\u5F31\u96FB\uFF08W-01 ~ W-05\uFF09\u7686\u53EF\u7533\u8ACB ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "li")(65, "mat-icon", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "warning_amber");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " 16F \u4EE5\u4E0A\u624D\u6709 G-05 \u5EDA\u623F\u9694\u9593\u8B8A\u66F4\u9650\u5236\uFF0C\u60A8\u4E0D\u53D7\u6B64\u9650 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "li")(69, "mat-icon", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "warning_amber");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " \u885B\u6D74\u8D85\u51FA\u6C34\u5340\u7BC4\u570D\u9700\u53E6\u884C\u8A55\u4F30\uFF08 phase2 \u4E0A\u50B3\u65BD\u5DE5\u5716\uFF09 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "ul", 37)(73, "li", 38)(74, "div", 39)(75, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\u7533\u8ACB\u9032\u5EA6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "li", 45)(86, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\u5373\u5C07\u5230\u671F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "ul", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, DashboardComponent_li_89_Template, 10, 3, "li", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "li", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, DashboardComponent_a_91_Template, 7, 4, "a", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u60A8\u597D\uFF0C", ctx.buyer.ownerName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u6B61\u8FCE\u56DE\u5230 ", ctx.buyer.project, " \u5BA2\u8B8A\u7CFB\u7D71\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u7533\u8ACB\u958B\u653E\u81F3 ", ctx.status.applyEndDate, "\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submission && ctx.submittedVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.buyer.unit);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.buyer.size + " \u576A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.buyer.layout);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.buyer.facing);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.buyer.floor + " F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "5 \u9805");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-status", ctx.status.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.status.statusLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.status.progressPercent, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.status.progressPercent, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u8DDD\u622A\u6B62\u9084\u6709 ", ctx.status.daysLeft, " \u5929\uFF0C\u8ACB\u5118\u65E9\u5B8C\u6210\u7533\u8ACB\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.alerts);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.quickEntries);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_2__.InfoTileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.submitted-card[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 20px;\n  border-left: 4px solid var(--color-primary, #3b6cf2);\n}\n.submitted-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.submitted-card__title[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.submitted-card__title[_ngcontent-%COMP%]   .chip[data-status=review][_ngcontent-%COMP%] {\n  background: #fff4d6;\n  color: #8a6d00;\n}\n.submitted-card__title[_ngcontent-%COMP%]   .chip[data-status=approved][_ngcontent-%COMP%] {\n  background: #d6f5e3;\n  color: #136a3c;\n}\n.submitted-card__title[_ngcontent-%COMP%]   .chip[data-status=rework][_ngcontent-%COMP%] {\n  background: #ffe1e1;\n  color: #a52525;\n}\n.submitted-card__time[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.submitted-card__delta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.submitted-card__delta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0.65;\n  font-size: 12px;\n}\n.submitted-card__delta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-primary, #3b6cf2);\n}\n.submitted-card__entries[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 10px;\n}\n.submitted-card__entry[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 8px;\n  background: var(--color-surface-variant, #f4f6fa);\n  border-radius: 8px;\n}\n.submitted-card__entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex: 0 0 auto;\n}\n.submitted-card__entry[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  opacity: 0.7;\n}\n.submitted-card__entry[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.submitted-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n  padding-top: 12px;\n}\n.submitted-card__hint[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  opacity: 0.8;\n}\n.submitted-card__hint--lock[_ngcontent-%COMP%] {\n  color: #a52525;\n  opacity: 1;\n}\n.submitted-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FBR0Y7QUFERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFHSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQ007RUFBMkIsbUJBQUE7RUFBcUIsY0FBQTtBQUd0RDtBQUZNO0VBQTJCLG1CQUFBO0VBQXFCLGNBQUE7QUFNdEQ7QUFMTTtFQUEyQixtQkFBQTtFQUFxQixjQUFBO0FBU3REO0FBTEU7RUFDRSxZQUFBO0FBT0o7QUFKRTtFQUNFLGlCQUFBO0FBTUo7QUFMSTtFQUFRLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLGVBQUE7QUFVM0M7QUFUSTtFQUFTLGVBQUE7RUFBaUIsb0NBQUE7QUFhOUI7QUFWRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBWUo7QUFURTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtBQVdKO0FBVEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBV047QUFUSTtFQUFRLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixZQUFBO0FBYzdDO0FBYkk7RUFBUyxlQUFBO0FBZ0JiO0FBYkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtBQWVKO0FBWkU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFjSjtBQWJJO0VBQVUsY0FBQTtFQUFnQixVQUFBO0FBaUI5QjtBQWRFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBZ0JKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4uc3VibWl0dGVkLWNhcmQge1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjM2I2Y2YyKTtcblxuICAmX19oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDE2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLmNoaXAge1xuICAgICAgJltkYXRhLXN0YXR1cz0ncmV2aWV3J10gIHsgYmFja2dyb3VuZDogI2ZmZjRkNjsgY29sb3I6ICM4YTZkMDA7IH1cbiAgICAgICZbZGF0YS1zdGF0dXM9J2FwcHJvdmVkJ117IGJhY2tncm91bmQ6ICNkNmY1ZTM7IGNvbG9yOiAjMTM2YTNjOyB9XG4gICAgICAmW2RhdGEtc3RhdHVzPSdyZXdvcmsnXSAgeyBiYWNrZ3JvdW5kOiAjZmZlMWUxOyBjb2xvcjogI2E1MjUyNTsgfVxuICAgIH1cbiAgfVxuXG4gICZfX3RpbWUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gICZfX2RlbHRhIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyBvcGFjaXR5OiAwLjY1OyBmb250LXNpemU6IDEycHg7IH1cbiAgICBzdHJvbmcgeyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjM2I2Y2YyKTsgfVxuICB9XG5cbiAgJl9fZW50cmllcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAmX19lbnRyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS12YXJpYW50LCAjZjRmNmZhKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cbiAgICBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDExcHg7IG9wYWNpdHk6IDAuNzsgfVxuICAgIHN0cm9uZyB7IGZvbnQtc2l6ZTogMTNweDsgfVxuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gIH1cblxuICAmX19oaW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAmLS1sb2NrIHsgY29sb3I6ICNhNTI1MjU7IG9wYWNpdHk6IDE7IH1cbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 78429:
/*!***********************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/designer-pack/designer-pack.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesignerPackComponent: () => (/* binding */ DesignerPackComponent)
/* harmony export */ });
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 29370);






function DesignerPackComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12)(1, "span", 13)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DesignerPackComponent_li_9_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const file_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.download(file_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u4E0B\u8F09 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r1.format, " \u00B7 ", file_r1.size, "");
  }
}
class DesignerPackComponent {
  constructor(snack) {
    this.snack = snack;
    this.files = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_DESIGNER_PACK;
    this.zip = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_DESIGNER_PACK_ZIP;
  }
  download(name) {
    console.log('[UI-only] download:', name);
    this.snack.open(`(UI demo) 開始下載 ${name}`, '關閉', {
      duration: 2000
    });
  }
  static {
    this.ɵfac = function DesignerPackComponent_Factory(t) {
      return new (t || DesignerPackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DesignerPackComponent,
      selectors: [["app-designer-pack"]],
      decls: 33,
      vars: 5,
      consts: [[1, "designer-pack-page"], [1, "designer-pack-page__head"], [1, "eyebrow"], [1, "display-2"], [1, "body-lg"], [1, "pack-download", "card"], ["class", "pack-download__row", 4, "ngFor", "ngForOf"], [1, "pack-download", "pack-download--zip", "card"], [1, "pack-download__icon", "pack-download__icon--zip"], [1, "pack-download__body"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "card", "designer-pack-page__upload-back"], [1, "pack-download__row"], [1, "pack-download__icon"], ["type", "button", 1, "btn", "btn-outline", 3, "click"]],
      template: function DesignerPackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u8A2D\u8A08\u5E2B\u5716\u9762\u5305");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u4E0B\u8F09\u5716\u9762\u5305");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u5982\u60A8\u59D4\u8A17\u8A2D\u8A08\u5E2B\u4EE3\u70BA\u898F\u5283\uFF0C\u53EF\u4E0B\u8F09\u5716\u9762\u5305\u4F9B\u5176\u6A19\u6CE8\u5F8C\u4E0A\u50B3\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DesignerPackComponent_li_9_Template, 15, 4, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "span", 8)(12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "folder_zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DesignerPackComponent_Template_button_click_21_listener() {
            return ctx.download(ctx.zip.name);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u4E0B\u8F09\u5168\u90E8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "upload_file");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div")(29, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u6A19\u6CE8\u5B8C\u6210\u5F8C");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u8ACB\u81F3 Layer 4 \u8868\u55AE\u4E0A\u50B3\u8A2D\u8A08\u5E2B\u6A19\u6CE8\u5F8C\u7684\u65BD\u5DE5\u5716\u3002\u672C\u968E\u6BB5\u5C1A\u672A\u958B\u653E\u4E0A\u50B3\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.zip.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.zip.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.zip.format, " \u00B7 ", ctx.zip.size, "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL2Rlc2lnbmVyLXBhY2svZGVzaWduZXItcGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 30273:
/*!***********************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/my-list/my-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyListComponent: () => (/* binding */ MyListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59686);
/* harmony import */ var _services_version_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/version.service */ 29256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/empty-state/empty-state.component */ 82719);











function MyListComponent_empty_state_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "empty-state", 8);
  }
}
function MyListComponent_div_9_article_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-status", ctx_r5.submission == null ? null : ctx_r5.submission.reviewStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u5DF2\u9001\u51FA\u5BE9\u6838 \u00B7 ", ctx_r5.reviewStatusLabel(), " ");
  }
}
function MyListComponent_div_9_article_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u5DF2\u9078\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MyListComponent_div_9_article_1_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", entry_r8.optionImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", entry_r8.optionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](entry_r8.categoryTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](entry_r8.optionName);
  }
}
function MyListComponent_div_9_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 11)(1, "header", 12)(2, "div")(3, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MyListComponent_div_9_article_1_span_5_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MyListComponent_div_9_article_1_span_6_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyListComponent_div_9_article_1_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const v_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.remove(v_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MyListComponent_div_9_article_1_li_13_Template, 7, 4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "footer", 20)(15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " \u52A0\u50F9\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 22)(21, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyListComponent_div_9_article_1_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const v_r4 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.openPreview(v_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u958B\u555F\u9810\u89BD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyListComponent_div_9_article_1_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const v_r4 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.choose(v_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u9078\u64C7\u6B64\u65B9\u6848 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("version-card--selected", ctx_r3.selectedId === v_r4.id)("version-card--submitted", ctx_r3.isSubmitted(v_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", v_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted(v_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedId === v_r4.id && !ctx_r3.isSubmitted(v_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.formatTime(v_r4.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.canRemove(v_r4))("title", ctx_r3.canRemove(v_r4) ? "\u522A\u9664\u65B9\u6848" : "\u5BE9\u6838\u4E2D\u7121\u6CD5\u522A\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", v_r4.entries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 12, v_r4.totalDelta), "");
  }
}
function MyListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyListComponent_div_9_article_1_Template, 29, 14, "article", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.versions);
  }
}
function MyListComponent_div_10_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u5DF2\u9054\u4E0A\u9650\uFF0C\u8ACB\u5148\u522A\u9664\u820A\u7248\u672C\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MyListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyListComponent_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.goCreate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u65B0\u589E\u65B9\u6848 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MyListComponent_div_10_small_5_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.versions.length >= ctx_r2.maxVersions);
  }
}
class MyListComponent {
  constructor(router, snack, versionService) {
    this.router = router;
    this.snack = snack;
    this.versionService = versionService;
    this.versions = [];
    this.selectedId = null;
    this.submission = null;
    this.maxVersions = _services_version_service__WEBPACK_IMPORTED_MODULE_0__.MAX_VERSIONS;
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.sub.add(this.versionService.versions$.subscribe(v => this.versions = v));
    this.sub.add(this.versionService.selectedId$.subscribe(id => this.selectedId = id));
    this.sub.add(this.versionService.submission$.subscribe(s => this.submission = s));
  }
  isSubmitted(v) {
    return !!this.submission && this.submission.versionId === v.id;
  }
  reviewStatusLabel() {
    if (!this.submission) return '';
    switch (this.submission.reviewStatus) {
      case 'review':
        return '審核中';
      case 'approved':
        return '已核准';
      case 'rework':
        return '需修正';
    }
  }
  canRemove(v) {
    // 送出中且還在 review 的版本不能刪
    if (!this.submission) return true;
    if (this.submission.versionId !== v.id) return true;
    return this.submission.reviewStatus !== 'review';
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  openPreview(v) {
    this.router.navigate(['/customization/version', v.id]);
  }
  choose(v) {
    this.versionService.setSelected(v.id);
    this.router.navigate(['/customization/submit']);
  }
  remove(v) {
    this.versionService.remove(v.id);
    this.snack.open(`已刪除 ${v.name}`, '關閉', {
      duration: 2500
    });
  }
  goCreate() {
    this.router.navigate(['/customization/whole-house']);
  }
  formatTime(ts) {
    const d = new Date(ts);
    const pad = n => `${n}`.padStart(2, '0');
    return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  static {
    this.ɵfac = function MyListComponent_Factory(t) {
      return new (t || MyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_version_service__WEBPACK_IMPORTED_MODULE_0__.VersionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MyListComponent,
      selectors: [["app-my-list"]],
      decls: 11,
      vars: 6,
      consts: [[1, "my-list-page"], [1, "my-list-page__head"], [1, "eyebrow"], [1, "display-2"], [1, "body-lg"], ["icon", "bookmarks", "title", "\u5C1A\u7121\u5DF2\u5132\u5B58\u7684\u65B9\u6848", "message", "\u5230\u5168\u5BA4\u8A2D\u5B9A\u6311\u9078\u5EFA\u6750\uFF0C\u4E26\u9EDE\u300C\u52A0\u5165\u6BD4\u8F03\u6E05\u55AE\u300D\u5132\u5B58\u65B9\u6848\u3002", "ctaLabel", "\u958B\u59CB\u898F\u5283", "ctaRoute", "/customization/whole-house", 4, "ngIf"], ["class", "version-grid", 4, "ngIf"], ["class", "my-list-page__cta card", 4, "ngIf"], ["icon", "bookmarks", "title", "\u5C1A\u7121\u5DF2\u5132\u5B58\u7684\u65B9\u6848", "message", "\u5230\u5168\u5BA4\u8A2D\u5B9A\u6311\u9078\u5EFA\u6750\uFF0C\u4E26\u9EDE\u300C\u52A0\u5165\u6BD4\u8F03\u6E05\u55AE\u300D\u5132\u5B58\u65B9\u6848\u3002", "ctaLabel", "\u958B\u59CB\u898F\u5283", "ctaRoute", "/customization/whole-house"], [1, "version-grid"], ["class", "version-card card", 3, "version-card--selected", "version-card--submitted", 4, "ngFor", "ngForOf"], [1, "version-card", "card"], [1, "version-card__head"], [1, "version-card__title"], ["class", "chip version-card__chip-submitted", 4, "ngIf"], ["class", "chip", 4, "ngIf"], [1, "version-card__time"], ["type", "button", "aria-label", "\u522A\u9664\u65B9\u6848", 1, "version-card__remove", 3, "disabled", "title", "click"], [1, "version-card__entries"], ["class", "version-card__entry", 4, "ngFor", "ngForOf"], [1, "version-card__footer"], [1, "version-card__delta"], [1, "version-card__cta"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "chip", "version-card__chip-submitted"], [1, "chip"], [1, "version-card__entry"], [3, "src", "alt"], [1, "my-list-page__cta", "card"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [4, "ngIf"]],
      template: function MyListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u6BD4\u8F03\u6E05\u55AE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u5DF2\u5132\u5B58\u65B9\u6848");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MyListComponent_empty_state_8_Template, 1, 0, "empty-state", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MyListComponent_div_9_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MyListComponent_div_10_Template, 6, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" \u53EF\u5132\u5B58\u591A\u9054 ", ctx.maxVersions, " \u500B\u65B9\u6848\u9032\u884C\u6BD4\u8F03\u3002\u76EE\u524D ", ctx.versions.length, " / ", ctx.maxVersions, " \u500B\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.versions.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.versions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.versions.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.my-list-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.my-list-page__cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n}\n.my-list-page__cta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.version-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n\n.version-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 2px solid transparent;\n  transition: border-color 160ms ease;\n}\n.version-card--selected[_ngcontent-%COMP%] {\n  border-color: var(--color-primary, #3b6cf2);\n}\n.version-card--submitted[_ngcontent-%COMP%] {\n  border-color: #f0a500;\n  background: linear-gradient(180deg, #fff8e6 0%, #ffffff 60%);\n}\n.version-card__chip-submitted[data-status=review][_ngcontent-%COMP%] {\n  background: #fff4d6;\n  color: #8a6d00;\n}\n.version-card__chip-submitted[data-status=approved][_ngcontent-%COMP%] {\n  background: #d6f5e3;\n  color: #136a3c;\n}\n.version-card__chip-submitted[data-status=rework][_ngcontent-%COMP%] {\n  background: #ffe1e1;\n  color: #a52525;\n}\n.version-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.version-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.version-card__time[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  font-size: 12px;\n}\n.version-card__remove[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: var(--color-on-surface, #444);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n}\n.version-card__remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(0, 0, 0, 0.06);\n}\n.version-card__remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.version-card__entries[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.version-card__entry[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  background: var(--color-surface-variant, #f4f6fa);\n  border-radius: 8px;\n  padding: 6px 8px;\n}\n.version-card__entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex: 0 0 auto;\n}\n.version-card__entry[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  opacity: 0.7;\n}\n.version-card__entry[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.version-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.version-card__delta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary, #3b6cf2);\n}\n.version-card__cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL215LWxpc3QvbXktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFHRjtBQURFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBRkk7RUFBUSxZQUFBO0FBS1o7O0FBREE7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7QUFJRjtBQUZFO0VBQ0UsMkNBQUE7QUFJSjtBQURFO0VBQ0UscUJBQUE7RUFDQSw0REFBQTtBQUdKO0FBQ0k7RUFBNEIsbUJBQUE7RUFBcUIsY0FBQTtBQUdyRDtBQUZJO0VBQTRCLG1CQUFBO0VBQXFCLGNBQUE7QUFNckQ7QUFMSTtFQUE0QixtQkFBQTtFQUFxQixjQUFBO0FBU3JEO0FBTkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFRSjtBQUxFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBT0o7QUFKRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTUo7QUFIRTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSkk7RUFBeUIsK0JBQUE7QUFPN0I7QUFOSTtFQUFhLGFBQUE7RUFBZSxtQkFBQTtBQVVoQztBQVBFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFTSjtBQU5FO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVFKO0FBTkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUU47QUFMSTtFQUFRLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixZQUFBO0FBVTdDO0FBVEk7RUFBUyxlQUFBO0FBWWI7QUFURTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFXSjtBQVJFO0VBQWtCLG9DQUFBO0FBV3BCO0FBVEU7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQVdKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4ubXktbGlzdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuXG4gICZfX2N0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgc21hbGwgeyBvcGFjaXR5OiAwLjc7IH1cbiAgfVxufVxuXG4udmVyc2lvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG59XG5cbi52ZXJzaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMTYwbXMgZWFzZTtcblxuICAmLS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjM2I2Y2YyKTtcbiAgfVxuXG4gICYtLXN1Ym1pdHRlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmY4ZTYgMCUsICNmZmZmZmYgNjAlKTtcbiAgfVxuXG4gICZfX2NoaXAtc3VibWl0dGVkIHtcbiAgICAmW2RhdGEtc3RhdHVzPSdyZXZpZXcnXSAgIHsgYmFja2dyb3VuZDogI2ZmZjRkNjsgY29sb3I6ICM4YTZkMDA7IH1cbiAgICAmW2RhdGEtc3RhdHVzPSdhcHByb3ZlZCddIHsgYmFja2dyb3VuZDogI2Q2ZjVlMzsgY29sb3I6ICMxMzZhM2M7IH1cbiAgICAmW2RhdGEtc3RhdHVzPSdyZXdvcmsnXSAgIHsgYmFja2dyb3VuZDogI2ZmZTFlMTsgY29sb3I6ICNhNTI1MjU7IH1cbiAgfVxuXG4gICZfX2hlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgJl9fdGltZSB7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAmX19yZW1vdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZSwgIzQ0NCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNik7IH1cbiAgICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC4zNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuICB9XG5cbiAgJl9fZW50cmllcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAmX19lbnRyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNmNGY2ZmEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG5cbiAgICBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDExcHg7IG9wYWNpdHk6IDAuNzsgfVxuICAgIHN0cm9uZyB7IGZvbnQtc2l6ZTogMTNweDsgfVxuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gICZfX2RlbHRhIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjM2I2Y2YyKTsgfVxuXG4gICZfX2N0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 41427:
/*!*********************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/submit/submit.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmitComponent: () => (/* binding */ SubmitComponent)
/* harmony export */ });
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _services_version_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/version.service */ 29256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/info-tile/info-tile.component */ 85019);
/* harmony import */ var _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/empty-state/empty-state.component */ 82719);














function SubmitComponent_empty_state_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "empty-state", 7);
  }
}
function SubmitComponent_div_9_li_9_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" +NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, entry_r3.priceDelta), " ");
  }
}
function SubmitComponent_div_9_li_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u6A19\u914D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function SubmitComponent_div_9_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 26)(4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubmitComponent_div_9_li_9_ng_container_9_Template, 3, 3, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SubmitComponent_div_9_li_9_ng_container_10_Template, 2, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", entry_r3.optionImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", entry_r3.optionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entry_r3.categoryTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entry_r3.optionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("submit-materials__fee--add", entry_r3.priceDelta > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", entry_r3.priceDelta > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !entry_r3.priceDelta);
  }
}
function SubmitComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "info-tile", 10)(3, "info-tile", 11)(4, "info-tile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "section", 13)(6, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u5EFA\u6750\u9078\u64C7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubmitComponent_div_9_li_9_Template, 11, 8, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 17)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u52A0\u50F9\u5408\u8A08");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 18)(17, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SubmitComponent_div_9_Template_mat_checkbox_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.agreed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u6211\u5DF2\u95B1\u8B80\u4E26\u540C\u610F\u5BA2\u8B8A\u898F\u5247\u3001\u8CBB\u7528\u689D\u6B3E\u8207\u65BD\u5DE5\u689D\u4EF6\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "footer", 20)(20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmitComponent_div_9_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u8FD4\u56DE\u4FEE\u6539 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmitComponent_div_9_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u9001\u51FA\u7533\u8ACB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.buyer.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.buyer.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.version.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.version.entries);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 7, ctx_r1.totalDelta), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.agreed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.agreed);
  }
}
class SubmitComponent {
  constructor(router, dialog, versionService) {
    this.router = router;
    this.dialog = dialog;
    this.versionService = versionService;
    this.buyer = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_BUYER;
    this.agreed = false;
    this.version = this.versionService.selectedVersion;
  }
  get totalDelta() {
    return this.version?.totalDelta || 0;
  }
  back() {
    this.router.navigate(['/customization/my-list']);
  }
  submit() {
    if (!this.agreed || !this.version) return;
    this.versionService.submitVersion(this.version.id, _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_STATUS.applyEndDate);
    alert(`已送出方案：${this.version.name}\n(UI demo - 實際送出邏輯待 API 完成)`);
    this.router.navigate(['/customization']);
  }
  static {
    this.ɵfac = function SubmitComponent_Factory(t) {
      return new (t || SubmitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_version_service__WEBPACK_IMPORTED_MODULE_1__.VersionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SubmitComponent,
      selectors: [["app-submit"]],
      decls: 10,
      vars: 2,
      consts: [[1, "submit-page"], [1, "submit-page__head"], [1, "eyebrow"], [1, "display-2"], [1, "body-lg"], ["icon", "error_outline", "title", "\u5C1A\u672A\u9078\u5B9A\u65B9\u6848", "message", "\u8ACB\u81F3\u6BD4\u8F03\u6E05\u55AE\u9078\u64C7\u8981\u9001\u51FA\u7684\u65B9\u6848\u3002", "ctaLabel", "\u524D\u5F80\u6BD4\u8F03\u6E05\u55AE", "ctaRoute", "/customization/my-list", 4, "ngIf"], ["class", "submit-confirm card", 4, "ngIf"], ["icon", "error_outline", "title", "\u5C1A\u672A\u9078\u5B9A\u65B9\u6848", "message", "\u8ACB\u81F3\u6BD4\u8F03\u6E05\u55AE\u9078\u64C7\u8981\u9001\u51FA\u7684\u65B9\u6848\u3002", "ctaLabel", "\u524D\u5F80\u6BD4\u8F03\u6E05\u55AE", "ctaRoute", "/customization/my-list"], [1, "submit-confirm", "card"], [1, "submit-confirm__meta"], ["label", "\u6236\u865F", 3, "value"], ["label", "\u6240\u6709\u6B0A\u4EBA", 3, "value"], ["label", "\u7533\u8ACB\u65B9\u6848", 3, "value"], [1, "submit-confirm__section"], [1, "submit-confirm__category"], [1, "submit-materials"], ["class", "submit-materials__item", 4, "ngFor", "ngForOf"], [1, "submit-confirm__total", "card"], [1, "submit-confirm__agreement"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "submit-confirm__actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], [1, "submit-materials__item"], [1, "submit-materials__thumb"], [3, "src", "alt"], [1, "submit-materials__meta"], [1, "submit-materials__fee"], [4, "ngIf"]],
      template: function SubmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u9001\u51FA\u7533\u8ACB");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u6700\u7D42\u78BA\u8A8D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u8ACB\u6700\u5F8C\u78BA\u8A8D\u60A8\u7684\u5BA2\u8B8A\u7533\u8ACB\u5167\u5BB9\u3002\u9001\u51FA\u5F8C\u5C07\u9032\u5165\u5BE9\u6838\u6D41\u7A0B\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubmitComponent_empty_state_8_Template, 1, 0, "empty-state", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubmitComponent_div_9_Template, 28, 9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.version);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.version);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_2__.InfoTileComponent, _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.submit-confirm[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.submit-confirm__meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n}\n.submit-confirm__category[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n}\n.submit-confirm__total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 18px;\n  background: var(--color-surface-variant, #f4f6fa);\n}\n.submit-confirm__total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-primary, #3b6cf2);\n}\n.submit-confirm__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n.submit-materials[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.submit-materials__item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72px 1fr auto;\n  gap: 14px;\n  align-items: center;\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: var(--color-surface-variant, #f4f6fa);\n}\n.submit-materials__thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 56px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.submit-materials__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.submit-materials__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.submit-materials__meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.submit-materials__meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.submit-materials__fee[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.submit-materials__fee--add[_ngcontent-%COMP%] {\n  color: var(--color-primary, #3b6cf2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL3N1Ym1pdC9zdWJtaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUdGO0FBREU7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBR0o7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FBRU47QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUROO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBSEo7QUFJSTtFQUFRLGVBQUE7RUFBaUIsWUFBQTtBQUE3QjtBQUNJO0VBQVMsZUFBQTtBQUViO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBQUk7RUFBUyxvQ0FBQTtBQUdiIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4uc3VibWl0LWNvbmZpcm0ge1xuICBwYWRkaW5nOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG5cbiAgJl9fbWV0YSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAmX19jYXRlZ29yeSB7XG4gICAgbWFyZ2luOiAwIDAgMTJweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICZfX3RvdGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMThweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNmNGY2ZmEpO1xuICAgIHN0cm9uZyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzNiNmNmMik7XG4gICAgfVxuICB9XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLnN1Ym1pdC1tYXRlcmlhbHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcblxuICAmX19pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzJweCAxZnIgYXV0bztcbiAgICBnYXA6IDE0cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNmNGY2ZmEpO1xuICB9XG5cbiAgJl9fdGh1bWIge1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gICZfX21ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgICBzbWFsbCB7IGZvbnQtc2l6ZTogMTJweDsgb3BhY2l0eTogMC43OyB9XG4gICAgc3Ryb25nIHsgZm9udC1zaXplOiAxNHB4OyB9XG4gIH1cblxuICAmX19mZWUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgJi0tYWRkIHsgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnksICMzYjZjZjIpOyB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 19573:
/*!***************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/version-preview/version-preview.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionPreviewComponent: () => (/* binding */ VersionPreviewComponent)
/* harmony export */ });
/* harmony import */ var _services_version_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/version.service */ 29256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _shared_components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/panorama/panorama.component */ 39827);
/* harmony import */ var _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/empty-state/empty-state.component */ 82719);









function VersionPreviewComponent_section_0_li_30_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, entry_r4.priceDelta), "");
  }
}
function VersionPreviewComponent_section_0_li_30_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u6A19\u914D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VersionPreviewComponent_section_0_li_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20)(4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VersionPreviewComponent_section_0_li_30_span_8_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VersionPreviewComponent_section_0_li_30_span_9_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", entry_r4.optionImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", entry_r4.optionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r4.categoryTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r4.optionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", entry_r4.priceDelta > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !entry_r4.priceDelta);
  }
}
function VersionPreviewComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VersionPreviewComponent_section_0_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u8FD4\u56DE\u6BD4\u8F03\u6E05\u55AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "header", 4)(6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u65B9\u6848\u9810\u89BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " \u52A0\u50F9\u5408\u8A08\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "article", 9)(17, "header", 10)(18, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "360\u00B0 \u9810\u89BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u5EFA\u6750\u8996\u89BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-panorama");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "article", 11)(24, "header")(25, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u672C\u65B9\u6848\u5EFA\u6750");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u9078\u64C7\u660E\u7D30");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, VersionPreviewComponent_section_0_li_30_Template, 10, 6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "footer", 14)(32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VersionPreviewComponent_section_0_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " \u8FD4\u56DE\u6E05\u55AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VersionPreviewComponent_section_0_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.choose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " \u9078\u64C7\u6B64\u65B9\u6848 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.version.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 3, ctx_r0.version.totalDelta), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.version.entries);
  }
}
function VersionPreviewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "empty-state", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class VersionPreviewComponent {
  constructor(route, router, versionService) {
    this.route = route;
    this.router = router;
    this.versionService = versionService;
    this.version = null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.version = this.versionService.getById(id) || null;
  }
  back() {
    this.router.navigate(['/customization/my-list']);
  }
  choose() {
    if (!this.version) return;
    this.versionService.setSelected(this.version.id);
    this.router.navigate(['/customization/submit']);
  }
  static {
    this.ɵfac = function VersionPreviewComponent_Factory(t) {
      return new (t || VersionPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_version_service__WEBPACK_IMPORTED_MODULE_0__.VersionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: VersionPreviewComponent,
      selectors: [["app-version-preview"]],
      decls: 3,
      vars: 2,
      consts: [["class", "version-preview-page", 4, "ngIf", "ngIfElse"], ["missing", ""], [1, "version-preview-page"], [1, "version-preview-page__back", 3, "click"], [1, "version-preview-page__head"], [1, "eyebrow"], [1, "display-2"], [1, "body-lg"], [1, "version-preview-page__grid"], [1, "card", "version-preview-page__panorama"], [1, "version-preview-page__panorama-head"], [1, "card", "version-preview-page__entries"], [1, "version-entry-list"], ["class", "version-entry", 4, "ngFor", "ngForOf"], [1, "version-preview-page__actions", "card"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "version-entry"], [1, "version-entry__thumb"], [3, "src", "alt"], [1, "version-entry__meta"], ["class", "chip", 4, "ngIf"], [1, "chip"], ["icon", "search_off", "title", "\u627E\u4E0D\u5230\u6B64\u65B9\u6848", "message", "\u8A72\u7248\u672C\u53EF\u80FD\u5DF2\u88AB\u522A\u9664\uFF0C\u8ACB\u56DE\u5230\u6BD4\u8F03\u6E05\u55AE\u3002", "ctaLabel", "\u56DE\u6BD4\u8F03\u6E05\u55AE", "ctaRoute", "/customization/my-list"]],
      template: function VersionPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VersionPreviewComponent_section_0_Template, 40, 5, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VersionPreviewComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.version)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _shared_components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_1__.PanoramaComponent, _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.version-preview-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.version-preview-page__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  color: var(--color-primary, #3b6cf2);\n  width: max-content;\n}\n.version-preview-page__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 1fr);\n  gap: 20px;\n}\n@media (max-width: 960px) {\n  .version-preview-page__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.version-preview-page__panorama[_ngcontent-%COMP%], .version-preview-page__entries[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.version-preview-page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n}\n\n.version-entry-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.version-entry[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  padding: 8px;\n  border-radius: var(--radius-sm, 8px);\n  background: var(--color-surface-variant, #f4f6fa);\n}\n.version-entry__thumb[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex: 0 0 auto;\n}\n.version-entry__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.version-entry__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.version-entry__meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-size: 12px;\n}\n.version-entry__meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL3ZlcnNpb24tcHJldmlldy92ZXJzaW9uLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBR0Y7QUFERTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDBEQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQUk7RUFMRjtJQU1JLDBCQUFBO0VBR0o7QUFDRjtBQUFFO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsaURBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBRko7QUFHSTtFQUFRLFlBQUE7RUFBYyxlQUFBO0FBQzFCO0FBQUk7RUFBUyxlQUFBO0FBR2IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbi52ZXJzaW9uLXByZXZpZXctcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICAmX19iYWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzNiNmNmMik7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICB9XG5cbiAgJl9fZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjRmcikgbWlubWF4KDI4MHB4LCAxZnIpO1xuICAgIGdhcDogMjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG5cbiAgJl9fcGFub3JhbWEsXG4gICZfX2VudHJpZXMge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIH1cbn1cblxuLnZlcnNpb24tZW50cnktbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4udmVyc2lvbi1lbnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20sIDhweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtdmFyaWFudCwgI2Y0ZjZmYSk7XG5cbiAgJl9fdGh1bWIge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gICZfX21ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgICBzbWFsbCB7IG9wYWNpdHk6IDAuNzsgZm9udC1zaXplOiAxMnB4OyB9XG4gICAgc3Ryb25nIHsgZm9udC1zaXplOiAxNHB4OyB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 74933:
/*!***********************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/welcome/welcome.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeComponent: () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/info-tile/info-tile.component */ 85019);









function WelcomeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u5BA2\u5EF3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u4E3B\u81E5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u66F8\u623F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u5EDA\u623F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u4E3B\u885B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u6B21\u885B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\uFF0A\u672C\u5E73\u9762\u5716\u70BA\u793A\u610F\uFF0C\u5BE6\u969B\u4EE5\u5951\u7D04\u9644\u4EF6\u70BA\u6E96\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class WelcomeComponent {
  constructor(router, dialog) {
    this.router = router;
    this.dialog = dialog;
    this.buyer = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_BUYER;
    this.showFloorplan = false;
  }
  toggleFloorplan() {
    this.showFloorplan = !this.showFloorplan;
  }
  confirmCorrect() {
    this.router.navigate(['/customization']);
  }
  reportIssue() {
    alert('業務聯絡：王業務 0912-345-678 / line: @yunguang-sales');
  }
  static {
    this.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 30,
      vars: 8,
      consts: [[1, "welcome-page"], [1, "welcome-card", "card"], [1, "welcome-card__head"], [1, "eyebrow"], [1, "welcome-card__title"], [1, "welcome-card__lead"], [1, "welcome-card__info"], ["label", "\u5EFA\u6848\u540D\u7A31", 3, "value"], ["label", "\u6236\u865F", 3, "value"], ["label", "\u576A\u6578", 3, "value"], ["label", "\u683C\u5C40", 3, "value"], ["label", "\u671D\u5411", 3, "value"], ["label", "\u6240\u6709\u6B0A\u4EBA", 3, "value"], ["type", "button", 1, "btn", "btn-ghost", "welcome-card__expand", 3, "click"], ["class", "welcome-card__floorplan", 4, "ngIf"], [1, "welcome-card__actions"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "welcome-card__floorplan"], [1, "floorplan", "floorplan--placeholder"], [1, "floorplan__room", "floorplan__room--living"], [1, "floorplan__room", "floorplan__room--master"], [1, "floorplan__room", "floorplan__room--study"], [1, "floorplan__room", "floorplan__room--kitchen"], [1, "floorplan__room", "floorplan__room--bath1"], [1, "floorplan__room", "floorplan__room--bath2"], [1, "welcome-card__floorplan-hint"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u9996\u6B21\u767B\u5165\u6838\u5C0D");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u8ACB\u78BA\u8A8D\u60A8\u7684\u8CFC\u5C4B\u8CC7\u8A0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u78BA\u8A8D\u8CC7\u8A0A\u7121\u8AA4\u5F8C\uFF0C\u5C07\u9032\u5165\u5BA2\u8B8A\u7CFB\u7D71\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "dl", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "info-tile", 7)(11, "info-tile", 8)(12, "info-tile", 9)(13, "info-tile", 10)(14, "info-tile", 11)(15, "info-tile", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_16_listener() {
            return ctx.toggleFloorplan();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " \u9810\u89BD\u6236\u578B\u5E73\u9762\u5716 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, WelcomeComponent_div_20_Template, 16, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "footer", 15)(22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_22_listener() {
            return ctx.confirmCorrect();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "check_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " \u8CC7\u8A0A\u6B63\u78BA\uFF0C\u9032\u5165\u5BA2\u8B8A\u7CFB\u7D71 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_26_listener() {
            return ctx.reportIssue();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "error_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " \u8CC7\u8A0A\u6709\u8AA4\uFF0C\u806F\u7D61\u696D\u52D9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.buyer.project);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.buyer.unit);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.buyer.size + " \u576A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.buyer.layout);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.buyer.facing);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.buyer.ownerName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.showFloorplan ? "expand_less" : "expand_more");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showFloorplan);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _components_info_tile_info_tile_component__WEBPACK_IMPORTED_MODULE_1__.InfoTileComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 54009:
/*!*******************************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/pages/whole-house/whole-house.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WholeHouseComponent: () => (/* binding */ WholeHouseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59686);
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customization.data */ 32959);
/* harmony import */ var _services_version_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/version.service */ 29256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 44186);
/* harmony import */ var _shared_components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/panorama/panorama.component */ 39827);













function WholeHouseComponent_article_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u5DF2\u9078\uFF1A", opt_r5.name, " ");
  }
}
function WholeHouseComponent_article_8_button_12_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WholeHouseComponent_article_8_button_12_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u6A19\u914D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WholeHouseComponent_article_8_button_12_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" +NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, opt_r6.priceDelta), " ");
  }
}
function WholeHouseComponent_article_8_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WholeHouseComponent_article_8_button_12_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const opt_r6 = restoredCtx.$implicit;
      const cat_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.select(cat_r2.id, opt_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WholeHouseComponent_article_8_button_12_mat_icon_3_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 26)(5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WholeHouseComponent_article_8_button_12_ng_container_8_Template, 2, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WholeHouseComponent_article_8_button_12_ng_container_9_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const cat_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("wh-option--selected", ctx_r4.isSelected(cat_r2.id, opt_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", opt_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", opt_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isSelected(cat_r2.id, opt_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opt_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", opt_r6.isDefault || !opt_r6.priceDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !opt_r6.isDefault && opt_r6.priceDelta);
  }
}
function WholeHouseComponent_article_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 13)(1, "header", 14)(2, "span", 15)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WholeHouseComponent_article_8_span_10_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WholeHouseComponent_article_8_button_12_Template, 10, 8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cat_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cat_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cat_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedOption(cat_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", cat_r2.options);
  }
}
function WholeHouseComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 31)(1, "header", 32)(2, "div")(3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "360\u00B0 \u9810\u89BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u5EFA\u6750\u8996\u89BA\u9810\u89BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WholeHouseComponent_section_27_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.hidePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u95DC\u9589\u9810\u89BD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-panorama");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class WholeHouseComponent {
  constructor(router, snack, versionService) {
    this.router = router;
    this.snack = snack;
    this.versionService = versionService;
    this.categories = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_MATERIAL_CATEGORIES;
    this.selections = {};
    this.previewVisible = false;
    this.previewScene = 'scene1';
    this.versions = [];
    this.maxVersions = _services_version_service__WEBPACK_IMPORTED_MODULE_1__.MAX_VERSIONS;
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.categories.forEach(cat => {
      const def = cat.options.find(o => o.isDefault) || cat.options[0];
      if (def) this.selections[cat.id] = def.id;
    });
    this.sub.add(this.versionService.versions$.subscribe(v => this.versions = v));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  select(categoryId, optionId) {
    this.selections[categoryId] = optionId;
  }
  isSelected(categoryId, optionId) {
    return this.selections[categoryId] === optionId;
  }
  selectedOption(category) {
    const id = this.selections[category.id];
    return category.options.find(o => o.id === id);
  }
  get totalDelta() {
    return this.categories.reduce((sum, cat) => {
      const opt = this.selectedOption(cat);
      return sum + (opt?.priceDelta || 0);
    }, 0);
  }
  get isFull() {
    return this.versions.length >= this.maxVersions;
  }
  showPreview() {
    this.previewVisible = true;
    setTimeout(() => {
      document.querySelector('.whole-house-preview')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 50);
  }
  hidePreview() {
    this.previewVisible = false;
  }
  saveVersion() {
    const result = this.versionService.saveSnapshot(this.selections, this.previewScene);
    if (!result.ok) {
      this.snack.open(`已達上限（最多 ${this.maxVersions} 個版本），請先刪除舊版本。`, '前往清單', {
        duration: 4000
      }).onAction().subscribe(() => this.router.navigate(['/customization/my-list']));
      return;
    }
    this.snack.open(`已儲存 ${result.version.name}，可前往比較清單。`, '查看清單', {
      duration: 3500
    }).onAction().subscribe(() => this.router.navigate(['/customization/my-list']));
  }
  static {
    this.ɵfac = function WholeHouseComponent_Factory(t) {
      return new (t || WholeHouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_version_service__WEBPACK_IMPORTED_MODULE_1__.VersionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: WholeHouseComponent,
      selectors: [["app-whole-house"]],
      decls: 28,
      vars: 9,
      consts: [[1, "whole-house-page"], [1, "whole-house-page__head"], [1, "eyebrow"], [1, "display-2"], [1, "body-lg"], ["class", "wh-category card", 4, "ngFor", "ngForOf"], [1, "whole-house-page__actions", "card"], [1, "whole-house-page__summary"], [1, "whole-house-page__counter"], [1, "whole-house-page__cta"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "matTooltip", "click"], ["class", "whole-house-preview card", 4, "ngIf"], [1, "wh-category", "card"], [1, "wh-category__head"], [1, "wh-category__icon"], [1, "wh-category__title"], [1, "wh-category__desc"], ["class", "wh-category__selected chip", 4, "ngIf"], [1, "wh-option-grid"], ["type", "button", "class", "wh-option", 3, "wh-option--selected", "click", 4, "ngFor", "ngForOf"], [1, "wh-category__selected", "chip"], ["type", "button", 1, "wh-option", 3, "click"], [1, "wh-option__thumb"], ["loading", "lazy", 3, "src", "alt"], ["class", "wh-option__check", 4, "ngIf"], [1, "wh-option__meta"], [1, "wh-option__name"], [1, "wh-option__price"], [4, "ngIf"], [1, "wh-option__check"], [1, "whole-house-preview", "card"], [1, "whole-house-preview__head"], [1, "whole-house-preview__title"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"]],
      template: function WholeHouseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u5BA2\u8B8A\u8A2D\u5B9A \u00B7 \u5168\u5BA4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u5168\u5BA4\u5EFA\u6750\u9078\u64C7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u65BC\u540C\u4E00\u9801\u9762\u5B8C\u6210\u5168\u5BA4\u5EFA\u6750\u9078\u8272\uFF0C\u5B8C\u6210\u5F8C\u53EF\u9032\u5165 360\u00B0 \u9810\u89BD\u7D50\u679C\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WholeHouseComponent_article_8_Template, 13, 5, "article", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "footer", 6)(10, "div", 7)(11, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u52A0\u50F9\u5408\u8A08");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WholeHouseComponent_Template_button_click_19_listener() {
            return ctx.showPreview();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " \u9810\u89BD\u7D50\u679C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WholeHouseComponent_Template_button_click_23_listener() {
            return ctx.saveVersion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "bookmark_add");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " \u52A0\u5165\u6BD4\u8F03\u6E05\u55AE ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, WholeHouseComponent_section_27_Template, 12, 0, "section", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+NT$ ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 7, ctx.totalDelta), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" \u5DF2\u5132\u5B58\u7248\u672C\uFF1A", ctx.versions.length, " / ", ctx.maxVersions, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isFull)("matTooltip", ctx.isFull ? "\u5DF2\u9054 " + ctx.maxVersions + " \u500B\u7248\u672C\u4E0A\u9650" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.previewVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _shared_components_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_2__.PanoramaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.whole-house-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.whole-house-page__head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.whole-house-page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  position: sticky;\n  bottom: 16px;\n  z-index: 4;\n}\n.whole-house-page__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.whole-house-page__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.whole-house-page__cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.wh-category[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.wh-category__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.wh-category__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-md, 12px);\n  background: var(--color-surface-variant, #eef1f6);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.wh-category__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.wh-category__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.7;\n  margin: 0;\n}\n.wh-category__selected[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.wh-option-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 14px;\n}\n\n.wh-option[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: 2px solid transparent;\n  border-radius: var(--radius-md, 12px);\n  padding: 6px;\n  cursor: pointer;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  transition: border-color 160ms ease, transform 160ms ease;\n}\n.wh-option[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.wh-option--selected[_ngcontent-%COMP%] {\n  border-color: var(--color-primary, #3b6cf2);\n}\n.wh-option__thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 4/3;\n  border-radius: var(--radius-sm, 8px);\n  overflow: hidden;\n  background: var(--color-surface-variant, #eef1f6);\n}\n.wh-option__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.wh-option__check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  color: #fff;\n  background: var(--color-primary, #3b6cf2);\n  border-radius: 50%;\n}\n.wh-option__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 0 4px 4px;\n}\n.wh-option__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.wh-option__price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.75;\n}\n\n.whole-house-preview[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.whole-house-preview__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.whole-house-preview__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9jdXN0b21pemF0aW9uL3BhZ2VzL3dob2xlLWhvdXNlL3dob2xlLWhvdXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUdGO0FBREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBR0o7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQ0o7QUFBSTtFQUFTLGVBQUE7QUFHYjtBQUFFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFFSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSx5REFBQTtBQUpGO0FBTUU7RUFDRSwyQkFBQTtBQUpKO0FBT0U7RUFDRSwyQ0FBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtBQU5KO0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5OO0FBVUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBVEo7QUFZRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQVhKOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWkY7QUFjRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVpKO0FBZUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQWJKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4ud2hvbGUtaG91c2UtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcblxuICAmX19oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgei1pbmRleDogNDtcbiAgfVxuXG4gICZfX3N1bW1hcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBzdHJvbmcgeyBmb250LXNpemU6IDIwcHg7IH1cbiAgfVxuXG4gICZfX2N0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLndoLWNhdGVnb3J5IHtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG5cbiAgJl9faGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAmX19pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kLCAxMnB4KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLXZhcmlhbnQsICNlZWYxZjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJl9fZGVzYyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAmX19zZWxlY3RlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuLndoLW9wdGlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuICBnYXA6IDE0cHg7XG59XG5cbi53aC1vcHRpb24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCwgMTJweCk7XG4gIHBhZGRpbmc6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDE2MG1zIGVhc2UsIHRyYW5zZm9ybSAxNjBtcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxuXG4gICYtLXNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnksICMzYjZjZjIpO1xuICB9XG5cbiAgJl9fdGh1bWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhc3BlY3QtcmF0aW86IDQgLyAzO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSwgOHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtdmFyaWFudCwgI2VlZjFmNik7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LCAjM2I2Y2YyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAmX19tZXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gICAgcGFkZGluZzogMCA0cHggNHB4O1xuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAmX19wcmljZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gIH1cbn1cblxuLndob2xlLWhvdXNlLXByZXZpZXcge1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcblxuICAmX19oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 29256:
/*!****************************************************************************!*\
  !*** ./apps/web/src/app/modules/customization/services/version.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_VERSIONS: () => (/* binding */ MAX_VERSIONS),
/* harmony export */   VersionService: () => (/* binding */ VersionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _customization_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customization.data */ 32959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const MAX_VERSIONS = 5;
const STORAGE_KEY = 'cust.versions.v1';
const SELECTED_KEY = 'cust.versions.selectedId';
const SUBMISSION_KEY = 'cust.versions.submission';
class VersionService {
  constructor() {
    this._versions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.loadVersions());
    this._selectedId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(typeof localStorage !== 'undefined' ? localStorage.getItem(SELECTED_KEY) : null);
    this._submission$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.loadSubmission());
    this.versions$ = this._versions$.asObservable();
    this.selectedId$ = this._selectedId$.asObservable();
    this.submission$ = this._submission$.asObservable();
  }
  get versions() {
    return this._versions$.value;
  }
  get selectedId() {
    return this._selectedId$.value;
  }
  get selectedVersion() {
    const id = this.selectedId;
    if (!id) return null;
    return this.versions.find(v => v.id === id) || null;
  }
  get isFull() {
    return this.versions.length >= MAX_VERSIONS;
  }
  getById(id) {
    return this.versions.find(v => v.id === id);
  }
  get submission() {
    return this._submission$.value;
  }
  get submittedVersion() {
    const s = this.submission;
    if (!s) return null;
    return this.getById(s.versionId) || null;
  }
  /**
   * 是否還在「可修改」狀態：尚未審核通過且未過期
   */
  isEditable(now = new Date()) {
    const s = this.submission;
    if (!s) return true; // 尚未送出
    if (s.reviewStatus !== 'review') return false; // 已核准 / 需修正都禁止編輯入口（依需求調整）
    const deadline = new Date(`${s.applyDeadline}T23:59:59`);
    return now <= deadline;
  }
  /**
   * 標記某版本為「已送出」
   */
  submitVersion(versionId, applyDeadline) {
    if (!this.getById(versionId)) return null;
    const state = {
      versionId,
      submittedAt: Date.now(),
      reviewStatus: 'review',
      applyDeadline
    };
    this._submission$.next(state);
    this.persistSubmission(state);
    return state;
  }
  /**
   * 取消送出（重新編輯時可呼叫，依需求保留）
   */
  withdrawSubmission() {
    this._submission$.next(null);
    this.persistSubmission(null);
  }
  /**
   * 從目前 whole-house 的選擇結果產出版本快照。
   */
  buildEntriesFromSelections(selections, categories = _customization_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_MATERIAL_CATEGORIES) {
    const entries = [];
    let totalDelta = 0;
    categories.forEach(cat => {
      const optId = selections[cat.id];
      const opt = cat.options.find(o => o.id === optId);
      if (!opt) return;
      const price = opt.priceDelta || 0;
      totalDelta += price;
      entries.push({
        categoryId: cat.id,
        categoryTitle: cat.title,
        optionId: opt.id,
        optionName: opt.name,
        optionImage: opt.image,
        priceDelta: price
      });
    });
    return {
      entries,
      totalDelta
    };
  }
  saveSnapshot(selections, scene = 'scene1') {
    if (this.isFull) return {
      ok: false,
      reason: 'limit'
    };
    const {
      entries,
      totalDelta
    } = this.buildEntriesFromSelections(selections);
    const next = this.versions.slice();
    const version = {
      id: this.genId(),
      name: `方案 #${next.length + 1}`,
      createdAt: Date.now(),
      scene,
      totalDelta,
      entries
    };
    next.push(version);
    this.commit(next);
    return {
      ok: true,
      version
    };
  }
  remove(id) {
    // 已送出且仍在審核中的版本不允許刪除
    const s = this.submission;
    if (s && s.versionId === id && s.reviewStatus === 'review') {
      return;
    }
    const next = this.versions.filter(v => v.id !== id);
    // Renumber names so they stay 1..n
    next.forEach((v, idx) => v.name = `方案 #${idx + 1}`);
    this.commit(next);
    if (this.selectedId === id) this.setSelected(null);
  }
  loadSubmission() {
    if (typeof localStorage === 'undefined') return null;
    try {
      const raw = localStorage.getItem(SUBMISSION_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.versionId === 'string') return parsed;
      return null;
    } catch {
      return null;
    }
  }
  persistSubmission(state) {
    if (typeof localStorage === 'undefined') return;
    try {
      if (state) localStorage.setItem(SUBMISSION_KEY, JSON.stringify(state));else localStorage.removeItem(SUBMISSION_KEY);
    } catch {
      /* ignore */
    }
  }
  setSelected(id) {
    this._selectedId$.next(id);
    if (typeof localStorage !== 'undefined') {
      if (id) localStorage.setItem(SELECTED_KEY, id);else localStorage.removeItem(SELECTED_KEY);
    }
  }
  commit(versions) {
    this._versions$.next(versions);
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
      } catch {
        /* ignore quota */
      }
    }
  }
  loadVersions() {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  genId() {
    return `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  }
  static {
    this.ɵfac = function VersionService_Factory(t) {
      return new (t || VersionService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: VersionService,
      factory: VersionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 69927:
/*!***********************************************************************************************!*\
  !*** ./apps/web/src/app/shared/pages/customization-reference/customization-reference.page.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationReferenceComponent: () => (/* binding */ CustomizationReferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _services_customization_reference_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/customization-reference.service */ 24081);
/* harmony import */ var _components_customization_principles_customization_principles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/customization-principles/customization-principles.component */ 98487);
/* harmony import */ var _components_customization_timeline_customization_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customization-timeline/customization-timeline.component */ 30723);
/* harmony import */ var _components_customization_faq_customization_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/customization-faq/customization-faq.component */ 32447);
/* harmony import */ var _components_customization_pricing_customization_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/customization-pricing/customization-pricing.component */ 27939);
/* harmony import */ var _components_customization_equipment_customization_equipment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/customization-equipment/customization-equipment.component */ 84515);











function CustomizationReferenceComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomizationReferenceComponent_a_5_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const section_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navigateTo(section_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.activeSection() === section_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", section_r1.label, " ");
  }
}
class CustomizationReferenceComponent {
  constructor() {
    this.refService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_customization_reference_service__WEBPACK_IMPORTED_MODULE_0__.CustomizationReferenceService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.navSections = this.refService.navSections;
    this.principles = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(this.refService.principles);
    this.processSteps = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(this.refService.processSteps);
    this.faqGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(this.refService.faqGroups);
    this.priceByCategory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(this.refService.getPriceByCategory());
    this.equipmentByCategory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(this.refService.getEquipmentByCategory());
    this.activeSection = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(null);
  }
  navigateTo(sectionId) {
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  static {
    this.ɵfac = function CustomizationReferenceComponent_Factory(t) {
      return new (t || CustomizationReferenceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CustomizationReferenceComponent,
      selectors: [["app-customization-reference"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 6,
      consts: [[1, "customization-reference-page"], [1, "customization-reference-page__sidenav"], [1, "customization-reference-page__sidenav-nav"], [1, "customization-reference-page__sidenav-label"], ["class", "customization-reference-page__nav-link", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "customization-reference-page__content"], [3, "principles"], [3, "processSteps"], [3, "faqGroups"], [3, "priceByCategory"], [3, "equipmentByCategory"], [1, "customization-reference-page__nav-link", 3, "click"]],
      template: function CustomizationReferenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "nav", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u5FEB\u901F\u5C0E\u822A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CustomizationReferenceComponent_a_5_Template, 2, 3, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "main", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-customization-principles", 6)(8, "app-customization-timeline", 7)(9, "app-customization-faq", 8)(10, "app-customization-pricing", 9)(11, "app-customization-equipment", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.navSections);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("principles", ctx.principles());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("processSteps", ctx.processSteps());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("faqGroups", ctx.faqGroups());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("priceByCategory", ctx.priceByCategory());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("equipmentByCategory", ctx.equipmentByCategory());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_customization_principles_customization_principles_component__WEBPACK_IMPORTED_MODULE_1__.CustomizationPrinciplesComponent, _components_customization_timeline_customization_timeline_component__WEBPACK_IMPORTED_MODULE_2__.CustomizationTimelineComponent, _components_customization_faq_customization_faq_component__WEBPACK_IMPORTED_MODULE_3__.CustomizationFaqComponent, _components_customization_pricing_customization_pricing_component__WEBPACK_IMPORTED_MODULE_4__.CustomizationPricingComponent, _components_customization_equipment_customization_equipment_component__WEBPACK_IMPORTED_MODULE_5__.CustomizationEquipmentComponent],
      styles: [".customization-reference-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 32px;\n  min-height: 100vh;\n}\n@media (max-width: 1024px) {\n  .customization-reference-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n.customization-reference-page__sidenav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 80px;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 24px;\n  background: var(--color-surface, #fff);\n  border-radius: 8px;\n  border: 1px solid var(--color-outline, #e0e0e0);\n}\n@media (max-width: 1024px) {\n  .customization-reference-page__sidenav[_ngcontent-%COMP%] {\n    position: relative;\n    top: auto;\n    margin-bottom: 24px;\n  }\n}\n.customization-reference-page__sidenav-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.customization-reference-page__sidenav-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--color-outline, #999);\n  padding: 8px 12px;\n  margin-bottom: 8px;\n}\n.customization-reference-page__nav-link[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 200ms ease;\n  font-size: 14px;\n  color: var(--color-on-surface, #333);\n}\n.customization-reference-page__nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-variant, #f5f5f5);\n}\n.customization-reference-page__nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-container, #e8f5e9);\n  color: var(--color-primary, #4caf50);\n  font-weight: 600;\n}\n.customization-reference-page__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n  padding: 24px 0;\n}\n@media (max-width: 768px) {\n  .customization-reference-page__content[_ngcontent-%COMP%] {\n    gap: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL3BhZ2VzL2N1c3RvbWl6YXRpb24tcmVmZXJlbmNlL2N1c3RvbWl6YXRpb24tcmVmZXJlbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLDBCQUFBO0lBQ0EsU0FBQTtFQUVGO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FBRUo7QUFBSTtFQVRGO0lBVUksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUFHSjtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBRUo7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBRUk7RUFDRSxpREFBQTtBQUFOO0FBR0k7RUFDRSxtREFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFISjtBQUtJO0VBTkY7SUFPSSxTQUFBO0VBRko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21pemF0aW9uLXJlZmVyZW5jZS1wYWdlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XG4gIGdhcDogMzJweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjRweDtcbiAgfVxuXG4gICZfX3NpZGVuYXYge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA4MHB4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLCAjZmZmKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZSwgI2UwZTBlMCk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3NpZGVuYXYtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAmX19zaWRlbmF2LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb3V0bGluZSwgIzk5OSk7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgJl9fbmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLCAjMzMzKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS12YXJpYW50LCAjZjVmNWY1KTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRhaW5lciwgI2U4ZjVlOSk7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSwgIzRjYWY1MCk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQ4cHg7XG4gICAgcGFkZGluZzogMjRweCAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBnYXA6IDMycHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=apps_web_src_app_modules_customization_customization_module_ts.js.map