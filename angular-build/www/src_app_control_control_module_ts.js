(self["webpackChunksmart_urban_farm"] = self["webpackChunksmart_urban_farm"] || []).push([["src_app_control_control_module_ts"],{

/***/ 63861:
/*!***************************************************!*\
  !*** ./src/app/control/control-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPageRoutingModule": () => (/* binding */ ControlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _control_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.page */ 64953);




const routes = [
    {
        path: '',
        component: _control_page__WEBPACK_IMPORTED_MODULE_0__.ControlPage
    }
];
let ControlPageRoutingModule = class ControlPageRoutingModule {
};
ControlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ControlPageRoutingModule);



/***/ }),

/***/ 21477:
/*!*******************************************!*\
  !*** ./src/app/control/control.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPageModule": () => (/* binding */ ControlPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _control_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-routing.module */ 63861);
/* harmony import */ var _control_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control.page */ 64953);







let ControlPageModule = class ControlPageModule {
};
ControlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _control_routing_module__WEBPACK_IMPORTED_MODULE_0__.ControlPageRoutingModule
        ],
        declarations: [_control_page__WEBPACK_IMPORTED_MODULE_1__.ControlPage]
    })
], ControlPageModule);



/***/ }),

/***/ 64953:
/*!*****************************************!*\
  !*** ./src/app/control/control.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPage": () => (/* binding */ ControlPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_control_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./control.page.html */ 74124);
/* harmony import */ var _control_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control.page.scss */ 61951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_realtime_realtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/realtime/realtime.service */ 82304);



/* eslint-disable @angular-eslint/use-lifecycle-interface */


let ControlPage = class ControlPage {
    constructor(realtime) {
        this.realtime = realtime;
        this.data = null;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.firebaseSubscription = this.realtime.getLevelData('control/').subscribe((data) => {
            console.log(data);
            this.data = data;
        });
    }
    sendChange() {
        this.realtime.updateControlData(this.data);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.firebaseSubscription.unsubscribe();
    }
};
ControlPage.ctorParameters = () => [
    { type: _services_realtime_realtime_service__WEBPACK_IMPORTED_MODULE_2__.RealtimeService }
];
ControlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-control',
        template: _raw_loader_control_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_control_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ControlPage);



/***/ }),

/***/ 61951:
/*!*******************************************!*\
  !*** ./src/app/control/control.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 74124:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/control/control.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Back button with a default href -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"data\">\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title>Valores Actuales Lámparas:\r\n        <ion-text color=\"warning\">\r\n          <i class=\"fa fa-lightbulb\"></i>\r\n        </ion-text>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Nivel 1:\r\n            <ng-container *ngIf=\"data.lampara.nivel1; else elseTemplate\">\r\n              <span>Encendido</span>\r\n            </ng-container>\r\n          </ion-label>\r\n          <ion-toggle color=\"warning\" [(ngModel)]=\"data.lampara.nivel1\" (ngModelChange)=\"sendChange()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Nivel 2:\r\n            <ng-container *ngIf=\"data.lampara.nivel2; else elseTemplate\">\r\n              <span>Encendido</span>\r\n            </ng-container>\r\n          </ion-label>\r\n          <ion-toggle color=\"warning\" [(ngModel)]=\"data.lampara.nivel2\" (ngModelChange)=\"sendChange()\"></ion-toggle>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title>Valores Actuales Regadío:\r\n        <ion-text color=\"primary\">\r\n          <i class=\"fa fa-water\"></i>\r\n        </ion-text>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Nivel 1:\r\n            <ng-container *ngIf=\"data.valvula.nivel1; else elseTemplate\">\r\n              <span>Encendido</span>\r\n            </ng-container>\r\n          </ion-label>\r\n          <ion-toggle color=\"primary\" [(ngModel)]=\"data.valvula.nivel1\" (ngModelChange)=\"sendChange()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Nivel 2:\r\n            <ng-container *ngIf=\"data.valvula.nivel2; else elseTemplate\">\r\n              <span>Encendido</span>\r\n            </ng-container>\r\n          </ion-label>\r\n          <ion-toggle color=\"primary\" [(ngModel)]=\"data.valvula.nivel2\" (ngModelChange)=\"sendChange()\"></ion-toggle>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title>Valores Actuales Ventiladores:\r\n        <ion-text color=\"dark\">\r\n          <i class=\"fa fa-fan\"></i>\r\n        </ion-text>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Nivel 1:\r\n            <ng-container *ngIf=\"data.ventiladores.nivel1; else elseTemplate\">\r\n              <span>Encendido</span>\r\n            </ng-container>\r\n          </ion-label>\r\n          <ion-toggle color=\"dark\" [(ngModel)]=\"data.ventiladores.nivel1\" (ngModelChange)=\"sendChange()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Nivel 2:\r\n            <ng-container *ngIf=\"data.ventiladores.nivel2; else elseTemplate\">\r\n              <span>Encendido</span>\r\n            </ng-container>\r\n          </ion-label>\r\n          <ion-toggle color=\"dark\" [(ngModel)]=\"data.ventiladores.nivel2\" (ngModelChange)=\"sendChange()\"></ion-toggle>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ng-template #elseTemplate>\r\n          <span>Apagado</span>\r\n  </ng-template>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_control_control_module_ts.js.map