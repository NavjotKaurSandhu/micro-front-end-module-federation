import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingComponent } from './flight-routing.module';
import { FlightComponent } from './flight/flight.component';


@NgModule({
  declarations: [
    FlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingComponent
  ]
})
export class FlightModule { }
