import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss']
})
export class DialogProfileComponent implements OnInit {

uploadForm: FormGroup;
  constructor(private httpservice: HttpService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<DialogProfileComponent>) { }
    imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        if (this.imageChangedEvent.target.files.length > 0) {
          const file = this.imageChangedEvent.target.files[0];
          this.uploadForm.get('profile').setValue(file);
        }
    }
    imageCropped(event) {
        this.croppedImage = event;

    }

    ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }


  onSubmit() {


    this.httpservice.uploadImage('uploadImage', this.uploadForm.get('profile').value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.dialogRef.close( ' profile dialog closed ' );
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
