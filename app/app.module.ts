import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, FormBuilder }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { AppointmentDetailComponent } from './appointment-detail.component';
import { AppointmentsComponent }     from './appointments.component';
import { AppointmentService }         from './appointment.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
  	  {
  	    path: 'detail/:id',
  	    component: AppointmentDetailComponent
  	  },
  	  {
  	    path: '',
  	    redirectTo: '/',
  	    pathMatch: 'full'
  	  }
    ])
  ],
  declarations: [
    AppComponent,
    AppointmentDetailComponent,
    AppointmentsComponent
  ],
  providers: [
    AppointmentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
