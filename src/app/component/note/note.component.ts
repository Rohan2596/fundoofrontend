import { Component, OnInit, } from '@angular/core';
import { NoteService } from 'src/app/services/note-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DataService } from 'src/app/services/data.service';
import { DialogCollabratorsComponent } from '../dialog-collabrators/dialog-collabrators.component';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',

  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
 note: any [];
data: any[];
  message: any;
  constructor(private snackBar: MatSnackBar,
              private noteservice: NoteService,
              private dialog: MatDialog,
              private dataService: DataService ) { }

ngOnInit() {
  this.getNote();
  this.dataService.currentMessage.subscribe(
   (response: any) => {
      this.message = response;
     this.getNote();

   }

    );
  }
  opendialogCollab(id: any): void {
    const dialogRef = this.dialog.open(DialogCollabratorsComponent, {
     minWidth : '200px',minHeight: '250px',
       data: {

        noteId: id,
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result:${result}');
    });

  }

  getNote() {
    this.noteservice.getRequest("getnotes").subscribe(
      (response: any) => {
     this.note = response;
     console.log(response);
      });
  }
openDialog(items: any): void {
  const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { title: items.title,
              description: items.description,
              noteId: items.id,
            color: items.color}
    });
  dialogRef.afterClosed().subscribe(result => {
    console.log('dialog result:${result}');
  });

}
pin(items) {
  console.log('pinned');
  this.noteservice.putRequest('notes/pin?id='+ items.id, "").subscribe(
    (response: any) => {
      if (response.statusCode == 10) {
        this.dataService.changeMessage('pinned notes');
        this.snackBar.open(
          'Note is pinned',
          'Undo'
        );

      } else {
        this.snackBar.open(
          'Note not pinned',
          'undo'
        );

      }
    }
  );
}

}
