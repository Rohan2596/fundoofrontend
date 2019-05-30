import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service';
import { ResetPassword } from '../../models/resetPassword';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: ResetPassword = new ResetPassword();
  ResetPasswordForm: FormGroup;
  token: string;
  constructor(private snackbar: MatSnackBar,
              private httpservice: HttpService,
              private fromBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
  this.ResetPasswordForm = this.fromBuilder.group(
    {
      confirmPassword: new FormControl(this.resetPassword.confirmPassword, [Validators.required]),
      newPassword: new FormControl(this.resetPassword.newPassword, [Validators.required])
    }
    );
  this.token = this.route.snapshot.paramMap.get('token');
 }
  onReset() {
// tslint:disable-next-line: triple-equals
    if (this.resetPassword.newPassword != this.resetPassword.confirmPassword) { throw new Error('password are not same'); }
    if (this.resetPassword.newPassword === '' || this.resetPassword.confirmPassword === '') { throw new Error('password field empty'); }

    this.httpservice.putRequest('resetPassword/' + this.token, this.resetPassword).subscribe(
      (response: any) => {
        if (response.statusCode === 5) {
          console.log(response);
          this.snackbar.open(
            'Mail sent to user emailid',
            'undo',
            {duration: 2500}
          );
          this.router.navigate(['/login']);
        } else {
          console.log(response);
          this.snackbar.open(
            'User emailid is invalid',
            'undo',
            {duration: 2500}
          );
        }
      }
    );
  }

}
