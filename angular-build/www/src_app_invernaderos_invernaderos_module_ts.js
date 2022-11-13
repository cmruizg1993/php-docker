(self["webpackChunksmart_urban_farm"] = self["webpackChunksmart_urban_farm"] || []).push([["src_app_invernaderos_invernaderos_module_ts"],{

/***/ 73062:
/*!*************************************************************!*\
  !*** ./src/app/invernaderos/invernaderos-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvernaderosPageRoutingModule": () => (/* binding */ InvernaderosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invernaderos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invernaderos.page */ 99967);




const routes = [
    {
        path: '',
        component: _invernaderos_page__WEBPACK_IMPORTED_MODULE_0__.InvernaderosPage
    }
];
let InvernaderosPageRoutingModule = class InvernaderosPageRoutingModule {
};
InvernaderosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvernaderosPageRoutingModule);



/***/ }),

/***/ 63830:
/*!*****************************************************!*\
  !*** ./src/app/invernaderos/invernaderos.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvernaderosPageModule": () => (/* binding */ InvernaderosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invernaderos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invernaderos-routing.module */ 73062);
/* harmony import */ var _invernaderos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invernaderos.page */ 99967);







let InvernaderosPageModule = class InvernaderosPageModule {
};
InvernaderosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invernaderos_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvernaderosPageRoutingModule
        ],
        declarations: [_invernaderos_page__WEBPACK_IMPORTED_MODULE_1__.InvernaderosPage]
    })
], InvernaderosPageModule);



/***/ }),

/***/ 99967:
/*!***************************************************!*\
  !*** ./src/app/invernaderos/invernaderos.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvernaderosPage": () => (/* binding */ InvernaderosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invernaderos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invernaderos.page.html */ 57499);
/* harmony import */ var _invernaderos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invernaderos.page.scss */ 45127);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let InvernaderosPage = class InvernaderosPage {
    constructor(api) {
        this.api = api;
        this.endpoint = '/greenhouse';
        this.edit = false;
        this.item = {};
    }
    ngOnInit() {
        this.index();
    }
    index() {
        this.api.get(this.endpoint).toPromise().then((r) => {
            this.data = r;
        });
    }
    create() {
        this.api.post(this.endpoint, this.item).toPromise().then((r) => {
            this.item = {};
            this.index();
        });
    }
    update() {
        this.api.put(this.endpoint + '/' + this.item.id, this.item).toPromise().then((r) => {
            this.item = {};
            this.edit = false;
            this.index();
        });
    }
    delete(id) {
        this.api.delete(this.endpoint + '/' + id).toPromise().then((r) => {
            this.index();
        });
    }
    save() {
        if (this.edit) {
            this.update();
        }
        else {
            this.create();
        }
    }
};
InvernaderosPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
InvernaderosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-invernaderos',
        template: _raw_loader_invernaderos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invernaderos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvernaderosPage);



/***/ }),

/***/ 45127:
/*!*****************************************************!*\
  !*** ./src/app/invernaderos/invernaderos.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlcm5hZGVyb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 57499:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invernaderos/invernaderos.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>invernaderos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-fluid mt-4\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header color=\"primary\">\n        <ion-card-title>Gestión de Invernaderos</ion-card-title>\n        <ion-card-subtitle></ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"row mt-2\">\n          <div class=\"col-4\">\n            <div class=\"row\">\n              <div class=\"col-9\">\n                <div class=\"form-group row\">\n                  <label for=\"\" class=\"col-form-label col-4\">\n                    Descripción\n                  </label>\n                  <div class=\"col-8\"><input type=\"text\" [(ngModel)]=\"item.description\" class=\"form-control\"></div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"item.state\" id=\"flexCheckDefault\">\n                  <label class=\"form-check-label\" for=\"flexCheckDefault\">\n                    Estado\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-9 mt-2\">\n                <div class=\"form-group row\"><label for=\"\" class=\"col-form-label col-4\">Observ.</label>\n                  <div class=\"col-8\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"item.observations\" class=\"form-control\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"save()\"> Guardar</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"table-responsive-md\">\n              <table class=\"table table-hover\">\n                <thead class=\"bg-black text-light p-1\">\n                <tr>\n                  <th scope=\"col\">Id</th>\n                  <th scope=\"col\">Descripcion</th>\n                  <th scope=\"col\">Estado</th>\n                  <th scope=\"col\">Observ</th>\n                  <th scope=\"col\">Acciones</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let i of data\">\n                  <th scope=\"row\">{{i.id}}</th>\n                  <td>{{i.description}}</td>\n                  <td><span *ngIf=\"i.state\">SI</span><span *ngIf=\"!i.state\">NO</span></td>\n                  <td>{{i.observations}}</td>\n                  <td>\n                    <button class=\"btn btn-sm btn-warning\" (click)=\"item = i; edit = true;\">\n                      <i class=\"class fa fa-edit\"></i>\n                    </button>\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(i.id)\">\n                      <i class=\"class fa fa-trash\"></i>\n                    </button>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_invernaderos_invernaderos_module_ts.js.map