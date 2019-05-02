import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './resetpassword/reset-password.component';

const routes: Routes = [
  {
    path:' ', redirectTo: 'login', pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
   
  {
    path: 'user/resetPassword/:token',
    component : ResetPasswordComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
