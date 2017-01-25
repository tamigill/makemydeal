import { Component, OnInit } from '@angular/core';
import { Appointment } from './appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'my-appointments',
  template: `
  	<h2>Appointment Times</h2>
  	<ul class="appointments">
      <li *ngFor="let appointment of appointments" [class.selected]="appointment === selectedAppointment"
       (click)="onSelect(appointment)">
        <span class="badge" [style.background-color]="getStyle(appointment.id)">{{appointment.time}}</span>
      </li>
  	</ul>
    <my-appointment-detail class="my-appointment" [appointment]="selectedAppointment"></my-appointment-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .appointments {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .appointments li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .appointments li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .appointments li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .appointments .text {
    position: relative;
    top: -3px;
  }
  .appointments .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
    width: 100%;
  }
  .my-appointment {
    display: inline-block;
    font-size: small;
    color: #000;
    padding: 0.8em 0.7em 0 0.7em;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
    width: 100%;
  }
`],
 providers: [AppointmentService]
})
export class AppointmentsComponent implements OnInit { 
  title = '';
  appointments: Appointment[];
  selectedAppointment: Appointment;

  constructor(private appointmentService: AppointmentService) {}

  getAppointments(): void {
    this.appointmentService.getAppointments().then(appointments => this.appointments = appointments);
  }

  ngOnInit(): void {
    this.getAppointments();
  }

  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
  }

  getStyle(apptId:number){
    var indexVal = apptId - 1;
    if( this.appointments[indexVal].name != '' && this.appointments[indexVal].phone != '') return 'red';
  }
}



