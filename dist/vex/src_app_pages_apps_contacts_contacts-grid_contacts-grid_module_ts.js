"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_contacts_contacts-grid_contacts-grid_module_ts"],{

/***/ 26808:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsCardComponent": () => (/* binding */ ContactsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 443);






function ContactsCardComponent_mat_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
  }
}
function ContactsCardComponent_mat_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 16);
  }
}
class ContactsCardComponent {
  constructor() {
    this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  emitToggleStar(event, contactId) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
ContactsCardComponent.ɵfac = function ContactsCardComponent_Factory(t) {
  return new (t || ContactsCardComponent)();
};
ContactsCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactsCardComponent,
  selectors: [["vex-contacts-card"]],
  inputs: {
    contact: "contact"
  },
  outputs: {
    openContact: "openContact",
    toggleStar: "toggleStar"
  },
  decls: 23,
  vars: 6,
  consts: [[1, "card", "overflow-hidden"], ["matRipple", "", 1, "p-4", "text-center", "hover:bg-hover", "trans-ease-out", "cursor-pointer", "relative", 3, "click"], [1, "avatar", "h-24", "w-24", "mx-auto", 3, "src"], [1, "title", "mb-1", "mt-3"], [1, "body-2", "text-secondary", "flex", "items-center", "justify-center"], ["svgIcon", "mat:business", 1, "ltr:mr-1", "rtl:ml-1", "icon-xs"], ["svgIcon", "mat:phone", 1, "ltr:mr-1", "rtl:ml-1", "icon-xs"], ["mat-icon-button", "", "type", "button", 1, "absolute", "top-2", "right-2", 3, "click"], ["class", "text-amber", "svgIcon", "mat:star", 4, "ngIf"], ["svgIcon", "mat:star_border", 4, "ngIf"], [1, "bg-app-bar", "p-2", "flex", "items-center", "justify-around"], ["mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:phone"], ["svgIcon", "mat:mail"], ["svgIcon", "mat:chat"], ["svgIcon", "mat:star", 1, "text-amber"], ["svgIcon", "mat:star_border"]],
  template: function ContactsCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsCardComponent_Template_div_click_1_listener() {
        return ctx.openContact.emit(ctx.contact.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsCardComponent_Template_button_click_13_listener($event) {
        return ctx.emitToggleStar($event, ctx.contact == null ? null : ctx.contact.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactsCardComponent_mat_icon_14_Template, 1, 0, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactsCardComponent_mat_icon_15_Template, 1, 0, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact == null ? null : ctx.contact.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact == null ? null : ctx.contact.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact == null ? null : ctx.contact.company);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact == null ? null : ctx.contact.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contact == null ? null : ctx.contact.starred);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.contact == null ? null : ctx.contact.starred));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 13458:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsCardModule": () => (/* binding */ ContactsCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _contacts_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-card.component */ 26808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);






class ContactsCardModule {}
ContactsCardModule.ɵfac = function ContactsCardModule_Factory(t) {
  return new (t || ContactsCardModule)();
};
ContactsCardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ContactsCardModule
});
ContactsCardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsCardModule, {
    declarations: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_0__.ContactsCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule],
    exports: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_0__.ContactsCardComponent]
  });
})();

/***/ }),

/***/ 85228:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsGridRoutingModule": () => (/* binding */ ContactsGridRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-grid.component */ 75838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  redirectTo: 'all',
  pathMatch: 'full'
}, {
  path: ':activeCategory',
  component: _contacts_grid_component__WEBPACK_IMPORTED_MODULE_0__.ContactsGridComponent,
  data: {
    scrollDisabled: true,
    toolbarShadowEnabled: false
  }
}];
class ContactsGridRoutingModule {}
ContactsGridRoutingModule.ɵfac = function ContactsGridRoutingModule_Factory(t) {
  return new (t || ContactsGridRoutingModule)();
};
ContactsGridRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ContactsGridRoutingModule
});
ContactsGridRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsGridRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 75838:
/*!******************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsGridComponent": () => (/* binding */ ContactsGridComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.component */ 85502);
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../static-data/contacts */ 24871);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/utils/track-by */ 21081);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-fade-in.animation */ 68911);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-quicklink */ 99772);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_contacts_card_contacts_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contacts-card/contacts-card.component */ 26808);



















function ContactsGridComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("active", _r4.isActive)("disabled", link_r3.disabled)("routerLink", link_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", link_r3.label, " ");
  }
}
function ContactsGridComponent_div_23_vex_contacts_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "vex-contacts-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("openContact", function ContactsGridComponent_div_23_vex_contacts_card_2_Template_vex_contacts_card_openContact_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.openContact($event));
    })("toggleStar", function ContactsGridComponent_div_23_vex_contacts_card_2_Template_vex_contacts_card_toggleStar_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.toggleStar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@fadeInUp", undefined)("contact", contact_r6);
  }
}
function ContactsGridComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ContactsGridComponent_div_23_vex_contacts_card_2_Template, 1, 2, "vex-contacts-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@stagger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, ctx_r1.filteredContacts$))("ngForTrackBy", ctx_r1.trackById);
  }
}
function ContactsGridComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "No contacts matching your filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@scaleFadeIn", undefined);
  }
}
class ContactsGridComponent {
  constructor(dialog, route) {
    this.dialog = dialog;
    this.route = route;
    this.contacts = _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__.contactsData;
    this.filteredContacts$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(paramMap => paramMap.get('activeCategory')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(activeCategory => {
      switch (activeCategory) {
        case 'all':
          {
            return _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__.contactsData;
          }
        case 'starred':
          {
            return _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__.contactsData.filter(c => c.starred);
          }
        default:
          {
            return [];
          }
      }
    }));
    this.links = [{
      label: 'All Contacts',
      route: '../all'
    }, {
      label: 'Frequently Contacted',
      route: '../frequent'
    }, {
      label: 'Starred',
      route: '../starred'
    }];
    this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_4__.trackById;
  }
  ngOnInit() {}
  openContact(id) {
    this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_2__.ContactsEditComponent, {
      data: id || null,
      width: '600px'
    });
  }
  toggleStar(id) {
    const contact = _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__.contactsData.find(c => c.id === id);
    if (contact) {
      contact.starred = !contact.starred;
    }
  }
}
ContactsGridComponent.ɵfac = function ContactsGridComponent_Factory(t) {
  return new (t || ContactsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
};
ContactsGridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ContactsGridComponent,
  selectors: [["vex-contacts-grid"]],
  decls: 27,
  vars: 9,
  consts: [[1, "h-full", "flex", "flex-col"], [1, "p-6", "pb-0", "bg-foreground", "shadow-b", "flex-none", "border-b", "border-gray-200"], [1, "container", "px-0"], [1, "display-1", "font-bold", "mt-0", "mb-4", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary/10"], ["svgIcon", "mat:contacts"], [1, "block"], [1, "flex", "items-center"], ["mat-tab-nav-bar", "", 1, "border-0", "flex-auto"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Search Contacts", "type", "button", 1, "flex-none", "hidden", "sm:inline-block"], ["svgIcon", "mat:search"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Export Contacts", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", "flex-none", "hidden", "sm:inline-block"], ["svgIcon", "mat:cloud_download"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Filter Contacts", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", "flex-none"], ["svgIcon", "mat:filter_list"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Contact", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", "flex-none", "sm:hidden", 3, "click"], ["svgIcon", "mat:person_add"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "ltr:ml-4", "rtl:mr-4", "flex-none", "hidden", "sm:inline-block", 3, "click"], ["svgIcon", "mat:add", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", "icon-sm"], ["class", "overflow-y-auto flex-auto", 4, "ngIf"], ["class", "flex-auto flex flex-col items-center justify-center", 4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"], [1, "overflow-y-auto", "flex-auto"], [1, "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-6", "container"], [3, "contact", "openContact", "toggleStar", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contact", "openContact", "toggleStar"], [1, "flex-auto", "flex", "flex-col", "items-center", "justify-center"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"]],
  template: function ContactsGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Contacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "nav", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ContactsGridComponent_a_10_Template, 3, 4, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContactsGridComponent_Template_button_click_17_listener() {
        return ctx.openContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContactsGridComponent_Template_button_click_19_listener() {
        return ctx.openContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Add Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ContactsGridComponent_div_23_Template, 4, 5, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ContactsGridComponent_div_25_Template, 4, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.links);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 5, ctx.filteredContacts$).length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 7, ctx.filteredContacts$).length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, ngx_quicklink__WEBPACK_IMPORTED_MODULE_14__.QuicklinkDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _components_contacts_card_contacts_card_component__WEBPACK_IMPORTED_MODULE_8__.ContactsCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger40ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__.fadeInUp400ms, _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_7__.scaleFadeIn400ms]
  }
});


/***/ }),

/***/ 25623:
/*!***************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsGridModule": () => (/* binding */ ContactsGridModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-grid-routing.module */ 85228);
/* harmony import */ var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts-grid.component */ 75838);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 12128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.module */ 56677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contacts-card/contacts-card.module */ 13458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);











class ContactsGridModule {}
ContactsGridModule.ɵfac = function ContactsGridModule_Factory(t) {
  return new (t || ContactsGridModule)();
};
ContactsGridModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ContactsGridModule
});
ContactsGridModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsGridRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_2__.ContactsEditModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_3__.ContactsCardModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactsGridModule, {
    declarations: [_contacts_grid_component__WEBPACK_IMPORTED_MODULE_1__.ContactsGridComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsGridRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_2__.ContactsEditModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_3__.ContactsCardModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_contacts_contacts-grid_contacts-grid_module_ts.js.map