import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './peges/main/main.component';
import { LoginComponent } from './peges/login/login.component';
import { RegisterComponent } from './peges/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
