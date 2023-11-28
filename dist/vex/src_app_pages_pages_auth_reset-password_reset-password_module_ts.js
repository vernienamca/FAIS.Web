"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_reset-password_reset-password_module_ts"],{

/***/ 36672:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/pages/auth/reset-password/reset-password-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordRoutingModule": () => (/* binding */ ResetPasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component */ 82224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);



const routes = [{
  path: '',
  component: _reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent
}];
class ResetPasswordRoutingModule {}
ResetPasswordRoutingModule.ɵfac = function ResetPasswordRoutingModule_Factory(t) {
  return new (t || ResetPasswordRoutingModule)();
};
ResetPasswordRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ResetPasswordRoutingModule
});
ResetPasswordRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
})();

/***/ }),

/***/ 82224:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pages/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class ResetPasswordComponent {
  constructor() {
    this.imageUrl = 'assets/img/icons/forgot-password-icons/password.png';
  }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)();
};
ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["vex-reset-password"]],
  decls: 21,
  vars: 1,
  consts: [[1, "logo-container"], ["src", "assets/img/demo/logo.svg", "alt", "Logo"], [1, "rectangle"], [1, "Image-container"], ["alt", "Reset Password", 1, "centered-image", 3, "src"], [1, "text-container"], [1, "password-requirements"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reset-password works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reset your Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Password must be:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "At least 8 characters long");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "At least 1 number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "At least 1 lower case character");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Minimum of 2 special character(s)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 327px;\n  height: 134px;\n  padding: 30px;\n}\n\n.rectangle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 20px;\n  background-color: #043C79;\n  margin-top: 10px;\n}\n\n.Image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100vh;\n  padding: 50px;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.text-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #043C79;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 35px;\n}\n\n.password-requirements[_ngcontent-%COMP%] {\n  list-style-type: disc; \n  margin: 10px 0; \n  padding-left: 20px; \n}\n\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBR0U7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBRko7O0FBT0U7RUFDRSxxQkFBQSxFQUFBLCtCQUFBO0VBQ0EsY0FBQSxFQUFBLDJCQUFBO0VBQ0Esa0JBQUEsRUFBQSxxQ0FBQTtBQUpKOztBQU9FO0VBQ0Usa0JBQUEsRUFBQSxzQ0FBQTtBQUpKIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWNvbnRhaW5lciBpbWcgIHtcclxuICAgIHdpZHRoOiAzMjdweDsgXHJcbiAgICBoZWlnaHQ6IDEzNHB4OyBcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuICAucmVjdGFuZ2xlIHtcclxuXHJcbiAgICBmbGV4LWdyb3c6IDE7IFxyXG4gICAgaGVpZ2h0OiAyMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDNDNzk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxufVxyXG5cclxuLkltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBoZWlnaHQ6IDEwMHZoOyBcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtY29udGFpbmVyIGgyIHtcclxuICAgXHJcbiAgICBjb2xvcjojMDQzQzc5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiAgMzVweDtcclxuICB9XHJcbiBcclxuICBcclxuXHJcbiAgLnBhc3N3b3JkLXJlcXVpcmVtZW50cyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7IC8qIFVzZSBidWxsZXRzIGZvciBsaXN0IGl0ZW1zICovXHJcbiAgICBtYXJnaW46IDEwcHggMDsgLyogQWRkIG1hcmdpbiBmb3Igc3BhY2luZyAqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAvKiBBZGQgbGVmdCBwYWRkaW5nIGZvciBpbmRlbnRhdGlvbiAqL1xyXG4gIH1cclxuXHJcbiAgLnBhc3N3b3JkLXJlcXVpcmVtZW50cyBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIEFkanVzdCBzcGFjaW5nIGJldHdlZW4gbGlzdCBpdGVtcyAqL1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 52148:
/*!**************************************************************************!*\
  !*** ./src/app/pages/pages/auth/reset-password/reset-password.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordModule": () => (/* binding */ ResetPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 36672);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component */ 82224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);




class ResetPasswordModule {}
ResetPasswordModule.ɵfac = function ResetPasswordModule_Factory(t) {
  return new (t || ResetPasswordModule)();
};
ResetPasswordModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ResetPasswordModule
});
ResetPasswordModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResetPasswordModule, {
    declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_auth_reset-password_reset-password_module_ts.js.map