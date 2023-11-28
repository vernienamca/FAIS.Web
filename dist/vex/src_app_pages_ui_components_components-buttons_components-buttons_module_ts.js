"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-buttons_components-buttons_module_ts"],{

/***/ 49597:
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleIn400ms": () => (/* binding */ scaleIn400ms),
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 72223);

function scaleInAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(1)'
  }))])]);
}
const scaleIn400ms = scaleInAnimation(400);

/***/ }),

/***/ 45052:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-buttons/components-buttons-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonsRoutingModule": () => (/* binding */ ComponentsButtonsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _components_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-buttons.component */ 42498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  component: _components_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonsComponent
}];
class ComponentsButtonsRoutingModule {}
ComponentsButtonsRoutingModule.ɵfac = function ComponentsButtonsRoutingModule_Factory(t) {
  return new (t || ComponentsButtonsRoutingModule)();
};
ComponentsButtonsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ComponentsButtonsRoutingModule
});
ComponentsButtonsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsButtonsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 42498:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-buttons/components-buttons.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonsComponent": () => (/* binding */ ComponentsButtonsComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _static_data_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../static-data/colors */ 49145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components-overview/components/components-overview-buttons/components-overview-buttons.component */ 35291);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 69941);














const _c0 = function (a0, a1) {
  return [a0, a1];
};
const _c1 = function (a0) {
  return [a0];
};
function ComponentsButtonsComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 41)(2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](12, _c0, color_r1.backgroundColor, color_r1.backgroundContrastColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, color_r1.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", color_r1.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 8, color_r1.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c1, "text-" + color_r1.label + "-500"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 10, color_r1.label));
  }
}
const _c2 = function () {
  return ["Components", "Buttons"];
};
class ComponentsButtonsComponent {
  constructor() {
    this.colors = _static_data_colors__WEBPACK_IMPORTED_MODULE_4__.colors;
  }
  ngOnInit() {}
}
ComponentsButtonsComponent.ɵfac = function ComponentsButtonsComponent_Factory(t) {
  return new (t || ComponentsButtonsComponent)();
};
ComponentsButtonsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ComponentsButtonsComponent,
  selectors: [["vex-components-buttons"]],
  decls: 173,
  vars: 9,
  consts: [["current", "Buttons"], [3, "crumbs"], [1, "container"], [1, "block"], [1, "title", "mt-6", "mb-4", "flex", "items-center"], [1, "w-10", "h-10", "rounded-full", "text-primary", "ltr:mr-3", "rtl:ml-3", "flex", "items-center", "justify-center", "bg-primary/10"], ["svgIcon", "mat:settings", 1, "icon-sm"], [1, "flex", "gap-4"], [1, "card", "flex-1"], [1, "px-6", "py-4", "border-b"], [1, "title"], [1, "px-6", "py-4"], [1, "body-2", "text-secondary", "m-0"], [1, "bg-base", "rounded-tr", "rounded-br", "border-l-3", "p-4", "mt-3", "flex", "flex-col", "sm:flex-row", "gap-3", "items-center"], ["color", "primary", "mat-raised-button", "", "type", "button"], ["color", "accent", "mat-raised-button", "", "type", "button"], ["color", "warn", "mat-raised-button", "", "type", "button"], ["disabled", "", "mat-raised-button", "", "type", "button"], ["color", "primary", "mat-stroked-button", "", "type", "button"], ["color", "accent", "mat-stroked-button", "", "type", "button"], ["color", "warn", "mat-stroked-button", "", "type", "button"], ["disabled", "", "mat-stroked-button", "", "type", "button"], ["color", "primary", "mat-button", "", "type", "button"], ["color", "accent", "mat-button", "", "type", "button"], ["color", "warn", "mat-button", "", "type", "button"], ["disabled", "", "mat-button", "", "type", "button"], [1, "body-2", "text-secondary", "mt-8", "mb-0"], [4, "ngFor", "ngForOf"], [1, "title", "m-0"], ["svgIcon", "mat:archive", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2"], ["svgIcon", "mat:archive", 1, "icon-sm", "btn__icon"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full"], ["svgIcon", "mat:grade", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2"], ["color", "primary", "mat-stroked-button", "", "type", "button", 1, "rounded-full"], ["color", "primary", "mat-button", "", "type", "button", 1, "rounded-full"], [1, "bg-base", "rounded-tr", "rounded-br", "border-l-3", "p-4", "mt-3", "flex", "flex-col", "sm:flex-row", "items-center", "gap-3"], ["svgIcon", "mat:favorite", 1, "ltr:-ml-2", "rtl:-mr-2", "ltr:mr-2", "rtl:ml-2"], ["color", "primary", "mat-stroked-button", "", "type", "button", 1, "rounded-full", "py-2", "px-6", "title"], ["svgIcon", "mat:favorite", 1, "ltr:-ml-2", "rtl:-mr-2", "ltr:mr-2", "rtl:ml-2", "!icon-lg"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full", "py-2", "px-6", "title"], ["svgIcon", "mat:favorite", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2"], [1, "bg-base", "rounded-tr", "rounded-br", "border-l-3", "p-4", "pt-1", "flex", "flex-wrap", "items-start", "justify-center", "sm:justify-start", "gap-3"], ["mat-raised-button", "", "type", "button", 1, "bg-facebook", "text-white", "rounded-full", "mt-3"], ["svgIcon", "fa:facebook", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", "icon-sm"], ["mat-raised-button", "", "type", "button", 1, "bg-twitter", "text-white", "rounded-full", "mt-3"], ["svgIcon", "fa:twitter", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", "icon-sm"], ["mat-raised-button", "", "type", "button", 1, "bg-pinterest", "text-white", "rounded-full", "mt-3"], ["svgIcon", "fa:pinterest", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", "icon-sm"], ["mat-raised-button", "", "type", "button", 1, "bg-instagram", "text-white", "rounded-full", "mt-3"], ["svgIcon", "fa:instagram", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", "icon-sm"], ["mat-raised-button", "", "type", "button", 1, "bg-github", "text-white", "rounded-full", "mt-3"], ["svgIcon", "fa:github", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", "icon-sm"], ["mat-raised-button", "", "type", "button", 1, "bg-facebook", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-twitter", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-pinterest", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-instagram", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-github", "text-white", "mt-3"], ["color", "primary", "mat-icon-button", "", "type", "button"], ["svgIcon", "mat:favorite"], ["color", "accent", "mat-icon-button", "", "type", "button"], ["color", "warn", "mat-icon-button", "", "type", "button"], ["color", "primary", "mat-mini-fab", "", "type", "button"], ["color", "accent", "mat-mini-fab", "", "type", "button"], ["color", "warn", "mat-mini-fab", "", "type", "button"], ["color", "primary", "mat-fab", "", "type", "button"], ["color", "accent", "mat-fab", "", "type", "button"], ["color", "warn", "mat-fab", "", "type", "button"], ["mat-raised-button", "", "type", "button", 1, "mt-3", 3, "ngClass"], ["mat-stroked-button", "", "type", "button", 1, "mt-3", 3, "ngClass"], ["mat-button", "", "type", "button", 1, "mt-3", 3, "ngClass"]],
  template: function ComponentsButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-secondary-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "vex-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "vex-page-layout-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "vex-components-overview-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h2", 4)(6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Button Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Button Colors");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 11)(16, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Material Buttons:");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Accent");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Warn");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 13)(28, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Accent");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Warn");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 13)(37, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Accent");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Warn");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Colors:");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, ComponentsButtonsComponent_ng_container_47_Template, 11, 17, "ng-container", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 8)(49, "div", 9)(50, "h2", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Buttons with Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 11)(53, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Default Buttons with Icons:");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 13)(56, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "mat-icon", 29)(58, "mat-icon", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Raised");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "mat-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Stroked");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "mat-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Flat");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Pill Buttons with Icons:");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 13)(72, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "mat-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Raised");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "mat-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Stroked");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "mat-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Flat");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "Size Icons & Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 35)(87, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "mat-icon", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "Raised");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "mat-icon", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "Stroked");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](96, "mat-icon", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Raised");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "mat-icon", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "Flat");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "Social Network pill buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 41)(106, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "mat-icon", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](111, "mat-icon", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](115, "mat-icon", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "Pinterest");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](119, "mat-icon", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](123, "mat-icon", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, "GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "Social Network square buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 41)(129, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](130, "mat-icon", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](134, "mat-icon", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](138, "mat-icon", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "Pinterest");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](142, "mat-icon", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](146, "mat-icon", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](148, "GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "Icon Buttons:");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 35)(152, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](153, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "button", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](155, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "button", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](157, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](159, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](161, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](163, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "FAB Buttons:");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "div", 35)(167, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](168, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "button", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](170, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "button", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](172, "mat-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@stagger", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.colors);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _components_overview_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewButtonsComponent, _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__.PageLayoutComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutContentDirective, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe],
  styles: [".bg-facebook[_ngcontent-%COMP%]:not(:disabled) {\n  background: #3b5998;\n  color: white;\n}\n\n.bg-twitter[_ngcontent-%COMP%]:not(:disabled) {\n  background: #00aced;\n  color: white;\n}\n\n.bg-instagram[_ngcontent-%COMP%]:not(:disabled) {\n  background: #cd486b;\n  color: white;\n}\n\n.bg-pinterest[_ngcontent-%COMP%]:not(:disabled) {\n  background: #C92228;\n  color: white;\n}\n\n.bg-github[_ngcontent-%COMP%]:not(:disabled) {\n  background: #000;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLWJ1dHRvbnMvY29tcG9uZW50cy1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsbUJBUGU7RUFRZixZQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFYYztFQVlkLFlBQUE7QUFORjs7QUFTQTtFQUNFLG1CQWZnQjtFQWdCaEIsWUFBQTtBQU5GOztBQVNBO0VBQ0UsbUJBbkJnQjtFQW9CaEIsWUFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBdkJhO0VBd0JiLFlBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNvY2lhbFxyXG4kY29sb3ItZmFjZWJvb2s6ICMzYjU5OTg7XHJcbiRjb2xvci10d2l0dGVyOiAjMDBhY2VkO1xyXG4kY29sb3ItaW5zdGFncmFtOiAjY2Q0ODZiO1xyXG4kY29sb3ItcGludGVyZXN0OiAjQzkyMjI4O1xyXG4kY29sb3ItZ2l0aHViOiAjMDAwO1xyXG5cclxuLmJnLWZhY2Vib29rOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZmFjZWJvb2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctdHdpdHRlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXR3aXR0ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctaW5zdGFncmFtOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5zdGFncmFtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLXBpbnRlcmVzdDpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXBpbnRlcmVzdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iZy1naXRodWI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1naXRodWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger80ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms]
  }
});


/***/ }),

/***/ 68235:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-buttons/components-buttons.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonsModule": () => (/* binding */ ComponentsButtonsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-buttons-routing.module */ 45052);
/* harmony import */ var _components_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-buttons.component */ 42498);
/* harmony import */ var _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-overview/components/components-overview-buttons/components-overview-buttons.module */ 10419);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);










class ComponentsButtonsModule {}
ComponentsButtonsModule.ɵfac = function ComponentsButtonsModule_Factory(t) {
  return new (t || ComponentsButtonsModule)();
};
ComponentsButtonsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ComponentsButtonsModule
});
ComponentsButtonsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonsRoutingModule, _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewButtonsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComponentsButtonsModule, {
    declarations: [_components_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsButtonsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonsRoutingModule, _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewButtonsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule]
  });
})();

/***/ }),

/***/ 49145:
/*!***********************************!*\
  !*** ./src/static-data/colors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ colors)
/* harmony export */ });
const colors = [{
  label: 'red',
  backgroundColor: '!bg-red',
  backgroundContrastColor: '!text-contrast-white',
  textColor: '!text-red'
}, {
  label: 'green',
  backgroundColor: '!bg-green',
  backgroundContrastColor: '!text-contrast-white',
  textColor: '!text-green'
}, {
  label: 'amber',
  backgroundColor: '!bg-amber',
  backgroundContrastColor: '!text-contrast-black',
  textColor: '!text-amber'
}, {
  label: 'orange',
  backgroundColor: '!bg-orange',
  backgroundContrastColor: '!text-contrast-black',
  textColor: '!text-orange'
}, {
  label: 'deep-orange',
  backgroundColor: '!bg-deep-orange',
  backgroundContrastColor: '!text-contrast-white',
  textColor: '!text-deep-orange'
}, {
  label: 'purple',
  backgroundColor: '!bg-purple',
  backgroundContrastColor: '!text-contrast-white',
  textColor: '!text-purple'
}, {
  label: 'deep-purple',
  backgroundColor: '!bg-deep-purple',
  backgroundContrastColor: '!text-contrast-white',
  textColor: '!text-deep-purple'
}, {
  label: 'cyan',
  backgroundColor: '!bg-cyan',
  backgroundContrastColor: '!text-contrast-black',
  textColor: '!text-cyan'
}, {
  label: 'teal',
  backgroundColor: '!bg-teal',
  backgroundContrastColor: '!text-contrast-white',
  textColor: '!text-teal'
}, {
  label: 'gray',
  backgroundColor: '!bg-gray',
  backgroundContrastColor: '!text-contrast-black',
  textColor: '!text-gray'
}];

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components-buttons_components-buttons_module_ts.js.map