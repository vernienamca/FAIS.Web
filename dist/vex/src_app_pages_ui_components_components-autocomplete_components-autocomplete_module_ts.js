"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-autocomplete_components-autocomplete_module_ts"],{

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

/***/ 38356:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsAutocompleteRoutingModule": () => (/* binding */ ComponentsAutocompleteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _components_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-autocomplete.component */ 1566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  component: _components_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsAutocompleteComponent
}];
class ComponentsAutocompleteRoutingModule {}
ComponentsAutocompleteRoutingModule.ɵfac = function ComponentsAutocompleteRoutingModule_Factory(t) {
  return new (t || ComponentsAutocompleteRoutingModule)();
};
ComponentsAutocompleteRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ComponentsAutocompleteRoutingModule
});
ComponentsAutocompleteRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsAutocompleteRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 1566:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsAutocompleteComponent": () => (/* binding */ ComponentsAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _components_overview_components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components-overview/components/components-overview-autocomplete/components-overview-autocomplete.component */ 43644);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);










const _c0 = function () {
  return ["Components", "Autocomplete"];
};
class ComponentsAutocompleteComponent {
  constructor() {}
  ngOnInit() {}
}
ComponentsAutocompleteComponent.ɵfac = function ComponentsAutocompleteComponent_Factory(t) {
  return new (t || ComponentsAutocompleteComponent)();
};
ComponentsAutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ComponentsAutocompleteComponent,
  selectors: [["vex-components-autocomplete"]],
  decls: 5,
  vars: 4,
  consts: [["current", "Autocomplete"], [3, "crumbs"], [1, "container"], [1, "block"]],
  template: function ComponentsAutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-secondary-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "vex-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "vex-page-layout-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "vex-components-overview-autocomplete", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@stagger", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@fadeInUp", undefined);
    }
  },
  dependencies: [_components_overview_components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__.ComponentsOverviewAutocompleteComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_7__.PageLayoutComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutContentDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__.stagger80ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms]
  }
});


/***/ }),

/***/ 62001:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsAutocompleteModule": () => (/* binding */ ComponentsAutocompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-autocomplete-routing.module */ 38356);
/* harmony import */ var _components_autocomplete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-autocomplete.component */ 1566);
/* harmony import */ var _components_overview_components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module */ 73795);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);








class ComponentsAutocompleteModule {}
ComponentsAutocompleteModule.ɵfac = function ComponentsAutocompleteModule_Factory(t) {
  return new (t || ComponentsAutocompleteModule)();
};
ComponentsAutocompleteModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ComponentsAutocompleteModule
});
ComponentsAutocompleteModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsAutocompleteRoutingModule, _components_overview_components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewAutocompleteModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComponentsAutocompleteModule, {
    declarations: [_components_autocomplete_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsAutocompleteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsAutocompleteRoutingModule, _components_overview_components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewAutocompleteModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components-autocomplete_components-autocomplete_module_ts.js.map