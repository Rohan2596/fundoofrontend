import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/resetpassword/reset-password.component';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AuthenticationGuard } from "./services/AuthGuard";
import { AppnoteComponent } from './component/appnote/appnote.component';
import { AppIconComponent } from './component/app-icon/app-icon.component';
import { AppSocialComponent } from './component/app-social/app-social.component';
import { NoteComponent } from "./component/note/note.component";
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { TrashBoxComponent } from './component/trash-box/trash-box.component';
const routes: Routes = [
  {
    path: ' ', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },

  {
    path: 'user/resetPassword/:token',
    component: ResetPasswordComponent
  },
  {
    canActivate: [AuthenticationGuard],
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    //    {
    //    path: '',
    //     component: AppnoteComponent
    //  },
    // {
    //   path: '',
    //   component: AppIconComponent
    // },
    // {
    //   path: '',
    //   component: AppSocialComponent
    // },
    {
      path: '',
      component: NoteComponent
      
    },
    {
      path: 'note',
      component: NoteComponent
    },
    // {
    //   path: '',
    //   component: DialogBoxComponent
    // },
    {
      path: 'trash',
      component: TrashBoxComponent

    }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
