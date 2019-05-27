import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http-service';
import { MatSnackBar } from "@angular/material/snack-bar";
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
  constructor(private snackBar: MatSnackBar, private httpservice: HttpService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        'email': new FormControl(this.login.emailId, [Validators.required]),
        'password': new FormControl(this.login.password, [Validators.required, Validators.minLength(6)])
      }

    )
    this.token = this.route.snapshot.paramMap.get('token')
    

  }
  onlogin() {
    console.log("Login");
    this.token = localStorage.getItem("token")
    this.httpservice.postRequest("login", this.login).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          console.log(response);
          localStorage.setItem("token", response.token);
          localStorage.setItem("email", this.login.emailId);
          this.snackBar.open(
            "Login Successfully",
            "undo",
            { duration: 2500 }

          )
          this.router.navigate(['/dashboard'])
        } else {
          console.log(response);
          this.snackBar.open(
            "Login Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  }

}
