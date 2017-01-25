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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var appointment_service_1 = require('./appointment.service');
var appointment_1 = require('./appointment');
require('rxjs/add/operator/switchMap');
var AppointmentDetailComponent = (function () {
    function AppointmentDetailComponent(appointmentService, route, location) {
        this.appointmentService = appointmentService;
        this.route = route;
        this.location = location;
    }
    AppointmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.appointmentService.getAppointment(+params['id']); })
            .subscribe(function (appointment) { return _this.appointment = appointment; });
    };
    AppointmentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', appointment_1.Appointment)
    ], AppointmentDetailComponent.prototype, "appointment", void 0);
    AppointmentDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-appointment-detail',
            templateUrl: 'appointment-detail.component.html'
        }), 
        __metadata('design:paramtypes', [appointment_service_1.AppointmentService, router_1.ActivatedRoute, common_1.Location])
    ], AppointmentDetailComponent);
    return AppointmentDetailComponent;
}());
exports.AppointmentDetailComponent = AppointmentDetailComponent;
//# sourceMappingURL=appointment-detail.component.js.map