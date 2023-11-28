"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_login_login_module_ts"],{

/***/ 65739:
/*!****************************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 87071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginRoutingModule {}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};
LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 87071:
/*!***********************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 88511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);


//font awesome icons for login














function LoginComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 23);
  }
}
function LoginComponent_mat_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function LoginComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/forgot-password"];
};
class LoginComponent {
  constructor(router, fb, cd, snackbar) {
    this.router = router;
    this.fb = fb;
    this.cd = cd;
    this.snackbar = snackbar;
    //font awesome icons for logins
    this.icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLock;
    this.icon2 = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser;
    this.inputType = 'password';
    this.visible = false;
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  send() {
    this.router.navigate(['/']);
    this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
      duration: 10000
    });
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["vex-login"]],
  decls: 39,
  vars: 12,
  consts: [[1, "login-container", "w-full", "h-full", "flex", "flex-col", "justify-center"], [1, "ml-12", "mr-12", "flex", "flex-row"], [1, "card", "form", "overflow-hidden", "w-full", "max-w-md"], [1, "p-12", "pb-12", "flex", "flex-col", "items-center", "justify-center"], [1, "fill-current", "text-center"], ["src", "assets/img/demo/logo.svg"], [1, "text-center", "mt-4"], [1, "title", "m-0"], [1, "p-8", "flex", "flex-col", "gap-12", 3, "formGroup"], [1, "flex", "flex-col"], [1, "flex-1"], [2, "color", "#043C79", "padding", "10px", 3, "icon"], ["formControlName", "email", "matInput", "", "required", ""], [4, "ngIf"], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Toggle Visibility", "type", "button", 3, "click"], ["svgIcon", "mat:visibility", 4, "ngIf"], ["svgIcon", "mat:visibility_off", 4, "ngIf"], [1, "flex", "items-center", "justify-between"], [1, "caption", 3, "routerLink"], ["mat-raised-button", "", "type", "button", "color", "primary", 2, "background-color", "#043C79", 3, "click"], [1, "mt-12", "card", "slogan", "overflow-hidden", "w-full", "flex", "items-center", "justify-center", "h-4/6", "hide-on-small-screens"], [1, "title", "text-center"], ["svgIcon", "mat:visibility"], ["svgIcon", "mat:visibility_off"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "LOGIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "mat-form-field", 10)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 10)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
        return ctx.toggleVisibility();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_mat_icon_23_Template, 1, 0, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_mat_icon_24_Template, 1, 0, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Click the eye to toggle visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginComponent_mat_error_27_Template, 2, 0, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18)(29, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
        return ctx.send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21)(34, "div", 22)(35, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Fixed Asset Information System");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\"OWNER OF THE COUNTRY'S TRANSMISSION ASSETS\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icon2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.inputType);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__.QuicklinkDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent],
  styles: [".login-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.login-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('login-bg.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(0.5px); \n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  height: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif; \n  text-align: center;\n  font-weight: 1000;\n  color: #043C79;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 10px;\n}\n\n.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 50px;\n  color: #043C79;\n}\n\n\n.slogan[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px); \n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n@media (max-width: 767px) {\n  .hide-on-small-screens[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBS0U7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQSxFQUFBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLGtDQUFBLEVBQUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBSEo7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQSxnREFBQTtBQUdFO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQSxFQUFBLFNBQUE7RUFDQSwwQ0FBQTtBQVBKOztBQWFBO0VBQ0k7SUFDRSxhQUFBO0VBVko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgXHJcbiAgLmxvZ2luLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC9sb2dpbi1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigwLjVweCk7IC8qIFRvIGJsdXIgYmFja2dyb3VuZCBpbWFnZSAgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgLyogcG9wcGlucyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjMDQzQzc5O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcblxyXG4gIH1cclxuICBcclxuICAudGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiAjMDQzQzc5O1xyXG4gIH1cclxuICBcclxuLyogY2FyZCBzbG9nYW4gRklYRUQgQVNTRVQgSU5GT1JNQVRJT04gU1lTVEVNICAqL1xyXG5cclxuICBcclxuICAuc2xvZ2FuIHtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogYmx1ciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyBcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmhpZGUtb24tc21hbGwtc2NyZWVucyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gLmxvZ2luLWNvbnRhaW5lciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC9sb2dpbi1iZy5qcGdcIik7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ2luLWNvbnRhaW5lciAudGl0bGUge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBjb2xvcjogIzAwMzVhYTtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ2luLWNvbnRhaW5lciBpbWcge1xyXG4vLyAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubG9naW4tY29udGFpbmVyIC5mb3JtIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuLy8gICAgIGhlaWdodDogNTAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtbWRjLXJhaXNlZC1idXR0b24ge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4vLyB9XHJcblxyXG4vLyAubG9naW4tY29udGFpbmVyIC5zbG9nYW4ge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc2xvZ2FuIC50aXRsZSB7XHJcbi8vICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbi8vIH1cclxuXHJcbi8vIC5zbG9nYW4gLnRpdGxlIGgyIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbi8vICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
  },
  changeDetection: 0
});


/***/ }),

/***/ 46759:
/*!********************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 65739);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 87071);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 88511);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);













class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 77200:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INLINE": () => (/* binding */ INLINE),
/* harmony export */   "LAYOUT_VALUES": () => (/* binding */ LAYOUT_VALUES),
/* harmony export */   "applyCssPrefixes": () => (/* binding */ applyCssPrefixes),
/* harmony export */   "buildLayoutCSS": () => (/* binding */ buildLayoutCSS),
/* harmony export */   "extendObject": () => (/* binding */ extendObject),
/* harmony export */   "isFlowHorizontal": () => (/* binding */ isFlowHorizontal),
/* harmony export */   "validateValue": () => (/* binding */ validateValue),
/* harmony export */   "validateWrapValue": () => (/* binding */ validateWrapValue)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 */
function applyCssPrefixes(target) {
  for (let key in target) {
    let value = target[key] ?? '';
    switch (key) {
      case 'display':
        if (value === 'flex') {
          target['display'] = ['-webkit-flex', 'flex'];
        } else if (value === 'inline-flex') {
          target['display'] = ['-webkit-inline-flex', 'inline-flex'];
        } else {
          target['display'] = value;
        }
        break;
      case 'align-items':
      case 'align-self':
      case 'align-content':
      case 'flex':
      case 'flex-basis':
      case 'flex-flow':
      case 'flex-grow':
      case 'flex-shrink':
      case 'flex-wrap':
      case 'justify-content':
        target['-webkit-' + key] = value;
        break;
      case 'flex-direction':
        target['-webkit-flex-direction'] = value;
        target['flex-direction'] = value;
        break;
      case 'order':
        target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
        break;
    }
  }
  return target;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const INLINE = 'inline';
const LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 */
function buildLayoutCSS(value) {
  let [direction, wrap, isInline] = validateValue(value);
  return buildCSS(direction, wrap, isInline);
}
/**
  * Validate the value to be one of the acceptable value options
  * Use default fallback of 'row'
  */
function validateValue(value) {
  value = value?.toLowerCase() ?? '';
  let [direction, wrap, inline] = value.split(' ');
  // First value must be the `flex-direction`
  if (!LAYOUT_VALUES.find(x => x === direction)) {
    direction = LAYOUT_VALUES[0];
  }
  if (wrap === INLINE) {
    wrap = inline !== INLINE ? inline : '';
    inline = INLINE;
  }
  return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 */
function isFlowHorizontal(value) {
  let [flow] = validateValue(value);
  return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 */
function validateWrapValue(value) {
  if (!!value) {
    switch (value.toLowerCase()) {
      case 'reverse':
      case 'wrap-reverse':
      case 'reverse-wrap':
        value = 'wrap-reverse';
        break;
      case 'no':
      case 'none':
      case 'nowrap':
        value = 'nowrap';
        break;
      // All other values fallback to 'wrap'
      default:
        value = 'wrap';
        break;
    }
  }
  return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 */
function buildCSS(direction, wrap = null, inline = false) {
  return {
    display: inline ? 'inline-flex' : 'flex',
    'box-sizing': 'border-box',
    'flex-direction': direction,
    'flex-wrap': wrap || null
  };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
function extendObject(dest, ...sources) {
  if (dest == null) {
    throw TypeError('Cannot convert undefined or null to object');
  }
  for (let source of sources) {
    if (source != null) {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
  }
  return dest;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 44658:
/*!*********************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAKPOINT": () => (/* binding */ BREAKPOINT),
/* harmony export */   "BREAKPOINTS": () => (/* binding */ BREAKPOINTS),
/* harmony export */   "BREAKPOINT_PRINT": () => (/* binding */ BREAKPOINT_PRINT),
/* harmony export */   "BROWSER_PROVIDER": () => (/* binding */ BROWSER_PROVIDER),
/* harmony export */   "BaseDirective2": () => (/* binding */ BaseDirective2),
/* harmony export */   "BreakPointRegistry": () => (/* binding */ BreakPointRegistry),
/* harmony export */   "CLASS_NAME": () => (/* binding */ CLASS_NAME),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "DEFAULT_BREAKPOINTS": () => (/* binding */ DEFAULT_BREAKPOINTS),
/* harmony export */   "DEFAULT_CONFIG": () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   "LAYOUT_CONFIG": () => (/* binding */ LAYOUT_CONFIG),
/* harmony export */   "MediaChange": () => (/* binding */ MediaChange),
/* harmony export */   "MediaMarshaller": () => (/* binding */ MediaMarshaller),
/* harmony export */   "MediaObserver": () => (/* binding */ MediaObserver),
/* harmony export */   "MediaTrigger": () => (/* binding */ MediaTrigger),
/* harmony export */   "ORIENTATION_BREAKPOINTS": () => (/* binding */ ORIENTATION_BREAKPOINTS),
/* harmony export */   "PrintHook": () => (/* binding */ PrintHook),
/* harmony export */   "SERVER_TOKEN": () => (/* binding */ SERVER_TOKEN),
/* harmony export */   "ScreenTypes": () => (/* binding */ ScreenTypes),
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder),
/* harmony export */   "StyleUtils": () => (/* binding */ StyleUtils),
/* harmony export */   "StylesheetMap": () => (/* binding */ StylesheetMap),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "mergeAlias": () => (/* binding */ mergeAlias),
/* harmony export */   "removeStyles": () => (/* binding */ removeStyles),
/* harmony export */   "sortAscendingPriority": () => (/* binding */ sortAscendingPriority),
/* harmony export */   "sortDescendingPriority": () => (/* binding */ sortDescendingPriority),
/* harmony export */   "validateBasis": () => (/* binding */ validateBasis),
/* harmony export */   "ɵMatchMedia": () => (/* binding */ MatchMedia),
/* harmony export */   "ɵMockMatchMedia": () => (/* binding */ MockMatchMedia),
/* harmony export */   "ɵMockMatchMediaProvider": () => (/* binding */ MockMatchMediaProvider),
/* harmony export */   "ɵmultiply": () => (/* binding */ multiply)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 69672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var _angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/_private-utils */ 77200);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 59295);







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 */
function removeStyles(_document, platformId) {
  return () => {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId)) {
      const elements = Array.from(_document.querySelectorAll(`[class*=${CLASS_NAME}]`));
      // RegExp constructor should only be used if passing a variable to the constructor.
      // When using static regular expression it is more performant to use reg exp literal.
      // This is also needed to provide Safari 9 compatibility, please see
      // https://stackoverflow.com/questions/37919802 for more discussion.
      const classRegex = /\bflex-layout-.+?\b/g;
      elements.forEach(el => {
        el.classList.contains(`${CLASS_NAME}ssr`) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
      });
    }
  };
}
/**
 *  Provider to remove SSR styles on the browser
 */
const BROWSER_PROVIDER = {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_BOOTSTRAP_LISTENER,
  useFactory: removeStyles,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID],
  multi: true
};
const CLASS_NAME = 'flex-layout-';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * *****************************************************************
 * Define module for common Angular Layout utilities
 * *****************************************************************
 */
class CoreModule {}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};
CoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [BROWSER_PROVIDER]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [BROWSER_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Class instances emitted [to observers] for each mql notification
 */
class MediaChange {
  /**
   * @param matches whether the mediaQuery is currently activated
   * @param mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
   * @param mqAlias e.g. gt-sm, md, gt-lg
   * @param suffix e.g. GtSM, Md, GtLg
   * @param priority the priority of activation for the given breakpoint
   */
  constructor(matches = false, mediaQuery = 'all', mqAlias = '', suffix = '', priority = 0) {
    this.matches = matches;
    this.mediaQuery = mediaQuery;
    this.mqAlias = mqAlias;
    this.suffix = suffix;
    this.priority = priority;
    this.property = '';
  }
  /** Create an exact copy of the MediaChange */
  clone() {
    return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
class StylesheetMap {
  constructor() {
    this.stylesheet = new Map();
  }
  /**
   * Add an individual style to an HTML element
   */
  addStyleToElement(element, style, value) {
    const stylesheet = this.stylesheet.get(element);
    if (stylesheet) {
      stylesheet.set(style, value);
    } else {
      this.stylesheet.set(element, new Map([[style, value]]));
    }
  }
  /**
   * Clear the virtual stylesheet
   */
  clearStyles() {
    this.stylesheet.clear();
  }
  /**
   * Retrieve a given style for an HTML element
   */
  getStyleForElement(el, styleName) {
    const styles = this.stylesheet.get(el);
    let value = '';
    if (styles) {
      const style = styles.get(styleName);
      if (typeof style === 'number' || typeof style === 'string') {
        value = style + '';
      }
    }
    return value;
  }
}
StylesheetMap.ɵfac = function StylesheetMap_Factory(t) {
  return new (t || StylesheetMap)();
};
StylesheetMap.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StylesheetMap,
  factory: StylesheetMap.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StylesheetMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_CONFIG = {
  addFlexToParent: true,
  addOrientationBps: false,
  disableDefaultBps: false,
  disableVendorPrefixes: false,
  serverLoaded: false,
  useColumnBasisZero: true,
  printWithBreakpoints: [],
  mediaTriggerAutoRestore: true,
  ssrObserveBreakpoints: [],
  // This is disabled by default because otherwise the multiplier would
  // run for all users, regardless of whether they're using this feature.
  // Instead, we disable it by default, which requires this ugly cast.
  multiplier: undefined,
  defaultUnit: 'px',
  detectLayoutDisplay: false
};
const LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Flex Layout token, config options for the library', {
  providedIn: 'root',
  factory: () => DEFAULT_CONFIG
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 */
const SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('FlexLayoutServerLoaded', {
  providedIn: 'root',
  factory: () => false
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Flex Layout token, collect all breakpoints into one provider', {
  providedIn: 'root',
  factory: () => null
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 */
function mergeAlias(dest, source) {
  dest = dest?.clone() ?? new MediaChange();
  if (source) {
    dest.mqAlias = source.alias;
    dest.mediaQuery = source.mediaQuery;
    dest.suffix = source.suffix;
    dest.priority = source.priority;
  }
  return dest;
}

/** A class that encapsulates CSS style generation for common directives */
class StyleBuilder {
  constructor() {
    /** Whether to cache the generated output styles */
    this.shouldCache = true;
  }
  /**
   * Run a side effect computation given the input string and the computed styles
   * from the build task and the host configuration object
   * NOTE: This should be a no-op unless an algorithm is provided in a subclass
   */
  sideEffect(_input, _styles, _parent) {}
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class StyleUtils {
  constructor(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
    this._serverStylesheet = _serverStylesheet;
    this._serverModuleLoaded = _serverModuleLoaded;
    this._platformId = _platformId;
    this.layoutConfig = layoutConfig;
  }
  /**
   * Applies styles given via string pair or object map to the directive element
   */
  applyStyleToElement(element, style, value = null) {
    let styles = {};
    if (typeof style === 'string') {
      styles[style] = value;
      style = styles;
    }
    styles = this.layoutConfig.disableVendorPrefixes ? style : (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.applyCssPrefixes)(style);
    this._applyMultiValueStyleToElement(styles, element);
  }
  /**
   * Applies styles given via string pair or object map to the directive's element
   */
  applyStyleToElements(style, elements = []) {
    const styles = this.layoutConfig.disableVendorPrefixes ? style : (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.applyCssPrefixes)(style);
    elements.forEach(el => {
      this._applyMultiValueStyleToElement(styles, el);
    });
  }
  /**
   * Determine the DOM element's Flexbox flow (flex-direction)
   *
   * Check inline style first then check computed (stylesheet) style
   */
  getFlowDirection(target) {
    const query = 'flex-direction';
    let value = this.lookupStyle(target, query);
    const hasInlineValue = this.lookupInlineStyle(target, query) || (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this._platformId) && this._serverModuleLoaded ? value : '';
    return [value || 'row', hasInlineValue];
  }
  hasWrap(target) {
    const query = 'flex-wrap';
    return this.lookupStyle(target, query) === 'wrap';
  }
  /**
   * Find the DOM element's raw attribute value (if any)
   */
  lookupAttributeValue(element, attribute) {
    return element.getAttribute(attribute) ?? '';
  }
  /**
   * Find the DOM element's inline style value (if any)
   */
  lookupInlineStyle(element, styleName) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) ? element.style.getPropertyValue(styleName) : getServerStyle(element, styleName);
  }
  /**
   * Determine the inline or inherited CSS style
   * NOTE: platform-server has no implementation for getComputedStyle
   */
  lookupStyle(element, styleName, inlineOnly = false) {
    let value = '';
    if (element) {
      let immediateValue = value = this.lookupInlineStyle(element, styleName);
      if (!immediateValue) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId)) {
          if (!inlineOnly) {
            value = getComputedStyle(element).getPropertyValue(styleName);
          }
        } else {
          if (this._serverModuleLoaded) {
            value = this._serverStylesheet.getStyleForElement(element, styleName);
          }
        }
      }
    }
    // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
    //       in which case getComputedStyle() should determine a valid value.
    return value ? value.trim() : '';
  }
  /**
   * Applies the styles to the element. The styles object map may contain an array of values
   * Each value will be added as element style
   * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
   */
  _applyMultiValueStyleToElement(styles, element) {
    Object.keys(styles).sort().forEach(key => {
      const el = styles[key];
      const values = Array.isArray(el) ? el : [el];
      values.sort();
      for (let value of values) {
        value = value ? value + '' : '';
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) || !this._serverModuleLoaded) {
          (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) ? element.style.setProperty(key, value) : setServerStyle(element, key, value);
        } else {
          this._serverStylesheet.addStyleToElement(element, key, value);
        }
      }
    });
  }
}
StyleUtils.ɵfac = function StyleUtils_Factory(t) {
  return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG));
};
StyleUtils.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StyleUtils,
  factory: StyleUtils.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleUtils, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: StylesheetMap
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();
function getServerStyle(element, styleName) {
  const styleMap = readStyleAttribute(element);
  return styleMap[styleName] ?? '';
}
function setServerStyle(element, styleName, styleValue) {
  styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const styleMap = readStyleAttribute(element);
  styleMap[styleName] = styleValue ?? '';
  writeStyleAttribute(element, styleMap);
}
function writeStyleAttribute(element, styleMap) {
  let styleAttrValue = '';
  for (const key in styleMap) {
    const newValue = styleMap[key];
    if (newValue) {
      styleAttrValue += `${key}:${styleMap[key]};`;
    }
  }
  element.setAttribute('style', styleAttrValue);
}
function readStyleAttribute(element) {
  const styleMap = {};
  const styleAttribute = element.getAttribute('style');
  if (styleAttribute) {
    const styleList = styleAttribute.split(/;+/g);
    for (let i = 0; i < styleList.length; i++) {
      const style = styleList[i].trim();
      if (style.length > 0) {
        const colonIndex = style.indexOf(':');
        if (colonIndex === -1) {
          throw new Error(`Invalid CSS style: ${style}`);
        }
        const name = style.substr(0, colonIndex).trim();
        styleMap[name] = style.substr(colonIndex + 1).trim();
      }
    }
  }
  return styleMap;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** HOF to sort the breakpoints by descending priority */
function sortDescendingPriority(a, b) {
  const priorityA = a ? a.priority || 0 : 0;
  const priorityB = b ? b.priority || 0 : 0;
  return priorityB - priorityA;
}
/** HOF to sort the breakpoints by ascending priority */
function sortAscendingPriority(a, b) {
  const pA = a.priority || 0;
  const pB = b.priority || 0;
  return pA - pB;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
class MatchMedia {
  constructor(_zone, _platformId, _document) {
    this._zone = _zone;
    this._platformId = _platformId;
    this._document = _document;
    /** Initialize source with 'all' so all non-responsive APIs trigger style updates */
    this.source = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(new MediaChange(true));
    this.registry = new Map();
    this.pendingRemoveListenerFns = [];
    this._observable$ = this.source.asObservable();
  }
  /**
   * Publish list of all current activations
   */
  get activations() {
    const results = [];
    this.registry.forEach((mql, key) => {
      if (mql.matches) {
        results.push(key);
      }
    });
    return results;
  }
  /**
   * For the specified mediaQuery?
   */
  isActive(mediaQuery) {
    const mql = this.registry.get(mediaQuery);
    return mql?.matches ?? this.registerQuery(mediaQuery).some(m => m.matches);
  }
  /**
   * External observers can watch for all (or a specific) mql changes.
   * Typically used by the MediaQueryAdaptor; optionally available to components
   * who wish to use the MediaMonitor as mediaMonitor$ observable service.
   *
   * Use deferred registration process to register breakpoints only on subscription
   * This logic also enforces logic to register all mediaQueries BEFORE notify
   * subscribers of notifications.
   */
  observe(mqList, filterOthers = false) {
    if (mqList && mqList.length) {
      const matchMedia$ = this._observable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(change => !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1));
      const registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
        const matches = this.registerQuery(mqList);
        if (matches.length) {
          const lastChange = matches.pop();
          matches.forEach(e => {
            observer.next(e);
          });
          this.source.next(lastChange); // last match is cached
        }

        observer.complete();
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(registration$, matchMedia$);
    }
    return this._observable$;
  }
  /**
   * Based on the BreakPointRegistry provider, register internal listeners for each unique
   * mediaQuery. Each listener emits specific MediaChange data to observers
   */
  registerQuery(mediaQuery) {
    const list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
    const matches = [];
    buildQueryCss(list, this._document);
    list.forEach(query => {
      const onMQLEvent = e => {
        this._zone.run(() => this.source.next(new MediaChange(e.matches, query)));
      };
      let mql = this.registry.get(query);
      if (!mql) {
        mql = this.buildMQL(query);
        mql.addListener(onMQLEvent);
        this.pendingRemoveListenerFns.push(() => mql.removeListener(onMQLEvent));
        this.registry.set(query, mql);
      }
      if (mql.matches) {
        matches.push(new MediaChange(true, query));
      }
    });
    return matches;
  }
  ngOnDestroy() {
    let fn;
    while (fn = this.pendingRemoveListenerFns.pop()) {
      fn();
    }
  }
  /**
   * Call window.matchMedia() to build a MediaQueryList; which
   * supports 0..n listeners for activation/deactivation
   */
  buildMQL(query) {
    return constructMql(query, (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId));
  }
}
MatchMedia.ɵfac = function MatchMedia_Factory(t) {
  return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};
MatchMedia.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MatchMedia,
  factory: MatchMedia.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatchMedia, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 */
const ALL_STYLES = {};
/**
 * For Webkit engines that only trigger the MediaQueryList Listener
 * when there is at least one CSS selector for the respective media query.
 *
 * @param mediaQueries
 * @param _document
 */
function buildQueryCss(mediaQueries, _document) {
  const list = mediaQueries.filter(it => !ALL_STYLES[it]);
  if (list.length > 0) {
    const query = list.join(', ');
    try {
      const styleEl = _document.createElement('style');
      styleEl.setAttribute('type', 'text/css');
      if (!styleEl.styleSheet) {
        const cssText = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${query} {.fx-query-test{ }}
`;
        styleEl.appendChild(_document.createTextNode(cssText));
      }
      _document.head.appendChild(styleEl);
      // Store in private global registry
      list.forEach(mq => ALL_STYLES[mq] = styleEl);
    } catch (e) {
      console.error(e);
    }
  }
}
function buildMockMql(query) {
  const et = new EventTarget();
  et.matches = query === 'all' || query === '';
  et.media = query;
  et.addListener = () => {};
  et.removeListener = () => {};
  et.addEventListener = () => {};
  et.dispatchEvent = () => false;
  et.onchange = null;
  return et;
}
function constructMql(query, isBrowser) {
  const canListen = isBrowser && !!window.matchMedia('all').addListener;
  return canListen ? window.matchMedia(query) : buildMockMql(query);
}

/**
 * NOTE: Smaller ranges have HIGHER priority since the match is more specific
 */
const DEFAULT_BREAKPOINTS = [{
  alias: 'xs',
  mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
  priority: 1000
}, {
  alias: 'sm',
  mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)',
  priority: 900
}, {
  alias: 'md',
  mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.98px)',
  priority: 800
}, {
  alias: 'lg',
  mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.98px)',
  priority: 700
}, {
  alias: 'xl',
  mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.98px)',
  priority: 600
}, {
  alias: 'lt-sm',
  overlapping: true,
  mediaQuery: 'screen and (max-width: 599.98px)',
  priority: 950
}, {
  alias: 'lt-md',
  overlapping: true,
  mediaQuery: 'screen and (max-width: 959.98px)',
  priority: 850
}, {
  alias: 'lt-lg',
  overlapping: true,
  mediaQuery: 'screen and (max-width: 1279.98px)',
  priority: 750
}, {
  alias: 'lt-xl',
  overlapping: true,
  priority: 650,
  mediaQuery: 'screen and (max-width: 1919.98px)'
}, {
  alias: 'gt-xs',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 600px)',
  priority: -950
}, {
  alias: 'gt-sm',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 960px)',
  priority: -850
}, {
  alias: 'gt-md',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 1280px)',
  priority: -750
}, {
  alias: 'gt-lg',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 1920px)',
  priority: -650
}];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* tslint:disable */
const HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.98px)';
const HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.98px)';
const TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)';
const TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)';
const WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
const WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
const ScreenTypes = {
  'HANDSET': `${HANDSET_PORTRAIT}, ${HANDSET_LANDSCAPE}`,
  'TABLET': `${TABLET_PORTRAIT} , ${TABLET_LANDSCAPE}`,
  'WEB': `${WEB_PORTRAIT}, ${WEB_LANDSCAPE} `,
  'HANDSET_PORTRAIT': `${HANDSET_PORTRAIT}`,
  'TABLET_PORTRAIT': `${TABLET_PORTRAIT} `,
  'WEB_PORTRAIT': `${WEB_PORTRAIT}`,
  'HANDSET_LANDSCAPE': `${HANDSET_LANDSCAPE}`,
  'TABLET_LANDSCAPE': `${TABLET_LANDSCAPE}`,
  'WEB_LANDSCAPE': `${WEB_LANDSCAPE}`
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 */
const ORIENTATION_BREAKPOINTS = [{
  'alias': 'handset',
  priority: 2000,
  'mediaQuery': ScreenTypes.HANDSET
}, {
  'alias': 'handset.landscape',
  priority: 2000,
  'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
}, {
  'alias': 'handset.portrait',
  priority: 2000,
  'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
}, {
  'alias': 'tablet',
  priority: 2100,
  'mediaQuery': ScreenTypes.TABLET
}, {
  'alias': 'tablet.landscape',
  priority: 2100,
  'mediaQuery': ScreenTypes.TABLET_LANDSCAPE
}, {
  'alias': 'tablet.portrait',
  priority: 2100,
  'mediaQuery': ScreenTypes.TABLET_PORTRAIT
}, {
  'alias': 'web',
  priority: 2200,
  'mediaQuery': ScreenTypes.WEB,
  overlapping: true
}, {
  'alias': 'web.landscape',
  priority: 2200,
  'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
  overlapping: true
}, {
  'alias': 'web.portrait',
  priority: 2200,
  'mediaQuery': ScreenTypes.WEB_PORTRAIT,
  overlapping: true
}];
const ALIAS_DELIMITERS = /(\.|-|_)/g;
function firstUpperCase(part) {
  let first = part.length > 0 ? part.charAt(0) : '';
  let remainder = part.length > 1 ? part.slice(1) : '';
  return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param name Text to UpperCamelCase
 */
function camelCase(name) {
  return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 */
function validateSuffixes(list) {
  list.forEach(bp => {
    if (!bp.suffix) {
      bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
      bp.overlapping = !!bp.overlapping; // ensure default value
    }
  });

  return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 */
function mergeByAlias(defaults, custom = []) {
  const dict = {};
  defaults.forEach(bp => {
    dict[bp.alias] = bp;
  });
  // Merge custom breakpoints
  custom.forEach(bp => {
    if (dict[bp.alias]) {
      (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.extendObject)(dict[bp.alias], bp);
    } else {
      dict[bp.alias] = bp;
    }
  });
  return validateSuffixes(Object.keys(dict).map(k => dict[k]));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */
const BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Token (@angular/flex-layout) Breakpoints', {
  providedIn: 'root',
  factory: () => {
    const breakpoints = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(BREAKPOINT);
    const layoutConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(LAYOUT_CONFIG);
    const bpFlattenArray = [].concat.apply([], (breakpoints || []).map(v => Array.isArray(v) ? v : [v]));
    const builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
    return mergeByAlias(builtIns, bpFlattenArray);
  }
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
class BreakPointRegistry {
  constructor(list) {
    /**
     * Memoized BreakPoint Lookups
     */
    this.findByMap = new Map();
    this.items = [...list].sort(sortAscendingPriority);
  }
  /**
   * Search breakpoints by alias (e.g. gt-xs)
   */
  findByAlias(alias) {
    return !alias ? null : this.findWithPredicate(alias, bp => bp.alias === alias);
  }
  findByQuery(query) {
    return this.findWithPredicate(query, bp => bp.mediaQuery === query);
  }
  /**
   * Get all the breakpoints whose ranges could overlapping `normal` ranges;
   * e.g. gt-sm overlaps md, lg, and xl
   */
  get overlappings() {
    return this.items.filter(it => it.overlapping);
  }
  /**
   * Get list of all registered (non-empty) breakpoint aliases
   */
  get aliases() {
    return this.items.map(it => it.alias);
  }
  /**
   * Aliases are mapped to properties using suffixes
   * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
   * for property layoutGtSM.
   */
  get suffixes() {
    return this.items.map(it => it?.suffix ?? '');
  }
  /**
   * Memoized lookup using custom predicate function
   */
  findWithPredicate(key, searchFn) {
    let response = this.findByMap.get(key);
    if (!response) {
      response = this.items.find(searchFn) ?? null;
      this.findByMap.set(key, response);
    }
    return response ?? null;
  }
}
BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) {
  return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BREAKPOINTS));
};
BreakPointRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BreakPointRegistry,
  factory: BreakPointRegistry.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BreakPointRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [BREAKPOINTS]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const PRINT = 'print';
const BREAKPOINT_PRINT = {
  alias: PRINT,
  mediaQuery: PRINT,
  priority: 1000
};
/**
 * PrintHook - Use to intercept print MediaQuery activations and force
 *             layouts to render with the specified print alias/breakpoint
 *
 * Used in MediaMarshaller and MediaObserver
 */
class PrintHook {
  constructor(breakpoints, layoutConfig, _document) {
    this.breakpoints = breakpoints;
    this.layoutConfig = layoutConfig;
    this._document = _document;
    // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
    //  and `afterprint` event listeners.
    this.registeredBeforeAfterPrintHooks = false;
    // isPrintingBeforeAfterEvent is used to track if we are printing from within
    // a `beforeprint` event handler. This prevents the typical `stopPrinting`
    // form `interceptEvents` so that printing is not stopped while the dialog
    // is still open. This is an extension of the `isPrinting` property on
    // browsers which support `beforeprint` and `afterprint` events.
    this.isPrintingBeforeAfterEvent = false;
    this.beforePrintEventListeners = [];
    this.afterPrintEventListeners = [];
    this.formerActivations = null;
    // Is this service currently in print mode
    this.isPrinting = false;
    this.queue = new PrintQueue();
    this.deactivations = [];
  }
  /** Add 'print' mediaQuery: to listen for matchMedia activations */
  withPrintQuery(queries) {
    return [...queries, PRINT];
  }
  /** Is the MediaChange event for any 'print' @media */
  isPrintEvent(e) {
    return e.mediaQuery.startsWith(PRINT);
  }
  /** What is the desired mqAlias to use while printing? */
  get printAlias() {
    return [...(this.layoutConfig.printWithBreakpoints ?? [])];
  }
  /** Lookup breakpoints associated with print aliases. */
  get printBreakPoints() {
    return this.printAlias.map(alias => this.breakpoints.findByAlias(alias)).filter(bp => bp !== null);
  }
  /** Lookup breakpoint associated with mediaQuery */
  getEventBreakpoints({
    mediaQuery
  }) {
    const bp = this.breakpoints.findByQuery(mediaQuery);
    const list = bp ? [...this.printBreakPoints, bp] : this.printBreakPoints;
    return list.sort(sortDescendingPriority);
  }
  /** Update event with printAlias mediaQuery information */
  updateEvent(event) {
    let bp = this.breakpoints.findByQuery(event.mediaQuery);
    if (this.isPrintEvent(event)) {
      // Reset from 'print' to first (highest priority) print breakpoint
      bp = this.getEventBreakpoints(event)[0];
      event.mediaQuery = bp?.mediaQuery ?? '';
    }
    return mergeAlias(event, bp);
  }
  // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
  // trigger print styles synchronously and apply proper layout styles.
  // It is a noop if the hooks have already been registered or if the document's
  // `defaultView` is not available.
  registerBeforeAfterPrintHooks(target) {
    // `defaultView` may be null when rendering on the server or in other contexts.
    if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
      return;
    }
    this.registeredBeforeAfterPrintHooks = true;
    const beforePrintListener = () => {
      // If we aren't already printing, start printing and update the styles as
      // if there was a regular print `MediaChange`(from matchMedia).
      if (!this.isPrinting) {
        this.isPrintingBeforeAfterEvent = true;
        this.startPrinting(target, this.getEventBreakpoints(new MediaChange(true, PRINT)));
        target.updateStyles();
      }
    };
    const afterPrintListener = () => {
      // If we aren't already printing, start printing and update the styles as
      // if there was a regular print `MediaChange`(from matchMedia).
      this.isPrintingBeforeAfterEvent = false;
      if (this.isPrinting) {
        this.stopPrinting(target);
        target.updateStyles();
      }
    };
    // Could we have teardown logic to remove if there are no print listeners being used?
    this._document.defaultView.addEventListener('beforeprint', beforePrintListener);
    this._document.defaultView.addEventListener('afterprint', afterPrintListener);
    this.beforePrintEventListeners.push(beforePrintListener);
    this.afterPrintEventListeners.push(afterPrintListener);
  }
  /**
   * Prepare RxJS tap operator with partial application
   * @return pipeable tap predicate
   */
  interceptEvents(target) {
    return event => {
      if (this.isPrintEvent(event)) {
        if (event.matches && !this.isPrinting) {
          this.startPrinting(target, this.getEventBreakpoints(event));
          target.updateStyles();
        } else if (!event.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent) {
          this.stopPrinting(target);
          target.updateStyles();
        }
        return;
      }
      this.collectActivations(target, event);
    };
  }
  /** Stop mediaChange event propagation in event streams */
  blockPropagation() {
    return event => {
      return !(this.isPrinting || this.isPrintEvent(event));
    };
  }
  /**
   * Save current activateBreakpoints (for later restore)
   * and substitute only the printAlias breakpoint
   */
  startPrinting(target, bpList) {
    this.isPrinting = true;
    this.formerActivations = target.activatedBreakpoints;
    target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
  }
  /** For any print de-activations, reset the entire print queue */
  stopPrinting(target) {
    target.activatedBreakpoints = this.deactivations;
    this.deactivations = [];
    this.formerActivations = null;
    this.queue.clear();
    this.isPrinting = false;
  }
  /**
   * To restore pre-Print Activations, we must capture the proper
   * list of breakpoint activations BEFORE print starts. OnBeforePrint()
   * is supported; so 'print' mediaQuery activations are used as a fallback
   * in browsers without `beforeprint` support.
   *
   * >  But activated breakpoints are deactivated BEFORE 'print' activation.
   *
   * Let's capture all de-activations using the following logic:
   *
   *  When not printing:
   *    - clear cache when activating non-print breakpoint
   *    - update cache (and sort) when deactivating
   *
   *  When printing:
   *    - sort and save when starting print
   *    - restore as activatedTargets and clear when stop printing
   */
  collectActivations(target, event) {
    if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
      if (!this.isPrintingBeforeAfterEvent) {
        // Only clear deactivations if we aren't printing from a `beforeprint` event.
        // Otherwise, this will clear before `stopPrinting()` is called to restore
        // the pre-Print Activations.
        this.deactivations = [];
        return;
      }
      if (!event.matches) {
        const bp = this.breakpoints.findByQuery(event.mediaQuery);
        // Deactivating a breakpoint
        if (bp) {
          const hasFormerBp = this.formerActivations && this.formerActivations.includes(bp);
          const wasActivated = !this.formerActivations && target.activatedBreakpoints.includes(bp);
          const shouldDeactivate = hasFormerBp || wasActivated;
          if (shouldDeactivate) {
            this.deactivations.push(bp);
            this.deactivations.sort(sortDescendingPriority);
          }
        }
      }
    }
  }
  /** Teardown logic for the service. */
  ngOnDestroy() {
    if (this._document.defaultView) {
      this.beforePrintEventListeners.forEach(l => this._document.defaultView.removeEventListener('beforeprint', l));
      this.afterPrintEventListeners.forEach(l => this._document.defaultView.removeEventListener('afterprint', l));
    }
  }
}
PrintHook.ɵfac = function PrintHook_Factory(t) {
  return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};
PrintHook.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PrintHook,
  factory: PrintHook.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintHook, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BreakPointRegistry
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LAYOUT_CONFIG]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
// ************************************************************************
// Internal Utility class 'PrintQueue'
// ************************************************************************
/**
 * Utility class to manage print breakpoints + activatedBreakpoints
 * with correct sorting WHILE printing
 */
class PrintQueue {
  constructor() {
    /** Sorted queue with prioritized print breakpoints */
    this.printBreakpoints = [];
  }
  addPrintBreakpoints(bpList) {
    bpList.push(BREAKPOINT_PRINT);
    bpList.sort(sortDescendingPriority);
    bpList.forEach(bp => this.addBreakpoint(bp));
    return this.printBreakpoints;
  }
  /** Add Print breakpoint to queue */
  addBreakpoint(bp) {
    if (!!bp) {
      const bpInList = this.printBreakpoints.find(it => it.mediaQuery === bp.mediaQuery);
      if (bpInList === undefined) {
        // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
        // register as highest priority in the queue
        this.printBreakpoints = isPrintBreakPoint(bp) ? [bp, ...this.printBreakpoints] : [...this.printBreakpoints, bp];
      }
    }
  }
  /** Restore original activated breakpoints and clear internal caches */
  clear() {
    this.printBreakpoints = [];
  }
}
// ************************************************************************
// Internal Utility methods
// ************************************************************************
/** Only support intercept queueing if the Breakpoint is a print @media query */
function isPrintBreakPoint(bp) {
  return bp?.mediaQuery.startsWith(PRINT) ?? false;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * MediaMarshaller - register responsive values from directives and
 *                   trigger them based on media query events
 */
class MediaMarshaller {
  constructor(matchMedia, breakpoints, hook) {
    this.matchMedia = matchMedia;
    this.breakpoints = breakpoints;
    this.hook = hook;
    this._useFallbacks = true;
    this._activatedBreakpoints = [];
    this.elementMap = new Map();
    this.elementKeyMap = new WeakMap();
    this.watcherMap = new WeakMap(); // special triggers to update elements
    this.updateMap = new WeakMap(); // callback functions to update styles
    this.clearMap = new WeakMap(); // callback functions to clear styles
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.observeActivations();
  }
  get activatedAlias() {
    return this.activatedBreakpoints[0]?.alias ?? '';
  }
  set activatedBreakpoints(bps) {
    this._activatedBreakpoints = [...bps];
  }
  get activatedBreakpoints() {
    return [...this._activatedBreakpoints];
  }
  set useFallbacks(value) {
    this._useFallbacks = value;
  }
  /**
   * Update styles on breakpoint activates or deactivates
   * @param mc
   */
  onMediaChange(mc) {
    const bp = this.findByQuery(mc.mediaQuery);
    if (bp) {
      mc = mergeAlias(mc, bp);
      const bpIndex = this.activatedBreakpoints.indexOf(bp);
      if (mc.matches && bpIndex === -1) {
        this._activatedBreakpoints.push(bp);
        this._activatedBreakpoints.sort(sortDescendingPriority);
        this.updateStyles();
      } else if (!mc.matches && bpIndex !== -1) {
        // Remove the breakpoint when it's deactivated
        this._activatedBreakpoints.splice(bpIndex, 1);
        this._activatedBreakpoints.sort(sortDescendingPriority);
        this.updateStyles();
      }
    }
  }
  /**
   * initialize the marshaller with necessary elements for delegation on an element
   * @param element
   * @param key
   * @param updateFn optional callback so that custom bp directives don't have to re-provide this
   * @param clearFn optional callback so that custom bp directives don't have to re-provide this
   * @param extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
   */
  init(element, key, updateFn, clearFn, extraTriggers = []) {
    initBuilderMap(this.updateMap, element, key, updateFn);
    initBuilderMap(this.clearMap, element, key, clearFn);
    this.buildElementKeyMap(element, key);
    this.watchExtraTriggers(element, key, extraTriggers);
  }
  /**
   * get the value for an element and key and optionally a given breakpoint
   * @param element
   * @param key
   * @param bp
   */
  getValue(element, key, bp) {
    const bpMap = this.elementMap.get(element);
    if (bpMap) {
      const values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);
      if (values) {
        return values.get(key);
      }
    }
    return undefined;
  }
  /**
   * whether the element has values for a given key
   * @param element
   * @param key
   */
  hasValue(element, key) {
    const bpMap = this.elementMap.get(element);
    if (bpMap) {
      const values = this.getActivatedValues(bpMap, key);
      if (values) {
        return values.get(key) !== undefined || false;
      }
    }
    return false;
  }
  /**
   * Set the value for an input on a directive
   * @param element the element in question
   * @param key the type of the directive (e.g. flex, layout-gap, etc)
   * @param bp the breakpoint suffix (empty string = default)
   * @param val the value for the breakpoint
   */
  setValue(element, key, val, bp) {
    let bpMap = this.elementMap.get(element);
    if (!bpMap) {
      bpMap = new Map().set(bp, new Map().set(key, val));
      this.elementMap.set(element, bpMap);
    } else {
      const values = (bpMap.get(bp) ?? new Map()).set(key, val);
      bpMap.set(bp, values);
      this.elementMap.set(element, bpMap);
    }
    const value = this.getValue(element, key);
    if (value !== undefined) {
      this.updateElement(element, key, value);
    }
  }
  /** Track element value changes for a specific key */
  trackValue(element, key) {
    return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(v => v.element === element && v.key === key));
  }
  /** update all styles for all elements on the current breakpoint */
  updateStyles() {
    this.elementMap.forEach((bpMap, el) => {
      const keyMap = new Set(this.elementKeyMap.get(el));
      let valueMap = this.getActivatedValues(bpMap);
      if (valueMap) {
        valueMap.forEach((v, k) => {
          this.updateElement(el, k, v);
          keyMap.delete(k);
        });
      }
      keyMap.forEach(k => {
        valueMap = this.getActivatedValues(bpMap, k);
        if (valueMap) {
          const value = valueMap.get(k);
          this.updateElement(el, k, value);
        } else {
          this.clearElement(el, k);
        }
      });
    });
  }
  /**
   * clear the styles for a given element
   * @param element
   * @param key
   */
  clearElement(element, key) {
    const builders = this.clearMap.get(element);
    if (builders) {
      const clearFn = builders.get(key);
      if (!!clearFn) {
        clearFn();
        this.subject.next({
          element,
          key,
          value: ''
        });
      }
    }
  }
  /**
   * update a given element with the activated values for a given key
   * @param element
   * @param key
   * @param value
   */
  updateElement(element, key, value) {
    const builders = this.updateMap.get(element);
    if (builders) {
      const updateFn = builders.get(key);
      if (!!updateFn) {
        updateFn(value);
        this.subject.next({
          element,
          key,
          value
        });
      }
    }
  }
  /**
   * release all references to a given element
   * @param element
   */
  releaseElement(element) {
    const watcherMap = this.watcherMap.get(element);
    if (watcherMap) {
      watcherMap.forEach(s => s.unsubscribe());
      this.watcherMap.delete(element);
    }
    const elementMap = this.elementMap.get(element);
    if (elementMap) {
      elementMap.forEach((_, s) => elementMap.delete(s));
      this.elementMap.delete(element);
    }
  }
  /**
   * trigger an update for a given element and key (e.g. layout)
   * @param element
   * @param key
   */
  triggerUpdate(element, key) {
    const bpMap = this.elementMap.get(element);
    if (bpMap) {
      const valueMap = this.getActivatedValues(bpMap, key);
      if (valueMap) {
        if (key) {
          this.updateElement(element, key, valueMap.get(key));
        } else {
          valueMap.forEach((v, k) => this.updateElement(element, k, v));
        }
      }
    }
  }
  /** Cross-reference for HTMLElement with directive key */
  buildElementKeyMap(element, key) {
    let keyMap = this.elementKeyMap.get(element);
    if (!keyMap) {
      keyMap = new Set();
      this.elementKeyMap.set(element, keyMap);
    }
    keyMap.add(key);
  }
  /**
   * Other triggers that should force style updates:
   * - directionality
   * - layout changes
   * - mutationobserver updates
   */
  watchExtraTriggers(element, key, triggers) {
    if (triggers && triggers.length) {
      let watchers = this.watcherMap.get(element);
      if (!watchers) {
        watchers = new Map();
        this.watcherMap.set(element, watchers);
      }
      const subscription = watchers.get(key);
      if (!subscription) {
        const newSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(...triggers).subscribe(() => {
          const currentValue = this.getValue(element, key);
          this.updateElement(element, key, currentValue);
        });
        watchers.set(key, newSubscription);
      }
    }
  }
  /** Breakpoint locator by mediaQuery */
  findByQuery(query) {
    return this.breakpoints.findByQuery(query);
  }
  /**
   * get the fallback breakpoint for a given element, starting with the current breakpoint
   * @param bpMap
   * @param key
   */
  getActivatedValues(bpMap, key) {
    for (let i = 0; i < this.activatedBreakpoints.length; i++) {
      const activatedBp = this.activatedBreakpoints[i];
      const valueMap = bpMap.get(activatedBp.alias);
      if (valueMap) {
        if (key === undefined || valueMap.has(key) && valueMap.get(key) != null) {
          return valueMap;
        }
      }
    }
    // On the server, we explicitly have an "all" section filled in to begin with.
    // So we don't need to aggressively find a fallback if no explicit value exists.
    if (!this._useFallbacks) {
      return undefined;
    }
    const lastHope = bpMap.get('');
    return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
  }
  /**
   * Watch for mediaQuery breakpoint activations
   */
  observeActivations() {
    const queries = this.breakpoints.items.map(bp => bp.mediaQuery);
    this.hook.registerBeforeAfterPrintHooks(this);
    this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(this.hook.interceptEvents(this)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
  }
}
MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) {
  return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PrintHook));
};
MediaMarshaller.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaMarshaller,
  factory: MediaMarshaller.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaMarshaller, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MatchMedia
    }, {
      type: BreakPointRegistry
    }, {
      type: PrintHook
    }];
  }, null);
})();
function initBuilderMap(map, element, key, input) {
  if (input !== undefined) {
    const oldMap = map.get(element) ?? new Map();
    oldMap.set(key, input);
    map.set(element, oldMap);
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    this.elementRef = elementRef;
    this.styleBuilder = styleBuilder;
    this.styler = styler;
    this.marshal = marshal;
    this.DIRECTIVE_KEY = '';
    this.inputs = [];
    /** The most recently used styles for the builder */
    this.mru = {};
    this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Cache map for style computation */
    this.styleCache = new Map();
  }
  /** Access to host element's parent DOM node */
  get parentElement() {
    return this.elementRef.nativeElement.parentElement;
  }
  /** Access to the HTMLElement for the directive */
  get nativeElement() {
    return this.elementRef.nativeElement;
  }
  /** Access to the activated value for the directive */
  get activatedValue() {
    return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
  }
  set activatedValue(value) {
    this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
  }
  /** For @Input changes */
  ngOnChanges(changes) {
    Object.keys(changes).forEach(key => {
      if (this.inputs.indexOf(key) !== -1) {
        const bp = key.split('.').slice(1).join('.');
        const val = changes[key].currentValue;
        this.setValue(val, bp);
      }
    });
  }
  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
    this.marshal.releaseElement(this.nativeElement);
  }
  /** Register with central marshaller service */
  init(extraTriggers = []) {
    this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
  }
  /** Add styles to the element using predefined style builder */
  addStyles(input, parent) {
    const builder = this.styleBuilder;
    const useCache = builder.shouldCache;
    let genStyles = this.styleCache.get(input);
    if (!genStyles || !useCache) {
      genStyles = builder.buildStyles(input, parent);
      if (useCache) {
        this.styleCache.set(input, genStyles);
      }
    }
    this.mru = {
      ...genStyles
    };
    this.applyStyleToElement(genStyles);
    builder.sideEffect(input, genStyles, parent);
  }
  /** Remove generated styles from an element using predefined style builder */
  clearStyles() {
    Object.keys(this.mru).forEach(k => {
      this.mru[k] = '';
    });
    this.applyStyleToElement(this.mru);
    this.mru = {};
    this.currentValue = undefined;
  }
  /** Force trigger style updates on DOM element */
  triggerUpdate() {
    this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
  }
  /**
   * Determine the DOM element's Flexbox flow (flex-direction).
   *
   * Check inline style first then check computed (stylesheet) style.
   * And optionally add the flow value to element's inline style.
   */
  getFlexFlowDirection(target, addIfMissing = false) {
    if (target) {
      const [value, hasInlineValue] = this.styler.getFlowDirection(target);
      if (!hasInlineValue && addIfMissing) {
        const style = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.buildLayoutCSS)(value);
        const elements = [target];
        this.styler.applyStyleToElements(style, elements);
      }
      return value.trim();
    }
    return 'row';
  }
  hasWrap(target) {
    return this.styler.hasWrap(target);
  }
  /** Applies styles given via string pair or object map to the directive element */
  applyStyleToElement(style, value, element = this.nativeElement) {
    this.styler.applyStyleToElement(element, style, value);
  }
  setValue(val, bp) {
    this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
  }
  updateWithValue(input) {
    if (this.currentValue !== input) {
      this.addStyles(input);
      this.currentValue = input;
    }
  }
}
BaseDirective2.ɵfac = function BaseDirective2_Factory(t) {
  return new (t || BaseDirective2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MediaMarshaller));
};
BaseDirective2.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: BaseDirective2,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseDirective2, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: StyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
class MockMatchMedia extends MatchMedia {
  constructor(_zone, _platformId, _document, _breakpoints) {
    super(_zone, _platformId, _document);
    this._breakpoints = _breakpoints;
    this.autoRegisterQueries = true; // Used for testing BreakPoint registrations
    this.useOverlaps = false; // Allow fallback to overlapping mediaQueries
  }
  /** Easy method to clear all listeners for all mediaQueries */
  clearAll() {
    this.registry.forEach(mql => {
      mql.destroy();
    });
    this.registry.clear();
    this.useOverlaps = false;
  }
  /** Feature to support manual, simulated activation of a mediaQuery. */
  activate(mediaQuery, useOverlaps = this.useOverlaps) {
    mediaQuery = this._validateQuery(mediaQuery);
    if (useOverlaps || !this.isActive(mediaQuery)) {
      this._deactivateAll();
      this._registerMediaQuery(mediaQuery);
      this._activateWithOverlaps(mediaQuery, useOverlaps);
    }
    return this.hasActivated;
  }
  /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
  _validateQuery(queryOrAlias) {
    const bp = this._breakpoints.findByAlias(queryOrAlias);
    return bp?.mediaQuery ?? queryOrAlias;
  }
  /**
   * Manually onMediaChange any overlapping mediaQueries to simulate
   * similar functionality in the window.matchMedia()
   */
  _activateWithOverlaps(mediaQuery, useOverlaps) {
    if (useOverlaps) {
      const bp = this._breakpoints.findByQuery(mediaQuery);
      const alias = bp?.alias ?? 'unknown';
      // Simulate activation of overlapping lt-<XXX> ranges
      switch (alias) {
        case 'lg':
          this._activateByAlias(['lt-xl']);
          break;
        case 'md':
          this._activateByAlias(['lt-xl', 'lt-lg']);
          break;
        case 'sm':
          this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md']);
          break;
        case 'xs':
          this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md', 'lt-sm']);
          break;
      }
      // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges
      switch (alias) {
        case 'xl':
          this._activateByAlias(['gt-lg', 'gt-md', 'gt-sm', 'gt-xs']);
          break;
        case 'lg':
          this._activateByAlias(['gt-md', 'gt-sm', 'gt-xs']);
          break;
        case 'md':
          this._activateByAlias(['gt-sm', 'gt-xs']);
          break;
        case 'sm':
          this._activateByAlias(['gt-xs']);
          break;
      }
    }
    // Activate last since the responsiveActivation is watching *this* mediaQuery
    return this._activateByQuery(mediaQuery);
  }
  /**
   *
   */
  _activateByAlias(aliases) {
    const activate = alias => {
      const bp = this._breakpoints.findByAlias(alias);
      this._activateByQuery(bp?.mediaQuery ?? alias);
    };
    aliases.forEach(activate);
  }
  /**
   *
   */
  _activateByQuery(mediaQuery) {
    if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
      this._registerMediaQuery(mediaQuery);
    }
    const mql = this.registry.get(mediaQuery);
    if (mql && !this.isActive(mediaQuery)) {
      this.registry.set(mediaQuery, mql.activate());
    }
    return this.hasActivated;
  }
  /** Deactivate all current MQLs and reset the buffer */
  _deactivateAll() {
    this.registry.forEach(it => {
      it.deactivate();
    });
    return this;
  }
  /** Insure the mediaQuery is registered with MatchMedia */
  _registerMediaQuery(mediaQuery) {
    if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
      this.registerQuery(mediaQuery);
    }
  }
  /**
   * Call window.matchMedia() to build a MediaQueryList; which
   * supports 0..n listeners for activation/deactivation
   */
  buildMQL(query) {
    return new MockMediaQueryList(query);
  }
  get hasActivated() {
    return this.activations.length > 0;
  }
}
MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) {
  return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry));
};
MockMatchMedia.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MockMatchMedia,
  factory: MockMatchMedia.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MockMatchMedia, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }, {
      type: BreakPointRegistry
    }];
  }, null);
})();
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class MockMediaQueryList extends EventTarget {
  constructor(_mediaQuery) {
    super();
    this._mediaQuery = _mediaQuery;
    this._isActive = false;
    this._listeners = [];
    this.onchange = null;
  }
  get matches() {
    return this._isActive;
  }
  get media() {
    return this._mediaQuery;
  }
  /**
   * Destroy the current list by deactivating the
   * listeners and clearing the internal list
   */
  destroy() {
    this.deactivate();
    this._listeners = [];
  }
  /** Notify all listeners that 'matches === TRUE' */
  activate() {
    if (!this._isActive) {
      this._isActive = true;
      this._listeners.forEach(callback => {
        const cb = callback;
        cb.call(this, {
          matches: this.matches,
          media: this.media
        });
      });
    }
    return this;
  }
  /** Notify all listeners that 'matches === false' */
  deactivate() {
    if (this._isActive) {
      this._isActive = false;
      this._listeners.forEach(callback => {
        const cb = callback;
        cb.call(this, {
          matches: this.matches,
          media: this.media
        });
      });
    }
    return this;
  }
  /** Add a listener to our internal list to activate later */
  addListener(listener) {
    if (this._listeners.indexOf(listener) === -1) {
      this._listeners.push(listener);
    }
    if (this._isActive) {
      const cb = listener;
      cb.call(this, {
        matches: this.matches,
        media: this.media
      });
    }
  }
  /** Don't need to remove listeners in the testing environment */
  removeListener(_) {}
  dispatchEvent(_) {
    return false;
  }
}
/**
 * Pre-configured provider for MockMatchMedia
 */
const MockMatchMediaProvider = {
  provide: MatchMedia,
  useClass: MockMatchMedia
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Wraps the provided value in an array, unless the provided value is an array. */
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
 * if a mediaQuery is currently activated.
 *
 * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
 * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
 * in 1 event notification. The reported activations will be sorted in descending priority order.
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * Note: Developers should note that only mediaChange activations (not de-activations)
 *       are announced by the MediaObserver.
 *
 *  @usage
 *
 *  // RxJS
 *  import { filter } from 'rxjs/operators';
 *  import { MediaObserver } from '@angular/flex-layout';
 *
 *  @Component({ ... })
 *  export class AppComponent {
 *    status: string = '';
 *
 *    constructor(mediaObserver: MediaObserver) {
 *      const media$ = mediaObserver.asObservable().pipe(
 *        filter((changes: MediaChange[]) => true)   // silly noop filter
 *      );
 *
 *      media$.subscribe((changes: MediaChange[]) => {
 *        let status = '';
 *        changes.forEach( change => {
 *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
 *        });
 *        this.status = status;
 *     });
 *
 *    }
 *  }
 */
class MediaObserver {
  constructor(breakpoints, matchMedia, hook) {
    this.breakpoints = breakpoints;
    this.matchMedia = matchMedia;
    this.hook = hook;
    /** Filter MediaChange notifications for overlapping breakpoints */
    this.filterOverlaps = false;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._media$ = this.watchActivations();
  }
  /**
   * Completes the active subject, signalling to all complete for all
   * MediaObserver subscribers
   */
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  // ************************************************
  // Public Methods
  // ************************************************
  /**
   * Observe changes to current activation 'list'
   */
  asObservable() {
    return this._media$;
  }
  /**
   * Allow programmatic query to determine if one or more media query/alias match
   * the current viewport size.
   * @param value One or more media queries (or aliases) to check.
   * @returns Whether any of the media queries match.
   */
  isActive(value) {
    const aliases = splitQueries(coerceArray(value));
    return aliases.some(alias => {
      const query = toMediaQuery(alias, this.breakpoints);
      return query !== null && this.matchMedia.isActive(query);
    });
  }
  // ************************************************
  // Internal Methods
  // ************************************************
  /**
   * Register all the mediaQueries registered in the BreakPointRegistry
   * This is needed so subscribers can be auto-notified of all standard, registered
   * mediaQuery activations
   */
  watchActivations() {
    const queries = this.breakpoints.items.map(bp => bp.mediaQuery);
    return this.buildObservable(queries);
  }
  /**
   * Only pass/announce activations (not de-activations)
   *
   * Since multiple-mediaQueries can be activation in a cycle,
   * gather all current activations into a single list of changes to observers
   *
   * Inject associated (if any) alias information into the MediaChange event
   * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
   * - Exclude print activations that do not have an associated mediaQuery
   *
   * NOTE: the raw MediaChange events [from MatchMedia] do not
   *       contain important alias information; as such this info
   *       must be injected into the MediaChange
   */
  buildObservable(mqList) {
    const hasChanges = changes => {
      const isValidQuery = change => change.mediaQuery.length > 0;
      return changes.filter(isValidQuery).length > 0;
    };
    const excludeOverlaps = changes => {
      return !this.filterOverlaps ? changes : changes.filter(change => {
        const bp = this.breakpoints.findByQuery(change.mediaQuery);
        return bp?.overlapping ?? true;
      });
    };
    const ignoreDuplicates = (previous, current) => {
      if (previous.length !== current.length) {
        return false;
      }
      const previousMqs = previous.map(mc => mc.mediaQuery);
      const currentMqs = new Set(current.map(mc => mc.mediaQuery));
      const difference = new Set(previousMqs.filter(mq => !currentMqs.has(mq)));
      return difference.size === 0;
    };
    /**
     */
    return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(change => change.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(0, rxjs__WEBPACK_IMPORTED_MODULE_10__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.findAllActivations())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(excludeOverlaps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(hasChanges), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(ignoreDuplicates), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroyed$));
  }
  /**
   * Find all current activations and prepare single list of activations
   * sorted by descending priority.
   */
  findAllActivations() {
    const mergeMQAlias = change => {
      const bp = this.breakpoints.findByQuery(change.mediaQuery);
      return mergeAlias(change, bp);
    };
    const replaceWithPrintAlias = change => this.hook.isPrintEvent(change) ? this.hook.updateEvent(change) : change;
    return this.matchMedia.activations.map(query => new MediaChange(true, query)).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
  }
}
MediaObserver.ɵfac = function MediaObserver_Factory(t) {
  return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PrintHook));
};
MediaObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaObserver,
  factory: MediaObserver.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BreakPointRegistry
    }, {
      type: MatchMedia
    }, {
      type: PrintHook
    }];
  }, null);
})();
/**
 * Find associated breakpoint (if any)
 */
function toMediaQuery(query, locator) {
  const bp = locator.findByAlias(query) ?? locator.findByQuery(query);
  return bp?.mediaQuery ?? null;
}
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
  return queries.flatMap(query => query.split(',')).map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class
 */
class MediaTrigger {
  constructor(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
    this.breakpoints = breakpoints;
    this.matchMedia = matchMedia;
    this.layoutConfig = layoutConfig;
    this._platformId = _platformId;
    this._document = _document;
    this.hasCachedRegistryMatches = false;
    this.originalActivations = [];
    this.originalRegistry = new Map();
  }
  /**
   * Manually activate range of breakpoints
   * @param list array of mediaQuery or alias strings
   */
  activate(list) {
    list = list.map(it => it.trim()); // trim queries
    this.saveActivations();
    this.deactivateAll();
    this.setActivations(list);
    this.prepareAutoRestore();
  }
  /**
   * Restore original, 'real' breakpoints and emit events
   * to trigger stream notification
   */
  restore() {
    if (this.hasCachedRegistryMatches) {
      const extractQuery = change => change.mediaQuery;
      const list = this.originalActivations.map(extractQuery);
      try {
        this.deactivateAll();
        this.restoreRegistryMatches();
        this.setActivations(list);
      } finally {
        this.originalActivations = [];
        if (this.resizeSubscription) {
          this.resizeSubscription.unsubscribe();
        }
      }
    }
  }
  // ************************************************
  // Internal Methods
  // ************************************************
  /**
   * Whenever window resizes, immediately auto-restore original
   * activations (if we are simulating activations)
   */
  prepareAutoRestore() {
    const isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) && this._document;
    const enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;
    if (enableAutoRestore) {
      const resize$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1));
      this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
    }
  }
  /**
   * Notify all matchMedia subscribers of de-activations
   *
   * Note: we must force 'matches' updates for
   *       future matchMedia::activation lookups
   */
  deactivateAll() {
    const list = this.currentActivations;
    this.forceRegistryMatches(list, false);
    this.simulateMediaChanges(list, false);
  }
  /**
   * Cache current activations as sorted, prioritized list of MediaChanges
   */
  saveActivations() {
    if (!this.hasCachedRegistryMatches) {
      const toMediaChange = query => new MediaChange(true, query);
      const mergeMQAlias = change => {
        const bp = this.breakpoints.findByQuery(change.mediaQuery);
        return mergeAlias(change, bp);
      };
      this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
      this.cacheRegistryMatches();
    }
  }
  /**
   * Force set manual activations for specified mediaQuery list
   */
  setActivations(list) {
    if (!!this.originalRegistry) {
      this.forceRegistryMatches(list, true);
    }
    this.simulateMediaChanges(list);
  }
  /**
   * For specified mediaQuery list manually simulate activations or deactivations
   */
  simulateMediaChanges(queries, matches = true) {
    const toMediaQuery = query => {
      const locator = this.breakpoints;
      const bp = locator.findByAlias(query) || locator.findByQuery(query);
      return bp ? bp.mediaQuery : query;
    };
    const emitChangeEvent = query => this.emitChangeEvent(matches, query);
    queries.map(toMediaQuery).forEach(emitChangeEvent);
  }
  /**
   * Replace current registry with simulated registry...
   * Note: this is required since MediaQueryList::matches is 'readOnly'
   */
  forceRegistryMatches(queries, matches) {
    const registry = new Map();
    queries.forEach(query => {
      registry.set(query, {
        matches
      });
    });
    this.matchMedia.registry = registry;
  }
  /**
   * Save current MatchMedia::registry items.
   */
  cacheRegistryMatches() {
    const target = this.originalRegistry;
    target.clear();
    this.matchMedia.registry.forEach((value, key) => {
      target.set(key, value);
    });
    this.hasCachedRegistryMatches = true;
  }
  /**
   * Restore original, 'true' registry
   */
  restoreRegistryMatches() {
    const target = this.matchMedia.registry;
    target.clear();
    this.originalRegistry.forEach((value, key) => {
      target.set(key, value);
    });
    this.originalRegistry.clear();
    this.hasCachedRegistryMatches = false;
  }
  /**
   * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
   */
  emitChangeEvent(matches, query) {
    this.matchMedia.source.next(new MediaChange(matches, query));
  }
  get currentActivations() {
    return this.matchMedia.activations;
  }
}
MediaTrigger.ɵfac = function MediaTrigger_Factory(t) {
  return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};
MediaTrigger.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaTrigger,
  factory: MediaTrigger.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BreakPointRegistry
    }, {
      type: MatchMedia
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LAYOUT_CONFIG]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
* The flex API permits 3 or 1 parts of the value:
*    - `flex-grow flex-shrink flex-basis`, or
*    - `flex-basis`
*/
function validateBasis(basis, grow = '1', shrink = '1') {
  let parts = [grow, shrink, basis];
  let j = basis.indexOf('calc');
  if (j > 0) {
    parts[2] = _validateCalcValue(basis.substring(j).trim());
    let matches = basis.substr(0, j).trim().split(' ');
    if (matches.length == 2) {
      parts[0] = matches[0];
      parts[1] = matches[1];
    }
  } else if (j == 0) {
    parts[2] = _validateCalcValue(basis.trim());
  } else {
    let matches = basis.split(' ');
    parts = matches.length === 3 ? matches : [grow, shrink, basis];
  }
  return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 */
function _validateCalcValue(calc) {
  return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}
const MULTIPLIER_SUFFIX = 'x';
function multiply(value, multiplier) {
  if (multiplier === undefined) {
    return value;
  }
  const transformValue = possibleValue => {
    const numberValue = +possibleValue.slice(0, -MULTIPLIER_SUFFIX.length);
    if (value.endsWith(MULTIPLIER_SUFFIX) && !isNaN(numberValue)) {
      return `${numberValue * multiplier.value}${multiplier.unit}`;
    }
    return value;
  };
  return value.includes(' ') ? value.split(' ').map(transformValue).join(' ') : transformValue(value);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 63704:
/*!*************************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassDirective": () => (/* binding */ ClassDirective),
/* harmony export */   "DefaultClassDirective": () => (/* binding */ DefaultClassDirective),
/* harmony export */   "DefaultImgSrcDirective": () => (/* binding */ DefaultImgSrcDirective),
/* harmony export */   "DefaultShowHideDirective": () => (/* binding */ DefaultShowHideDirective),
/* harmony export */   "DefaultStyleDirective": () => (/* binding */ DefaultStyleDirective),
/* harmony export */   "ExtendedModule": () => (/* binding */ ExtendedModule),
/* harmony export */   "ImgSrcDirective": () => (/* binding */ ImgSrcDirective),
/* harmony export */   "ImgSrcStyleBuilder": () => (/* binding */ ImgSrcStyleBuilder),
/* harmony export */   "ShowHideDirective": () => (/* binding */ ShowHideDirective),
/* harmony export */   "ShowHideStyleBuilder": () => (/* binding */ ShowHideStyleBuilder),
/* harmony export */   "StyleDirective": () => (/* binding */ StyleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 44658);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 70867);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 42512);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ImgSrcStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(url) {
    return {
      'content': url ? `url(${url})` : ''
    };
  }
}
ImgSrcStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵImgSrcStyleBuilder_BaseFactory;
  return function ImgSrcStyleBuilder_Factory(t) {
    return (ɵImgSrcStyleBuilder_BaseFactory || (ɵImgSrcStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder)))(t || ImgSrcStyleBuilder);
  };
}();
ImgSrcStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ImgSrcStyleBuilder,
  factory: ImgSrcStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ImgSrcDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = 'img-src';
    this.defaultSrc = '';
    this.styleCache = imgSrcCache;
    this.init();
    this.setValue(this.nativeElement.getAttribute('src') || '', '');
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId) && this.serverModuleLoaded) {
      this.nativeElement.setAttribute('src', '');
    }
  }
  set src(val) {
    this.defaultSrc = val;
    this.setValue(this.defaultSrc, '');
  }
  /**
   * Use the [responsively] activated input value to update
   * the host img src attribute or assign a default `img.src=''`
   * if the src has not been defined.
   *
   * Do nothing to standard `<img src="">` usages, only when responsive
   * keys are present do we actually call `setAttribute()`
   */
  updateWithValue(value) {
    const url = value || this.defaultSrc;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId) && this.serverModuleLoaded) {
      this.addStyles(url);
    } else {
      this.nativeElement.setAttribute('src', url);
    }
  }
}
ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) {
  return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN));
};
ImgSrcDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: ImgSrcDirective,
  inputs: {
    src: "src"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: ImgSrcStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }];
  }, {
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['src']
    }]
  });
})();
const imgSrcCache = new Map();
const inputs$3 = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
const selector$3 = `
  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],
  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],
  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]
`;
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
class DefaultImgSrcDirective extends ImgSrcDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }
}
DefaultImgSrcDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultImgSrcDirective_BaseFactory;
  return function DefaultImgSrcDirective_Factory(t) {
    return (ɵDefaultImgSrcDirective_BaseFactory || (ɵDefaultImgSrcDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective)))(t || DefaultImgSrcDirective);
  };
}();
DefaultImgSrcDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultImgSrcDirective,
  selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
  inputs: {
    "src.xs": "src.xs",
    "src.sm": "src.sm",
    "src.md": "src.md",
    "src.lg": "src.lg",
    "src.xl": "src.xl",
    "src.lt-sm": "src.lt-sm",
    "src.lt-md": "src.lt-md",
    "src.lt-lg": "src.lt-lg",
    "src.lt-xl": "src.lt-xl",
    "src.gt-xs": "src.gt-xs",
    "src.gt-sm": "src.gt-sm",
    "src.gt-md": "src.gt-md",
    "src.gt-lg": "src.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ClassDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
    super(elementRef, null, styler, marshal);
    this.ngClassInstance = ngClassInstance;
    this.DIRECTIVE_KEY = 'ngClass';
    if (!this.ngClassInstance) {
      // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
      // the same host element; since the responsive variations may be defined...
      this.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass(iterableDiffers, keyValueDiffers, elementRef, renderer2);
    }
    this.init();
    this.setValue('', '');
  }
  /**
   * Capture class assignments so we cache the default classes
   * which are merged with activated styles and used as fallbacks.
   */
  set klass(val) {
    this.ngClassInstance.klass = val;
    this.setValue(val, '');
  }
  updateWithValue(value) {
    this.ngClassInstance.ngClass = value;
    this.ngClassInstance.ngDoCheck();
  }
  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************
  /**
   * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
   */
  ngDoCheck() {
    this.ngClassInstance.ngDoCheck();
  }
}
ClassDirective.ɵfac = function ClassDirective_Factory(t) {
  return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, 10));
};
ClassDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: ClassDirective,
  inputs: {
    klass: ["class", "klass"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClassDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }];
  }, {
    klass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['class']
    }]
  });
})();
const inputs$2 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
const selector$2 = `
  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
`;
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
class DefaultClassDirective extends ClassDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }
}
DefaultClassDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultClassDirective_BaseFactory;
  return function DefaultClassDirective_Factory(t) {
    return (ɵDefaultClassDirective_BaseFactory || (ɵDefaultClassDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultClassDirective)))(t || DefaultClassDirective);
  };
}();
DefaultClassDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultClassDirective,
  selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
  inputs: {
    ngClass: "ngClass",
    "ngClass.xs": "ngClass.xs",
    "ngClass.sm": "ngClass.sm",
    "ngClass.md": "ngClass.md",
    "ngClass.lg": "ngClass.lg",
    "ngClass.xl": "ngClass.xl",
    "ngClass.lt-sm": "ngClass.lt-sm",
    "ngClass.lt-md": "ngClass.lt-md",
    "ngClass.lt-lg": "ngClass.lt-lg",
    "ngClass.lt-xl": "ngClass.lt-xl",
    "ngClass.gt-xs": "ngClass.gt-xs",
    "ngClass.gt-sm": "ngClass.gt-sm",
    "ngClass.gt-md": "ngClass.gt-md",
    "ngClass.gt-lg": "ngClass.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultClassDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ShowHideStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(show, parent) {
    const shouldShow = show === 'true';
    return {
      'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none'
    };
  }
}
ShowHideStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵShowHideStyleBuilder_BaseFactory;
  return function ShowHideStyleBuilder_Factory(t) {
    return (ɵShowHideStyleBuilder_BaseFactory || (ɵShowHideStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder)))(t || ShowHideStyleBuilder);
  };
}();
ShowHideStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShowHideStyleBuilder,
  factory: ShowHideStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ShowHideDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.layoutConfig = layoutConfig;
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = 'show-hide';
    /** Original DOM Element CSS display style */
    this.display = '';
    this.hasLayout = false;
    this.hasFlexChild = false;
  }
  // *********************************************
  // Lifecycle Methods
  // *********************************************
  ngAfterViewInit() {
    this.trackExtraTriggers();
    const children = Array.from(this.nativeElement.children);
    for (let i = 0; i < children.length; i++) {
      if (this.marshal.hasValue(children[i], 'flex')) {
        this.hasFlexChild = true;
        break;
      }
    }
    if (DISPLAY_MAP.has(this.nativeElement)) {
      this.display = DISPLAY_MAP.get(this.nativeElement);
    } else {
      this.display = this.getDisplayStyle();
      DISPLAY_MAP.set(this.nativeElement, this.display);
    }
    this.init();
    // set the default to show unless explicitly overridden
    const defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');
    if (defaultValue === undefined || defaultValue === '') {
      this.setValue(true, '');
    } else {
      this.triggerUpdate();
    }
  }
  /**
   * On changes to any @Input properties...
   * Default to use the non-responsive Input value ('fxShow')
   * Then conditionally override with the mq-activated Input's current value
   */
  ngOnChanges(changes) {
    Object.keys(changes).forEach(key => {
      if (this.inputs.indexOf(key) !== -1) {
        const inputKey = key.split('.');
        const bp = inputKey.slice(1).join('.');
        const inputValue = changes[key].currentValue;
        let shouldShow = inputValue !== '' ? inputValue !== 0 ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(inputValue) : false : true;
        if (inputKey[0] === 'fxHide') {
          shouldShow = !shouldShow;
        }
        this.setValue(shouldShow, bp);
      }
    });
  }
  // *********************************************
  // Protected methods
  // *********************************************
  /**
   *  Watch for these extra triggers to update fxShow, fxHide stylings
   */
  trackExtraTriggers() {
    this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
    ['layout', 'layout-align'].forEach(key => {
      this.marshal.trackValue(this.nativeElement, key).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this));
    });
  }
  /**
   * Override accessor to the current HTMLElement's `display` style
   * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
   * unless it was already explicitly specified inline or in a CSS stylesheet.
   */
  getDisplayStyle() {
    return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
  }
  /** Validate the visibility value and then update the host's inline display style */
  updateWithValue(value = true) {
    if (value === '') {
      return;
    }
    const isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId);
    this.addStyles(value ? 'true' : 'false', {
      display: this.display,
      isServer
    });
    if (isServer && this.serverModuleLoaded) {
      this.nativeElement.style.setProperty('display', '');
    }
    this.marshal.triggerUpdate(this.parentElement, 'layout-gap');
  }
}
ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) {
  return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN));
};
ShowHideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: ShowHideDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: ShowHideStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }];
  }, null);
})();
const DISPLAY_MAP = new WeakMap();
const inputs$1 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
const selector$1 = `
  [fxShow], [fxShow.print],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide], [fxHide.print],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`;
/**
 * 'show' Layout API directive
 */
class DefaultShowHideDirective extends ShowHideDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }
}
DefaultShowHideDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultShowHideDirective_BaseFactory;
  return function DefaultShowHideDirective_Factory(t) {
    return (ɵDefaultShowHideDirective_BaseFactory || (ɵDefaultShowHideDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultShowHideDirective)))(t || DefaultShowHideDirective);
  };
}();
DefaultShowHideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultShowHideDirective,
  selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
  inputs: {
    fxShow: "fxShow",
    "fxShow.print": "fxShow.print",
    "fxShow.xs": "fxShow.xs",
    "fxShow.sm": "fxShow.sm",
    "fxShow.md": "fxShow.md",
    "fxShow.lg": "fxShow.lg",
    "fxShow.xl": "fxShow.xl",
    "fxShow.lt-sm": "fxShow.lt-sm",
    "fxShow.lt-md": "fxShow.lt-md",
    "fxShow.lt-lg": "fxShow.lt-lg",
    "fxShow.lt-xl": "fxShow.lt-xl",
    "fxShow.gt-xs": "fxShow.gt-xs",
    "fxShow.gt-sm": "fxShow.gt-sm",
    "fxShow.gt-md": "fxShow.gt-md",
    "fxShow.gt-lg": "fxShow.gt-lg",
    fxHide: "fxHide",
    "fxHide.print": "fxHide.print",
    "fxHide.xs": "fxHide.xs",
    "fxHide.sm": "fxHide.sm",
    "fxHide.md": "fxHide.md",
    "fxHide.lg": "fxHide.lg",
    "fxHide.xl": "fxHide.xl",
    "fxHide.lt-sm": "fxHide.lt-sm",
    "fxHide.lt-md": "fxHide.lt-md",
    "fxHide.lt-lg": "fxHide.lt-lg",
    "fxHide.lt-xl": "fxHide.lt-xl",
    "fxHide.gt-xs": "fxHide.gt-xs",
    "fxHide.gt-sm": "fxHide.gt-sm",
    "fxHide.gt-md": "fxHide.gt-md",
    "fxHide.gt-lg": "fxHide.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** NgStyle allowed inputs */
class NgStyleKeyValue {
  constructor(key, value, noQuotes = true) {
    this.key = key;
    this.value = value;
    this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
    this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
    this.value = this.value.replace(/;/, '');
  }
}
function getType(target) {
  let what = typeof target;
  if (what === 'object') {
    return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
  }
  return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 */
function buildRawList(source, delimiter = ';') {
  return String(source).trim().split(delimiter).map(val => val.trim()).filter(val => val !== '');
}
/** Convert array of key:value strings to a iterable map object */
function buildMapFromList$1(styles, sanitize) {
  const sanitizeValue = it => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }
    return it;
  };
  return styles.map(stringToKeyValue).filter(entry => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
/** Convert Set<string> or raw Object to an iterable NgStyleMap */
function buildMapFromSet(source, sanitize) {
  let list = [];
  if (getType(source) === 'set') {
    source.forEach(entry => list.push(entry));
  } else {
    Object.keys(source).forEach(key => {
      list.push(`${key}:${source[key]}`);
    });
  }
  return buildMapFromList$1(list, sanitize);
}
/** Convert 'key:value' -> [key, value] */
function stringToKeyValue(it) {
  const [key, ...vals] = it.split(':');
  return new NgStyleKeyValue(key, vals.join(':'));
}
/** Convert [ [key,value] ] -> { key : value } */
function keyValuesToMap(map, entry) {
  if (!!entry.key) {
    map[entry.key] = entry.value;
  }
  return map;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class StyleDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
    super(elementRef, null, styler, marshal);
    this.sanitizer = sanitizer;
    this.ngStyleInstance = ngStyleInstance;
    this.DIRECTIVE_KEY = 'ngStyle';
    if (!this.ngStyleInstance) {
      // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
      // defined on the same host element; since the responsive variations may be defined...
      this.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle(elementRef, differs, renderer2);
    }
    this.init();
    const styles = this.nativeElement.getAttribute('style') ?? '';
    this.fallbackStyles = this.buildStyleMap(styles);
    this.isServer = serverLoaded && (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(platformId);
  }
  /** Add generated styles */
  updateWithValue(value) {
    const styles = this.buildStyleMap(value);
    this.ngStyleInstance.ngStyle = {
      ...this.fallbackStyles,
      ...styles
    };
    if (this.isServer) {
      this.applyStyleToElement(styles);
    }
    this.ngStyleInstance.ngDoCheck();
  }
  /** Remove generated styles */
  clearStyles() {
    this.ngStyleInstance.ngStyle = this.fallbackStyles;
    this.ngStyleInstance.ngDoCheck();
  }
  /**
   * Convert raw strings to ngStyleMap; which is required by ngStyle
   * NOTE: Raw string key-value pairs MUST be delimited by `;`
   *       Comma-delimiters are not supported due to complexities of
   *       possible style values such as `rgba(x,x,x,x)` and others
   */
  buildStyleMap(styles) {
    // Always safe-guard (aka sanitize) style property values
    const sanitizer = val => this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE, val) ?? '';
    if (styles) {
      switch (getType(styles)) {
        case 'string':
          return buildMapFromList(buildRawList(styles), sanitizer);
        case 'array':
          return buildMapFromList(styles, sanitizer);
        case 'set':
          return buildMapFromSet(styles, sanitizer);
        default:
          return buildMapFromSet(styles, sanitizer);
      }
    }
    return {};
  }
  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************
  /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
  ngDoCheck() {
    this.ngStyleInstance.ngDoCheck();
  }
}
StyleDirective.ɵfac = function StyleDirective_Factory(t) {
  return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
StyleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: StyleDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
const inputs = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
const selector = `
  [ngStyle],
  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],
  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],
  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]
`;
/**
 * Directive to add responsive support for ngStyle.
 *
 */
class DefaultStyleDirective extends StyleDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }
}
DefaultStyleDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultStyleDirective_BaseFactory;
  return function DefaultStyleDirective_Factory(t) {
    return (ɵDefaultStyleDirective_BaseFactory || (ɵDefaultStyleDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultStyleDirective)))(t || DefaultStyleDirective);
  };
}();
DefaultStyleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultStyleDirective,
  selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
  inputs: {
    ngStyle: "ngStyle",
    "ngStyle.xs": "ngStyle.xs",
    "ngStyle.sm": "ngStyle.sm",
    "ngStyle.md": "ngStyle.md",
    "ngStyle.lg": "ngStyle.lg",
    "ngStyle.xl": "ngStyle.xl",
    "ngStyle.lt-sm": "ngStyle.lt-sm",
    "ngStyle.lt-md": "ngStyle.lt-md",
    "ngStyle.lt-lg": "ngStyle.lt-lg",
    "ngStyle.lt-xl": "ngStyle.lt-xl",
    "ngStyle.gt-xs": "ngStyle.gt-xs",
    "ngStyle.gt-sm": "ngStyle.gt-sm",
    "ngStyle.gt-md": "ngStyle.gt-md",
    "ngStyle.gt-lg": "ngStyle.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultStyleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
/** Build a styles map from a list of styles, while sanitizing bad values first */
function buildMapFromList(styles, sanitize) {
  const sanitizeValue = it => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }
    return it;
  };
  return styles.map(stringToKeyValue).filter(entry => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
class ExtendedModule {}
ExtendedModule.ɵfac = function ExtendedModule_Factory(t) {
  return new (t || ExtendedModule)();
};
ExtendedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ExtendedModule
});
ExtendedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExtendedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 56722:
/*!*********************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFlexAlignDirective": () => (/* binding */ DefaultFlexAlignDirective),
/* harmony export */   "DefaultFlexDirective": () => (/* binding */ DefaultFlexDirective),
/* harmony export */   "DefaultFlexOffsetDirective": () => (/* binding */ DefaultFlexOffsetDirective),
/* harmony export */   "DefaultFlexOrderDirective": () => (/* binding */ DefaultFlexOrderDirective),
/* harmony export */   "DefaultLayoutAlignDirective": () => (/* binding */ DefaultLayoutAlignDirective),
/* harmony export */   "DefaultLayoutDirective": () => (/* binding */ DefaultLayoutDirective),
/* harmony export */   "DefaultLayoutGapDirective": () => (/* binding */ DefaultLayoutGapDirective),
/* harmony export */   "FlexAlignDirective": () => (/* binding */ FlexAlignDirective),
/* harmony export */   "FlexAlignStyleBuilder": () => (/* binding */ FlexAlignStyleBuilder),
/* harmony export */   "FlexDirective": () => (/* binding */ FlexDirective),
/* harmony export */   "FlexFillDirective": () => (/* binding */ FlexFillDirective),
/* harmony export */   "FlexFillStyleBuilder": () => (/* binding */ FlexFillStyleBuilder),
/* harmony export */   "FlexModule": () => (/* binding */ FlexModule),
/* harmony export */   "FlexOffsetDirective": () => (/* binding */ FlexOffsetDirective),
/* harmony export */   "FlexOffsetStyleBuilder": () => (/* binding */ FlexOffsetStyleBuilder),
/* harmony export */   "FlexOrderDirective": () => (/* binding */ FlexOrderDirective),
/* harmony export */   "FlexOrderStyleBuilder": () => (/* binding */ FlexOrderStyleBuilder),
/* harmony export */   "FlexStyleBuilder": () => (/* binding */ FlexStyleBuilder),
/* harmony export */   "LayoutAlignDirective": () => (/* binding */ LayoutAlignDirective),
/* harmony export */   "LayoutAlignStyleBuilder": () => (/* binding */ LayoutAlignStyleBuilder),
/* harmony export */   "LayoutDirective": () => (/* binding */ LayoutDirective),
/* harmony export */   "LayoutGapDirective": () => (/* binding */ LayoutGapDirective),
/* harmony export */   "LayoutGapStyleBuilder": () => (/* binding */ LayoutGapStyleBuilder),
/* harmony export */   "LayoutStyleBuilder": () => (/* binding */ LayoutStyleBuilder)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 4564);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 44658);
/* harmony import */ var _angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/_private-utils */ 77200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class LayoutStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, {
    display
  }) {
    const css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.buildLayoutCSS)(input);
    return {
      ...css,
      display: display === 'none' ? display : css.display
    };
  }
}
LayoutStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵLayoutStyleBuilder_BaseFactory;
  return function LayoutStyleBuilder_Factory(t) {
    return (ɵLayoutStyleBuilder_BaseFactory || (ɵLayoutStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LayoutStyleBuilder)))(t || LayoutStyleBuilder);
  };
}();
LayoutStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutStyleBuilder,
  factory: LayoutStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const inputs$6 = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
const selector$6 = `
  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],
  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],
  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],
  [fxLayout.gt-md], [fxLayout.gt-lg]
`;
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
class LayoutDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal, _config) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this._config = _config;
    this.DIRECTIVE_KEY = 'layout';
    this.init();
  }
  updateWithValue(input) {
    const detectLayoutDisplay = this._config.detectLayoutDisplay;
    const display = detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, 'display') : '';
    this.styleCache = cacheMap.get(display) ?? new Map();
    cacheMap.set(display, this.styleCache);
    if (this.currentValue !== input) {
      this.addStyles(input, {
        display
      });
      this.currentValue = input;
    }
  }
}
LayoutDirective.ɵfac = function LayoutDirective_Factory(t) {
  return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};
LayoutDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LayoutDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: LayoutStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();
class DefaultLayoutDirective extends LayoutDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$6;
  }
}
DefaultLayoutDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultLayoutDirective_BaseFactory;
  return function DefaultLayoutDirective_Factory(t) {
    return (ɵDefaultLayoutDirective_BaseFactory || (ɵDefaultLayoutDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLayoutDirective)))(t || DefaultLayoutDirective);
  };
}();
DefaultLayoutDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultLayoutDirective,
  selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]],
  inputs: {
    fxLayout: "fxLayout",
    "fxLayout.xs": "fxLayout.xs",
    "fxLayout.sm": "fxLayout.sm",
    "fxLayout.md": "fxLayout.md",
    "fxLayout.lg": "fxLayout.lg",
    "fxLayout.xl": "fxLayout.xl",
    "fxLayout.lt-sm": "fxLayout.lt-sm",
    "fxLayout.lt-md": "fxLayout.lt-md",
    "fxLayout.lt-lg": "fxLayout.lt-lg",
    "fxLayout.lt-xl": "fxLayout.lt-xl",
    "fxLayout.gt-xs": "fxLayout.gt-xs",
    "fxLayout.gt-sm": "fxLayout.gt-sm",
    "fxLayout.gt-md": "fxLayout.gt-md",
    "fxLayout.gt-lg": "fxLayout.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$6,
      inputs: inputs$6
    }]
  }], null, null);
})();
const cacheMap = new Map();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CLEAR_MARGIN_CSS = {
  'margin-left': null,
  'margin-right': null,
  'margin-top': null,
  'margin-bottom': null
};
class LayoutGapStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  constructor(_styler, _config) {
    super();
    this._styler = _styler;
    this._config = _config;
  }
  buildStyles(gapValue, parent) {
    if (gapValue.endsWith(GRID_SPECIFIER)) {
      gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
      gapValue = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(gapValue, this._config.multiplier);
      // Add the margin to the host element
      return buildGridMargin(gapValue, parent.directionality);
    } else {
      return {};
    }
  }
  sideEffect(gapValue, _styles, parent) {
    const items = parent.items;
    if (gapValue.endsWith(GRID_SPECIFIER)) {
      gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
      gapValue = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(gapValue, this._config.multiplier);
      // For each `element` children, set the padding
      const paddingStyles = buildGridPadding(gapValue, parent.directionality);
      this._styler.applyStyleToElements(paddingStyles, parent.items);
    } else {
      gapValue = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(gapValue, this._config.multiplier);
      gapValue = this.addFallbackUnit(gapValue);
      const lastItem = items.pop();
      // For each `element` children EXCEPT the last,
      // set the margin right/bottom styles...
      const gapCss = buildGapCSS(gapValue, parent);
      this._styler.applyStyleToElements(gapCss, items);
      // Clear all gaps for all visible elements
      this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
    }
  }
  addFallbackUnit(value) {
    return !isNaN(+value) ? `${value}${this._config.defaultUnit}` : value;
  }
}
LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) {
  return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};
LayoutGapStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutGapStyleBuilder,
  factory: LayoutGapStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();
const inputs$5 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
const selector$5 = `
  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],
  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],
  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],
  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]
`;
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
class LayoutGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.zone = zone;
    this.directionality = directionality;
    this.styleUtils = styleUtils;
    this.layout = 'row'; // default flex-direction
    this.DIRECTIVE_KEY = 'layout-gap';
    this.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    const extraTriggers = [this.directionality.change, this.observerSubject.asObservable()];
    this.init(extraTriggers);
    this.marshal.trackValue(this.nativeElement, 'layout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
  }
  /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */
  get childrenNodes() {
    const obj = this.nativeElement.children;
    const buffer = [];
    // iterate backwards ensuring that length is an UInt32
    for (let i = obj.length; i--;) {
      buffer[i] = obj[i];
    }
    return buffer;
  }
  // *********************************************
  // Lifecycle Methods
  // *********************************************
  ngAfterContentInit() {
    this.buildChildObservable();
    this.triggerUpdate();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  // *********************************************
  // Protected methods
  // *********************************************
  /**
   * Cache the parent container 'flex-direction' and update the 'margin' styles
   */
  onLayoutChange(matcher) {
    const layout = matcher.value;
    // Make sure to filter out 'wrap' option
    const direction = layout.split(' ');
    this.layout = direction[0];
    if (!_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_VALUES.find(x => x === this.layout)) {
      this.layout = 'row';
    }
    this.triggerUpdate();
  }
  /**
   *
   */
  updateWithValue(value) {
    // Gather all non-hidden Element nodes
    const items = this.childrenNodes.filter(el => el.nodeType === 1 && this.willDisplay(el)).sort((a, b) => {
      const orderA = +this.styler.lookupStyle(a, 'order');
      const orderB = +this.styler.lookupStyle(b, 'order');
      if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
        return 0;
      } else {
        return orderA > orderB ? 1 : -1;
      }
    });
    if (items.length > 0) {
      const directionality = this.directionality.value;
      const layout = this.layout;
      if (layout === 'row' && directionality === 'rtl') {
        this.styleCache = layoutGapCacheRowRtl;
      } else if (layout === 'row' && directionality !== 'rtl') {
        this.styleCache = layoutGapCacheRowLtr;
      } else if (layout === 'column' && directionality === 'rtl') {
        this.styleCache = layoutGapCacheColumnRtl;
      } else if (layout === 'column' && directionality !== 'rtl') {
        this.styleCache = layoutGapCacheColumnLtr;
      }
      this.addStyles(value, {
        directionality,
        items,
        layout
      });
    }
  }
  /** We need to override clearStyles because in most cases mru isn't populated */
  clearStyles() {
    const gridMode = Object.keys(this.mru).length > 0;
    const childrenStyle = gridMode ? 'padding' : getMarginType(this.directionality.value, this.layout);
    // If there are styles on the parent remove them
    if (gridMode) {
      super.clearStyles();
    }
    // Then remove the children styles too
    this.styleUtils.applyStyleToElements({
      [childrenStyle]: ''
    }, this.childrenNodes);
  }
  /** Determine if an element will show or hide based on current activation */
  willDisplay(source) {
    const value = this.marshal.getValue(source, 'show-hide');
    return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
  }
  buildChildObservable() {
    this.zone.runOutsideAngular(() => {
      if (typeof MutationObserver !== 'undefined') {
        this.observer = new MutationObserver(mutations => {
          const validatedChanges = it => {
            return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
          };
          // update gap styles only for child 'added' or 'removed' events
          if (mutations.some(validatedChanges)) {
            this.observerSubject.next();
          }
        });
        this.observer.observe(this.nativeElement, {
          childList: true
        });
      }
    });
  }
}
LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) {
  return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
LayoutGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LayoutGapDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: LayoutGapStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
class DefaultLayoutGapDirective extends LayoutGapDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$5;
  }
}
DefaultLayoutGapDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultLayoutGapDirective_BaseFactory;
  return function DefaultLayoutGapDirective_Factory(t) {
    return (ɵDefaultLayoutGapDirective_BaseFactory || (ɵDefaultLayoutGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective)))(t || DefaultLayoutGapDirective);
  };
}();
DefaultLayoutGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultLayoutGapDirective,
  selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]],
  inputs: {
    fxLayoutGap: "fxLayoutGap",
    "fxLayoutGap.xs": "fxLayoutGap.xs",
    "fxLayoutGap.sm": "fxLayoutGap.sm",
    "fxLayoutGap.md": "fxLayoutGap.md",
    "fxLayoutGap.lg": "fxLayoutGap.lg",
    "fxLayoutGap.xl": "fxLayoutGap.xl",
    "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
    "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
    "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
    "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
    "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
    "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
    "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
    "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$5,
      inputs: inputs$5
    }]
  }], null, null);
})();
const layoutGapCacheRowRtl = new Map();
const layoutGapCacheColumnRtl = new Map();
const layoutGapCacheRowLtr = new Map();
const layoutGapCacheColumnLtr = new Map();
const GRID_SPECIFIER = ' grid';
function buildGridPadding(value, directionality) {
  const [between, below] = value.split(' ');
  const bottom = below ?? between;
  let paddingRight = '0px',
    paddingBottom = bottom,
    paddingLeft = '0px';
  if (directionality === 'rtl') {
    paddingLeft = between;
  } else {
    paddingRight = between;
  }
  return {
    'padding': `0px ${paddingRight} ${paddingBottom} ${paddingLeft}`
  };
}
function buildGridMargin(value, directionality) {
  const [between, below] = value.split(' ');
  const bottom = below ?? between;
  const minus = str => `-${str}`;
  let marginRight = '0px',
    marginBottom = minus(bottom),
    marginLeft = '0px';
  if (directionality === 'rtl') {
    marginLeft = minus(between);
  } else {
    marginRight = minus(between);
  }
  return {
    'margin': `0px ${marginRight} ${marginBottom} ${marginLeft}`
  };
}
function getMarginType(directionality, layout) {
  switch (layout) {
    case 'column':
      return 'margin-bottom';
    case 'column-reverse':
      return 'margin-top';
    case 'row':
      return directionality === 'rtl' ? 'margin-left' : 'margin-right';
    case 'row-reverse':
      return directionality === 'rtl' ? 'margin-right' : 'margin-left';
    default:
      return directionality === 'rtl' ? 'margin-left' : 'margin-right';
  }
}
function buildGapCSS(gapValue, parent) {
  const key = getMarginType(parent.directionality, parent.layout);
  const margins = {
    ...CLEAR_MARGIN_CSS
  };
  margins[key] = gapValue;
  return margins;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class FlexStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  constructor(layoutConfig) {
    super();
    this.layoutConfig = layoutConfig;
  }
  buildStyles(input, parent) {
    let [grow, shrink, ...basisParts] = input.split(' ');
    let basis = basisParts.join(' ');
    // The flex-direction of this element's flex container. Defaults to 'row'.
    const direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
    const max = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(direction) ? 'max-width' : 'max-height';
    const min = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(direction) ? 'min-width' : 'min-height';
    const hasCalc = String(basis).indexOf('calc') > -1;
    const usingCalc = hasCalc || basis === 'auto';
    const isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
    const hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
    let isValue = hasCalc || hasUnits;
    grow = grow == '0' ? 0 : grow;
    shrink = shrink == '0' ? 0 : shrink;
    // make box inflexible when shrink and grow are both zero
    // should not set a min when the grow is zero
    // should not set a max when the shrink is zero
    const isFixed = !grow && !shrink;
    let css = {};
    // flex-basis allows you to specify the initial/starting main-axis size of the element,
    // before anything else is computed. It can either be a percentage or an absolute value.
    // It is, however, not the breaking point for flex-grow/shrink properties
    //
    // flex-grow can be seen as this:
    //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
    //   1: (Default value). Stretch; will be the same size to all other flex items on
    //       the same row since they have a default value of 1.
    //   ≥2 (integer n): Stretch. Will be n times the size of other elements
    //      with 'flex-grow: 1' on the same row.
    // Use `null` to clear existing styles.
    const clearStyles = {
      'max-width': null,
      'max-height': null,
      'min-width': null,
      'min-height': null
    };
    switch (basis || '') {
      case '':
        const useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
        basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
        break;
      case 'initial': // default
      case 'nogrow':
        grow = 0;
        basis = 'auto';
        break;
      case 'grow':
        basis = '100%';
        break;
      case 'noshrink':
        shrink = 0;
        basis = 'auto';
        break;
      case 'auto':
        break;
      case 'none':
        grow = 0;
        shrink = 0;
        basis = 'auto';
        break;
      default:
        // Defaults to percentage sizing unless `px` is explicitly set
        if (!isValue && !isPercent && !isNaN(basis)) {
          basis = basis + '%';
        }
        // Fix for issue 280
        if (basis === '0%') {
          isValue = true;
        }
        if (basis === '0px') {
          basis = '0%';
        }
        // fix issue #5345
        if (hasCalc) {
          css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
            'flex-grow': grow,
            'flex-shrink': shrink,
            'flex-basis': isValue ? basis : '100%'
          });
        } else {
          css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
            'flex': `${grow} ${shrink} ${isValue ? basis : '100%'}`
          });
        }
        break;
    }
    if (!(css['flex'] || css['flex-grow'])) {
      if (hasCalc) {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex-grow': grow,
          'flex-shrink': shrink,
          'flex-basis': basis
        });
      } else {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex': `${grow} ${shrink} ${basis}`
        });
      }
    }
    // Fix for issues 277, 534, and 728
    if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
      css[min] = isFixed || isValue && grow ? basis : null;
      css[max] = isFixed || !usingCalc && shrink ? basis : null;
    }
    // Fix for issue 528
    if (!css[min] && !css[max]) {
      if (hasCalc) {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex-grow': grow,
          'flex-shrink': shrink,
          'flex-basis': basis
        });
      } else {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex': `${grow} ${shrink} ${basis}`
        });
      }
    } else {
      // Fix for issue 660
      if (parent.hasWrap) {
        css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : `${grow} ${shrink} ${css[max]}` : hasCalc ? css[min] : `${grow} ${shrink} ${css[min]}`;
      }
    }
    return (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(css, {
      'box-sizing': 'border-box'
    });
  }
}
FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) {
  return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};
FlexStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexStyleBuilder,
  factory: FlexStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();
const inputs$4 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
const selector$4 = `
  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],
  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],
  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],
  [fxFlex.gt-md], [fxFlex.gt-lg]
`;
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
class FlexDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.layoutConfig = layoutConfig;
    this.marshal = marshal;
    this.DIRECTIVE_KEY = 'flex';
    this.direction = undefined;
    this.wrap = undefined;
    this.flexGrow = '1';
    this.flexShrink = '1';
    this.init();
  }
  get shrink() {
    return this.flexShrink;
  }
  set shrink(value) {
    this.flexShrink = value || '1';
    this.triggerReflow();
  }
  get grow() {
    return this.flexGrow;
  }
  set grow(value) {
    this.flexGrow = value || '1';
    this.triggerReflow();
  }
  ngOnInit() {
    if (this.parentElement) {
      this.marshal.trackValue(this.parentElement, 'layout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
      this.marshal.trackValue(this.nativeElement, 'layout-align').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.triggerReflow.bind(this));
    }
  }
  /**
   * Caches the parent container's 'flex-direction' and updates the element's style.
   * Used as a handler for layout change events from the parent flex container.
   */
  onLayoutChange(matcher) {
    const layout = matcher.value;
    const layoutParts = layout.split(' ');
    this.direction = layoutParts[0];
    this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
    this.triggerUpdate();
  }
  /** Input to this is exclusively the basis input value */
  updateWithValue(value) {
    const addFlexToParent = this.layoutConfig.addFlexToParent !== false;
    if (this.direction === undefined) {
      this.direction = this.getFlexFlowDirection(this.parentElement, addFlexToParent);
    }
    if (this.wrap === undefined) {
      this.wrap = this.hasWrap(this.parentElement);
    }
    const direction = this.direction;
    const isHorizontal = direction.startsWith('row');
    const hasWrap = this.wrap;
    if (isHorizontal && hasWrap) {
      this.styleCache = flexRowWrapCache;
    } else if (isHorizontal && !hasWrap) {
      this.styleCache = flexRowCache;
    } else if (!isHorizontal && hasWrap) {
      this.styleCache = flexColumnWrapCache;
    } else if (!isHorizontal && !hasWrap) {
      this.styleCache = flexColumnCache;
    }
    const basis = String(value).replace(';', '');
    const parts = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis)(basis, this.flexGrow, this.flexShrink);
    this.addStyles(parts.join(' '), {
      direction,
      hasWrap
    });
  }
  /** Trigger a style reflow, usually based on a shrink/grow input event */
  triggerReflow() {
    const activatedValue = this.activatedValue;
    if (activatedValue !== undefined) {
      const parts = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis)(activatedValue + '', this.flexGrow, this.flexShrink);
      this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
    }
  }
}
FlexDirective.ɵfac = function FlexDirective_Factory(t) {
  return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
FlexDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexDirective,
  inputs: {
    shrink: ["fxShrink", "shrink"],
    grow: ["fxGrow", "grow"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }, {
      type: FlexStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    shrink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['fxShrink']
    }],
    grow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['fxGrow']
    }]
  });
})();
class DefaultFlexDirective extends FlexDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$4;
  }
}
DefaultFlexDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexDirective_BaseFactory;
  return function DefaultFlexDirective_Factory(t) {
    return (ɵDefaultFlexDirective_BaseFactory || (ɵDefaultFlexDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexDirective)))(t || DefaultFlexDirective);
  };
}();
DefaultFlexDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexDirective,
  selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]],
  inputs: {
    fxFlex: "fxFlex",
    "fxFlex.xs": "fxFlex.xs",
    "fxFlex.sm": "fxFlex.sm",
    "fxFlex.md": "fxFlex.md",
    "fxFlex.lg": "fxFlex.lg",
    "fxFlex.xl": "fxFlex.xl",
    "fxFlex.lt-sm": "fxFlex.lt-sm",
    "fxFlex.lt-md": "fxFlex.lt-md",
    "fxFlex.lt-lg": "fxFlex.lt-lg",
    "fxFlex.lt-xl": "fxFlex.lt-xl",
    "fxFlex.gt-xs": "fxFlex.gt-xs",
    "fxFlex.gt-sm": "fxFlex.gt-sm",
    "fxFlex.gt-md": "fxFlex.gt-md",
    "fxFlex.gt-lg": "fxFlex.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      inputs: inputs$4,
      selector: selector$4
    }]
  }], null, null);
})();
const flexRowCache = new Map();
const flexColumnCache = new Map();
const flexRowWrapCache = new Map();
const flexColumnWrapCache = new Map();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class FlexOrderStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(value) {
    return {
      order: value && parseInt(value, 10) || ''
    };
  }
}
FlexOrderStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵFlexOrderStyleBuilder_BaseFactory;
  return function FlexOrderStyleBuilder_Factory(t) {
    return (ɵFlexOrderStyleBuilder_BaseFactory || (ɵFlexOrderStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder)))(t || FlexOrderStyleBuilder);
  };
}();
FlexOrderStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexOrderStyleBuilder,
  factory: FlexOrderStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
const selector$3 = `
  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],
  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],
  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],
  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]
`;
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
class FlexOrderDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'flex-order';
    this.styleCache = flexOrderCache;
    this.init();
  }
}
FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) {
  return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
FlexOrderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexOrderDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOrderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: FlexOrderStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const flexOrderCache = new Map();
class DefaultFlexOrderDirective extends FlexOrderDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }
}
DefaultFlexOrderDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexOrderDirective_BaseFactory;
  return function DefaultFlexOrderDirective_Factory(t) {
    return (ɵDefaultFlexOrderDirective_BaseFactory || (ɵDefaultFlexOrderDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective)))(t || DefaultFlexOrderDirective);
  };
}();
DefaultFlexOrderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexOrderDirective,
  selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]],
  inputs: {
    fxFlexOrder: "fxFlexOrder",
    "fxFlexOrder.xs": "fxFlexOrder.xs",
    "fxFlexOrder.sm": "fxFlexOrder.sm",
    "fxFlexOrder.md": "fxFlexOrder.md",
    "fxFlexOrder.lg": "fxFlexOrder.lg",
    "fxFlexOrder.xl": "fxFlexOrder.xl",
    "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm",
    "fxFlexOrder.lt-md": "fxFlexOrder.lt-md",
    "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg",
    "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl",
    "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs",
    "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm",
    "fxFlexOrder.gt-md": "fxFlexOrder.gt-md",
    "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class FlexOffsetStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  constructor(_config) {
    super();
    this._config = _config;
  }
  buildStyles(offset, parent) {
    offset || (offset = '0');
    offset = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(offset, this._config.multiplier);
    const isPercent = String(offset).indexOf('%') > -1;
    const isPx = String(offset).indexOf('px') > -1;
    if (!isPx && !isPercent && !isNaN(+offset)) {
      offset = `${offset}%`;
    }
    const horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
    const styles = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(parent.layout) ? {
      [horizontalLayoutKey]: offset
    } : {
      'margin-top': offset
    };
    return styles;
  }
}
FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) {
  return new (t || FlexOffsetStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};
FlexOffsetStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexOffsetStyleBuilder,
  factory: FlexOffsetStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();
const inputs$2 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
const selector$2 = `
  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],
  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],
  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],
  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]
`;
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
class FlexOffsetDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, directionality, styleBuilder, marshal, styler) {
    super(elRef, styleBuilder, styler, marshal);
    this.directionality = directionality;
    this.DIRECTIVE_KEY = 'flex-offset';
    this.init([this.directionality.change]);
    // Parent DOM `layout-gap` with affect the nested child with `flex-offset`
    if (this.parentElement) {
      this.marshal.trackValue(this.parentElement, 'layout-gap').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this));
    }
  }
  // *********************************************
  // Protected methods
  // *********************************************
  /**
   * Using the current fxFlexOffset value, update the inline CSS
   * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
   *       otherwise `margin-top` is used for the offset.
   */
  updateWithValue(value = '') {
    // The flex-direction of this element's flex container. Defaults to 'row'.
    const layout = this.getFlexFlowDirection(this.parentElement, true);
    const isRtl = this.directionality.value === 'rtl';
    if (layout === 'row' && isRtl) {
      this.styleCache = flexOffsetCacheRowRtl;
    } else if (layout === 'row' && !isRtl) {
      this.styleCache = flexOffsetCacheRowLtr;
    } else if (layout === 'column' && isRtl) {
      this.styleCache = flexOffsetCacheColumnRtl;
    } else if (layout === 'column' && !isRtl) {
      this.styleCache = flexOffsetCacheColumnLtr;
    }
    this.addStyles(value + '', {
      layout,
      isRtl
    });
  }
}
FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) {
  return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils));
};
FlexOffsetDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexOffsetDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOffsetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality
    }, {
      type: FlexOffsetStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }];
  }, null);
})();
class DefaultFlexOffsetDirective extends FlexOffsetDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }
}
DefaultFlexOffsetDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexOffsetDirective_BaseFactory;
  return function DefaultFlexOffsetDirective_Factory(t) {
    return (ɵDefaultFlexOffsetDirective_BaseFactory || (ɵDefaultFlexOffsetDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective)))(t || DefaultFlexOffsetDirective);
  };
}();
DefaultFlexOffsetDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexOffsetDirective,
  selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]],
  inputs: {
    fxFlexOffset: "fxFlexOffset",
    "fxFlexOffset.xs": "fxFlexOffset.xs",
    "fxFlexOffset.sm": "fxFlexOffset.sm",
    "fxFlexOffset.md": "fxFlexOffset.md",
    "fxFlexOffset.lg": "fxFlexOffset.lg",
    "fxFlexOffset.xl": "fxFlexOffset.xl",
    "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm",
    "fxFlexOffset.lt-md": "fxFlexOffset.lt-md",
    "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg",
    "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl",
    "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs",
    "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm",
    "fxFlexOffset.gt-md": "fxFlexOffset.gt-md",
    "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();
const flexOffsetCacheRowRtl = new Map();
const flexOffsetCacheColumnRtl = new Map();
const flexOffsetCacheRowLtr = new Map();
const flexOffsetCacheColumnLtr = new Map();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class FlexAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    input = input || 'stretch';
    const styles = {};
    // Cross-axis
    switch (input) {
      case 'start':
        styles['align-self'] = 'flex-start';
        break;
      case 'end':
        styles['align-self'] = 'flex-end';
        break;
      default:
        styles['align-self'] = input;
        break;
    }
    return styles;
  }
}
FlexAlignStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵFlexAlignStyleBuilder_BaseFactory;
  return function FlexAlignStyleBuilder_Factory(t) {
    return (ɵFlexAlignStyleBuilder_BaseFactory || (ɵFlexAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder)))(t || FlexAlignStyleBuilder);
  };
}();
FlexAlignStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexAlignStyleBuilder,
  factory: FlexAlignStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const inputs$1 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
const selector$1 = `
  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],
  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],
  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],
  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]
`;
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
class FlexAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'flex-align';
    this.styleCache = flexAlignCache;
    this.init();
  }
}
FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) {
  return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
FlexAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexAlignDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: FlexAlignStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const flexAlignCache = new Map();
class DefaultFlexAlignDirective extends FlexAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }
}
DefaultFlexAlignDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexAlignDirective_BaseFactory;
  return function DefaultFlexAlignDirective_Factory(t) {
    return (ɵDefaultFlexAlignDirective_BaseFactory || (ɵDefaultFlexAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective)))(t || DefaultFlexAlignDirective);
  };
}();
DefaultFlexAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexAlignDirective,
  selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]],
  inputs: {
    fxFlexAlign: "fxFlexAlign",
    "fxFlexAlign.xs": "fxFlexAlign.xs",
    "fxFlexAlign.sm": "fxFlexAlign.sm",
    "fxFlexAlign.md": "fxFlexAlign.md",
    "fxFlexAlign.lg": "fxFlexAlign.lg",
    "fxFlexAlign.xl": "fxFlexAlign.xl",
    "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm",
    "fxFlexAlign.lt-md": "fxFlexAlign.lt-md",
    "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg",
    "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl",
    "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs",
    "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm",
    "fxFlexAlign.gt-md": "fxFlexAlign.gt-md",
    "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const FLEX_FILL_CSS = {
  'margin': 0,
  'width': '100%',
  'height': '100%',
  'min-width': '100%',
  'min-height': '100%'
};
class FlexFillStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(_input) {
    return FLEX_FILL_CSS;
  }
}
FlexFillStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵFlexFillStyleBuilder_BaseFactory;
  return function FlexFillStyleBuilder_Factory(t) {
    return (ɵFlexFillStyleBuilder_BaseFactory || (ɵFlexFillStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder)))(t || FlexFillStyleBuilder);
  };
}();
FlexFillStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexFillStyleBuilder,
  factory: FlexFillStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
class FlexFillDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.styleCache = flexFillCache;
    this.addStyles('');
  }
}
FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) {
  return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
FlexFillDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexFillDirective,
  selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexFillDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: `[fxFill], [fxFlexFill]`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: FlexFillStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const flexFillCache = new Map();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class LayoutAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(align, parent) {
    const css = {},
      [mainAxis, crossAxis] = align.split(' ');
    // Main axis
    switch (mainAxis) {
      case 'center':
        css['justify-content'] = 'center';
        break;
      case 'space-around':
        css['justify-content'] = 'space-around';
        break;
      case 'space-between':
        css['justify-content'] = 'space-between';
        break;
      case 'space-evenly':
        css['justify-content'] = 'space-evenly';
        break;
      case 'end':
      case 'flex-end':
        css['justify-content'] = 'flex-end';
        break;
      case 'start':
      case 'flex-start':
      default:
        css['justify-content'] = 'flex-start'; // default main axis
        break;
    }
    // Cross-axis
    switch (crossAxis) {
      case 'start':
      case 'flex-start':
        css['align-items'] = css['align-content'] = 'flex-start';
        break;
      case 'center':
        css['align-items'] = css['align-content'] = 'center';
        break;
      case 'end':
      case 'flex-end':
        css['align-items'] = css['align-content'] = 'flex-end';
        break;
      case 'space-between':
        css['align-content'] = 'space-between';
        css['align-items'] = 'stretch';
        break;
      case 'space-around':
        css['align-content'] = 'space-around';
        css['align-items'] = 'stretch';
        break;
      case 'baseline':
        css['align-content'] = 'stretch';
        css['align-items'] = 'baseline';
        break;
      case 'stretch':
      default:
        // 'stretch'
        css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
        break;
    }
    return (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(css, {
      'display': parent.inline ? 'inline-flex' : 'flex',
      'flex-direction': parent.layout,
      'box-sizing': 'border-box',
      'max-width': crossAxis === 'stretch' ? !(0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(parent.layout) ? '100%' : null : null,
      'max-height': crossAxis === 'stretch' ? (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(parent.layout) ? '100%' : null : null
    });
  }
}
LayoutAlignStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵLayoutAlignStyleBuilder_BaseFactory;
  return function LayoutAlignStyleBuilder_Factory(t) {
    return (ɵLayoutAlignStyleBuilder_BaseFactory || (ɵLayoutAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder)))(t || LayoutAlignStyleBuilder);
  };
}();
LayoutAlignStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutAlignStyleBuilder,
  factory: LayoutAlignStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const inputs = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
const selector = `
  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],
  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],
  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],
  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]
`;
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 *  @see https://css-tricks.com/almanac/properties/j/justify-content/
 *  @see https://css-tricks.com/almanac/properties/a/align-items/
 *  @see https://css-tricks.com/almanac/properties/a/align-content/
 */
class LayoutAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'layout-align';
    this.layout = 'row'; // default flex-direction
    this.inline = false; // default inline value
    this.init();
    this.marshal.trackValue(this.nativeElement, 'layout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
  }
  // *********************************************
  // Protected methods
  // *********************************************
  /**
   *
   */
  updateWithValue(value) {
    const layout = this.layout || 'row';
    const inline = this.inline;
    if (layout === 'row' && inline) {
      this.styleCache = layoutAlignHorizontalInlineCache;
    } else if (layout === 'row' && !inline) {
      this.styleCache = layoutAlignHorizontalCache;
    } else if (layout === 'row-reverse' && inline) {
      this.styleCache = layoutAlignHorizontalRevInlineCache;
    } else if (layout === 'row-reverse' && !inline) {
      this.styleCache = layoutAlignHorizontalRevCache;
    } else if (layout === 'column' && inline) {
      this.styleCache = layoutAlignVerticalInlineCache;
    } else if (layout === 'column' && !inline) {
      this.styleCache = layoutAlignVerticalCache;
    } else if (layout === 'column-reverse' && inline) {
      this.styleCache = layoutAlignVerticalRevInlineCache;
    } else if (layout === 'column-reverse' && !inline) {
      this.styleCache = layoutAlignVerticalRevCache;
    }
    this.addStyles(value, {
      layout,
      inline
    });
  }
  /**
   * Cache the parent container 'flex-direction' and update the 'flex' styles
   */
  onLayoutChange(matcher) {
    const layoutKeys = matcher.value.split(' ');
    this.layout = layoutKeys[0];
    this.inline = matcher.value.includes('inline');
    if (!_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_VALUES.find(x => x === this.layout)) {
      this.layout = 'row';
    }
    this.triggerUpdate();
  }
}
LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) {
  return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
LayoutAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LayoutAlignDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: LayoutAlignStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
class DefaultLayoutAlignDirective extends LayoutAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }
}
DefaultLayoutAlignDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultLayoutAlignDirective_BaseFactory;
  return function DefaultLayoutAlignDirective_Factory(t) {
    return (ɵDefaultLayoutAlignDirective_BaseFactory || (ɵDefaultLayoutAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective)))(t || DefaultLayoutAlignDirective);
  };
}();
DefaultLayoutAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultLayoutAlignDirective,
  selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]],
  inputs: {
    fxLayoutAlign: "fxLayoutAlign",
    "fxLayoutAlign.xs": "fxLayoutAlign.xs",
    "fxLayoutAlign.sm": "fxLayoutAlign.sm",
    "fxLayoutAlign.md": "fxLayoutAlign.md",
    "fxLayoutAlign.lg": "fxLayoutAlign.lg",
    "fxLayoutAlign.xl": "fxLayoutAlign.xl",
    "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
    "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
    "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
    "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
    "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
    "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
    "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
    "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
const layoutAlignHorizontalCache = new Map();
const layoutAlignVerticalCache = new Map();
const layoutAlignHorizontalRevCache = new Map();
const layoutAlignVerticalRevCache = new Map();
const layoutAlignHorizontalInlineCache = new Map();
const layoutAlignVerticalInlineCache = new Map();
const layoutAlignHorizontalRevInlineCache = new Map();
const layoutAlignVerticalRevInlineCache = new Map();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
class FlexModule {}
FlexModule.ɵfac = function FlexModule_Factory(t) {
  return new (t || FlexModule)();
};
FlexModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FlexModule
});
FlexModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 10712:
/*!*********************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultGridAlignColumnsDirective": () => (/* binding */ DefaultGridAlignColumnsDirective),
/* harmony export */   "DefaultGridAlignDirective": () => (/* binding */ DefaultGridAlignDirective),
/* harmony export */   "DefaultGridAlignRowsDirective": () => (/* binding */ DefaultGridAlignRowsDirective),
/* harmony export */   "DefaultGridAreaDirective": () => (/* binding */ DefaultGridAreaDirective),
/* harmony export */   "DefaultGridAreasDirective": () => (/* binding */ DefaultGridAreasDirective),
/* harmony export */   "DefaultGridAutoDirective": () => (/* binding */ DefaultGridAutoDirective),
/* harmony export */   "DefaultGridColumnDirective": () => (/* binding */ DefaultGridColumnDirective),
/* harmony export */   "DefaultGridColumnsDirective": () => (/* binding */ DefaultGridColumnsDirective),
/* harmony export */   "DefaultGridGapDirective": () => (/* binding */ DefaultGridGapDirective),
/* harmony export */   "DefaultGridRowDirective": () => (/* binding */ DefaultGridRowDirective),
/* harmony export */   "DefaultGridRowsDirective": () => (/* binding */ DefaultGridRowsDirective),
/* harmony export */   "GridAlignColumnsDirective": () => (/* binding */ GridAlignColumnsDirective),
/* harmony export */   "GridAlignColumnsStyleBuilder": () => (/* binding */ GridAlignColumnsStyleBuilder),
/* harmony export */   "GridAlignDirective": () => (/* binding */ GridAlignDirective),
/* harmony export */   "GridAlignRowsDirective": () => (/* binding */ GridAlignRowsDirective),
/* harmony export */   "GridAlignRowsStyleBuilder": () => (/* binding */ GridAlignRowsStyleBuilder),
/* harmony export */   "GridAlignStyleBuilder": () => (/* binding */ GridAlignStyleBuilder),
/* harmony export */   "GridAreaDirective": () => (/* binding */ GridAreaDirective),
/* harmony export */   "GridAreaStyleBuilder": () => (/* binding */ GridAreaStyleBuilder),
/* harmony export */   "GridAreasDirective": () => (/* binding */ GridAreasDirective),
/* harmony export */   "GridAreasStyleBuiler": () => (/* binding */ GridAreasStyleBuiler),
/* harmony export */   "GridAutoDirective": () => (/* binding */ GridAutoDirective),
/* harmony export */   "GridAutoStyleBuilder": () => (/* binding */ GridAutoStyleBuilder),
/* harmony export */   "GridColumnDirective": () => (/* binding */ GridColumnDirective),
/* harmony export */   "GridColumnStyleBuilder": () => (/* binding */ GridColumnStyleBuilder),
/* harmony export */   "GridColumnsDirective": () => (/* binding */ GridColumnsDirective),
/* harmony export */   "GridColumnsStyleBuilder": () => (/* binding */ GridColumnsStyleBuilder),
/* harmony export */   "GridGapDirective": () => (/* binding */ GridGapDirective),
/* harmony export */   "GridGapStyleBuilder": () => (/* binding */ GridGapStyleBuilder),
/* harmony export */   "GridModule": () => (/* binding */ GridModule),
/* harmony export */   "GridRowDirective": () => (/* binding */ GridRowDirective),
/* harmony export */   "GridRowStyleBuilder": () => (/* binding */ GridRowStyleBuilder),
/* harmony export */   "GridRowsDirective": () => (/* binding */ GridRowsDirective),
/* harmony export */   "GridRowsStyleBuilder": () => (/* binding */ GridRowsStyleBuilder)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 44658);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 70867);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ROW_DEFAULT = 'stretch';
const COL_DEFAULT = 'stretch';
class GridAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return buildCss$2(input || ROW_DEFAULT);
  }
}
GridAlignStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAlignStyleBuilder_BaseFactory;
  return function GridAlignStyleBuilder_Factory(t) {
    return (ɵGridAlignStyleBuilder_BaseFactory || (ɵGridAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder)))(t || GridAlignStyleBuilder);
  };
}();
GridAlignStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAlignStyleBuilder,
  factory: GridAlignStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-align';
    this.styleCache = alignCache;
    this.init();
  }
}
GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) {
  return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAlignDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAlignStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const alignCache = new Map();
const inputs$a = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
const selector$a = `
  [gdGridAlign],
  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],
  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],
  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]
`;
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 *  @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 *  @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
class DefaultGridAlignDirective extends GridAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$a;
  }
}
DefaultGridAlignDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAlignDirective_BaseFactory;
  return function DefaultGridAlignDirective_Factory(t) {
    return (ɵDefaultGridAlignDirective_BaseFactory || (ɵDefaultGridAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective)))(t || DefaultGridAlignDirective);
  };
}();
DefaultGridAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAlignDirective,
  selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
  inputs: {
    gdGridAlign: "gdGridAlign",
    "gdGridAlign.xs": "gdGridAlign.xs",
    "gdGridAlign.sm": "gdGridAlign.sm",
    "gdGridAlign.md": "gdGridAlign.md",
    "gdGridAlign.lg": "gdGridAlign.lg",
    "gdGridAlign.xl": "gdGridAlign.xl",
    "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
    "gdGridAlign.lt-md": "gdGridAlign.lt-md",
    "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
    "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
    "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
    "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
    "gdGridAlign.gt-md": "gdGridAlign.gt-md",
    "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$a,
      inputs: inputs$a
    }]
  }], null, null);
})();
function buildCss$2(align = '') {
  const css = {},
    [rowAxis, columnAxis] = align.split(' ');
  // Row axis
  switch (rowAxis) {
    case 'end':
      css['justify-self'] = 'end';
      break;
    case 'center':
      css['justify-self'] = 'center';
      break;
    case 'stretch':
      css['justify-self'] = 'stretch';
      break;
    case 'start':
      css['justify-self'] = 'start';
      break;
    default:
      css['justify-self'] = ROW_DEFAULT; // default row axis
      break;
  }
  // Column axis
  switch (columnAxis) {
    case 'end':
      css['align-self'] = 'end';
      break;
    case 'center':
      css['align-self'] = 'center';
      break;
    case 'stretch':
      css['align-self'] = 'stretch';
      break;
    case 'start':
      css['align-self'] = 'start';
      break;
    default:
      css['align-self'] = COL_DEFAULT; // default column axis
      break;
  }
  return css;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_MAIN$1 = 'start';
const DEFAULT_CROSS$1 = 'stretch';
class GridAlignColumnsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    return buildCss$1(input || `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`, parent.inline);
  }
}
GridAlignColumnsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAlignColumnsStyleBuilder_BaseFactory;
  return function GridAlignColumnsStyleBuilder_Factory(t) {
    return (ɵGridAlignColumnsStyleBuilder_BaseFactory || (ɵGridAlignColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder)))(t || GridAlignColumnsStyleBuilder);
  };
}();
GridAlignColumnsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAlignColumnsStyleBuilder,
  factory: GridAlignColumnsStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridAlignColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-align-columns';
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) {
  return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridAlignColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAlignColumnsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAlignColumnsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const alignColumnsCache = new Map();
const alignColumnsInlineCache = new Map();
const inputs$9 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
const selector$9 = `
  [gdAlignColumns],
  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],
  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],
  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],
  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],
  [gdAlignColumns.gt-lg]
`;
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
class DefaultGridAlignColumnsDirective extends GridAlignColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$9;
  }
}
DefaultGridAlignColumnsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAlignColumnsDirective_BaseFactory;
  return function DefaultGridAlignColumnsDirective_Factory(t) {
    return (ɵDefaultGridAlignColumnsDirective_BaseFactory || (ɵDefaultGridAlignColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective)))(t || DefaultGridAlignColumnsDirective);
  };
}();
DefaultGridAlignColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAlignColumnsDirective,
  selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
  inputs: {
    gdAlignColumns: "gdAlignColumns",
    "gdAlignColumns.xs": "gdAlignColumns.xs",
    "gdAlignColumns.sm": "gdAlignColumns.sm",
    "gdAlignColumns.md": "gdAlignColumns.md",
    "gdAlignColumns.lg": "gdAlignColumns.lg",
    "gdAlignColumns.xl": "gdAlignColumns.xl",
    "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
    "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
    "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
    "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
    "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
    "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
    "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
    "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$9,
      inputs: inputs$9
    }]
  }], null, null);
})();
function buildCss$1(align, inline) {
  const css = {},
    [mainAxis, crossAxis] = align.split(' ');
  // Main axis
  switch (mainAxis) {
    case 'center':
      css['align-content'] = 'center';
      break;
    case 'space-around':
      css['align-content'] = 'space-around';
      break;
    case 'space-between':
      css['align-content'] = 'space-between';
      break;
    case 'space-evenly':
      css['align-content'] = 'space-evenly';
      break;
    case 'end':
      css['align-content'] = 'end';
      break;
    case 'start':
      css['align-content'] = 'start';
      break;
    case 'stretch':
      css['align-content'] = 'stretch';
      break;
    default:
      css['align-content'] = DEFAULT_MAIN$1; // default main axis
      break;
  }
  // Cross-axis
  switch (crossAxis) {
    case 'start':
      css['align-items'] = 'start';
      break;
    case 'center':
      css['align-items'] = 'center';
      break;
    case 'end':
      css['align-items'] = 'end';
      break;
    case 'stretch':
      css['align-items'] = 'stretch';
      break;
    default:
      // 'stretch'
      css['align-items'] = DEFAULT_CROSS$1; // default cross axis
      break;
  }
  css['display'] = inline ? 'inline-grid' : 'grid';
  return css;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_MAIN = 'start';
const DEFAULT_CROSS = 'stretch';
class GridAlignRowsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    return buildCss(input || `${DEFAULT_MAIN} ${DEFAULT_CROSS}`, parent.inline);
  }
}
GridAlignRowsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAlignRowsStyleBuilder_BaseFactory;
  return function GridAlignRowsStyleBuilder_Factory(t) {
    return (ɵGridAlignRowsStyleBuilder_BaseFactory || (ɵGridAlignRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder)))(t || GridAlignRowsStyleBuilder);
  };
}();
GridAlignRowsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAlignRowsStyleBuilder,
  factory: GridAlignRowsStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridAlignRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-align-rows';
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) {
  return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridAlignRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAlignRowsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAlignRowsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const alignRowsCache = new Map();
const alignRowsInlineCache = new Map();
const inputs$8 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
const selector$8 = `
  [gdAlignRows],
  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],
  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],
  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],
  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],
  [gdAlignRows.gt-lg]
`;
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
class DefaultGridAlignRowsDirective extends GridAlignRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$8;
  }
}
DefaultGridAlignRowsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAlignRowsDirective_BaseFactory;
  return function DefaultGridAlignRowsDirective_Factory(t) {
    return (ɵDefaultGridAlignRowsDirective_BaseFactory || (ɵDefaultGridAlignRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective)))(t || DefaultGridAlignRowsDirective);
  };
}();
DefaultGridAlignRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAlignRowsDirective,
  selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
  inputs: {
    gdAlignRows: "gdAlignRows",
    "gdAlignRows.xs": "gdAlignRows.xs",
    "gdAlignRows.sm": "gdAlignRows.sm",
    "gdAlignRows.md": "gdAlignRows.md",
    "gdAlignRows.lg": "gdAlignRows.lg",
    "gdAlignRows.xl": "gdAlignRows.xl",
    "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
    "gdAlignRows.lt-md": "gdAlignRows.lt-md",
    "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
    "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
    "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
    "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
    "gdAlignRows.gt-md": "gdAlignRows.gt-md",
    "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$8,
      inputs: inputs$8
    }]
  }], null, null);
})();
function buildCss(align, inline) {
  const css = {},
    [mainAxis, crossAxis] = align.split(' ');
  // Main axis
  switch (mainAxis) {
    case 'center':
    case 'space-around':
    case 'space-between':
    case 'space-evenly':
    case 'end':
    case 'start':
    case 'stretch':
      css['justify-content'] = mainAxis;
      break;
    default:
      css['justify-content'] = DEFAULT_MAIN; // default main axis
      break;
  }
  // Cross-axis
  switch (crossAxis) {
    case 'start':
    case 'center':
    case 'end':
    case 'stretch':
      css['justify-items'] = crossAxis;
      break;
    default:
      // 'stretch'
      css['justify-items'] = DEFAULT_CROSS; // default cross axis
      break;
  }
  css['display'] = inline ? 'inline-grid' : 'grid';
  return css;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$7 = 'auto';
class GridAreaStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return {
      'grid-area': input || DEFAULT_VALUE$7
    };
  }
}
GridAreaStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAreaStyleBuilder_BaseFactory;
  return function GridAreaStyleBuilder_Factory(t) {
    return (ɵGridAreaStyleBuilder_BaseFactory || (ɵGridAreaStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder)))(t || GridAreaStyleBuilder);
  };
}();
GridAreaStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAreaStyleBuilder,
  factory: GridAreaStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridAreaDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'grid-area';
    this.styleCache = gridAreaCache;
    this.init();
  }
}
GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) {
  return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridAreaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAreaDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: GridAreaStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const gridAreaCache = new Map();
const inputs$7 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
const selector$7 = `
  [gdArea],
  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],
  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],
  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]
`;
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
class DefaultGridAreaDirective extends GridAreaDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$7;
  }
}
DefaultGridAreaDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAreaDirective_BaseFactory;
  return function DefaultGridAreaDirective_Factory(t) {
    return (ɵDefaultGridAreaDirective_BaseFactory || (ɵDefaultGridAreaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective)))(t || DefaultGridAreaDirective);
  };
}();
DefaultGridAreaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAreaDirective,
  selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
  inputs: {
    gdArea: "gdArea",
    "gdArea.xs": "gdArea.xs",
    "gdArea.sm": "gdArea.sm",
    "gdArea.md": "gdArea.md",
    "gdArea.lg": "gdArea.lg",
    "gdArea.xl": "gdArea.xl",
    "gdArea.lt-sm": "gdArea.lt-sm",
    "gdArea.lt-md": "gdArea.lt-md",
    "gdArea.lt-lg": "gdArea.lt-lg",
    "gdArea.lt-xl": "gdArea.lt-xl",
    "gdArea.gt-xs": "gdArea.gt-xs",
    "gdArea.gt-sm": "gdArea.gt-sm",
    "gdArea.gt-md": "gdArea.gt-md",
    "gdArea.gt-lg": "gdArea.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$7,
      inputs: inputs$7
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$6 = 'none';
const DELIMETER = '|';
class GridAreasStyleBuiler extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    const areas = (input || DEFAULT_VALUE$6).split(DELIMETER).map(v => `"${v.trim()}"`);
    return {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-template-areas': areas.join(' ')
    };
  }
}
GridAreasStyleBuiler.ɵfac = /* @__PURE__ */function () {
  let ɵGridAreasStyleBuiler_BaseFactory;
  return function GridAreasStyleBuiler_Factory(t) {
    return (ɵGridAreasStyleBuiler_BaseFactory || (ɵGridAreasStyleBuiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler)))(t || GridAreasStyleBuiler);
  };
}();
GridAreasStyleBuiler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAreasStyleBuiler,
  factory: GridAreasStyleBuiler.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridAreasDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'grid-areas';
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? areasInlineCache : areasCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) {
  return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridAreasDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAreasDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: GridAreasStyleBuiler
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const areasCache = new Map();
const areasInlineCache = new Map();
const inputs$6 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
const selector$6 = `
  [gdAreas],
  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],
  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],
  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]
`;
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
class DefaultGridAreasDirective extends GridAreasDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$6;
  }
}
DefaultGridAreasDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAreasDirective_BaseFactory;
  return function DefaultGridAreasDirective_Factory(t) {
    return (ɵDefaultGridAreasDirective_BaseFactory || (ɵDefaultGridAreasDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective)))(t || DefaultGridAreasDirective);
  };
}();
DefaultGridAreasDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAreasDirective,
  selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
  inputs: {
    gdAreas: "gdAreas",
    "gdAreas.xs": "gdAreas.xs",
    "gdAreas.sm": "gdAreas.sm",
    "gdAreas.md": "gdAreas.md",
    "gdAreas.lg": "gdAreas.lg",
    "gdAreas.xl": "gdAreas.xl",
    "gdAreas.lt-sm": "gdAreas.lt-sm",
    "gdAreas.lt-md": "gdAreas.lt-md",
    "gdAreas.lt-lg": "gdAreas.lt-lg",
    "gdAreas.lt-xl": "gdAreas.lt-xl",
    "gdAreas.gt-xs": "gdAreas.gt-xs",
    "gdAreas.gt-sm": "gdAreas.gt-sm",
    "gdAreas.gt-md": "gdAreas.gt-md",
    "gdAreas.gt-lg": "gdAreas.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$6,
      inputs: inputs$6
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$5 = 'initial';
class GridAutoStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    let [direction, dense] = (input || DEFAULT_VALUE$5).split(' ');
    if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
      direction = 'row';
    }
    dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
    return {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-auto-flow': direction + dense
    };
  }
}
GridAutoStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAutoStyleBuilder_BaseFactory;
  return function GridAutoStyleBuilder_Factory(t) {
    return (ɵGridAutoStyleBuilder_BaseFactory || (ɵGridAutoStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder)))(t || GridAutoStyleBuilder);
  };
}();
GridAutoStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAutoStyleBuilder,
  factory: GridAutoStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridAutoDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this._inline = false;
    this.DIRECTIVE_KEY = 'grid-auto';
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? autoInlineCache : autoCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) {
  return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridAutoDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAutoDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAutoStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const autoCache = new Map();
const autoInlineCache = new Map();
const inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
const selector$5 = `
  [gdAuto],
  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],
  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],
  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]
`;
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
class DefaultGridAutoDirective extends GridAutoDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$5;
  }
}
DefaultGridAutoDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAutoDirective_BaseFactory;
  return function DefaultGridAutoDirective_Factory(t) {
    return (ɵDefaultGridAutoDirective_BaseFactory || (ɵDefaultGridAutoDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective)))(t || DefaultGridAutoDirective);
  };
}();
DefaultGridAutoDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAutoDirective,
  selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
  inputs: {
    gdAuto: "gdAuto",
    "gdAuto.xs": "gdAuto.xs",
    "gdAuto.sm": "gdAuto.sm",
    "gdAuto.md": "gdAuto.md",
    "gdAuto.lg": "gdAuto.lg",
    "gdAuto.xl": "gdAuto.xl",
    "gdAuto.lt-sm": "gdAuto.lt-sm",
    "gdAuto.lt-md": "gdAuto.lt-md",
    "gdAuto.lt-lg": "gdAuto.lt-lg",
    "gdAuto.lt-xl": "gdAuto.lt-xl",
    "gdAuto.gt-xs": "gdAuto.gt-xs",
    "gdAuto.gt-sm": "gdAuto.gt-sm",
    "gdAuto.gt-md": "gdAuto.gt-md",
    "gdAuto.gt-lg": "gdAuto.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$5,
      inputs: inputs$5
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$4 = 'auto';
class GridColumnStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return {
      'grid-column': input || DEFAULT_VALUE$4
    };
  }
}
GridColumnStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridColumnStyleBuilder_BaseFactory;
  return function GridColumnStyleBuilder_Factory(t) {
    return (ɵGridColumnStyleBuilder_BaseFactory || (ɵGridColumnStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder)))(t || GridColumnStyleBuilder);
  };
}();
GridColumnStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridColumnStyleBuilder,
  factory: GridColumnStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridColumnDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-column';
    this.styleCache = columnCache;
    this.init();
  }
}
GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) {
  return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridColumnDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridColumnStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const columnCache = new Map();
const inputs$4 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
const selector$4 = `
  [gdColumn],
  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],
  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],
  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]
`;
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
class DefaultGridColumnDirective extends GridColumnDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$4;
  }
}
DefaultGridColumnDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridColumnDirective_BaseFactory;
  return function DefaultGridColumnDirective_Factory(t) {
    return (ɵDefaultGridColumnDirective_BaseFactory || (ɵDefaultGridColumnDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective)))(t || DefaultGridColumnDirective);
  };
}();
DefaultGridColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridColumnDirective,
  selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
  inputs: {
    gdColumn: "gdColumn",
    "gdColumn.xs": "gdColumn.xs",
    "gdColumn.sm": "gdColumn.sm",
    "gdColumn.md": "gdColumn.md",
    "gdColumn.lg": "gdColumn.lg",
    "gdColumn.xl": "gdColumn.xl",
    "gdColumn.lt-sm": "gdColumn.lt-sm",
    "gdColumn.lt-md": "gdColumn.lt-md",
    "gdColumn.lt-lg": "gdColumn.lt-lg",
    "gdColumn.lt-xl": "gdColumn.lt-xl",
    "gdColumn.gt-xs": "gdColumn.gt-xs",
    "gdColumn.gt-sm": "gdColumn.gt-sm",
    "gdColumn.gt-md": "gdColumn.gt-md",
    "gdColumn.gt-lg": "gdColumn.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$4,
      inputs: inputs$4
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$3 = 'none';
const AUTO_SPECIFIER$1 = '!';
class GridColumnsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE$3;
    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER$1)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
      auto = true;
    }
    const css = {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-auto-columns': '',
      'grid-template-columns': ''
    };
    const key = auto ? 'grid-auto-columns' : 'grid-template-columns';
    css[key] = input;
    return css;
  }
}
GridColumnsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridColumnsStyleBuilder_BaseFactory;
  return function GridColumnsStyleBuilder_Factory(t) {
    return (ɵGridColumnsStyleBuilder_BaseFactory || (ɵGridColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder)))(t || GridColumnsStyleBuilder);
  };
}();
GridColumnsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridColumnsStyleBuilder,
  factory: GridColumnsStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-columns';
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? columnsInlineCache : columnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) {
  return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridColumnsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridColumnsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const columnsCache = new Map();
const columnsInlineCache = new Map();
const inputs$3 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
const selector$3 = `
  [gdColumns],
  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],
  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],
  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]
`;
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
class DefaultGridColumnsDirective extends GridColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }
}
DefaultGridColumnsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridColumnsDirective_BaseFactory;
  return function DefaultGridColumnsDirective_Factory(t) {
    return (ɵDefaultGridColumnsDirective_BaseFactory || (ɵDefaultGridColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective)))(t || DefaultGridColumnsDirective);
  };
}();
DefaultGridColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridColumnsDirective,
  selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
  inputs: {
    gdColumns: "gdColumns",
    "gdColumns.xs": "gdColumns.xs",
    "gdColumns.sm": "gdColumns.sm",
    "gdColumns.md": "gdColumns.md",
    "gdColumns.lg": "gdColumns.lg",
    "gdColumns.xl": "gdColumns.xl",
    "gdColumns.lt-sm": "gdColumns.lt-sm",
    "gdColumns.lt-md": "gdColumns.lt-md",
    "gdColumns.lt-lg": "gdColumns.lt-lg",
    "gdColumns.lt-xl": "gdColumns.lt-xl",
    "gdColumns.gt-xs": "gdColumns.gt-xs",
    "gdColumns.gt-sm": "gdColumns.gt-sm",
    "gdColumns.gt-md": "gdColumns.gt-md",
    "gdColumns.gt-lg": "gdColumns.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$2 = '0';
class GridGapStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    return {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-gap': input || DEFAULT_VALUE$2
    };
  }
}
GridGapStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridGapStyleBuilder_BaseFactory;
  return function GridGapStyleBuilder_Factory(t) {
    return (ɵGridGapStyleBuilder_BaseFactory || (ɵGridGapStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridGapStyleBuilder)))(t || GridGapStyleBuilder);
  };
}();
GridGapStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridGapStyleBuilder,
  factory: GridGapStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'grid-gap';
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? gapInlineCache : gapCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridGapDirective.ɵfac = function GridGapDirective_Factory(t) {
  return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridGapDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: GridGapStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const gapCache = new Map();
const gapInlineCache = new Map();
const inputs$2 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
const selector$2 = `
  [gdGap],
  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],
  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],
  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]
`;
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
class DefaultGridGapDirective extends GridGapDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }
}
DefaultGridGapDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridGapDirective_BaseFactory;
  return function DefaultGridGapDirective_Factory(t) {
    return (ɵDefaultGridGapDirective_BaseFactory || (ɵDefaultGridGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridGapDirective)))(t || DefaultGridGapDirective);
  };
}();
DefaultGridGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridGapDirective,
  selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
  inputs: {
    gdGap: "gdGap",
    "gdGap.xs": "gdGap.xs",
    "gdGap.sm": "gdGap.sm",
    "gdGap.md": "gdGap.md",
    "gdGap.lg": "gdGap.lg",
    "gdGap.xl": "gdGap.xl",
    "gdGap.lt-sm": "gdGap.lt-sm",
    "gdGap.lt-md": "gdGap.lt-md",
    "gdGap.lt-lg": "gdGap.lt-lg",
    "gdGap.lt-xl": "gdGap.lt-xl",
    "gdGap.gt-xs": "gdGap.gt-xs",
    "gdGap.gt-sm": "gdGap.gt-sm",
    "gdGap.gt-md": "gdGap.gt-md",
    "gdGap.gt-lg": "gdGap.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE$1 = 'auto';
class GridRowStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return {
      'grid-row': input || DEFAULT_VALUE$1
    };
  }
}
GridRowStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridRowStyleBuilder_BaseFactory;
  return function GridRowStyleBuilder_Factory(t) {
    return (ɵGridRowStyleBuilder_BaseFactory || (ɵGridRowStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowStyleBuilder)))(t || GridRowStyleBuilder);
  };
}();
GridRowStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridRowStyleBuilder,
  factory: GridRowStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridRowDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-row';
    this.styleCache = rowCache;
    this.init();
  }
}
GridRowDirective.ɵfac = function GridRowDirective_Factory(t) {
  return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridRowDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridRowDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridRowStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();
const rowCache = new Map();
const inputs$1 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
const selector$1 = `
  [gdRow],
  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],
  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],
  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]
`;
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
class DefaultGridRowDirective extends GridRowDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }
}
DefaultGridRowDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridRowDirective_BaseFactory;
  return function DefaultGridRowDirective_Factory(t) {
    return (ɵDefaultGridRowDirective_BaseFactory || (ɵDefaultGridRowDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowDirective)))(t || DefaultGridRowDirective);
  };
}();
DefaultGridRowDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridRowDirective,
  selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
  inputs: {
    gdRow: "gdRow",
    "gdRow.xs": "gdRow.xs",
    "gdRow.sm": "gdRow.sm",
    "gdRow.md": "gdRow.md",
    "gdRow.lg": "gdRow.lg",
    "gdRow.xl": "gdRow.xl",
    "gdRow.lt-sm": "gdRow.lt-sm",
    "gdRow.lt-md": "gdRow.lt-md",
    "gdRow.lt-lg": "gdRow.lt-lg",
    "gdRow.lt-xl": "gdRow.lt-xl",
    "gdRow.gt-xs": "gdRow.gt-xs",
    "gdRow.gt-sm": "gdRow.gt-sm",
    "gdRow.gt-md": "gdRow.gt-md",
    "gdRow.gt-lg": "gdRow.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE = 'none';
const AUTO_SPECIFIER = '!';
class GridRowsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE;
    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
      auto = true;
    }
    const css = {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-auto-rows': '',
      'grid-template-rows': ''
    };
    const key = auto ? 'grid-auto-rows' : 'grid-template-rows';
    css[key] = input;
    return css;
  }
}
GridRowsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridRowsStyleBuilder_BaseFactory;
  return function GridRowsStyleBuilder_Factory(t) {
    return (ɵGridRowsStyleBuilder_BaseFactory || (ɵGridRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder)))(t || GridRowsStyleBuilder);
  };
}();
GridRowsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridRowsStyleBuilder,
  factory: GridRowsStyleBuilder.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class GridRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-rows';
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? rowsInlineCache : rowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
}
GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) {
  return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};
GridRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridRowsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridRowsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();
const rowsCache = new Map();
const rowsInlineCache = new Map();
const inputs = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
const selector = `
  [gdRows],
  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],
  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],
  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]
`;
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
class DefaultGridRowsDirective extends GridRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }
}
DefaultGridRowsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridRowsDirective_BaseFactory;
  return function DefaultGridRowsDirective_Factory(t) {
    return (ɵDefaultGridRowsDirective_BaseFactory || (ɵDefaultGridRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective)))(t || DefaultGridRowsDirective);
  };
}();
DefaultGridRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridRowsDirective,
  selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
  inputs: {
    gdRows: "gdRows",
    "gdRows.xs": "gdRows.xs",
    "gdRows.sm": "gdRows.sm",
    "gdRows.md": "gdRows.md",
    "gdRows.lg": "gdRows.lg",
    "gdRows.xl": "gdRows.xl",
    "gdRows.lt-sm": "gdRows.lt-sm",
    "gdRows.lt-md": "gdRows.lt-md",
    "gdRows.lt-lg": "gdRows.lt-lg",
    "gdRows.lt-xl": "gdRows.lt-xl",
    "gdRows.gt-xs": "gdRows.gt-xs",
    "gdRows.gt-sm": "gdRows.gt-sm",
    "gdRows.gt-md": "gdRows.gt-md",
    "gdRows.gt-lg": "gdRows.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
class GridModule {}
GridModule.ɵfac = function GridModule_Factory(t) {
  return new (t || GridModule)();
};
GridModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GridModule
});
GridModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 62681:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/fesm2020/angular-flex-layout.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAKPOINT": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT),
/* harmony export */   "BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS),
/* harmony export */   "BREAKPOINT_PRINT": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT_PRINT),
/* harmony export */   "BROWSER_PROVIDER": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BROWSER_PROVIDER),
/* harmony export */   "BaseDirective2": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2),
/* harmony export */   "BreakPointRegistry": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BreakPointRegistry),
/* harmony export */   "CLASS_NAME": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME),
/* harmony export */   "ClassDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ClassDirective),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "DEFAULT_BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_BREAKPOINTS),
/* harmony export */   "DEFAULT_CONFIG": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG),
/* harmony export */   "DefaultClassDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultClassDirective),
/* harmony export */   "DefaultFlexAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexAlignDirective),
/* harmony export */   "DefaultFlexDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective),
/* harmony export */   "DefaultFlexOffsetDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexOffsetDirective),
/* harmony export */   "DefaultFlexOrderDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexOrderDirective),
/* harmony export */   "DefaultGridAlignColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAlignColumnsDirective),
/* harmony export */   "DefaultGridAlignDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAlignDirective),
/* harmony export */   "DefaultGridAlignRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAlignRowsDirective),
/* harmony export */   "DefaultGridAreaDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAreaDirective),
/* harmony export */   "DefaultGridAreasDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAreasDirective),
/* harmony export */   "DefaultGridAutoDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAutoDirective),
/* harmony export */   "DefaultGridColumnDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridColumnDirective),
/* harmony export */   "DefaultGridColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridColumnsDirective),
/* harmony export */   "DefaultGridGapDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridGapDirective),
/* harmony export */   "DefaultGridRowDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridRowDirective),
/* harmony export */   "DefaultGridRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridRowsDirective),
/* harmony export */   "DefaultImgSrcDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultImgSrcDirective),
/* harmony export */   "DefaultLayoutAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective),
/* harmony export */   "DefaultLayoutDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective),
/* harmony export */   "DefaultLayoutGapDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective),
/* harmony export */   "DefaultShowHideDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultShowHideDirective),
/* harmony export */   "DefaultStyleDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultStyleDirective),
/* harmony export */   "ExtendedModule": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule),
/* harmony export */   "FlexAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexAlignDirective),
/* harmony export */   "FlexAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexAlignStyleBuilder),
/* harmony export */   "FlexDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexDirective),
/* harmony export */   "FlexFillDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillDirective),
/* harmony export */   "FlexFillStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillStyleBuilder),
/* harmony export */   "FlexLayoutModule": () => (/* binding */ FlexLayoutModule),
/* harmony export */   "FlexModule": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule),
/* harmony export */   "FlexOffsetDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOffsetDirective),
/* harmony export */   "FlexOffsetStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOffsetStyleBuilder),
/* harmony export */   "FlexOrderDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOrderDirective),
/* harmony export */   "FlexOrderStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOrderStyleBuilder),
/* harmony export */   "FlexStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexStyleBuilder),
/* harmony export */   "GridAlignColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignColumnsDirective),
/* harmony export */   "GridAlignColumnsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignColumnsStyleBuilder),
/* harmony export */   "GridAlignDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignDirective),
/* harmony export */   "GridAlignRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignRowsDirective),
/* harmony export */   "GridAlignRowsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignRowsStyleBuilder),
/* harmony export */   "GridAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignStyleBuilder),
/* harmony export */   "GridAreaDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreaDirective),
/* harmony export */   "GridAreaStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreaStyleBuilder),
/* harmony export */   "GridAreasDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreasDirective),
/* harmony export */   "GridAreasStyleBuiler": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreasStyleBuiler),
/* harmony export */   "GridAutoDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAutoDirective),
/* harmony export */   "GridAutoStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAutoStyleBuilder),
/* harmony export */   "GridColumnDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnDirective),
/* harmony export */   "GridColumnStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnStyleBuilder),
/* harmony export */   "GridColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnsDirective),
/* harmony export */   "GridColumnsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnsStyleBuilder),
/* harmony export */   "GridGapDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridGapDirective),
/* harmony export */   "GridGapStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridGapStyleBuilder),
/* harmony export */   "GridModule": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule),
/* harmony export */   "GridRowDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowDirective),
/* harmony export */   "GridRowStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowStyleBuilder),
/* harmony export */   "GridRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowsDirective),
/* harmony export */   "GridRowsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowsStyleBuilder),
/* harmony export */   "ImgSrcDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ImgSrcDirective),
/* harmony export */   "ImgSrcStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ImgSrcStyleBuilder),
/* harmony export */   "LAYOUT_CONFIG": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG),
/* harmony export */   "LayoutAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutAlignDirective),
/* harmony export */   "LayoutAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutAlignStyleBuilder),
/* harmony export */   "LayoutDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutDirective),
/* harmony export */   "LayoutGapDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutGapDirective),
/* harmony export */   "LayoutGapStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutGapStyleBuilder),
/* harmony export */   "LayoutStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutStyleBuilder),
/* harmony export */   "MediaChange": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaChange),
/* harmony export */   "MediaMarshaller": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller),
/* harmony export */   "MediaObserver": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaObserver),
/* harmony export */   "MediaTrigger": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaTrigger),
/* harmony export */   "ORIENTATION_BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.ORIENTATION_BREAKPOINTS),
/* harmony export */   "PrintHook": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.PrintHook),
/* harmony export */   "SERVER_TOKEN": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN),
/* harmony export */   "ScreenTypes": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.ScreenTypes),
/* harmony export */   "ShowHideDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ShowHideDirective),
/* harmony export */   "ShowHideStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ShowHideStyleBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "StyleDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.StyleDirective),
/* harmony export */   "StyleUtils": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils),
/* harmony export */   "StylesheetMap": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StylesheetMap),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "coerceArray": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.coerceArray),
/* harmony export */   "mergeAlias": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.mergeAlias),
/* harmony export */   "removeStyles": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.removeStyles),
/* harmony export */   "sortAscendingPriority": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.sortAscendingPriority),
/* harmony export */   "sortDescendingPriority": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.sortDescendingPriority),
/* harmony export */   "validateBasis": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis),
/* harmony export */   "ɵMatchMedia": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMatchMedia"]),
/* harmony export */   "ɵMockMatchMedia": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMockMatchMedia"]),
/* harmony export */   "ɵMockMatchMediaProvider": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMockMatchMediaProvider"]),
/* harmony export */   "ɵmultiply": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 44658);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/extended */ 63704);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/grid */ 10712);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of Angular Flex-Layout. */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Version('15.0.0-beta.42');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
class FlexLayoutModule {
  constructor(serverModuleLoaded, platformId) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(platformId) && !serverModuleLoaded) {
      console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
    }
  }
  /**
   * Initialize the FlexLayoutModule with a set of config options,
   * which sets the corresponding tokens accordingly
   */
  static withConfig(configOptions,
  // tslint:disable-next-line:max-line-length
  breakpoints = []) {
    return {
      ngModule: FlexLayoutModule,
      providers: configOptions.serverLoaded ? [{
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,
        useValue: {
          ..._angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG,
          ...configOptions
        }
      }, {
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }, {
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN,
        useValue: true
      }] : [{
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,
        useValue: {
          ..._angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG,
          ...configOptions
        }
      }, {
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }]
    };
  }
}
FlexLayoutModule.ɵfac = function FlexLayoutModule_Factory(t) {
  return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
};
FlexLayoutModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: FlexLayoutModule
});
FlexLayoutModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](FlexLayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule],
      exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_auth_login_login_module_ts.js.map