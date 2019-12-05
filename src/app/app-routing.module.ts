import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module'
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule,
AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
