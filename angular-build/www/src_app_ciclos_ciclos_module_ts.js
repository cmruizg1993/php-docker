(self["webpackChunksmart_urban_farm"] = self["webpackChunksmart_urban_farm"] || []).push([["src_app_ciclos_ciclos_module_ts"],{

/***/ 97586:
/*!*************************************************!*\
  !*** ./src/app/ciclos/ciclos-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CiclosPageRoutingModule": () => (/* binding */ CiclosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ciclos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ciclos.page */ 33469);




const routes = [
    {
        path: '',
        component: _ciclos_page__WEBPACK_IMPORTED_MODULE_0__.CiclosPage
    }
];
let CiclosPageRoutingModule = class CiclosPageRoutingModule {
};
CiclosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CiclosPageRoutingModule);



/***/ }),

/***/ 26919:
/*!*****************************************!*\
  !*** ./src/app/ciclos/ciclos.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CiclosPageModule": () => (/* binding */ CiclosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ciclos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ciclos-routing.module */ 97586);
/* harmony import */ var _ciclos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ciclos.page */ 33469);







let CiclosPageModule = class CiclosPageModule {
};
CiclosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ciclos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CiclosPageRoutingModule
        ],
        declarations: [_ciclos_page__WEBPACK_IMPORTED_MODULE_1__.CiclosPage]
    })
], CiclosPageModule);



/***/ }),

/***/ 33469:
/*!***************************************!*\
  !*** ./src/app/ciclos/ciclos.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CiclosPage": () => (/* binding */ CiclosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ciclos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ciclos.page.html */ 89787);
/* harmony import */ var _ciclos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ciclos.page.scss */ 66034);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let CiclosPage = class CiclosPage {
    constructor(api) {
        this.api = api;
        this.endpoint = '/cropcycle';
        this.edit = false;
        this.item = {};
    }
    ngOnInit() {
        const fecha = new Date();
        const mes = (fecha.getMonth() + 1).toString().length === 1 ? `0${fecha.getMonth() + 1}` : `${fecha.getMonth() + 1}`;
        const dia = (fecha.getDate()).toString().length === 1 ? `0${fecha.getDate()}` : `${fecha.getDate()}`;
        const anio = fecha.getFullYear();
        this.item.init_date = `${anio}-${mes}-${dia}`;
        this.item.end_date = `${anio}-${mes}-${dia}`;
        this.index();
        this.indexCrops();
        this.indexGreenHouses();
    }
    index() {
        this.api.get(this.endpoint).toPromise().then((r) => {
            this.data = r;
        });
    }
    indexCrops() {
        this.api.get('/crop').toPromise().then((r) => {
            this.dataCrops = r;
        });
    }
    indexGreenHouses() {
        this.api.get('/greenhouse').toPromise().then((r) => {
            this.dataGreenHouses = r;
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
    crop(id) {
        if (!this.dataCrops)
            return;
        return this.dataCrops.filter(d => d.id === id)[0].description;
    }
    greenhouse(id) {
        if (!this.dataGreenHouses)
            return;
        return this.dataGreenHouses.filter(d => d.id === id)[0].description;
    }
};
CiclosPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
CiclosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ciclos',
        template: _raw_loader_ciclos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ciclos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CiclosPage);



/***/ }),

/***/ 66034:
/*!*****************************************!*\
  !*** ./src/app/ciclos/ciclos.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaWNsb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 89787:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ciclos/ciclos.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ciclos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"container-fluid mt-4\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header color=\"primary\">\n        <ion-card-title>Gestión de Ciclos de Cultivo</ion-card-title>\n        <ion-card-subtitle></ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"row mt-2\">\n          <div class=\"col-4\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-floating mb-3\">\n                  <select name=\"\" id=\"\" class=\"form-control\" [(ngModel)]=\"item.crop_id\">\n                    <option value=\"{{c.id}}\" *ngFor=\"let c of dataCrops\">{{c.description}}</option>\n                  </select>\n                  <label for=\"floatingInput\">Cultivo</label>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-floating mb-3\">\n                  <select name=\"\" id=\"\" class=\"form-control\" [(ngModel)]=\"item.greenhouse_id\">\n                    <option value=\"{{g.id}}\" *ngFor=\"let g of dataGreenHouses\">{{g.description}}</option>\n                  </select>\n                  <label for=\"floatingInput\">Invernadero</label>\n                </div>\n              </div>\n              <div class=\"col-6 mb-3\">\n                <label for=\"floatingInput\">Fecha Inicial</label>\n                  <div class=\"input-group\">\n                    <ion-datetime presentation=\"year-month\" class=\"form-control\" [(ngModel)]=\"item.init_date\"></ion-datetime>\n                    <!--input type=\"text\" class=\"form-control\"-->\n                    <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"open-modal\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </button>\n                  </div>\n              </div>\n              <div class=\"col-6 mb-3\">\n                <label for=\"floatingInput\">Fecha Final</label>\n                  <div class=\"input-group\">\n                    <ion-datetime presentation=\"year-month\" class=\"form-control\" [(ngModel)]=\"item.end_date\"></ion-datetime>\n                    <!--input type=\"text\" class=\"form-control\"-->\n                    <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"open-modal\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </button>\n                  </div>\n              </div>\n              <div class=\"col-9 mt-2\">\n                <div class=\"form-group row\"><label for=\"\" class=\"col-form-label col-4\">Observ.</label>\n                  <div class=\"col-8\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"item.observations\" class=\"form-control\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-check row\">\n                  <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"item.active\" id=\"flexCheckDefault\">\n                  <label class=\"form-check-label\" for=\"flexCheckDefault\">\n                    Estado\n                  </label>\n                </div>\n                <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"save()\"> Guardar</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"table-responsive-md\">\n              <table class=\"table table-hover\">\n                <thead class=\"bg-black text-light p-1\">\n                <tr>\n                  <th scope=\"col\">Id</th>\n                  <th scope=\"col\">Invernadero</th>\n                  <th scope=\"col\">Cultivo</th>\n                  <th scope=\"col\">Fecha Ini</th>\n                  <th scope=\"col\">Fecha Fin</th>\n                  <th scope=\"col\">Estado</th>\n                  <th scope=\"col\">Observaciones</th>\n                  <th scope=\"col\">Acciones</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let i of data\">\n                  <th scope=\"row\">{{i.id}}</th>\n                  <td>{{greenhouse(i.greenhouse_id)}}</td>\n                  <td>{{crop(i.crop_id)}}</td>\n                  <td>{{i.init_date}}</td>\n                  <td>{{i.end_date}}</td>\n\n                  <td><span *ngIf=\"i.active\">SI</span><span *ngIf=\"!i.active\">NO</span></td>\n                  <td>{{i.observations}}</td>\n                  <td>\n                    <button class=\"btn btn-sm btn-warning\" (click)=\"item = i; edit = true;\">\n                      <i class=\"class fa fa-edit\"></i>\n                    </button>\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(i.id)\">\n                      <i class=\"class fa fa-trash\"></i>\n                    </button>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ciclos_ciclos_module_ts.js.map