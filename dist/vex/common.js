"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["common"],{

/***/ 24971:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-checkbox/components-overview-checkbox.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewCheckboxComponent": () => (/* binding */ ComponentsOverviewCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);




class ComponentsOverviewCheckboxComponent {
  constructor() {
    this.checkboxHTML = `<mat-checkbox>Checkbox</mat-checkbox>
<mat-checkbox color="primary" [checked]="true">Primary</mat-checkbox>
<mat-checkbox color="accent" [checked]="true">Accent</mat-checkbox>
<mat-checkbox color="warn" [checked]="true">Warn</mat-checkbox>
<mat-checkbox disabled [checked]="true">Disabled</mat-checkbox>
<mat-checkbox [indeterminate]="true">Indeterminate</mat-checkbox>`;
  }
  ngOnInit() {}
}
ComponentsOverviewCheckboxComponent.ɵfac = function ComponentsOverviewCheckboxComponent_Factory(t) {
  return new (t || ComponentsOverviewCheckboxComponent)();
};
ComponentsOverviewCheckboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewCheckboxComponent,
  selectors: [["vex-components-overview-checkbox"]],
  decls: 34,
  vars: 6,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "gap-3"], ["color", "primary", 3, "checked"], ["color", "accent", 3, "checked"], ["color", "warn", 3, "checked"], ["disabled", "", 3, "checked"], [3, "indeterminate"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "mat-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-checkbox", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Accent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-checkbox", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Warn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-checkbox", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-checkbox", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Indeterminate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "div", 1)(19, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "<mat-checkbox>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-tab-group")(24, "mat-tab", 11)(25, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Checkboxes allow the user to select multiple options from a set. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "If you have a single option, avoid using a checkbox and use an on/off switch instead. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-tab", 12)(32, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "code", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("indeterminate", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.checkboxHTML);
    }
  },
  dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckbox, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 64010:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-checkbox/components-overview-checkbox.module.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewCheckboxModule": () => (/* binding */ ComponentsOverviewCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-checkbox.component */ 24971);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class ComponentsOverviewCheckboxModule {}
ComponentsOverviewCheckboxModule.ɵfac = function ComponentsOverviewCheckboxModule_Factory(t) {
  return new (t || ComponentsOverviewCheckboxModule)();
};
ComponentsOverviewCheckboxModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewCheckboxModule
});
ComponentsOverviewCheckboxModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewCheckboxModule, {
    declarations: [_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewCheckboxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
    exports: [_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewCheckboxComponent]
  });
})();

/***/ }),

/***/ 7897:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewDialogsComponent": () => (/* binding */ ComponentsOverviewDialogsComponent),
/* harmony export */   "DemoDialogComponent": () => (/* binding */ DemoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 69941);







function ComponentsOverviewDialogsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("You answered with: ", ctx_r0.result, "");
  }
}
class ComponentsOverviewDialogsComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.dialogHTML = `<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
<p *ngIf="result">You chose: {{ result }}</p>
`;
  }
  openDialog() {
    this.dialog.open(DemoDialogComponent, {
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
    });
  }
}
ComponentsOverviewDialogsComponent.ɵfac = function ComponentsOverviewDialogsComponent_Factory(t) {
  return new (t || ComponentsOverviewDialogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
};
ComponentsOverviewDialogsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewDialogsComponent,
  selectors: [["vex-components-overview-dialogs"]],
  decls: 37,
  vars: 2,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-6"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "click"], [4, "ngIf"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], [1, "semi-bold"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewDialogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentsOverviewDialogsComponent_Template_button_click_5_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Open Dialog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ComponentsOverviewDialogsComponent_p_7_Template, 2, 1, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 1)(10, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Dialogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "<mat-dialog>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-tab-group")(15, "mat-tab", 8)(16, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br")(19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Some dialog types include:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Alerts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " are urgent interruptions that inform about a situation and require acknowledgement. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Simple menus");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " display options for list items, whereas simple dialogs can provide details or actions about a list item. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Confirmation dialogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " require users to explicitly confirm a choice. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-tab", 10)(35, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "code", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.dialogHTML);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy1kaWFsb2dzL2NvbXBvbmVudHMtb3ZlcnZpZXctZGlhbG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

class DemoDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  close(answer) {
    this.dialogRef.close(answer);
  }
}
DemoDialogComponent.ɵfac = function DemoDialogComponent_Factory(t) {
  return new (t || DemoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
};
DemoDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DemoDialogComponent,
  selectors: [["vex-components-overview-demo-dialog"]],
  decls: 13,
  vars: 0,
  consts: [["mat-dialog-title", "", 1, "flex", "items-center", "justify-between"], ["type", "button", "mat-icon-button", "", "tabindex", "-1", 3, "click"], ["svgIcon", "mat:close"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]],
  template: function DemoDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Question");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_3_listener() {
        return ctx.close("No answer");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-content")(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Do you like Pizza?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-actions", 3)(9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_9_listener() {
        return ctx.close("No");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_11_listener() {
        return ctx.close("Yes");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
  encapsulation: 2
});


/***/ }),

/***/ 3570:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.module.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewDialogsModule": () => (/* binding */ ComponentsOverviewDialogsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-dialogs.component */ 7897);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);








class ComponentsOverviewDialogsModule {}
ComponentsOverviewDialogsModule.ɵfac = function ComponentsOverviewDialogsModule_Factory(t) {
  return new (t || ComponentsOverviewDialogsModule)();
};
ComponentsOverviewDialogsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewDialogsModule
});
ComponentsOverviewDialogsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewDialogsModule, {
    declarations: [_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewDialogsComponent, _components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_0__.DemoDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule],
    exports: [_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewDialogsComponent]
  });
})();

/***/ }),

/***/ 62334:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-input/components-overview-input.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewInputComponent": () => (/* binding */ ComponentsOverviewInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 83677);








function ComponentsOverviewInputComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentsOverviewInputComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.show());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComponentsOverviewInputComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentsOverviewInputComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComponentsOverviewInputComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentsOverviewInputComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.show());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComponentsOverviewInputComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentsOverviewInputComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ComponentsOverviewInputComponent {
  constructor(cd) {
    this.cd = cd;
    this.inputHTML = `<mat-form-field>
  <button *ngIf="!visible" type="button" mat-icon-button matPrefix (click)="show()">
    <mat-icon matPrefix>lock</mat-icon>
  </button>
  <button *ngIf="visible" type="button" mat-icon-button matPrefix (click)="hide()">
    <mat-icon matPrefix>lock_open</mat-icon>
  </button>
  <mat-label>Password</mat-label>
  <input matInput [type]="inputType">
  <button *ngIf="!visible" type="button" mat-icon-button matSuffix (click)="show()">
    <mat-icon>visibility</mat-icon>
  </button>
  <button *ngIf="visible" type="button" mat-icon-button matSuffix (click)="hide()">
    <mat-icon>visibility_off</mat-icon>
  </button>
</mat-form-field>`;
    this.inputType = 'password';
    this.visible = false;
  }
  ngOnInit() {}
  show() {
    this.inputType = 'text';
    this.visible = true;
    this.cd.markForCheck();
  }
  hide() {
    this.inputType = 'password';
    this.visible = false;
    this.cd.markForCheck();
  }
}
ComponentsOverviewInputComponent.ɵfac = function ComponentsOverviewInputComponent_Factory(t) {
  return new (t || ComponentsOverviewInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
ComponentsOverviewInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewInputComponent,
  selectors: [["vex-components-overview-input"]],
  decls: 28,
  vars: 6,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col"], ["mat-icon-button", "", "matPrefix", "", "type", "button", 3, "click", 4, "ngIf"], ["matInput", "", "value", "Hello!", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click", 4, "ngIf"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"], ["mat-icon-button", "", "matPrefix", "", "type", "button", 3, "click"], ["matPrefix", "", "svgIcon", "mat:lock"], ["matPrefix", "", "svgIcon", "mat:lock_open"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["svgIcon", "mat:visibility"], ["svgIcon", "mat:visibility_off"]],
  template: function ComponentsOverviewInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ComponentsOverviewInputComponent_button_6_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ComponentsOverviewInputComponent_button_7_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ComponentsOverviewInputComponent_button_11_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ComponentsOverviewInputComponent_button_12_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Try clicking the eye or the lock to toggle the visibility.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 1)(17, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "<mat-input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-tab-group")(22, "mat-tab", 9)(23, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Text fields typically reside in forms but can appear in other places, like dialog boxes and search. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-tab", 10)(26, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "code", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.inputType);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.inputHTML);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 11732:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-input/components-overview-input.module.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewInputModule": () => (/* binding */ ComponentsOverviewInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-input.component */ 62334);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);








class ComponentsOverviewInputModule {}
ComponentsOverviewInputModule.ɵfac = function ComponentsOverviewInputModule_Factory(t) {
  return new (t || ComponentsOverviewInputModule)();
};
ComponentsOverviewInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewInputModule
});
ComponentsOverviewInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewInputModule, {
    declarations: [_components_overview_input_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewInputComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule],
    exports: [_components_overview_input_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewInputComponent]
  });
})();

/***/ }),

/***/ 43356:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewListsComponent": () => (/* binding */ ComponentsOverviewListsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 16069);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 20445);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);





class ComponentsOverviewListsComponent {
  constructor() {
    this.listHTML = `<mat-list class="list mat-elevation-z1">
  <h3 mat-subheader>Contacts</h3>
  <mat-list-item>
    <img mat-list-avatar src="assets/img/avatars/1.jpg">
    <h3 matLine>John</h3>
    <p matLine>
      <span>Brunch?</span>
      <span class="subline">-- Did you want to go on Sunday? I was thinking</span>
    </p>
  </mat-list-item>
  <mat-list-item>
    <img mat-list-avatar src="assets/img/avatars/2.jpg">
    <h3 matLine>Peter</h3>
    <p matLine>
      <span>Summer BBQ</span>
      <span class="subline">-- Wish I could come, but I have some special</span>
    </p>
  </mat-list-item>
  <mat-list-item>
    <img mat-list-avatar src="assets/img/avatars/3.jpg">
    <h3 matLine>Nancy</h3>
    <p matLine>
      <span>Oui oui</span>
      <span class="subline">-- Have you booked the Paris trip?</span>
    </p>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 mat-subheader>Other</h3>
  <mat-list-item>
    <img mat-list-avatar src="assets/img/avatars/4.jpg">
    <h3 matLine>Frank</h3>
    <p matLine>
      <span>Pretty decent!</span>
      <span class="subline">-- You look pretty... decent!</span>
    </p>
  </mat-list-item>
  <mat-list-item>
    <img mat-list-avatar src="assets/img/avatars/5.jpg">
    <h3 matLine>Donald</h3>
    <p matLine>
      <span>That's great!</span>
      <span class="subline">-- Great work mate!</span>
    </p>
  </mat-list-item>
</mat-list>`;
  }
  ngOnInit() {}
}
ComponentsOverviewListsComponent.ɵfac = function ComponentsOverviewListsComponent_Factory(t) {
  return new (t || ComponentsOverviewListsComponent)();
};
ComponentsOverviewListsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewListsComponent,
  selectors: [["vex-components-overview-lists"]],
  decls: 83,
  vars: 1,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "card", "max-w-full", "overflow-hidden", "w-300"], ["mat-subheader", ""], ["matListItemAvatar", "", "src", "assets/img/avatars/1.jpg"], ["matListItemTitle", ""], ["matListItemLine", ""], [1, "text-secondary"], ["matListItemAvatar", "", "src", "assets/img/avatars/2.jpg"], ["matListItemAvatar", "", "src", "assets/img/avatars/3.jpg"], ["matListItemAvatar", "", "src", "assets/img/avatars/4.jpg"], ["matListItemAvatar", "", "src", "assets/img/avatars/5.jpg"], [1, "border-l", "flex-1"], [1, "title", "mt-0", "mb-4"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], [1, "semi-bold"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewListsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-list", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "John");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6)(10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Brunch?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "-- Did you want to go on Sunday? I was thinking");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-list-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Peter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 6)(19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Summer BBQ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "-- Wish I could come, but I have some special");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-list-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Nancy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 6)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Oui oui");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "-- Have you booked the Paris trip?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Other");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-list-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Frank");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 6)(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Pretty decent!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "-- You look pretty... decent!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-list-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Donald");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 6)(49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "That's great!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "-- Great work mate!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12)(54, "div", 1)(55, "h2", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Lists");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "<mat-list>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-tab-group")(60, "mat-tab", 15)(61, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br")(64, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Lists are best suited to presenting a homogeneous data type or sets of data types, such as images and text. They are optimized for reading comprehension while differentiating either between similar data types, or qualities within a single data type. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br")(67, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "List alternatives:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "If more than three lines of text need to be shown in list tiles, use cards instead ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "If the primary distinguishing content consists of images, use a grid list ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br")(75, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Density");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "When the mouse and keyboard are the primary input methods, measurements may be condensed to accommodate denser layouts. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-tab", 17)(81, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "code", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.listHTML);
    }
  },
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemAvatar, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListSubheaderCssMatStyler, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemTitle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 750:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.module.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewListsModule": () => (/* binding */ ComponentsOverviewListsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_lists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-lists.component */ 43356);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 16069);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class ComponentsOverviewListsModule {}
ComponentsOverviewListsModule.ɵfac = function ComponentsOverviewListsModule_Factory(t) {
  return new (t || ComponentsOverviewListsModule)();
};
ComponentsOverviewListsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewListsModule
});
ComponentsOverviewListsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewListsModule, {
    declarations: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewListsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
    exports: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewListsComponent]
  });
})();

/***/ }),

/***/ 41851:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-menu/components-overview-menu.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewMenuComponent": () => (/* binding */ ComponentsOverviewMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 89314);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 83677);






class ComponentsOverviewMenuComponent {
  constructor() {
    this.menuHTML = `<button mat-icon-button [mdMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>

<mat-menu #menu="mdMenu">
  <button mat-menu-item>
    <mat-icon> dialpad </mat-icon>
    <span> Redial </span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon> voicemail </mat-icon>
    <span> Check voicemail </span>
  </button>
  <button mat-menu-item>
    <mat-icon> notifications_off </mat-icon>
    <span> Disable alerts </span>
  </button>
</mat-menu>`;
  }
  ngOnInit() {}
}
ComponentsOverviewMenuComponent.ɵfac = function ComponentsOverviewMenuComponent_Factory(t) {
  return new (t || ComponentsOverviewMenuComponent)();
};
ComponentsOverviewMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewMenuComponent,
  selectors: [["vex-components-overview-menu"]],
  decls: 34,
  vars: 2,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-6"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["svgIcon", "mat:more_vert"], ["menu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:dialpad"], ["disabled", "", "mat-menu-item", ""], ["svgIcon", "mat:voicemail"], ["svgIcon", "mat:notifications_off"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-menu", null, 6)(9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Redial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Check voicemail ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Disable alerts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "div", 1)(23, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "<mat-menu>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-tab-group")(28, "mat-tab", 14)(29, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Menus offer a list of options that are displayed when triggered. The position (before, after) and (above, below) is automatically decided, but can be overridden with e.g. x-position='before'. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-tab", 15)(32, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "code", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.menuHTML);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy1tZW51L2NvbXBvbmVudHMtb3ZlcnZpZXctbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 46219:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-menu/components-overview-menu.module.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewMenuModule": () => (/* binding */ ComponentsOverviewMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-menu.component */ 41851);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 89314);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);








class ComponentsOverviewMenuModule {}
ComponentsOverviewMenuModule.ɵfac = function ComponentsOverviewMenuModule_Factory(t) {
  return new (t || ComponentsOverviewMenuModule)();
};
ComponentsOverviewMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewMenuModule
});
ComponentsOverviewMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewMenuModule, {
    declarations: [_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule],
    exports: [_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewMenuComponent]
  });
})();

/***/ }),

/***/ 20220:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-progress/components-overview-progress.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewProgressComponent": () => (/* binding */ ComponentsOverviewProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ 46297);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);




class ComponentsOverviewProgressComponent {
  constructor() {
    this.progressHTML = `<mat-progress-bar mode="determinate" [value]="40"></mat-progress-bar>
<mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar>
<mat-progress-bar mode="buffer" color="accent"></mat-progress-bar>
<mat-progress-bar mode="query" color="warn"></mat-progress-bar>`;
  }
  ngOnInit() {}
}
ComponentsOverviewProgressComponent.ɵfac = function ComponentsOverviewProgressComponent_Factory(t) {
  return new (t || ComponentsOverviewProgressComponent)();
};
ComponentsOverviewProgressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewProgressComponent,
  selectors: [["vex-components-overview-progress"]],
  decls: 24,
  vars: 2,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-6"], ["mode", "determinate", 3, "value"], ["color", "accent", "mode", "indeterminate"], ["color", "accent", "mode", "buffer"], ["color", "warn", "mode", "query"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-progress-bar", 4)(6, "mat-progress-bar", 5)(7, "mat-progress-bar", 6)(8, "mat-progress-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 1)(11, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Progress Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "<mat-progress-bar>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-tab-group")(16, "mat-tab", 10)(17, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " A linear progress indicator should always fill from 0% to 100% and never decrease in value. It should be represented by bars on the edge of a header or sheet that appear and disappear. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "For multiple operations happening in sequence, use the indicator to represent the progress as a whole, and not each individual operation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-tab", 11)(22, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "code", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.progressHTML);
    }
  },
  dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBar, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 58987:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-progress/components-overview-progress.module.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewProgressModule": () => (/* binding */ ComponentsOverviewProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-progress.component */ 20220);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 46297);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class ComponentsOverviewProgressModule {}
ComponentsOverviewProgressModule.ɵfac = function ComponentsOverviewProgressModule_Factory(t) {
  return new (t || ComponentsOverviewProgressModule)();
};
ComponentsOverviewProgressModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewProgressModule
});
ComponentsOverviewProgressModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewProgressModule, {
    declarations: [_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewProgressComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
    exports: [_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewProgressComponent]
  });
})();

/***/ }),

/***/ 78176:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-radio/components-overview-radio.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewRadioComponent": () => (/* binding */ ComponentsOverviewRadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);






function ComponentsOverviewRadioComponent_mat_radio_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const season_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", season_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", season_r1, " ");
  }
}
class ComponentsOverviewRadioComponent {
  constructor() {
    this.radioHTML = `<mat-radio-group [(ngModel)]="favoriteSeason">
  <mat-radio-button class="radio" *ngFor="let season of seasons" [value]="season">
    {{ season }}
  </mat-radio-button>
</mat-radio-group>`;
    this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    this.favoriteSeason = this.seasons[2];
  }
  ngOnInit() {}
}
ComponentsOverviewRadioComponent.ɵfac = function ComponentsOverviewRadioComponent_Factory(t) {
  return new (t || ComponentsOverviewRadioComponent)();
};
ComponentsOverviewRadioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewRadioComponent,
  selectors: [["vex-components-overview-radio"]],
  decls: 22,
  vars: 3,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-6"], [1, "radio", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"], [1, "example-radio-button", 3, "value"]],
  template: function ComponentsOverviewRadioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "mat-radio-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ComponentsOverviewRadioComponent_Template_mat_radio_group_ngModelChange_5_listener($event) {
        return ctx.favoriteSeason = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ComponentsOverviewRadioComponent_mat_radio_button_6_Template, 2, 2, "mat-radio-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 1)(9, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "<mat-radio-group>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-tab-group")(14, "mat-tab", 8)(15, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Otherwise, consider a dropdown, which uses less space than displaying all options. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-tab", 9)(20, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "code", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.favoriteSeason);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.seasons);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.radioHTML);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
  styles: [".radio[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.radio[_ngcontent-%COMP%]   .mat-mdc-radio-button[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy1yYWRpby9jb21wb25lbnRzLW92ZXJ2aWV3LXJhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAubWF0LW1kYy1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 13914:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-radio/components-overview-radio.module.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewRadioModule": () => (/* binding */ ComponentsOverviewRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-radio.component */ 78176);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);







class ComponentsOverviewRadioModule {}
ComponentsOverviewRadioModule.ɵfac = function ComponentsOverviewRadioModule_Factory(t) {
  return new (t || ComponentsOverviewRadioModule)();
};
ComponentsOverviewRadioModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewRadioModule
});
ComponentsOverviewRadioModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewRadioModule, {
    declarations: [_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewRadioComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
    exports: [_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewRadioComponent]
  });
})();

/***/ }),

/***/ 41144:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewSlideToggleComponent": () => (/* binding */ ComponentsOverviewSlideToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4291);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);




class ComponentsOverviewSlideToggleComponent {
  constructor() {
    this.slideToggleHTML = `<mat-slide-toggle [checked]="true"></mat-slide-toggle>
<mat-slide-toggle color="primary" [checked]="true"></mat-slide-toggle>
<mat-slide-toggle color="accent" [checked]="true"></mat-slide-toggle>
<mat-slide-toggle color="warn" [checked]="true"></mat-slide-toggle>
<mat-slide-toggle disabled></mat-slide-toggle>`;
  }
  ngOnInit() {}
}
ComponentsOverviewSlideToggleComponent.ɵfac = function ComponentsOverviewSlideToggleComponent_Factory(t) {
  return new (t || ComponentsOverviewSlideToggleComponent)();
};
ComponentsOverviewSlideToggleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewSlideToggleComponent,
  selectors: [["vex-components-overview-slide-toggle"]],
  decls: 23,
  vars: 5,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-6"], [3, "checked"], ["color", "primary", 3, "checked"], ["color", "accent", 3, "checked"], ["color", "warn", 3, "checked"], ["disabled", ""], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewSlideToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-slide-toggle", 4)(6, "mat-slide-toggle", 5)(7, "mat-slide-toggle", 6)(8, "mat-slide-toggle", 7)(9, "mat-slide-toggle", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "div", 1)(12, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Slide Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "<mat-slide-toggle>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-tab-group")(17, "mat-tab", 11)(18, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-tab", 12)(21, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "code", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.slideToggleHTML);
    }
  },
  dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabGroup, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggle, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 73983:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewSlideToggleModule": () => (/* binding */ ComponentsOverviewSlideToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-slide-toggle.component */ 41144);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4291);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class ComponentsOverviewSlideToggleModule {}
ComponentsOverviewSlideToggleModule.ɵfac = function ComponentsOverviewSlideToggleModule_Factory(t) {
  return new (t || ComponentsOverviewSlideToggleModule)();
};
ComponentsOverviewSlideToggleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewSlideToggleModule
});
ComponentsOverviewSlideToggleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggleModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewSlideToggleModule, {
    declarations: [_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSlideToggleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggleModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
    exports: [_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSlideToggleComponent]
  });
})();

/***/ }),

/***/ 72745:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-slider/components-overview-slider.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewSliderComponent": () => (/* binding */ ComponentsOverviewSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ 97824);




class ComponentsOverviewSliderComponent {
  constructor() {
    this.sliderHTML = `<mat-slider min="1" max="10" thumbLabel tickInterval="1"></mat-slider>`;
  }
  ngOnInit() {}
}
ComponentsOverviewSliderComponent.ɵfac = function ComponentsOverviewSliderComponent_Factory(t) {
  return new (t || ComponentsOverviewSliderComponent)();
};
ComponentsOverviewSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewSliderComponent,
  selectors: [["vex-components-overview-slider"]],
  decls: 27,
  vars: 1,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "gap-4"], ["discrete", "", "max", "10", "min", "1"], ["matSliderThumb", "", "value", "7"], ["color", "primary", "discrete", "", "max", "10", "min", "1", "showTickMarks", ""], ["matSliderThumb", "", "value", "2"], ["color", "warn", "max", "10", "min", "1"], ["matSliderThumb", "", "value", "8"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "mat-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-slider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-slider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "div", 1)(13, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Slider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "<mat-slider>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-tab-group")(18, "mat-tab", 12)(19, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sliders are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br")(22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sliders may have icons on both ends of the bar that reflect the value intensity. Place the smallest value for the slider range on the left and the largest value on the right. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-tab", 13)(25, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "code", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.sliderHTML);
    }
  },
  dependencies: [_vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabGroup, _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__.MatSliderThumb],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy1zbGlkZXIvY29tcG9uZW50cy1vdmVydmlldy1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 70579:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-slider/components-overview-slider.module.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewSliderModule": () => (/* binding */ ComponentsOverviewSliderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-slider.component */ 72745);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ 97824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class ComponentsOverviewSliderModule {}
ComponentsOverviewSliderModule.ɵfac = function ComponentsOverviewSliderModule_Factory(t) {
  return new (t || ComponentsOverviewSliderModule)();
};
ComponentsOverviewSliderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewSliderModule
});
ComponentsOverviewSliderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__.MatSliderModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewSliderModule, {
    declarations: [_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSliderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__.MatSliderModule],
    exports: [_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSliderComponent]
  });
})();

/***/ }),

/***/ 94487:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-snack-bar/components-overview-snack-bar.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewSnackBarComponent": () => (/* binding */ ComponentsOverviewSnackBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 88511);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 83677);





class ComponentsOverviewSnackBarComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.snackbarHTML = `<button mat-raised-button (click)="openSnackbar()">TRIGGER SNACKBAR</button>`;
  }
  ngOnInit() {}
  openSnackbar() {
    this.snackBar.open('I\'m a notification!', 'CLOSE', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }
}
ComponentsOverviewSnackBarComponent.ɵfac = function ComponentsOverviewSnackBarComponent_Factory(t) {
  return new (t || ComponentsOverviewSnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
};
ComponentsOverviewSnackBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewSnackBarComponent,
  selectors: [["vex-components-overview-snack-bar"]],
  decls: 20,
  vars: 1,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-6"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "click"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewSnackBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentsOverviewSnackBarComponent_Template_button_click_5_listener() {
        return ctx.openSnackbar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " TRIGGER SNACKBAR ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 1)(9, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Snack Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "<mat-snack-bar>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-tab-group")(14, "mat-tab", 7)(15, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-tab", 8)(18, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "code", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.snackbarHTML);
    }
  },
  dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy1zbmFjay1iYXIvY29tcG9uZW50cy1vdmVydmlldy1zbmFjay1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 52752:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-snack-bar/components-overview-snack-bar.module.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewSnackBarModule": () => (/* binding */ ComponentsOverviewSnackBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-snack-bar.component */ 94487);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 88511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);







class ComponentsOverviewSnackBarModule {}
ComponentsOverviewSnackBarModule.ɵfac = function ComponentsOverviewSnackBarModule_Factory(t) {
  return new (t || ComponentsOverviewSnackBarModule)();
};
ComponentsOverviewSnackBarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewSnackBarModule
});
ComponentsOverviewSnackBarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewSnackBarModule, {
    declarations: [_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSnackBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule],
    exports: [_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewSnackBarComponent]
  });
})();

/***/ }),

/***/ 30597:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-tooltip/components-overview-tooltip.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewTooltipComponent": () => (/* binding */ ComponentsOverviewTooltipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 82781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);






class ComponentsOverviewTooltipComponent {
  constructor() {
    this.tooltipHTML = `<button mat-icon-button matTooltip="Favorite this">
  <mat-icon>favorite</mat-icon>
</button>`;
  }
  ngOnInit() {}
}
ComponentsOverviewTooltipComponent.ɵfac = function ComponentsOverviewTooltipComponent_Factory(t) {
  return new (t || ComponentsOverviewTooltipComponent)();
};
ComponentsOverviewTooltipComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComponentsOverviewTooltipComponent,
  selectors: [["vex-components-overview-tooltip"]],
  decls: 22,
  vars: 1,
  consts: [[1, "card", "flex", "flex-col", "sm:flex-row"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-6"], ["mat-icon-button", "", "matTooltip", "Favorite this"], ["svgIcon", "mat:favorite"], [1, "border-l", "flex-1"], [1, "body-2", "text-secondary", "m-0"], ["label", "DESCRIPTION"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
  template: function ComponentsOverviewTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 1)(9, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tooltip");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "<mat-snack-bar>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-tab-group")(14, "mat-tab", 8)(15, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Tooltip labels do not receive input focus. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-tab", 9)(20, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "code", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.tooltipHTML);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy10b29sdGlwL2NvbXBvbmVudHMtb3ZlcnZpZXctdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 82370:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-tooltip/components-overview-tooltip.module.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewTooltipModule": () => (/* binding */ ComponentsOverviewTooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-tooltip.component */ 30597);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 49979);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);








class ComponentsOverviewTooltipModule {}
ComponentsOverviewTooltipModule.ɵfac = function ComponentsOverviewTooltipModule_Factory(t) {
  return new (t || ComponentsOverviewTooltipModule)();
};
ComponentsOverviewTooltipModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComponentsOverviewTooltipModule
});
ComponentsOverviewTooltipModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewTooltipModule, {
    declarations: [_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewTooltipComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule],
    exports: [_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewTooltipComponent]
  });
})();

/***/ }),

/***/ 66862:
/*!***********************************************!*\
  !*** ./src/static-data/friend-suggestions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "friendSuggestions": () => (/* binding */ friendSuggestions)
/* harmony export */ });
const friendSuggestions = [{
  name: 'Fannie Wilson',
  imageSrc: 'assets/img/avatars/1.jpg',
  friends: 6,
  added: false
}, {
  name: 'Priscilla Ayala',
  imageSrc: 'assets/img/avatars/2.jpg',
  friends: 3,
  added: false
}, {
  name: 'Margaret Farley',
  imageSrc: 'assets/img/avatars/3.jpg',
  friends: 3,
  added: true
}, {
  name: 'Alston Tucker',
  imageSrc: 'assets/img/avatars/4.jpg',
  friends: 1,
  added: true
}, {
  name: 'Frye Humphrey',
  imageSrc: 'assets/img/avatars/5.jpg',
  friends: 1,
  added: true
}, {
  name: 'Jannie Cochran',
  imageSrc: 'assets/img/avatars/6.jpg',
  friends: 5,
  added: false
}, {
  name: 'Perkins Doyle',
  imageSrc: 'assets/img/avatars/7.jpg',
  friends: 7,
  added: false
}, {
  name: 'Marci Boyd',
  imageSrc: 'assets/img/avatars/8.jpg',
  friends: 2,
  added: false
}];

/***/ })

}]);
//# sourceMappingURL=common.js.map