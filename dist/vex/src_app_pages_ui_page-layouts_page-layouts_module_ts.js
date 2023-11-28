"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_page-layouts_module_ts"],{

/***/ 61125:
/*!**********************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutsRoutingModule": () => (/* binding */ PageLayoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: 'blank',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_page-layouts_blank_blank_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blank/blank.module */ 61750)).then(m => m.BlankModule)
}, {
  path: 'simple',
  children: [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple_page-layout-simple_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple/page-layout-simple.module */ 9724)).then(m => m.PageLayoutSimpleModule)
  }, {
    path: 'tabbed',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module */ 82935)).then(m => m.PageLayoutSimpleTabbedModule)
  }, {
    path: 'large-header',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-8440ff")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple-large-header/page-layout-simple-large-header.module */ 20986)).then(m => m.PageLayoutSimpleLargeHeaderModule)
  }, {
    path: 'large-header/tabbed',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header-tabbed_page-layout-simpl-40977d")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module */ 34228)).then(m => m.PageLayoutSimpleLargeHeaderTabbedModule)
  }]
}, {
  path: 'card',
  children: [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card_page-layout-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card/page-layout-card.module */ 91455)).then(m => m.PageLayoutCardModule)
  }, {
    path: 'tabbed',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card-tabbed_page-layout-card-tabbed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card-tabbed/page-layout-card-tabbed.module */ 5684)).then(m => m.PageLayoutCardTabbedModule)
  }, {
    path: 'large-header',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card-large-header_page-layout-card-large-heade-cf176a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card-large-header/page-layout-card-large-header.module */ 86932)).then(m => m.PageLayoutCardLargeHeaderModule)
  }, {
    path: 'large-header/tabbed',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a88a5d"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card-large-header-tabbed_page-layout-card-larg-0c3e5b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module */ 89609)).then(m => m.PageLayoutCardLargeHeaderTabbedModule)
  }]
}];
class PageLayoutsRoutingModule {}
PageLayoutsRoutingModule.ɵfac = function PageLayoutsRoutingModule_Factory(t) {
  return new (t || PageLayoutsRoutingModule)();
};
PageLayoutsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: PageLayoutsRoutingModule
});
PageLayoutsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 68580:
/*!**************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutsModule": () => (/* binding */ PageLayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layouts-routing.module */ 61125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);



class PageLayoutsModule {}
PageLayoutsModule.ɵfac = function PageLayoutsModule_Factory(t) {
  return new (t || PageLayoutsModule)();
};
PageLayoutsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PageLayoutsModule
});
PageLayoutsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutsRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_page-layouts_module_ts.js.map