"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var appointment_detail_component_1 = require('./appointment-detail.component');
var appointments_component_1 = require('./appointments.component');
var appointment_service_1 = require('./appointment.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'appointments',
                        component: appointments_component_1.AppointmentsComponent
                    },
                    {
                        path: 'detail/:id',
                        component: appointment_detail_component_1.AppointmentDetailComponent
                    },
                    {
                        path: '',
                        redirectTo: '/',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                appointment_detail_component_1.AppointmentDetailComponent,
                appointments_component_1.AppointmentsComponent
            ],
            providers: [
                appointment_service_1.AppointmentService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map