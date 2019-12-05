import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module'
import { LandingComponent } from './home/landing/landing.component';
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:"**",component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule,
AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
