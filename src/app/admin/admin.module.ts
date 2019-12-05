import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from "ngx-bootstrap/modal";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
