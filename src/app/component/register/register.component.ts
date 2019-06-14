import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../../models/user';
import { HttpService } from 'src/app/services/http-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  registerForm: FormGroup;
  constructor(private snackBar: MatSnackBar, private httpservice: HttpService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: new FormControl(this.user.name, [Validators.required]),
        email: new FormControl(this.user.emailId, Validators.required),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
        mobileNumber: new FormControl(this.user.phNumber, [Validators.required])
      }
    );

  }

  onRegister() {
    console.log('Registration');
    this.httpservice.postRequest('registration', this.user).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          console.log(response);
          this.snackBar.open(
            'Registered Successfully',
            'undo',
            {duration: 2500}
          );
        } else {
          console.log(response);
          this.snackBar.open(
            'Registration Failed',
            'undo',
            {duration: 2500}
          );
        }

      }
    );
  }
}


