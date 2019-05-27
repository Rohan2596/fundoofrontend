import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss']
})
export class DialogProfileComponent implements OnInit {

uploadForm: FormGroup; 
  constructor(private httpservice:HttpService,private formBuilder: FormBuilder,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {


    this.httpservice.uploadImage('uploadImage',this.uploadForm.get('profile').value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  // UploadImage(){
  //   console.log("image upload");
  //  .subscribe(
  //     (response: any) => {
  //       if (response.statusCode === 10) {
  //         console.log(response);
       
  //         this.snackBar.open(
  //           "Image uploaded",
  //           "undo",
  //           { duration: 2500 }
            
  //         )
      
  //       } else {
  //         console.log(response);
  //         this.snackBar.open(
  //           "Notes not created",
  //           "undo",
  //           { duration: 2500 }
  //         )
  //       }
  //     }
  //   )
    
    
  // }
}
