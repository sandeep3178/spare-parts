import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component'
import {CarlightsComponent} from './carlights/carlights.component'
import { CarwheelsComponent } from './carwheels/carwheels.component';
import { CarbumperComponent } from './carbumper/carbumper.component';
import { CaradsystemComponent } from './caradsystem/caradsystem.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'carlights',component:CarlightsComponent},
  {path:'carwheels',component:CarwheelsComponent},
  {path:'carbumpers',component:CarbumperComponent},
  {path:'caradsystem',component:CaradsystemComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
