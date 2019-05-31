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
  constructor(private noteService: NoteService, private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any ) { }
  collabEmail = new FormControl('');
  ngOnInit() {
    this.ownerUser = localStorage.getItem('email');
  }
  addcollab() {
    console.log('collabrator added',this.collabEmail.value,this.data);

    this.noteService.putRequest('notes/addcollabrator?collabemailid=' + this.collabEmail + '&noteid=' + this.data, '').subscribe(
      (response: any) => {
        if (response.statusCode === 101) {
          // console.log(response);

          this.snackBar.open(
            'Notes Created',
            'undo',
            { duration: 2500 }

          );

        } else {
          // console.log(response);
          this.snackBar.open(
            'Notes not created',
            'undo',
            { duration: 2500 }
          );
        }
  });
}
}
