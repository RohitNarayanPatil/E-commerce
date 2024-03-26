import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
  // {path: '', redirectTo:'/accounts/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'emailsignup',component:SignupComponent},
  {path:'forgot-password',component:ForgotpassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }