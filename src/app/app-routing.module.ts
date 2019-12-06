import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './home/home.module';

import { LandingComponent } from './home/landing/landing.component';
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:"**",component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
