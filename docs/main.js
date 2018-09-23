(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-add-btn {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<button routerLink=\"/add\" mat-fab color=\"primary\" class=\"event-add-btn\">\n    <mat-icon>add</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'events';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
var CATEGORIES = [
    {
        'title': 'concert',
        'checked': false
    },
    {
        'title': 'festival',
        'checked': false
    },
    {
        'title': 'exhibition',
        'checked': false
    },
    {
        'title': 'presentation',
        'checked': false
    }
];


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/events-list/events-list.component */ "./src/app/components/events-list/events-list.component.ts");
/* harmony import */ var _components_events_map_events_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/events-map/events-map.component */ "./src/app/components/events-map/events-map.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'events', component: _components_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_10__["EventsListComponent"] },
    { path: 'event/:id', component: _components_event_event_component__WEBPACK_IMPORTED_MODULE_14__["EventComponent"] },
    { path: 'map', component: _components_events_map_events_map_component__WEBPACK_IMPORTED_MODULE_11__["EventsMapComponent"] },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"] },
    { path: 'filter', component: _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"] },
    { path: 'add', component: _components_add_add_component__WEBPACK_IMPORTED_MODULE_15__["AddComponent"] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_10__["EventsListComponent"],
                _components_events_map_events_map_component__WEBPACK_IMPORTED_MODULE_11__["EventsMapComponent"],
                _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_14__["EventComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_15__["AddComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // material
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add/add.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/add/add.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-input-full {\n    width: 100%;\n}\n\n.add-input-half {\n    margin: 0 10px 0 0;\n    width: 45%;\n}"

/***/ }),

/***/ "./src/app/components/add/add.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-card class=\"mat-card\">\n      <mat-card-header>\n          <h1>Add event:</h1>\n      </mat-card-header>\n      <div [hidden]=\"!submitted\">Event has been added</div>\n      <div [hidden]=\"submitted\">\n        <form (ngSubmit)=\"add()\" #addForm=\"ngForm\">\n          <mat-form-field class=\"add-input-full\">\n            <input matInput \n                  placeholder=\"Event title\" \n                  [(ngModel)]=\"event.title\"\n                  name=\"title\"\n                  required\n                  #title>\n          </mat-form-field>\n\n          <mat-form-field class=\"add-input-full\">\n            <textarea matInput \n                      placeholder=\"Event description\" \n                      [(ngModel)]=\"event.description\" \n                      name=\"description\"\n                      required \n                      #description>\n            </textarea>\n          </mat-form-field>\n\n          <mat-form-field class=\"add-input-full\">\n            <mat-select placeholder=\"Select category\" [(ngModel)]=\"event.category\"  name=\"category\" #category required>\n              <mat-option *ngFor=\"let category of categories\" value=\"{{category.title}}\">\n                {{category.title}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"add-input-full\">\n              <input matInput \n                        placeholder=\"Input url of image\" \n                        [(ngModel)]=\"event.poster\" \n                        name=\"description\" \n                        #poster/>\n            </mat-form-field>\n\n          <mat-form-field class=\"add-input-half\">\n            <input matInput \n                  [matDatepicker]=\"picker1\" \n                  placeholder=\"Choose start date\" \n                  [(ngModel)]=\"event.start_at\" \n                  name=\"start-date\" \n                  required\n                  #start_date />\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field class=\"add-input-half\">\n            <input matInput \n                  [matDatepicker]=\"picker\" \n                  placeholder=\"Choose end date\" \n                  [(ngModel)]=\"event.end_at\" \n                  name=\"end-date\"\n                  required \n                  #end_date />\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field class=\"add-input-full\">\n            <input matInput \n                  placeholder=\"Event venue\" \n                  [(ngModel)]=\"event.venue\" \n                  name=\"venue\"\n                  required \n                  #venue />\n          </mat-form-field>\n\n          <mat-form-field class=\"add-input-full\">\n            <input matInput placeholder=\"Ticket price\" value=\"\" [(ngModel)]=\"event.price\" name=\"price\" #price>\n          </mat-form-field>\n        \n        <mat-card-actions>\n          <button mat-raised-button routerLink=\"/events\">Cancel</button>\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!addForm.form.valid\">Add</button>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(eventsService) {
        this.eventsService = eventsService;
        this.submitted = false;
        this.categories = _app_constants__WEBPACK_IMPORTED_MODULE_1__["CATEGORIES"];
        this.event = {
            "id": null,
            "title": "",
            "description": "",
            "category": "",
            "venue": "",
            "price": null,
            "poster": "",
            "start_at": "",
            "end_at": "",
            "is_favorite": false
        };
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.add = function () {
        this.event.id = this.eventsService.setEventID();
        this.eventsService.addEvent(this.event);
        this.submitted = true;
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/components/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/event/event.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!event\">\n    <mat-progress-spinner></mat-progress-spinner>\n</ng-container>\n<ng-container *ngIf=\"event\">\n    <mat-card class=\"mat-card\">\n        <mat-card-header>\n            <div mat-card-avatar style.background-image=\"url({{event.poster}})\" class=\"mat-card-avatar\"></div>\n            <h1>{{event.title}}</h1>\n        </mat-card-header>\n    \n        <div class=\"mat-card-date\">\n            <mat-icon>event</mat-icon>\n            <span>{{event.start_at}} - {{event.end_at}}</span>\n    \n            <mat-icon>place</mat-icon>\n            <span>{{event.venue}}</span>\n        </div>\n    \n        <p>{{event.description}}</p>\n        \n        <mat-card-actions>\n            <div class=\"event_price\">\n                <mat-icon>local_play</mat-icon>\n                <span>{{event.price}}</span>\n            </div>\n            <div class=\"add_to_favorite\" (click)=\"addToFavorite(event.id)\">\n                <mat-icon>{{event.is_favorite?'star':'star_border'}}</mat-icon>\n                {{event.is_favorite?'Remove from favorites':'Add to favorites'}}\n            </div>\n        </mat-card-actions>\n    </mat-card>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = /** @class */ (function () {
    function EventComponent(activatedRoute, eventsService) {
        this.activatedRoute = activatedRoute;
        this.eventsService = eventsService;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.eventId = params.get('id');
        });
        this.getEvent(this.eventId);
    };
    EventComponent.prototype.getEvent = function (id) {
        var _this = this;
        var isEventsStorage = this.eventsService.getEventsStorage('events');
        if (isEventsStorage) {
            this.events = isEventsStorage;
        }
        else {
            this.eventsService.getEvents().subscribe(function (events) {
                _this.events = events;
                _this.eventsService.setEventsStorage('events', _this.events);
            });
        }
        return this.event = this.events.find(function (event) { return event.id === id; });
    };
    EventComponent.prototype.addToFavorite = function (id) {
        var event = this.events.find(function (event) { return event.id === id; });
        event.is_favorite = !event.is_favorite;
        // this.eventsService.updateEventsStorage('favorites', this.events);
        this.eventsService.updateEventsStorage('events', this.events);
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/components/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/components/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/events-list/events-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/events-list/events-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!events\">\n    <mat-progress-spinner></mat-progress-spinner>\n</ng-container>\n<ng-container *ngIf=\"events\">\n  <button mat-icon-button (click)=\"openDialog()\">\n    <mat-icon>filter_list</mat-icon>\n  </button>\n\n  <div class=\"events-list\">\n\n    <mat-card *ngFor=\"let event of events | filter : categories\" class=\"mat-card\">\n      <mat-card-header>\n        <div mat-card-avatar style.background-image=\"url({{event.poster ? event.poster: '../assets/images/noimage.png'}})\" class=\"mat-card-avatar\"></div>\n        <h1 routerLink=\"/event/{{event.id}}\">{{event.title}}</h1>\n      </mat-card-header>\n\n      <div class=\"mat-card-date\">\n          <mat-icon>event</mat-icon>\n          <span>{{event.start_at}} - {{event.end_at}}</span>\n\n          <mat-icon>place</mat-icon>\n          <span>{{event.venue}}</span>\n      </div>\n\n      <p>{{event.description}}</p>\n      \n      <mat-card-actions>\n        <div class=\"event_price\">\n          <mat-icon>local_play</mat-icon>\n          <span>{{event.price}}</span>\n        </div>\n        <div class=\"add_to_favorite\" (click)=\"addToFavorite(event.id)\">\n          <mat-icon>{{event.is_favorite?'star':'star_border'}}</mat-icon>\n          {{event.is_favorite?'Remove from favorites':'Add to favorites'}}\n        </div>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/events-list/events-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/events-list/events-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events-list/events-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/events-list/events-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return EventsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsListComponent = /** @class */ (function () {
    function EventsListComponent(eventsService, dialog) {
        this.eventsService = eventsService;
        this.dialog = dialog;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isEventsStorage = this.eventsService.getEventsStorage('events');
        if (isEventsStorage) {
            this.events = isEventsStorage;
        }
        else {
            this.eventsService.getEvents().subscribe(function (events) {
                _this.events = events;
                _this.eventsService.setEventsStorage('events', _this.events);
            });
        }
    };
    EventsListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"], {
            width: '350px',
            data: { categories: [] }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.categories = result;
        });
    };
    EventsListComponent.prototype.getEvent = function (id) {
        var _this = this;
        this.eventsService.getEvents().subscribe(function (events) {
            return _this.event = events.find(function (event) { return event.id === id; });
        });
    };
    EventsListComponent.prototype.addToFavorite = function (id) {
        var event = this.events.find(function (event) { return event.id === id; });
        event.is_favorite = !event.is_favorite;
        this.eventsService.updateEventsStorage('events', this.events);
    };
    EventsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-list',
            template: __webpack_require__(/*! ./events-list.component.html */ "./src/app/components/events-list/events-list.component.html"),
            styles: [__webpack_require__(/*! ./events-list.component.scss */ "./src/app/components/events-list/events-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EventsListComponent);
    return EventsListComponent;
}());



/***/ }),

/***/ "./src/app/components/events-map/events-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/events-map/events-map.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events-map/events-map.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/events-map/events-map.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"eventsMap\" #googleMap style=\"width:100%; height: 90vh;\"></div>"

/***/ }),

/***/ "./src/app/components/events-map/events-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/events-map/events-map.component.ts ***!
  \***************************************************************/
/*! exports provided: EventsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMapComponent", function() { return EventsMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="googlemaps" />


var EventsMapComponent = /** @class */ (function () {
    function EventsMapComponent(eventsService) {
        this.eventsService = eventsService;
    }
    EventsMapComponent.prototype.ngOnInit = function () {
        this.events = this.eventsService.getEventsStorage('events');
        this.loadMap();
    };
    EventsMapComponent.prototype.loadMap = function () {
        var eventsMap = document.getElementById('map-canvas');
        var mapProp = {
            center: new google.maps.LatLng(49.843713, 24.026437),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        // this.map.panTo(mapProp.center);
        // var marker = new google.maps.Marker({ position: mapProp.center });
        // marker.setMap(this.map);
        var infowindow = new google.maps.InfoWindow({
            content: "Welcome!"
        });
        // Try HTML5 geolocation.
        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     var pos = {
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude
        //     };
        //     infowindow.setPosition(pos);
        //     infowindow.setContent('You are here.');
        //     infowindow.open(this.map);
        //     this.map.setCenter(pos);
        //     marker.setMap(this.map);
        //   }, function() {
        //     this.handleLocationError(true, infowindow, this.map.getCenter());
        //   });
        // } else {
        //   // Browser doesn't support Geolocation
        //   this.handleLocationError(false, infowindow, this.map.getCenter());
        // }
        // infowindow.open(this.map, marker);
        this.setMultipleMarker(this.events, this);
    };
    EventsMapComponent.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
    };
    EventsMapComponent.prototype.setMultipleMarker = function (markers, self) {
        markers.forEach(function (marker) {
            (function (marker) {
                var mark = new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng) });
                var infowindow = new google.maps.InfoWindow({
                    content: '<a href="/#/event/' + marker.id + '">' + marker.title + '</a>'
                });
                infowindow.open(self.map, mark);
                mark.setMap(self.map);
            })(marker);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('googleMap'),
        __metadata("design:type", Object)
    ], EventsMapComponent.prototype, "gmapElement", void 0);
    EventsMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-map',
            template: __webpack_require__(/*! ./events-map.component.html */ "./src/app/components/events-map/events-map.component.html"),
            styles: [__webpack_require__(/*! ./events-map.component.css */ "./src/app/components/events-map/events-map.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]])
    ], EventsMapComponent);
    return EventsMapComponent;
}());



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!events\">\n    <mat-progress-spinner></mat-progress-spinner>\n</ng-container>\n<ng-container *ngIf=\"events\">\n    <div class=\"events-list\">\n      <ng-container *ngFor=\"let event of events\">\n        <mat-card *ngIf=\"event.is_favorite\" class=\"mat-card\">\n          <mat-card-header>\n            <div mat-card-avatar style.background-image=\"url({{event.poster}})\" class=\"mat-card-avatar\"></div>\n            <h1 routerLink=\"/event/{{event.id}}\">{{event.title}}</h1>\n          </mat-card-header>\n    \n          <div class=\"mat-card-date\">\n              <mat-icon>event</mat-icon>\n              <span>{{event.start_at}} - {{event.end_at}}</span>\n    \n              <mat-icon>place</mat-icon>\n              <span>{{event.venue}}</span>\n          </div>\n    \n          <p>{{event.description}}</p>\n          \n          <mat-card-actions>\n            <div class=\"event_price\">\n              <mat-icon>local_play</mat-icon>\n              <span>{{event.price}}</span>\n            </div>\n            <div class=\"add_to_favorite\" (click)=\"addToFavorite(event.id)\">\n              <mat-icon>{{event.is_favorite?'star':'star_border'}}</mat-icon>\n              {{event.is_favorite?'Remove from favorites':'Add to favorites'}}\n            </div>\n          </mat-card-actions>\n        </mat-card>\n      </ng-container>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(eventsService) {
        this.eventsService = eventsService;
        this.events = [];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isEventsStorage = this.eventsService.getEventsStorage('events');
        if (isEventsStorage) {
            this.events = isEventsStorage;
        }
        else {
            this.eventsService.getEvents().subscribe(function (events) {
                _this.events = events;
            });
        }
        this.showFavorite(this.events);
    };
    FavoritesComponent.prototype.showFavorite = function (events) {
        return events.filter(function (event) { return event.is_favorite === true; });
        ;
    };
    FavoritesComponent.prototype.addToFavorite = function (id) {
        var event = this.events.find(function (event) { return event.id === id; });
        event.is_favorite = !event.is_favorite;
        this.eventsService.updateEventsStorage('events', this.events);
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/filter/filter.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/filter/filter.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!categories\">\n    <mat-progress-spinner></mat-progress-spinner>\n</ng-container>\n<ng-container *ngIf=\"categories\">\n    <h2>Select category:</h2>\n    <form #filterForm=\"ngForm\" (ngSubmit)=\"setFilter()\">\n        <div *ngFor=\"let category of categories\">\n            <mat-checkbox name=\"{{category.title}}\" [(ngModel)]=\"category.checked\" #checked>\n                {{category.title}}\n            </mat-checkbox>\n        </div>\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n        <button mat-raised-button color=\"primary\" type=\"submit\">Ok</button>\n    </form>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FilterComponent = /** @class */ (function () {
    function FilterComponent(dialogRef, eventsService, data) {
        this.dialogRef = dialogRef;
        this.eventsService = eventsService;
        this.data = data;
        this.categories = _app_constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORIES"];
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    FilterComponent.prototype.setFilter = function () {
        this.eventsService.filterEvents(this.categories);
        this.cancel();
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/components/filter/filter.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], Object])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar color=\"primary\" backgroundColor=\"primary\">\n  <a routerLink=\"/\" mat-tab-link disabled>EVENTS</a>\n  <a routerLink=\"/events\" routerLinkActive #list=\"routerLinkActive\" [active]=\"list.isActive\" mat-tab-link>\n    <mat-icon active=\"true\">list</mat-icon>\n  </a>\n  <a routerLink=\"/map\" routerLinkActive #location_on=\"routerLinkActive\" [active]=\"location_on.isActive\" mat-tab-link>\n    <mat-icon>location_on</mat-icon>\n  </a>\n  <a routerLink=\"/favorites\" routerLinkActive #start_rate=\"routerLinkActive\" [active]=\"start_rate.isActive\" mat-tab-link>\n    <mat-icon>start_rate</mat-icon>\n  </a>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        console.log(args);
        return value;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
        this.categories = _app_constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"];
    }
    EventsService.prototype.getEvents = function () {
        return this.http.get('assets/events/events_list.json');
    };
    EventsService.prototype.setEventsStorage = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    EventsService.prototype.getEventsStorage = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    EventsService.prototype.addEventStorage = function (key, value) {
        var old = this.getEventsStorage(key);
        if (old === null)
            old = "";
        old.push(value);
        localStorage.setItem(key, JSON.stringify(old));
    };
    EventsService.prototype.updateEventsStorage = function (key, value) {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
    };
    EventsService.prototype.filterEvents = function (data) {
        console.log(data);
    };
    EventsService.prototype.addEvent = function (data) {
        this.addEventStorage('events', data);
    };
    EventsService.prototype.setEventID = function () {
        return Math.random().toString(36).substr(2, 16);
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/volodymyrpits/Work/Angular/Code/events/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map