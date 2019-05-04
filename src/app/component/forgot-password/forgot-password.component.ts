import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http-service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ForgotPassword } from "../../models/forgotPassword";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
forgotPassword:ForgotPassword=new ForgotPassword();
ForgotPasswordForm:FormGroup;
constructor(private snackBar:MatSnackBar,
  private httpservice:HttpService, 
  public formBuilder:FormBuilder,
  ) { }

  ngOnInit() {
    this.ForgotPasswordForm=this.formBuilder.group(
      {'email':new FormControl(this.forgotPassword.emailId,[Validators.required]) 
      })
  }
  onForgot(){
    this.httpservice.postRequest("forgotPassword",this.forgotPassword).subscribe(
      (response:any)=>{
        if(response.statusCode === 3){
          console.log(response);
         
          this.snackBar.open(
            "Mail sent to user emailid",
            "undo",
            {duration:2500}
          )
        }else{
          console.log(response);
          this.snackBar.open(
            "Invalid  Email",
            "undo",
            {duration:2500}
          )
        }
      }
    )
  }
}
