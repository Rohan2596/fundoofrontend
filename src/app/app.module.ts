import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './component/resetpassword/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DemoMaterialModule } from './material.module';
import { AppnoteComponent } from './component/appnote/appnote.component';
import { AppIconComponent } from './component/app-icon/app-icon.component';
import { AppSocialComponent } from './component/app-social/app-social.component';
import { NoteComponent } from './component/note/note.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AppnoteComponent,
    AppIconComponent,
    AppSocialComponent,
    NoteComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
    
   
  ],
  providers: [], 
  bootstrap: [AppComponent],
  entryComponents:[DialogBoxComponent]
})
export class AppModule { }
