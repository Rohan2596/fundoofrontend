import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/services/note-service';

@Component({
  selector: 'app-reminder-display',
  templateUrl: './reminder-display.component.html',
  styleUrls: ['./reminder-display.component.scss']
})
export class ReminderDisplayComponent implements OnInit {
@Input() notesData: any;
reminderDisplay:string;
// remindNote=this.notesData;
// reminderDisplay1 = this.notesData.reminder;
date:string;
constructor(private snackBar:MatSnackBar,private noteservice:NoteService) { }

  ngOnInit() {
    // this.remindNote;
  this.reminderDisplay = this.notesData.reminder;
console.log("reminder" ,this.notesData);
console.log("REMINDER OF NOES"+this.notesData.reminder)
  }
  remove(){
  console.log("pick a date ")


  this.noteservice.putRequest('notes/deletereminder?noteid='+ this.notesData.id, '').subscribe(
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


}
