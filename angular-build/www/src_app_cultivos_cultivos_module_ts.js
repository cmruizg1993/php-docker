(self["webpackChunksmart_urban_farm"] = self["webpackChunksmart_urban_farm"] || []).push([["src_app_cultivos_cultivos_module_ts"],{

/***/ 81344:
/*!*****************************************************!*\
  !*** ./src/app/cultivos/cultivos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CultivosPageRoutingModule": () => (/* binding */ CultivosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cultivos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cultivos.page */ 80304);




const routes = [
    {
        path: '',
        component: _cultivos_page__WEBPACK_IMPORTED_MODULE_0__.CultivosPage
    }
];
let CultivosPageRoutingModule = class CultivosPageRoutingModule {
};
CultivosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CultivosPageRoutingModule);



/***/ }),

/***/ 29815:
/*!*********************************************!*\
  !*** ./src/app/cultivos/cultivos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CultivosPageModule": () => (/* binding */ CultivosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cultivos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cultivos-routing.module */ 81344);
/* harmony import */ var _cultivos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cultivos.page */ 80304);







let CultivosPageModule = class CultivosPageModule {
};
CultivosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cultivos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CultivosPageRoutingModule
        ],
        declarations: [_cultivos_page__WEBPACK_IMPORTED_MODULE_1__.CultivosPage]
    })
], CultivosPageModule);



/***/ }),

/***/ 80304:
/*!*******************************************!*\
  !*** ./src/app/cultivos/cultivos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CultivosPage": () => (/* binding */ CultivosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cultivos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cultivos.page.html */ 60727);
/* harmony import */ var _cultivos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cultivos.page.scss */ 28400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CultivosPage = class CultivosPage {
    constructor() {
        this.cultivo = {
            codigo: '',
            nombre: '',
            kcIni: 0,
            kcMed: 0,
            kcFin: 0,
            tempMax: 0,
            tempMin: 0,
            humRelMax: 0,
            humRelMin: 0,
            humSueloMax: 0,
            humSueloMin: 0,
            altura: 0,
            observaciones: null
        };
    }
    ngOnInit() {
    }
    logout() {
        return;
    }
};
CultivosPage.ctorParameters = () => [];
CultivosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cultivos',
        template: _raw_loader_cultivos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cultivos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CultivosPage);



/***/ }),

/***/ 28400:
/*!*********************************************!*\
  !*** ./src/app/cultivos/cultivos.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("div.button-container {\n  text-align: center;\n  margin-top: 3rem;\n  padding: 1rem;\n}\n\nion-card-title.state p {\n  font-size: 0.7rem;\n}\n\nion-toolbar div.title {\n  margin-left: 20px !important;\n}\n\nion-toolbar div.title ion-text {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\ndiv.container {\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  display: block;\n  text-align: center;\n  justify-content: center;\n  margin: auto;\n}\n\ndiv.container ion-card-content {\n  width: 100%;\n}\n\ndiv.container ion-card-content canvas {\n  width: 100% !important;\n  height: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1bHRpdm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUVFO0VBQ0UsNEJBQUE7QUFDSjs7QUFBSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFTjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFDRTtFQUNFLFdBQUE7QUFDSjs7QUFBSTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7QUFFTiIsImZpbGUiOiJjdWx0aXZvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYnV0dG9uLWNvbnRhaW5lcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLnN0YXRlIHB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcblxyXG4gIGRpdi50aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjYW52YXN7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 60727:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cultivos/cultivos.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content scroll-y=\"'true'\">\r\n  <!--ion-list-header color=\"light\">Vertical Bar Chart</!--ion-list-header-->\r\n  <div class=\"container\" style=\"margin-top: 80px;\">\r\n    <ion-card class=\"welcome-card\">\r\n      <ion-card-header color=\"primary\">\r\n        <ion-card-title>Gestión de cultivos</ion-card-title>\r\n        <ion-card-subtitle></ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Código</ion-label>\r\n                <ion-input type=\"text\"  [(ngModel)]=\"cultivo.codigo\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Nombre</ion-label>\r\n                <ion-input type=\"text\"  [(ngModel)]=\"cultivo.nombre\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Temp. Min</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.tempMin\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Temp. Max</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.tempMax\" class=\"\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Hum. Rel Min</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.humRelMin\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Hum. Rel Max</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.humRelMax\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Hum. Suelo Max</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.humSueloMax\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Hum. Suelo Min</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.humSueloMin\" class=\"\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Kc Inicial</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.kcIni\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Kc Medio</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.kcMed\" class=\"\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Kc Final</ion-label>\r\n                <ion-input type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"cultivo.kcFin\" class=\"\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-button size=\"lg\">Guardar</ion-button>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <div>\r\n          <table>\r\n            <thead style=\"background-color: var(--ion-color-primary);\">\r\n              <th>Cod.</th>\r\n              <th>Cultivo</th>\r\n              <th>Fecha Ini</th>\r\n              <th>Fecha Fin</th>\r\n              <th>Activo</th>\r\n              <th>Obs</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let c of cultivos\">\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cultivos_cultivos_module_ts.js.map