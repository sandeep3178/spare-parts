import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing/landing.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarlightsComponent } from './carlights/carlights.component';
import { CarwheelsComponent } from './carwheels/carwheels.component';
import { CarbumperComponent } from './carbumper/carbumper.component';
import { CaradsystemComponent } from './caradsystem/caradsystem.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [LandingComponent, CarlightsComponent, CarwheelsComponent, CarbumperComponent, CaradsystemComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
    
  ]
})
export class HomeModule { }
