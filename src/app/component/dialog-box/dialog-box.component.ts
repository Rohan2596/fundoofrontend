import { Component, OnInit, Input, Inject } from '@angular/core';
import { Notes } from '../../models/note';
import { NoteService } from '../../services/note-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  @Input() noteData: any;

  constructor(private snackBar: MatSnackBar,
              private dataservice: DataService,
              private noteservice: NoteService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  note: any;
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  id = this.data.noteId;
  color = this.data.color;
  ngOnInit() {
console.log(this.data.color);
  }


  onClose() {
    console.log('note Udapted');
    console.log('notedid', this.id);
    this.note = {
      title: this.title.value,
      description: this.description.value,
      color: this.color.value
    };
    this.noteservice.putRequest('updatenotes?id=' + this.id, this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          // console.log(response);
          this.dataservice.changeMessage('notes'),
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
      }
    );
    this.note.title = null;
    this.note.description = null;



  }

}
