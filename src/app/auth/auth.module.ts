import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './peges/login/login.component';
import { RegisterComponent } from './peges/register/register.component';
import { MainComponent } from './peges/main/main.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
