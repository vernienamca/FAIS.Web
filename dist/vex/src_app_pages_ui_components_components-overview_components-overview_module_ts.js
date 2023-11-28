"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-overview_components-overview_module_ts"],{

/***/ 38429:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components-overview-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewRoutingModule": () => (/* binding */ ComponentsOverviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _components_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview.component */ 50013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  component: _components_overview_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewComponent,
  data: {
    toolbarShadowEnabled: true
  }
}];
class ComponentsOverviewRoutingModule {}
ComponentsOverviewRoutingModule.ɵfac = function ComponentsOverviewRoutingModule_Factory(t) {
  return new (t || ComponentsOverviewRoutingModule)();
};
ComponentsOverviewRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewRoutingModule
});
ComponentsOverviewRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsOverviewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 50013:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components-overview.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewComponent": () => (/* binding */ ComponentsOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components-overview-snack-bar/components-overview-snack-bar.component */ 94487);
/* harmony import */ var _components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components-overview-input/components-overview-input.component */ 62334);
/* harmony import */ var _components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components-overview-menu/components-overview-menu.component */ 41851);
/* harmony import */ var _components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components-overview-lists/components-overview-lists.component */ 43356);
/* harmony import */ var _components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components-overview-buttons/components-overview-buttons.component */ 35291);
/* harmony import */ var _components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components-overview-grid-list/components-overview-grid-list.component */ 66489);
/* harmony import */ var _components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components-overview-progress/components-overview-progress.component */ 20220);
/* harmony import */ var _components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components-overview-progress-spinner/components-overview-progress-spinner.component */ 9677);
/* harmony import */ var _components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components-overview-tooltip/components-overview-tooltip.component */ 30597);
/* harmony import */ var _components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components-overview-slider/components-overview-slider.component */ 72745);
/* harmony import */ var _components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components-overview-dialogs/components-overview-dialogs.component */ 7897);
/* harmony import */ var _components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components-overview-checkbox/components-overview-checkbox.component */ 24971);
/* harmony import */ var _components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components-overview-cards/components-overview-cards.component */ 24637);
/* harmony import */ var _components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components-overview-slide-toggle/components-overview-slide-toggle.component */ 41144);
/* harmony import */ var _components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components-overview-autocomplete/components-overview-autocomplete.component */ 43644);
/* harmony import */ var _components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/components-overview-radio/components-overview-radio.component */ 78176);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../@vex/services/layout.service */ 27901);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ 53947);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 16069);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-header.directive */ 27087);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);













































const _c0 = function () {
  return ["Components", "Overview"];
};
class ComponentsOverviewComponent {
  constructor(layoutService, scrollDispatcher, elem) {
    this.layoutService = layoutService;
    this.scrollDispatcher = scrollDispatcher;
    this.elem = elem;
  }
  ngOnInit() {}
  scrollTo(elem) {
    this.scrollDispatcher.getAncestorScrollContainers(this.elem)[0].scrollTo({
      top: this[elem].nativeElement.offsetTop - 24,
      behavior: 'smooth'
    });
  }
}
ComponentsOverviewComponent.ɵfac = function ComponentsOverviewComponent_Factory(t) {
  return new (t || ComponentsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_19__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef));
};
ComponentsOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
  type: ComponentsOverviewComponent,
  selectors: [["vex-components-overview"]],
  viewQuery: function ComponentsOverviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_14__.ComponentsOverviewAutocompleteComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_4__.ComponentsOverviewButtonsComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_12__.ComponentsOverviewCardsComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.ComponentsOverviewCheckboxComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewDialogsComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewGridListComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsOverviewInputComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_3__.ComponentsOverviewListsComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewMenuComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_6__.ComponentsOverviewProgressComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_7__.ComponentsOverviewProgressSpinnerComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_15__.ComponentsOverviewRadioComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewSliderComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_13__.ComponentsOverviewSlideToggleComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSnackBarComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_8__.ComponentsOverviewTooltipComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_24__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.buttons = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.cards = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.dialogs = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.gridList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.lists = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.progress = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.progressSpinner = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.radio = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.slideToggle = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.snackBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    }
  },
  decls: 76,
  vars: 37,
  consts: [["mode", "simple"], [1, "flex", "flex-col", "items-start", "justify-center"], [1, "container"], [1, "title", "mt-0", "mb-1"], [3, "crumbs"], [1, "flex", "items-start", "justify-start", "gap-6", "container"], [1, "sticky", "top-6", "flex", "flex-col", "flex-none", "w-[250px]", "hidden", "sm:block"], [1, "navigation", "flex-1"], ["matSubheader", ""], ["matRipple", "", 1, "cursor-pointer", 3, "click"], ["matLine", ""], [1, "max-w-full", "flex", "flex-col", "gap-6"]],
  template: function ComponentsOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "vex-page-layout", 0)(1, "vex-page-layout-header", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4, "Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "vex-breadcrumbs", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "vex-page-layout-content", 5)(7, "div", 6)(8, "mat-list", 7)(9, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](10, "Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_11_listener() {
        return ctx.scrollTo("autocomplete");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](12, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](13, "Autocomplete");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](14, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_14_listener() {
        return ctx.scrollTo("buttons");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](16, "Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](17, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_17_listener() {
        return ctx.scrollTo("cards");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](18, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](19, "Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](20, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_20_listener() {
        return ctx.scrollTo("checkbox");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](21, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](22, "Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](23, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_23_listener() {
        return ctx.scrollTo("dialogs");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](24, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](25, "Dialog");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](26, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_26_listener() {
        return ctx.scrollTo("gridList");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](27, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](28, "Grid List");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](29, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_29_listener() {
        return ctx.scrollTo("input");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](30, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](31, "Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](32, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_32_listener() {
        return ctx.scrollTo("lists");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](33, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](34, "List");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](35, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_35_listener() {
        return ctx.scrollTo("menu");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](36, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](37, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](38, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_38_listener() {
        return ctx.scrollTo("progress");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](39, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](40, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](41, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_41_listener() {
        return ctx.scrollTo("progressSpinner");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](42, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](43, "Progress Spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](44, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_44_listener() {
        return ctx.scrollTo("radio");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](45, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](46, "Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](47, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_47_listener() {
        return ctx.scrollTo("slider");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](48, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](49, "Slider");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](50, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_50_listener() {
        return ctx.scrollTo("slideToggle");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](51, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](52, "Slide Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](53, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_53_listener() {
        return ctx.scrollTo("snackBar");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](54, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](55, "Snack Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](56, "mat-list-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_56_listener() {
        return ctx.scrollTo("tooltip");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](57, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](58, "Tooltip");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](59, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](60, "vex-components-overview-autocomplete")(61, "vex-components-overview-buttons")(62, "vex-components-overview-cards")(63, "vex-components-overview-checkbox")(64, "vex-components-overview-dialogs")(65, "vex-components-overview-grid-list")(66, "vex-components-overview-input")(67, "vex-components-overview-lists")(68, "vex-components-overview-menu")(69, "vex-components-overview-progress")(70, "vex-components-overview-progress-spinner")(71, "vex-components-overview-radio")(72, "vex-components-overview-slider")(73, "vex-components-overview-slide-toggle")(74, "vex-components-overview-snack-bar")(75, "vex-components-overview-tooltip");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](36, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@stagger", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@stagger", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("@fadeInUp", undefined);
    }
  },
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListSubheaderCssMatStyler, _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_20__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_21__.PageLayoutHeaderDirective, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_22__.PageLayoutContentDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRipple, _components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_14__.ComponentsOverviewAutocompleteComponent, _components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_4__.ComponentsOverviewButtonsComponent, _components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_12__.ComponentsOverviewCardsComponent, _components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.ComponentsOverviewCheckboxComponent, _components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewDialogsComponent, _components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewGridListComponent, _components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsOverviewInputComponent, _components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_3__.ComponentsOverviewListsComponent, _components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewMenuComponent, _components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_6__.ComponentsOverviewProgressComponent, _components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_7__.ComponentsOverviewProgressSpinnerComponent, _components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_15__.ComponentsOverviewRadioComponent, _components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewSliderComponent, _components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_13__.ComponentsOverviewSlideToggleComponent, _components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSnackBarComponent, _components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_8__.ComponentsOverviewTooltipComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_23__.BreadcrumbsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_18__.stagger80ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_16__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__.fadeInUp400ms]
  }
});


/***/ }),

/***/ 66189:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components-overview.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewModule": () => (/* binding */ ComponentsOverviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-routing.module */ 38429);
/* harmony import */ var _components_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-overview.component */ 50013);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 16069);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components-overview-autocomplete/components-overview-autocomplete.module */ 73795);
/* harmony import */ var _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components-overview-buttons/components-overview-buttons.module */ 10419);
/* harmony import */ var _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components-overview-cards/components-overview-cards.module */ 27054);
/* harmony import */ var _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components-overview-checkbox/components-overview-checkbox.module */ 64010);
/* harmony import */ var _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components-overview-dialogs/components-overview-dialogs.module */ 3570);
/* harmony import */ var _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components-overview-grid-list/components-overview-grid-list.module */ 18615);
/* harmony import */ var _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components-overview-input/components-overview-input.module */ 11732);
/* harmony import */ var _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components-overview-lists/components-overview-lists.module */ 750);
/* harmony import */ var _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components-overview-menu/components-overview-menu.module */ 46219);
/* harmony import */ var _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components-overview-progress/components-overview-progress.module */ 58987);
/* harmony import */ var _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components-overview-progress-spinner/components-overview-progress-spinner.module */ 89955);
/* harmony import */ var _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/components-overview-radio/components-overview-radio.module */ 13914);
/* harmony import */ var _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/components-overview-slider/components-overview-slider.module */ 70579);
/* harmony import */ var _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/components-overview-slide-toggle/components-overview-slide-toggle.module */ 73983);
/* harmony import */ var _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/components-overview-snack-bar/components-overview-snack-bar.module */ 52752);
/* harmony import */ var _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/components-overview-tooltip/components-overview-tooltip.module */ 82370);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 86839);

























class ComponentsOverviewModule {}
ComponentsOverviewModule.ɵfac = function ComponentsOverviewModule_Factory(t) {
  return new (t || ComponentsOverviewModule)();
};
ComponentsOverviewModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewModule
});
ComponentsOverviewModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewRoutingModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRippleModule, _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsOverviewAutocompleteModule, _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewButtonsModule, _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsOverviewCardsModule, _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsOverviewCheckboxModule, _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsOverviewDialogsModule, _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewGridListModule, _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewInputModule, _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_11__.ComponentsOverviewListsModule, _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_12__.ComponentsOverviewMenuModule, _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_13__.ComponentsOverviewProgressModule, _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_14__.ComponentsOverviewProgressSpinnerModule, _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_15__.ComponentsOverviewRadioModule, _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_16__.ComponentsOverviewSliderModule, _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_17__.ComponentsOverviewSlideToggleModule, _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_18__.ComponentsOverviewSnackBarModule, _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_19__.ComponentsOverviewTooltipModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](ComponentsOverviewModule, {
    declarations: [_components_overview_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsOverviewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewRoutingModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRippleModule, _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsOverviewAutocompleteModule, _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewButtonsModule, _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsOverviewCardsModule, _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsOverviewCheckboxModule, _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsOverviewDialogsModule, _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewGridListModule, _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewInputModule, _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_11__.ComponentsOverviewListsModule, _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_12__.ComponentsOverviewMenuModule, _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_13__.ComponentsOverviewProgressModule, _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_14__.ComponentsOverviewProgressSpinnerModule, _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_15__.ComponentsOverviewRadioModule, _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_16__.ComponentsOverviewSliderModule, _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_17__.ComponentsOverviewSlideToggleModule, _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_18__.ComponentsOverviewSnackBarModule, _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_19__.ComponentsOverviewTooltipModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components-overview_components-overview_module_ts.js.map