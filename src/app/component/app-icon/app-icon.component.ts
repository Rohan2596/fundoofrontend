import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note-service';
import { LabelService } from 'src/app/services/label-service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCollabratorsComponent } from '../dialog-collabrators/dialog-collabrators.component';
@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {
  @Input() noteData?: any;
  // @Output() colorChange:new EventEmitter();
  alllabel?: any[];
  labelofnote?: any[];
  message: any;


  arrayOfColors = [
    [
      { name: 'white', hexcode: '#ffffff' },
      { name: 'lightGreen', hexcode: '#90ee90' },
      { name: 'purple', hexcode: '#800080' },
      { name: 'red', hexcode: '#ff0000' },
    ],
    [
      { name: 'Teal', hexcode: '#008080' },
      { name: 'pink', hexcode: '#ffc0cb' },
      { name: 'orange', hexcode: '#ffa500' },
      { name: 'blue', hexcode: '#0000ff' },
    ],
    [
      { name: 'brown', hexcode: '#a52a2a' },
      { name: 'yellow', hexcode: '#ffff00' },
      { name: 'darkBlue', hexcode: '#00008b' },
      { name: 'gray', hexcode: '#808080' }
    ]
  ];
  constructor(private snackBar: MatSnackBar,
    private noteservice: NoteService,
    private labelsService: LabelService,
    private dataService: DataService,
    private dialog: MatDialog) { }



  ngOnInit() {

    this.getalllabels();
    // this.getAllNoteLabel();


  }

  getalllabels() {
    console.log('note data', this.alllabel);
    this.labelsService.getRequest('getlabels').subscribe(
      (response: any) => {
        this.alllabel = response;

        // console.log(this.alllabel)
      }
    );
  }

  getAllNoteLabel() {
    console.log(this.labelofnote);
    this.labelsService.getRequest('getallNotelabel?noteid=' + this.noteData.id).subscribe(
      (response: any) => {
        this.labelofnote = response;


        console.log(this.labelofnote);
      }
    );
  }
  opendialogCollab(id: any): void {
    const dialogRef = this.dialog.open(DialogCollabratorsComponent, {
      width: '653px',minHeight: '250px',
       data: {

        noteId: id,
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result:${result}');
    });

  }


  trashNote() {
    console.log('note trash');

    this.noteservice.putRequest('notes/trash?id=' + this.noteData.id, '').subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          this.dataService.changeMessage('trashNotes');
          this.snackBar.open(
            'Note moved to trash',
            'undo',
            { duration: 2500 }
          );

        } else {
          this.snackBar.open(
            'Notes trash  failed',
            'undo',
          );
        }

      }
    );

  }

  archive(id) {
    console.log('Note Archive');
    console.log(id);
    this.noteservice.putRequest('notes/archieve?id=' + this.noteData.id, '').subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          this.dataService.changeMessage('archive notes');
          this.snackBar.open(
            'Note moved to Archive',
            'undo',
            { duration: 2500 }
          );

        } else {
          this.snackBar.open(
            'Notes Archive  failed',
            'undo',
            { duration: 2500 }
          );
        }

      }
    );
  }
  addLabelToNote(labels) {
    console.log(labels.labelId, this.noteData.id);
    this.labelsService.putRequest('labels/addnote?labelid=' + labels.labelId + '&noteid=' + this.noteData.id, '').subscribe(

      (response: any) => {
        if (response.statusCode == 11) {

          this.snackBar.open('label added', 'undo', { duration: 2500 });
          this.dataService.changeMessage('add labels');

        } else {
          this.snackBar.open('labels addition FAILED', 'undo', { duration: 2500 });
        }
      }

    );
  }

  setcolors(name) {
    console.log(this.noteData.id);
    this.noteservice.putRequest('notes/setcolor?color=' + name + '&noteid=' + this.noteData.id, '').subscribe(

      (response: any) => {
        if (response.statusCode == 10) {
          this.dataService.changeMessage('add labels');
          this.snackBar.open('color added', 'undo', { duration: 2500 });
        } else {
          this.snackBar.open('color addition FAILED', 'undo', { duration: 2500 });
        }
      }

    );
  }
}
