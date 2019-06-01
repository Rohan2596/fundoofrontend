import { Component, OnInit, Input, Inject } from '@angular/core';
import { NoteService } from 'src/app/services/note-service';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-collabrators',
  templateUrl: './dialog-collabrators.component.html',
  styleUrls: ['./dialog-collabrators.component.scss']
})
export class DialogCollabratorsComponent implements OnInit {
  @Input() noteData: any;
  ownerUser: string;
   collablist: any [];
  constructor(private noteService: NoteService, private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }
  collabEmail = new FormControl('');
  ngOnInit() {
    this.ownerUser = localStorage.getItem('email');
    this.getcollablist();

  }
  addcollab() {
    console.log('collabrator added', this.collabEmail.value, this.data.noteId);

    this.noteService.putRequest('notes/addcollabrator?collabemailid=' + this.collabEmail.value + '&noteid=' + this.data.noteId, '').subscribe(
      (response: any) => {
        if (response.statusCode === 101) {
                  console.log(response);
                  this.snackBar.open(
           'Collabrator Created',
            'undo',
            { duration: 2500 }

          );

        } else {
          this.snackBar.open(
            'Collabrator not created',
            'undo',
            { duration: 2500 }
          );
        }
      });
  }
  removecollab(emailId) {
    console.log('collabrator removed', emailId, this.data.noteId);

    this.noteService.putRequest('notes/removecollabrator?collabemailid=' + emailId + '&noteid=' + this.data.noteId, '').subscribe(
      (response: any) => {
        if (response.statusCode === 101) {
                  console.log(response);
                  this.snackBar.open(
           'Collabator removed',
            'undo',
            { duration: 2500 }

          );

        } else {
          this.snackBar.open(
            'Collabrator failed',
            'undo',
            { duration: 2500 }
          );
        }
      });
  

  }
getcollablist(){
  this.noteService.getRequest('getallcollablist?noteid=' + this.data.noteId).subscribe(
    (response: any) => {
   this.collablist = response;
   console.log(response);
    });
}

}
