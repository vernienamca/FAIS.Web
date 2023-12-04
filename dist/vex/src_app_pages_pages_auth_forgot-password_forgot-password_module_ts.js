"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_forgot-password_forgot-password_module_ts"],{

/***/ 33848:
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUp400ms": () => (/* binding */ fadeInUp400ms),
/* harmony export */   "fadeInUpAnimation": () => (/* binding */ fadeInUpAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 72223);

function fadeInUpAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(20px)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(0)',
    opacity: 1
  }))])]);
}
const fadeInUp400ms = fadeInUpAnimation(400);

/***/ }),

/***/ 27430:
/*!************************************************************************************!*\
  !*** ./src/app/pages/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordRoutingModule": () => (/* binding */ ForgotPasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component */ 33749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent
}];
class ForgotPasswordRoutingModule {}
ForgotPasswordRoutingModule.ɵfac = function ForgotPasswordRoutingModule_Factory(t) {
  return new (t || ForgotPasswordRoutingModule)();
};
ForgotPasswordRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ForgotPasswordRoutingModule
});
ForgotPasswordRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 33749:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-captcha */ 87796);


//left arrow 











function ForgotPasswordComponent_ng_container_5_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " We can't recover your password without your email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Please enter your email address below");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10)(9, "mat-form-field", 11)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter your email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 12)(13, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ForgotPasswordComponent_ng_container_5_mat_error_14_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ngx-recaptcha2", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_ng_container_5_Template_button_click_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.send($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.aFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("siteKey", ctx_r0.siteKey);
  }
}
function ForgotPasswordComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "RESET PASSWORD REQUEST SENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "A confirmation link is sent to your registered email. Please reset your password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " using the link. If you have not received it, please contact your administrator. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class ForgotPasswordComponent {
  constructor(router, fb, formBuilder) {
    this.router = router;
    this.fb = fb;
    this.formBuilder = formBuilder;
    //left arrow 
    this.icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowLeft;
    this.passwordSent = false;
    this.buttonText = 'SEND RECOVERY LINK';
    //Image URLS 
    this.imageUrl = 'assets/img/icons/forgot-password-icons/Vector.png';
    this.form = this.fb.group({
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    //captcha site key make sure to change this according to your domain (I used Localhost login on transco gmail)
    this.siteKey = "6Lfm5R4pAAAAAH8_jyMZ7AVsigdgQWzHiow3Q7a5";
  }
  ngOnInit() {
    //captcha
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  send(event) {
    //prevent from redirecting when send is clicked 
    event.preventDefault();
    // this.router.navigate(['/']);
    this.imageUrl = 'assets/img/icons/forgot-password-icons/reset-password-sent.svg';
    this.passwordSent = true;
  }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["vex-forgot-password"]],
  decls: 8,
  vars: 3,
  consts: [[1, "logo-container"], ["src", "assets/img/demo/logo.svg", "alt", "Logo"], [1, "rectangle"], [1, "Icon-container", 2, "padding", "20px"], [2, "color", "#043C79", "font-size", "30px", 3, "icon"], [4, "ngIf", "ngIfElse"], ["sent", ""], [1, "Image-container"], ["alt", "Forgot Password", 1, "centered-image", 3, "src"], [1, "text-container"], [1, "flex", "flex-col", "form-container", 3, "formGroup"], ["appearance", "outline"], ["formControlName", "email", "matInput", "", "required", ""], ["matPrefix", "", "svgIcon", "mat:mail", 1, "mr-2"], [4, "ngIf"], [3, "formGroup"], ["formControlName", "recaptcha", 3, "siteKey"], ["captchaElem", ""], ["mat-raised-button", "", "type", "button", "color", "primary", 2, "background-color", "#043C79", "height", "60px", "font-size", "18px", "width", "310px", "height", "30px", "border-radius", "8px", "margin-top", "20px", 3, "click"], [1, "success-message"], ["alt", "Reset Password Sent", 1, "centered-image", 2, "color", "#043C79", 3, "src"], [2, "color", "#555555", "padding-top", "40px"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ForgotPasswordComponent_ng_container_5_Template, 20, 5, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ForgotPasswordComponent_ng_template_6_Template, 10, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordSent)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatPrefix, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, ngx_captcha__WEBPACK_IMPORTED_MODULE_11__.ReCaptcha2Component],
  styles: [".logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 80px;\n}\n\n.rectangle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 10px;\n  background-color: #043C79;\n  margin-top: 10px;\n}\n\n.Image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100vh;\n}\n\n.centered-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 128px;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.text-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  height: 41px;\n  color: #043C79;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 25px;\n}\n\n.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-family: \"Roboto\", sans-serif;\n  color: #555555;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUtFO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVFFO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMRjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFOSjs7QUFVRTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFQSjs7QUFZRTtFQUNFLGtCQUFBO0FBVEoiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28tY29udGFpbmVyIGltZyAge1xyXG4gICAgd2lkdGg6IDI5MHB4OyBcclxuICAgIGhlaWdodDogODBweDsgXHJcbiAgIFxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIC5yZWN0YW5nbGUge1xyXG5cclxuICAgIGZsZXgtZ3JvdzogMTsgXHJcbiAgICBoZWlnaHQ6IDEwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0M0M3OTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG5cclxufVxyXG5cclxuLy9sb2NrIHBpY3R1cmVcclxuLkltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBoZWlnaHQ6IDEwMHZoOyBcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlcmVkLWltYWdlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMjhweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtY29udGFpbmVyIGgyIHtcclxuICAgIGhlaWdodDogNDFweDtcclxuICBcclxuICAgIGNvbG9yOiMwNDNDNzk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBcclxuICB9XHJcbiBcclxuICAudGV4dC1jb250YWluZXIgcCB7XHJcbiAgICBtYXJnaW46IDVweCAwOyBcclxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmOyBcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG5cclxuICB9XHJcbiAgXHJcblxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgXHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
  }
});


/***/ }),

/***/ 74891:
/*!****************************************************************************!*\
  !*** ./src/app/pages/pages/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordModule": () => (/* binding */ ForgotPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 27430);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component */ 33749);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-captcha */ 87796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);










class ForgotPasswordModule {}
ForgotPasswordModule.ɵfac = function ForgotPasswordModule_Factory(t) {
  return new (t || ForgotPasswordModule)();
};
ForgotPasswordModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ForgotPasswordModule
});
ForgotPasswordModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule, ngx_captcha__WEBPACK_IMPORTED_MODULE_9__.NgxCaptchaModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForgotPasswordModule, {
    declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule, ngx_captcha__WEBPACK_IMPORTED_MODULE_9__.NgxCaptchaModule]
  });
})();

/***/ }),

/***/ 87796:
/*!***********************************************************!*\
  !*** ./node_modules/ngx-captcha/fesm2020/ngx-captcha.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseReCaptchaComponentDirective": () => (/* binding */ BaseReCaptchaComponentDirective),
/* harmony export */   "InvisibleReCaptchaComponent": () => (/* binding */ InvisibleReCaptchaComponent),
/* harmony export */   "NgxCaptchaModule": () => (/* binding */ NgxCaptchaModule),
/* harmony export */   "ReCaptcha2Component": () => (/* binding */ ReCaptcha2Component),
/* harmony export */   "ReCaptchaType": () => (/* binding */ ReCaptchaType),
/* harmony export */   "ReCaptchaV3Service": () => (/* binding */ ReCaptchaV3Service),
/* harmony export */   "ScriptService": () => (/* binding */ ScriptService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);




const _c0 = ["captchaWrapperElem"];
class ScriptService {
  constructor(zone) {
    this.zone = zone;
    this.scriptElemId = "ngx-catpcha-script";
    /**
     * Name of the global google recaptcha script
     */
    this.windowGrecaptcha = "grecaptcha";
    /**
     * Name of enterpise property in the global google recaptcha script
     */
    this.windowGrecaptchaEnterprise = "enterprise";
    /**
     * Name of the global callback
     */
    this.windowOnLoadCallbackProperty = "ngx_captcha_onload_callback";
    /**
     * Name of the global callback for enterprise
     */
    this.windowOnLoadEnterpriseCallbackProperty = "ngx_captcha_onload_enterprise_callback";
    this.globalDomain = "recaptcha.net";
    this.defaultDomain = "google.com";
    this.enterpriseApi = "enterprise.js";
    this.defaultApi = "api.js";
  }
  registerCaptchaScript(config, render, onLoad, language) {
    if (this.grecaptchaScriptLoaded(config.useEnterprise)) {
      // recaptcha script is already loaded
      // just call the callback
      if (config.useEnterprise) {
        this.zone.run(() => {
          onLoad(window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]);
        });
      } else {
        this.zone.run(() => {
          onLoad(window[this.windowGrecaptcha]);
        });
      }
      return;
    }
    // we need to patch the callback through global variable, otherwise callback is not accessible
    // note: https://github.com/Enngage/ngx-captcha/issues/2
    if (config.useEnterprise) {
      window[this.getCallbackName(true)] = () => this.zone.run(onLoad.bind(this, window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]));
    } else {
      window[this.getCallbackName(false)] = () => this.zone.run(onLoad.bind(this, window[this.windowGrecaptcha]));
    }
    // prepare script elem
    const scriptElem = document.createElement("script");
    scriptElem.id = this.scriptElemId;
    scriptElem.innerHTML = "";
    scriptElem.src = this.getCaptchaScriptUrl(config, render, language);
    scriptElem.async = true;
    scriptElem.defer = true;
    // add script to header
    document.getElementsByTagName("head")[0].appendChild(scriptElem);
  }
  cleanup() {
    const elem = document.getElementById(this.scriptElemId);
    if (elem) {
      elem.remove();
    }
    window[this.getCallbackName()] = undefined;
    window[this.windowGrecaptcha] = undefined;
  }
  /**
   * Indicates if google recaptcha script is available and ready to be used
   */
  grecaptchaScriptLoaded(useEnterprise) {
    if (!window[this.getCallbackName(useEnterprise)] || !window[this.windowGrecaptcha]) {
      return false;
    } else if (useEnterprise && window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]) {
      return true;
      // if only enterprise script is loaded we need to check some v3's method
    } else if (window[this.windowGrecaptcha].execute) {
      return true;
    }
    return false;
  }
  /**
   * Gets global callback name
   * @param useEnterprise Optional flag for enterprise script
   * @private
   */
  getCallbackName(useEnterprise) {
    return useEnterprise ? this.windowOnLoadEnterpriseCallbackProperty : this.windowOnLoadCallbackProperty;
  }
  /**
   * Gets language param used in script url
   */
  getLanguageParam(hl) {
    if (!hl) {
      return "";
    }
    return `&hl=${hl}`;
  }
  /**
   * Url to google api script
   */
  getCaptchaScriptUrl(config, render, language) {
    const domain = config.useGlobalDomain ? this.globalDomain : this.defaultDomain;
    const api = config.useEnterprise ? this.enterpriseApi : this.defaultApi;
    const callback = this.getCallbackName(config.useEnterprise);
    return `https://www.${domain}/recaptcha/${api}?onload=${callback}&render=${render}${this.getLanguageParam(language)}`;
  }
}
/** @nocollapse */
ScriptService.ɵfac = function ScriptService_Factory(t) {
  return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
/** @nocollapse */
ScriptService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScriptService,
  factory: ScriptService.ɵfac,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class BaseReCaptchaComponentDirective {
  constructor(renderer, zone, injector, scriptService) {
    this.renderer = renderer;
    this.zone = zone;
    this.injector = injector;
    this.scriptService = scriptService;
    /**
     * Prefix of the captcha element
     */
    this.captchaElemPrefix = "ngx_captcha_id_";
    this.setupCaptcha = true;
    /**
     * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
     */
    this.useGlobalDomain = false;
    this.useEnterprise = false;
    /**
     * Type
     */
    this.type = "image";
    /**
     * Tab index
     */
    this.tabIndex = 0;
    /**
     * Called when captcha receives successful response.
     * Captcha response token is passed to event.
     */
    this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when captcha is loaded. Event receives id of the captcha
     */
    this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when captcha is reset.
     */
    this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
     */
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Error callback
     */
    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Expired callback
     */
    this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Indicates if captcha should be set on load
     */
    this.setupAfterLoad = false;
    /**
     * If enabled, captcha will reset after receiving success response. This is useful
     * when invisible captcha need to be resolved multiple times on same page
     */
    this.resetCaptchaAfterSuccess = false;
    /**
     * Required by ControlValueAccessor
     */
    this.onChange = val => {};
    this.onTouched = val => {};
    /**
     * Indicates if captcha is loaded
     */
    this.isLoaded = false;
  }
  ngAfterViewInit() {
    this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, undefined, _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectFlags.Optional)?.control;
  }
  ngAfterViewChecked() {
    if (this.setupCaptcha) {
      this.setupCaptcha = false;
      this.setupComponent();
    }
  }
  ngOnChanges(changes) {
    // cleanup scripts if language changed because they need to be reloaded
    if (changes && changes.hl) {
      // cleanup scripts when language changes
      if (!changes.hl.firstChange && changes.hl.currentValue !== changes.hl.previousValue) {
        this.scriptService.cleanup();
      }
    }
    if (changes && changes.useGlobalDomain) {
      // cleanup scripts when domain changes
      if (!changes.useGlobalDomain.firstChange && changes.useGlobalDomain.currentValue !== changes.useGlobalDomain.previousValue) {
        this.scriptService.cleanup();
      }
    }
    this.setupCaptcha = true;
  }
  /**
   * Gets captcha response as per reCaptcha docs
   */
  getResponse() {
    return this.reCaptchaApi.getResponse(this.captchaId);
  }
  /**
   * Gets Id of captcha widget
   */
  getCaptchaId() {
    return this.captchaId;
  }
  /**
   * Resets captcha
   */
  resetCaptcha() {
    this.zone.run(() => {
      // reset captcha using Google js api
      this.reCaptchaApi.reset();
      // required due to forms
      this.onChange(undefined);
      this.onTouched(undefined);
      // trigger reset event
      this.reset.next();
    });
  }
  /**
   * Gets last submitted captcha response
   */
  getCurrentResponse() {
    return this.currentResponse;
  }
  /**
   * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
   */
  reloadCaptcha() {
    this.setupComponent();
  }
  ensureCaptchaElem(captchaElemId) {
    const captchaElem = document.getElementById(captchaElemId);
    if (!captchaElem) {
      throw Error(`Captcha element with id '${captchaElemId}' was not found`);
    }
    // assign captcha alem
    this.captchaElem = captchaElem;
  }
  /**
   * Responsible for instantiating captcha element
   */
  renderReCaptcha() {
    // run outside angular zone due to timeout issues when testing
    // details: https://github.com/Enngage/ngx-captcha/issues/26
    this.zone.runOutsideAngular(() => {
      // to fix reCAPTCHA placeholder element must be an element or id
      // https://github.com/Enngage/ngx-captcha/issues/96
      setTimeout(() => {
        this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
        this.ready.next();
      }, 0);
    });
  }
  /**
   * Called when captcha receives response
   * @param callback Callback
   */
  handleCallback(callback) {
    this.currentResponse = callback;
    this.success.next(callback);
    this.zone.run(() => {
      this.onChange(callback);
      this.onTouched(callback);
    });
    if (this.resetCaptchaAfterSuccess) {
      this.resetCaptcha();
    }
  }
  getPseudoUniqueNumber() {
    return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
  }
  setupComponent() {
    // captcha specific setup
    this.captchaSpecificSetup();
    // create captcha wrapper
    this.createAndSetCaptchaElem();
    this.scriptService.registerCaptchaScript({
      useGlobalDomain: this.useGlobalDomain,
      useEnterprise: this.useEnterprise
    }, "explicit", grecaptcha => {
      this.onloadCallback(grecaptcha);
    }, this.hl);
  }
  /**
   * Called when google's recaptcha script is ready
   */
  onloadCallback(grecapcha) {
    // assign reference to reCaptcha Api once its loaded
    this.reCaptchaApi = grecapcha;
    if (!this.reCaptchaApi) {
      throw Error(`ReCaptcha Api was not initialized correctly`);
    }
    // loaded flag
    this.isLoaded = true;
    // fire load event
    this.load.next();
    // render captcha
    this.renderReCaptcha();
    // setup component if it was flagged as such
    if (this.setupAfterLoad) {
      this.setupAfterLoad = false;
      this.setupComponent();
    }
  }
  generateNewElemId() {
    return this.captchaElemPrefix + this.getPseudoUniqueNumber();
  }
  createAndSetCaptchaElem() {
    // generate new captcha id
    this.captchaElemId = this.generateNewElemId();
    if (!this.captchaElemId) {
      throw Error(`Captcha elem Id is not set`);
    }
    if (!this.captchaWrapperElem) {
      throw Error(`Captcha DOM element is not initialized`);
    }
    // remove old html
    this.captchaWrapperElem.nativeElement.innerHTML = "";
    // create new wrapper for captcha
    const newElem = this.renderer.createElement("div");
    newElem.id = this.captchaElemId;
    this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
    // when use captcha in cdk stepper then throwing error Captcha element with id 'ngx_captcha_id_XXXX' not found
    // to fix it checking ensureCaptchaElem in timeout so that its check in next call and its able to find element
    setTimeout(() => {
      // update captcha elem
      if (this.captchaElemId) {
        this.ensureCaptchaElem(this.captchaElemId);
      }
    }, 0);
  }
  /**
   * To be aligned with the ControlValueAccessor interface we need to implement this method
   * However as we don't want to update the recaptcha, this doesn't need to be implemented
   */
  writeValue(obj) {}
  /**
   * This method helps us tie together recaptcha and our formControl values
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * At some point we might be interested whether the user has touched our component
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Handles error callback
   */
  handleErrorCallback() {
    this.zone.run(() => {
      this.onChange(undefined);
      this.onTouched(undefined);
    });
    this.error.next();
  }
  /**
   * Handles expired callback
   */
  handleExpireCallback() {
    this.expire.next();
    // reset captcha on expire callback
    this.resetCaptcha();
  }
}
/** @nocollapse */
BaseReCaptchaComponentDirective.ɵfac = function BaseReCaptchaComponentDirective_Factory(t) {
  return new (t || BaseReCaptchaComponentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptService));
};
/** @nocollapse */
BaseReCaptchaComponentDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BaseReCaptchaComponentDirective,
  inputs: {
    siteKey: "siteKey",
    useGlobalDomain: "useGlobalDomain",
    useEnterprise: "useEnterprise",
    type: "type",
    hl: "hl",
    tabIndex: "tabIndex"
  },
  outputs: {
    success: "success",
    load: "load",
    reset: "reset",
    ready: "ready",
    error: "error",
    expire: "expire"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseReCaptchaComponentDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: ScriptService
    }];
  }, {
    siteKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useGlobalDomain: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useEnterprise: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    success: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    load: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expire: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
var ReCaptchaType;
(function (ReCaptchaType) {
  ReCaptchaType[ReCaptchaType["InvisibleReCaptcha"] = 0] = "InvisibleReCaptcha";
  ReCaptchaType[ReCaptchaType["ReCaptcha2"] = 1] = "ReCaptcha2";
})(ReCaptchaType || (ReCaptchaType = {}));
class InvisibleReCaptchaComponent extends BaseReCaptchaComponentDirective {
  constructor(renderer, zone, injector, scriptService) {
    super(renderer, zone, injector, scriptService);
    this.renderer = renderer;
    this.zone = zone;
    this.injector = injector;
    this.scriptService = scriptService;
    /**
     * This size representing invisible captcha
     */
    this.size = 'invisible';
    /**
     * Theme
     */
    this.theme = 'light';
    /**
     * Badge
     */
    this.badge = 'bottomright';
    this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /**
   * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
   */
  execute() {
    // execute captcha
    this.zone.runOutsideAngular(() => this.reCaptchaApi.execute(this.captchaId));
  }
  captchaSpecificSetup() {}
  /**
  * Gets reCaptcha properties
  */
  getCaptchaProperties() {
    return {
      'sitekey': this.siteKey,
      'callback': response => this.zone.run(() => this.handleCallback(response)),
      'expired-callback': () => this.zone.run(() => this.handleExpireCallback()),
      'error-callback': () => this.zone.run(() => this.handleErrorCallback()),
      'badge': this.badge,
      'type': this.type,
      'tabindex': this.tabIndex,
      'size': this.size,
      'theme': this.theme
    };
  }
}
/** @nocollapse */
InvisibleReCaptchaComponent.ɵfac = function InvisibleReCaptchaComponent_Factory(t) {
  return new (t || InvisibleReCaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptService));
};
/** @nocollapse */
InvisibleReCaptchaComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InvisibleReCaptchaComponent,
  selectors: [["ngx-invisible-recaptcha"]],
  viewQuery: function InvisibleReCaptchaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.captchaWrapperElem = _t.first);
    }
  },
  inputs: {
    theme: "theme",
    badge: "badge"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InvisibleReCaptchaComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["captchaWrapperElem", ""]],
  template: function InvisibleReCaptchaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvisibleReCaptchaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-invisible-recaptcha',
      template: `
  <div #captchaWrapperElem></div>`,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InvisibleReCaptchaComponent),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: ScriptService
    }];
  }, {
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    badge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    captchaWrapperElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['captchaWrapperElem', {
        static: false
      }]
    }]
  });
})();
class ReCaptcha2Component extends BaseReCaptchaComponentDirective {
  constructor(renderer, zone, injector, scriptService) {
    super(renderer, zone, injector, scriptService);
    this.renderer = renderer;
    this.zone = zone;
    this.injector = injector;
    this.scriptService = scriptService;
    /**
    * Name of the global expire callback
    */
    this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
    /**
    * Name of the global error callback
    */
    this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
    /**
     * Theme
     */
    this.theme = 'light';
    /**
    * Size
    */
    this.size = 'normal';
    this.recaptchaType = ReCaptchaType.ReCaptcha2;
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  ngOnDestroy() {
    window[this.windowOnErrorCallbackProperty] = {};
    window[this.windowOnExpireCallbackProperty] = {};
  }
  captchaSpecificSetup() {
    this.registerCallbacks();
  }
  /**
   * Gets reCaptcha properties
  */
  getCaptchaProperties() {
    return {
      'sitekey': this.siteKey,
      'callback': response => this.zone.run(() => this.handleCallback(response)),
      'expired-callback': () => this.zone.run(() => this.handleExpireCallback()),
      'error-callback': () => this.zone.run(() => this.handleErrorCallback()),
      'theme': this.theme,
      'type': this.type,
      'size': this.size,
      'tabindex': this.tabIndex
    };
  }
  /**
   * Registers global callbacks
  */
  registerCallbacks() {
    window[this.windowOnErrorCallbackProperty] = super.handleErrorCallback.bind(this);
    window[this.windowOnExpireCallbackProperty] = super.handleExpireCallback.bind(this);
  }
}
/** @nocollapse */
ReCaptcha2Component.ɵfac = function ReCaptcha2Component_Factory(t) {
  return new (t || ReCaptcha2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptService));
};
/** @nocollapse */
ReCaptcha2Component.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ReCaptcha2Component,
  selectors: [["ngx-recaptcha2"]],
  viewQuery: function ReCaptcha2Component_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.captchaWrapperElem = _t.first);
    }
  },
  inputs: {
    theme: "theme",
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ReCaptcha2Component),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["captchaWrapperElem", ""]],
  template: function ReCaptcha2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptcha2Component, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-recaptcha2',
      template: `
  <div #captchaWrapperElem></div>`,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ReCaptcha2Component),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: ScriptService
    }];
  }, {
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    captchaWrapperElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['captchaWrapperElem', {
        static: false
      }]
    }]
  });
})();
class ReCaptchaV3Service {
  constructor(scriptService, zone) {
    this.scriptService = scriptService;
    this.zone = zone;
  }
  /**
   * Executes reCaptcha v3/Enterprise with given action and passes token via callback. You need to verify
   * this callback in your backend to get meaningful results.
   *
   * For more information see https://developers.google.com/recaptcha/docs/v3
   * For enterprise see https://cloud.google.com/recaptcha-enterprise/docs
   *
   * @param siteKey Site key found in your google admin panel
   * @param action Action to log
   * @param callback Callback function to to handle token
   * @param config Optional configuration like useGlobalDomain to be provided
   * @param errorCallback Optional Callback function to handle errors
   */
  execute(siteKey, action, callback, config, errorCallback) {
    this.executeAsPromise(siteKey, action, config).then(callback).catch(error => errorCallback ? errorCallback(error) : console.error(error));
  }
  /**
   * Executes reCaptcha v3/Enterprise with given action and returns token via Promise. You need to verify
   * this token in your backend to get meaningful results.
   *
   * For more information see https://developers.google.com/recaptcha/docs/v3
   * For enterprise see https://cloud.google.com/recaptcha-enterprise/docs
   *
   * @param siteKey Site key found in your google admin panel
   * @param action Action to log
   * @param config Optional configuration like useGlobalDomain to be provided
   */
  executeAsPromise(siteKey, action, config) {
    return new Promise((resolve, reject) => {
      const configuration = config || {};
      const onRegister = grecaptcha => {
        this.zone.runOutsideAngular(() => {
          try {
            grecaptcha.execute(siteKey, {
              action
            }).then(token => this.zone.run(() => resolve(token)));
          } catch (error) {
            reject(error);
          }
        });
      };
      this.scriptService.registerCaptchaScript(configuration, siteKey, onRegister);
    });
  }
}
/** @nocollapse */
ReCaptchaV3Service.ɵfac = function ReCaptchaV3Service_Factory(t) {
  return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScriptService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
/** @nocollapse */
ReCaptchaV3Service.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ReCaptchaV3Service,
  factory: ReCaptchaV3Service.ɵfac,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [{
      type: ScriptService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class NgxCaptchaModule {}
/** @nocollapse */
NgxCaptchaModule.ɵfac = function NgxCaptchaModule_Factory(t) {
  return new (t || NgxCaptchaModule)();
};
/** @nocollapse */
NgxCaptchaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxCaptchaModule
});
/** @nocollapse */
NgxCaptchaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [ScriptService, ReCaptchaV3Service],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCaptchaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [ReCaptcha2Component, InvisibleReCaptchaComponent],
      providers: [ScriptService, ReCaptchaV3Service],
      exports: [ReCaptcha2Component, InvisibleReCaptchaComponent]
    }]
  }], null, null);
})();

/*
 * Public API
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_auth_forgot-password_forgot-password_module_ts.js.map