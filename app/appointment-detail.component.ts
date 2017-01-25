import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-appointment-detail',
  templateUrl: 'appointment-detail.component.html'
})

export class AppointmentDetailComponent implements OnInit {
  @Input()
  appointment: Appointment;

  constructor(
	  private appointmentService: AppointmentService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.appointmentService.getAppointment(+params['id']))
      .subscribe(appointment => this.appointment = appointment);
  }

  goBack(): void {
    this.location.back();
  }
}