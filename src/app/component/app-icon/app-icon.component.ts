import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note-service';
import { LabelService } from 'src/app/services/label-service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCollabratorsComponent } from '../dialog-collabrators/dialog-collabrators.component';
import { FormControl } from '@angular/forms';
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
      { name: 'lightGreen', hexcode: '#90EE90' },
      { name: 'purple', hexcode: '#beaded' },
      { name: 'pink', hexcode: '#FFC0CB' },
    ],
    [
      { name: 'Teal', hexcode: '#66cccc' },
      { name: 'pink', hexcode: '#ffc0cb' },
      { name: 'orange', hexcode: '#ffcc99' },
      { name: 'aqua', hexcode: '#00FFFF' },
    ],
    [
      { name: 'burlywood', hexcode: '#DEB887' },
      { name: 'moccasin', hexcode: '#FFE4B5' },
      { name: 'deepskyblue', hexcode: '#00BFFF' },
      { name: 'gray', hexcode: '#808080' }
    ]
  ];
  dateCalendar = new FormControl('');
  constructor(private snackBar: MatSnackBar,
              private noteservice: NoteService,
              private labelsService: LabelService,
              private dataService: DataService,
              private dialog: MatDialog) { }



  ngOnInit() {

    this.getalllabels();
    // this.getAllNoteLabel();


  }
setToday() {

  const date1 = new Date().toDateString();

  const reminder1 = date1 + ', 8:00 ';

  console.log('in reminder1==>', reminder1);
  this.noteservice.putRequest('notes/reminder?date=' + reminder1 + '&noteid=' + this.noteData.id, '').subscribe(
    (response: any) => {
      if (response.statusCode === 10) {
        // this.dataService.changeMessage('trashNotes');
        this.snackBar.open(
          'Reminder added',
          'undo',
          { duration: 2500 }
        );

      } else {
        this.snackBar.open(
          'Reminder Addition   failed',
          'undo',
        );
      }

    }
  );

}
setTomorrow() {
  const days = ['Mon', ' Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
  let date = new Date().toDateString();
  const rewhr = new Date().getDate() + 1;
  date = date.replace(new Date().getDate().toString(), rewhr.toString());
  // console.log("srfas",date);
  date = date.replace(days[new Date().getDay() - 1], days[new Date().getDay()]);
  const remindert = date + ', 8:00 ' ;
  // this.remindChange.emit(reminder1);
  console.log('tommorow reminder==>', remindert);
  this.noteservice.putRequest('notes/reminder?date=' + remindert + '&noteid=' + this.noteData.id, '').subscribe(
    (response: any) => {
      if (response.statusCode === 10) {
        // this.dataService.changeMessage('trashNotes');
        this.snackBar.open(
          'Reminder added',
          'undo',
          { duration: 2500 }
        );

      } else {
        this.snackBar.open(
          'Reminder Addition   failed',
          'undo',
        );
      }

    }
  );
}
setWeekly() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
  let date = new Date().toDateString();
  const rewhr = new Date().getDate() + 7;
  date = date.replace(new Date().getDate().toString(), rewhr.toString());
  // console.log("srfas",date);
  date = date.replace(days[new Date().getDay() - 7], days[new Date().getDay()]);
  const remindert = date + ', 8:00 ' ;
  // this.remindChange.emit(reminder1);
  console.log('tommorow reminder==>', remindert);
  this.noteservice.putRequest('notes/reminder?date=' + remindert + '&noteid=' + this.noteData.id, '').subscribe(
    (response: any) => {
      if (response.statusCode === 10) {
        // this.dataService.changeMessage('trashNotes');
        this.snackBar.open(
          'Reminder added',
          'undo',
          { duration: 2500 }
        );

      } else {
        this.snackBar.open(
          'Reminder Addition   failed',
          'undo',
        );
      }

    }
  );


}
setPickTime() {
  console.log('pick a date ');
  console.log(this.dateCalendar.value);

  this.noteservice.putRequest('notes/reminder?date=' + this.dateCalendar.value + '&noteid=' + this.noteData.id, '').subscribe(
    (response: any) => {
      if (response.statusCode === 10) {
        // this.dataService.changeMessage('trashNotes');
        this.snackBar.open(
          'Reminder added',
          'undo',
          { duration: 2500 }
        );

      } else {
        this.snackBar.open(
          'Reminder Addition   failed',
          'undo',
        );
      }

    }
  );
  this.dateCalendar = null;
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
      width: '653px', minHeight: '250px',
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
        if (response.statusCode === 11) {

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
        if (response.statusCode === 10) {
          this.dataService.changeMessage('add labels');
          this.snackBar.open('color added', 'undo', { duration: 2500 });
        } else {
          this.snackBar.open('color addition FAILED', 'undo', { duration: 2500 });
        }
      }

    );
  }
}
