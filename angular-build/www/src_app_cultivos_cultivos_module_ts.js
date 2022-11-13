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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cultivos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cultivos.page.html */ 60727);
/* harmony import */ var _cultivos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cultivos.page.scss */ 28400);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let CultivosPage = class CultivosPage {
    constructor(api) {
        this.api = api;
        this.endpoint = '/crop';
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
CultivosPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
CultivosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWx0aXZvcy5wYWdlLnNjc3MifQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cultivos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid mt-4\">\r\n    <ion-card class=\"welcome-card\">\r\n      <ion-card-header color=\"primary\">\r\n        <ion-card-title>Gestión de Cultivos</ion-card-title>\r\n        <ion-card-subtitle></ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"\" class=\"col-form-label col-4\">\r\n                    Descripción\r\n                  </label>\r\n                  <div class=\"col-8\"><input type=\"text\" [(ngModel)]=\"item.description\" class=\"form-control\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-4 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.kc_init\" >\r\n                  <label for=\"floatingInput\">Kc_ini</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-4 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.kc_med\" >\r\n                  <label for=\"floatingInput\">Kc_med</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-4 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.kc_final\" >\r\n                  <label for=\"floatingInput\">Kc_fin</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.max_temp\" >\r\n                  <label for=\"floatingInput\">T°Max</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.min_temp\" >\r\n                  <label for=\"floatingInput\">T°Min</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.max_hr\" >\r\n                  <label for=\"floatingInput\">HR°Max</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.min_hr\" >\r\n                  <label for=\"floatingInput\">HR°Min</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.max_hs\" >\r\n                  <label for=\"floatingInput\">HS°Max</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 mt-2\">\r\n                <div class=\"form-floating mb-3\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"item.min_hs\" >\r\n                  <label for=\"floatingInput\">HS°Min</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row justify-content-center mt-2\">\r\n                <div class=\"col-3\">\r\n                  <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"save()\"> Guardar</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"bg-black text-light p-1\">\r\n                <tr>\r\n                  <th scope=\"col\">Id</th>\r\n                  <th scope=\"col\">Descripcion</th>\r\n                  <th scope=\"col\">Kc Ini</th>\r\n                  <th scope=\"col\">Kc Med</th>\r\n                  <th scope=\"col\">Kc Fin</th>\r\n                  <th scope=\"col\">T°Max</th>\r\n                  <th scope=\"col\">T°Min</th>\r\n                  <th scope=\"col\">HR%Max</th>\r\n                  <th scope=\"col\">HR%Min</th>\r\n                  <th scope=\"col\">HS%Max</th>\r\n                  <th scope=\"col\">HS%Min</th>\r\n                  <th scope=\"col\">Acciones</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let i of data\">\r\n                  <th scope=\"row\">{{i.id}}</th>\r\n                  <td>{{i.description}}</td>\r\n                  <td>{{i.kc_init}}</td>\r\n                  <td>{{i.kc_med}}</td>\r\n                  <td>{{i.kc_final}}</td>\r\n                  <td>{{i.max_temp}}</td>\r\n                  <td>{{i.min_temp}}</td>\r\n                  <td>{{i.max_hr}}</td>\r\n                  <td>{{i.min_hr}}</td>\r\n                  <td>{{i.max_hs}}</td>\r\n                  <td>{{i.min_hs}}</td>\r\n                  <td>\r\n                    <button class=\"btn btn-sm btn-warning\" (click)=\"item = i; edit = true;\">\r\n                      <i class=\"class fa fa-edit\"></i>\r\n                    </button>\r\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(i.id)\">\r\n                      <i class=\"class fa fa-trash\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cultivos_cultivos_module_ts.js.map