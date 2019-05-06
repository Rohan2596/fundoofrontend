import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/resetpassword/reset-password.component';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AuthenticationGuard } from "./services/AuthGuard";
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
{
  canActivate:[AuthenticationGuard],
  path:'dashboard',
  component:DashboardComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
