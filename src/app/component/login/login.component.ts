import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider,
  SocialUser
} from 'angular-6-social-login';
import { HttpService } from 'src/app/services/http-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from '../../models/login';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  loginForm: FormGroup;
  token: string;
  authorized: boolean;
  user: SocialUser;
  constructor(private snackBar: MatSnackBar, private httpservice: HttpService,
              public formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private socialAuthService: AuthService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(this.login.emailId, [Validators.required]),
        password: new FormControl(this.login.password, [Validators.required, Validators.minLength(6)])
      }

    );
    // this.token = this.route.snapshot.paramMap.get('token')
   }
  onlogin() {
    console.log('Login');
    this.token = localStorage.getItem('token');
    this.httpservice.postRequest('login', this.login).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.login.emailId);
          this.snackBar.open(
            'Login Successfully',
            'undo',
            { duration: 2500 }

          );
          this.router.navigate(['/dashboard']);
        } else {
          console.log(response);
          this.snackBar.open(
            'Login Failed',
            'undo',
            { duration: 2500 }
            );
        }

      }
    );
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        if (userData != null) {

          this.router.navigate(['/dashboard']);

          localStorage.setItem('email', userData.email);
          localStorage.setItem('userName' , userData.name);

          this.authorized = true;
          this.user = userData;
       }

  }

);
}

}
