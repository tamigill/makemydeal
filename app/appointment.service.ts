import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';

@Injectable()
export class AppointmentService { 
  getAppointments(): Promise<Appointment[]> {
  	return Promise.resolve(APPOINTMENTS);
  } 

  getAppointment(id: number): Promise<Appointment> {
    return this.getAppointments()
             .then(appointments => appointments.find(appointment => appointment.id === id));
  }
}
