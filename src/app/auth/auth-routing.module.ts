import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
=======
  // {path: '', redirectTo:'/accounts/login', pathMatch:'full'},
>>>>>>> f409f75ad2555695bb7de3ec218dcdf25be810a0
  {path:'login',component:LoginComponent},
  {path:'emailsignup',component:SignupComponent},
  {path:'forgot-password',component:ForgotpassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }