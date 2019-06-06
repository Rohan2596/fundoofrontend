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
import {MatIconModule} from '@angular/material/icon';
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
import { TrashBoxComponent } from './component/trash-box/trash-box.component';
import { ArchiveBoxComponent } from './component/archive-box/archive-box.component';
import { PinnedComponent } from './component/pinned/pinned.component';
import { LabelComponent } from './component/label/label.component';
import { DialogLabelComponent } from './component/dialog-label/dialog-label.component';
import { LabelDisplayComponent } from './component/label-display/label-display.component';
import {DialogProfileComponent} from './component/dialog-profile/dialog-profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DataService } from './services/data.service';
import { DialogCollabratorsComponent } from './component/dialog-collabrators/dialog-collabrators.component';
import { CollabsDisplayComponent } from './component/collabs-display/collabs-display.component';
import { ReminderDisplayComponent } from './component/reminder-display/reminder-display.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login'
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2079272302181944")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('28644136467-nkjbvgtdgfl74dmnh5gi37578o0l9il6.apps.googleusercontent.com')
        },
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          },
      ]
  );
  return config;
}
 
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
    TrashBoxComponent,
    ArchiveBoxComponent,
    PinnedComponent,
    LabelComponent,
    DialogLabelComponent,
    LabelDisplayComponent,
    DialogProfileComponent,
    DialogCollabratorsComponent,
    CollabsDisplayComponent,
    ReminderDisplayComponent,
    ReminderComponent
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
    DemoMaterialModule,
    ImageCropperModule,
    SocialLoginModule,


  ],
  providers: [DataService,  {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent, DialogProfileComponent , DialogCollabratorsComponent]
})
export class AppModule { }
