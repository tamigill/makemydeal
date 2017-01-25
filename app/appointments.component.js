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
var appointment_service_1 = require('./appointment.service');
var AppointmentsComponent = (function () {
    function AppointmentsComponent(appointmentService) {
        this.appointmentService = appointmentService;
        this.title = '';
    }
    AppointmentsComponent.prototype.getAppointments = function () {
        var _this = this;
        this.appointmentService.getAppointments().then(function (appointments) { return _this.appointments = appointments; });
    };
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.getAppointments();
    };
    AppointmentsComponent.prototype.onSelect = function (appointment) {
        this.selectedAppointment = appointment;
    };
    AppointmentsComponent.prototype.getStyle = function (apptId) {
        var indexVal = apptId - 1;
        if (this.appointments[indexVal].name != '' && this.appointments[indexVal].phone != '')
            return 'red';
    };
    AppointmentsComponent = __decorate([
        core_1.Component({
            selector: 'my-appointments',
            template: "\n  \t<h2>Appointment Times</h2>\n  \t<ul class=\"appointments\">\n      <li *ngFor=\"let appointment of appointments\" [class.selected]=\"appointment === selectedAppointment\"\n       (click)=\"onSelect(appointment)\">\n        <span class=\"badge\" [style.background-color]=\"getStyle(appointment.id)\">{{appointment.time}}</span>\n      </li>\n  \t</ul>\n    <my-appointment-detail class=\"my-appointment\" [appointment]=\"selectedAppointment\"></my-appointment-detail>\n  ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .appointments {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .appointments li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .appointments li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .appointments li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .appointments .text {\n    position: relative;\n    top: -3px;\n  }\n  .appointments .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n    width: 100%;\n  }\n  .my-appointment {\n    display: inline-block;\n    font-size: small;\n    color: #000;\n    padding: 0.8em 0.7em 0 0.7em;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n    width: 100%;\n  }\n"],
            providers: [appointment_service_1.AppointmentService]
        }), 
        __metadata('design:paramtypes', [appointment_service_1.AppointmentService])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());
exports.AppointmentsComponent = AppointmentsComponent;
//# sourceMappingURL=appointments.component.js.map